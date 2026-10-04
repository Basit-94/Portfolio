import React, { useState } from 'react';
import { Cpu, Server, Database, Cloud, Code2, Sparkles } from 'lucide-react';
import { soundManager } from '../utils/audio';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  color: string;
  badge: string;
  skills: { name: string; level: string; detail?: string }[];
}

export const SkillsMatrix: React.FC = () => {
  const [selectedGroup, setSelectedGroup] = useState<number | null>(null);

  const categories: SkillCategory[] = [
    {
      title: 'Backend & Spring Internals',
      icon: <Server className="w-5 h-5 text-cyan-500" />,
      color: 'border-cyan-500/20 bg-cyan-50/50 dark:bg-cyan-950/20',
      badge: 'Core Specialization',
      skills: [
        { name: 'Java (Advanced DSA)', level: 'Expert', detail: 'Multi-threading, Memory Model, Collections' },
        { name: 'Spring Boot & MVC', level: 'Advanced', detail: 'REST Controllers, Actuator, Profiles' },
        { name: 'Spring Data JPA & Hibernate', level: 'Advanced', detail: 'L1/L2 Caching, N+1 Query Resolution' },
        { name: 'Spring Security (JWT)', level: 'Advanced', detail: 'Stateless Filters, Role-based Access' },
        { name: 'Spring Internals', level: 'Advanced', detail: 'Bean Lifecycle, DI, ApplicationContext' },
      ],
    },
    {
      title: 'Full-Stack & Web Architecture',
      icon: <Cpu className="w-5 h-5 text-blue-500" />,
      color: 'border-blue-500/20 bg-blue-50/50 dark:bg-blue-950/20',
      badge: 'Modern Web',
      skills: [
        { name: 'React.js', level: 'Advanced', detail: 'Hooks, State Management, Component Architecture' },
        { name: 'TypeScript & JavaScript', level: 'Advanced', detail: 'ES6+, Type Safety, Interfaces' },
        { name: 'Tailwind CSS', level: 'Advanced', detail: 'Responsive Design, Custom Utilities' },
        { name: 'RESTful APIs', level: 'Advanced', detail: 'Schema Design, Status Codes, Validation' },
        { name: 'Microservices & System Design', level: 'Advanced', detail: 'Modularity, Scalability, Resiliency' },
      ],
    },
    {
      title: 'Databases & AI / Vector Stores',
      icon: <Database className="w-5 h-5 text-purple-500" />,
      color: 'border-purple-500/20 bg-purple-50/50 dark:bg-purple-950/20',
      badge: 'AI & Data Persistence',
      skills: [
        { name: 'PostgreSQL', level: 'Advanced', detail: 'Schema Design, Indexing (B-Tree, GIN), ACID' },
        { name: 'Spring AI & pgvector', level: 'Advanced', detail: 'Embeddings, Similarity Search, RAG Pipelines' },
        { name: 'Pinecone', level: 'Working Knowledge', detail: 'Vector Indexing for Scalable Retrieval' },
        { name: 'SQL & Normalization', level: 'Advanced', detail: '1NF to BCNF, Complex Joins, Query Plans' },
      ],
    },
    {
      title: 'Cloud, DevOps & Tooling',
      icon: <Cloud className="w-5 h-5 text-emerald-500" />,
      color: 'border-emerald-500/20 bg-emerald-50/50 dark:bg-emerald-950/20',
      badge: 'Infrastructure',
      skills: [
        { name: 'Docker', level: 'Advanced', detail: 'Multi-stage builds, Containerization' },
        { name: 'CI/CD (GitHub Actions)', level: 'Advanced', detail: 'Automated test & deployment pipelines' },
        { name: 'AWS (EC2, S3)', level: 'Working Knowledge', detail: 'Cloud deployment, Object storage' },
        { name: 'Git & Version Control', level: 'Advanced', detail: 'Branching strategies, Rebase, PR reviews' },
        { name: 'Postman & REST Testing', level: 'Advanced', detail: 'API contract testing, Mocking' },
      ],
    },
    {
      title: 'Core CS & Algorithmic Problem Solving',
      icon: <Code2 className="w-5 h-5 text-amber-500" />,
      color: 'border-amber-500/20 bg-amber-50/50 dark:bg-amber-950/20',
      badge: 'LeetCode Med/Hard',
      skills: [
        { name: 'Dynamic Programming', level: 'Advanced', detail: 'Multi-dimensional, Knapsack, Digit DP' },
        { name: 'Graph Theory', level: 'Advanced', detail: 'BFS/DFS, Dijkstra, Topological Sort, DSU' },
        { name: 'Segment Trees & Trees', level: 'Advanced', detail: 'Range queries, Lazy propagation, LCA' },
        { name: 'Operating Systems', level: 'Advanced', detail: 'Processes, Threads, Semaphores, Paging' },
        { name: 'Computer Networks', level: 'Advanced', detail: 'TCP/IP, HTTP/2, WebSockets, DNS' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 scroll-mt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>TECHNICAL COMPETENCIES</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Engineered Skill Matrix
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2">
          From Spring internals and vector embeddings to modern React frontends and advanced algorithmic graphs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, idx) => (
          <div
            key={cat.title}
            onClick={() => {
              soundManager.playClick();
              setSelectedGroup(selectedGroup === idx ? null : idx);
            }}
            className={`p-6 rounded-3xl border transition-all duration-300 cursor-pointer group hover:border-cyan-400/50 hover:shadow-xl bg-white dark:bg-[#0c1220] ${
              cat.color
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-2.5 rounded-2xl bg-slate-100 dark:bg-[#090e18] border border-slate-200 dark:border-white/10 shadow-inner">
                {cat.icon}
              </div>
              <span className="text-[11px] font-mono text-cyan-700 dark:text-cyan-300 bg-cyan-100/70 dark:bg-cyan-950/60 px-2.5 py-1 rounded-full border border-cyan-200 dark:border-cyan-500/30 font-medium">
                {cat.badge}
              </span>
            </div>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
              {cat.title}
            </h3>

            <div className="space-y-3">
              {cat.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="p-2.5 rounded-xl bg-slate-50 dark:bg-black/40 border border-slate-200/60 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/15 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                      {skill.name}
                    </span>
                    <span className="text-[10px] font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-100/70 dark:bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-500/30">
                      {skill.level}
                    </span>
                  </div>
                  {skill.detail && (
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 font-mono">
                      {skill.detail}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
