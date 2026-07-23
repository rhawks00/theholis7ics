import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'About', id: 'about' },
  { label: 'Listen', id: 'media' },
  { label: 'Shows', id: 'shows' },
  { label: 'Socials', id: 'socials' },
];

export function Header() {
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
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
    setMenuOpen(false);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 p-4 md:p-6 backdrop-blur-md bg-black/30 transition-opacity duration-700"
      style={{ opacity: visible || menuOpen ? 1 : 0, pointerEvents: visible || menuOpen ? 'auto' : 'none' }}
    >
      <div className="flex items-center justify-between w-full">
        <button
          onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setMenuOpen(false); }}
          className="text-white font-bold text-lg tracking-widest cursor-pointer bg-transparent border-none hover:text-orange-400 transition-colors"
          style={{ fontFamily: "'Kaoly', serif" }}
        >
          The Holis7ics
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map(item => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-gray-300 hover:text-orange-400 transition font-medium text-sm px-2 py-2 cursor-pointer bg-transparent border-none"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(prev => !prev)}
          className="md:hidden text-white hover:text-orange-400 transition-colors cursor-pointer bg-transparent border-none p-1"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: menuOpen ? `${NAV_ITEMS.length * 56}px` : '0px',
          opacity: menuOpen ? 1 : 0,
        }}
      >
        <nav className="flex flex-col gap-2 pt-4 pb-2">
          {NAV_ITEMS.map(item => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-gray-300 hover:text-orange-400 transition font-medium text-base py-3 px-2 text-left cursor-pointer bg-transparent border-none"
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
