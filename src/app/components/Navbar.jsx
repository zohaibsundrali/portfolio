'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

const sections = ['about', 'skills', 'projects', 'contact'];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('about');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="bg-[#0D1224] shadow w-full">
      <nav className="w-[85%] mx-auto flex justify-between items-center py-4">
        {/* Logo */}
        <Link href="/">
          <span className="cursor-pointer text-[#16F2B3] text-[16px] sm:text-[24px] md:text-[30px] font-bold">
            Zohaib Hassan
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 text-[17px] ">
          {sections.map((sec) => (
            <li key={sec}>
              <a
                href={`#${sec}`}
                className={`
                  text-white transition-all duration-300 transform ease-in-out
                  hover:text-[#DB2777] hover:scale-110
                  ${activeSection === sec ? 'text-[#DB2777] scale-110' : ''}
                `}
              >
                {sec.charAt(0).toUpperCase() + sec.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="w-[90%] mx-auto">
          <ul className="md:hidden flex flex-col items-center gap-6 pb-6 text-lg font-semibold">
            {sections.map((sec) => (
              <li key={sec}>
                <a
                  href={`#${sec}`}
                  onClick={handleLinkClick}
                  className={`
                    text-white transition-all duration-300 transform ease-in-out
                    hover:text-[#DB2777] hover:scale-110
                    ${activeSection === sec ? 'text-[#DB2777] scale-110' : ''}
                  `}
                >
                  {sec.charAt(0).toUpperCase() + sec.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
