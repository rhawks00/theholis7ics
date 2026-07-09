import { useState, useEffect, useRef } from 'react';

export function Header() {
  const [visible, setVisible] = useState(true);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const atTop = window.scrollY === 0;
      setVisible(true);
      if (hideTimer.current) clearTimeout(hideTimer.current);
      if (!atTop) {
        hideTimer.current = setTimeout(() => setVisible(false), 2500);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (hideTimer.current) clearTimeout(hideTimer.current);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 p-6 bg-transparent transition-opacity duration-700"
      style={{ opacity: visible ? 1 : 0, pointerEvents: visible ? 'auto' : 'none' }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between w-full">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-white font-bold text-lg tracking-widest cursor-pointer bg-none border-none hover:text-orange-400 transition-colors"
          style={{ fontFamily: "'Kaoly', serif" }}
        >
          The Holis7ics
        </button>
        <nav className="flex items-center gap-8 pointer-events-auto">
          <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-orange-400 transition font-medium text-sm px-2 py-2 cursor-pointer bg-none border-none">
            About
          </button>
          <button onClick={() => scrollToSection('media')} className="text-gray-300 hover:text-orange-400 transition font-medium text-sm px-2 py-2 cursor-pointer bg-none border-none">
            Listen
          </button>
          <button onClick={() => scrollToSection('shows')} className="text-gray-300 hover:text-orange-400 transition font-medium text-sm px-2 py-2 cursor-pointer bg-none border-none">
            Shows
          </button>
          <button onClick={() => scrollToSection('socials')} className="text-gray-300 hover:text-orange-400 transition font-medium text-sm px-2 py-2 cursor-pointer bg-none border-none">
            Socials
          </button>
        </nav>
      </div>
    </header>
  );
}