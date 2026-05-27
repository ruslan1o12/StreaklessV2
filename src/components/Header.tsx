interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setActiveTab('home')}>
            <img 
              src="/logo.jpg" 
              alt="Streakless Windows Logo" 
              className="h-14 w-auto"
            />
          </div>

          <nav className="hidden md:flex gap-8">
            <button
              onClick={() => setActiveTab('home')}
              className={`font-medium transition-colors ${
                activeTab === 'home' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => setActiveTab('portfolio')}
              className={`font-medium transition-colors ${
                activeTab === 'portfolio' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Portfolio
            </button>
            <a
              href="tel:416-889-9463"
              className="font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              Call Us
            </a>
          </nav>

          <a
            href="tel:416-889-9463"
            className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            416-889-9463
          </a>
        </div>
      </div>
    </header>
  );
}
