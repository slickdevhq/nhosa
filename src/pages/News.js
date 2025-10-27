import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Clock, ArrowRight, Bell, Mail, TrendingUp, Award, Users, BookOpen } from 'lucide-react';

const News = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Simulating API call
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

  const [upcomingEvents, setUpcomingEvents] = useState([
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
  ]);

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

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing! You will receive updates at ' + email);
    setEmail('');
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-emerald-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600">Loading news and events...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-emerald-600/30 backdrop-blur-sm rounded-full border border-emerald-400/30">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-medium text-emerald-100">Latest Updates</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              News & Events
            </h1>
            <p className="text-lg md:text-xl text-emerald-50 max-w-2xl mx-auto leading-relaxed">
              Stay connected with the latest achievements, announcements, and upcoming activities at Nhosa Secondary School.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { label: 'News Articles', value: newsArticles.length, icon: <BookOpen /> },
              { label: 'Upcoming Events', value: upcomingEvents.length, icon: <Calendar /> },
              { label: 'Achievements', value: '12+', icon: <Award /> },
              { label: 'Active Programs', value: '8', icon: <Users /> }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 text-center group hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <div className="text-white">{stat.icon}</div>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-emerald-600 to-emerald-700 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Articles */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest News</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Discover what's happening in our school community</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredNews.map(article => (
              <div key={article.id} className="group bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-56 bg-gradient-to-br from-gray-200 to-gray-100 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-emerald-700/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    {getCategoryIcon(article.category)}
                    <span className="ml-2 text-sm text-gray-500 font-medium">{article.image}</span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-white backdrop-blur-sm ${
                      article.category === 'Achievements' ? 'bg-amber-500/90' :
                      article.category === 'Events' ? 'bg-blue-500/90' :
                      article.category === 'Facilities' ? 'bg-purple-500/90' :
                      article.category === 'Field Trips' ? 'bg-green-500/90' :
                      'bg-gray-500/90'
                    }`}>
                      {getCategoryIcon(article.category)}
                      {article.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <Clock className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">{article.excerpt}</p>
                  <button className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:gap-3 transition-all duration-300">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <button className="px-8 py-3 border-2 border-emerald-600 text-emerald-600 rounded-xl font-semibold hover:bg-emerald-50 transition-all duration-300 hover:scale-105">
              Load More News
            </button>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Mark your calendar for these important dates</p>
          </div>
          
          <div className="max-w-5xl mx-auto space-y-6">
            {upcomingEvents.map((event, idx) => (
              <div key={event.id} className="group bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/4 p-6 bg-gradient-to-br from-emerald-50 to-emerald-100/50 flex items-center justify-center border-r border-emerald-100">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl flex items-center justify-center mb-3 mx-auto shadow-lg">
                        <Calendar className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-sm font-semibold text-emerald-700">{event.date.split(' ')[0]}</div>
                      <div className="text-xs text-emerald-600">{event.date.split(' ').slice(1).join(' ')}</div>
                    </div>
                  </div>
                  
                  <div className="md:w-3/4 p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                        {event.title}
                      </h3>
                      <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-semibold">
                        {event.type}
                      </span>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar className="w-4 h-4 text-emerald-600" />
                        <span className="text-sm">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="w-4 h-4 text-emerald-600" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                    </div>
                    
                    <button className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:gap-3 transition-all duration-300">
                      Event Details
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <button className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-xl font-semibold hover:from-emerald-700 hover:to-emerald-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              View Full Calendar
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-gradient-to-br from-emerald-700 via-emerald-600 to-emerald-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay in the Loop</h2>
            <p className="text-emerald-50 mb-8 text-lg">
              Subscribe to our newsletter and never miss important updates, achievements, or upcoming events.
            </p>
            
            <div className="max-w-xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address" 
                  className="flex-grow px-6 py-4 rounded-xl focus:outline-none text-gray-800 shadow-lg border-2 border-transparent focus:border-white"
                />
                <button 
                  onClick={handleSubscribe}
                  className="px-8 py-4 bg-white text-emerald-700 rounded-xl font-semibold hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-lg whitespace-nowrap"
                >
                  Subscribe Now
                </button>
              </div>
              <p className="mt-4 text-sm text-emerald-100 flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                Your privacy is protected. We never share your information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Calendar */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Academic Calendar 2023-2024</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Plan ahead with our comprehensive academic schedule</p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  term: 'First Term',
                  dates: [
                    { label: 'School Resumes', date: 'September 11, 2023' },
                    { label: 'Mid-Term Break', date: 'October 23-27, 2023' },
                    { label: 'Examination', date: 'December 4-15, 2023' },
                    { label: 'Term Ends', date: 'December 15, 2023' }
                  ]
                },
                {
                  term: 'Second Term',
                  dates: [
                    { label: 'School Resumes', date: 'January 8, 2024' },
                    { label: 'Mid-Term Break', date: 'February 19-23, 2024' },
                    { label: 'Examination', date: 'March 25 - April 5, 2024' },
                    { label: 'Term Ends', date: 'April 5, 2024' }
                  ]
                },
                {
                  term: 'Third Term',
                  dates: [
                    { label: 'School Resumes', date: 'April 29, 2024' },
                    { label: 'Mid-Term Break', date: 'June 10-14, 2024' },
                    { label: 'Examination', date: 'July 15-26, 2024' },
                    { label: 'Year Ends', date: 'July 26, 2024' }
                  ]
                }
              ].map((term, idx) => (
                <div key={idx} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 p-6 text-white">
                    <h3 className="text-xl font-bold">{term.term}</h3>
                  </div>
                  <div className="p-6 space-y-4">
                    {term.dates.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex justify-between items-start pb-3 border-b border-gray-100 last:border-0">
                        <span className="font-medium text-gray-700 text-sm">{item.label}</span>
                        <span className="text-gray-600 text-sm text-right">{item.date}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-600 text-sm flex items-center justify-center gap-2">
                <Bell className="w-4 h-4 text-emerald-600" />
                Dates are subject to change. Please check regularly for updates.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;