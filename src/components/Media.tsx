import { FaSpotify } from 'react-icons/fa';
import { SiApplemusic } from 'react-icons/si';

export function Media() {
  const video = { id: 1, title: 'Kiss Live', url: 'https://www.youtube.com/embed/XAA86XtZrSU' };

  return (
    <section id="media" className="flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center w-full">
        <h2 className="text-5xl font-black text-white mb-16 pb-4">Hear Our Sound</h2>
        <div className="group rounded-2xl overflow-hidden backdrop-blur-sm bg-white/10 border border-white/20 hover:border-white/40 transition-all hover:bg-white/15 mb-12">
          <div className="aspect-video bg-black/50 overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src={video.url}
              title={video.title}
              className="w-full h-full"
              allowFullScreen
            />
          </div>
        </div>
        <div className="flex items-center justify-center gap-8 py-4">
          <a 
            href="https://open.spotify.com/artist/5aGwc6eYVVj1NQgcptq3vS" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center w-16 h-16 rounded-full bg-green-600 hover:bg-green-500 transition-colors shadow-lg"
            title="Listen on Spotify"
          >
            <FaSpotify className="w-8 h-8 text-white" />
          </a>
          
          <a 
            href="https://music.apple.com/us/artist/the-holis7ics/1645785381" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-red-500 hover:from-pink-400 hover:to-red-400 transition-colors shadow-lg"
            title="Listen on Apple Music"
          >
            <SiApplemusic className="w-8 h-8 text-white" />
          </a>
        </div>
      </div>
    </section>
  );
}