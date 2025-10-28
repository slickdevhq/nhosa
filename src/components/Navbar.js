import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRefs = useRef({});
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (activeDropdown && !dropdownRefs.current[activeDropdown]?.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeDropdown]);

  const mainNavLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/academics', label: 'Academics' },
    { to: '/admissions', label: 'Admissions' },
    { to: '/news', label: 'News & Events' },
    { 
      label: 'Recognition',
      id: 'recognition',
      children: [
        { to: '/achieving-alumni', label: 'Alumni Excellence' },
        { to: '/teachers-of-the-year', label: 'Honored Teachers' },
      ]
    },
    { to: '/contact', label: 'Contact' },
  ];

  // Flatten navigation for mobile view
  const navLinks = mainNavLinks.reduce((acc, link) => {
    if (link.children) {
      return [...acc, ...link.children];
    }
    return [...acc, link];
  }, []);

  const isActive = (path) => location.pathname === path;
  
  const isChildActive = (children) => {
    if (!children) return false;
    return children.some(child => isActive(child.to));
  };

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
      <div className="container-custom mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center space-x-3 group">
            <div className="h-10 md:h-12 w-auto overflow-hidden rounded-lg shadow-lg group-hover:scale-105 transition-transform">
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
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-4 bg-white/50 rounded-full shadow-glow-soft px-2">
            {mainNavLinks.map((link) => (
              link.children ? (
                <div 
                  key={link.id}
                  className="relative"
                  ref={el => dropdownRefs.current[link.id] = el}
                >
                  <button
                    className={`flex items-center px-3 py-2 font-medium text-sm xl:text-base ${
                      isChildActive(link.children) || activeDropdown === link.id
                        ? 'text-green-600'
                        : 'text-slate-700 hover:text-green-600'
                    } transition-colors whitespace-nowrap`}
                    onClick={() => setActiveDropdown(activeDropdown === link.id ? null : link.id)}
                  >
                    {link.label}
                    <ChevronDown className={`ml-1 w-3 h-3 xl:w-4 xl:h-4 transition-transform ${
                      activeDropdown === link.id ? 'rotate-180' : ''
                    }`} />
                    {isChildActive(link.children) && (
                      <motion.span
                        layoutId="active-nav-link"
                        className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-green-500 to-green-600 rounded-full"
                        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                      />
                    )}
                  </button>
                  
                  <AnimatePresence>
                    {activeDropdown === link.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-1 w-56 rounded-lg bg-white shadow-lg py-2 z-50"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.to}
                            to={child.to}
                            className={`block px-4 py-2 text-sm ${
                              isActive(child.to)
                                ? 'bg-emerald-50 text-emerald-700 font-medium'
                                : 'text-slate-700 hover:bg-slate-50'
                            }`}
                            onClick={() => setActiveDropdown(null)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.to}
                  to={link.to}
                  className="relative px-3 py-2 font-medium text-sm xl:text-base text-slate-700 hover:text-green-600 transition-colors whitespace-nowrap"
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
              )
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
            className="lg:hidden absolute top-full left-0 right-0 mt-2 bg-white shadow-xl rounded-b-xl overflow-hidden"
          >
            <div className="container-custom py-4">
              <div className="flex flex-col space-y-2">
                {mainNavLinks.map((link, index) => (
                  link.children ? (
                    <div key={link.id} className="space-y-1">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="px-4 py-2 font-semibold text-sm text-emerald-700 uppercase tracking-wider"
                      >
                        {link.label}
                      </motion.div>
                      <div className="ml-4 border-l-2 border-emerald-100 pl-2 space-y-1">
                        {link.children.map((child, childIndex) => (
                          <motion.div
                            key={child.to}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: (index * 0.05) + (childIndex * 0.03) }}
                          >
                            <Link
                              to={child.to}
                              onClick={() => setIsMenuOpen(false)}
                              className={`block px-4 py-2 font-medium rounded-lg transition-colors ${
                                isActive(child.to)
                                  ? 'bg-emerald-50 text-emerald-700'
                                  : 'text-slate-700 hover:bg-slate-50'
                              }`}
                            >
                              {child.label}
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ) : (
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
                  )
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: mainNavLinks.length * 0.05 }}
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