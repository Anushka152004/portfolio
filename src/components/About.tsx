import Reveal from "./Reveal";
import { GraduationCap } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal animation="fade-up">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[5px] text-xs text-teal-400 mb-3">
              A brief introduction to who I am and what I do
            </p>

            <h2 className="text-5xl md:text-6xl font-bold text-white">
              Get to{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                know me
              </span>
            </h2>
          </div>
        </Reveal>

        <Reveal animation="scale" delay={150}>
          <div className="gradient-border rounded-3xl p-8 sm:p-12">
            <p className="text-slate-300 leading-relaxed text-lg mb-6">
              I'm{" "}
              <span className="text-cyan-400 font-semibold">
                Anushka Poojari
              </span>
              , an Information Technology graduate with a passion for
              transforming ideas into meaningful digital experiences. I enjoy
              building innovative software solutions that solve real-world
              problems while focusing on clean design, usability, and
              performance.
            </p>
            <p className="text-slate-300 leading-relaxed text-lg mb-6">
              My journey has given me hands-on experience in full-stack
              development, artificial intelligence, and cloud technologies
              through internships, academic projects, and continuous learning. I
              have worked with technologies including{" "}
              <span className="text-teal-400 font-medium">React.js</span>,{" "}
              <span className="text-teal-400 font-medium">Node.js</span>,{" "}
              <span className="text-teal-400 font-medium">JavaScript</span>,{" "}
              <span className="text-teal-400 font-medium">Python</span>,{" "}
              <span className="text-teal-400 font-medium">PostgreSQL</span>, and{" "}
              <span className="text-teal-400 font-medium">MongoDB</span>,
              creating scalable and user-focused solutions that combine
              functionality with modern design.
            </p>
            <p className="text-slate-300 leading-relaxed text-lg mb-6">
              Beyond coding, I'm driven by curiosity, continuous learning, and a
              desire to grow as a software developer. I'm always excited to
              explore emerging technologies, take on new challenges, and build
              solutions that create a positive impact.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 pt-10 border-t border-slate-800">
              {[
                { label: "Degree", value: "B.E. IT" },
                { label: "Location", value: "Mumbai, IN" },
                { label: "Focus", value: "Software Developer" },
              ].map(({ label, value }) => (
                <div key={label} className="group">
                  <div className="text-sm text-slate-500 uppercase tracking-widest mb-3">
                    {label}
                  </div>

                  <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal animation="fade-up" delay={250}>
          <div className="mt-8">
            <div className="gradient-border rounded-3xl p-6 sm:p-8">
              <div className="flex items-center gap-5">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={30} className="text-white" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Bachelor of Engineering (B.E.) – Information Technology
                  </h3>

                  <p className="text-cyan-400 text-lg font-medium mt-1">
                    Don Bosco Institute of Technology, Mumbai
                  </p>

                  <div className="flex flex-wrap items-center gap-3 mt-3">
                    <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm">
                      Mumbai University
                    </span>

                    <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-sm">
                      2022 – 2026
                    </span>

                    <span className="px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm">
                      CGPA: 7.05
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
