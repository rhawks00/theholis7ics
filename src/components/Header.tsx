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

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 p-6 transition-opacity pointer-events-none"
      style={{ opacity }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <nav className={`flex items-center gap-8 ${opacity > 0 ? 'pointer-events-auto' : 'pointer-events-none'}`}>
            <a href="#about" className="text-gray-300 hover:text-orange-400 transition font-medium text-sm px-2 py-2">
            About
          </a>
          <a href="#media" className="text-gray-300 hover:text-orange-400 transition font-medium text-sm px-2 py-2">
            Listen
          </a>
          <a href="#shows" className="text-gray-300 hover:text-orange-400 transition font-medium text-sm px-2 py-2">
            Shows
          </a>
          <a href="#socials" className="text-gray-300 hover:text-orange-400 transition font-medium text-sm px-2 py-2">
            Socials
          </a>
        </nav>
      </div>
    </header>
  );
}