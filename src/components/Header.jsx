import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import MobileNav from './MobileNav';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blogs', href: '#blogs' },
    // { name: 'Leadership', href: '#leadership' }
  ];

  return (
    <>
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50">
        <nav className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo and Title */}
            <div className="flex flex-col">
              <a href="#home" className="text-xl lg:text-2xl font-bold text-blue-600">
                Xavier Inyangat
              </a>
              <span className="text-xs lg:text-sm text-gray-600 mt-0.5">
                Data Scientist | AI Engineer
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href} 
                  className="hover:text-blue-600 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            
              <a 
                href="#projects"
                className="w-full sm:w-auto border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-blue-50 transition-colors"
              >
                View Resume
                <span className="transform rotate-180">↓</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-600"
              onClick={() => setIsMenuOpen(true)}
            >
              <FiMenu size={24} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation */}
      <MobileNav 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
      />
    </>
  );
};

export default Header;
