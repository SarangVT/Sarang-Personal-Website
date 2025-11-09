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
      className="relative z-10 py-48 pl-[10vw] pr-[5vw] bg-[#121212]"
    >
      <h2 className="text-4xl font-semibold text-[#00ADB5] mb-14">
        Projects
      </h2>

      <div className="relative z-0">
        <div className="overflow-x-visible overflow-y-visible hide-scrollbar">
          <div className="flex space-x-8 pb-4 relative z-10">
            {projects.map((p, i) => (
              <div
                key={i}
                className="min-w-[360px] max-w-[400px] bg-[#1c1c1c] p-8 rounded-xl flex-shrink-0 transition-transform duration-300 relative hover:scale-[1.03] hover:z-30 hover:shadow-[0_0_35px_6px_#00ADB5]"
              >
                <h3 className="text-2xl font-semibold text-[#00ADB5] mb-4">
                  {p.title}
                </h3>
                <p className="text-gray-300 text-base leading-relaxed mb-5">
                  {p.desc}
                </p>
                <div className="text-md font-bold text-gray-400">
                  <span className="text-[#00ADB5] font-semibold">Tech Used:</span>{" "}
                  {p.tech}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute top-0 left-0 h-full w-10 bg-gradient-to-r from-[#121212] to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 h-full w-10 bg-gradient-to-l from-[#121212] to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
