import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

const contacts = [
  {
    title: "Email",
    value: "sarangvthakare1@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=sarangvthakare1@gmail.com",
    icon: FaEnvelope,
  },
  {
    title: "GitHub",
    value: "github.com/SarangVT",
    href: "https://github.com/SarangVT",
    icon: FaGithub,
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/sarang-v-thakare",
    href: "https://www.linkedin.com/in/sarang-v-thakare/",
    icon: FaLinkedinIn,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#121212] py-32 pl-[10vw] pr-[5vw]"
    >
      <div className="max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#00ADB5] via-[#38CDD5] to-[#00ADB5] bg-clip-text text-transparent">
          Let's Connect
        </h2>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-400">
          Great software often begins with a simple conversation. If you have a
          cool idea in mind, let's connect, we'll give it our absolute best to
          turn it into reality. Even if you simply enjoy discussing technology,
          systems, or engineering, I'd be happy to connect and see where the
          conversation leads.
        </p>

        <div className="mt-16 max-w-3xl">
          {contacts.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border-b border-white/10 py-7 transition-colors duration-300 hover:border-[#00ADB5]/40"
              >
                <div className="flex items-center gap-5">
                  <Icon className="text-lg text-[#00ADB5] transition-transform duration-300 group-hover:scale-110" />

                  <div>
                    <p className="text-xl font-medium text-white transition-colors duration-300 group-hover:text-[#00ADB5]">
                      {item.title}
                    </p>

                    <p className="mt-1 text-gray-500 transition-colors duration-300 group-hover:text-gray-300">
                      {item.value}
                    </p>
                  </div>
                </div>

                <FiArrowUpRight className="text-xl text-gray-500 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#00ADB5]" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}