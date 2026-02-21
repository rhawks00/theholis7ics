import { motion } from 'framer-motion';

export function Hero() {
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
          <h1 className="text-8xl md:text-7xl font-black tracking-tighter text-white leading-tight overflow-hidden">
            {titleLetters.map((letter, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={titleVariants}
                initial="hidden"
                animate="visible"
                style={{ display: 'inline-block' }}
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