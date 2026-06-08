export const DEFAULT_HERO = {
  heading: "Solusi Laptop & Komputer Terpercaya",
  subtitle:
    "Jual & Beli Laptop, Rakit PC Gaming, Perbaikan, CCTV & SmartHome. Melayani dengan profesional sejak 2015.",
};

export const DEFAULT_ABOUT = {
  label: "About",
  heading: "Tentang Madinah Computers",
  description:
    "Madinah Computers adalah toko komputer terpercaya yang berlokasi di Pasar Sentral Land, Parung Panjang. Kami menyediakan layanan jual beli laptop & komputer, perakitan PC gaming & office, perbaikan komputer & laptop, pemasangan CCTV & SmartHome, serta maintenance & service panggilan. Didukung oleh teknisi berpengalaman dan produk berkualitas dari brand ternama seperti ASUS, Lenovo, HP, MSI, dan lainnya.",
  image1: "/assets/madinah/toko-dalam-1.jpg",
  image2: "/assets/madinah/toko-dalam-2.jpg",
};

export const DEFAULT_SERVICES = [
  {
    id: "jual-beli",
    title: "Jual & Beli Laptop dan Komputer",
    cover: "/assets/madinah/banner-laptop.jpg",
    gallery: [
      "/assets/madinah/laptop-thinkpad.jpg",
      "/assets/madinah/laptop-lenovo.jpg",
      "/assets/madinah/laptop-hp.jpg",
    ],
    desc: "Menyediakan laptop baru & bekas dari brand ternama seperti Lenovo, ASUS, HP, Acer, MSI, Dell. Tersedia juga komputer desktop untuk kebutuhan kantor dan gaming.",
    points: [
      "Laptop baru & bekas bergaransi.",
      "Brand ternama: Lenovo, ASUS, HP, Acer, MSI, Dell.",
      "Harga kompetitif & bisa cicilan 0%.",
      "Konsultasi gratis sebelum beli.",
    ],
  },
  {
    id: "rakit-pc",
    title: "Perakitan PC Gaming & Office",
    cover: "/assets/gaming/pc-white.jpg",
    gallery: [
      "/assets/gaming/pc-red.jpg",
      "/assets/gaming/setup-1.jpg",
      "/assets/gaming/setup-4.jpg",
    ],
    desc: "Jasa perakitan PC custom sesuai kebutuhan dan budget Anda. Dari PC office ringan hingga PC gaming high-end dengan RGB lighting.",
    points: [
      "Konsultasi spek gratis.",
      "Perakitan rapi dan profesional.",
      "Garansi hardware.",
      "Cable management premium.",
    ],
  },
  {
    id: "perbaikan",
    title: "Perbaikan Komputer & Laptop",
    cover: "/assets/madinah/toko-dalam-2.jpg",
    gallery: [
      "/assets/service/ssd-wd.jpg",
      "/assets/madinah/laptop-asus.jpg",
      "/assets/madinah/laptop-advan.jpg",
    ],
    desc: "Layanan perbaikan komputer dan laptop oleh teknisi berpengalaman. Perbaikan hardware maupun software, upgrade komponen, dan instalasi sistem.",
    points: [
      "Diagnosa gratis.",
      "Perbaikan hardware & software.",
      "Upgrade RAM, SSD, dan komponen lainnya.",
      "Installasi OS dan aplikasi.",
    ],
  },
  {
    id: "cctv",
    title: "Pasang CCTV & SmartHome",
    cover: "/assets/service/cctv-install.jpg",
    gallery: [
      "/assets/service/network-rack.jpg",
      "/assets/service/server-rack.jpg",
      "/assets/service/bppt-exhibition.jpg",
    ],
    desc: "Jasa pemasangan CCTV dan sistem SmartHome untuk rumah, kantor, dan gedung. Monitoring dari smartphone, kualitas HD, dan garansi pemasangan.",
    points: [
      "Survey lokasi gratis.",
      "CCTV HD & Night Vision.",
      "Monitoring via smartphone.",
      "Garansi pemasangan & perangkat.",
    ],
  },
  {
    id: "maintenance",
    title: "Maintenance & Service Panggilan",
    cover: "/assets/service/cctv-install.jpg",
    gallery: [
      "/assets/madinah/toko-depan-1.jpg",
      "/assets/madinah/toko-depan-2.jpg",
      "/assets/madinah/toko-dalam-1.jpg",
    ],
    desc: "Layanan maintenance berkala dan service panggilan untuk kantor, sekolah, dan instansi. Teknisi datang ke lokasi Anda.",
    points: [
      "Teknisi datang ke lokasi.",
      "Maintenance berkala.",
      "Kontrak service untuk instansi.",
      "Respon cepat dan profesional.",
    ],
  },
];

