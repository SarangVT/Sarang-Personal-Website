const projects = [
  {
    title: "Nidhaan",
    desc: "A healthcare analytics platform leveraging patient records, diagnostic models, and visual dashboards to assist doctors with early disease detection and treatment recommendations.",
    tech: "Next.js, Node.js, PostgreSQL, TensorFlow, Flask",
  },
  {
    title: "Vortex",
    desc: "A cinema experience platform that personalizes movie discovery, reviews, and recommendations using collaborative filtering and NLP-based sentiment analysis.",
    tech: "React, Node.js, MySQL",
  },
  {
    title: "Reinforcement Learning Game Player",
    desc: "An autonomous agent that learns to play strategic grid-based games through Q-learning and policy optimization, achieving near-optimal play through reward-driven exploration.",
    tech: "Python, PyTorch, OpenAI Gym, RL Algorithms",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 pl-[10vw] pr-[5vw] bg-[#121212]">
      <h2 className="text-4xl font-semibold text-[#00ADB5] mb-10">Projects</h2>
      <div className="space-y-10">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-[#1c1c1c] p-8 rounded-xl hover:bg-[#00ADB5] hover:text-black transition"
          >
            <h3 className="text-2xl font-semibold mb-3">{p.title}</h3>
            <p className="mb-3 text-gray-300">{p.desc}</p>
            <p className="text-sm font-medium">Tech Used: {p.tech}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
