import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, ChevronRight, ArrowUp, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Note: Smart "Back to Top" button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  const quickLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/academics', label: 'Academics' },
    { to: '/admissions', label: 'Admissions' },
    { to: '/news-events', label: 'News & Events' },
    { to: '/contact', label: 'Contact Us' },
  ];

  const resources = [
    { to: '#', label: 'Student Portal' },
    { to: '#', label: 'Parent Portal' },
    { to: '#', label: 'Staff Portal' },
    { to: '#', label: 'School Calendar' },
    { to: '#', label: 'Library Access' },
  ];

  // Note: Using Lucide icons for consistency and clean code
  const socialLinks = [
    { name: 'Facebook', icon: <Facebook size={20} />, href: '#' },
    { name: 'Instagram', icon: <Instagram size={20} />, href: '#' },
    { name: 'Twitter', icon: <Twitter size={20} />, href: '#' },
    { name: 'LinkedIn', icon: <Linkedin size={20} />, href: '#' },
  ];

  return (
    // Note: A richer, brand-aligned background
    <footer className="relative bg-slate-900 text-slate-300 overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-800/20 [mask-image:linear-gradient(to_bottom,white_5%,transparent_50%)]"></div>
      
      <div className="container-custom relative z-10">
        <div className="py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          
          {/* School Info */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-flex items-center space-x-3 mb-6 group">
              <div className="h-12 w-auto overflow-hidden rounded-lg shadow-lg group-hover:scale-105 transition-transform">
                <img 
                  src={require('../assets/img/N U D Logo.jpg')} 
                  alt="Nhosa Secondary School Logo" 
                  className="h-full w-full object-contain bg-white"
                />
              </div>
              <div>
                <div className="font-display font-bold text-xl text-white">NHOSA</div>
                <div className="text-xs text-slate-400 tracking-wider">SECONDARY SCHOOL</div>
              </div>
            </Link>
            <p className="mb-6 leading-relaxed">Nurturing Excellence, Building Character, and Shaping Future Leaders in Abeokuta, Nigeria.</p>
            <div className="space-y-3 text-sm">
              <div className="flex items-start"><MapPin className="w-4 h-4 mr-3 text-emerald-400 mt-0.5 flex-shrink-0" /><span>Abeokuta, Ogun State, Nigeria</span></div>
              <div className="flex items-center"><Phone className="w-4 h-4 mr-3 text-emerald-400" /><span>+234 123 456 7890</span></div>
              <div className="flex items-center"><Mail className="w-4 h-4 mr-3 text-emerald-400" /><span>info@nhosaschool.edu.ng</span></div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-display font-bold mb-6 text-white">Navigate</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="group flex items-center hover:text-emerald-300 transition-colors">
                    <ChevronRight className="w-4 h-4 mr-2 text-emerald-500 transition-transform group-hover:translate-x-1" /> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-display font-bold mb-6 text-white">Resources</h3>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <Link to={resource.to} className="group flex items-center hover:text-indigo-300 transition-colors">
                    <ChevronRight className="w-4 h-4 mr-2 text-indigo-500 transition-transform group-hover:translate-x-1" /> {resource.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-4">
            <h3 className="text-lg font-display font-bold mb-6 text-white">Stay Connected</h3>
            <p className="mb-4">Subscribe to our newsletter for the latest updates.</p>
            <form onSubmit={handleSubscribe} className="mb-6">
              <div className="relative flex items-center">
                <Mail className="absolute left-4 text-slate-400" size={18} />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address" 
                  className="w-full pl-11 pr-32 py-3 bg-slate-800 border border-slate-700 rounded-full text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                  required
                />
                <button 
                  type="submit"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-indigo-600 px-5 py-2 rounded-full text-white font-semibold transition-all hover:bg-indigo-700"
                >
                  {isSubscribed ? 'Sent!' : 'Sign Up'}
                </button>
              </div>
              <AnimatePresence>
                {isSubscribed && (
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="text-green-400 text-sm mt-2"
                  >
                    ✓ Thanks for subscribing!
                  </motion.p>
                )}
              </AnimatePresence>
            </form>

            <p className="text-sm font-semibold text-white mb-3">Follow Us</p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.href} 
                  className="w-10 h-10 bg-slate-800 border border-slate-700 rounded-full flex items-center justify-center text-slate-400 hover:bg-indigo-600 hover:border-indigo-600 hover:text-white transition-all hover:scale-110"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0 text-sm text-slate-400">
            <div>&copy; {new Date().getFullYear()} Nhosa Secondary School. All Rights Reserved.</div>
            <div className="flex space-x-6">
              <Link to="#" className="hover:text-indigo-300 transition-colors">Privacy Policy</Link>
              <Link to="#" className="hover:text-indigo-300 transition-colors">Terms of Use</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 w-12 h-12 btn-primary text-white rounded-full shadow-glow hover:bg-indigo-700 transition-all hover:scale-110 z-40 flex items-center justify-center group"
            aria-label="Back to top"
          >
            <ArrowUp className="w-6 h-6 transition-transform group-hover:-translate-y-1" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;