export const DEFAULT_SOFTWARE = [
  {
    id: "driverpack",
    title: "DriverPack Solution",
    version: "17.11.104",
    size: "~26 GB",
    category: "Driver",
    icon: "🔧",
    desc: "Solusi install driver otomatis untuk semua jenis laptop dan PC. Mendeteksi hardware secara otomatis dan menginstall driver yang dibutuhkan.",
    points: [
      "Auto-detect hardware.",
      "Database driver lengkap.",
      "Offline mode tersedia.",
      "Support Windows 7/10/11.",
    ],
    downloadUrl: "https://drp.su/updates",
    image: "/assets/service/ssd-wd.jpg",
  },
  {
    id: "win11",
    title: "Windows 11 Pro",
    version: "24H2",
    size: "~5.5 GB",
    category: "Operating System",
    icon: "🪟",
    desc: "Installer Windows 11 Pro resmi dari Microsoft. File ISO original, bisa langsung dijadikan bootable USB.",
    points: [
      "Official ISO dari Microsoft.",
      "Support UEFI & Legacy.",
      "Bisa dipakai berulang.",
      "Aktivasi terpisah diperlukan.",
    ],
    downloadUrl: "https://www.microsoft.com/software-download/windows11",
    image: "/assets/madinah/laptop-thinkpad.jpg",
  },
  {
    id: "office365",
    title: "Microsoft Office 365",
    version: "Latest",
    size: "~4 GB",
    category: "Productivity",
    icon: "📊",
    desc: "Paket lengkap Microsoft Office: Word, Excel, PowerPoint, Outlook, dan lainnya. Download langsung dari server Microsoft.",
    points: [
      "Word, Excel, PowerPoint, Outlook.",
      "Update otomatis.",
      "Cloud storage 1TB.",
      "Install di 5 perangkat.",
    ],
    downloadUrl: "https://www.microsoft.com/microsoft-365/download",
    image: "/assets/madinah/laptop-hp.jpg",
  },
  {
    id: "ccleaner",
    title: "CCleaner Professional",
    version: "6.30",
    size: "~50 MB",
    category: "Utility",
    icon: "🧹",
    desc: "Tool pembersih dan optimizer PC. Bersihkan file sampah, registry, dan tingkatkan performa komputer Anda.",
    points: [
      "Bersihkan file temporary.",
      "Registry cleaner.",
      "Startup manager.",
      "Real-time monitoring.",
    ],
    downloadUrl: "https://www.ccleaner.com/ccleaner/download",
    image: "/assets/gaming/pc-red.jpg",
  },
  {
    id: "wintoys",
    title: "WinToys",
    version: "2.2.8",
    size: "~15 MB",
    category: "Utility",
    icon: "⚙️",
    desc: "Aplikasi tweaking Windows all-in-one. Optimasi, debloat, dan customize Windows dengan mudah.",
    points: [
      "One-click debloat.",
      "Privacy settings.",
      "Performance tweaks.",
      "UI customization.",
    ],
    downloadUrl: "https://github.com/builtbybel/WinToys/releases",
    image: "/assets/gaming/setup-1.jpg",
  },
  {
    id: "ventoy",
    title: "Ventoy",
    version: "1.0.99",
    size: "~18 MB",
    category: "Bootable Tool",
    icon: "💾",
    desc: "Buat bootable USB yang bisa menampung banyak ISO sekaligus. Tinggal copy file ISO, tidak perlu format ulang.",
    points: [
      "Multi-ISO dalam 1 USB.",
      "Support UEFI & Legacy.",
      "Tidak perlu extract ISO.",
      "Gratis & open source.",
    ],
    downloadUrl: "https://www.ventoy.net/en/download.html",
    image: "/assets/service/network-rack.jpg",
  },
];

export const DEFAULT_BIDANG_DATA = [
  ["Laptop & Komputer", "Jual beli laptop baru & bekas, komputer desktop, aksesoris, dan spare part"],
  ["Perakitan PC", "Rakit PC custom untuk gaming, editing, office sesuai budget dan kebutuhan"],
  ["Perbaikan", "Service hardware & software laptop dan komputer, upgrade komponen"],
  ["CCTV & SmartHome", "Pemasangan CCTV, smart lock, smart home system untuk rumah dan kantor"],
  ["Networking", "Instalasi jaringan LAN, WiFi, server rack untuk kantor dan instansi"],
  ["Maintenance", "Kontrak maintenance berkala untuk kantor, sekolah, dan gedung"],
  ["Konsultasi", "Konsultasi gratis pemilihan perangkat sesuai kebutuhan dan budget"],
];

export const DEFAULT_CORE_SERVICES = [
  {
    id: "jual-beli",
    title: "Jual & Beli Laptop dan Komputer",
    iconName: "Laptop",
    desc: "Tersedia laptop baru & bekas dari brand ternama dengan harga kompetitif dan garansi resmi.",
    points: [
      "Laptop baru & bekas bergaransi.",
      "Brand: Lenovo, ASUS, HP, Acer, MSI, Dell.",
      "Cicilan 0% tersedia.",
      "Trade-in laptop lama.",
    ],
    imagePath: "/assets/madinah/banner-laptop.jpg",
  },
  {
    id: "rakit-pc",
    title: "Perakitan PC Gaming & Office",
    iconName: "Monitor",
    desc: "Jasa perakitan PC custom dari budget hingga high-end dengan komponen pilihan terbaik.",
    points: [
      "Konsultasi spesifikasi gratis.",
      "Komponen original & bergaransi.",
      "Cable management rapi.",
      "Testing sebelum serah terima.",
    ],
    imagePath: "/assets/gaming/pc-red.jpg",
  },
  {
    id: "perbaikan",
    title: "Perbaikan & Upgrade Komputer",
    iconName: "Wrench",
    desc: "Teknisi berpengalaman siap memperbaiki dan mengupgrade perangkat Anda.",
    points: [
      "Diagnosa gratis.",
      "Ganti layar, keyboard, SSD, RAM.",
      "Install ulang OS & software.",
      "Recovery data.",
    ],
    imagePath: "/assets/service/ssd-wd.jpg",
  },
];

export const DEFAULT_FOOTER = {
  companyName: "MADINAH COMPUTERS",
  logoPath: "/assets/logo/logo_madinahcomputers.png",
  officeAddress: "Sentraland Boulevard Blok RA33\nParung Panjang",
  workshopAddress: "Sentraland Boulevard Blok RA33, Parung Panjang",
  phones: ["0811-1112-369"],
  emails: ["madinahcomputers@gmail.com"],
  contactPersons: [
    {
      name: "Admin Madinah",
      phone: "0811-1112-369",
      email: "madinahcomputers@gmail.com",
    },
  ],
  partners: [],
};
