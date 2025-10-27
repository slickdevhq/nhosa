import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const Academics = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeTrack, setActiveTrack] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const teachingApproaches = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Student-Centered Learning",
      description: "We place students at the center of the learning process, encouraging active participation, inquiry, and discovery."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      ),
      title: "Technology Integration",
      description: "We incorporate modern technology into our teaching methods to enhance learning experiences and prepare students for the digital age."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Personalized Attention",
      description: "Our small class sizes allow teachers to provide individualized attention and support to each student based on their unique needs and learning styles."
    }
  ];

  const facilities = [
    {
      title: "Science Laboratories",
      description: "Fully equipped physics, chemistry, and biology labs that provide hands-on learning experiences for our students.",
      icon: (
        <svg className="w-16 h-16 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: "Computer Laboratory",
      description: "Modern computer lab with high-speed internet access for research, programming, and digital skills development.",
      icon: (
        <svg className="w-16 h-16 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Library",
      description: "Extensive collection of books, journals, and digital resources to support research and foster a love for reading.",
      icon: (
        <svg className="w-16 h-16 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    }
  ];

  const tracks = [
    { name: "Science", color: "from-blue-500 to-cyan-500", subjects: ["Physics", "Chemistry", "Biology", "Further Math"] },
    { name: "Arts", color: "from-purple-500 to-pink-500", subjects: ["Literature", "Government", "History", "Visual Arts"] },
    { name: "Commercial", color: "from-orange-500 to-red-500", subjects: ["Accounting", "Commerce", "Economics", "Business"] }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section with Animated Background */}
      <section className="relative bg-gradient-to-br from-emerald-700 via-emerald-600 to-green-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div 
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        >
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span>World-Class Education</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Academic <span className="text-emerald-200">Excellence</span>
            </h1>
            <p className="text-xl md:text-2xl text-emerald-50 max-w-2xl leading-relaxed">
              A comprehensive curriculum designed to prepare students for success in higher education and beyond.
            </p>
          </div>
        </div>

        {/* Animated Orbs */}
        <div className="absolute top-20 right-20 w-40 h-40 bg-emerald-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 left-20 w-56 h-56 bg-green-400/20 rounded-full blur-3xl animate-pulse"></div>
      </section>

      {/* Curriculum Overview - Split Design */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <div className="inline-block">
                <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Our Curriculum</span>
                <div className="h-1 w-16 bg-emerald-600 mt-2"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Comprehensive Learning Experience
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  At Nhosa Secondary School, we offer a comprehensive curriculum that aligns with the Nigerian Educational Research and Development Council (NERDC) standards while incorporating global best practices.
                </p>
                <p>
                  Our academic program is designed to develop critical thinking, problem-solving skills, and creativity in our students. We emphasize both theoretical knowledge and practical applications to ensure a well-rounded education.
                </p>
                <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-lg">
                  <p className="font-medium text-emerald-900">
                    Students are prepared for the West African Senior School Certificate Examination (WASSCE) and other national and international examinations, with consistently outstanding results.
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div>
                  <div className="text-4xl font-bold text-emerald-600">98%</div>
                  <div className="text-sm text-gray-500">Pass Rate</div>
                </div>
                <div className="h-12 w-px bg-gray-300"></div>
                <div>
                  <div className="text-4xl font-bold text-emerald-600">15+</div>
                  <div className="text-sm text-gray-500">Core Subjects</div>
                </div>
              </div>
            </div>

            <div className="relative group order-1 lg:order-2">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 to-green-400 rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity blur-xl"></div>
              <div className="relative h-96 lg:h-[500px] bg-gradient-to-br from-emerald-100 via-green-50 to-emerald-100 rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center opacity-40">
                  <svg className="w-32 h-32 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Levels - Modern Tab Design */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Educational Journey</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-4">Academic Levels</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Progressive learning paths tailored to student development
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Junior Secondary */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-green-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity blur"></div>
              <div className="relative bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-sm font-semibold text-emerald-600 uppercase tracking-wider">Foundation</span>
                    <h3 className="text-3xl font-bold text-gray-900 mt-1">Junior Secondary</h3>
                    <p className="text-gray-500 mt-1">JSS 1-3</p>
                  </div>
                  <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                </div>

                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Building a strong foundation in core subjects while encouraging exploration and discovery. Developing essential skills for senior secondary education.
                </p>

                <div className="space-y-3">
                  <h4 className="font-bold text-lg text-gray-900">Core Subjects</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {["English Language", "Mathematics", "Basic Science", "Basic Technology", "Social Studies", "Civic Education", "Creative Arts", "Business Studies", "Computer Studies", "Physical Education"].map((subject, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {subject}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Senior Secondary */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity blur"></div>
              <div className="relative bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-sm font-semibold text-green-600 uppercase tracking-wider">Specialization</span>
                    <h3 className="text-3xl font-bold text-gray-900 mt-1">Senior Secondary</h3>
                    <p className="text-gray-500 mt-1">SSS 1-3</p>
                  </div>
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  </div>
                </div>

                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Specialized tracks allowing students to focus on their areas of interest and strength, preparing them for higher education and future careers.
                </p>

                <div className="space-y-4">
                  <h4 className="font-bold text-lg text-gray-900">Specialized Tracks</h4>
                  {[
                    { track: "Science", subjects: "Physics, Chemistry, Biology, Further Math" },
                    { track: "Arts", subjects: "Literature, Government, History, Visual Arts" },
                    { track: "Commercial", subjects: "Accounting, Commerce, Economics, Business" }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-gray-50 p-4 rounded-xl">
                      <div className="font-semibold text-emerald-700 mb-1">{item.track}</div>
                      <div className="text-sm text-gray-600">{item.subjects}</div>
                    </div>
                  ))}
                  <p className="text-sm text-gray-500 italic pt-2">
                    All tracks include: English Language, Mathematics, Civic Education & Computer Studies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Tracks - Interactive Cards */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Choose Your Path</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-4">Specialized Tracks</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover your passion and excel in your chosen field
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {tracks.map((track, index) => (
              <div
                key={index}
                onMouseEnter={() => setActiveTrack(index)}
                className={`relative cursor-pointer transition-all duration-300 ${
                  activeTrack === index ? 'scale-105' : 'scale-100'
                }`}
              >
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  <div className={`h-32 bg-gradient-to-br ${track.color} relative`}>
                    <div className="absolute inset-0 bg-black/10"></div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{track.name}</h3>
                    <div className="space-y-2">
                      {track.subjects.map((subject, idx) => (
                        <div key={idx} className="flex items-center text-gray-600">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${track.color} mr-3`}></div>
                          {subject}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Approach - Icon Grid */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Our Methodology</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-4">Teaching Approach</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Innovative methods that inspire learning and growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teachingApproaches.map((approach, index) => (
              <div
                key={index}
                className="group relative bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-green-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity blur"></div>
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-green-100 rounded-2xl flex items-center justify-center mb-6 text-emerald-600 group-hover:scale-110 transition-transform duration-300">
                    {approach.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{approach.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{approach.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Facilities - Visual Cards */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">State-of-the-Art</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-4">Academic Facilities</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Modern infrastructure supporting exceptional learning experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="h-64 bg-gradient-to-br from-emerald-100 via-green-50 to-emerald-100 relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/20 to-transparent"></div>
                  <div className="relative z-10 opacity-60 group-hover:opacity-100 transition-opacity">
                    {facility.icon}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{facility.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Support - Split Layout */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative group order-2 lg:order-1">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 to-green-400 rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity blur-xl"></div>
              <div className="relative h-96 lg:h-[500px] bg-gradient-to-br from-emerald-100 via-green-50 to-emerald-100 rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center opacity-40">
                  <svg className="w-32 h-32 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <div className="inline-block">
                <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Student Success</span>
                <div className="h-1 w-16 bg-emerald-600 mt-2"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Academic Support System
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
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
                  },
                  {
                    title: "Remedial Classes",
                    description: "Targeted instruction for students who need to strengthen specific skills"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-700 via-emerald-600 to-green-700"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Experience Academic Excellence
            </h2>
            <p className="text-xl md:text-2xl text-emerald-50 mb-10 leading-relaxed">
              Join Nhosa Secondary School and embark on a journey of academic discovery and growth.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/admissions" 
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-emerald-700 bg-white rounded-xl hover:bg-emerald-50 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Apply Now
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a 
                href="/contact" 
                className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white rounded-xl hover:bg-white hover:text-emerald-700 transition-all duration-300"
              >
                Schedule a Visit
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
      </section>
    </div>
  );
};

export default Academics;