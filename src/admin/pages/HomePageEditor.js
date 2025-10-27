import React, { useState } from 'react';
import { Save, Upload, Plus, Trash2, Image, ExternalLink, Sparkles, Layout, BarChart3, MessageSquare, Megaphone } from 'lucide-react';

const HomePageEditor = () => {
  const [heroSection, setHeroSection] = useState({
    title: 'Welcome to Nhosa Secondary School',
    subtitle: 'Nurturing Excellence, Building Character',
    buttonText: 'Apply Now',
    buttonLink: '/admissions',
    backgroundImage: '/assets/img/hero-bg.jpg'
  });

  const [stats, setStats] = useState({
    students: 1200,
    teachers: 85,
    years: 25,
    awards: 50
  });

  const [features, setFeatures] = useState([
    {
      id: 1,
      title: 'Academic Excellence',
      description: 'Our rigorous curriculum and dedicated teachers ensure students achieve their highest potential in academics.',
      link: '/academics',
      color: 'from-emerald-500 to-green-600'
    },
    {
      id: 2,
      title: 'Character Development',
      description: 'We focus on developing well-rounded individuals with strong moral values and leadership skills.',
      link: '/about',
      color: 'from-green-600 to-teal-500'
    },
    {
      id: 3,
      title: 'Modern Facilities',
      description: 'Our state-of-the-art facilities provide an optimal learning environment for all students.',
      link: '/about',
      color: 'from-teal-500 to-emerald-600'
    }
  ]);

  const [newsItems, setNewsItems] = useState([
    {
      id: 1,
      date: 'September 15, 2025',
      title: 'Annual Science Fair Winners Announced',
      excerpt: 'Congratulations to all participants in this year\'s Science Fair. The creativity and innovation displayed were truly impressive.',
      category: 'Academics'
    },
    {
      id: 2,
      date: 'September 10, 2025',
      title: 'Sports Day Celebration',
      excerpt: 'Our annual Sports Day was a huge success with students showcasing their athletic abilities and team spirit.',
      category: 'Sports'
    },
    {
      id: 3,
      date: 'September 5, 2025',
      title: 'New Computer Lab Inauguration',
      excerpt: 'We are proud to announce the opening of our new state-of-the-art computer laboratory equipped with the latest technology.',
      category: 'Facilities'
    }
  ]);

  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      name: 'Adebayo Johnson',
      role: 'Parent',
      content: 'The teachers at Nhosa Secondary School are exceptional. They\'ve helped my child develop not just academically but also in character and confidence.',
      initials: 'AJ'
    },
    {
      id: 2,
      name: 'Chioma Okafor',
      role: 'Student',
      content: 'I love the supportive environment at Nhosa. The teachers encourage us to pursue our interests and provide guidance whenever we need it.',
      initials: 'CO'
    }
  ]);

  const [ctaSection, setCtaSection] = useState({
    title: 'Ready to Join Our Community?',
    description: 'Take the first step towards providing your child with an exceptional educational experience.',
    buttonText: 'Apply Now',
    buttonLink: '/admissions'
  });

  const handleHeroSubmit = (e) => {
    e.preventDefault();
    alert('Hero section updated successfully!');
  };

  const handleStatsSubmit = (e) => {
    e.preventDefault();
    alert('Statistics updated successfully!');
  };

  const handleFeatureSubmit = (id, e) => {
    e.preventDefault();
    alert(`Feature ${id} updated successfully!`);
  };

  const handleAddFeature = () => {
    const newFeature = {
      id: features.length + 1,
      title: 'New Feature',
      description: 'Description for the new feature',
      link: '/',
      color: 'from-emerald-500 to-green-600'
    };
    setFeatures([...features, newFeature]);
  };

  const handleDeleteFeature = (id) => {
    setFeatures(features.filter(feature => feature.id !== id));
  };

  const handleNewsSubmit = (id, e) => {
    e.preventDefault();
    alert(`News item ${id} updated successfully!`);
  };

  const handleAddNews = () => {
    const newNews = {
      id: newsItems.length + 1,
      date: new Date().toLocaleDateString(),
      title: 'New News Item',
      excerpt: 'Description for the new news item',
      category: 'General'
    };
    setNewsItems([...newsItems, newNews]);
  };

  const handleDeleteNews = (id) => {
    setNewsItems(newsItems.filter(item => item.id !== id));
  };

  const handleTestimonialSubmit = (id, e) => {
    e.preventDefault();
    alert(`Testimonial ${id} updated successfully!`);
  };

  const handleAddTestimonial = () => {
    const newTestimonial = {
      id: testimonials.length + 1,
      name: 'New Testimonial',
      role: 'Role',
      content: 'Content for the new testimonial',
      initials: 'NT'
    };
    setTestimonials([...testimonials, newTestimonial]);
  };

  const handleDeleteTestimonial = (id) => {
    setTestimonials(testimonials.filter(item => item.id !== id));
  };

  const handleCtaSubmit = (e) => {
    e.preventDefault();
    alert('CTA section updated successfully!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100/50 p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-2">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-1">Home Page Editor</h1>
          <p className="text-gray-500 flex items-center gap-2">
            <Layout size={16} />
            Customize your school's homepage content
          </p>
        </div>
        <button className="group bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-6 py-3 rounded-xl flex items-center gap-2 shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 transition-all duration-300">
          <Save size={18} className="group-hover:rotate-12 transition-transform duration-300" />
          <span className="font-medium">Save All Changes</span>
        </button>
      </div>

      {/* Hero Section */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-md transition-shadow duration-300">
        <div className="px-6 py-5 border-b border-gray-100 bg-gradient-to-r from-emerald-50/50 to-teal-50/50">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg p-2 text-white">
              <Sparkles size={20} />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Hero Section</h2>
              <p className="text-xs text-gray-500">Main banner visible to all visitors</p>
            </div>
          </div>
        </div>
        <div className="p-6">
          <form onSubmit={handleHeroSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
              <input
                type="text"
                value={heroSection.title}
                onChange={(e) => setHeroSection({...heroSection, title: e.target.value})}
                className="block w-full border border-gray-200 rounded-xl shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 text-sm bg-gray-50/50 hover:bg-white"
                placeholder="Enter hero title"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Subtitle</label>
              <input
                type="text"
                value={heroSection.subtitle}
                onChange={(e) => setHeroSection({...heroSection, subtitle: e.target.value})}
                className="block w-full border border-gray-200 rounded-xl shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 text-sm bg-gray-50/50 hover:bg-white"
                placeholder="Enter subtitle"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Button Text</label>
                <input
                  type="text"
                  value={heroSection.buttonText}
                  onChange={(e) => setHeroSection({...heroSection, buttonText: e.target.value})}
                  className="block w-full border border-gray-200 rounded-xl shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 text-sm bg-gray-50/50 hover:bg-white"
                  placeholder="Call to action text"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Button Link</label>
                <input
                  type="text"
                  value={heroSection.buttonLink}
                  onChange={(e) => setHeroSection({...heroSection, buttonLink: e.target.value})}
                  className="block w-full border border-gray-200 rounded-xl shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 text-sm bg-gray-50/50 hover:bg-white"
                  placeholder="/path-to-page"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Background Image</label>
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 border-2 border-gray-200 flex items-center justify-center">
                  {heroSection.backgroundImage ? (
                    <img src={heroSection.backgroundImage} alt="Background" className="h-full w-full object-cover" />
                  ) : (
                    <Image className="text-gray-400" size={24} />
                  )}
                </div>
                <button
                  type="button"
                  className="flex items-center gap-2 bg-white hover:bg-gray-50 py-2.5 px-4 border border-gray-200 rounded-xl shadow-sm text-sm font-medium text-gray-700 transition-colors duration-200"
                >
                  <Upload size={16} />
                  Change Image
                </button>
                <span className="text-xs text-gray-500">Recommended: 1920x1080px</span>
              </div>
            </div>
            <div className="flex justify-end pt-2">
              <button
                type="submit"
                className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-6 py-2.5 rounded-xl font-medium shadow-sm hover:shadow-md transition-all duration-200"
              >
                Update Hero Section
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
        <div className="px-6 py-5 border-b border-gray-100 bg-gradient-to-r from-blue-50/50 to-purple-50/50">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-2 text-white">
              <BarChart3 size={20} />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Statistics</h2>
              <p className="text-xs text-gray-500">Key numbers displayed on homepage</p>
            </div>
          </div>
        </div>
        <div className="p-6">
          <form onSubmit={handleStatsSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Students</label>
              <input
                type="number"
                value={stats.students}
                onChange={(e) => setStats({...stats, students: parseInt(e.target.value)})}
                className="block w-full border border-gray-200 rounded-xl shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 text-sm bg-gray-50/50 hover:bg-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Teachers</label>
              <input
                type="number"
                value={stats.teachers}
                onChange={(e) => setStats({...stats, teachers: parseInt(e.target.value)})}
                className="block w-full border border-gray-200 rounded-xl shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 text-sm bg-gray-50/50 hover:bg-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Years of Excellence</label>
              <input
                type="number"
                value={stats.years}
                onChange={(e) => setStats({...stats, years: parseInt(e.target.value)})}
                className="block w-full border border-gray-200 rounded-xl shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 text-sm bg-gray-50/50 hover:bg-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Awards</label>
              <input
                type="number"
                value={stats.awards}
                onChange={(e) => setStats({...stats, awards: parseInt(e.target.value)})}
                className="block w-full border border-gray-200 rounded-xl shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 text-sm bg-gray-50/50 hover:bg-white"
              />
            </div>
            <div className="md:col-span-2 lg:col-span-4 flex justify-end pt-2">
              <button
                type="submit"
                className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-6 py-2.5 rounded-xl font-medium shadow-sm hover:shadow-md transition-all duration-200"
              >
                Update Statistics
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
        <div className="px-6 py-5 border-b border-gray-100 bg-gradient-to-r from-teal-50/50 to-emerald-50/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-teal-500 to-emerald-600 rounded-lg p-2 text-white">
                <Layout size={20} />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Features</h2>
                <p className="text-xs text-gray-500">Highlight key features of your school</p>
              </div>
            </div>
            <button
              onClick={handleAddFeature}
              className="group bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-4 py-2 rounded-xl flex items-center gap-2 shadow-sm hover:shadow-md transition-all duration-200 text-sm font-medium"
            >
              <Plus size={16} className="group-hover:rotate-90 transition-transform duration-300" />
              <span>Add Feature</span>
            </button>
          </div>
        </div>
        <div className="p-6 space-y-5">
          {features.map((feature, index) => (
            <div key={feature.id} className="group/item border-2 border-gray-100 hover:border-emerald-100 rounded-2xl p-5 transition-all duration-300 hover:shadow-md bg-gradient-to-br from-white to-gray-50/30">
              <form onSubmit={(e) => handleFeatureSubmit(feature.id, e)} className="space-y-4">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-emerald-100 text-emerald-700 rounded-lg px-3 py-1 text-xs font-semibold">
                      Feature {index + 1}
                    </div>
                    <span className="text-xs text-gray-400">ID: {feature.id}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleDeleteFeature(feature.id)}
                    className="text-red-400 hover:text-red-600 hover:bg-red-50 p-2 rounded-lg transition-all duration-200"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                  <input
                    type="text"
                    value={feature.title}
                    onChange={(e) => {
                      const updatedFeatures = features.map(f => 
                        f.id === feature.id ? {...f, title: e.target.value} : f
                      );
                      setFeatures(updatedFeatures);
                    }}
                    className="block w-full border border-gray-200 rounded-xl shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 text-sm bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                  <textarea
                    value={feature.description}
                    onChange={(e) => {
                      const updatedFeatures = features.map(f => 
                        f.id === feature.id ? {...f, description: e.target.value} : f
                      );
                      setFeatures(updatedFeatures);
                    }}
                    rows={3}
                    className="block w-full border border-gray-200 rounded-xl shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 text-sm bg-white resize-none"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Link</label>
                    <div className="relative">
                      <input
                        type="text"
                        value={feature.link}
                        onChange={(e) => {
                          const updatedFeatures = features.map(f => 
                            f.id === feature.id ? {...f, link: e.target.value} : f
                          );
                          setFeatures(updatedFeatures);
                        }}
                        className="block w-full border border-gray-200 rounded-xl shadow-sm py-3 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 text-sm bg-white"
                      />
                      <ExternalLink className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Color Gradient</label>
                    <div className="relative">
                      <select
                        value={feature.color}
                        onChange={(e) => {
                          const updatedFeatures = features.map(f => 
                            f.id === feature.id ? {...f, color: e.target.value} : f
                          );
                          setFeatures(updatedFeatures);
                        }}
                        className="block w-full border border-gray-200 rounded-xl shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 text-sm bg-white appearance-none"
                      >
                        <option value="from-emerald-500 to-green-600">Emerald to Green</option>
                        <option value="from-green-600 to-teal-500">Green to Teal</option>
                        <option value="from-teal-500 to-emerald-600">Teal to Emerald</option>
                      </select>
                      <div className={`absolute right-12 top-1/2 -translate-y-1/2 w-6 h-6 rounded-lg bg-gradient-to-r ${feature.color}`}></div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-5 py-2 rounded-xl font-medium shadow-sm hover:shadow-md transition-all duration-200 text-sm"
                  >
                    Update Feature
                  </button>
                </div>
              </form>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
        <div className="px-6 py-5 border-b border-gray-100 bg-gradient-to-r from-amber-50/50 to-orange-50/50">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg p-2 text-white">
              <Megaphone size={20} />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Call to Action Section</h2>
              <p className="text-xs text-gray-500">Encourage visitors to take action</p>
            </div>
          </div>
        </div>
        <div className="p-6">
          <form onSubmit={handleCtaSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
              <input
                type="text"
                value={ctaSection.title}
                onChange={(e) => setCtaSection({...ctaSection, title: e.target.value})}
                className="block w-full border border-gray-200 rounded-xl shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 text-sm bg-gray-50/50 hover:bg-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                value={ctaSection.description}
                onChange={(e) => setCtaSection({...ctaSection, description: e.target.value})}
                rows={3}
                className="block w-full border border-gray-200 rounded-xl shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 text-sm bg-gray-50/50 hover:bg-white resize-none"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Button Text</label>
                <input
                  type="text"
                  value={ctaSection.buttonText}
                  onChange={(e) => setCtaSection({...ctaSection, buttonText: e.target.value})}
                  className="block w-full border border-gray-200 rounded-xl shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 text-sm bg-gray-50/50 hover:bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Button Link</label>
                <input
                  type="text"
                  value={ctaSection.buttonLink}
                  onChange={(e) => setCtaSection({...ctaSection, buttonLink: e.target.value})}
                  className="block w-full border border-gray-200 rounded-xl shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 text-sm bg-gray-50/50 hover:bg-white"
                />
              </div>
            </div>
            <div className="flex justify-end pt-2">
              <button
                type="submit"
                className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-6 py-2.5 rounded-xl font-medium shadow-sm hover:shadow-md transition-all duration-200"
              >
                Update CTA Section
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomePageEditor;