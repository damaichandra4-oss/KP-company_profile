import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { HashLink } from "react-router-hash-link";
import { useLocation, useNavigate, Link } from "react-router-dom"; // Import Link and useNavigate

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const location = useLocation();
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 10);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparentPaths = ["/", "/portfolio"];
  const pathname = location.pathname;
  const isOnTransparentPage = transparentPaths.includes(pathname);
  const isTransparent = isOnTransparentPage && !scrolled;

  const linkColor = isTransparent ? "text-white" : "text-sky-700";
  const linkHover = isTransparent ? "hover:text-sky-200" : "hover:text-sky-500";
  const logoColor = isTransparent ? "text-white" : "text-sky-700";

  const handleContactClick = (e) => {
    e.preventDefault(); // Prevent default HashLink behavior
    setOpen(false); // Close mobile menu if open

    if (location.pathname !== "/") {
      // If not on homepage, navigate to homepage first
      navigate("/", { state: { scrollToContact: true } });
    } else {
      // If already on homepage, just scroll
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Effect to scroll to contact after navigating to homepage
  useEffect(() => {
    if (location.pathname === "/" && location.state?.scrollToContact) {
      const timer = setTimeout(() => { // Add a small delay
        const element = document.getElementById("contact");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // 100ms delay

      // Clear the state to prevent scrolling again on subsequent homepage visits
      window.history.replaceState({}, document.title, window.location.pathname);
      return () => clearTimeout(timer);
    }
  }, [location]);


  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isTransparent ? "bg-transparent" : "bg-white shadow-md"
      } ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}
    >
      <div className="container mx-auto px-6 md:px-14 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="/assets/logo/logo_adinata.png" alt="Logo" className="h-10 w-10" />
          <h1
            className={`text-lg md:text-2xl font-semibold whitespace-nowrap ${logoColor}`}
          >
            PT ADINATA SENTRA TEKNIKA
          </h1>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden transition-colors ${linkColor}`}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menu desktop */}
        <ul className={`hidden md:flex gap-10 font-medium ${linkColor}`}>
          <li>
            <HashLink smooth to="/#home" className={`transition ${linkHover}`}>
              Home
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#about" className={`transition ${linkHover}`}>
              About
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              to="/#service"
              className={`transition ${linkHover}`}
            >
              Service
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              to="/#portfolio"
              className={`transition ${linkHover}`}
            >
              Portfolio
            </HashLink>
          </li>
          <li>
            <Link // Changed from HashLink to Link
              to="/#contact" // Keep the hash for consistency, though it's handled by handleClick
              onClick={handleContactClick}
              className={`px-5 py-2 rounded-full font-semibold border transition-all duration-200 ${
                isTransparent
                  ? "border-white text-white hover:bg-white hover:text-sky-700"
                  : "border-sky-700 text-sky-700 hover:bg-sky-700 hover:text-white"
              }`}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

      {/* Menu mobile */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-[380px] opacity-100" : "max-h-0 opacity-0"
        } ${isTransparent ? "bg-black/60 backdrop-blur-md" : "bg-white"}`}
      >
        <ul
          className={`flex flex-col items-center gap-4 py-4 font-medium ${
            isTransparent ? "text-white" : "text-sky-700"
          }`}
        >
          <li>
            <HashLink smooth to="/#home" onClick={() => setOpen(false)}>
              Home
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#about" onClick={() => setOpen(false)}>
              About
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#service" onClick={() => setOpen(false)}>
              Service
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#portfolio" onClick={() => setOpen(false)}>
              Portfolio
            </HashLink>
          </li>
          <li>
            <Link // Changed from HashLink to Link
              to="/#contact" // Keep the hash for consistency, though it's handled by handleClick
              onClick={handleContactClick}
              className={`px-5 py-2 rounded-full font-semibold border transition-all duration-200 ${
                isTransparent
                  ? "border-white text-white hover:bg-white hover:text-sky-700"
                  : "border-sky-700 text-sky-700 hover:bg-sky-700 hover:text-white"
              }`}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
