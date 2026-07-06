import FeaturedProject from "./Projects/FeaturedProject";
import ProjectCard from "./Projects/ProjectCard";
import { projects } from "./Projects/projects";

export default function Projects() {
  const [featured, ...others] = projects;

  return (
    <section
      id="projects"
      className="bg-[#121212] py-32 pl-[10vw] pr-[5vw]"
    >
      <div className="max-w-7xl">

        {/* Heading */}

        <h2 className="mb-16 text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#00ADB5] via-[#38CDD5] to-[#00ADB5] bg-clip-text text-transparent">
          Selected Work
        </h2>

        {/* Featured */}

        <div className="mb-28">
          <p className="uppercase tracking-[0.35em] text-xs font-semibold text-gray-500 mb-8">
            Featured Project
          </p>

          <FeaturedProject project={featured} />
        </div>

        {/* Divider */}

        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-20" />

        {/* Other Projects */}

        <div>

          <p className="uppercase tracking-[0.35em] text-xs font-semibold text-gray-500 mb-12">
            More Projects
          </p>

          {others.map((project, index) => (
            <ProjectCard
              key={project.title}
              index={index + 2}
              project={project}
            />
          ))}

        </div>
      </div>
    </section>
  );
}