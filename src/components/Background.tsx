export function Background() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <div className="absolute top-0 -left-40 w-80 h-80 bg-orange-500 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-blob" />
      <div className="absolute top-20 right-0 w-80 h-80 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-blob animation-delay-2000" />
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-orange-400 rounded-full mix-blend-screen filter blur-3xl opacity-35 animate-blob animation-delay-3000" />
      <div className="absolute bottom-1/4 -left-20 w-60 h-60 bg-cyan-400 rounded-full mix-blend-screen filter blur-3xl opacity-25 animate-blob animation-delay-2000" />
    </div>
  );
}