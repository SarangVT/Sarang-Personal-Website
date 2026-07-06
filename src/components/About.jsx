export default function About() {
  return (
    <section
      id="about"
      className="relative py-32 pl-[10vw] pr-[5vw] bg-[#121212]"
    >
      <div className="absolute top-0 left-1/2 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#00ADB5]/30 to-transparent" />

      <h2 className="mb-10 text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#00ADB5] via-[#38C7D4] to-[#00ADB5] bg-clip-text text-transparent">
        About
      </h2>

      <div className="max-w-4xl space-y-7 text-lg leading-8 text-gray-300">
        <p>
          I'm a Computer Science undergraduate at{" "}
          <span className="font-medium text-[#00ADB5]">IIT Indore</span> with a
          strong interest in building low-latency, highly scalable, and
          production-grade software. While my journey began with modern web
          development, my curiosity has steadily pulled me deeper into systems
          programming, distributed systems, and performance-oriented
          engineering.
        </p>

        <p>
          I'm currently exploring the lower layers of the software stack,
          learning how efficient software is built, from memory management and
          concurrency to high-performance execution in C and C++. I enjoy
          understanding not just <em>how</em> software works, but <em>why</em> certain design decisions lead to faster, safer, and more reliable
          systems.
        </p>

        <p>
          Outside of development, I regularly solve algorithmic problems to
          sharpen my problem-solving skills. You can find me on{" "}
          <a
            href="https://codeforces.com/profile/ChaseTheCause"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00ADB5] hover:underline"
          >
            Codeforces
          </a>
          ,{" "}
          <a
            href="https://www.codechef.com/users/sarang_thakare"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00ADB5] hover:underline"
          >
            CodeChef
          </a>
          , and{" "}
          <a
            href="https://cses.fi/problemset/user/343821"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00ADB5] hover:underline"
          >
            CSES
          </a>
          , where I continue improving my algorithmic thinking and writing
          efficient solutions.
        </p>

        <p>
          Beyond structured learning, I enjoy building things simply because
          they seem interesting, whether it's an AI experiment, a developer
          utility, a distributed backend, or an idea that starts as a weekend
          project. For me, curiosity has always been the best motivation to
          learn something new.
        </p>
      </div>
    </section>
  );
}