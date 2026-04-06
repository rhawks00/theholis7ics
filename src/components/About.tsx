export function About() {
  return (
    <section id="about" className="px-4 flex items-center justify-center">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-5xl font-black text-white mb-16 text-center pb-12">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start px-4">
          <div>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              The Holis7ics are the Ambassadors of Love, Funk and Roll and are here to shake up your soul. 
              This seven-piece powerhouse fuses rock, funk, and soul into a high-voltage sound that's as fresh as it is 
              unforgettable. This all-star lineup drawn from iconic acts is a celebration of musical chemistry 
              and raw talent. Their original tracks hit hard with infectious hooks, deep lyrics, and a pulse you 
              can’t ignore. Their creative takes on “Holis7icized“ covers will give you favorite new versions of classic 
              hits. The Holis7ics are more than a band, they’re an experience.
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