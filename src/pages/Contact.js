import React, { useState } from 'react';
import { MapPin, Mail, Phone, Clock, Send, MessageCircle, ChevronDown, ChevronUp } from 'lucide-react';

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert('Message sent successfully! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const faqs = [
    {
      question: 'What are the school fees?',
      answer: 'Our school fees vary by grade level. JSS 1-3 costs ₦425,000 per term, SSS 1-2 costs ₦485,000, and SSS 3 costs ₦550,000. Please visit our Admissions page for detailed information about tuition and other fees.'
    },
    {
      question: 'Do you offer transportation services?',
      answer: 'Yes, we provide safe and reliable transportation services for students living within Abeokuta and surrounding areas. Our fleet of modern buses covers major routes with trained drivers and monitors. Additional fees apply based on distance.'
    },
    {
      question: 'What is the admission process?',
      answer: 'Our admission process includes three simple steps: submit an online application with required documents, take an entrance examination to assess academic readiness, and attend an interview with our admissions team. Visit our Admissions page for more details.'
    },
    {
      question: 'Are there scholarships available?',
      answer: 'Yes, we offer merit-based scholarships for exceptional students who demonstrate outstanding academic performance, leadership qualities, or special talents. Please contact our admissions office at admissions@nhosaschool.edu.ng for more information.'
    },
    {
      question: 'What extracurricular activities do you offer?',
      answer: 'We offer a comprehensive range of extracurricular activities including sports (football, basketball, athletics), performing arts (music, drama, dance), academic clubs (debate, robotics, science club), and leadership programs. Every student is encouraged to participate.'
    }
  ];

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        
        <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-emerald-600/30 backdrop-blur-sm rounded-full border border-emerald-400/30">
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm font-medium text-emerald-100">We're Here to Help</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-emerald-50 max-w-2xl mx-auto leading-relaxed">
              Have questions about admissions, programs, or our school? We'd love to hear from you and help you on your journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="group bg-white p-8 rounded-2xl shadow-md border border-gray-100 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Location</h3>
              <p className="text-gray-600 leading-relaxed">123 School Road, Abeokuta, Ogun State, Nigeria</p>
              <button className="mt-4 text-emerald-600 font-semibold text-sm hover:text-emerald-700 transition-colors">
                Get Directions →
              </button>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-md border border-gray-100 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Email Us</h3>
              <p className="text-gray-600 mb-1">info@nhosaschool.edu.ng</p>
              <p className="text-gray-600">admissions@nhosaschool.edu.ng</p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-md border border-gray-100 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Call Us</h3>
              <p className="text-gray-600 mb-1">+234 803 123 4567</p>
              <p className="text-gray-600">+234 905 678 9012</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
                <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours.</p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-xl border border-gray-100">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField('')}
                        className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-200 ${
                          focusedField === 'name' 
                            ? 'border-emerald-500 bg-emerald-50/30 shadow-sm' 
                            : 'border-gray-200 bg-white hover:border-gray-300'
                        }`}
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField('')}
                        className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-200 ${
                          focusedField === 'email' 
                            ? 'border-emerald-500 bg-emerald-50/30 shadow-sm' 
                            : 'border-gray-200 bg-white hover:border-gray-300'
                        }`}
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField('')}
                        className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-200 ${
                          focusedField === 'phone' 
                            ? 'border-emerald-500 bg-emerald-50/30 shadow-sm' 
                            : 'border-gray-200 bg-white hover:border-gray-300'
                        }`}
                        placeholder="+234 xxx xxx xxxx"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Subject *</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('subject')}
                        onBlur={() => setFocusedField('')}
                        className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-200 ${
                          focusedField === 'subject' 
                            ? 'border-emerald-500 bg-emerald-50/30 shadow-sm' 
                            : 'border-gray-200 bg-white hover:border-gray-300'
                        }`}
                        placeholder="How can we help?"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Your Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField('')}
                      rows="5"
                      className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-200 resize-none ${
                        focusedField === 'message' 
                          ? 'border-emerald-500 bg-emerald-50/30 shadow-sm' 
                          : 'border-gray-200 bg-white hover:border-gray-300'
                      }`}
                      placeholder="Tell us more about your inquiry..."
                    ></textarea>
                  </div>

                  <button 
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-semibold py-4 px-8 rounded-xl hover:from-emerald-700 hover:to-emerald-800 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </div>
              </div>
            </div>

            {/* Map and School Hours */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Find Us</h2>
                <div className="bg-gradient-to-br from-gray-200 to-gray-100 h-80 rounded-2xl shadow-lg flex items-center justify-center overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-emerald-700/20"></div>
                  <div className="text-center z-10">
                    <MapPin className="w-24 h-24 text-emerald-700/40 mx-auto mb-4" />
                    <p className="text-gray-500 font-medium">Interactive Map</p>
                    <p className="text-sm text-gray-400">Google Maps Integration</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl shadow-lg p-8 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">School Hours</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <p className="font-semibold text-emerald-100 mb-1">Monday - Friday</p>
                    <p className="text-lg">7:30 AM - 3:30 PM</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <p className="font-semibold text-emerald-100 mb-1">Saturday</p>
                    <p className="text-lg">8:00 AM - 12:00 PM</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <p className="font-semibold text-emerald-100 mb-1">Sunday</p>
                    <p className="text-lg">Closed</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <p className="font-semibold text-emerald-100 mb-1">Admin Office</p>
                    <p className="text-lg">8:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Quick answers to common questions about our school</p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-bold text-gray-900 pr-4">{faq.question}</h3>
                  <div className="flex-shrink-0">
                    {expandedFAQ === index ? (
                      <ChevronUp className="w-6 h-6 text-emerald-600" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                </button>
                
                {expandedFAQ === index && (
                  <div className="px-6 pb-6 pt-0">
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <button className="px-8 py-3 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Contact Our Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;