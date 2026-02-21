export function About() {
  return (
    <section id="about" className="px-4 py-20 flex items-center justify-center">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-5xl font-black text-white mb-16 text-center pb-4">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start px-4">
          <div>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              THE HOLIS7ICS are frequency bouncing across the universe healing the world naturally with music. 
              With raw energy, meticulous craft, and unforgettable performances, they create sonic experiences 
              that transcend the ordinary. Their mission is to unite audiences through transformative music that elevates consciousness 
              and celebrates the healing power of sound.
            </p>
          </div>
          <div className="bg-gradient-to-br from-orange-400/20 to-purple-600/20 rounded-lg p-8 backdrop-blur-sm border border-white/10 text-center">
            <h3 className="text-2xl font-black text-white mb-6">The Sound</h3>
            <ul className="space-y-3 text-gray-300 flex flex-col items-center justify-center">
              <li className="flex items-center justify-center gap-3">
                <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                Original compositions
              </li>
              <li className="flex items-center justify-center gap-3">
                <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                Live energy & presence
              </li>
              <li className="flex items-center justify-center gap-3">
                <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                Healing frequencies
              </li>
              <li className="flex items-center justify-center gap-3">
                <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                Unforgettable experiences
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}