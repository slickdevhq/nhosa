import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/academics', label: 'Academics' },
    { to: '/admissions', label: 'Admissions' },
    { to: '/news', label: 'News & Events' },
    { to: '/contact', label: 'Contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <motion.nav
      initial={false}
      animate={{ 
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0)',
        boxShadow: isScrolled ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none',
        paddingTop: isScrolled ? '0.75rem' : '1.5rem',
        paddingBottom: isScrolled ? '0.75rem' : '1.5rem',
      }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg"
    >
      <div className="container-custom">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="h-12 w-auto overflow-hidden rounded-lg shadow-lg group-hover:scale-105 transition-transform">
              <img 
                src={require('../assets/img/N U D Logo.jpg')} 
                alt="Nhosa Secondary School Logo" 
                className="h-full w-full object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <div className="font-display font-bold text-xl text-slate-800">
                NHOSA
              </div>
              <div className="text-xs text-emerald-700 font-medium -mt-1 tracking-wider">
                SECONDARY SCHOOL
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center bg-white/50 rounded-full shadow-glow-soft px-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="relative px-4 py-2 font-medium text-sm text-slate-700 hover:text-green-600 transition-colors"
              >
                {link.label}
                {isActive(link.to) && (
                  <motion.span
                    layoutId="active-nav-link"
                    className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-green-500 to-green-600 rounded-full"
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Apply Now Button - Desktop */}
          <div className="hidden lg:block">
            <Link
              to="/admissions"
              className="group inline-flex items-center px-6 py-2.5 font-semibold text-white bg-emerald-600 rounded-full hover:bg-emerald-700 transition-all duration-300 shadow-glow"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-slate-800 hover:text-emerald-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 right-0 mt-2 bg-white shadow-xl"
          >
            <div className="container-custom py-4">
              <div className="flex flex-col space-y-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={link.to}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-4 py-3 font-semibold rounded-lg transition-colors ${
                        isActive(link.to)
                          ? 'bg-emerald-50 text-emerald-700'
                          : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                >
                  <Link
                    to="/admissions"
                    onClick={() => setIsMenuOpen(false)}
                    className="mt-4 block w-full text-center px-6 py-3 font-semibold text-white bg-emerald-600 rounded-full hover:bg-emerald-700 transition-all"
                  >
                    Apply Now
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;