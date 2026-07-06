import { useEffect } from "react";
import { motion } from "framer-motion";

const tagline = [
  "Computer Science Undergraduate at IIT Indore",
  "|",
  "Systems Builder",
  "|",
  "Full Stack Developer",
];

export default function Hero() {
  useEffect(() => {
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) return;

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
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="text-6xl md:text-7xl font-bold text-[#00ADB5] leading-tight"
      >
        Sarang Thakare
      </motion.h1>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              delayChildren: 0.8,
              staggerChildren: 0.15,
            },
          },
        }}
        className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 text-lg md:text-2xl font-medium text-gray-400 max-w-5xl"
      >
        {tagline.map((item, i) => (
          <motion.span
            key={i}
            variants={{
              hidden: {
                opacity: 0,
                y: 6,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }}
            className={
              item === "|"
                ? "text-[#00ADB5]"
                : "whitespace-nowrap"
            }
          >
            {item}
          </motion.span>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{
          delay: 1.7,
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mt-12 h-[2px] w-24 bg-[#00ADB5] origin-left shadow-[0_0_16px_#00ADB5]"
      />

      <motion.a
        href="#projects"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 2,
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mt-10 self-start inline-block whitespace-nowrap font-semibold text-[#00ADB5] border border-[#00ADB5] rounded-md px-5 py-2 text-sm hover:bg-[#00ADB5] hover:text-black transition-all duration-300 shadow-[0_0_8px_#00ADB5] hover:shadow-[0_0_16px_#00ADB5]"
      >
        Explore my work
      </motion.a>
    </section>
  );
}