export default function About() {
  return (
    <section id="about" className="py-32 pl-[10vw] pr-[5vw] bg-[#121212]">
      <h2 className="text-4xl font-semibold text-[#00ADB5] mb-10">About Me</h2>
      <div className="max-w-3xl text-gray-300 text-lg leading-relaxed space-y-6">
        <p>
          I’m a Computer Science student at IIT Indore, deeply fascinated by
          how systems, intelligence, and data combine to solve real-world
          problems. My academic interests span distributed systems, machine
          learning, and computational finance.
        </p>
        <p>
          I actively participate in competitive programming (Codeforces:{" "}
          <span className="text-[#00ADB5]">1200+ rating</span>) and enjoy pushing
          problem-solving boundaries. I’m also building open-source tools that
          simplify metadata editing, visualization, and automation for
          developers.
        </p>
        <p>
          My goal: build technology that’s both powerful and elegant whether
          it’s for smarter agriculture, adaptive AI models, or real-time trading
          systems.
        </p>
      </div>
    </section>
  );
}
