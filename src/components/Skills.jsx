const skillGroups = [
  {
    title: "Development",
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "GraphQL",
      "Apollo",
      "FastAPI",
    ],
  },
  {
    title: "Systems & Infrastructure",
    skills: [
      "C",
      "C++",
      "Linux",
      "Docker",
      "Nginx",
      "PM2",
      "Git",
      "CI/CD",
    ],
  },
  {
    title: "Databases",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
    ],
  },
  {
    title: "Artificial Intelligence",
    skills: [
      "Python",
      "TensorFlow",
      "PyTorch",
    ],
  },
  {
    title: "Computer Science",
    skills: [
      "Algorithms",
      "Data Structures",
      "Distributed Systems",
      "System Design",
    ],
  },
  {
    title: "Professional",
    skills: [
      "Leadership",
      "Communication",
      "Problem Solving",
      "Team Collaboration",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#121212] py-32 pl-[10vw] pr-[5vw]"
    >
      <h2 className="mb-16 text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#00ADB5] via-[#38CDD5] to-[#00ADB5] bg-clip-text text-transparent">
        Expertise
      </h2>

      <div className="max-w-5xl space-y-12">
        {skillGroups.map((group, index) => (
          <div key={group.title}>
            <h3 className="mb-5 text-xl font-semibold text-white">
              {group.title}
            </h3>

            <div className="flex flex-wrap gap-4">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="
                    rounded-full
                    border
                    border-[#2a2a2a]
                    bg-[#191919]
                    px-5
                    py-2.5
                    text-[15px]
                    font-medium
                    text-gray-300
                    transition-all
                    duration-300
                    hover:border-[#00ADB5]
                    hover:bg-gradient-to-r
                    hover:from-[#00ADB5]/10
                    hover:to-[#38CDD5]/10
                    hover:text-white
                  "
                >
                  {skill}
                </span>
              ))}
            </div>

            {index !== skillGroups.length - 1 && (
              <div className="mt-12 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}