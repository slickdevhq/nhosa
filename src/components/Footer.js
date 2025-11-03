import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, ChevronRight, ArrowUp, Facebook, Instagram, Twitter, Linkedin, Send, Sparkles, ExternalLink } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 4000);
    }
  };

  const quickLinks = [
    { to: '/', label: 'Home', icon: '🏠' },
    { to: '/about', label: 'About Us', icon: '📚' },
    { to: '/academics', label: 'Academics', icon: '🎓' },
    { to: '/admissions', label: 'Admissions', icon: '📝' },
    { to: '/news', label: 'News & Events', icon: '📰' },
    { to: '/contact', label: 'Contact Us', icon: '💬' },
  ];

  const resources = [
    { to: '#', label: 'Student Portal', icon: '👨‍🎓' },
    { to: '#', label: 'Parent Portal', icon: '👨‍👩‍👧' },
    { to: '#', label: 'Staff Portal', icon: '👨‍🏫' },
    { to: '#', label: 'School Calendar', icon: '📅' },
    { to: '#', label: 'Library Access', icon: '📖' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: <Facebook size={20} />, href: '#', gradient: 'from-blue-600 to-blue-400', hoverColor: 'hover:bg-blue-600' },
    { name: 'Instagram', icon: <Instagram size={20} />, href: '#', gradient: 'from-pink-600 via-purple-600 to-orange-500', hoverColor: 'hover:bg-gradient-to-br hover:from-pink-600 hover:via-purple-600 hover:to-orange-500' },
    { name: 'Twitter', icon: <Twitter size={20} />, href: '#', gradient: 'from-sky-600 to-sky-400', hoverColor: 'hover:bg-sky-500' },
    { name: 'LinkedIn', icon: <Linkedin size={20} />, href: '#', gradient: 'from-blue-700 to-blue-500', hoverColor: 'hover:bg-blue-700' },
  ];

  const achievements = [
    { number: '25+', label: 'Years Excellence' },
    { number: '1200+', label: 'Students' },
    { number: '50+', label: 'Awards Won' },
    { number: '95%', label: 'Success Rate' },
  ];

  return (
    <>
      <style>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(16, 185, 129, 0.3); }
          50% { box-shadow: 0 0 30px rgba(16, 185, 129, 0.6), 0 0 40px rgba(16, 185, 129, 0.3); }
        }
        
        @keyframes shimmer-line {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .gradient-animate {
          background-size: 200% 200%;
          animation: gradient-shift 8s ease infinite;
        }
        
        .glass-footer {
          background: rgba(15, 23, 42, 0.9);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }
        
        .glow-text:hover {
          text-shadow: 0 0 20px rgba(16, 185, 129, 0.5);
        }
        
        .link-hover-effect {
          position: relative;
          display: inline-block;
        }
        
        .link-hover-effect::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #10b981, #06b6d4);
          transition: width 0.3s ease;
        }
        
        .link-hover-effect:hover::after {
          width: 100%;
        }
        
        .newsletter-input:focus {
          box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
        }
        
        .social-icon-3d {
          transform-style: preserve-3d;
          transition: transform 0.3s ease;
        }
        
        .social-icon-3d:hover {
          transform: translateZ(20px) rotateY(10deg);
        }
      `}</style>

      <footer className="relative bg-gradient-to-b from-slate-900 via-slate-900 to-black text-slate-300 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:linear-gradient(to_bottom,white_5%,transparent_50%)]"></div>
          
          {/* Floating orbs with parallax */}
          <div 
            className="absolute top-20 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"
            style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
          ></div>
          <div 
            className="absolute bottom-20 right-10 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl"
            style={{ transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)` }}
          ></div>
          <div 
            className="absolute top-1/2 left-1/2 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl"
            style={{ transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)` }}
          ></div>
        </div>

        {/* Top Wave Divider */}
        <div className="absolute top-0 left-0 right-0 h-24 overflow-hidden">
          <svg className="absolute top-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 120" fill="none">
            <path d="M0,64 C240,96 480,96 720,64 C960,32 1200,32 1440,64 L1440,0 L0,0 Z" fill="white" opacity="0.03"/>
          </svg>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Stats Bar */}
          <div className="py-12 sm:py-16 border-b border-emerald-500/10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {achievements.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="relative inline-block">
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 blur-xl opacity-0 group-hover:opacity-30 transition-opacity"></div>
                  </div>
                  <div className="text-xs sm:text-sm text-slate-400 font-semibold uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Main Footer Content */}
          <div className="py-16 sm:py-20 lg:py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* School Info - Enhanced */}
            <motion.div 
              className="lg:col-span-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link to="/" className="inline-flex items-center space-x-3 lg:space-x-4 mb-6 group">
                <motion.div 
                  className="relative h-14 sm:h-16 w-auto overflow-hidden rounded-xl shadow-2xl"
                  whileHover={{ scale: 1.05, rotate: 3 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity"></div>
                  <img 
                    src={require('../assets/img/N U D Logo.jpg')} 
                    alt="Nhosa Logo" 
                    className="h-full w-full object-contain bg-white rounded-xl p-2"
                  />
                </motion.div>
                <div>
                  <div className="font-black text-2xl lg:text-3xl bg-gradient-to-r from-white via-emerald-100 to-teal-100 bg-clip-text text-transparent glow-text">
                    NHOSA
                  </div>
                  <div className="text-[10px] lg:text-xs text-emerald-400 font-bold tracking-[0.2em] uppercase">
                    Secondary School
                  </div>
                </div>
              </Link>
              
              <p className="mb-6 lg:mb-8 leading-relaxed text-slate-400 text-sm lg:text-base">
                Nurturing Excellence, Building Character, and Shaping Future Leaders in Abeokuta, Nigeria.
              </p>
              
              <div className="space-y-4 text-sm lg:text-base">
                {[
                  { icon: MapPin, text: 'Abeokuta, Ogun State, Nigeria', color: 'emerald' },
                  { icon: Phone, text: '+234 123 456 7890', color: 'teal' },
                  { icon: Mail, text: 'info@nhosaschool.edu.ng', color: 'cyan' }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="group flex items-start hover:translate-x-2 transition-transform cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className={`w-10 h-10 rounded-xl bg-${item.color}-500/10 flex items-center justify-center flex-shrink-0 mr-3 group-hover:bg-${item.color}-500/20 transition-colors`}>
                      <item.icon className={`w-4 h-4 text-${item.color}-400`} />
                    </div>
                    <span className="text-slate-300 group-hover:text-white transition-colors pt-2">
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quick Links - Enhanced */}
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-lg lg:text-xl font-black mb-6 lg:mb-8 text-white flex items-center">
                <div className="w-1 h-6 bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full mr-3"></div>
                Navigate
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li 
                    key={link.to}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link 
                      to={link.to} 
                      className="group flex items-center text-slate-400 hover:text-emerald-400 transition-colors"
                    >
                      <span className="text-lg mr-2">{link.icon}</span>
                      <span className="link-hover-effect font-medium">{link.label}</span>
                      <ChevronRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Resources - Enhanced */}
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-lg lg:text-xl font-black mb-6 lg:mb-8 text-white flex items-center">
                <div className="w-1 h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full mr-3"></div>
                Resources
              </h3>
              <ul className="space-y-3">
                {resources.map((resource, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link 
                      to={resource.to} 
                      className="group flex items-center text-slate-400 hover:text-purple-400 transition-colors"
                    >
                      <span className="text-lg mr-2">{resource.icon}</span>
                      <span className="link-hover-effect font-medium">{resource.label}</span>
                      <ExternalLink className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-all" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Newsletter - Enhanced */}
            <motion.div 
              className="lg:col-span-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-lg lg:text-xl font-black mb-4 lg:mb-6 text-white flex items-center">
                <Sparkles className="w-5 h-5 mr-2 text-emerald-400" />
                Stay Connected
              </h3>
              <p className="mb-6 text-slate-400 text-sm lg:text-base">
                Subscribe to our newsletter for the latest updates, news, and exclusive content.
              </p>
              
              <form onSubmit={handleSubscribe} className="mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  <div className="relative flex items-center glass-footer rounded-2xl border border-emerald-500/20 overflow-hidden">
                    <Mail className="absolute left-4 text-emerald-400" size={20} />
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email" 
                      className="newsletter-input w-full pl-12 pr-32 py-4 bg-transparent text-white placeholder-slate-500 focus:outline-none transition-all"
                      required
                    />
                    <motion.button 
                      type="submit"
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-2.5 rounded-xl text-white font-bold transition-all hover:shadow-lg flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {isSubscribed ? (
                        <>✓ Sent</>
                      ) : (
                        <>
                          <Send size={16} />
                          Subscribe
                        </>
                      )}
                    </motion.button>
                  </div>
                </div>
                
                <AnimatePresence>
                  {isSubscribed && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mt-4 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center gap-2"
                    >
                      <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: 'spring', stiffness: 500 }}
                        >
                          ✓
                        </motion.div>
                      </div>
                      <p className="text-emerald-400 text-sm font-semibold">
                        Thanks for subscribing! Check your inbox.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>

              {/* Social Links - Enhanced */}
              <div className="mb-4">
                <p className="text-sm font-bold text-white mb-4 flex items-center">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-emerald-500 to-transparent mr-3"></div>
                  Follow Our Journey
                </p>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a 
                      key={social.name}
                      href={social.href}
                      className={`social-icon-3d relative w-12 h-12 rounded-xl flex items-center justify-center text-slate-400 transition-all group overflow-hidden ${
                        hoveredSocial === index ? 'scale-110' : ''
                      }`}
                      onMouseEnter={() => setHoveredSocial(index)}
                      onMouseLeave={() => setHoveredSocial(null)}
                      whileHover={{ y: -5 }}
                      aria-label={social.name}
                    >
                      {/* Background */}
                      <div className="absolute inset-0 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl"></div>
                      
                      {/* Gradient on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${social.gradient} opacity-0 group-hover:opacity-100 transition-opacity rounded-xl`}></div>
                      
                      {/* Icon */}
                      <div className="relative z-10 group-hover:text-white transition-colors">
                        {social.icon}
                      </div>
                      
                      {/* Glow effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${social.gradient} blur-xl opacity-0 group-hover:opacity-50 transition-opacity`}></div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar - Enhanced */}
          <div className="border-t border-emerald-500/10 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
              <motion.div 
                className="text-slate-400 flex items-center gap-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span>&copy; {new Date().getFullYear()} Nhosa Secondary School. All Rights Reserved.</span>
              </motion.div>
              
              <motion.div 
                className="flex gap-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <Link to="#" className="text-slate-400 hover:text-emerald-400 transition-colors font-semibold link-hover-effect">
                  Privacy Policy
                </Link>
                <Link to="#" className="text-slate-400 hover:text-emerald-400 transition-colors font-semibold link-hover-effect">
                  Terms of Use
                </Link>
                <Link to="#" className="text-slate-400 hover:text-emerald-400 transition-colors font-semibold link-hover-effect">
                  Sitemap
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Back to Top Button - Enhanced */}
        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0, y: 20 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-emerald-600 to-teal-600 text-white rounded-2xl shadow-2xl hover:shadow-emerald-500/50 transition-all z-50 flex items-center justify-center group overflow-hidden"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Back to top"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
              
              {/* Icon */}
              <ArrowUp className="w-6 h-6 sm:w-7 sm:h-7 relative z-10 transition-transform group-hover:-translate-y-1" />
              
              {/* Pulse ring */}
              <div className="absolute inset-0 border-2 border-emerald-400 rounded-2xl animate-ping opacity-20"></div>
            </motion.button>
          )}
        </AnimatePresence>
      </footer>
    </>
  );
};

export default Footer;