import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  CheckCircle2,
} from "lucide-react";
import Reveal from "./Reveal";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 4000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal animation="fade-up">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[5px] text-xs text-teal-400 mb-3">
              Let's Build Something Amazing Together{" "}
            </p>

            <h2 className="text-5xl md:text-6xl font-bold text-white">
              Get In{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Touch{" "}
              </span>
            </h2>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact info */}
          <Reveal animation="fade-right" delay={100}>
            <div className="space-y-4">
              <a
                href="mailto:anushkapoojari2004@gmail.com"
                className="card-hover flex items-center gap-4 bg-slate-900/50 rounded-2xl p-5 border border-slate-800/50 hover:border-slate-700 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-slate-950" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider mb-0.5">
                    Email
                  </div>
                  <div className="text-sm text-slate-200 font-medium group-hover:text-cyan-400 transition-colors">
                    anushkapoojari2004@gmail.com
                  </div>
                </div>
              </a>

              <a
                href="tel:+918928033349"
                className="card-hover flex items-center gap-4 bg-slate-900/50 rounded-2xl p-5 border border-slate-800/50 hover:border-slate-700 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-slate-950" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider mb-0.5">
                    Phone
                  </div>
                  <div className="text-sm text-slate-200 font-medium group-hover:text-teal-400 transition-colors">
                    +91-8928033349
                  </div>
                </div>
              </a>

              <div className="card-hover flex items-center gap-4 bg-slate-900/50 rounded-2xl p-5 border border-slate-800/50 hover:border-slate-700 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-slate-950" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider mb-0.5">
                    Location
                  </div>
                  <div className="text-sm text-slate-200 font-medium group-hover:text-cyan-400 transition-colors">
                    Mumbai, Maharashtra, India
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="flex gap-3 pt-2">
                <a
                  href="https://github.com/Anushka152004"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-800/80 border border-slate-700/50 text-slate-300 hover:text-white hover:bg-slate-700 transition-all text-sm font-medium"
                >
                  <Github size={18} /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/anushka-poojari-a72832354/"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-800/80 border border-slate-700/50 text-slate-300 hover:text-white hover:bg-slate-700 transition-all text-sm font-medium"
                >
                  <Linkedin size={18} /> LinkedIn
                </a>
              </div>
            </div>
          </Reveal>

          {/* Contact form */}
          <Reveal animation="fade-left" delay={200}>
            <div className="bg-slate-900/50 rounded-2xl p-6 sm:p-8 border border-slate-800/50">
              {sent ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <CheckCircle2 size={56} className="text-teal-400 mb-4" />
                  <h3 className="text-white font-semibold text-lg mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-slate-400 text-sm">
                    Thanks for reaching out. I'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs text-slate-400 uppercase tracking-wider mb-2 font-medium">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700/50 text-slate-200 text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 uppercase tracking-wider mb-2 font-medium">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700/50 text-slate-200 text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 uppercase tracking-wider mb-2 font-medium">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700/50 text-slate-200 text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-all resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-semibold hover:opacity-90 transition-opacity disabled:opacity-60"
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-slate-950/30 border-t-slate-950 rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} /> Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
