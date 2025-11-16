// src/components/Portfolio.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Pemetaan Topografi Tambang",
    img: "assets/tls/tlsbg.png",
    client: "PT Bukit Mineral",
    year: "2024",
  },
  {
    title: "Survey Lahan Pembangunan PLTU",
    img: "assets/uav/1.png",
    client: "PT Energi Nusantara",
    year: "2023",
  },
  {
    title: "GIS & Mapping Infrastruktur Kota",
    img: "assets/jalan/jalan1.png",
    client: "Pemkab Bandung",
    year: "2023",
  },
  {
    title: "Survey Jalur Telekomunikasi Fiber",
    img: "assets/perkebunan/1.jpg",
    client: "PT Telkom Akses",
    year: "2022",
  },
];

const Portfolio = () => {
  const navigate = useNavigate();

  const handlePortfolioDetail = () => {
    navigate("/portfolio");
  };

  return (
    <div>
      <div className="min-h-screen bg-gray-900 py-24 px-6 md:px-20 text-white">
        <div className="max-w-6xl mx-auto">
          {/* Header section */}
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-cyan-400 font-semibold text-lg uppercase tracking-wide">
              Portfolio
            </h2>
            <h3 className="text-2xl md:text-4xl font-bold mb-4">
              Proyek & Pengalaman Kami
            </h3>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Berikut beberapa proyek yang telah kami kerjakan bersama klien
              dari sektor pertambangan, energi, telekomunikasi, dan
              pemerintahan.
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
            {projects.map((item, index) => (
              <motion.div
                key={index}
                onClick={handlePortfolioDetail}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                  ease: "easeOut",
                }}
                viewport={{ once: true, amount: 0.2 }}
                className="rounded-xl overflow-hidden bg-white/10 backdrop-blur-sm shadow-lg hover:-translate-y-2 transition-transform duration-300 border border-white/20 cursor-pointer"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-white">
                  <h4 className="text-lg font-semibold">{item.title}</h4>
                  <p className="text-sm text-gray-300 mt-1">{item.client}</p>
                  <p className="text-xs text-gray-400">{item.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tombol Learn More dengan animasi */}
        <motion.div
          className="flex items-center justify-center py-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
            delay: 0.4,
          }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Link
            to="/portfolio"
            className="bg-white text-gray-900 font-semibold py-2 px-4 rounded-lg hover:bg-gray-200 transition mb-12 shadow-lg hover:shadow-xl hover:scale-105 duration-300"
          >
            Learn More
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
