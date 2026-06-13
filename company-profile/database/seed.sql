-- Seed data for Madinah Computers
USE madinah_computers;

-- Admin user (password: admin123456 - will be hashed by application)
INSERT INTO admin (username, password_hash) VALUES
('admin', '$2a$10$LGm2AY//fVIebnD6I430c.dgvYXLY8ZlvUZQ3jJul7vHM4s6vwc76');

-- About info
INSERT INTO about (company_name, description, address, phone, email, whatsapp, vision, mission, logo_url, services_badge, services_title, services_desc) VALUES
('Madinah Computers', 
'Toko komputer terpercaya di Tangerang. Menyediakan berbagai kebutuhan komputer, laptop, printer, dan aksesoris dengan harga terjangkau dan kualitas terbaik. Melayani service, jual beli, dan rental perangkat komputer.',
'Jl. Raya Tangerang No. 123, Tangerang, Banten 15111',
'021-5551234',
'info@madinahcomputers.co.id',
'628xxxxxxxxxx',
'Menjadi toko komputer terdepan dan terpercaya di wilayah Tangerang yang memberikan solusi teknologi terbaik untuk masyarakat.',
'Menyediakan produk dan layanan berkualitas tinggi dengan harga kompetitif, didukung oleh tenaga ahli berpengalaman dan purna jual yang terjamin.',
'/images/logo.png',
'LAYANAN UNGGULAN',
'Layanan Service Kami',
'Kami menangani berbagai kerusakan laptop, komputer, dan printer dengan teknisi profesional & berpengalaman');

-- Products
INSERT INTO products (name, description, price, image_url, category, sort_order) VALUES
('Laptop ASUS VivoBook 14', 'Laptop ringan dengan prosesor Intel Core i5, RAM 8GB, SSD 512GB. Cocok untuk kebutuhan办公 dan multimedia.', 8500000, '/images/laptop.jpg', 'Laptop', 1),
('PC Desktop Gaming', 'PC Desktop dengan prosesor AMD Ryzen 5, RAM 16GB, GPU GTX 1660 Super. Siap untuk gaming dan editing.', 12000000, '/images/pc-desktop.jpg', 'Desktop', 2),
('Printer Epson L3210', 'Printer multifungsi (print, scan, copy) dengan sistem infus. Hemat tinta, hasil cetak berkualitas.', 2800000, '/images/printer.jpg', 'Printer', 3);

-- Services
INSERT INTO services (name, description, points, icon, image_url, sort_order) VALUES
('SERVICE LAPTOP', 'Berbagai Merk Seperti ASUS, ACER, LENOVO, TOSHIBA, HP, MSI, dll. Dengan Berbagai Macam Kerusakan Mulai dari Software hingga Hardware.', 'Lemot\nMati Total\nNo Display\nGanti IC / Chipset\nReball\nGanti LCD / LED\nGanti Keyboard\nGanti Baterai\nBluescreen\nKena Virus\nUpgrade Ram\nDll', '🔧', '/assets/madinah/banner-laptop.jpg', 1),
('SERVICE KOMPUTER', 'Berbagai Tipe, PC Rakitan, PC All in One & PC branded Seperti ASUS, LENOVO, ACER, HP, dll. Dengan Berbagai Macam Kerusakan.', 'Lemot\nInstal ulang\nMati Total\nNo Display\nService VGA Card\nGanti IC / Chipset\nGanti Hardware\nUpgrade\nBluescreen\nKena Virus\nUpgrade Ram\nDll', '💻', '/assets/gaming/pc-red.jpg', 2),
('SERVICE PRINTER', 'Berbagai Jenis Mulai dari Printer Inkjet, Printer Toner, dan Printer Laserjet. Dengan berbagai merk seperti CANON, EPSON, HP, dll.', 'Mati Total\nBlink\nTidak Bisa Print\nRusak Mekanik\nGanti INFUS\nPasang INFUS\nGanti Cartridge\nDll', '🖨️', '/assets/service/ssd-wd.jpg', 3);

-- Sample testimonials
INSERT INTO testimonials (name, role, message, rating, is_active) VALUES
('Budi Santoso', 'Pelanggan Setia', 'Service di Madinah Computers cepat dan terjangkau. Laptop saya yang rusak bisa diperbaiki dalam 1 hari!', 5, TRUE),
('Siti Rahayu', 'Mahasiswa', 'Beli laptop di sini harga mahasiswa, dapat garansi lagi. Recommended banget!', 5, TRUE),
('Ahmad Fauzi', 'Pengusaha', 'Sudah langganan rental komputer untuk event. Peralatannya bagus dan pelayanannya ramah.', 4, TRUE);
