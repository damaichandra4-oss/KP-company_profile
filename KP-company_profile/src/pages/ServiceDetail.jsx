import React, { useEffect } from 'react';
import { MapPin, Layers, Factory } from 'lucide-react';

// --- DATA ---
const BIDANG_DATA = [
  ["Pertambangan", "Menghitung volume galian/timbunan; dasar perencanaan engineering; dasar pemetaan geologi & eksplorasi"],
  ["Perkebunan & Kehutanan", "Menentukan batas-batas; dasar perencanaan kebun/hutan"],
  ["Minyak & Gas", "Menentukan jalur pipa; penetapan batas blok minyak & gas"],
  ["Perumahan", "Perencanaan pemukiman & penghitungan galian/timbunan; staking-out kavling"],
  ["Sipil/Konstruksi", "Dasar perencanaan jalan & jembatan; menghitung volume; staking-out jalan"],
  ["Telekomunikasi", "Penentuan perangkat telekomunikasi (tower, STO, R/KP) & rencana pemasangan kabel"],
  ["Daerah/PU", "Perencanaan tata ruang/kota; pengembangan wilayah"],
];

const CORE_SERVICES_DETAIL = [
  {
    id: "topography",
    title: "Pemetaan Topography (Total Station & GPS)",
    icon: Layers,
    desc: "Dengan menggunakan peralatan yang serba elektronis dan digital seperti Total Station dan GPS...",
    points: [
      "Survei topografi akurat.",
      "GPS geodetik untuk titik dasar.",
      "GPS navigasi untuk tracking objek.",
      "Hasil akurat untuk perencanaan engineering.",
    ],
    imagePath: "/assets/servicedetail/topography.jpg",
  },
  {
    id: "bathimetri",
    title: "Survei Bathimetri",
    icon: Factory,
    desc: "Survei perairan seperti sungai, danau, dan laut...",
    points: [
      "Pemetaan kedalaman dan kontur dasar laut.",
      "Mendukung perencanaan pelabuhan.",
      "Menggunakan echo sounder & GPS.",
    ],
    imagePath: "/assets/servicedetail/bathimetri.png",
  },
  {
    id: "gis",
    title: "Geographic Information System (GIS)",
    icon: MapPin,
    desc: "GIS untuk pengumpulan dan penyajian informasi spasial.",
    points: [
      "Perencanaan wilayah berbasis data spasial.",
      "Aplikasi GIS untuk instansi & pendidikan.",
      "Analisis spasial untuk infrastruktur.",
    ],
    imagePath: "/assets/servicedetail/gis.png",
  },
];

// --- KOMPONEN UTAMA ---
export default function ServiceDetail() {

  // 🧩 memastikan page mulai dari atas
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = "auto";
    document.documentElement.style.overflow = "auto";
  }, []);

  // === DIUBAH: ServicePointCard tanpa arrow, non-interactive style ===
  const ServicePointCard = ({ point }) => (
    <div className="p-4 bg-gray-50 rounded-xl shadow-sm border border-gray-100">
      <p className="text-sm text-gray-700">{point}</p>
    </div>
  );

  return (
    <main className="bg-gray-50 text-gray-800 pt-24 pb-20 min-h-screen overflow-y-auto">
      {/* HEADER */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 tracking-tight">Service dan Produk</h1>
        <p className="text-center text-gray-600 mt-2 text-xs md:text-sm">
          Survei & Pemetaan • GIS • Pengolahan Data • Konsultansi Teknis & Konstruksi • Telekomunikasi
        </p>
      </section>

      {/* RINGKASAN */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 mt-8">
        {/* Tampilan Tabel untuk Desktop */}
        <div className="overflow-x-auto mt-8 shadow-xl rounded-2xl border border-gray-200 hidden md:block">
          <table className="min-w-[700px] w-full text-sm">
            <thead className="bg-sky-600/10 text-sky-800">
              <tr>
                <th className="px-4 py-3 text-left font-bold w-1/4">Bidang</th>
                <th className="px-4 py-3 text-left font-bold">Kegunaan</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {BIDANG_DATA.map((row, i) => (
                <tr key={i} className="odd:bg-white even:bg-gray-50 hover:bg-sky-50 transition">
                  <td className="px-4 py-3 font-semibold">{row[0]}</td>
                  <td className="px-4 py-3">{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Tampilan Daftar untuk Mobile */}
        <div className="md:hidden mt-8 space-y-4">
          {BIDANG_DATA.map((row, i) => (
            <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              <p className="font-semibold text-gray-900 mb-1">{row[0]}</p>
              <p className="text-sm text-gray-700">{row[1]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DETAIL */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 mt-16">
        {CORE_SERVICES_DETAIL.map((service, i) => (
          <div key={service.id} className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-sky-500 mb-12">
            <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 flex items-center gap-3 border-b-2 border-gray-100 pb-3 mb-6">
              <service.icon size={28} className="text-sky-600" />
              {i + 1}. {service.title}
            </h3>

            <div className="grid md:grid-cols-5 gap-4 md:gap-8 items-start">
              <div className="md:col-span-3 space-y-4 text-justify leading-relaxed text-gray-700">
                <p className="text-base md:text-lg font-semibold text-gray-800 mb-3">{service.desc}</p>

                {/* === DIUBAH: tampilan poin sekarang non-interactive grid tanpa ikon === */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.points.map((point, j) => (
                    <ServicePointCard key={j} point={point} />
                  ))}
                </div>
              </div>

              <div className="md:col-span-2">
                <img
                  src={service.imagePath}
                  alt={service.title}
                  className="w-full h-auto rounded-xl shadow-lg object-cover border border-gray-200 max-h-[250px] md:max-h-[400px]"
                />
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
