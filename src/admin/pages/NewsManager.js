import React, { useState } from 'react';
import { Plus, Trash2, Edit2, Search, Calendar, Tag, MapPin, Clock, X } from 'lucide-react';

const NewsManager = () => {
  const [activeTab, setActiveTab] = useState('news');
  const [searchTerm, setSearchTerm] = useState('');
  
  const [newsArticles, setNewsArticles] = useState([
    {
      id: 1,
      title: 'Nhosa Students Excel in National Science Competition',
      date: '2023-06-15',
      excerpt: 'Our students brought home three gold medals and one silver medal from the National Science Competition held in Lagos.',
      image: 'news1.jpg',
      category: 'Achievements',
      content: 'Full article content here...'
    },
    {
      id: 2,
      title: 'Annual Inter-House Sports Competition Announced',
      date: '2023-05-28',
      excerpt: 'The annual inter-house sports competition will be held on July 10-12, 2023. Parents and guardians are invited to attend.',
      image: 'news2.jpg',
      category: 'Events',
      content: 'Full article content here...'
    },
    {
      id: 3,
      title: 'New Computer Laboratory Inaugurated',
      date: '2023-05-15',
      excerpt: 'Nhosa Secondary School has inaugurated a state-of-the-art computer laboratory equipped with 50 new computers.',
      image: 'news3.jpg',
      category: 'Facilities',
      content: 'Full article content here...'
    }
  ]);

  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'Annual Science Fair',
      date: '2023-07-15',
      time: '09:00 AM - 04:00 PM',
      location: 'School Auditorium',
      description: 'Students will showcase their science projects and compete for prizes.',
      image: 'event1.jpg'
    },
    {
      id: 2,
      title: 'Parent-Teacher Meeting',
      date: '2023-07-25',
      time: '10:00 AM - 02:00 PM',
      location: 'School Hall',
      description: 'Discuss student progress and school development plans.',
      image: 'event2.jpg'
    },
    {
      id: 3,
      title: 'Career Day',
      date: '2023-08-05',
      time: '11:00 AM - 03:00 PM',
      location: 'School Grounds',
      description: 'Professionals from various fields will speak to students about career opportunities.',
      image: 'event3.jpg'
    }
  ]);

  const [editingNews, setEditingNews] = useState(null);
  const [editingEvent, setEditingEvent] = useState(null);
  const [showNewsForm, setShowNewsForm] = useState(false);
  const [showEventForm, setShowEventForm] = useState(false);

  const [newsForm, setNewsForm] = useState({
    title: '',
    date: '',
    excerpt: '',
    category: '',
    content: '',
    image: null
  });

  const [eventForm, setEventForm] = useState({
    title: '',
    date: '',
    time: '',
    location: '',
    description: '',
    image: null
  });

  const filteredNews = newsArticles.filter(news => 
    news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    news.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredEvents = events.filter(event => 
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddNews = () => {
    setEditingNews(null);
    setNewsForm({
      title: '',
      date: '',
      excerpt: '',
      category: '',
      content: '',
      image: null
    });
    setShowNewsForm(true);
  };

  const handleEditNews = (news) => {
    setEditingNews(news.id);
    setNewsForm({
      title: news.title,
      date: news.date,
      excerpt: news.excerpt,
      category: news.category,
      content: news.content,
      image: news.image
    });
    setShowNewsForm(true);
  };

  const handleDeleteNews = (id) => {
    if (window.confirm('Are you sure you want to delete this news article?')) {
      setNewsArticles(newsArticles.filter(news => news.id !== id));
    }
  };

  const handleNewsSubmit = (e) => {
    e.preventDefault();
    
    if (editingNews) {
      setNewsArticles(newsArticles.map(news => 
        news.id === editingNews ? {
          ...news,
          title: newsForm.title,
          date: newsForm.date,
          excerpt: newsForm.excerpt,
          category: newsForm.category,
          content: newsForm.content,
          image: newsForm.image || news.image
        } : news
      ));
    } else {
      const newNews = {
        id: newsArticles.length + 1,
        title: newsForm.title,
        date: newsForm.date,
        excerpt: newsForm.excerpt,
        category: newsForm.category,
        content: newsForm.content,
        image: newsForm.image || 'default-news.jpg'
      };
      setNewsArticles([...newsArticles, newNews]);
    }
    
    setShowNewsForm(false);
  };

  const handleAddEvent = () => {
    setEditingEvent(null);
    setEventForm({
      title: '',
      date: '',
      time: '',
      location: '',
      description: '',
      image: null
    });
    setShowEventForm(true);
  };

  const handleEditEvent = (event) => {
    setEditingEvent(event.id);
    setEventForm({
      title: event.title,
      date: event.date,
      time: event.time,
      location: event.location,
      description: event.description,
      image: event.image
    });
    setShowEventForm(true);
  };

  const handleDeleteEvent = (id) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      setEvents(events.filter(event => event.id !== id));
    }
  };

  const handleEventSubmit = (e) => {
    e.preventDefault();
    
    if (editingEvent) {
      setEvents(events.map(event => 
        event.id === editingEvent ? {
          ...event,
          title: eventForm.title,
          date: eventForm.date,
          time: eventForm.time,
          location: eventForm.location,
          description: eventForm.description,
          image: eventForm.image || event.image
        } : event
      ));
    } else {
      const newEvent = {
        id: events.length + 1,
        title: eventForm.title,
        date: eventForm.date,
        time: eventForm.time,
        location: eventForm.location,
        description: eventForm.description,
        image: eventForm.image || 'default-event.jpg'
      };
      setEvents([...events, newEvent]);
    }
    
    setShowEventForm(false);
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Achievements': 'bg-amber-50 text-amber-700 border-amber-200',
      'Events': 'bg-blue-50 text-blue-700 border-blue-200',
      'Facilities': 'bg-purple-50 text-purple-700 border-purple-200',
      'Academics': 'bg-emerald-50 text-emerald-700 border-emerald-200',
      'Sports': 'bg-rose-50 text-rose-700 border-rose-200',
      'General': 'bg-gray-50 text-gray-700 border-gray-200'
    };
    return colors[category] || colors['General'];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">News & Events</h1>
            <p className="text-gray-500 mt-1">Manage your school's announcements and upcoming events</p>
          </div>
          <button
            onClick={activeTab === 'news' ? handleAddNews : handleAddEvent}
            className="group relative bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl flex items-center space-x-2 shadow-lg shadow-emerald-200 hover:shadow-xl hover:shadow-emerald-300 transition-all duration-300 hover:-translate-y-0.5"
          >
            <Plus size={20} className="group-hover:rotate-90 transition-transform duration-300" />
            <span className="font-medium">Add {activeTab === 'news' ? 'News' : 'Event'}</span>
          </button>
        </div>

        {/* Tabs & Search */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-2">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <nav className="flex space-x-2 bg-gray-50 p-1 rounded-xl">
              <button
                onClick={() => setActiveTab('news')}
                className={`px-6 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 ${
                  activeTab === 'news'
                    ? 'bg-white text-emerald-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                News Articles
              </button>
              <button
                onClick={() => setActiveTab('events')}
                className={`px-6 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 ${
                  activeTab === 'events'
                    ? 'bg-white text-emerald-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Events
              </button>
            </nav>
            
            <div className="relative w-full sm:w-80">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder={`Search ${activeTab === 'news' ? 'news articles' : 'events'}...`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 bg-gray-50 border-0 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        {activeTab === 'news' && (
          <div className="grid gap-4">
            {filteredNews.length > 0 ? (
              filteredNews.map((news) => (
                <div
                  key={news.id}
                  className="group bg-white rounded-2xl shadow-sm hover:shadow-md border border-gray-100 overflow-hidden transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="p-6 flex items-start gap-6">
                    <div className="flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden bg-gradient-to-br from-emerald-50 to-emerald-100">
                      {news.image ? (
                        <img src={`/assets/img/${news.image}`} alt={news.title} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-emerald-400">
                          <Calendar size={32} />
                        </div>
                      )}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                            {news.title}
                          </h3>
                          <p className="text-sm text-gray-600 mb-3 line-clamp-2">{news.excerpt}</p>
                          <div className="flex items-center gap-4 text-xs text-gray-500">
                            <div className="flex items-center gap-1.5">
                              <Calendar size={14} />
                              <span>{new Date(news.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                            </div>
                            <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(news.category)}`}>
                              {news.category}
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <button
                            onClick={() => handleEditNews(news)}
                            className="p-2 rounded-lg text-emerald-600 hover:bg-emerald-50 transition-colors"
                          >
                            <Edit2 size={18} />
                          </button>
                          <button
                            onClick={() => handleDeleteNews(news.id)}
                            className="p-2 rounded-lg text-rose-600 hover:bg-rose-50 transition-colors"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-white rounded-2xl p-16 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search size={24} className="text-gray-400" />
                </div>
                <p className="text-gray-500">No news articles found</p>
              </div>
            )}
          </div>
        )}

        {activeTab === 'events' && (
          <div className="grid gap-4">
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event) => (
                <div
                  key={event.id}
                  className="group bg-white rounded-2xl shadow-sm hover:shadow-md border border-gray-100 overflow-hidden transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="p-6 flex items-start gap-6">
                    <div className="flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100">
                      {event.image ? (
                        <img src={`/assets/img/${event.image}`} alt={event.title} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-blue-400">
                          <Calendar size={32} />
                        </div>
                      )}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                            {event.title}
                          </h3>
                          <p className="text-sm text-gray-600 mb-3">{event.description}</p>
                          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500">
                            <div className="flex items-center gap-1.5">
                              <Calendar size={14} />
                              <span>{new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <Clock size={14} />
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <MapPin size={14} />
                              <span>{event.location}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <button
                            onClick={() => handleEditEvent(event)}
                            className="p-2 rounded-lg text-emerald-600 hover:bg-emerald-50 transition-colors"
                          >
                            <Edit2 size={18} />
                          </button>
                          <button
                            onClick={() => handleDeleteEvent(event.id)}
                            className="p-2 rounded-lg text-rose-600 hover:bg-rose-50 transition-colors"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-white rounded-2xl p-16 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search size={24} className="text-gray-400" />
                </div>
                <p className="text-gray-500">No events found</p>
              </div>
            )}
          </div>
        )}

        {/* News Form Modal */}
        {showNewsForm && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <form onSubmit={handleNewsSubmit}>
                <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between rounded-t-2xl">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {editingNews ? 'Edit News Article' : 'Add News Article'}
                  </h3>
                  <button
                    type="button"
                    onClick={() => setShowNewsForm(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
                
                <div className="p-6 space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                    <input
                      type="text"
                      value={newsForm.title}
                      onChange={(e) => setNewsForm({...newsForm, title: e.target.value})}
                      required
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      placeholder="Enter news title"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                      <input
                        type="date"
                        value={newsForm.date}
                        onChange={(e) => setNewsForm({...newsForm, date: e.target.value})}
                        required
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                      <select
                        value={newsForm.category}
                        onChange={(e) => setNewsForm({...newsForm, category: e.target.value})}
                        required
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      >
                        <option value="">Select category</option>
                        <option value="Academics">Academics</option>
                        <option value="Sports">Sports</option>
                        <option value="Events">Events</option>
                        <option value="Achievements">Achievements</option>
                        <option value="Facilities">Facilities</option>
                        <option value="General">General</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Excerpt</label>
                    <textarea
                      value={newsForm.excerpt}
                      onChange={(e) => setNewsForm({...newsForm, excerpt: e.target.value})}
                      required
                      rows={3}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                      placeholder="Brief summary..."
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
                    <textarea
                      value={newsForm.content}
                      onChange={(e) => setNewsForm({...newsForm, content: e.target.value})}
                      required
                      rows={6}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                      placeholder="Full article content..."
                    />
                  </div>
                </div>
                
                <div className="sticky bottom-0 bg-gray-50 px-6 py-4 flex justify-end gap-3 rounded-b-2xl border-t border-gray-100">
                  <button
                    type="button"
                    onClick={() => setShowNewsForm(false)}
                    className="px-6 py-2.5 border border-gray-200 rounded-xl text-gray-700 font-medium hover:bg-gray-100 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-medium shadow-lg shadow-emerald-200 hover:shadow-xl transition-all"
                  >
                    {editingNews ? 'Update' : 'Add'} Article
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Event Form Modal */}
        {showEventForm && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <form onSubmit={handleEventSubmit}>
                <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between rounded-t-2xl">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {editingEvent ? 'Edit Event' : 'Add Event'}
                  </h3>
                  <button
                    type="button"
                    onClick={() => setShowEventForm(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
                
                <div className="p-6 space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Event Title</label>
                    <input
                      type="text"
                      value={eventForm.title}
                      onChange={(e) => setEventForm({...eventForm, title: e.target.value})}
                      required
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      placeholder="Enter event title"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                      <input
                        type="date"
                        value={eventForm.date}
                        onChange={(e) => setEventForm({...eventForm, date: e.target.value})}
                        required
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
                      <input
                        type="text"
                        value={eventForm.time}
                        onChange={(e) => setEventForm({...eventForm, time: e.target.value})}
                        required
                        placeholder="09:00 AM - 04:00 PM"
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                    <input
                      type="text"
                      value={eventForm.location}
                      onChange={(e) => setEventForm({...eventForm, location: e.target.value})}
                      required
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      placeholder="Enter event location"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                    <textarea
                      value={eventForm.description}
                      onChange={(e) => setEventForm({...eventForm, description: e.target.value})}
                      required
                      rows={5}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                      placeholder="Event description..."
                    />
                  </div>
                </div>
                
                <div className="sticky bottom-0 bg-gray-50 px-6 py-4 flex justify-end gap-3 rounded-b-2xl border-t border-gray-100">
                  <button
                    type="button"
                    onClick={() => setShowEventForm(false)}
                    className="px-6 py-2.5 border border-gray-200 rounded-xl text-gray-700 font-medium hover:bg-gray-100 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-medium shadow-lg shadow-emerald-200 hover:shadow-xl transition-all"
                  >
                    {editingEvent ? 'Update' : 'Add'} Event
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsManager;