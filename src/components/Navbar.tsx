import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('profile');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['profile', 'about', 'projects', 'experience', 'education', 'skills', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180 && rect.bottom >= 180) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Profile', href: '#profile', id: 'profile' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Skills', href: '#skills', id: 'skills' },
  ];

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="sticky top-4 z-50 px-4 w-full flex justify-center pointer-events-none">
      <nav
        id="navbar-container"
        className={`pointer-events-auto transition-all duration-300 rounded-full border border-neutral-200/90 px-3 sm:px-4 py-2 flex items-center justify-between gap-3 sm:gap-6 max-w-2xl w-full shadow-xs ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white/90 backdrop-blur-sm'
        }`}
      >
        {/* Left: Avatar / Monogram */}
        <a
          href="#profile"
          onClick={(e) => {
            e.preventDefault();
            scrollTo('#profile');
          }}
          className="flex items-center gap-2.5 group pl-1"
          id="nav-logo"
        >
          <div className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center text-xs font-bold tracking-wider group-hover:scale-105 transition-transform overflow-hidden ring-1 ring-neutral-300">
            <span className="font-semibold">GD</span>
          </div>
          <span className="text-xs font-semibold text-neutral-900 hidden sm:inline-block">송금담</span>
        </a>

        {/* Middle: Links */}
        <div className="hidden md:flex items-center gap-1 text-xs font-medium text-neutral-600">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(item.href);
                }}
                className={`px-3 py-1.5 rounded-full transition-colors ${
                  isActive
                    ? 'text-neutral-950 font-semibold bg-neutral-100'
                    : 'hover:text-neutral-900 hover:bg-neutral-50'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        {/* Right: Contact CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-2">
          <button
            id="nav-contact-btn"
            type="button"
            onClick={onContactClick}
            className="cursor-pointer bg-neutral-900 hover:bg-neutral-800 active:scale-95 text-white text-xs font-medium px-4 py-2 rounded-full transition-all duration-200 flex items-center gap-1 shadow-xs"
          >
            <span>Contact Me</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
          </button>

          {/* Mobile menu trigger */}
          <button
            id="nav-mobile-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-neutral-700 hover:text-neutral-900 rounded-full hover:bg-neutral-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div
          id="nav-mobile-dropdown"
          className="pointer-events-auto absolute top-16 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl border border-neutral-200 p-4 shadow-xl flex flex-col gap-1 md:hidden max-w-md mx-auto animate-in fade-in slide-in-from-top-2 duration-200"
        >
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.href)}
              className="text-left px-4 py-2.5 rounded-xl text-sm font-medium text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100 transition-colors"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 border-t border-neutral-100 mt-1">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onContactClick();
              }}
              className="w-full text-center py-2.5 rounded-xl bg-neutral-900 text-white text-sm font-medium"
            >
              연락처 및 이메일 보기
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
