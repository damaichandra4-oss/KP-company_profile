import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Globe, MapPin } from "lucide-react";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const MotionFooter = isHomePage ? "footer" : motion.footer;
  const MotionDiv = isHomePage ? "div" : motion.div;

  return (
    <MotionFooter
      id="contact"
      className="bg-[#0b0b0b] text-gray-300 text-[12px] md:text-[13px] leading-tight border-t border-gray-800"
      {...(!isHomePage && {
        initial: { opacity: 0, y: 28 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: "easeOut" },
        viewport: { once: true },
      })}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 md:py-6 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
        {/* Kolom 1 */}
        <div>
          <div className="flex items-center gap-2.5 mb-1">
            <img src="/assets/logo/logo_adinata.png" alt="Logo" className="h-7 w-7 object-contain" />
            <h2 className="text-sky-500 font-bold text-[13px] md:text-[13px]">
              PT. ADINATA SENTRA TEKNIKA
            </h2>
          </div>

          <div className="space-y-2">
            {/* Alamat kantor */}
            <div className="flex items-start gap-2">
              <MapPin size={12} className="text-sky-500 mt-0.5" />
              <p className="text-gray-400">
                Perkantoran PFN Jalan Otista<br />
                No. 125-127 Kel. Bidara Cina<br />
                Kec. Jatinegara – Jakarta Timur
              </p>
            </div>

            {/* Workshop + Telp */}
            <div className="flex items-start gap-2">
              <MapPin size={12} className="text-sky-500 mt-0.5" />
              <div className="flex flex-col text-gray-400">
                <p>
                  Workshop : Ruko Wisma Angsana Blok S No. 2 Pejaten Jakarta Selatan
                </p>
                <p>
                  Telp : (021) 80452367, 081314511980, 081545331429
                </p>
                <div className="flex items-start gap-2 -ml-5 mt-0.5">
                <Mail size={12} className="text-sky-500" />
                <a href="asetadinata1@gmail.com" className="hover:text-sky-400">
                  asetadinata1@gmail.com
                  
                </a>
                <a href="info@aset.co.id" className="hover:text-sky-400">
                  info@aset.co.id
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Kolom 2 */}
        <div>
          <h3 className="text-white font-semibold mb-1.5 text-[13px]">Contact Person</h3>
          <ul className="space-y-1.5">
            <li>
              <span className="text-white font-medium">Arko Widodo</span>
              <div className="flex items-center gap-1.5">
                <Phone size={12} className="text-sky-500" />
                <span>+62 813-5870-2787</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail size={12} className="text-sky-500" />
                <a href="mailto:geotarkowidodo@gmail.com" className="hover:text-sky-400">
                  geotarkowidodo@gmail.com
                </a>
              </div>
            </li>

            <li>
              <span className="text-white font-medium">Handoyo</span>
              <div className="flex items-center gap-1.5">
                <Phone size={12} className="text-sky-500" />
                <span>+62 815-4533-1429 / +62 812-8433-7891</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail size={12} className="text-sky-500" />
                <a href="mailto:handoyo_yunda@yahoo.co.id" className="hover:text-sky-400">
                  handoyo_yunda@yahoo.co.id
                </a>
              </div>
            </li>

            <li>
              <span className="text-white font-medium">Dadan Hamdani</span>
              <div className="flex items-center gap-1.5">
                <Phone size={12} className="text-sky-500" />
                <span>+81 3145 191980</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail size={12} className="text-sky-500" />
                <a href="mailto:dadanh04@gmail.com" className="hover:text-sky-400">
                  dadanh04@gmail.com
                </a>
              </div>
            </li>
          </ul>
        </div>

        {/* Kolom 3 */}
        <div>
          <h3 className="text-white font-semibold mb-1.5 text-[13px]">Partner</h3>
          <ul className="space-y-1.5">
            <li>
              <span className="text-sky-500 font-bold block text-[13px]">
                PT. CAKRABUMI ENVIRODATA
              </span>
              <div className="flex items-center gap-1.5">
                <Globe size={12} className="text-sky-500" />
                <a
                  href="https://cakrabumi.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-sky-400"
                >
                  www.cakrabumi.com
                </a>
              </div>
            </li>
            <li>
              <span className="text-sky-500 font-bold block text-[13px]">
                PT. SANGGA BUANA NUSANTARA
              </span>
              <div className="flex items-center gap-1.5">
                <Globe size={12} className="text-sky-500" />
                <a
                  href="https://sanggabuananusantara.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-sky-400"
                >
                  www.sanggabuananusantara.com
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <MotionDiv
        className="border-t border-gray-800 text-center text-gray-500 py-2 text-[11px]"
        {...(!isHomePage && {
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          transition: { delay: 0.15, duration: 0.6 },
        })}
      >
        © {new Date().getFullYear()} PT. Adinata Sentra Teknika — All Rights Reserved.
      </MotionDiv>
    </MotionFooter>
  );
};

export default Footer;
