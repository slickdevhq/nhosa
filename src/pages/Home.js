import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [stats, setStats] = useState({ students: 0, teachers: 0, years: 0, awards: 0 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  let testimonials =[]
  // Animated counter effect
  useEffect(() => {
    const targets = { students: 1200, teachers: 85, years: 25, awards: 50 };
    const duration = 2000;
    const steps = 60;
    const increment = duration / steps;

    let current = { students: 0, teachers: 0, years: 0, awards: 0 };
    const timer = setInterval(() => {
      Object.keys(targets).forEach(key => {
        if (current[key] < targets[key]) {
          current[key] = Math.min(current[key] + Math.ceil(targets[key] / steps), targets[key]);
        }
      });
      setStats({ ...current });

      if (Object.keys(targets).every(key => current[key] >= targets[key])) {
        clearInterval(timer);
      }
    }, increment);

    return () => clearInterval(timer);
  }, []);

  // Mouse parallax effect
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

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: 'Academic Excellence',
      description: 'Our rigorous curriculum and dedicated teachers ensure students achieve their highest potential in academics.',
      link: '/academics',
      gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
      delay: '0s'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Character Development',
      description: 'We focus on developing well-rounded individuals with strong moral values and leadership skills.',
      link: '/about',
      gradient: 'from-violet-500 via-purple-500 to-fuchsia-500',
      delay: '0.1s'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: 'Modern Facilities',
      description: 'Our state-of-the-art facilities provide an optimal learning environment for all students.',
      link: '/about',
      gradient: 'from-amber-500 via-orange-500 to-red-500',
      delay: '0.2s'
    }
  ];

  const newsItems = [
    {
      date: 'September 15, 2025',
      title: 'Annual Science Fair Winners Announced',
      excerpt: 'Congratulations to all participants in this year\'s Science Fair. The creativity and innovation displayed were truly impressive.',
      category: 'Academics',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      date: 'September 10, 2025',
      title: 'Sports Day Celebration',
      excerpt: 'Our annual Sports Day was a huge success with students showcasing their athletic abilities and team spirit.',
      category: 'Sports',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      date: 'September 5, 2025',
      title: 'New Computer Lab Inauguration',
      excerpt: 'We are proud to announce the opening of our new state-of-the-art computer laboratory equipped with the latest technology.',
      category: 'Facilities',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

   testimonials = [
    {
      name: 'Adebayo Johnson',
      role: 'Parent',
      content: 'The teachers at Nhosa are exceptional. They\'ve helped my child develop not just academically but also in character and confidence.',
      initials: 'AJ',
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      name: 'Chioma Okafor',
      role: 'Student',
      content: 'I love the supportive environment at Nhosa. The teachers encourage us to pursue our interests and provide guidance whenever we need it.',
      initials: 'CO',
      gradient: 'from-violet-500 to-purple-500'
    },
    {
      name: 'Oluwaseun Adeyemi',
      role: 'Alumni',
      content: 'My years at Nhosa prepared me well for university and beyond. The values and education I received continue to guide me in my professional life.',
      initials: 'OA',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="pt-16 overflow-hidden">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes rotate-gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        
        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out forwards;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out forwards;
        }
        
        .bg-gradient-animate {
          background-size: 200% 200%;
          animation: rotate-gradient 8s ease infinite;
        }
        
        .glass-morphism {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.18);
        }
        
        .glass-morphism-light {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.9);
        }
        
        .text-shadow-glow {
          text-shadow: 0 0 40px rgba(255, 255, 255, 0.5);
        }
        
        .hover-lift {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .hover-lift:hover {
          transform: translateY(-12px) scale(1.02);
        }
        
        .gradient-border {
          position: relative;
          background: white;
        }
        
        .gradient-border::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 2px;
          background: linear-gradient(135deg, #10b981, #06b6d4, #8b5cf6);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
        }
        
        .glow-on-hover:hover {
          box-shadow: 0 0 40px rgba(16, 185, 129, 0.4), 0 0 80px rgba(16, 185, 129, 0.2);
        }
        
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-900">
        {/* Animated mesh gradient background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(16,185,129,0.2),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(139,92,246,0.1),transparent_50%)]"></div>
        </div>

        {/* Floating orbs with parallax */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse-glow"
            style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
          ></div>
          <div 
            className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-teal-500/15 rounded-full blur-3xl animate-pulse-glow"
            style={{ transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`, animationDelay: '1s' }}
          ></div>
          <div 
            className="absolute top-1/2 right-1/3 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-glow"
            style={{ transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`, animationDelay: '2s' }}
          ></div>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 sm:py-24 lg:py-32">   
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="text-white space-y-6 sm:space-y-8 animate-slide-in-left">
              {/* Status Badge */}
              <div className="inline-flex items-center px-4 py-2 glass-morphism rounded-full">
                <span className="flex h-2 w-2 mr-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                </span>
                <span className="text-xs sm:text-sm font-semibold bg-gradient-to-r from-emerald-200 to-teal-200 bg-clip-text text-transparent">
                  Now Accepting Applications for 2025/2026
                </span>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1] tracking-tight">
                  <span className="block text-white/90 text-shadow-glow">Welcome to</span>
                  <span className="block mt-2 sm:mt-3 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent bg-gradient-animate">
                    Nhosa
                  </span>
                </h1>
                
                <div className="h-1 w-24 sm:w-32 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"></div>
              </div>

              {/* Subtitle */}
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-emerald-50/90 leading-relaxed max-w-2xl font-light">
                Nurturing Excellence, Building Character, Shaping Future Leaders in Abeokuta, Nigeria
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  to="/admissions" 
                  className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 font-bold text-sm sm:text-base text-slate-900 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(16,185,129,0.6)] hover:scale-105"
                >
                  <span className="relative z-10 flex items-center">
                    Apply Now
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-300 to-teal-300 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </Link>
                
                <Link 
                  to="/about" 
                  className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 font-semibold text-sm sm:text-base text-white glass-morphism rounded-full hover:bg-white/15 transition-all"
                >
                  Learn More
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6 animate-slide-in-right">
              {[
                { value: stats.students, label: 'Active Students', suffix: '+' },
                { value: stats.teachers, label: 'Expert Teachers', suffix: '+' },
                { value: stats.years, label: 'Years of Excellence', suffix: '+' },
                { value: stats.awards, label: 'Awards Won', suffix: '+' }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="group relative glass-morphism rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 hover:bg-white/15 transition-all hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Gradient border effect */}
                  <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-emerald-400/20 to-teal-400/20 opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
                  
                  <div className="relative z-10">
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-black mb-1 sm:mb-2 bg-gradient-to-br from-white to-emerald-200 bg-clip-text text-transparent">
                      {stat.value}{stat.suffix}
                    </div>
                    <div className="text-xs sm:text-sm lg:text-base text-emerald-100/80 font-medium">{stat.label}</div>
                  </div>
                  
                  {/* Corner accent */}
                  <div className="absolute top-2 right-2 sm:top-3 sm:right-3 w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full opacity-60"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modern wave divider */}
        <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32">
          <svg className="absolute bottom-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 120" fill="none">
            <path d="M0,64 C240,96 480,96 720,64 C960,32 1200,32 1440,64 L1440,120 L0,120 Z" fill="white" opacity="0.1"/>
            <path d="M0,80 C360,110 720,110 1080,80 C1260,65 1350,65 1440,80 L1440,120 L0,120 Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 lg:py-32 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-100 rounded-full blur-3xl opacity-30 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-100 rounded-full blur-3xl opacity-30 -z-10"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20 max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-emerald-100 rounded-full mb-4 sm:mb-6">
              <span className="text-xs sm:text-sm font-bold text-emerald-700 uppercase tracking-wider">Our Pillars</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 bg-gradient-to-r from-slate-900 via-emerald-800 to-teal-800 bg-clip-text text-transparent leading-tight">
              Why Choose Nhosa?
            </h2>
            
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
              We provide a nurturing environment where students excel academically, develop character, and prepare for future success.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group relative glass-morphism-light rounded-3xl p-6 sm:p-8 lg:p-10 hover-lift glow-on-hover"
                style={{ animationDelay: feature.delay }}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className={`relative w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl sm:rounded-3xl flex items-center justify-center mb-6 sm:mb-8 text-white shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  {feature.icon}
                  
                  {/* Glow effect */}
                  <div className={`absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${feature.gradient} blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500`}></div>
                </div>
                
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 text-slate-900 group-hover:text-emerald-700 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                  {feature.description}
                </p>
                
                <Link 
                  to={feature.link} 
                  className={`inline-flex items-center font-bold text-sm sm:text-base bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent group-hover:translate-x-2 transition-transform`}
                >
                  Explore
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>

                {/* Corner decoration */}
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-16 h-16 sm:w-20 sm:h-20 opacity-0 group-hover:opacity-10 transition-opacity">
                  <div className={`w-full h-full bg-gradient-to-br ${feature.gradient} rounded-full blur-2xl`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News & Events Section */}
      <section className="py-16 sm:py-20 lg:py-32 bg-slate-900 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 sm:mb-16 gap-4">
            <div>
              <div className="inline-block px-4 py-2 glass-morphism rounded-full mb-4">
                <span className="text-xs sm:text-sm font-bold text-emerald-400 uppercase tracking-wider">Latest Updates</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white">News & Events</h2>
            </div>
            
            <Link 
              to="/news" 
              className="group inline-flex items-center px-6 py-3 glass-morphism rounded-full text-white font-semibold hover:bg-white/15 transition-all text-sm sm:text-base"
            >
              View All
              <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {newsItems.map((item, index) => (
              <div 
                key={index}
                className="group relative glass-morphism rounded-3xl overflow-hidden hover-lift"
              >
                {/* Image with gradient overlay */}
                <div className={`relative h-48 sm:h-56 lg:h-64 bg-gradient-to-br ${item.gradient} overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors"></div>
                  
                  {/* Abstract pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 right-0 w-32 sm:w-40 h-32 sm:h-40 bg-white rounded-full blur-3xl -mr-16 sm:-mr-20 -mt-16 sm:-mt-20"></div>
                    <div className="absolute bottom-0 left-0 w-24 sm:w-32 h-24 sm:h-32 bg-white rounded-full blur-2xl -ml-12 sm:-ml-16 -mb-12 sm:-mb-16"></div>
                  </div>
                  
                  {/* Category badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 sm:px-4 py-1.5 sm:py-2 glass-morphism-light text-slate-900 text-xs sm:text-sm font-bold rounded-full backdrop-blur-xl">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="flex items-center text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">
                    <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {item.date}
                  </div>
                  
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-white group-hover:text-emerald-400 transition-colors leading-tight">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-gray-400 mb-6 leading-relaxed line-clamp-3">
                    {item.excerpt}
                  </p>
                  
                  <Link 
                    to="/news" 
                    className="inline-flex items-center text-sm sm:text-base font-bold text-emerald-400 group-hover:text-emerald-300 transition-colors"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 lg:py-32 bg-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-20 left-10 w-64 sm:w-80 h-64 sm:h-80 bg-emerald-500 rounded-full blur-3xl animate-pulse-glow"></div>
          <div className="absolute bottom-20 right-10 w-80 sm:w-96 h-80 sm:h-96 bg-teal-500 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16 max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-emerald-100 rounded-full mb-4 sm:mb-6">
              <span className="text-xs sm:text-sm font-bold text-emerald-700 uppercase tracking-wider">Testimonials</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 bg-gradient-to-r from-slate-900 via-emerald-800 to-teal-800 bg-clip-text text-transparent leading-tight">
              What Our Community Says
            </h2>
            
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
              Hear from our students, parents, and alumni about their experiences at Nhosa.
            </p>
          </div>

          {/* Testimonials Carousel */}
          <div className="max-w-5xl mx-auto mb-8 sm:mb-12">
            <div className="relative glass-morphism-light rounded-3xl sm:rounded-[2.5rem] p-8 sm:p-12 lg:p-16 shadow-2xl">
              {/* Quote decoration */}
              <div className="absolute top-6 sm:top-8 right-6 sm:right-8 text-emerald-100 opacity-30">
                <svg className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <div className="relative">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br ${testimonials[activeTestimonial].gradient} rounded-2xl sm:rounded-3xl flex items-center justify-center text-white font-black text-xl sm:text-2xl lg:text-3xl shadow-2xl flex-shrink-0`}>
                    {testimonials[activeTestimonial].initials}
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="font-black text-xl sm:text-2xl lg:text-3xl text-slate-900 mb-1 sm:mb-2">
                      {testimonials[activeTestimonial].name}
                    </h4>
                    <p className={`text-sm sm:text-base lg:text-lg font-bold bg-gradient-to-r ${testimonials[activeTestimonial].gradient} bg-clip-text text-transparent`}>
                      {testimonials[activeTestimonial].role}
                    </p>
                  </div>
                </div>

                <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed italic mb-6 sm:mb-8">
                  "{testimonials[activeTestimonial].content}"
                </p>

                {/* Rating stars */}
                <div className="flex gap-1 mb-6 sm:mb-8">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Navigation dots */}
                <div className="flex gap-2 sm:gap-3 justify-center">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className={`h-2 sm:h-2.5 rounded-full transition-all ${
                        index === activeTestimonial 
                          ? 'w-8 sm:w-12 bg-gradient-to-r from-emerald-500 to-teal-500' 
                          : 'w-2 sm:w-2.5 bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* All testimonials grid (hidden on mobile) */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`group relative glass-morphism-light p-6 lg:p-8 rounded-2xl lg:rounded-3xl transition-all cursor-pointer ${
                  index === activeTestimonial ? 'ring-2 ring-emerald-500 shadow-xl' : 'hover:shadow-lg'
                }`}
                onClick={() => setActiveTestimonial(index)}
              >
                <div className="flex items-center mb-4 lg:mb-6">
                  <div className={`w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br ${testimonial.gradient} rounded-xl lg:rounded-2xl flex items-center justify-center text-white font-bold text-base lg:text-lg mr-3 lg:mr-4 shadow-lg`}>
                    {testimonial.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base lg:text-lg">{testimonial.name}</h4>
                    <p className={`text-xs lg:text-sm font-semibold bg-gradient-to-r ${testimonial.gradient} bg-clip-text text-transparent`}>
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                <p className="text-sm lg:text-base text-gray-600 leading-relaxed italic line-clamp-4">
                  "{testimonial.content}"
                </p>

                <div className="flex mt-4 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 sm:py-20 lg:py-32 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.2),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(6,182,212,0.15),transparent_50%)]"></div>
        </div>

        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse-glow"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
          <div className="max-w-5xl mx-auto">
            <div className="inline-block px-4 py-2 glass-morphism rounded-full mb-6 sm:mb-8">
              <span className="text-xs sm:text-sm font-bold text-emerald-400 uppercase tracking-wider">Join Us Today</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 lg:mb-8 leading-tight">
              Ready to Join Our
              <span className="block mt-2 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                Community?
              </span>
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 lg:mb-12 text-emerald-50/90 leading-relaxed max-w-3xl mx-auto">
              Take the first step towards providing your child with a quality education that prepares them for future success.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 sm:mb-16 lg:mb-20">
              <Link 
                to="/admissions" 
                className="group inline-flex items-center justify-center px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 font-black text-sm sm:text-base lg:text-lg text-slate-900 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full transition-all hover:shadow-[0_0_50px_rgba(16,185,129,0.6)] hover:scale-105"
              >
                <span>Apply Now</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              
              <Link 
                to="/contact" 
                className="group inline-flex items-center justify-center px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 font-bold text-sm sm:text-base lg:text-lg text-white glass-morphism rounded-full hover:bg-white/15 transition-all"
              >
                <span>Contact Us</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </Link>
            </div>

            {/* Trust badges */}
            <div className="pt-12 sm:pt-16 border-t border-white/10">
              <p className="text-xs sm:text-sm text-emerald-200/80 mb-4 sm:mb-6 uppercase tracking-wider font-bold">Accredited & Recognized By</p>
              <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 lg:gap-6">
                {['Nigerian Ministry of Education', 'WAEC', 'NECO'].map((badge, index) => (
                  <div 
                    key={index}
                    className="glass-morphism px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-full hover:bg-white/15 transition-all"
                  >
                    <span className="text-xs sm:text-sm lg:text-base font-bold">{badge}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;