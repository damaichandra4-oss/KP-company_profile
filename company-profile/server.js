require('dotenv').config();
const express = require('express');
const session = require('express-session');
const mysql = require('mysql2/promise');
const bcrypt = require('bcryptjs');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3001;

// MySQL connection
const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'madinah_computers',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Multer config for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, 'public/uploads'));
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage });

// Middleware
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: process.env.SESSION_SECRET || 'madinah-computers-secret-2026',
    resave: false,
    saveUninitialized: false
}));

// Auth middleware
const requireAuth = (req, res, next) => {
    if (req.session.admin) return next();
    res.redirect('/admin/login');
};

// ==================== PUBLIC ROUTES ====================

// Landing page
app.get('/', async (req, res) => {
    try {
        const [about] = await pool.query('SELECT * FROM about LIMIT 1');
        const [products] = await pool.query('SELECT * FROM products WHERE is_active = 1 ORDER BY sort_order');
        const [services] = await pool.query('SELECT * FROM services WHERE is_active = 1 ORDER BY sort_order');
        const [testimonials] = await pool.query('SELECT * FROM testimonials WHERE is_active = 1');
        
        res.render('landing', {
            about: about[0] || {},
            products,
            services,
            testimonials
        });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

// Contact form submission
app.post('/contact', async (req, res) => {
    try {
        const { name, email, phone, subject, message } = req.body;
        await pool.query(
            'INSERT INTO messages (name, email, phone, subject, message) VALUES (?, ?, ?, ?, ?)',
            [name, email, phone, subject, message]
        );
        res.json({ success: true, message: 'Pesan berhasil dikirim!' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Gagal mengirim pesan' });
    }
});

// API endpoints
app.get('/api/products', async (req, res) => {
    const [products] = await pool.query('SELECT * FROM products WHERE is_active = 1 ORDER BY sort_order');
    res.json(products);
});

app.get('/api/services', async (req, res) => {
    const [services] = await pool.query('SELECT * FROM services WHERE is_active = 1 ORDER BY sort_order');
    res.json(services);
});

// ==================== ADMIN ROUTES ====================

// Admin login page
app.get('/admin/login', (req, res) => {
    res.render('admin/login', { error: null });
});

// Admin login
app.post('/admin/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const [admins] = await pool.query('SELECT * FROM admin WHERE username = ?', [username]);
        
        if (admins.length === 0) {
            return res.render('admin/login', { error: 'Username atau password salah' });
        }
        
        const admin = admins[0];
        const validPassword = await bcrypt.compare(password, admin.password_hash);
        
        if (!validPassword) {
            return res.render('admin/login', { error: 'Username atau password salah' });
        }
        
        req.session.admin = { id: admin.id, username: admin.username };
        res.redirect('/admin');
    } catch (err) {
        console.error(err);
        res.render('admin/login', { error: 'Terjadi kesalahan server' });
    }
});

// Admin dashboard
app.get('/admin', requireAuth, async (req, res) => {
    try {
        const [products] = await pool.query('SELECT COUNT(*) as count FROM products');
        const [services] = await pool.query('SELECT COUNT(*) as count FROM services');
        const [messages] = await pool.query('SELECT COUNT(*) as count FROM messages WHERE is_read = 0');
        const [testimonials] = await pool.query('SELECT COUNT(*) as count FROM testimonials');
        
        res.render('admin/dashboard', {
            admin: req.session.admin,
            stats: {
                products: products[0].count,
                services: services[0].count,
                messages: messages[0].count,
                testimonials: testimonials[0].count
            }
        });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

// Admin products
app.get('/admin/products', requireAuth, async (req, res) => {
    try {
        const [products] = await pool.query('SELECT * FROM products ORDER BY sort_order');
        res.render('admin/products', { admin: req.session.admin, products });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

// Admin add product
app.post('/admin/products', requireAuth, upload.single('image'), async (req, res) => {
    try {
        const { name, description, price, category, is_active, sort_order } = req.body;
        const image_url = req.file ? '/uploads/' + req.file.filename : null;
        
        await pool.query(
            'INSERT INTO products (name, description, price, image_url, category, is_active, sort_order) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [name, description, price, image_url, category, is_active === 'on' ? 1 : 0, sort_order || 0]
        );
        res.redirect('/admin/products');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

// Admin delete product
app.post('/admin/products/:id/delete', requireAuth, async (req, res) => {
    try {
        await pool.query('DELETE FROM products WHERE id = ?', [req.params.id]);
        res.redirect('/admin/products');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

// Admin messages
app.get('/admin/messages', requireAuth, async (req, res) => {
    try {
        const [messages] = await pool.query('SELECT * FROM messages ORDER BY created_at DESC');
        res.render('admin/messages', { admin: req.session.admin, messages });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

// Mark message as read
app.post('/admin/messages/:id/read', requireAuth, async (req, res) => {
    try {
        await pool.query('UPDATE messages SET is_read = 1 WHERE id = ?', [req.params.id]);
        res.json({ success: true });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false });
    }
});

// Admin logout
app.get('/admin/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/admin/login');
});

// Start server
app.listen(PORT, () => {
    console.log(`Madinah Computers server running on http://localhost:${PORT}`);
});
