export function Divider() {
  return (
    <div className="flex items-center justify-center gap-4 py-12 px-4 group">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent"></div>
      <div className="flex items-center justify-center gap-6 text-orange-400">
        <span className="text-xl opacity-40 animate-note-float transition-all" style={{animationDelay: '0s'}}>♪</span>
        <span className="text-2xl opacity-60 animate-note-float transition-all" style={{animationDelay: '0.15s'}}>♫</span>
        <span className="text-3xl opacity-80 animate-note-float transition-all" style={{animationDelay: '0.3s'}}>♩ </span>
        <span className="text-4xl opacity-100 animate-note-float transition-all" style={{animationDelay: '0.45s'}}>♪</span>
        <span className="text-3xl opacity-80 animate-note-float transition-all" style={{animationDelay: '0.3s'}}>♫</span>
        <span className="text-2xl opacity-60 animate-note-float transition-all" style={{animationDelay: '0.15s'}}>♪</span>
        <span className="text-xl opacity-40 animate-note-float transition-all" style={{animationDelay: '0s'}}>♫</span>
      </div>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent"></div>
    </div>
  );
}