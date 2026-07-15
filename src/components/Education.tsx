import { GraduationCap, Calendar } from "lucide-react";
import Reveal from "./Reveal";

const education = [
  {
    degree: "Bachelor of Engineering — Information Technology",
    institution: "Mumbai University",
    period: "2021 — 2024",
    grade: "CGPA: 8.5/10",
    description:
      "Coursework in Data Structures, DBMS, Operating Systems, Computer Networks, Software Engineering, and Web Technologies.",
  },
  {
    degree: "Higher Secondary Certificate (HSC) — Science",
    institution: "Maharashtra State Board",
    period: "2019 — 2021",
    grade: "Percentage: 85%",
    description:
      "Specialized in Physics, Chemistry, and Mathematics with Computer Science as elective.",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Maharashtra State Board",
    period: "2019",
    grade: "Percentage: 90%",
    description:
      "Completed secondary education with distinction, excelling in Mathematics and Science.",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <Reveal animation="fade-up">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium mb-4">
              <GraduationCap size={12} /> Education
            </div>
            <h2 className="section-title">Academic Background</h2>
            <p className="section-subtitle">My educational journey</p>
          </div>
        </Reveal>

        <div className="relative pl-8 space-y-8">
          {/* Timeline line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-cyan-500 via-teal-500/50 to-transparent" />

          {education.map((edu, idx) => (
            <Reveal key={idx} animation="fade-left" delay={idx * 120}>
              <div className="relative">
                {/* Dot */}
                <div className="absolute -left-[33px] top-1.5 w-3 h-3 rounded-full bg-teal-400 ring-4 ring-slate-950" />

                <div className="card-hover bg-slate-900/50 rounded-2xl p-6 border border-slate-800/50 hover:border-slate-700">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <h3 className="text-white font-semibold text-base leading-snug">
                      {edu.degree}
                    </h3>
                    <span className="flex items-center gap-1.5 text-xs text-slate-500 whitespace-nowrap">
                      <Calendar size={12} /> {edu.period}
                    </span>
                  </div>
                  <p className="text-cyan-400 text-sm font-medium mb-2">
                    {edu.institution}
                  </p>
                  <span className="inline-block px-2.5 py-1 rounded-md bg-teal-500/10 text-teal-400 text-xs font-semibold mb-3">
                    {edu.grade}
                  </span>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
