import { useState, useEffect } from 'react';

export function Header() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = 750;
      const newOpacity = Math.max(0, 1 - scrollPosition / maxScroll);
      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 p-6 transition-opacity pointer-events-none"
      style={{ opacity }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center md:justify-between w-full">
        <nav className={`flex items-center gap-8 ${opacity > 0 ? 'pointer-events-auto' : 'pointer-events-none'}`}>
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