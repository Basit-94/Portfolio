import React from 'react';
import { ArrowUp } from 'lucide-react';
import { soundManager } from '../utils/audio';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    soundManager.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-100/80 dark:bg-[#05080f] border-t border-slate-200 dark:border-white/10 py-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-2">
            <span className="font-mono font-bold text-cyan-600 dark:text-cyan-400 text-sm tracking-wider">
              ABS.DEV
            </span>
            <span className="text-slate-400 dark:text-slate-600">•</span>
            <span className="text-xs text-slate-600 dark:text-slate-400">
              Abdul Basit Siddiqui — Software Engineer & Builder
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1 font-mono">
            Designed & Engineered with React, TypeScript, and Tailwind CSS.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/40 px-3 py-1.5 rounded-full border border-emerald-300 dark:border-emerald-500/30">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Kolkata, IN (IST) • All Systems Operational</span>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-white dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 border border-slate-200 dark:border-white/5 transition-all shadow-sm"
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
