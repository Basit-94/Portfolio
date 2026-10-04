import { useState, useEffect } from 'react';
import { NetworkCanvas } from './components/NetworkCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { SkillsMatrix } from './components/SkillsMatrix';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { InteractiveTerminal } from './components/InteractiveTerminal';
import { soundManager } from './utils/audio';

export function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio-theme');
      if (saved === 'light' || saved === 'dark') return saved;
    }
    return 'light';
  });

  const [terminalOpen, setTerminalOpen] = useState<boolean>(false);

  // Sync theme with document element
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  // Global hotkey Ctrl+K / Cmd+K to launch interactive terminal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        soundManager.playClick();
        setTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#070b12] text-slate-900 dark:text-slate-100 relative font-sans selection:bg-cyan-500 selection:text-black transition-colors duration-300">
      {/* Background Interactive Mesh Canvas */}
      <NetworkCanvas theme={theme} />

      {/* Floating Island Navbar */}
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenTerminal={() => setTerminalOpen(true)}
      />

      <main className="relative z-10">
        {/* Hero Section */}
        <Hero onOpenTerminal={() => setTerminalOpen(true)} />

        {/* Curated Projects (Featuring Wapsi Top 250 / 13,000+) */}
        <Projects />

        {/* Technical Competencies Matrix */}
        <SkillsMatrix />

        {/* Experience & Milestones Timeline */}
        <ExperienceTimeline />

        {/* Direct Contact & Collaboration */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Command Terminal */}
      <InteractiveTerminal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />
    </div>
  );
}

export default App;
