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
        if (el && window.scrollY >= el.offsetTop - 200) current = id;
      });
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["about", "skills", "projects", "contact"];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#121212]/80 backdrop-blur-md z-50 py-4 shadow-md">
      <div className="flex justify-between items-center px-[8vw]">
        <h1 className="text-[#00ADB5] font-bold text-lg">Sarang Thakare</h1>

        {/* Desktop Links */}
        <div className="hidden sm:flex space-x-6 text-gray-300 font-bold">
          {navItems.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`hover:text-[#00ADB5] transition ${
                active === id ? "text-[#00ADB5]" : ""
              }`}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div
          className="sm:hidden text-[#00ADB5] text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="sm:hidden flex flex-col items-center bg-[#121212] pb-4">
          {navItems.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setMenuOpen(false)}
              className={`py-2 text-gray-300 font-semibold ${
                active === id ? "text-[#00ADB5]" : ""
              }`}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
