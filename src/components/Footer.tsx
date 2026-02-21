export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 backdrop-blur-sm bg-white/5 py-8 px-4 px-4 flex items-center justify-center">
      <div className="max-w-7xl mx-auto text-center text-gray-400 text-sm">
        <p>&copy;{currentYear} The Holis7ics</p>
      </div>
    </footer>
  );
}