#!/bin/bash
# Setup Script - Company Profile Madinah Computers
# Jalankan: bash setup.sh

echo "========================================="
echo "  Setup Company Profile Madinah Computers"
echo "========================================="

# 1. Install dependencies
echo ""
echo "[1/5] Installing dependencies..."
cd company-profile
npm install
echo "✅ Dependencies installed"

# 2. Setup MySQL Database
echo ""
echo "[2/5] Setting up database..."
echo "Masukkan password MySQL root (kosongkan jika tidak ada password):"
read -s MYSQL_PASS

if [ -z "$MYSQL_PASS" ]; then
    mysql -u root < ../database/schema.sql
    mysql -u root madinah_computers < ../database/seed.sql
else
    mysql -u root -p"$MYSQL_PASS" < ../database/schema.sql
    mysql -u root -p"$MYSQL_PASS" madinah_computers < ../database/seed.sql
fi

if [ $? -eq 0 ]; then
    echo "✅ Database created & seeded"
else
    echo "❌ Database setup failed! Pastikan MySQL sudah terinstall."
    exit 1
fi

# 3. Create .env file
echo ""
echo "[3/5] Creating .env file..."
cat > .env << EOF
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=$MYSQL_PASS
DB_NAME=madinah_computers
SESSION_SECRET=rahasia123
PORT=3001
EOF
echo "✅ .env created"

# 4. Done
echo ""
echo "========================================="
echo "  ✅ Setup selesai!"
echo "========================================="
echo ""
echo "  Jalankan server:  node server.js"
echo "  Buka browser:     http://localhost:3001"
echo ""
echo "  Admin Panel:"
echo "  URL:      http://localhost:3001/admin/login"
echo "  Username: admin"
echo "  Password: admin123456"
echo ""
echo "========================================="
