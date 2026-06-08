@echo off
echo ========================================
echo   Setup Madinah Computers - XAMPP
echo ========================================
echo.

REM Check XAMPP MySQL
if exist "C:\xampp\mysql\bin\mysql.exe" (
    set MYSQL=C:\xampp\mysql\bin\mysql.exe
    echo [OK] XAMPP MySQL ditemukan
) else (
    echo [ERROR] XAMPP tidak ditemukan di C:\xampp
    echo Pastikan XAMPP sudah terinstall!
    pause
    exit /b 1
)

REM Install dependencies
echo.
echo [1/4] Installing dependencies...
cd company-profile
call npm install
if %errorlevel% neq 0 (
    echo [ERROR] npm install gagal! Pastikan Node.js terinstall.
    pause
    exit /b 1
)
echo [OK] Dependencies installed

REM Setup database
echo.
echo [2/4] Creating database...
%MYSQL% -u root < ..\database\schema.sql
if %errorlevel% neq 0 (
    echo [ERROR] Schema gagal! Pastikan XAMPP MySQL sudah running.
    pause
    exit /b 1
)
echo [OK] Database created

REM Seed data
echo.
echo [3/4] Seeding data...
%MYSQL% -u root madinah_computers < ..\database\seed.sql
if %errorlevel% neq 0 (
    echo [ERROR] Seed gagal!
    pause
    exit /b 1
)
echo [OK] Data seeded

REM Create .env
echo.
echo [4/4] Creating config...
(
    echo DB_HOST=localhost
    echo DB_USER=root
    echo DB_PASSWORD=
    echo DB_NAME=madinah_computers
    echo PORT=3001
    echo SESSION_SECRET=rahasia123
) > .env
echo [OK] Config created

echo.
echo ========================================
echo   Setup selesai!
echo ========================================
echo.
echo   Jalankan server:  node server.js
echo   Buka browser:     http://localhost:3001
echo.
echo   Admin Panel:
echo   URL:      http://localhost:3001/admin/login
echo   Username: admin
echo   Password: admin123456
echo.
echo ========================================
pause
