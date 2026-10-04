import React from 'react';
import { ArrowRight, Terminal, Award, Download, Languages, Code2, GraduationCap } from 'lucide-react';
import { soundManager } from '../utils/audio';

interface HeroProps {
  onOpenTerminal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTerminal }) => {
  return (
    <section className="relative min-h-[88vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden cyber-grid">
      {/* Ambient background glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[320px] bg-gradient-to-tr from-cyan-500/10 via-blue-600/10 to-indigo-600/10 rounded-full blur-[110px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-[90px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-200 dark:border-cyan-500/30 bg-white/80 dark:bg-cyan-950/40 backdrop-blur-md mb-8 shadow-sm dark:shadow-lg dark:shadow-cyan-950/30">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-mono text-slate-700 dark:text-cyan-300 tracking-wider uppercase font-semibold">
            Open for Engineering Roles & Projects
          </span>
          <span className="text-slate-400 text-xs">•</span>
          <span className="text-xs text-slate-500 dark:text-slate-300">Kolkata, India</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
          Hi, I'm <span className="text-gradient">Abdul Basit Siddiqui</span>.
          <br />
          <span className="text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-700 dark:text-slate-200">
            Full-Stack Engineer & AI Systems Builder.
          </span>
        </h1>

        {/* Narrative Subtitle */}
        <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-600 dark:text-slate-300 mb-10 leading-relaxed font-normal">
          Computer Science undergrad building modern web architectures, resilient Java backends, and 
          conversational AI applications. Co-creator of{' '}
          <strong className="text-amber-600 dark:text-amber-300 font-semibold">Wapsi</strong>, recognized in the{' '}
          <span className="font-semibold underline decoration-amber-400 underline-offset-4 text-slate-900 dark:text-white">
            Top 250 out of 13,000+ engineering teams across India
          </span>.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href="#projects"
            onClick={() => soundManager.playClick()}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-semibold text-sm tracking-wide shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all"
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            onClick={() => {
              soundManager.playClick();
              onOpenTerminal();
            }}
            className="flex items-center gap-2 px-5 py-3 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200 font-mono text-xs hover:border-cyan-500/40 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all shadow-sm"
          >
            <Terminal className="w-4 h-4 text-cyan-500" />
            <span>Terminal (Ctrl+K)</span>
          </button>

          <a
            href="/Abdul_Basit_Siddiqui_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundManager.playClick()}
            className="flex items-center gap-2 px-5 py-3 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200 text-xs font-semibold hover:border-amber-500/40 hover:text-amber-600 dark:hover:text-amber-300 transition-all shadow-sm"
          >
            <Download className="w-4 h-4 text-amber-500" />
            <span>Resume PDF</span>
          </a>

          <a
            href="#contact"
            onClick={() => soundManager.playClick()}
            className="flex items-center gap-2 px-5 py-3 rounded-full bg-transparent border border-slate-300 dark:border-white/10 text-slate-600 dark:text-slate-300 text-xs font-medium hover:border-slate-400 dark:hover:border-white/30 transition-all"
          >
            <span>Get in Touch</span>
          </a>
        </div>

        {/* Quantified Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {/* Metric 1: National Recognition */}
          <div className="glass-panel p-5 rounded-2xl text-left relative overflow-hidden group hover:border-amber-500/40 transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-amber-600 dark:text-amber-400 font-medium">NATIONAL RANK</span>
              <Award className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono tracking-tight">
              Top 250
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Out of 13,000+ teams across India (Wapsi)
            </p>
          </div>

          {/* Metric 2: Multi-lingual AI */}
          <div className="glass-panel p-5 rounded-2xl text-left relative overflow-hidden group hover:border-cyan-500/40 transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-medium">CONVERSATIONAL AI</span>
              <Languages className="w-4 h-4 text-cyan-500" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono tracking-tight">
              23 Languages
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Indic conversational agent ("Munshi ji")
            </p>
          </div>

          {/* Metric 3: Algorithmic Problem Solving */}
          <div className="glass-panel p-5 rounded-2xl text-left relative overflow-hidden group hover:border-emerald-500/40 transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-medium">PROBLEM SOLVING</span>
              <Code2 className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono tracking-tight">
              Med / Hard
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              LeetCode mastery (Graphs, DP, Seg Trees)
            </p>
          </div>

          {/* Metric 4: Academic Background */}
          <div className="glass-panel p-5 rounded-2xl text-left relative overflow-hidden group hover:border-blue-500/40 transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-blue-600 dark:text-blue-400 font-medium">EDUCATION</span>
              <GraduationCap className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono tracking-tight">
              B.Tech '28
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              CSE at St. Thomas' College (MAKAUT)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
