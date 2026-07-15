import { Trophy, Cloud, Gamepad2 } from "lucide-react";
import Reveal from "./Reveal";

const certifications = [
  {
    icon: Cloud,
    title: "Microsoft Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    color: "from-sky-500 to-cyan-500",
    points: [
      "Earned the Microsoft Certified: Azure Fundamentals (AZ-900) certification.",
      "Learned Azure cloud architecture, core services, security, governance, and pricing.",
      "Validated foundational knowledge of cloud computing and Microsoft Azure services.",
    ],
  },

  {
    icon: Gamepad2,
    title: "Published Mobile Game",
    color: "from-cyan-500 to-teal-500",
    points: [
      "Designed and developed 'Flappy Rocket' using Unity.",
      "Successfully published the game on the Google Play Store.",
      "Implemented game mechanics, UI, animations, and gameplay logic.",
    ],
  },

  {
    icon: Trophy,
    title: "Hackathon Participant",
    color: "from-purple-500 to-pink-500",
    points: [
      "Actively participated in multiple hackathons and innovation challenges conducted by various colleges.",
      "Designed and developed project prototypes addressing real-world problems within limited timeframes.",
      "Strengthened skills in teamwork, full-stack development, ideation, and technical presentations under competitive environments.",
    ],
  },
];
export default function Certifications() {
  return (
    <section id="achievements" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal animation="fade-up">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[5px] text-xs text-teal-400 mb-3">
              Recognition and certifications I've earned
            </p>

            <h2 className="text-5xl md:text-6xl font-bold text-white">
              Milestones &{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Certifications
              </span>
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;

            return (
              <Reveal key={cert.title} animation="scale" delay={index * 120}>
                <div className="group h-full rounded-3xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm p-8 hover:border-teal-400/40 transition-all duration-300 hover:-translate-y-2">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center mb-8 shadow-lg`}
                  >
                    <Icon className="text-white" size={28} />
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">
                    {cert.title}
                  </h3>

                  <p className="text-slate-500 mb-8">{cert.issuer}</p>

                  <div className="space-y-5">
                    {cert.points.map((point) => (
                      <p key={point} className="text-slate-400 leading-8">
                        {point}
                      </p>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
