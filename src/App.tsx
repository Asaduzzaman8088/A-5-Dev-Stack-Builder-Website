import { useState } from "react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      {/* Navbar starts here */}
      <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-2xl text-gray-700 md:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>

          {/* Logo starts here */}
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 text-xs font-bold text-white">
              DS
            </div>

            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-lg font-bold text-transparent">
              Dev Stack
            </span>
          </div>
          {/* Logo ends here */}

          {/* Desktop Navigation starts here */}
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#"
              className="text-sm font-medium text-pink-500"
            >
              Home
            </a>

            <a
              href="#"
              className="text-sm text-gray-600 hover:text-pink-500"
            >
              Technologies
            </a>

            <a
              href="#"
              className="text-sm text-gray-600 hover:text-pink-500"
            >
              Projects
            </a>

            <a
              href="#"
              className="text-sm text-gray-600 hover:text-pink-500"
            >
              About
            </a>

            <a
              href="#"
              className="text-sm text-gray-600 hover:text-pink-500"
            >
              Contact
            </a>
          </div>
          {/* Desktop Navigation ends here */}

          {/* Authentication Buttons starts here */}
          <div className="flex items-center gap-2 sm:gap-4">
            <button className="text-sm font-medium text-gray-600">
              Sign In
            </button>

            <button className="rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-4 py-2 text-sm font-medium text-white">
              Sign Up
            </button>
          </div>
          {/* Authentication Buttons ends here */}

        </div>

        {/* Mobile Menu starts here */}
        {isMenuOpen && (
          <div className="border-t border-gray-100 bg-white px-6 py-4 md:hidden">
            <div className="flex flex-col gap-4">

              <a
                href="#"
                className="text-sm font-medium text-pink-500"
              >
                Home
              </a>

              <a
                href="#"
                className="text-sm text-gray-600 hover:text-pink-500"
              >
                Technologies
              </a>

              <a
                href="#"
                className="text-sm text-gray-600 hover:text-pink-500"
              >
                Projects
              </a>

              <a
                href="#"
                className="text-sm text-gray-600 hover:text-pink-500"
              >
                About
              </a>

              <a
                href="#"
                className="text-sm text-gray-600 hover:text-pink-500"
              >
                Contact
              </a>

            </div>
          </div>
        )}
        {/* Mobile Menu ends here */}

      </nav>
      {/* Navbar ends here */}
    </div>
  );
}

export default App;