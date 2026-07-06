import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub, FiExternalLink } from "react-icons/fi";

export default function ProjectCard({ index, project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group border-b border-white/10 py-14"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[70px_1fr] gap-8">

        {/* Number */}

        <div>
          <span className="text-5xl font-bold text-white/10 transition duration-300 group-hover:text-[#00ADB5]/50">
            {String(index).padStart(2, "0")}
          </span>
        </div>

        {/* Content */}

        <div>

          {/* Header */}

          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">

            <div>
              <h3 className="text-3xl font-semibold text-white transition duration-300 group-hover:text-[#00ADB5]">
                {project.title}
              </h3>

              <p className="mt-2 text-lg text-gray-400">
                {project.subtitle}
              </p>
            </div>

            <span className="uppercase tracking-[0.25em] text-xs font-semibold text-[#00ADB5] whitespace-nowrap">
              {project.category}
            </span>

          </div>

          {/* Description */}

          <p className="mt-7 max-w-4xl leading-8 text-gray-300">
            {project.description}
          </p>

          {/* Tech */}

          <div className="mt-8 text-[15px] leading-8 text-gray-400">
            <span className="text-white font-medium">Technologies</span>
            <span className="mx-2 text-[#00ADB5]">·</span>
            {project.tech.join(" · ")}
        </div>

          {/* Footer */}

          <div className="mt-10 flex flex-wrap items-center justify-between gap-6">

            <div className="flex gap-8">

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-2 text-gray-400 transition hover:text-[#00ADB5]"
                >
                  <FiGithub />

                  <span>GitHub</span>

                  <FiArrowUpRight className="transition duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                </a>
              )}

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-2 text-gray-400 transition hover:text-[#00ADB5]"
                >
                  <FiExternalLink />

                  <span>Live Demo</span>

                  <FiArrowUpRight className="transition duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                </a>
              )}

            </div>

          </div>

        </div>

      </div>
    </motion.article>
  );
}