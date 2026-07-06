import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useSiteData } from "../context/DataContext";
import { Star, Quote } from "lucide-react";

const Testimonial = () => {
  const reduce = useReducedMotion();
  const { testimonials } = useSiteData();

  if (!testimonials || testimonials.length === 0) return null;

  const fromBottom = {
    hidden: { y: 30, opacity: 0 },
    show: (i = 0) => ({
      y: 0,
      opacity: 1,
      transition: { duration: 0.55, delay: i * 0.06, ease: "easeOut" },
    }),
  };

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  return (
    <section className="bg-gray-50 py-20 px-6 md:px-20 text-gray-900 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? false : "show"}
          viewport={{ once: true, amount: 0.6 }}
          variants={fromBottom}
          custom={0}
        >
          <h2 className="text-cyan-600 font-semibold text-lg uppercase tracking-wider mb-2">
            Testimonials
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900">
            Apa Kata Mereka?
          </h3>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Kepercayaan pelanggan adalah prioritas kami. Berikut adalah pengalaman mereka yang telah menggunakan layanan perbaikan, perakitan, dan produk kami.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 relative border border-gray-100 flex flex-col justify-between"
              variants={fromBottom}
              custom={idx + 2}
            >
              <div>
                <Quote size={40} className="text-cyan-100 absolute top-6 right-6" />
                <div className="flex items-center gap-1 mb-6 text-yellow-400">
                  {[...Array(item.rating || 5)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed italic mb-8 relative z-10">
                  "{item.message}"
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-600 font-bold text-xl flex-shrink-0">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
