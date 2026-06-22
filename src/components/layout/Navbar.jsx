import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Shield } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/', isRoute: true },
    { name: 'Services', path: '/services', isRoute: true },
    { name: 'Benefits', path: '/benefits', isRoute: true },
    { name: 'About', path: '/about', isRoute: true },
    { name: 'Testimonials', path: '/testimonials', isRoute: true },
    { name: 'Contact', path: '/contact', isRoute: true },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-lg border-b border-secondary/10'
          : 'bg-white/90 backdrop-blur-sm border-b border-secondary/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Brand */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-secondary/20 p-2 rounded-full transition-transform duration-300 group-hover:scale-105">
              <Shield className="h-5 w-5 text-secondary" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-primary">
                Akash Singh
              </span>
              <span className="text-[10px] tracking-wider font-semibold text-secondary">
                CPRW™ · Leadership Intelligence
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => {
              if (link.isRoute) {
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-sm font-medium transition-colors duration-300 text-primary/70 hover:text-secondary"
                  >
                    {link.name}
                  </Link>
                );
              }
              return (
                <a
                  key={link.path}
                  href={link.path}
                  className="text-sm font-medium transition-colors duration-300 text-primary/70 hover:text-secondary"
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white bg-secondary hover:bg-primary rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Book a Call
            </a>
          </div>

          {/* Mobile toggle */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md transition-all text-primary hover:bg-secondary/10"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden fixed inset-0 top-20 bg-white/95 backdrop-blur-lg z-40 border-t border-secondary/10 transition-all duration-300 transform ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        <div className="px-6 pt-6 pb-8 space-y-3 h-full flex flex-col justify-between">
          <div className="space-y-2">
            {navLinks.map((link) => {
              const commonClasses = `block px-4 py-3 rounded-lg text-sm font-medium transition-all text-primary/70 hover:bg-secondary/10 hover:text-secondary`;
              if (link.isRoute) {
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={commonClasses}
                  >
                    {link.name}
                  </Link>
                );
              }
              return (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={commonClasses}
                >
                  {link.name}
                </a>
              );
            })}
          </div>
          <div className="px-4 pb-12">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center py-4 text-sm font-semibold text-white bg-secondary hover:bg-primary rounded-full transition-colors shadow-md"
            >
              Secure Your Session
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}