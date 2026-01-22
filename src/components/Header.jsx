export default function Header() {
  return (
    <nav className="p-6 shadow-md h-16">
      <div className="container mx-auto flex justify-between items-center max-w-7xl">
        <div className="text-2l font-bold">
          Cathy Chan
        </div>
        <div className="flex gap-6">
          <a href="#" className="relative px-3 pb-1 text-sm font-bold group">
            Projects
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"/>
          </a>
          <a href="#" className="relative px-3 pb-1 text-sm font-bold group">
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"/>
          </a>
          <a href="#" className="relative px-3 pb-1 text-sm font-bold group">
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"/>
          </a>
        </div>
      </div>
    </nav>
  )
}