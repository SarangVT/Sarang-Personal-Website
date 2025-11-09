export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-[#121212]/80 backdrop-blur-md z-50 flex justify-between items-center px-10 py-4">
      <h1 className="text-[#00ADB5] text-xl font-semibold">Sarang Thakare</h1>
      <nav className="space-x-6 text-gray-300">
        <a href="#about" className="hover:text-[#00ADB5]">About</a>
        <a href="#skills" className="hover:text-[#00ADB5]">Skills</a>
        <a href="#projects" className="hover:text-[#00ADB5]">Projects</a>
        <a href="#contact" className="hover:text-[#00ADB5]">Contact</a>
      </nav>
    </header>
  );
}
