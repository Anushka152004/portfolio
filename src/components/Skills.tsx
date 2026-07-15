import {
  Code2,
  LayoutGrid,
  Server,
  Database,
  Bot,
  BookOpen,
  PenTool,
} from "lucide-react";
import Reveal from "./Reveal";

const skillCategories = [
  {
    icon: Code2,
    title: "Programming Languages",
    color: "from-cyan-400 to-blue-500",
    skills: ["JavaScript", "Java", "Python", "C++", "SQL", "HTML", "CSS"],
  },
  {
    icon: LayoutGrid,
    title: "Frontend",
    color: "from-teal-400 to-emerald-500",
    skills: ["React.js", "Next.js", "Express.js", "Tailwind CSS"],
  },
  {
    icon: Server,
    title: "Backend",
    color: "from-sky-400 to-indigo-500",
    skills: ["Node.js", "Express.js", "REST APIs", "Firebase Authentication"],
  },
  {
    icon: Database,
    title: "Databases",
    color: "from-amber-400 to-orange-500",
    skills: ["MongoDB", "MySQL", "Firebase", "PostgreSQL", "PostGIS"],
  },
  {
    icon: Bot,
    title: "AI & ML",
    color: "from-rose-400 to-pink-500",
    skills: ["TensorFlow", "Scikit-learn", "Pandas", "NumPy", "OpenAI API"],
  },

  {
    icon: BookOpen,
    title: "Concepts",
    color: "from-violet-400 to-purple-500",
    skills: [
      "DSA",
      "OOP",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
      "Cloud Computing",
      "Software Engineering",
    ],
  },
  {
    icon: PenTool,
    title: "Tools & Platforms",
    color: "from-rose-400 to-pink-500",
    skills: ["Git", "GitHub", "Azure", "Firebase", "Postman", "VS Code"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal animation="fade-up">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[5px] text-xs text-teal-400 mb-3">
              Technologies and tools I work with
            </p>

            <h2 className="text-5xl md:text-6xl font-bold text-white">
              Technical{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Expertise
              </span>
            </h2>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map(({ icon: Icon, title, color, skills }, idx) => (
            <Reveal key={title} animation="fade-up" delay={idx * 100}>
              <div
                className="
    group
    h-full
    bg-slate-900/50
    rounded-2xl
    p-6
    border
    border-slate-800/50
    transition-all
    duration-300
    ease-out
    hover:-translate-y-2
    hover:scale-[1.02]
    hover:border-teal-400/40
    hover:shadow-2xl
    hover:shadow-cyan-500/10
  "
              >
                {" "}
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-5`}
                >
                  <Icon size={22} className="text-slate-950" />
                </div>
                <h3 className="text-white font-semibold mb-4 text-base">
                  {title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg bg-slate-800/80 text-slate-300 text-xs font-medium border border-slate-700/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
