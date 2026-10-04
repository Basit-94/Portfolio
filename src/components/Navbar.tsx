import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Terminal, FileText, Sun, Moon, Menu, X } from 'lucide-react';
import { soundManager } from '../utils/audio';

interface NavbarProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  onOpenTerminal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  theme,
  onToggleTheme,
  onOpenTerminal,
}) => {
  const [soundActive, setSoundActive] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleSound = () => {
    const state = soundManager.toggle();
    setSoundActive(state);
  };

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Timeline', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 pt-4">
      <div
        className={`max-w-6xl mx-auto rounded-2xl sm:rounded-full transition-all duration-300 px-4 sm:px-6 h-16 flex items-center justify-between ${
          scrolled
            ? 'bg-white/85 dark:bg-[#090e18]/85 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 shadow-xl shadow-slate-900/5 dark:shadow-black/50'
            : 'bg-white/60 dark:bg-[#090e18]/60 backdrop-blur-md border border-slate-200/50 dark:border-white/5'
        }`}
      >
        {/* Brand / Logo */}
        <a
          href="#"
          onClick={() => soundManager.playClick()}
          className="flex items-center gap-3 group"
        >
          <div className="relative w-9 h-9 rounded-full bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-sm">
            <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center">
              <span className="font-mono font-bold text-cyan-400 text-xs tracking-wider">
                ABS
              </span>
            </div>
          </div>
          <div className="flex flex-col text-left">
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-slate-900 dark:text-white text-sm tracking-tight font-sans">
                Abdul Basit
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
            </div>
            <span className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400 tracking-wider">
              SOFTWARE ENGINEER
            </span>
          </div>
        </a>

        {/* Center: Sleek Minimalist Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100/70 dark:bg-white/5 px-3 py-1.5 rounded-full border border-slate-200/60 dark:border-white/5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => soundManager.playHover()}
              className="px-3.5 py-1 rounded-full text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-white/80 dark:hover:bg-white/10 transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Controls: Theme Toggle, Sound, Terminal, Resume */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Light / Dark Mode Toggle */}
          <button
            onClick={() => {
              soundManager.playClick();
              onToggleTheme();
            }}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className="p-2 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          {/* Sound Toggle */}
          <button
            onClick={handleToggleSound}
            title={soundActive ? 'Sound FX On (Click to mute)' : 'Sound FX Muted (Click to enable)'}
            className={`p-2 rounded-full border transition-all ${
              soundActive
                ? 'border-cyan-500/40 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400'
                : 'border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            {soundActive ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Terminal / Cmd Palette Button */}
          <button
            onClick={() => {
              soundManager.playClick();
              onOpenTerminal();
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 text-slate-700 dark:text-slate-300 text-xs font-mono hover:border-cyan-500/40 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all"
            title="Open Interactive Terminal"
          >
            <Terminal className="w-3.5 h-3.5 text-cyan-500" />
            <span>Ctrl+K</span>
          </button>

          {/* Resume PDF Download */}
          <a
            href="/Abdul_Basit_Siddiqui_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundManager.playClick()}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-xs tracking-wide hover:brightness-110 shadow-md shadow-cyan-500/25 transition-all"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile menu trigger button */}
        <div className="flex items-center gap-2 sm:hidden">
          <button
            onClick={() => {
              soundManager.playClick();
              onToggleTheme();
            }}
            className="p-2 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={() => {
              soundManager.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="p-2 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-200"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden mt-2 bg-white/95 dark:bg-[#0a0f1d]/95 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-2xl p-4 shadow-2xl space-y-3">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-cyan-500 transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 flex items-center justify-between border-t border-slate-200 dark:border-white/10">
            <button
              onClick={() => {
                onOpenTerminal();
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-1.5 text-xs font-mono text-cyan-600 dark:text-cyan-400"
            >
              <Terminal className="w-4 h-4" />
              <span>Terminal (Ctrl+K)</span>
            </button>

            <a
              href="/Abdul_Basit_Siddiqui_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded-full bg-cyan-500 text-slate-950 font-semibold text-xs"
            >
              Resume PDF
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
