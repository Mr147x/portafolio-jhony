export default function Navbar() {
  return (
    <header className="flex justify-between items-center py-6 px-6 md:px-16 border-b border-gray-200">
      <div className="font-bold text-xl tracking-widest">JHONY</div>
      <nav className="hidden md:flex gap-8 text-sm font-medium">
        <a href="#" className="hover:text-gray-500 transition-colors">Work</a>
        <a href="#" className="hover:text-gray-500 transition-colors">About</a>
        <a href="#" className="hover:text-gray-500 transition-colors">Contact</a>
      </nav>
    </header>
  )
}