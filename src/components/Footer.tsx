import { Code2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/50 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center">
            <Code2 size={14} className="text-slate-950" />
          </div>
          <span className="text-sm text-slate-400">
            <span className="text-white font-semibold">Anushka Poojari</span> —
            Portfolio
          </span>
        </div>

        <p className="text-xs text-slate-500">
          © 2024 Anushka Poojari. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
