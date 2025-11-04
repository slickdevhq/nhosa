import React, { useState, useEffect } from 'react';
import { MapPin, Mail, Phone, Clock, Send, MessageCircle, ChevronDown, ChevronUp, Sparkles, MessageSquare, Calendar, ExternalLink } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [focusedField, setFocusedField] = useState('');
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 4000);
  };

  const faqs = [
    {
      question: 'What are the school fees?',
      answer: 'Our school fees vary by grade level. JSS 1-3 costs ₦425,000 per term, SSS 1-2 costs ₦485,000, and SSS 3 costs ₦550,000. Please visit our Admissions page for detailed information about tuition and other fees.',
      icon: '💰'
    },
    {
      question: 'Do you offer transportation services?',
      answer: 'Yes, we provide safe and reliable transportation services for students living within Abeokuta and surrounding areas. Our fleet of modern buses covers major routes with trained drivers and monitors. Additional fees apply based on distance.',
      icon: '🚌'
    },
    {
      question: 'What is the admission process?',
      answer: 'Our admission process includes three simple steps: submit an online application with required documents, take an entrance examination to assess academic readiness, and attend an interview with our admissions team. Visit our Admissions page for more details.',
      icon: '📝'
    },
    {
      question: 'Are there scholarships available?',
      answer: 'Yes, we offer merit-based scholarships for exceptional students who demonstrate outstanding academic performance, leadership qualities, or special talents. Please contact our admissions office at admissions@nhosaschool.edu.ng for more information.',
      icon: '🎓'
    },
    {
      question: 'What extracurricular activities do you offer?',
      answer: 'We offer a comprehensive range of extracurricular activities including sports (football, basketball, athletics), performing arts (music, drama, dance), academic clubs (debate, robotics, science club), and leadership programs. Every student is encouraged to participate.',
      icon: '⚽'
    }
  ];

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

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
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-bold text-emerald-200 uppercase tracking-wider">We're Here to Help</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-6 leading-tight">
              <span className="block text-white/90">Get in</span>
              <span className="block mt-2 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            
            <div className="h-1 w-24 sm:w-32 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mx-auto mb-6 sm:mb-8"></div>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-emerald-50/90 max-w-3xl mx-auto leading-relaxed font-light">
              Have questions about admissions, programs, or our school? We'd love to hear from you and help you on your journey.
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

      {/* Contact Information Cards - Enhanced */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <MapPin className="w-8 h-8" />,
                title: 'Our Location',
                content: '123 School Road, Abeokuta, Ogun State, Nigeria',
                action: 'Get Directions',
                gradient: 'from-emerald-500 to-teal-500'
              },
              {
                icon: <Mail className="w-8 h-8" />,
                title: 'Email Us',
                content: 'info@nhosaschool.edu.ng',
                subContent: 'admissions@nhosaschool.edu.ng',
                action: 'Send Email',
                gradient: 'from-blue-500 to-indigo-500'
              },
              {
                icon: <Phone className="w-8 h-8" />,
                title: 'Call Us',
                content: '+234 803 123 4567',
                subContent: '+234 905 678 9012',
                action: 'Call Now',
                gradient: 'from-purple-500 to-pink-500'
              }
            ].map((item, idx) => (
              <div key={idx} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity`}></div>
                <div className="relative bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl`}>
                    <div className="text-white">{item.icon}</div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-3 sm:mb-4">{item.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-semibold mb-1">{item.content}</p>
                  {item.subContent && (
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-semibold mb-4">{item.subContent}</p>
                  )}
                  <button className={`mt-4 inline-flex items-center gap-2 text-sm sm:text-base font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent hover:scale-105 transition-transform`}>
                    {item.action}
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map - Enhanced */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
            {/* Contact Form - Enhanced */}
            <div>
              <div className="mb-8 sm:mb-12">
                <div className="inline-block px-4 py-2 bg-emerald-100 rounded-full mb-4 sm:mb-6">
                  <span className="text-xs sm:text-sm font-bold text-emerald-700 uppercase tracking-wider">Send Message</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6 bg-gradient-to-r from-slate-900 via-emerald-800 to-teal-800 bg-clip-text text-transparent">
                  Send Us a Message
                </h2>
                <p className="text-base sm:text-lg text-gray-600">Fill out the form below and we'll get back to you within 24 hours.</p>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 rounded-3xl blur-2xl opacity-10"></div>
                <div className="relative bg-gradient-to-br from-gray-50 to-white p-6 sm:p-8 lg:p-10 rounded-3xl shadow-2xl border border-gray-100">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Your Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField('')}
                          className={`w-full px-4 py-3 sm:py-4 border-2 rounded-xl focus:outline-none transition-all duration-300 font-semibold ${
                            focusedField === 'name' 
                              ? 'border-emerald-500 bg-emerald-50/50 shadow-lg ring-4 ring-emerald-100' 
                              : 'border-gray-200 bg-white hover:border-gray-300'
                          }`}
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField('')}
                          className={`w-full px-4 py-3 sm:py-4 border-2 rounded-xl focus:outline-none transition-all duration-300 font-semibold ${
                            focusedField === 'email' 
                              ? 'border-emerald-500 bg-emerald-50/50 shadow-lg ring-4 ring-emerald-100' 
                              : 'border-gray-200 bg-white hover:border-gray-300'
                          }`}
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('phone')}
                          onBlur={() => setFocusedField('')}
                          className={`w-full px-4 py-3 sm:py-4 border-2 rounded-xl focus:outline-none transition-all duration-300 font-semibold ${
                            focusedField === 'phone' 
                              ? 'border-emerald-500 bg-emerald-50/50 shadow-lg ring-4 ring-emerald-100' 
                              : 'border-gray-200 bg-white hover:border-gray-300'
                          }`}
                          placeholder="+234 xxx xxx xxxx"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Subject *</label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('subject')}
                          onBlur={() => setFocusedField('')}
                          className={`w-full px-4 py-3 sm:py-4 border-2 rounded-xl focus:outline-none transition-all duration-300 font-semibold ${
                            focusedField === 'subject' 
                              ? 'border-emerald-500 bg-emerald-50/50 shadow-lg ring-4 ring-emerald-100' 
                              : 'border-gray-200 bg-white hover:border-gray-300'
                          }`}
                          placeholder="How can we help?"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Your Message *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField('')}
                        rows="5"
                        className={`w-full px-4 py-3 sm:py-4 border-2 rounded-xl focus:outline-none transition-all duration-300 resize-none font-semibold ${
                          focusedField === 'message' 
                            ? 'border-emerald-500 bg-emerald-50/50 shadow-lg ring-4 ring-emerald-100' 
                            : 'border-gray-200 bg-white hover:border-gray-300'
                        }`}
                        placeholder="Tell us more about your inquiry..."
                        required
                      ></textarea>
                    </div>

                    <button 
                      type="submit"
                      className="group w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-black py-4 sm:py-5 px-8 rounded-xl hover:from-emerald-700 hover:to-teal-700 transform hover:scale-[1.02] transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 text-base sm:text-lg"
                    >
                      {isSubmitted ? (
                        <>
                          <span className="inline-block w-6 h-6 bg-white rounded-full flex items-center justify-center text-emerald-600 text-sm">✓</span>
                          Message Sent!
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          Send Message
                          <Sparkles className="w-5 h-5" />
                        </>
                      )}
                    </button>

                    {isSubmitted && (
                      <div className="p-4 sm:p-5 bg-emerald-50 border-2 border-emerald-200 rounded-xl flex items-center gap-3">
                        <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-lg">✓</span>
                        </div>
                        <p className="text-emerald-800 text-sm sm:text-base font-bold">
                          Thank you! We'll get back to you within 24 hours.
                        </p>
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>

            {/* Map and School Hours - Enhanced */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <div className="mb-6">
                  <div className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-4">
                    <span className="text-xs sm:text-sm font-bold text-blue-700 uppercase tracking-wider">Location</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
                    Find Us
                  </h2>
                </div>
                <div className="relative bg-gradient-to-br from-gray-200 to-gray-100 h-80 sm:h-96 rounded-2xl sm:rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden border-4 border-white">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-emerald-700/20"></div>
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
                  <div className="text-center z-10">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 bg-emerald-500/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-6 border-2 border-emerald-400/30">
                      <MapPin className="w-12 h-12 sm:w-16 sm:h-16 text-emerald-700" />
                    </div>
                    <p className="text-lg sm:text-xl font-black text-gray-700 mb-2">Interactive Map</p>
                    <p className="text-sm sm:text-base text-gray-500 font-semibold">Google Maps Integration</p>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl sm:rounded-3xl"></div>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
                <div className="relative rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 text-white">
                  <div className="flex items-center gap-3 mb-6 sm:mb-8">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30">
                      <Clock className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black">School Hours</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4 sm:gap-6">
                    {[
                      { label: 'Monday - Friday', time: '7:30 AM - 3:30 PM' },
                      { label: 'Saturday', time: '8:00 AM - 12:00 PM' },
                      { label: 'Sunday', time: 'Closed' },
                      { label: 'Admin Office', time: '8:00 AM - 4:00 PM' }
                    ].map((item, idx) => (
                      <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                        <p className="font-bold text-emerald-100 mb-2 text-sm sm:text-base">{item.label}</p>
                        <p className="text-base sm:text-lg font-black">{item.time}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Enhanced */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-100 rounded-full blur-3xl opacity-30"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block px-4 py-2 bg-purple-100 rounded-full mb-4 sm:mb-6">
              <span className="text-xs sm:text-sm font-bold text-purple-700 uppercase tracking-wider">FAQ</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 bg-gradient-to-r from-slate-900 via-purple-800 to-indigo-800 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">Quick answers to common questions about our school</p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl sm:rounded-3xl opacity-0 ${expandedFAQ === index ? 'opacity-10' : ''} blur-xl transition-opacity`}></div>
                <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-6 sm:p-8 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div className="text-3xl sm:text-4xl flex-shrink-0">{faq.icon}</div>
                      <h3 className="text-base sm:text-lg lg:text-xl font-black text-gray-900 pr-4">{faq.question}</h3>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                      {expandedFAQ === index ? (
                        <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />
                      ) : (
                        <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />
                      )}
                    </div>
                  </button>
                  
                  {expandedFAQ === index && (
                    <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0">
                      <div className="border-t border-gray-100 pt-6 pl-12 sm:pl-16">
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-semibold">{faq.answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 sm:mt-16 text-center">
            <p className="text-base sm:text-lg text-gray-600 mb-6 font-semibold">Still have questions?</p>
            <button className="group inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full font-black text-sm sm:text-base hover:from-emerald-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
              <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />
              Contact Our Team
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA - Enhanced */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-900 text-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.2),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(6,182,212,0.15),transparent_50%)]"></div>
        </div>

        {/* Floating Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 sm:mb-8 border border-white/20">
              <span className="text-xs sm:text-sm font-bold text-emerald-200 uppercase tracking-wider">Let's Connect</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 leading-tight">
              Ready to Join Our
              <span className="block mt-2 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                Community?
              </span>
            </h2>
            
            <p className="text-base sm:text-lg lg:text-xl text-emerald-50/90 mb-8 sm:mb-12 leading-relaxed max-w-2xl mx-auto">
              Schedule a visit to our campus or speak with our admissions team to learn more about what makes Nhosa special.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
              <button className="group inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full font-black text-sm sm:text-base hover:from-emerald-500 hover:to-teal-500 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
                Schedule a Visit
              </button>
              
              <button className="group inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-full font-black text-sm sm:text-base hover:bg-white/20 hover:border-white transition-all duration-300">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                Call Now
              </button>
            </div>

            {/* Contact Methods */}
            <div className="mt-12 sm:mt-16 pt-12 sm:pt-16 border-t border-white/10">
              <p className="text-xs sm:text-sm text-emerald-200 font-bold uppercase tracking-wider mb-6 sm:mb-8">Preferred Contact Method</p>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                {[
                  { icon: <Mail />, label: 'Email' },
                  { icon: <Phone />, label: 'Phone' },
                  { icon: <MessageCircle />, label: 'WhatsApp' },
                  { icon: <Calendar />, label: 'In-Person' }
                ].map((method, idx) => (
                  <div 
                    key={idx}
                    className="group flex flex-col items-center gap-2 sm:gap-3 px-6 sm:px-8 py-4 sm:py-5 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:bg-white/20 transition-all">
                      <div className="text-emerald-400 w-5 h-5 sm:w-6 sm:h-6">{method.icon}</div>
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-white">{method.label}</span>
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

export default Contact;