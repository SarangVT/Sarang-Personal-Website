const skills = [
  "C++ / Algorithms",
  "React / Next.js",
  "Node.js / Express",
  "PostgreSQL / MongoDB",
  "TensorFlow / PyTorch",
  "GraphQL / Apollo",
  "Docker / CI/CD",
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 pl-[10vw] pr-[5vw]">
      <h2 className="text-4xl font-semibold text-[#00ADB5] mb-10">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="bg-[#1c1c1c] py-6 px-4 rounded-xl text-lg hover:bg-[#00ADB5] hover:text-black transition font-medium"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
