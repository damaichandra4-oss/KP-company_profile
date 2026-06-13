import React from "react";

const CardPortfolioDetail = () => {
  const projects = [
    {
      title: "Topographic Survey Package - 6 Titik (Jawa Tengah & Timur)",
      client: "Korea Rural Community Corporation JV PT Indra Karya (Persero)",
      year: "2024",
      duration: "150 Hari",
      contractDate: "01 Agustus 2024",
      handoverDate: "01 Desember 2024",
      image: "/assets/topografi.jpg",
    },
    {
      title: "Pembuatan Leger Jalan Ruas Sungai Guci Danau Cala SP Gardu Tanjung Agung",
      client: "Dinas PUPR Kab. Musi Banyuasin",
      year: "2024",
      duration: "165 Hari",
      contractDate: "15 Juli 2024",
      handoverDate: "29 Desember 2024",
      image: "/assets/jalan-guci.jpg",
    },
    {
      title: "Pengukuran Leger Jalan Sekayu – Muara Teladan – SP Supat",
      client: "Dinas PUPR Kab. Musi Banyuasin",
      year: "2023",
      duration: "150 Hari",
      contractDate: "22 Mei 2023",
      handoverDate: "21 Oktober 2023",
      image: "/assets/musi-banyuasin.jpg",
    },
    {
      title: "Pengukuran & Pemetaan Tanah PTSL Kabupaten Banjarnegara",
      client: "Kementerian ATR/BPN",
      year: "2023",
      duration: "210 Hari",
      contractDate: "24 Februari 2023",
      handoverDate: "24 September 2023",
      image: "/assets/ptsl.jpg",
    },
    {
      title: "Topographic Survey For Package – 3 Di Cipicung Jawa Barat, Cikeusik Jawa Barat, Banjarharjo Jawa Tengah, dan Di Pondok Walu Jawa Timur",
      client: "Korea Rural Community Corporation JV PT Indra Karya (Persero)",
      year: "2022",
      duration: "205 Hari",
      contractDate: "14 April 2022",
      handoverDate: "30 Desember 2022",
      image: "/assets/survey-jabar.jpg",
    },
    {
      title: "Pengukuran Leger Jalan Ruas Jalan Dalam Kota Sekayu",
      client: "Dinas PUPR Kab. Musi Banyuasin",
      year: "2022",
      duration: "120 Hari",
      contractDate: "29 Agustus 2022",
      handoverDate: "26 Desember 2022",
      image: "/assets/sekayu.jpg",
    },
    {
      title: "Pengukuran Topografi dan GCP 200 Titik Seluas 10.000 Ha Wilayah Hambalang Bogor",
      client: "PT. MITIGA Power Management",
      year: "2021",
      duration: "120 Hari",
      contractDate: "02 Februari 2021",
      handoverDate: "30 Mei 2021",
      image: "/assets/hambalang.jpg",
    },
    {
      title: "Pengembangan Aplikasi SSO Kegiatan Pengolahan E-Government di Kabupaten Depok",
      client: "Dinas Komunikasi dan Informatika Kota Depok",
      year: "2021",
      duration: "120 Hari",
      contractDate: "05 April 2021",
      handoverDate: "05 Juli 2021",
      image: "/assets/egov-depok.jpg",
    },
    {
      title: "Pengukuran, Pemetaan, dan Informasi Bidang Tanah Paket-7 (20.000 Bidang Tanah)",
      client: "Kementerian ATR/BPN Kanwil Kalimantan Barat",
      year: "2020",
      duration: "-",
      contractDate: "28 September 2020",
      handoverDate: "24 Februari 2021",
      image: "/assets/ptsl-kalbar.jpg",
    },
    {
      title: "Pengukuran, Pemetaan, dan Informasi Bidang Tanah Provinsi Kalimantan Tengah Lot 5 (40.000 Bidang Tanah)",
      client: "Kementerian ATR/BPN Kanwil Kalimantan Tengah",
      year: "2020",
      duration: "-",
      contractDate: "28 September 2020",
      handoverDate: "19 Februari 2021",
      image: "/assets/ptsl-kalteng.jpg",
    },
    {
      title: "Pemeriksaan Mutu Pekerjaan Pengukuran & Pemetaan Bidang Tanah PTSL Kantah Tulungagung (15.000 Bidang)",
      client: "Kementerian ATR/BPN Kantah Kab. Tulungagung",
      year: "2020",
      duration: "90 Hari",
      contractDate: "26 Mei 2020",
      handoverDate: "07 Juli 2020",
      image: "/assets/tulungagung.jpg",
    },

    {
      title: "Penyusunan Naskah Akademis dan Revisi Rencana Tata Ruang Wilayah (RTRW) Kabupaten Seluma",
      client: "Dinas Pekerjaan Umum, Penataan Ruang Pemerintah Kabupaten Seluma",
      year: "2019",
      duration: "150 Hari",
      contractDate: "24 Juni 2019",
      handoverDate: "21 Desember 2019",
      image: "/assets/seluma.jpg",
    },
    {
      title: "Pengukuran, Pemetaan dan Informasi Bidang Tanah Paket - 1 (20.000 Bidang Tanah) Kabupaten Blitar",
      client: "Kementerian Agraria dan Tata Ruang / Badan Pertanahan Nasional, Kanwil Provinsi Jawa Tengah",
      year: "2018",
      duration: "195 Hari",
      contractDate: "15 Maret 2018",
      handoverDate: "10 September 2018",
      image: "/assets/blitar1.jpg",
    },
    {
      title: "Pengolahan Sistem Informasi Administrasi Kependudukan Kota Depok",
      client: "Pemerintah Kota Depok, Dinas Kependudukan dan Pencatatan Sipil",
      year: "2018",
      duration: "60 Hari",
      contractDate: "27 Maret 2018",
      handoverDate: "27 Mei 2018",
      image: "/assets/depok-disdukcapil.jpg",
    },
    {
      title: "Pengukuran, Pemetaan dan Informasi Bidang Tanah (10.000 Bidang Tanah) Kabupaten Blitar",
      client: "Kementerian Agraria dan Tata Ruang / Badan Pertanahan Nasional, Kanwil Provinsi Jawa Tengah",
      year: "2017",
      duration: "120 Hari",
      contractDate: "07 September 2017",
      handoverDate: "05 Desember 2017",
      image: "/assets/blitar2.jpg",
    },

    {
      title: "Pengolahan Server dan Sistem IT LEMHANAS Republik Indonesia",
      client: "Lembaga Ketahanan Nasional Republik Indonesia",
      year: "2016",
      duration: "180 Hari",
      contractDate: "24 Juni 2016",
      handoverDate: "22 Oktober 2016",
      image: "/assets/lemhanas.jpg",
    },
    {
      title: "Penyusunan Profil dan Video Investasi Sektor Industri Kreatif Kota Depok",
      client: "Badan Penanaman Modal dan Pelayanan Perizinan Terpadu Kota Depok",
      year: "2016",
      duration: "90 Hari",
      contractDate: "02 Agustus 2016",
      handoverDate: "30 Oktober 2016",
      image: "/assets/profil-depok.jpg",
    },
    {
      title: "Kegiatan Updating SIG Perumahan Kota Depok",
      client: "Dinas Tata Ruang dan Permukiman Kota Depok",
      year: "2016",
      duration: "150 Hari",
      contractDate: "18 Juli 2016",
      handoverDate: "15 Oktober 2016",
      image: "/assets/sig-depok.jpg",
    },
    {
      title: "Pemutakhiran Nilai Jual Objek Pajak (NJOP) Kota Bekasi",
      client: "Dinas Pendapatan Daerah Kota Bekasi",
      year: "2016",
      duration: "150 Hari",
      contractDate: "01 September 2016",
      handoverDate: "29 November 2016",
      image: "/assets/njop-bekasi.jpg",
    },
    {
      title: "Jasa Konsultansi Perencanaan Verifikasi Reklame Dengan Titik Koordinat Kota Depok",
      client: "Dinas Tata Ruang dan Permukiman Kota Depok",
      year: "2016",
      duration: "150 Hari",
      contractDate: "14 September 2016",
      handoverDate: "14 November 2016",
      image: "/assets/reklame-depok.jpg",
    },

    {
      title: "Pembangunan Digital Library Lemhanas Republik Indonesia",
      client: "Lembaga Ketahanan Nasional Republik Indonesia",
      year: "2015",
      duration: "150 Hari",
      contractDate: "24 Juni 2015",
      handoverDate: "23 November 2015",
      image: "/assets/digital-library-lemhanas.jpg",
    },
    {
      title: "Belanja Pendataan Bangunan Kecamatan Tapos",
      client: "Dinas Tata Ruang dan Permukiman Kota Depok",
      year: "2015",
      duration: "150 Hari",
      contractDate: "15 September 2015",
      handoverDate: "13 Desember 2015",
      image: "/assets/pendataan-tapos.jpg",
    },

  ];

  return (
    <section className="bg-slate-900 text-white pt-32 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-2 text-center">Portofolio Proyek</h2>
        <p className="text-center text-slate-400 mb-8">
          Berikut adalah beberapa proyek yang telah diselesaikan oleh PT Adinata Sentra Teknika
          dalam berbagai bidang seperti survei, pemetaan, dan telematika di seluruh Indonesia.
        </p>

        {/* Tampilan Tabel untuk Desktop */}
        <div className="overflow-x-auto rounded-2xl shadow-lg hidden md:block">
          <table className="min-w-full text-sm text-slate-300 border border-slate-700">
            <thead className="bg-slate-800 text-slate-100 text-center">
              <tr>
                <th className="py-3 px-4 border border-slate-700">No</th>
                <th className="py-3 px-4 border border-slate-700">Judul Proyek</th>
                <th className="py-3 px-4 border border-slate-700">Klien</th>
                <th className="py-3 px-4 border border-slate-700">Tgl Kontrak</th>
                <th className="py-3 px-4 border border-slate-700">BA. Serah Terima</th>
                <th className="py-3 px-4 border border-slate-700">Durasi</th>
                <th className="py-3 px-4 border border-slate-700">Tahun</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((p, i) => (
                <tr
                  key={i}
                  className="hover:bg-slate-800 transition-colors text-center"
                >
                  <td className="py-3 px-4 border border-slate-700">{i + 1}</td>
                  <td className="py-3 px-4 border border-slate-700 text-left font-medium text-white">
                    {p.title}
                  </td>
                  <td className="py-3 px-4 border border-slate-700 text-left">{p.client}</td>
                  <td className="py-3 px-4 border border-slate-700">{p.contractDate}</td>
                  <td className="py-3 px-4 border border-slate-700">{p.handoverDate}</td>
                  <td className="py-3 px-4 border border-slate-700">{p.duration}</td>
                  <td className="py-3 px-4 border border-slate-700">{p.year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Tampilan Daftar untuk Mobile */}
        <div className="md:hidden mt-8 space-y-6">
          {projects.map((p, i) => (
            <div key={i} className="bg-slate-800 rounded-lg shadow-lg p-4 border border-slate-700">
              <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
              <div className="text-sm text-slate-300 space-y-1">
                <p><span className="font-semibold">No:</span> {i + 1}</p>
                <p><span className="font-semibold">Klien:</span> {p.client}</p>
                <p><span className="font-semibold">Tgl Kontrak:</span> {p.contractDate}</p>
                <p><span className="font-semibold">BA. Serah Terima:</span> {p.handoverDate}</p>
                <p><span className="font-semibold">Durasi:</span> {p.duration}</p>
                <p><span className="font-semibold">Tahun:</span> {p.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardPortfolioDetail;
