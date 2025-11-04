import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Academics = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeTrack, setActiveTrack] = useState(0);
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

  const teachingApproaches = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Student-Centered Learning",
      description: "We place students at the center of the learning process, encouraging active participation, inquiry, and discovery.",
      gradient: "from-emerald-500 via-teal-500 to-cyan-500"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      ),
      title: "Technology Integration",
      description: "We incorporate modern technology into our teaching methods to enhance learning experiences and prepare students for the digital age.",
      gradient: "from-violet-500 via-purple-500 to-fuchsia-500"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Personalized Attention",
      description: "Our small class sizes allow teachers to provide individualized attention and support to each student based on their unique needs.",
      gradient: "from-amber-500 via-orange-500 to-red-500"
    }
  ];

  const facilities = [
    {
      title: "Science Laboratories",
      description: "Fully equipped physics, chemistry, and biology labs that provide hands-on learning experiences for our students.",
      icon: (
        <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Computer Laboratory",
      description: "Modern computer lab with high-speed internet access for research, programming, and digital skills development.",
      icon: (
        <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Library",
      description: "Extensive collection of books, journals, and digital resources to support research and foster a love for reading.",
      icon: (
        <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const tracks = [
    { 
      name: "Science", 
      gradient: "from-blue-500 to-cyan-500", 
      subjects: ["Physics", "Chemistry", "Biology", "Further Math"] 
    },
    { 
      name: "Arts", 
      gradient: "from-purple-500 to-pink-500", 
      subjects: ["Literature", "Government", "History", "Visual Arts"] 
    },
    { 
      name: "Commercial", 
      gradient: "from-orange-500 to-red-500", 
      subjects: ["Accounting", "Commerce", "Economics", "Business"] 
    }
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
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
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
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span className="text-xs sm:text-sm font-semibold text-emerald-200">
                World-Class Education
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black mb-6 sm:mb-8 leading-tight">
              <span className="block text-white/90">Academic</span>
              <span className="block mt-2 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                Excellence
              </span>
            </h1>
            
            <div className="h-1 w-24 sm:w-32 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mx-auto mb-6 sm:mb-8"></div>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl md:text-2xl text-emerald-50/90 leading-relaxed max-w-4xl mx-auto font-light mb-12 sm:mb-16">
              A comprehensive curriculum designed to prepare students for success in higher education and beyond
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
              {[
                { value: "98%", label: "Pass Rate" },
                { value: "15+", label: "Core Subjects" },
                { value: "3", label: "Specialized Tracks" },
                { value: "1:20", label: "Teacher-Student Ratio" }
              ].map((stat, index) => (
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

      {/* Curriculum Overview */}
      <section className="py-16 sm:py-20 lg:py-32 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-100 rounded-full blur-3xl opacity-30 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-100 rounded-full blur-3xl opacity-30 -z-10"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div 
              id="curriculum-content"
              data-animate
              className={`space-y-6 sm:space-y-8 transition-all duration-1000 ${
                isVisible['curriculum-content'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <div className="inline-block px-4 py-2 bg-emerald-100 rounded-full mb-4">
                <span className="text-xs sm:text-sm font-bold text-emerald-700 uppercase tracking-wider">Our Curriculum</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight bg-gradient-to-r from-slate-900 via-emerald-800 to-teal-800 bg-clip-text text-transparent">
                Comprehensive Learning Experience
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-gray-600 leading-relaxed">
                <p>
                  At Nhosa Secondary School, we offer a comprehensive curriculum that aligns with the Nigerian Educational Research and Development Council (NERDC) standards while incorporating global best practices.
                </p>
                <p>
                  Our academic program is designed to develop critical thinking, problem-solving skills, and creativity in our students.
                </p>
                <div className="glass-morphism-light p-6 rounded-2xl border-l-4 border-emerald-600">
                  <p className="font-semibold text-emerald-900">
                    Students are prepared for the West African Senior School Certificate Examination (WASSCE) and other national and international examinations, with consistently outstanding results.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-4">
                <div>
                  <div className="text-4xl font-black text-emerald-600">98%</div>
                  <div className="text-sm text-gray-500">Pass Rate</div>
                </div>
                <div className="h-12 w-px bg-gray-300"></div>
                <div>
                  <div className="text-4xl font-black text-emerald-600">15+</div>
                  <div className="text-sm text-gray-500">Core Subjects</div>
                </div>
              </div>
            </div>

            {/* Visual */}
            <div 
              id="curriculum-visual"
              data-animate
              className={`relative transition-all duration-1000 ${
                isVisible['curriculum-visual'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              <div className="relative h-96 lg:h-[500px] bg-gradient-to-br from-emerald-100 via-teal-50 to-cyan-100 rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-32 h-32 text-emerald-300/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Levels */}
      <section className="py-16 sm:py-20 lg:py-32 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div 
            id="levels-header"
            data-animate
            className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
              isVisible['levels-header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="inline-block px-4 py-2 glass-morphism rounded-full mb-4 sm:mb-6">
              <span className="text-xs sm:text-sm font-bold text-emerald-400 uppercase tracking-wider">Educational Journey</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">Academic Levels</h2>
            <p className="text-base sm:text-lg lg:text-xl text-emerald-100/80 leading-relaxed max-w-3xl mx-auto">
              Progressive learning paths tailored to student development
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Junior Secondary */}
            <div
              id="junior-card"
              data-animate
              className={`group glass-morphism-light rounded-3xl p-8 sm:p-10 lg:p-12 hover-lift glow-on-hover transition-all duration-1000 ${
                isVisible['junior-card'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-xs sm:text-sm font-bold text-emerald-600 uppercase tracking-wider">Foundation</span>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">Junior Secondary</h3>
                  <p className="text-gray-500 mt-1">JSS 1-3</p>
                </div>
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-emerald-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
              </div>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
                Building a strong foundation in core subjects while encouraging exploration and discovery. Developing essential skills for senior secondary education.
              </p>

              <div className="space-y-3">
                <h4 className="font-bold text-base sm:text-lg text-slate-900">Core Subjects</h4>
                <div className="grid grid-cols-2 gap-2">
                  {["English Language", "Mathematics", "Basic Science", "Basic Technology", "Social Studies", "Civic Education", "Creative Arts", "Business Studies", "Computer Studies", "Physical Education"].map((subject, idx) => (
                    <div key={idx} className="flex items-center text-xs sm:text-sm text-gray-600">
                      <svg className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {subject}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Senior Secondary */}
            <div
              id="senior-card"
              data-animate
              className={`group glass-morphism-light rounded-3xl p-8 sm:p-10 lg:p-12 hover-lift glow-on-hover transition-all duration-1000 ${
                isVisible['senior-card'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-xs sm:text-sm font-bold text-violet-600 uppercase tracking-wider">Specialization</span>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">Senior Secondary</h3>
                  <p className="text-gray-500 mt-1">SSS 1-3</p>
                </div>
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-violet-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
              </div>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
                Specialized tracks allowing students to focus on their areas of interest and strength, preparing them for higher education and future careers.
              </p>

              <div className="space-y-4">
                <h4 className="font-bold text-base sm:text-lg text-slate-900">Specialized Tracks</h4>
                {[
                  { track: "Science", subjects: "Physics, Chemistry, Biology, Further Math" },
                  { track: "Arts", subjects: "Literature, Government, History, Visual Arts" },
                  { track: "Commercial", subjects: "Accounting, Commerce, Economics, Business" }
                ].map((item, idx) => (
                  <div key={idx} className="glass-morphism-light p-4 rounded-xl">
                    <div className="font-semibold text-emerald-700 mb-1 text-sm sm:text-base">{item.track}</div>
                    <div className="text-xs sm:text-sm text-gray-600">{item.subjects}</div>
                  </div>
                ))}
                <p className="text-xs sm:text-sm text-gray-500 italic pt-2">
                  All tracks include: English Language, Mathematics, Civic Education & Computer Studies
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Tracks */}
      <section className="py-16 sm:py-20 lg:py-32 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-100 rounded-full blur-3xl opacity-30 -z-10"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            id="tracks-header"
            data-animate
            className={`text-center mb-12 sm:mb-16 max-w-4xl mx-auto transition-all duration-1000 ${
              isVisible['tracks-header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="inline-block px-4 py-2 bg-emerald-100 rounded-full mb-4 sm:mb-6">
              <span className="text-xs sm:text-sm font-bold text-emerald-700 uppercase tracking-wider">Choose Your Path</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 bg-gradient-to-r from-slate-900 via-emerald-800 to-teal-800 bg-clip-text text-transparent">
              Specialized Tracks
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
              Discover your passion and excel in your chosen field
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {tracks.map((track, index) => (
              <div
                key={index}
                id={`track-${index}`}
                data-animate
                onMouseEnter={() => setActiveTrack(index)}
                className={`group glass-morphism-light rounded-3xl overflow-hidden hover-lift glow-on-hover transition-all duration-700 ${
                  isVisible[`track-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                } ${activeTrack === index ? 'scale-105' : 'scale-100'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`h-32 bg-gradient-to-br ${track.gradient} relative`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-white rounded-full blur-2xl -mr-12 -mt-12"></div>
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-4">{track.name}</h3>
                  <div className="space-y-2">
                    {track.subjects.map((subject, idx) => (
                      <div key={idx} className="flex items-center text-sm sm:text-base text-gray-600">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${track.gradient} mr-3 flex-shrink-0`}></div>
                        {subject}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Approach */}
      <section className="py-16 sm:py-20 lg:py-32 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div 
            id="approach-header"
            data-animate
            className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
              isVisible['approach-header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="inline-block px-4 py-2 glass-morphism rounded-full mb-4 sm:mb-6">
              <span className="text-xs sm:text-sm font-bold text-emerald-400 uppercase tracking-wider">Our Methodology</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">Teaching Approach</h2>
            <p className="text-base sm:text-lg lg:text-xl text-emerald-100/80 leading-relaxed max-w-3xl mx-auto">
              Innovative methods that inspire learning and growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {teachingApproaches.map((approach, index) => (
              <div
                key={index}
                id={`approach-${index}`}
                data-animate
                className={`group glass-morphism-light rounded-3xl p-8 sm:p-10 hover-lift glow-on-hover transition-all duration-1000 ${
                  isVisible[`approach-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${approach.gradient} rounded-2xl sm:rounded-3xl flex items-center justify-center mb-6 text-white shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 mx-auto`}>
                  {approach.icon}
                  <div className={`absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${approach.gradient} blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500`}></div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 text-center">{approach.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed">{approach.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Facilities */}
      <section className="py-16 sm:py-20 lg:py-32 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-100 rounded-full blur-3xl opacity-30 -z-10"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            id="facilities-header"
            data-animate
            className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
              isVisible['facilities-header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="inline-block px-4 py-2 bg-emerald-100 rounded-full mb-4 sm:mb-6">
              <span className="text-xs sm:text-sm font-bold text-emerald-700 uppercase tracking-wider">State-of-the-Art</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 bg-gradient-to-r from-slate-900 via-emerald-800 to-teal-800 bg-clip-text text-transparent">
              Academic Facilities
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Modern infrastructure supporting exceptional learning experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {facilities.map((facility, index) => (
              <div
                key={index}
                id={`facility-${index}`}
                data-animate
                className={`group glass-morphism-light rounded-3xl overflow-hidden hover-lift glow-on-hover transition-all duration-1000 ${
                  isVisible[`facility-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`h-64 bg-gradient-to-br ${facility.gradient} relative overflow-hidden flex items-center justify-center`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-3xl -mr-16 -mt-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full blur-2xl -ml-12 -mb-12"></div>
                  </div>
                  <div className="relative z-10 text-white opacity-60 group-hover:opacity-100 transition-opacity">
                    {facility.icon}
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3">{facility.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Support */}
      <section className="py-16 sm:py-20 lg:py-32 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div 
              id="support-visual"
              data-animate
              className={`relative order-2 lg:order-1 transition-all duration-1000 ${
                isVisible['support-visual'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <div className="relative h-96 lg:h-[500px] bg-gradient-to-br from-emerald-100 via-teal-50 to-cyan-100 rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-32 h-32 text-emerald-300/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
              </div>
            </div>

            <div 
              id="support-content"
              data-animate
              className={`space-y-6 order-1 lg:order-2 transition-all duration-1000 ${
                isVisible['support-content'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              <div className="inline-block px-4 py-2 glass-morphism rounded-full mb-4">
                <span className="text-xs sm:text-sm font-bold text-emerald-400 uppercase tracking-wider">Student Success</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                Academic Support System
              </h2>
              <p className="text-base sm:text-lg text-emerald-100/80 leading-relaxed">
                We are committed to helping every student succeed academically. Our comprehensive support system ensures no student is left behind.
              </p>

              <div className="space-y-4 pt-4">
                {[
                  {
                    title: "Tutorial Sessions",
                    description: "Extra help for students who need additional support in specific subjects"
                  },
                  {
                    title: "Guidance Counseling",
                    description: "Academic advisors who help students make informed decisions about their educational paths"
                  },
                  {
                    title: "Study Groups",
                    description: "Collaborative learning opportunities that enhance understanding and retention"
                  },
                  {
                    title: "Exam Preparation",
                    description: "Specialized programs to prepare students for WASSCE, NECO, and other examinations"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 glass-morphism-light p-6 rounded-2xl hover:bg-white/80 transition-all">
                    <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-base sm:text-lg text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-sm sm:text-base text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
              Experience Academic
              <span className="block mt-2 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                Excellence
              </span>
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 lg:mb-12 text-emerald-50/90 leading-relaxed max-w-3xl mx-auto">
              Join Nhosa Secondary School and embark on a journey of academic discovery and growth.
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
                <span>Schedule a Visit</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
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

export default Academics;