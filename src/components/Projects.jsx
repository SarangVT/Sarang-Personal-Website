const projects = [
  {
    title: "Nidhaan",
    desc: "A healthcare analytics platform leveraging patient records, diagnostic models, and visual dashboards to assist doctors with early disease detection and treatment recommendations. The system also integrates real-time data feeds from wearable devices for continuous health monitoring.",
    tech: "Next.js, Node.js, PostgreSQL, GraphQL, Websockets, Docker, Meilisearch",
  },
  {
    title: "Vortex",
    desc: "A cinema experience platform that personalizes movie discovery and recommendation using collaborative filtering and NLP sentiment analysis. Includes user reviews, watchlists, and a smart ranking engine for trending titles.",
    tech: "React, Node.js, MySQL",
  },
  {
    title: "Reinforcement Learning Game Player",
    desc: "An autonomous agent capable of playing grid-based strategy games. It learns through Q-learning and policy optimization, exploring reward spaces to achieve near-optimal strategies over time with minimal supervision.",
    tech: "Python, PyTorch, OpenAI Gym, RL Algorithms",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative z-10 py-32 px-[8vw] bg-[#121212]"
    >
      <h2 className="text-3xl sm:text-4xl font-semibold text-[#00ADB5] mb-10">
        Projects
      </h2>

      {/* Wrapper */}
      <div className="relative">
        {/* Scrollable Row (desktop) / Column (mobile) */}
        <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-8 sm:space-y-0 overflow-x-auto sm:overflow-visible hide-scrollbar">
          {projects.map((p, i) => (
            <div
              key={i}
              className="w-full sm:min-w-[320px] sm:max-w-[380px] bg-[#1c1c1c] p-6 sm:p-8 rounded-xl flex-shrink-0 hover:scale-[1.02] hover:shadow-[0_0_25px_4px_#00ADB5] transition-transform duration-300 relative z-10"
            >
              <h3 className="text-2xl font-semibold text-[#00ADB5] mb-3">
                {p.title}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                {p.desc}
              </p>
              <div className="text-xs sm:text-sm font-medium text-gray-400">
                <span className="text-[#00ADB5] font-semibold">Tech Used:</span>{" "}
                {p.tech}
              </div>
            </div>
          ))}
        </div>

        {/* gradient edges (desktop only) */}
        <div className="hidden sm:block absolute top-0 left-0 h-full w-10 bg-gradient-to-r from-[#121212] to-transparent pointer-events-none" />
        <div className="hidden sm:block absolute top-0 right-0 h-full w-10 bg-gradient-to-l from-[#121212] to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
