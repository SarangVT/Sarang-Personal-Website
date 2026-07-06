import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "projects", "contact"];
      let current = "hero";

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 200) {
          current = id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["about", "skills", "projects", "contact"];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#121212]/80 backdrop-blur-md shadow-lg z-50">
      <div className="mx-auto flex items-center justify-between px-[8vw] py-5">
        <h1 className="text-[#00ADB5] text-2xl font-bold tracking-wide">
          Sarang Thakare
        </h1>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10 text-lg font-semibold text-gray-300">
          {navItems.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`transition-colors duration-300 hover:text-[#00ADB5] ${
                active === id ? "text-[#00ADB5]" : ""
              }`}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#00ADB5] text-3xl"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-[8vw] pb-6 pt-2 bg-[#121212]/95 backdrop-blur-md">
          {navItems.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setMenuOpen(false)}
              className={`block py-3 text-left text-lg font-semibold transition-colors duration-300 hover:text-[#00ADB5] ${
                active === id ? "text-[#00ADB5]" : "text-gray-300"
              }`}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}