import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="px-4 py-16 flex items-center justify-center">
      <div className="max-w-4xl mx-auto w-full">
        <motion.h2
          className="text-5xl font-black text-white mb-12 text-center"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >About Us</motion.h2>
        <motion.div
          className="flex flex-col items-center gap-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
        >
          <div className="w-full rounded-lg overflow-hidden">
            <img
              src="/images/bandPhoto.jpg"
              alt="The Holis7ics performing live"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <p className="text-base md:text-xl text-gray-300 leading-relaxed text-center">
            The Holis7ics are the Ambassadors of Love, Funk and Roll and are here to shake up your soul.
            This seven-piece powerhouse fuses rock, funk, and soul into a high-voltage sound that's as fresh as it is
            unforgettable. This all-star lineup drawn from iconic acts is a celebration of musical chemistry
            and raw talent. Their original tracks hit hard with infectious hooks, deep lyrics, and a pulse you
            can't ignore. Their creative takes on "Holis7icized" covers will give you favorite new versions of classic
            hits. The Holis7ics are more than a band, they're an experience.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
