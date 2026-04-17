import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  const scrollToNext = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 pt-40 md:pt-32 gap-26">
      <div className="relative w-full max-w-sm md:max-w-lg lg:max-w-2xl xl:max-w-3xl h-auto">
        <img
          src="/images/logonotext.jpeg"
          alt="Band Photo"
          className="w-full h-auto rounded-lg"
        />
        
        <motion.img
          src="/images/logowtext.jpg"
          alt="Band Photo with Text"
          className="absolute top-0 left-0 w-full h-full rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: 'easeIn' }}
        />
      </div>

      <motion.button
        onClick={scrollToNext}
        className="text-orange-400 hover:text-white transition-colors cursor-pointer"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={60} />
      </motion.button>
    </section>
  );
}