import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, X, CornerDownLeft } from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundManager } from '../utils/audio';

interface TerminalLine {
  id: string;
  type: 'input' | 'output' | 'system' | 'error';
  content: string | React.ReactNode;
}

interface InteractiveTerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InteractiveTerminal: React.FC<InteractiveTerminalProps> = ({ isOpen, onClose }) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<TerminalLine[]>([
    {
      id: '1',
      type: 'system',
      content: 'ABS Portfolio Shell (v2.5.0-release)',
    },
    {
      id: '2',
      type: 'system',
      content: 'Type "help" to inspect available system commands, or "wapsi" for the national finalist project.',
    },
  ]);
  const [cmdIndex, setCmdIndex] = useState<number>(-1);
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (rawCmd: string) => {
    const trimmed = rawCmd.trim();
    if (!trimmed) return;

    soundManager.playClick();
    setCmdHistory((prev) => [trimmed, ...prev]);
    setCmdIndex(-1);

    const newHistory: TerminalLine[] = [
      ...history,
      { id: Date.now().toString(), type: 'input', content: `$ ${trimmed}` },
    ];

    const args = trimmed.toLowerCase().split(' ');
    const cmd = args[0];

    switch (cmd) {
      case 'help':
        newHistory.push({
          id: (Date.now() + 1).toString(),
          type: 'output',
          content: (
            <div className="space-y-1 text-xs">
              <div className="text-cyan-400 font-bold mb-1">AVAILABLE COMMANDS:</div>
              <div><span className="text-emerald-400 font-semibold">wapsi</span> - Inspect Wapsi project (Top 250 out of 13,000+ across India)</div>
              <div><span className="text-emerald-400 font-semibold">projects</span> - List featured engineering repositories</div>
              <div><span className="text-emerald-400 font-semibold">skills</span> - Display technical stack & proficiencies</div>
              <div><span className="text-emerald-400 font-semibold">cat resume</span> - View summary of Abdul Basit Siddiqui's resume</div>
              <div><span className="text-emerald-400 font-semibold">contact</span> - Output direct reach-out channels (Email, LinkedIn, GitHub)</div>
              <div><span className="text-emerald-400 font-semibold">sudo hire basit</span> - Trigger offer handshake protocol 🤝</div>
              <div><span className="text-emerald-400 font-semibold">clear</span> - Clear terminal window buffer</div>
              <div><span className="text-emerald-400 font-semibold">exit</span> - Close terminal drawer</div>
            </div>
          ),
        });
        break;

      case 'wapsi':
        newHistory.push({
          id: (Date.now() + 1).toString(),
          type: 'output',
          content: (
            <div className="space-y-1 text-xs">
              <div className="text-amber-400 font-bold">🏆 WAPSI (वापसी) — RECOGNITION: TOP 250 / 13,000+ IN INDIA</div>
              <p className="text-slate-300">
                Co-Creator & Full-Stack Architect. Conversational AI Tax Assistant ("Munshi ji") supporting 23 Indian languages.
                Parses Form 16 employer records and simulates tax filing in real-time.
              </p>
              <div className="text-cyan-300 mt-1">
                Live URL: <a href="https://wapsi-amber.vercel.app/" target="_blank" rel="noreferrer" className="underline hover:text-white">https://wapsi-amber.vercel.app/</a>
              </div>
            </div>
          ),
        });
        break;

      case 'projects':
        newHistory.push({
          id: (Date.now() + 1).toString(),
          type: 'output',
          content: (
            <div className="space-y-1 text-xs">
              <div className="text-cyan-300 font-semibold">1. Wapsi (वापसी) — Top 250 / 13,000+ Across India</div>
              <div className="text-slate-400 ml-4">React • TypeScript • 23 Indic Languages • AI Tax Concierge</div>
              <div className="text-cyan-300 font-semibold mt-1">2. RegDiff (Autonomous Statutory Intelligence)</div>
              <div className="text-slate-400 ml-4">TypeScript • AST Diffing • Continuous Compliance Enclave</div>
              <div className="text-cyan-300 font-semibold mt-1">3. Aura-Attendance Tracker</div>
              <div className="text-slate-400 ml-4">JavaScript • Sub-50ms REST API • Dynamic check-in validation</div>
              <div className="text-cyan-300 font-semibold mt-1">4. Advanced DSA & Algorithmic Problem Solving</div>
              <div className="text-slate-400 ml-4">Java • LeetCode Medium/Hard • Graphs • Segment Trees • DP</div>
              <div className="text-cyan-300 font-semibold mt-1">5. BreakHeal</div>
              <div className="text-slate-400 ml-4">Python • Developer Ergonomics & Workflow Automation</div>
            </div>
          ),
        });
        break;

      case 'skills':
        newHistory.push({
          id: (Date.now() + 1).toString(),
          type: 'output',
          content: (
            <div className="space-y-1 text-xs">
              <div><strong className="text-cyan-400">Languages:</strong> Java (Advanced DSA), Python, SQL, C, TypeScript, JavaScript</div>
              <div><strong className="text-cyan-400">Backend:</strong> Spring Boot, Spring MVC, Spring Data JPA, Spring Security (JWT), Spring AI</div>
              <div><strong className="text-cyan-400">Databases & Vector:</strong> PostgreSQL, pgvector, Pinecone, Redis, Hibernate L2 Caching</div>
              <div><strong className="text-cyan-400">DevOps & Cloud:</strong> Docker, GitHub Actions CI/CD, AWS (EC2, S3), Git</div>
              <div><strong className="text-cyan-400">Core CS:</strong> Operating Systems, DBMS Normalization & ACID, Computer Networks, Advanced DSA</div>
            </div>
          ),
        });
        break;

      case 'cat':
        if (args[1] === 'resume' || args[1] === 'resume.txt' || args[1] === 'resume.pdf') {
          newHistory.push({
            id: (Date.now() + 1).toString(),
            type: 'output',
            content: (
              <div className="space-y-1 text-xs">
                <div className="text-white font-bold">ABDUL BASIT SIDDIQUI</div>
                <div className="text-slate-400">Kolkata, India • abdulsiddiqui0605@gmail.com • +91-8777476187</div>
                <div className="text-cyan-400">B.Tech CSE - St. Thomas' College of Engineering & Technology (2024-2028)</div>
                <div className="text-slate-300 mt-1">
                  Full-stack engineer & AI systems builder. Co-creator of Wapsi (Top 250 across India out of 13,000+ teams).
                </div>
                <div className="text-amber-400 mt-1">
                  PDF Link: <a href="/Abdul_Basit_Siddiqui_Resume.pdf" target="_blank" rel="noreferrer" className="underline">Download Official Resume</a>
                </div>
              </div>
            ),
          });
        } else {
          newHistory.push({
            id: (Date.now() + 1).toString(),
            type: 'error',
            content: `cat: file not found: ${args[1] || ''}. Try "cat resume"`,
          });
        }
        break;

      case 'contact':
        newHistory.push({
          id: (Date.now() + 1).toString(),
          type: 'output',
          content: (
            <div className="space-y-1 text-xs">
              <div>Email: <a href="mailto:abdulsiddiqui0605@gmail.com" className="text-cyan-400 underline">abdulsiddiqui0605@gmail.com</a></div>
              <div>LinkedIn: <a href="https://linkedin.com/in/abdul-basit-siddiqui-7a3a38309" target="_blank" rel="noreferrer" className="text-cyan-400 underline">linkedin.com/in/abdul-basit-siddiqui-7a3a38309</a></div>
              <div>GitHub: <a href="https://github.com/Basit-94" target="_blank" rel="noreferrer" className="text-cyan-400 underline">github.com/Basit-94</a></div>
              <div>LeetCode: <a href="https://leetcode.com/u/Basit_ABS/" target="_blank" rel="noreferrer" className="text-cyan-400 underline">leetcode.com/u/Basit_ABS/</a></div>
              <div>Phone: <span className="text-slate-300">+91-8777476187</span></div>
            </div>
          ),
        });
        break;

      case 'sudo':
        if (args.slice(1).join(' ') === 'hire basit') {
          soundManager.playSuccess();
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
          });
          newHistory.push({
            id: (Date.now() + 1).toString(),
            type: 'output',
            content: (
              <div className="p-3 bg-emerald-950/80 border border-emerald-500/40 rounded-xl text-emerald-300 text-xs">
                🎉 <strong>EXCELLENT CHOICE!</strong> Handshake protocol accepted!
                <br />
                Forwarding candidate payload to your talent acquisition queue.
                <br />
                Reach out right now at: <a href="mailto:abdulsiddiqui0605@gmail.com" className="underline font-bold text-white">abdulsiddiqui0605@gmail.com</a>
              </div>
            ),
          });
        } else {
          newHistory.push({
            id: (Date.now() + 1).toString(),
            type: 'error',
            content: 'User is not in sudoers file. However, you are authorized to run: "sudo hire basit"',
          });
        }
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'exit':
        onClose();
        setInputVal('');
        return;

      default:
        newHistory.push({
          id: (Date.now() + 1).toString(),
          type: 'error',
          content: `Command not recognized: "${trimmed}". Type "help" to view valid commands.`,
        });
        break;
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length > 0 && cmdIndex < cmdHistory.length - 1) {
        const nextIdx = cmdIndex + 1;
        setCmdIndex(nextIdx);
        setInputVal(cmdHistory[nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (cmdIndex > 0) {
        const nextIdx = cmdIndex - 1;
        setCmdIndex(nextIdx);
        setInputVal(cmdHistory[nextIdx]);
      } else if (cmdIndex === 0) {
        setCmdIndex(-1);
        setInputVal('');
      }
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in">
      <div className="w-full max-w-3xl h-[540px] bg-[#070c16] border border-cyan-500/40 rounded-2xl shadow-2xl flex flex-col overflow-hidden font-mono text-xs">
        {/* Terminal Title Bar */}
        <div className="bg-[#0b1220] px-4 py-3 border-b border-white/10 flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer inline-block" onClick={onClose} />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            <span className="text-slate-400 text-xs ml-2 flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
              basit@portfolio-shell: ~
            </span>
          </div>

          <div className="flex items-center gap-2 text-slate-500">
            <span className="text-[10px] hidden sm:inline">ESC to exit</span>
            <button onClick={onClose} className="hover:text-white transition-colors">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Terminal Content Buffer */}
        <div className="flex-1 p-4 overflow-y-auto space-y-2.5 scanline">
          {history.map((line) => (
            <div key={line.id}>
              {line.type === 'system' && (
                <div className="text-cyan-400 font-semibold">{line.content}</div>
              )}
              {line.type === 'input' && (
                <div className="text-emerald-400 font-semibold">{line.content}</div>
              )}
              {line.type === 'output' && (
                <div className="text-slate-200">{line.content}</div>
              )}
              {line.type === 'error' && (
                <div className="text-red-400">{line.content}</div>
              )}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Prompt Input Row */}
        <div className="p-3 bg-[#0a0f1c] border-t border-white/10 flex items-center gap-2">
          <span className="text-emerald-400 font-bold">$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type 'help', 'wapsi', 'skills', or 'sudo hire basit'..."
            className="flex-1 bg-transparent text-slate-100 outline-none border-none font-mono text-xs placeholder:text-slate-600"
            autoFocus
          />
          <button
            onClick={() => handleCommand(inputVal)}
            className="p-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
