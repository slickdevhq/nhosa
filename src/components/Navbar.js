import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, ChevronDown, Sparkles } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRefs = useRef({});
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
    { to: '/about', label: 'About' },
    { to: '/academics', label: 'Academics' },
    { to: '/admissions', label: 'Admissions' },
    { to: '/news', label: 'News' },
    { 
      label: 'More',
      id: 'recognition',
      children: [
        { to: '/achieving-alumni', label: 'Alumni Excellence', icon: '🎓' },
        { to: '/teachers-of-the-year', label: 'Honored Teachers', icon: '🏆' },
      ]
    },
    { to: '/contact', label: 'Contact' },
  ];

  const isActive = (path) => location.pathname === path;
  
  const isChildActive = (children) => {
    if (!children) return false;
    return children.some(child => isActive(child.to));
  };

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  return (
    <>
      <style>{`
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 20px rgba(16, 185, 129, 0.3); }
          50% { box-shadow: 0 0 30px rgba(16, 185, 129, 0.5), 0 0 40px rgba(16, 185, 129, 0.3); }
        }
        
        .glass-nav {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border-bottom: 1px solid rgba(255, 255, 255, 0.3);
        }
        
        .glass-dropdown {
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.5);
        }
        
        .nav-link-hover {
          position: relative;
        }
        
        .nav-link-hover::before {
          content: '';
          position: absolute;
          inset: -6px;
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.08), rgba(6, 182, 212, 0.08));
          border-radius: 14px;
          opacity: 0;
          transition: opacity 0.3s;
        }
        
        .nav-link-hover:hover::before {
          opacity: 1;
        }
        
        .shimmer-btn {
          background: linear-gradient(90deg, #10b981 0%, #059669 50%, #10b981 100%);
          background-size: 200% 100%;
          animation: shimmer 3s linear infinite;
        }
        
        .mobile-menu-bg {
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
        }
        
        .glow-border {
          position: relative;
        }
        
        .glow-border::after {
          content: '';
          position: absolute;
          inset: -2px;
          background: linear-gradient(135deg, #10b981, #06b6d4, #8b5cf6);
          border-radius: inherit;
          opacity: 0;
          z-index: -1;
          transition: opacity 0.3s;
          filter: blur(8px);
        }
        
        .glow-border:hover::after {
          opacity: 0.5;
        }
      `}</style>

      <motion.nav
        initial={false}
        animate={{ 
          y: isScrolled ? 0 : 0,
        }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'glass-nav shadow-[0_8px_32px_rgba(0,0,0,0.08)]' 
            : 'bg-transparent'
        }`}
      >
        {/* Animated gradient line at top */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-0 transition-opacity duration-500"
          style={{ opacity: isScrolled ? 1 : 0 }}
        ></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
          <div className="flex justify-between items-center h-20 lg:h-[88px]">
            {/* Logo - Enhanced */}
            <Link to="/" className="flex-shrink-0 flex items-center space-x-3 lg:space-x-4 group relative z-10">
              <motion.div 
                className="relative h-12 md:h-14 lg:h-[60px] w-auto overflow-hidden rounded-xl shadow-lg"
                whileHover={{ scale: 1.05, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
                <img 
                  src={require('../assets/img/N U D Logo.jpg')} 
                  alt="Nhosa Logo" 
                  className="h-full w-full object-contain relative z-10"
                />
              </motion.div>
              
              <div className="hidden sm:block">
                <motion.div 
                  className="font-black text-xl lg:text-2xl xl:text-3xl bg-gradient-to-r from-slate-900 via-emerald-800 to-slate-900 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.02 }}
                >
                  NHOSA
                </motion.div>
                <div className="text-[10px] lg:text-xs text-emerald-600 font-bold -mt-1 tracking-[0.2em] uppercase">
                  Secondary School
                </div>
              </div>
            </Link>

            {/* Desktop Navigation - FIXED & SPACIOUS */}
            <div className="hidden lg:flex items-center flex-1 justify-center mx-8 xl:mx-12">
              <div className="flex items-center gap-1 xl:gap-2 rounded-full px-4 py-2.5 bg-white/70 shadow-lg border border-white/50">
                {mainNavLinks.map((link, index) => (
                  link.children ? (
                    <div 
                      key={link.id}
                      className="relative"
                      ref={el => dropdownRefs.current[link.id] = el}
                    >
                      <motion.button
                        className={`nav-link-hover flex items-center gap-1.5 px-3 xl:px-4 py-2 font-semibold text-[13px] xl:text-[14px] rounded-xl transition-all whitespace-nowrap ${
                          isChildActive(link.children) || activeDropdown === link.id
                            ? 'text-emerald-600 bg-emerald-50/70'
                            : 'text-slate-700 hover:text-emerald-600 hover:bg-slate-50/50'
                        }`}
                        onClick={() => setActiveDropdown(activeDropdown === link.id ? null : link.id)}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        {link.label}
                        <motion.div
                          animate={{ rotate: activeDropdown === link.id ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="w-3.5 h-3.5" />
                        </motion.div>
                      </motion.button>
                      
                      <AnimatePresence>
                        {activeDropdown === link.id && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2, ease: 'easeOut' }}
                            className="absolute left-0 mt-2 w-64 rounded-2xl glass-dropdown shadow-2xl py-2 overflow-hidden"
                          >
                            {/* Gradient border effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-teal-500/10 to-cyan-500/10 pointer-events-none"></div>
                            
                            {link.children.map((child, childIndex) => (
                              <motion.div
                                key={child.to}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: childIndex * 0.05 }}
                              >
                                <Link
                                  to={child.to}
                                  className={`flex items-center gap-3 px-5 py-3 text-sm font-semibold transition-all ${
                                    isActive(child.to)
                                      ? 'bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700'
                                      : 'text-slate-700 hover:bg-slate-50'
                                  }`}
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  <span className="text-xl">{child.icon}</span>
                                  <span>{child.label}</span>
                                  {isActive(child.to) && (
                                    <div className="ml-auto w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                                  )}
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={link.to}
                      to={link.to}
                    >
                      <motion.div
                        className={`nav-link-hover relative px-3 xl:px-4 py-2 font-semibold text-[13px] xl:text-[14px] rounded-xl transition-all whitespace-nowrap ${
                          isActive(link.to)
                            ? 'text-emerald-600 bg-emerald-50/70'
                            : 'text-slate-700 hover:text-emerald-600 hover:bg-slate-50/50'
                        }`}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        {link.label}
                        {isActive(link.to) && (
                          <motion.div
                            layoutId="active-nav-indicator"
                            className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-emerald-500 rounded-full"
                            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                          />
                        )}
                      </motion.div>
                    </Link>
                  )
                ))}
              </div>
            </div>

            {/* Apply Now Button - FIXED SIZE */}
            <div className="hidden lg:flex items-center flex-shrink-0">
              <Link to="/admissions">
                <motion.div
                  className="glow-border relative group inline-flex items-center gap-2 px-5 xl:px-6 py-2.5 xl:py-3 font-bold text-[13px] xl:text-[14px] text-white rounded-full overflow-hidden shadow-xl whitespace-nowrap"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  {/* Animated gradient background */}
                  <div className="absolute inset-0 shimmer-btn"></div>
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                  </div>
                  
                  <span className="relative z-10 flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    Apply Now
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </motion.div>
              </Link>
            </div>

            {/* Mobile Menu Button - Enhanced */}
            <motion.button
              className={`lg:hidden relative p-3 rounded-xl transition-all ${
                isMenuOpen 
                  ? 'bg-emerald-500 text-white' 
                  : isScrolled 
                    ? 'bg-white/80 text-slate-800 hover:bg-emerald-50' 
                    : 'bg-white text-slate-800 hover:bg-emerald-50'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu - Enhanced */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-20 right-4 bottom-4 w-[calc(100%-2rem)] max-w-md mobile-menu-bg rounded-3xl shadow-2xl z-50 lg:hidden overflow-hidden"
            >
              {/* Gradient decoration */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500"></div>
              
              <div className="h-full overflow-y-auto p-6 space-y-2">
                {mainNavLinks.map((link, index) => (
                  link.children ? (
                    <motion.div 
                      key={link.id}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="space-y-2"
                    >
                      <div className="px-4 py-2 font-black text-xs text-emerald-600 uppercase tracking-wider flex items-center">
                        <div className="w-8 h-0.5 bg-gradient-to-r from-emerald-500 to-transparent mr-2"></div>
                        Recognition
                      </div>
                      <div className="space-y-1 ml-4">
                        {link.children.map((child, childIndex) => (
                          <motion.div
                            key={child.to}
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: (index * 0.05) + (childIndex * 0.03) }}
                          >
                            <Link
                              to={child.to}
                              className={`flex items-center gap-3 px-4 py-3 font-bold rounded-xl transition-all ${
                                isActive(child.to)
                                  ? 'bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700 shadow-sm'
                                  : 'text-slate-700 hover:bg-slate-50'
                              }`}
                            >
                              <span className="text-xl">{child.icon}</span>
                              <span>{child.label}</span>
                              {isActive(child.to) && (
                                <div className="ml-auto w-2 h-2 bg-emerald-500 rounded-full"></div>
                              )}
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key={link.to}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        to={link.to}
                        className={`flex items-center justify-between px-5 py-4 font-bold rounded-xl transition-all ${
                          isActive(link.to)
                            ? 'bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700 shadow-sm'
                            : 'text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        <span>{link.label}</span>
                        {isActive(link.to) && (
                          <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        )}
                      </Link>
                    </motion.div>
                  )
                ))}
                
                {/* Mobile Apply Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: mainNavLinks.length * 0.05 }}
                  className="pt-4"
                >
                  <Link
                    to="/admissions"
                    className="flex items-center justify-center gap-2 w-full px-6 py-4 font-black text-white rounded-xl shimmer-btn shadow-xl"
                  >
                    <Sparkles className="w-5 h-5" />
                    Apply Now
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;