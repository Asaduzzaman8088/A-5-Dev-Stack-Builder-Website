import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white">
      <div className="container relative flex h-20 items-center justify-between">

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex h-10 w-10 items-center justify-center text-3xl text-gray-700 md:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>

        {/* Logo */}
        <div className="flex items-center gap-2 md:flex-1 max-md:absolute max-md:left-1/2 max-md:-translate-x-1/2">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-lg text-sm font-bold text-white"
            style={{ backgroundImage: "var(--brand-gradient)" }}
          >
            DS
          </div>

          <span
            className="bg-clip-text text-xl font-bold text-transparent"
            style={{ backgroundImage: "var(--brand-gradient)" }}
          >
            Dev Stack
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-9 md:flex">
          <a
            href="#"
            className="text-sm font-medium text-pink-500"
          >
            Home
          </a>

          <a
            href="#"
            className="text-sm text-gray-600 transition hover:text-pink-500"
          >
            Technologies
          </a>

          <a
            href="#"
            className="text-sm text-gray-600 transition hover:text-pink-500"
          >
            Projects
          </a>

          <a
            href="#"
            className="text-sm text-gray-600 transition hover:text-pink-500"
          >
            About
          </a>

          <a
            href="#"
            className="text-sm text-gray-600 transition hover:text-pink-500"
          >
            Contact
          </a>
        </div>

        {/* Auth Buttons */}
        {/* Auth Buttons */}
<div className="flex items-center justify-end gap-5 md:flex-1">
  <button className="text-sm font-medium text-gray-700 transition hover:text-pink-600">
    Sign In
  </button>

  <button
    className="inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-medium text-white shadow-sm transition-all hover:opacity-90 active:scale-95"
    style={{ backgroundImage: "var(--brand-gradient, linear-gradient(135deg, #a855f7 0%, #ec4899 100%))" }}
  >
    Sign Up
  </button>
</div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute left-0 top-full z-50 w-full border-t border-gray-100 bg-white shadow-lg md:hidden">
          <div className="container py-5">
            <div className="flex flex-col gap-5">

              <a
                href="#"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium text-pink-500"
              >
                Home
              </a>

              <a
                href="#"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm text-gray-600"
              >
                Technologies
              </a>

              <a
                href="#"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm text-gray-600"
              >
                Projects
              </a>

              <a
                href="#"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm text-gray-600"
              >
                About
              </a>

              <a
                href="#"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm text-gray-600"
              >
                Contact
              </a>

            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;