import { useEffect, useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("hero");

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

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#121212]/80 backdrop-blur-md z-50 py-4 shadow-md">
      <div className="flex justify-between items-center px-[10vw]">
        <h1 className="text-[#00ADB5] font-semibold text-lg tracking-wide">Sarang Thakare</h1>
        <div className="space-x-6 text-gray-300 font-bold">
          {["about", "skills", "projects", "contact"].map((id) => (
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
      </div>
    </nav>
  );
}
