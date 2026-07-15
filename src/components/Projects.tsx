import { CheckCircle2, Shield, Brain, HeartPulse, Users } from "lucide-react";
import Reveal from "./Reveal";

const projects = [
  {
    category: "GIS Platform",
    featured: true,
    title: "SafePath",
    subtitle:
      "Smart GIS-Based Vulnerability Mapping & Evacuation Route Planner",
    icon: Shield,
    points: [
      "Developed an intelligent flood-response platform with interactive GIS maps.",
      "Integrated PostGIS and Leaflet for real-time vulnerability mapping.",
      "Implemented shortest and safest evacuation route planning using OSRM.",
      "Added nearby shelters, hospitals, chatbot assistance, and secure authentication.",
    ],
    tech: [
      "React.js",
      "Node.js",
      "PostgreSQL",
      "PostGIS",
      "Leaflet",
      "Express.js",
    ],

    github: "#",
    color: "cyan",
  },

  {
    category: "Artificial Intelligence",
    featured: true,
    title: "AI Interview Platform",
    subtitle: "Real-time AI Powered Mock Interview Platform",
    icon: Brain,
    points: [
      "Built a voice-enabled AI interview platform using Vapi AI.",
      "Integrated Google Gemini API for generating interview questions.",
      "Implemented Firebase Authentication and Firestore database.",
      "Created a dashboard to track interview history and performance.",
    ],
    tech: ["Next.js", "Tailwind CSS", "Firebase", "Gemini API", "Vapi AI"],
    github: "#",
    color: "purple",
  },

  {
    category: "Machine Learning",
    featured: false,
    title: "Multiple Disease Prediction System",
    subtitle: "AI Based Healthcare Prediction Platform",
    icon: HeartPulse,
    points: [
      "Predicted Diabetes, Heart Disease and Parkinson's Disease.",
      "Applied Machine Learning models using Scikit-learn.",
      "Preprocessed healthcare datasets for better prediction accuracy.",
      "Developed an interactive Streamlit web application.",
    ],
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Streamlit"],
    github: "#",
    color: "green",
  },

  {
    category: "Full Stack",
    featured: false,
    title: "Maid Hiring System",
    subtitle: "Online Maid Hiring & Management Platform",
    icon: Users,
    points: [
      "Developed a complete full-stack web application.",
      "Implemented secure login and role-based authentication.",
      "Managed maid profiles, bookings and customer requests.",
      "Designed responsive UI with modern React components.",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    github: "#",
    color: "orange",
  },
];

const badgeColors = {
  cyan: "from-cyan-500 to-blue-500",
  purple: "from-purple-500 to-pink-500",
  green: "from-green-500 to-emerald-500",
  orange: "from-orange-500 to-red-500",
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal animation="fade-up">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[5px] text-xs text-teal-400 mb-3">
              A selection of projects I've built
            </p>

            <h2 className="text-5xl md:text-6xl font-bold text-white">
              Featured Projects &{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Work Samples
              </span>
            </h2>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <Reveal key={project.title} animation="scale" delay={index * 120}>
                <div
                  className="group h-full flex flex-col rounded-3xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm p-8
transition-all duration-300 ease-out
hover:-translate-y-2
hover:scale-[1.02]
hover:border-teal-400/40
hover:shadow-2xl
hover:shadow-cyan-500/10"
                >
                  {" "}
                  <div className="flex justify-between items-start mb-8">
                    <div className="flex items-center gap-4 mt-auto">
                      <div
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${badgeColors[project.color as keyof typeof badgeColors]} flex items-center justify-center shadow-lg`}
                      >
                        <Icon className="text-white" size={24} />
                      </div>

                      <div>
                        <p className="text-xs uppercase tracking-widest text-slate-500">
                          {project.category}
                        </p>

                        <h3 className="text-3xl font-bold text-white mt-1 group-hover:text-teal-400 transition-colors">
                          {project.title}
                        </h3>

                        <p className="text-slate-400 mt-2">
                          {project.subtitle}
                        </p>
                      </div>
                    </div>

                    {project.featured && (
                      <span className="px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-teal-400 text-xs font-semibold">
                        Featured
                      </span>
                    )}
                  </div>
                  <ul className="space-y-4 mb-8 flex-grow">
                    {project.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <CheckCircle2
                          size={18}
                          className=" text-teal-400mt-0.5 flex-shrink-0"
                        />
                        <span className="text-slate-300 leading-relaxed">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-medium hover:border-cyan-500 hover:text-teal-400 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {/* Buttons
                  <div className="flex items-center gap-4 mt-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-700 text-slate-300 hover:border-cyan-500 hover:text-cyan-400 transition-all"
                    >
                      <Github size={18} />
                      Source Code
                    </a>
                  </div> */}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
