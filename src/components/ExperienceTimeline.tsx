import React from 'react';
import { Briefcase, GraduationCap, Award, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

interface TimelineItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  type: 'work' | 'award' | 'education';
  highlights: string[];
  badge?: string;
}

export const ExperienceTimeline: React.FC = () => {
  const items: TimelineItem[] = [
    {
      id: 'wapsi-achievement',
      role: 'Co-Creator & Full-Stack Architect',
      organization: 'Wapsi (वापसी) — AI Tax Platform',
      location: 'India (National)',
      period: '2026',
      type: 'award',
      badge: '🏆 Top 250 / 13,000+ Nationwide',
      highlights: [
        'Recognized among the Top 250 teams out of 13,000+ engineering teams across India.',
        'Engineered conversational AI agent ("Munshi ji") capable of filing and simulating taxes across 23 Indian languages.',
        'Designed automated deduction parser extracting Form 16 employer figures with zero manual form fatigue.',
      ],
    },
    {
      id: 'zetheta',
      role: 'Software Engineer (Project Externship)',
      organization: 'Zetheta Algorithms Private Limited',
      location: 'Remote / Bangalore',
      period: 'Aug 2026',
      type: 'work',
      badge: 'Software Engineering',
      highlights: [
        'Successfully completed the Software Engineer HTTPE project, fulfilling core deliverables across a 15-day cycle.',
        'Architected a distributed transaction processing pipeline using Java, Spring Boot, and Apache Kafka.',
        'Implemented CockroachDB Optimistic Concurrency Control (OCC) and Redis distributed locks to eliminate double-charges and database deadlocks.',
      ],
    },
    {
      id: 'codeflow-hackathon',
      role: 'Hackathon Finalist & Lead Builder',
      organization: 'CodeFlow (36-hr Hackathon, SREY 2K25)',
      location: 'Kolkata, India',
      period: '2025',
      type: 'award',
      badge: 'Finalist (32 Teams)',
      highlights: [
        'Built a full Cultural Heritage Preservation App from scratch within an intensive 36-hour sprint.',
        'Engineered searchable catalog to index, preserve, and semantically browse cultural artifacts.',
      ],
    },
    {
      id: 'education',
      role: 'Bachelor of Technology in Computer Science & Engineering',
      organization: "St. Thomas' College of Engineering & Technology (MAKAUT)",
      location: 'Kolkata, India',
      period: '2024 - Expected 2028',
      type: 'education',
      badge: 'B.Tech CSE',
      highlights: [
        'Rigorous coursework in Operating Systems, Database Management Systems (ACID, Normalization), Computer Networks, and OOPs.',
        'Active problem solver with deep mastery over multi-dimensional Dynamic Programming and Graph Algorithms.',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 scroll-mt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-mono mb-3">
          <Calendar className="w-3.5 h-3.5" />
          <span>CAREER TRAJECTORY</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Experience & Milestones
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2">
          Milestones across intelligent software systems, national hackathons, and core computer science.
        </p>
      </div>

      <div className="max-w-4xl mx-auto relative">
        {/* Central connecting line */}
        <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 md:-translate-x-1/2 opacity-30" />

        <div className="space-y-12">
          {items.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={item.id}
                className={`relative flex flex-col md:flex-row items-start ${
                  isEven ? 'md:flex-row-reverse' : ''
                } gap-8 group`}
              >
                {/* Node icon in timeline */}
                <div className="absolute left-4 md:left-1/2 top-0 w-8 h-8 rounded-full bg-white dark:bg-[#0a101f] border-2 border-cyan-500 -translate-x-1/2 flex items-center justify-center z-10 shadow-md dark:shadow-cyan-500/40">
                  {item.type === 'work' && <Briefcase className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />}
                  {item.type === 'award' && <Award className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />}
                  {item.type === 'education' && <GraduationCap className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />}
                </div>

                {/* Content Card */}
                <div className="ml-12 md:ml-0 md:w-1/2 px-2">
                  <div className="p-6 sm:p-7 rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0b1220] shadow-sm hover:shadow-xl dark:hover:border-cyan-500/40 transition-all duration-300">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-semibold flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {item.period}
                      </span>
                      {item.badge && (
                        <span className="text-[10px] font-mono text-amber-700 dark:text-amber-300 bg-amber-100 dark:bg-amber-500/15 border border-amber-300 dark:border-amber-500/30 px-2 py-0.5 rounded-full font-bold">
                          {item.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-1">
                      {item.role}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-4 font-mono">
                      <span className="text-slate-800 dark:text-slate-300 font-semibold">{item.organization}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {item.location}
                      </span>
                    </div>

                    <ul className="space-y-2">
                      {item.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 mt-0.5 flex-shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
