import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeValue, setActiveValue] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const observerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      if (observerRef.current) observerRef.current.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);

  const coreValues = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Integrity",
      description: "We uphold honesty, transparency, and ethical behavior in all our actions and decisions.",
      gradient: "from-emerald-500 via-teal-500 to-cyan-500"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      title: "Excellence",
      description: "We strive for the highest standards in academics, character, and service to the community.",
      gradient: "from-violet-500 via-purple-500 to-fuchsia-500"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Respect",
      description: "We value diversity and treat all individuals with dignity, kindness, and consideration.",
      gradient: "from-amber-500 via-orange-500 to-red-500"
    }
  ];

  const leaders = [
    {
      name: "Dr. Oluwaseun Adeyemi",
      role: "Principal",
      description: "With over 20 years of experience in education, Dr. Adeyemi leads our school with vision and dedication to excellence.",
      gradient: "from-emerald-600 to-teal-600"
    },
    {
      name: "Mrs. Folake Ogunleye",
      role: "Vice Principal, Academics",
      description: "Mrs. Ogunleye oversees our academic programs, ensuring they meet the highest standards of educational excellence.",
      gradient: "from-violet-600 to-purple-600"
    },
    {
      name: "Mr. Chinedu Okafor",
      role: "Vice Principal, Administration",
      description: "Mr. Okafor manages the administrative functions of our school, ensuring smooth operations and resource management.",
      gradient: "from-blue-600 to-cyan-600"
    }
  ];

  const stats = [
    { value: "30+", label: "Years of Excellence" },
    { value: "5000+", label: "Alumni Worldwide" },
    { value: "98%", label: "University Admission" },
    { value: "50+", label: "Expert Teachers" }
  ];

  return (
    <div className="pt-16 overflow-hidden">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
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
        
        .hover-lift {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .hover-lift:hover {
          transform: translateY(-12px) scale(1.02);
        }
        
        .glow-on-hover:hover {
          box-shadow: 0 0 40px rgba(16, 185, 129, 0.4);
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
            style={{ transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)` }}
          ></div>
          <div 
            className="absolute top-1/2 right-1/3 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-glow"
            style={{ transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)` }}
          ></div>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 sm:py-24">
          <div className="text-white text-center max-w-6xl mx-auto">
            {/* Status Badge */}
            <div className="inline-flex items-center px-4 py-2 glass-morphism rounded-full mb-6 sm:mb-8">
              <span className="flex h-2 w-2 mr-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span className="text-xs sm:text-sm font-semibold text-emerald-200">
                Established 1995
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black mb-6 sm:mb-8 leading-tight">
              <span className="block text-white/90">About</span>
              <span className="block mt-2 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                Nhosa Secondary School
              </span>
            </h1>
            
            <div className="h-1 w-24 sm:w-32 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mx-auto mb-6 sm:mb-8"></div>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl md:text-2xl text-emerald-50/90 leading-relaxed max-w-4xl mx-auto font-light mb-12 sm:mb-16">
              Nurturing excellence, building character, and shaping future leaders in Abeokuta, Nigeria
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="group glass-morphism rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:bg-white/15 transition-all hover-lift"
                >
                  <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-emerald-400/20 to-teal-400/20 opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
                  
                  <div className="relative z-10">
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-black mb-2 bg-gradient-to-br from-white to-emerald-200 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-emerald-100/80 font-medium">{stat.label}</div>
                  </div>
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

      {/* Our Story Section */}
      <section className="py-16 sm:py-20 lg:py-32 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-100 rounded-full blur-3xl opacity-30 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-100 rounded-full blur-3xl opacity-30 -z-10"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div 
              id="story-content"
              data-animate
              className={`space-y-6 sm:space-y-8 transition-all duration-1000 ${
                isVisible['story-content'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <div className="inline-block px-4 py-2 bg-emerald-100 rounded-full mb-4">
                <span className="text-xs sm:text-sm font-bold text-emerald-700 uppercase tracking-wider">Our Journey</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight bg-gradient-to-r from-slate-900 via-emerald-800 to-teal-800 bg-clip-text text-transparent">
                Three Decades of Excellence
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-gray-600 leading-relaxed">
                <p>
                  Founded in 1995, Nhosa Secondary School has grown from a small institution to one of the most respected educational establishments in Abeokuta, Ogun State.
                </p>
                <p>
                  Our journey began with a simple mission: to provide quality education that develops both the mind and character of our students.
                </p>
                <p className="font-semibold text-emerald-700">
                  Today, we pride ourselves on our modern teaching methods, state-of-the-art facilities, and a curriculum that prepares students for success in a global context.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-4">
                <div>
                  <div className="text-4xl font-black text-emerald-600">5000+</div>
                  <div className="text-sm text-gray-500">Alumni Worldwide</div>
                </div>
                <div className="h-12 w-px bg-gray-300"></div>
                <div>
                  <div className="text-4xl font-black text-emerald-600">98%</div>
                  <div className="text-sm text-gray-500">Success Rate</div>
                </div>
              </div>
            </div>

            {/* Visual */}
            <div 
              id="story-visual"
              data-animate
              className={`relative transition-all duration-1000 ${
                isVisible['story-visual'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              <div className="relative h-96 lg:h-[500px] bg-gradient-to-br from-emerald-100 via-teal-50 to-cyan-100 rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-32 h-32 text-emerald-300/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 sm:py-20 lg:py-32 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16 max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 glass-morphism rounded-full mb-4 sm:mb-6">
              <span className="text-xs sm:text-sm font-bold text-emerald-400 uppercase tracking-wider">Our Foundation</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">Mission & Vision</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Mission */}
            <div
              id="mission-card"
              data-animate
              className={`group glass-morphism-light rounded-3xl p-8 sm:p-10 lg:p-12 hover-lift glow-on-hover transition-all duration-1000 ${
                isVisible['mission-card'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center text-white shadow-xl flex-shrink-0">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Our Mission</span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">Empowering Futures</h3>
                </div>
              </div>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
                To provide a comprehensive and balanced education that develops students intellectually, morally, socially, and physically, preparing them to be responsible citizens and future leaders.
              </p>

              <div className="space-y-3">
                {[
                  "Deliver high-quality education meeting international standards",
                  "Foster critical thinking and creativity",
                  "Instill strong moral values",
                  "Promote cultural awareness",
                  "Encourage community service"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300 text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Vision */}
            <div
              id="vision-card"
              data-animate
              className={`group glass-morphism-light rounded-3xl p-8 sm:p-10 lg:p-12 hover-lift glow-on-hover transition-all duration-1000 ${
                isVisible['vision-card'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center text-white shadow-xl flex-shrink-0">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs font-bold text-violet-400 uppercase tracking-wider">Our Vision</span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">Leading Excellence</h3>
                </div>
              </div>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
                To be the leading secondary school in Nigeria, recognized for academic excellence, character development, and producing well-rounded graduates who make positive contributions to society.
              </p>

              <div className="space-y-3">
                {[
                  "Every student valued and supported to reach full potential",
                  "Innovation drives our educational practices",
                  "Technology enhances learning experiences",
                  "Strong school-parent-community partnerships",
                  "Graduates sought by top universities globally"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-violet-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300 text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 sm:py-20 lg:py-32 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-100 rounded-full blur-3xl opacity-30 -z-10"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            id="values-header"
            data-animate
            className={`text-center mb-12 sm:mb-16 max-w-4xl mx-auto transition-all duration-1000 ${
              isVisible['values-header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="inline-block px-4 py-2 bg-emerald-100 rounded-full mb-4 sm:mb-6">
              <span className="text-xs sm:text-sm font-bold text-emerald-700 uppercase tracking-wider">What Drives Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 bg-gradient-to-r from-slate-900 via-emerald-800 to-teal-800 bg-clip-text text-transparent">
              Our Core Values
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {coreValues.map((value, index) => (
              <div
                key={index}
                id={`value-${index}`}
                data-animate
                onMouseEnter={() => setActiveValue(index)}
                className={`group glass-morphism-light rounded-3xl p-8 sm:p-10 hover-lift glow-on-hover transition-all duration-700 ${
                  isVisible[`value-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                } ${activeValue === index ? 'scale-105' : 'scale-100'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${value.gradient} rounded-2xl sm:rounded-3xl flex items-center justify-center mb-6 text-white shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 mx-auto`}>
                  {value.icon}
                  <div className={`absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${value.gradient} blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500`}></div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-slate-900 text-center group-hover:text-emerald-700 transition-colors">
                  {value.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed">
                  {value.description}
                </p>

                <div className="pt-4">
                  <div className={`h-1 w-16 bg-gradient-to-r ${value.gradient} rounded-full mx-auto group-hover:w-full transition-all duration-500`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 sm:py-20 lg:py-32 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div 
            id="leaders-header"
            data-animate
            className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
              isVisible['leaders-header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="inline-block px-4 py-2 glass-morphism rounded-full mb-4 sm:mb-6">
              <span className="text-xs sm:text-sm font-bold text-emerald-400 uppercase tracking-wider">Meet Our Leaders</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">Leadership Team</h2>
            <p className="text-base sm:text-lg lg:text-xl text-emerald-100/80 leading-relaxed max-w-3xl mx-auto">
              Experienced educators dedicated to your child's success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {leaders.map((leader, index) => (
              <div
                key={index}
                id={`leader-${index}`}
                data-animate
                className={`group glass-morphism rounded-3xl overflow-hidden hover-lift transition-all duration-1000 ${
                  isVisible[`leader-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`relative h-64 sm:h-80 bg-gradient-to-br ${leader.gradient} overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors"></div>
                  
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-3xl -mr-16 -mt-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full blur-2xl -ml-12 -mb-12"></div>
                  </div>
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-32 h-32 text-white/40 group-hover:text-white/60 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                </div>

                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-black text-white mb-2 group-hover:text-emerald-400 transition-colors">
                    {leader.name}
                  </h3>
                  
                  <div className={`inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r ${leader.gradient} text-white text-xs sm:text-sm font-bold rounded-full mb-4`}>
                    {leader.role}
                  </div>
                  
                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-4">
                    {leader.description}
                  </p>

                  <button className="inline-flex items-center text-sm font-bold text-emerald-400 group-hover:text-emerald-300 transition-colors">
                    <span>View Profile</span>
                    <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 sm:py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.2),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(6,182,212,0.15),transparent_50%)]"></div>
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse-glow"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse-glow"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
          <div className="max-w-5xl mx-auto">
            <div className="inline-block px-4 py-2 glass-morphism rounded-full mb-6 sm:mb-8">
              <span className="text-xs sm:text-sm font-bold text-emerald-400 uppercase tracking-wider">Join Us Today</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-4 sm:mb-6 lg:mb-8 leading-tight">
              Ready to Join Our
              <span className="block mt-2 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                Community?
              </span>
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 lg:mb-12 text-emerald-50/90 leading-relaxed max-w-3xl mx-auto">
              Take the first step towards providing your child with a quality education that prepares them for future success.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 sm:mb-16">
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

export default About;