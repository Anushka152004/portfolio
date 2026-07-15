import { ArrowDown, Download } from "lucide-react";
import passportPhoto from "../assests/passport_photo.jpeg";
import resume from "../assests/Resume.pdf";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-slate-800/20 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#0d9488 1px, transparent 1px), linear-gradient(90deg, #0d9488 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-medium mb-6 animate-fade-in-up"
              style={{ opacity: 0 }}
            >
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              Available for opportunities
            </div>

            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4 animate-fade-in-up delay-100"
              style={{ opacity: 0 }}
            >
              Hi, I'm{" "}
              <span className="text-gradient block">Anushka Poojari</span>
            </h1>

            <p
              className="text-xl text-slate-400 mb-2 font-light animate-fade-in-up delay-200"
              style={{ opacity: 0 }}
            >
              Software Developer, Full Stack Developer & Technology Enthusiast
            </p>
            <p
              className="text-slate-500 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up delay-300"
              style={{ opacity: 0 }}
            >
              Building meaningful digital experiences with a passion for
              innovation, thoughtful problem-solving, and continuous growth.
            </p>

            <div
              className="flex gap-3 justify-center lg:justify-start animate-fade-in-up delay-500"
              style={{ opacity: 0 }}
            >
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                View my Work
              </a>
              <a
                href={resume}
                download="Anushka_Poojari_Resume.pdf"
                className="px-6 py-3 rounded-xl border border-slate-700 text-slate-300 font-semibold hover:bg-slate-800 transition-all flex items-center gap-2"
              >
                <Download size={18} />
                Download Resume
              </a>
            </div>
          </div>

          {/* Avatar / visual */}
          <div
            className="flex-shrink-0 flex flex-col items-center gap-6 animate-fade-in-up delay-300"
            style={{ opacity: 0 }}
          >
            <div className="relative animate-float">
              <div className="w-64 h-64 rounded-3xl bg-gradient-to-br from-cyan-400 to-teal-600 p-1 animate-pulse-glow">
                <div className="w-full h-full rounded-[22px] bg-slate-900 overflow-hidden">
                  <img
                    src={passportPhoto}
                    alt="Anushka"
                    className="w-full h-full object-cover object-center filter saturate-125 brightness-95 transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-xs font-semibold text-cyan-400 shadow-lg"></div>
              <div className="absolute -bottom-4 -left-4 px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-xs font-semibold text-teal-400 shadow-lg"></div>
            </div>

            {/* Stats */}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-600 animate-bounce">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown size={14} />
        </div>
      </div>
    </section>
  );
}
