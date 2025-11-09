import { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.className = "glitter-cursor";
    document.body.appendChild(cursor);

    const move = (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };
    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
      cursor.remove();
    };
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center pl-[10vw] pr-[5vw] pt-24 relative"
    >
      <h1 className="text-6xl font-bold text-[#00ADB5] leading-tight">
        Hey, I’m Sarang Thakare 👋
      </h1>

      <p className="mt-6 text-lg text-gray-300 max-w-2xl">
        Computer Science undergradate at IIT Indore. I build intelligent systems,
        explore research in SLMs, and love experimenting with holographic and
        AI-driven tech.
      </p>
    <a
    href="#projects"
    className="mt-10 self-start inline-block whitespace-nowrap font-semibold text-[#00ADB5] border border-[#00ADB5] rounded-md px-5 py-2 text-sm hover:bg-[#00ADB5] hover:text-black transition-all duration-300 shadow-[0_0_8px_#00ADB5] hover:shadow-[0_0_16px_#00ADB5]"
    >
    Explore my work
    </a>
    </section>
  );
}