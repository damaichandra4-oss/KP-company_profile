import React from "react";
import { motion } from "framer-motion";
// Impor gambar menggunakan path relatif dari Hero.jsx ke folder src/assets
import HeroBackground from '../assets/bg.jpg';

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center h-[70vh] md:h-[90vh] flex items-center"
      style={{ backgroundImage: `url(${HeroBackground})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 text-white px-6 md:px-20 max-w-2xl">
        {/* Animasi judul: muncul dari samping (kiri -> kanan) */}
        <motion.h1
          className="text-3xl md:text-6xl font-bold leading-tight mb-4"
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 90, damping: 14, duration: 0.6 }}
        >
          Kami Survei <br /> Kami Sajikan
        </motion.h1>

        {/* Animasi paragraf: sedikit delay sehingga terasa berurutan */}
        <motion.p
          className="text-base md:text-xl mb-6"
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.12, duration: 0.45 }}
        >
          Menjadi Perusahaan Jasa Konsultansi yang Profesional dan Terpercaya di sisi Kualitas SDM, Pelayanan dan Kinerja Perusahaan.
        </motion.p>

        {/* Tombol juga masuk dengan sedikit pop */}
        <motion.a
          href="#about"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full transition"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.35 }}
        >
          Learn More
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
