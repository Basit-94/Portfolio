import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Code, ArrowUpRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { GithubIcon, LinkedinIcon } from './Icons';
import { soundManager } from '../utils/audio';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = 'abdulsiddiqui0605@gmail.com';

  const handleCopyEmail = () => {
    soundManager.playSuccess();
    navigator.clipboard.writeText(email);
    setCopied(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
    });
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="contact" className="py-24 scroll-mt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-mono mb-3">
          <Mail className="w-3.5 h-3.5" />
          <span>DIRECT REACH OUT</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Let's Build Something Exceptional
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2">
          Open for Software Engineering, Full-Stack Development, and AI Systems roles.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
        {/* Left Column: Direct Communication Channels */}
        <div className="p-8 rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0b1220] shadow-sm flex flex-col justify-between">
          <div>
            <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-semibold tracking-wider uppercase">
              Fastest Response Channel
            </span>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1 mb-4">
              Get in Touch Directly
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
              Whether you are looking to build a high-performance system, develop an AI application, or hire an ambitious engineer for your team, I'd love to connect.
            </p>

            {/* Email Copy Card */}
            <div className="bg-slate-50 dark:bg-[#080d17] p-4 rounded-2xl border border-slate-200 dark:border-cyan-500/30 flex items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="truncate">
                  <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400">DIRECT EMAIL</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white font-mono truncate">{email}</div>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-700 dark:text-cyan-300 text-xs font-mono transition-all flex-shrink-0"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            {/* Direct Details */}
            <div className="space-y-3 font-mono text-xs">
              <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300 p-2.5 rounded-xl bg-slate-50 dark:bg-white/5">
                <Phone className="w-4 h-4 text-cyan-500" />
                <span>+91-8777476187</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300 p-2.5 rounded-xl bg-slate-50 dark:bg-white/5">
                <MapPin className="w-4 h-4 text-cyan-500" />
                <span>Kolkata, West Bengal, India</span>
              </div>
            </div>
          </div>

          {/* Social Profiles Grid */}
          <div className="grid grid-cols-3 gap-3 pt-6 mt-6 border-t border-slate-200 dark:border-white/10">
            <a
              href="https://linkedin.com/in/abdul-basit-siddiqui-7a3a38309"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundManager.playClick()}
              className="flex flex-col items-center justify-center p-3 rounded-2xl bg-slate-50 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 border border-slate-200/60 dark:border-white/5 transition-all text-center"
            >
              <LinkedinIcon className="w-5 h-5 mb-1 text-cyan-600 dark:text-cyan-400" />
              <span className="text-[11px] font-medium">LinkedIn</span>
            </a>

            <a
              href="https://github.com/Basit-94"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundManager.playClick()}
              className="flex flex-col items-center justify-center p-3 rounded-2xl bg-slate-50 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 border border-slate-200/60 dark:border-white/5 transition-all text-center"
            >
              <GithubIcon className="w-5 h-5 mb-1 text-slate-800 dark:text-slate-200" />
              <span className="text-[11px] font-medium">GitHub</span>
            </a>

            <a
              href="https://leetcode.com/u/Basit_ABS/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundManager.playClick()}
              className="flex flex-col items-center justify-center p-3 rounded-2xl bg-slate-50 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 border border-slate-200/60 dark:border-white/5 transition-all text-center"
            >
              <Code className="w-5 h-5 mb-1 text-amber-500" />
              <span className="text-[11px] font-medium">LeetCode</span>
            </a>
          </div>
        </div>

        {/* Right Column: Pre-configured Ingress Actions */}
        <div className="p-8 rounded-3xl border border-slate-200 dark:border-white/10 bg-gradient-to-br from-cyan-50/40 via-white to-slate-50 dark:from-[#0c1322] dark:to-[#080d17] shadow-sm flex flex-col justify-between">
          <div>
            <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-semibold tracking-wider uppercase">
              Immediate Dispatch
            </span>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1 mb-4">
              Send a Direct Invitation
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
              Click below to initiate your default email client with pre-configured subject lines for interviews, technical roles, or collaboration.
            </p>

            <div className="space-y-3">
              <a
                href={`mailto:${email}?subject=Interview%20Invitation%20-%20Software%20Engineer&body=Hi%20Abdul,%0D%0A%0D%0AWe%20reviewed%20your%20portfolio%20and%20are%20impressed%20by%20your%20projects...`}
                onClick={() => soundManager.playClick()}
                className="w-full p-4 rounded-2xl bg-white dark:bg-[#0e1628] border border-slate-200 dark:border-cyan-500/30 hover:border-cyan-500 flex items-center justify-between group transition-all text-left shadow-sm"
              >
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                    💼 Schedule an Interview / Role Discussion
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                    Opens email with candidate inquiry template
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-cyan-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>

              <a
                href={`mailto:${email}?subject=Collaboration%20Inquiry%20-%20AI%20/%20Full-Stack&body=Hi%20Abdul,%0D%0A%0D%0AI%20would%20like%20to%20collaborate%20on...`}
                onClick={() => soundManager.playClick()}
                className="w-full p-4 rounded-2xl bg-white dark:bg-[#0e1628] border border-slate-200 dark:border-white/10 hover:border-blue-500 flex items-center justify-between group transition-all text-left shadow-sm"
              >
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
                    ⚡ Discuss AI Systems / Project Collaboration
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                    Open-source collaboration & innovative ideas
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-blue-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
            <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">Resume Deliverable:</span>
            <a
              href="/Abdul_Basit_Siddiqui_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundManager.playClick()}
              className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-xs shadow-md shadow-cyan-500/20 hover:brightness-110 transition-all"
            >
              Download Resume (PDF)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
