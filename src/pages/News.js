import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Clock, ArrowRight, Bell, Mail, TrendingUp, Award, Users, BookOpen, Sparkles, Zap, Star } from 'lucide-react';

const News = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setTimeout(() => {
      setNewsArticles([
        {
          id: 1,
          title: 'Nhosa Students Excel in National Science Competition',
          date: 'June 15, 2023',
          excerpt: 'Our students brought home three gold medals and one silver medal from the National Science Competition held in Lagos.',
          image: 'news1.jpg',
          category: 'Achievements'
        },
        {
          id: 2,
          title: 'Annual Inter-House Sports Competition Announced',
          date: 'May 28, 2023',
          excerpt: 'The annual inter-house sports competition will be held on July 10-12, 2023. Parents and guardians are invited to attend.',
          image: 'news2.jpg',
          category: 'Events'
        },
        {
          id: 3,
          title: 'New Computer Laboratory Inaugurated',
          date: 'May 15, 2023',
          excerpt: 'Nhosa Secondary School has inaugurated a state-of-the-art computer laboratory equipped with 50 new computers.',
          image: 'news3.jpg',
          category: 'Facilities'
        },
        {
          id: 4,
          title: 'Nhosa Students Visit Science Museum',
          date: 'April 22, 2023',
          excerpt: 'JSS 2 and JSS 3 students visited the National Science Museum in Lagos as part of their science curriculum.',
          image: 'news4.jpg',
          category: 'Field Trips'
        },
        {
          id: 5,
          title: 'Parent-Teacher Association Meeting',
          date: 'April 10, 2023',
          excerpt: 'The next PTA meeting will be held on April 25, 2023, at 10:00 AM in the school hall.',
          image: 'news5.jpg',
          category: 'Announcements'
        },
        {
          id: 6,
          title: 'Nhosa Celebrates Cultural Day',
          date: 'March 30, 2023',
          excerpt: 'Students and staff celebrated our rich Nigerian cultural heritage with traditional dances, music, and food.',
          image: 'news6.jpg',
          category: 'Events'
        }
      ]);
      setLoading(false);
    }, 500);
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

  const upcomingEvents = [
    {
      id: 1,
      title: 'End of Term Examination',
      date: 'July 3-14, 2023',
      location: 'School Premises',
      type: 'Academic'
    },
    {
      id: 2,
      title: 'Inter-House Sports Competition',
      date: 'July 10-12, 2023',
      location: 'School Sports Complex',
      type: 'Sports'
    },
    {
      id: 3,
      title: 'Graduation Ceremony',
      date: 'July 21, 2023',
      location: 'School Hall',
      type: 'Ceremony'
    },
    {
      id: 4,
      title: 'Summer Coding Bootcamp',
      date: 'August 7-18, 2023',
      location: 'Computer Laboratory',
      type: 'Workshop'
    }
  ];

  const categories = ['All', 'Achievements', 'Events', 'Facilities', 'Field Trips', 'Announcements'];

  const filteredNews = selectedCategory === 'All' 
    ? newsArticles 
    : newsArticles.filter(article => article.category === selectedCategory);

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'Achievements': return <Award className="w-4 h-4" />;
      case 'Events': return <Calendar className="w-4 h-4" />;
      case 'Facilities': return <BookOpen className="w-4 h-4" />;
      case 'Field Trips': return <MapPin className="w-4 h-4" />;
      default: return <Bell className="w-4 h-4" />;
    }
  };

  const getCategoryGradient = (category) => {
    switch(category) {
      case 'Achievements': return 'from-amber-500 via-orange-500 to-red-500';
      case 'Events': return 'from-blue-500 via-indigo-500 to-purple-500';
      case 'Facilities': return 'from-purple-500 via-pink-500 to-rose-500';
      case 'Field Trips': return 'from-green-500 via-emerald-500 to-teal-500';
      default: return 'from-slate-500 via-gray-500 to-zinc-500';
    }
  };

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

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-900">
        <div className="text-center">
          <div className="relative w-20 h-20 mx-auto mb-6">
            <div className="absolute inset-0 border-4 border-emerald-500/30 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-t-emerald-500 rounded-full animate-spin"></div>
          </div>
          <p className="text-xl text-white font-semibold">Loading news and events...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white overflow-hidden">
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(16, 185, 129, 0.3); }
          50% { box-shadow: 0 0 30px rgba(16, 185, 129, 0.6); }
        }
        
        .gradient-animate {
          background-size: 200% 200%;
          animation: shimmer 8s ease infinite;
        }
      `}</style>

      {/* Hero Section - Enhanced */}
      <section className="relative min-h-[75vh] flex items-center bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-900 text-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(16,185,129,0.2),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.15),transparent_50%)]"></div>
        </div>

        {/* Floating Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"
            style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
          ></div>
          <div 
            className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-teal-500/15 rounded-full blur-3xl"
            style={{ transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)` }}
          ></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-6 sm:mb-8 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-bold text-emerald-200 uppercase tracking-wider">Latest Updates</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-6 leading-tight">
              <span className="block text-white/90">News &</span>
              <span className="block mt-2 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                Events
              </span>
            </h1>
            
            <div className="h-1 w-24 sm:w-32 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mx-auto mb-6 sm:mb-8"></div>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-emerald-50/90 max-w-3xl mx-auto leading-relaxed font-light">
              Stay connected with the latest achievements, announcements, and upcoming activities at Nhosa Secondary School.
            </p>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0 h-24">
          <svg className="absolute bottom-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 120" fill="none">
            <path d="M0,64 C240,96 480,96 720,64 C960,32 1200,32 1440,64 L1440,120 L0,120 Z" fill="white" opacity="0.1"/>
            <path d="M0,80 C360,110 720,110 1080,80 C1260,65 1350,65 1440,80 L1440,120 L0,120 Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Quick Stats - Enhanced */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-white via-gray-50 to-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
            {[
              { label: 'News Articles', value: newsArticles.length, icon: <BookOpen />, gradient: 'from-emerald-500 to-teal-500' },
              { label: 'Upcoming Events', value: upcomingEvents.length, icon: <Calendar />, gradient: 'from-blue-500 to-indigo-500' },
              { label: 'Achievements', value: '12+', icon: <Award />, gradient: 'from-amber-500 to-orange-500' },
              { label: 'Active Programs', value: '8', icon: <Users />, gradient: 'from-purple-500 to-pink-500' }
            ].map((stat, idx) => (
              <div key={idx} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-2xl sm:rounded-3xl shadow-lg"></div>
                <div className="relative bg-white/80 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${stat.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                    <div className="text-white">{stat.icon}</div>
                  </div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-black bg-gradient-to-br from-slate-900 to-slate-600 bg-clip-text text-transparent mb-1 sm:mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 font-semibold">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter - Enhanced */}
      <section className="py-8 sm:py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-bold text-sm sm:text-base transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-xl scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Articles - Enhanced */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block px-4 py-2 bg-emerald-100 rounded-full mb-4 sm:mb-6">
              <span className="text-xs sm:text-sm font-bold text-emerald-700 uppercase tracking-wider">Featured Stories</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 bg-gradient-to-r from-slate-900 via-emerald-800 to-teal-800 bg-clip-text text-transparent">
              Latest News
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">Discover what's happening in our school community</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {filteredNews.map((article, index) => (
              <div 
                key={article.id} 
                className="group relative bg-white rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image Section */}
                <div className="relative h-56 sm:h-64 bg-gradient-to-br from-gray-200 to-gray-100 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryGradient(article.category)} opacity-80`}></div>
                  
                  {/* Pattern Overlay */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full -mr-20 -mt-20"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-white rounded-full -ml-16 -mb-16"></div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className={`inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold text-white backdrop-blur-xl bg-white/20 border border-white/30`}>
                      {getCategoryIcon(article.category)}
                      {article.category}
                    </span>
                  </div>

                  {/* Sparkle Effect */}
                  <div className="absolute top-4 right-4">
                    <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white opacity-70 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="p-5 sm:p-6 lg:p-8">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3 sm:mb-4">
                    <Clock className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-gray-900 mb-3 sm:mb-4 group-hover:text-emerald-600 transition-colors line-clamp-2 leading-tight">
                    {article.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <button className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:gap-3 transition-all duration-300 text-sm sm:text-base">
                    Read Full Story
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryGradient(article.category)} opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none rounded-2xl sm:rounded-3xl`}></div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 sm:mt-16 text-center">
            <button className="group inline-flex items-center gap-3 px-8 sm:px-10 py-3 sm:py-4 border-2 border-emerald-600 text-emerald-600 rounded-full font-black text-sm sm:text-base hover:bg-emerald-50 transition-all duration-300 hover:scale-105">
              Load More News
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Upcoming Events - Enhanced */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-100 rounded-full blur-3xl opacity-30"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-4 sm:mb-6">
              <span className="text-xs sm:text-sm font-bold text-blue-700 uppercase tracking-wider">Coming Soon</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
              Upcoming Events
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">Mark your calendar for these important dates</p>
          </div>
          
          <div className="max-w-5xl mx-auto space-y-6">
            {upcomingEvents.map((event, idx) => (
              <div 
                key={event.id} 
                className="group relative bg-white rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Date Section */}
                  <div className="md:w-1/4 p-6 sm:p-8 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 flex items-center justify-center border-b md:border-b-0 md:border-r border-emerald-100">
                    <div className="text-center">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-500 rounded-2xl sm:rounded-3xl flex items-center justify-center mb-3 sm:mb-4 mx-auto shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <Calendar className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                      </div>
                      <div className="text-base sm:text-lg font-black text-emerald-700">{event.date.split(',')[0]}</div>
                      <div className="text-xs sm:text-sm text-emerald-600 font-semibold">{event.date.split(',').slice(1).join(',')}</div>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="md:w-3/4 p-6 sm:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <h3 className="text-xl sm:text-2xl font-black text-gray-900 group-hover:text-emerald-600 transition-colors mb-2 sm:mb-0">
                        {event.title}
                      </h3>
                      <span className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap">
                        <Star className="w-3 h-3 sm:w-4 sm:h-4" />
                        {event.type}
                      </span>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3 text-gray-600">
                        <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Calendar className="w-5 h-5 text-emerald-600" />
                        </div>
                        <span className="text-sm sm:text-base font-semibold">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-600">
                        <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-5 h-5 text-teal-600" />
                        </div>
                        <span className="text-sm sm:text-base font-semibold">{event.location}</span>
                      </div>
                    </div>
                    
                    <button className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:gap-3 transition-all duration-300 text-sm sm:text-base">
                      View Event Details
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 sm:mt-16 text-center">
            <button className="group inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full font-black text-sm sm:text-base hover:from-emerald-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
              <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
              View Full Calendar
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription - Enhanced */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-900 text-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.2),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(6,182,212,0.15),transparent_50%)]"></div>
        </div>

        {/* Floating Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-6 sm:mb-8 border border-white/20">
              <Mail className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-400" />
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6">Stay in the Loop</h2>
            <p className="text-base sm:text-lg lg:text-xl text-emerald-50/90 mb-8 sm:mb-12 leading-relaxed">
              Subscribe to our newsletter and never miss important updates, achievements, or upcoming events.
            </p>
            
            <form onSubmit={handleSubscribe} className="max-w-xl mx-auto mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <div className="relative flex flex-col sm:flex-row gap-4 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-2">
                  <input 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address" 
                    className="flex-1 px-6 py-4 rounded-xl bg-white/90 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 font-semibold text-sm sm:text-base"
                    required
                  />
                  <button 
                    type="submit"
                    className="group px-6 sm:px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl font-black text-sm sm:text-base hover:from-emerald-500 hover:to-teal-500 transition-all duration-300 shadow-xl hover:shadow-2xl whitespace-nowrap flex items-center justify-center gap-2"
                  >
                    {isSubscribed ? (
                      <>
                        <span className="inline-block w-5 h-5 bg-white rounded-full flex items-center justify-center text-emerald-600 text-xs">✓</span>
                        Subscribed!
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                        Subscribe Now
                      </>
                    )}
                  </button>
                </div>
              </div>
              
              {isSubscribed && (
                <div className="mt-6 p-4 sm:p-5 bg-emerald-500/20 border border-emerald-400/30 rounded-2xl backdrop-blur-sm flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">✓</span>
                  </div>
                  <p className="text-emerald-100 text-sm sm:text-base font-semibold">
                    Thanks for subscribing! Check your inbox for confirmation.
                  </p>
                </div>
              )}
            </form>
            
            <p className="text-sm sm:text-base text-emerald-100/80 flex items-center justify-center gap-2 flex-wrap">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span>Your privacy is protected. We never share your information.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Academic Calendar - Enhanced */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-64 h-64 bg-emerald-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-teal-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block px-4 py-2 bg-purple-100 rounded-full mb-4 sm:mb-6">
              <span className="text-xs sm:text-sm font-bold text-purple-700 uppercase tracking-wider">Academic Year</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 bg-gradient-to-r from-slate-900 via-purple-800 to-indigo-800 bg-clip-text text-transparent">
              Academic Calendar 2023-2024
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">Plan ahead with our comprehensive academic schedule</p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  term: 'First Term',
                  gradient: 'from-emerald-600 to-teal-600',
                  dates: [
                    { label: 'School Resumes', date: 'September 11, 2023' },
                    { label: 'Mid-Term Break', date: 'October 23-27, 2023' },
                    { label: 'Examination', date: 'December 4-15, 2023' },
                    { label: 'Term Ends', date: 'December 15, 2023' }
                  ]
                },
                {
                  term: 'Second Term',
                  gradient: 'from-blue-600 to-indigo-600',
                  dates: [
                    { label: 'School Resumes', date: 'January 8, 2024' },
                    { label: 'Mid-Term Break', date: 'February 19-23, 2024' },
                    { label: 'Examination', date: 'March 25 - April 5, 2024' },
                    { label: 'Term Ends', date: 'April 5, 2024' }
                  ]
                },
                {
                  term: 'Third Term',
                  gradient: 'from-purple-600 to-pink-600',
                  dates: [
                    { label: 'School Resumes', date: 'April 29, 2024' },
                    { label: 'Mid-Term Break', date: 'June 10-14, 2024' },
                    { label: 'Examination', date: 'July 15-26, 2024' },
                    { label: 'Year Ends', date: 'July 26, 2024' }
                  ]
                }
              ].map((term, idx) => (
                <div key={idx} className="group relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${term.gradient} rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity`}></div>
                  <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    <div className={`bg-gradient-to-r ${term.gradient} p-6 sm:p-8 text-white relative overflow-hidden`}>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
                      <h3 className="text-xl sm:text-2xl font-black relative z-10">{term.term}</h3>
                    </div>
                    <div className="p-6 sm:p-8 space-y-4">
                      {term.dates.map((item, itemIdx) => (
                        <div key={itemIdx} className="flex justify-between items-start pb-4 border-b border-gray-100 last:border-0 group/item hover:bg-gray-50 -mx-2 px-2 py-2 rounded-lg transition-colors">
                          <span className="font-bold text-gray-700 text-sm sm:text-base flex items-center gap-2">
                            <span className={`w-2 h-2 rounded-full bg-gradient-to-br ${term.gradient}`}></span>
                            {item.label}
                          </span>
                          <span className="text-gray-600 text-sm sm:text-base text-right font-semibold">{item.date}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 sm:mt-12 text-center">
              <div className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl">
                <Bell className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" />
                <p className="text-amber-800 text-sm sm:text-base font-bold">
                  Dates are subject to change. Please check regularly for updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;