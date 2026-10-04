import React, { useState } from 'react';
import { ExternalLink, Trophy, ArrowUpRight, CheckCircle2, Sparkles, X } from 'lucide-react';
import { GithubIcon } from './Icons';
import { soundManager } from '../utils/audio';

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Flagship AI' | 'Full-Stack' | 'Algorithms' | 'Python & Tools';
  featured: boolean;
  award?: string;
  metrics?: string;
  description: string;
  longDescription: string;
  architecturePoints: string[];
  techStack: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const projectsData: ProjectItem[] = [
    {
      id: 'wapsi',
      title: 'Wapsi (वापसी) — AI Tax Intelligence Platform',
      subtitle: 'Conversational Tax Filing & Refund Engine across 23 Languages',
      category: 'Flagship AI',
      featured: true,
      award: '🏆 Top 250 out of 13,000+ Teams Across India',
      metrics: '23 Indic Languages • 100% Conversational • Multi-tier Form 16 Parser',
      description:
        'A breakthrough conversational tax platform tailored for first-time salary earners. Powered by "Munshi ji", an AI CA that eliminates confusing forms by reading employer-reported data, verifying rebates, and speaking 23 languages.',
      longDescription:
        'Wapsi addresses the steep intimidation barrier faced by millions filing their first tax returns in India. Instead of confronting users with confusing multi-page ITR schedules, Wapsi introduces "Munshi ji"—a friendly, localized AI tax concierge that initiates a human dialogue in 23 languages. Munshi ji cross-checks Form 16 deductions, simulates returns under both Old and New regimes, identifies unclaimed rebates (Section 87A, HRA, 80C), and displays transparent audit trails for every rupee before filing.',
      architecturePoints: [
        'Multi-lingual conversational flow engine supporting 23 Indian languages with phonetic transliteration.',
        'Intelligent Form 16 data extractor isolating TDS, Gross Salary, and Chapter VI-A deductions.',
        'Dynamic tax calculation engine computing dual-regime comparative liability in real-time.',
        'Stateful interactive dialog system providing continuous explanation of tax rebates and refunds.',
        'Independent sandboxed filing simulator guaranteeing privacy with zero unauthorized data transmission.',
      ],
      techStack: ['React', 'TypeScript', 'Node.js', 'AI / NLP', 'Tailwind CSS', 'Vercel'],
      demoUrl: 'https://wapsi-amber.vercel.app/',
      githubUrl: 'https://github.com/Basit-94/IncomeTax',
    },
    {
      id: 'regdiff',
      title: 'RegDiff — Autonomous Statutory Intelligence',
      subtitle: 'Continuous Regulatory Compliance & Difference Enclave',
      category: 'Flagship AI',
      featured: true,
      metrics: 'Autonomous AST Diffing • Statutory Versioning • TypeScript',
      description:
        'An autonomous regulatory intelligence engine that tracks, parses, and identifies semantic statutory diffs across legal clauses and compliance frameworks.',
      longDescription:
        'RegDiff is an enterprise-grade statutory intelligence engine designed to solve the manual overhead of legal compliance audits. The platform continuously monitors legislative revisions, decomposes legal texts into structured semantic clauses, and generates high-fidelity difference enclaves that highlight compliance vulnerabilities and mandated operational updates.',
      architecturePoints: [
        'Semantic differential parsing for legislative text changes and statutory clauses.',
        'Enclave architecture isolating compliance audit rules for reproducible verification.',
        'Structured change tree generation allowing legal engineers to inspect delta impacts.',
      ],
      techStack: ['TypeScript', 'Node.js', 'System Architecture', 'AI / LLM'],
      githubUrl: 'https://github.com/Basit-94/RegDiff',
    },
    {
      id: 'aura-attendance',
      title: 'Aura-Attendance: Real-Time Attendance Tracker',
      subtitle: 'High-Reliability Dynamic Logging & REST Validation Engine',
      category: 'Full-Stack',
      featured: false,
      metrics: 'Sub-50ms REST API • Input Validation • Structured Data Store',
      description:
        'High-reliability attendance logging engine with structured input validation, dynamic entry records, and low-latency API endpoints.',
      longDescription:
        'Built a streamlined attendance infrastructure system to manage, track, and log organizational attendance records. Implemented RESTful API endpoints with rigorous input validation schemas for dynamic data insertion and rapid query retrieval.',
      architecturePoints: [
        'Strict schema validation preventing corrupt or duplicate check-in payloads.',
        'Optimized query patterns for rapid timestamp range aggregation and daily roll calls.',
        'Responsive client dashboard for real-time presence visualization.',
      ],
      techStack: ['JavaScript', 'REST APIs', 'HTML5', 'CSS3', 'Backend Architecture'],
      githubUrl: 'https://github.com/Basit-94/Aura-Attendance',
    },
    {
      id: 'dsa-leetcode',
      title: 'Advanced DSA & Algorithmic Problem Solving',
      subtitle: 'Production Algorithms, Graph Theory & Multi-Dimensional DP',
      category: 'Algorithms',
      featured: false,
      metrics: 'LeetCode Med/Hard • Complex Graphs • Segment Trees',
      description:
        'Comprehensive repository of advanced algorithmic solutions in Java focusing on Dynamic Programming, Dijkstra, Segment Trees, and Graph Traversal.',
      longDescription:
        'Deep-dive algorithmic challenge repository containing optimal solutions for complex computational problems. Specializes in multi-dimensional Dynamic Programming, Dijkstra and Bellman-Ford graph algorithms, Segment Trees with lazy propagation, and tree decomposition.',
      architecturePoints: [
        'Optimal time-complexity implementations with strict space bounds (O(V+E), O(N log N)).',
        'State-compressed Dynamic Programming matrices for memory optimization.',
        'Disjoint Set Union (DSU) and Segment Tree templates for range queries and cycle detection.',
      ],
      techStack: ['Java', 'Algorithms', 'Data Structures', 'Graph Theory', 'Dynamic Programming'],
      githubUrl: 'https://github.com/Basit-94/DSA-Leetcode',
      demoUrl: 'https://leetcode.com/u/Basit_ABS/',
    },
    {
      id: 'breakheal',
      title: 'BreakHeal — Developer Health & Workflow Automation',
      subtitle: 'Smart Ergonomic Break Reminder & Wellness Engine',
      category: 'Python & Tools',
      featured: false,
      metrics: 'Python • Event Scheduling • System Integration',
      description:
        'A Python utility to prevent developer burnout and RSI by scheduling context-aware ergonomic breaks and tracking focused session cycles.',
      longDescription:
        'BreakHeal is a lightweight, cross-platform productivity and health companion built for engineers spending extended sessions in the terminal or IDE. It features configurable Pomodoro and 20-20-20 eye rest intervals with native desktop alerts.',
      architecturePoints: [
        'Background daemon monitoring active user session duration.',
        'Configurable threshold curves adapted to deep work workflows.',
        'Native system notifications and sound chimes.',
      ],
      techStack: ['Python', 'Automation', 'CLI', 'System APIs'],
      githubUrl: 'https://github.com/Basit-94/BreakHeal',
    },
  ];

  const categories = ['All', 'Flagship AI', 'Full-Stack', 'Algorithms', 'Python & Tools'];

  const filteredProjects =
    activeCategory === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 scroll-mt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-slate-200 dark:border-white/10 pb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CURATED WORKS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            National hackathon finalists, intelligent software systems, and algorithmic problem-solving suites.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 bg-slate-100 dark:bg-[#0d1424] p-1.5 rounded-full border border-slate-200 dark:border-white/10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                soundManager.playClick();
                setActiveCategory(cat);
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className={`rounded-3xl border transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:border-cyan-500/50 hover:shadow-xl ${
              project.featured
                ? 'border-cyan-500/30 bg-gradient-to-br from-cyan-50/40 via-white to-slate-50 dark:from-[#0c162c] dark:to-[#090e1a] shadow-md dark:shadow-none'
                : 'border-slate-200 dark:border-white/10 bg-white dark:bg-[#0a0f1d] shadow-sm dark:shadow-none'
            }`}
          >
            {/* Project Card Content */}
            <div className="p-7">
              {/* Award / Highlight Pill */}
              {project.award && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-700 dark:text-amber-300 text-xs font-semibold mb-4 shadow-sm">
                  <Trophy className="w-3.5 h-3.5 text-amber-500" />
                  <span>{project.award}</span>
                </div>
              )}

              {/* Category & Metrics */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-wider font-semibold">
                  {project.category}
                </span>
                {project.metrics && (
                  <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-white/5 px-2 py-0.5 rounded border border-slate-200 dark:border-white/10">
                    {project.metrics}
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                {project.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-1 mb-4">
                {project.subtitle}
              </p>

              {/* Description */}
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                {project.description}
              </p>

              {/* Bullet highlights */}
              <div className="space-y-2 mb-6">
                {project.architecturePoints.slice(0, 2).map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 mt-0.5 flex-shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer with Links */}
            <div className="px-7 py-4 bg-slate-50/80 dark:bg-[#080d18] border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
              <button
                onClick={() => {
                  soundManager.playClick();
                  setSelectedProject(project);
                }}
                className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-1 transition-colors"
              >
                <span>Deep Architecture Dive</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <div className="flex items-center gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundManager.playClick()}
                    className="p-2 rounded-lg bg-slate-200/60 dark:bg-white/5 hover:bg-slate-300 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 transition-all"
                    title="View Source on GitHub"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                )}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundManager.playClick()}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-white font-bold text-xs transition-all shadow-md shadow-cyan-500/20"
                  >
                    <span>Live App</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in">
          <div className="bg-white dark:bg-[#0b1220] border border-slate-200 dark:border-cyan-500/30 rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            {selectedProject.award && (
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-700 dark:text-amber-300 text-xs font-semibold mb-4">
                <Trophy className="w-4 h-4 text-amber-500" />
                <span>{selectedProject.award}</span>
              </div>
            )}

            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">
              {selectedProject.title}
            </h3>
            <p className="text-cyan-600 dark:text-cyan-400 font-mono text-xs mb-4">
              {selectedProject.subtitle}
            </p>

            <div className="space-y-6 text-sm text-slate-700 dark:text-slate-300">
              <div>
                <h4 className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 tracking-wider mb-2">
                  System Overview & Impact
                </h4>
                <p className="leading-relaxed bg-slate-50 dark:bg-white/5 p-4 rounded-xl border border-slate-200 dark:border-white/10">
                  {selectedProject.longDescription}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 tracking-wider mb-2">
                  Architectural Highlights
                </h4>
                <ul className="space-y-2">
                  {selectedProject.architecturePoints.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-white/5 p-2.5 rounded-lg border border-slate-200 dark:border-white/5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-500 mt-0.5 flex-shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 tracking-wider mb-2">
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-200 dark:border-cyan-500/30 text-cyan-700 dark:text-cyan-300 text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/10 flex items-center justify-end gap-3">
              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-white text-xs font-medium hover:bg-slate-200 dark:hover:bg-white/20 transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Repository</span>
                </a>
              )}
              {selectedProject.demoUrl && (
                <a
                  href={selectedProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-white text-xs font-bold transition-all shadow-md shadow-cyan-500/20"
                >
                  <span>Open Live Application</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
