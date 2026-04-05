export function BandMembers() {
  const members = [
    {
      id: 1,
      name: 'Member One',
      role: 'Vocals',
      bio: 'Lead vocalist bringing raw energy and powerful presence to every performance.',
      image: '/images/member1.jpg',
    },
    {
      id: 2,
      name: 'Member Two',
      role: 'Guitar',
      bio: 'Master guitarist crafting intricate melodies and sonic landscapes.',
      image: '/images/member2.jpg',
    },
    {
      id: 3,
      name: 'Member Three',
      role: 'Bass',
      bio: 'Solid bass foundation that drives the rhythm and energy of the band.',
      image: '/images/member3.jpg',
    },
    {
      id: 4,
      name: 'Member Four',
      role: 'Drums',
      bio: 'Dynamic drummer setting the beat and keeping the groove alive.',
      image: '/images/member4.jpg',
    },
  ];

  return (
    <section id="band-members" className="px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-white mb-4">Meet the Band</h2>
        </div>

        <div className="space-y-12">
          {members.map((member, index) => (
            <div
              key={member.id}
              className={`group flex items-center gap-8 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
            >
              {/* Image Container */}
              <div className="flex-shrink-0 w-64 h-64 rounded-lg overflow-hidden backdrop-blur-sm bg-white/10 border border-white/20 hover:border-orange-400/50 transition-all">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-3xl font-black text-white mb-2">{member.name}</h3>
                <p className="text-orange-400 font-bold text-lg mb-4">{member.role}</p>
                <p className="text-gray-300 text-base leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}