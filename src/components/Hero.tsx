import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function Hero() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        delay: i * 0.1,
        ease: 'easeOut' as const,
      },
    }),
  };

  const titleLetters = 'THE HOLIS7ICS'.split('');

  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-3xl w-full">
        <div className="mb-8">
          <h1 className="text-6xl sm:text-7xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-none overflow-hidden md:whitespace-nowrap" style={{ lineHeight: '0.9' }}>
            {titleLetters.map((letter, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={titleVariants}
                initial="hidden"
                animate="visible"
                style={{ display: letter === ' ' && isMobile ? 'block' : 'inline-block' }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </h1>
        </div>
        <div className="flex items-center justify-center mb-8 py-20">
          <img
            src="/images/bandPhoto.jpg"
            alt="Hero"
            loading="lazy"
            className="w-full max-w-3xl h-auto rounded-lg object-contain shadow-lg"
          />
        </div>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light">
          THE HOLIS7ICS are frequency bouncing across the universe healing the world naturally with music!
        </p>
      </div>
    </section>
  );
}