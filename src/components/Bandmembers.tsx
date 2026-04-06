export function BandMembers() {
  const members = [
    {
      id: 1,
      name: "Jeff 'Dog' Schmidgall",
      role: 'Guitar',
      bio: `Jeff "Dog" Schmidgall was always surrounded by music from his mom and dad. Elvis was his first concert. He saw Randy Rhoads play guitar with Ozzy Osbourne and wanted to make people feel the way Randy made him feel with the sounds he created. Dog started playing guitar a few months before Rhoads died. In high school, he played in Second Generation, where he and Greg Brown first played together. He toured the United States & Canada as a guitar tech for Jim Dandy & Black Oak Arkansas 1988 to 1989.
            Dog returned home and assembled the band Raw Honey. After 10 years with Raw Honey, he played for several years with the blues group Bobbye King & The Ladies Choice Band. In the late 1990s, Dog joined the band Slow Traffic, where he first played with Jeff Neavor. He went on to play with The Mothership, Good to Go, Everybody and the Governor. In the band, Pink Sushi, he first played with Ty Bailey. He also played in the Dog & Dorann Show.
            In 2021, Dog reached out to Bailey, Brown, and Neavor and they put together The Holis7ics.`,
      image: '/images/Dog.jpg',
    },
    {
      id: 2,
      name: 'Jeff Neavor',
      role: 'Saxophone, Keys',
      bio: '',
      image: '/images/JeffN.jpg',
    },
    {
      id: 3,
      name: 'Colin Winkelmann',
      role: 'Drums',
      bio: 'Colin drums winkelmann drums winkel yeah drums colin yep',
      image: '/images/ColinW.JPG',
    },
    {
      id: 4,
      name: 'Ty Bailey',
      role: 'Aux Percussion',
      bio: `Ty Bailey grew up surrounded by music, where it was always a source of joy. Funk, soul, rock, gospel, and later even a bit of country shaped his musical foundation. From an early age, Ty was constantly creating rhythms, banging on boxes, buckets, school desks—anything his hands could reach. Around the age of 14, he bought his first drum set and began turning that natural rhythm into something more focused.
            Much of Ty's musical journey began in church, where he played drums for most of his early career. Though he never considered himself a traditional drummer, keeping a solid beat came naturally to him. His perspective on music changed when he discovered hand percussion, pushing him to grow, explore new sounds, and challenge himself creatively.
            Ty first played in a band called Untitled with a group of friends before being approached by Jeff "Dog" Schmidgall to join Pink Sushi, where they played together for several years. He later joined the Bogart Jones Band, a chapter that allowed him to expand his presence in the local music community and deepen his passion for performing.
            After that run, Ty found himself unsure of where he fit musically—until Dog reached out once again. In 2021, Ty joined Dog, Brown, and Neavor to form The Holis7ics, where the beat continues to grow and evolve.`,
      image: '/images/TyB.jpg',
    },
    {
      id: 5,
      name: "Greg Brown",
      role: 'Bass',
      bio: `Bass player for the Holis7ics, Greg Brown built his foundation in the LA and Hollywood music scenes between 1987 and 2000. During that period, he performed with bands including Avalon, Rock Hard, and Black Diamond, developing a reputation for solid groove and adaptability across styles. He also worked as a session bassist with Diamond Studios, contributing to a range of projects in the studio environment. 
            After stepping away from music in 2000, Brown returned to playing in 2015 following a move back to central Illinois. His current work with The Holis7ics reflects on his early professional experience, a renewed focus on live performance and sharing his love for the BASS. `,
      image: '/images/GregB.jpg',
    },
    {
      id: 6,
      name: "Paige White",
      role: 'Vocals',
      bio: `Paige White is a Peoria-based vocalist and songwriter originally from Champaign, Illinois. She began performing at the age of eight and grew up immersed in the Champaign-Urbana Theater Company (CUTC), where she also explored multiple instruments.
            In middle school, Paige began sharing original music and covers online, first through MySpace and later on YouTube. In 2018, she started working with the production company Absent State, initially releasing music under the name Syris before transitioning to the name paigenotfound.
            She has released four tracks to date—three original songs available on Spotify, Apple Music, and YouTube, along with a cover released on YouTube.
            After relocating to Peoria, Paige joined The Holis7ics, bringing her performance background and original songwriting to the group.`,
      image: '/images/PaigeW.jpg',
    },
    {
      id: 7,
      name: "Jared Taylor",
      role: 'Trumpet',
      bio: `Jared Taylor is a Peoria-area composer, trumpeter, and vocalist. A former student of Jeff Neavor and classmate of Colin Winkelmann, Jared now works with students at Morton High School during the fall while performing with The Holis7ics.
            In addition to his performance work, Jared composes for the Zephyr Brass Collective based in Denver, Colorado. He continues to develop his craft throughout the Midwest, with the goal of becoming a full-time composer and writer.`,
      image: '/images/JaredT.jpeg',
    },
  ];

  return (
    <section id="band-members" className="px-4 py-20 flex justify-center">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-24">
          <h2 className="text-5xl font-black text-white mb-4">Meet the Band</h2>
        </div>

        <div className="space-y-20 pt-10 ">
          {members.map((member, index) => (
            <div
              key={member.id}
              className={` py-4 group flex flex-col md:flex-row items-center gap-4 md:gap-12 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} `}
            >
              {/* Image Container */}
              <div className="flex-shrink-0 w-80 h-80 md:w-[22rem] md:h-[22rem] lg:w-[32rem] lg:h-[32rem] rounded-lg overflow-hidden backdrop-blur-sm bg-white/10 border border-white/20 transition-all">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-black text-white mb-2 text-center md:text-left">{member.name}</h3>
                <p className="text-orange-400 font-bold text-base md:text-lg mb-4 text-center md:text-left">{member.role}</p>
                <p className="text-xl text-gray-300 leading-relaxed text-left">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}