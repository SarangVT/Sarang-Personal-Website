import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";

export default function FeaturedProject({ project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="space-y-14"
    >
      {/* Header */}

      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
        <div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
            {project.title}
          </h2>

          <p className="mt-4 text-2xl text-gray-400">
            {project.subtitle}
          </p>
        </div>

        <span className="uppercase tracking-[0.3em] text-xs font-semibold text-[#00ADB5] whitespace-nowrap">
          {project.category}
        </span>
      </div>

      <div className="h-px w-24 bg-gradient-to-r from-[#00ADB5] to-transparent" />

      {/* Screenshot */}

      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden rounded-3xl border border-white/10 bg-[#181818]"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full object-cover transition duration-700 hover:scale-[1.015]"
        />
      </motion.div>

      {/* Description */}

      <div className="max-w-4xl">
        <p className="text-lg leading-9 text-gray-300">
          {project.description}
        </p>

        <p className="mt-8 text-gray-400 leading-8">
          <span className="font-medium text-white">
            Technologies
          </span>
          <span className="mx-2 text-[#00ADB5]">·</span>
          {project.tech.join(" · ")}
        </p>

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-10 inline-flex items-center gap-2 text-gray-300 transition hover:text-[#00ADB5]"
          >
            <FiGithub />

            <span>View on GitHub</span>

            <FiArrowUpRight className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        )}
      </div>
    </motion.article>
  );
}