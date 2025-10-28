import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AchievingAlumni = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sample data for achieving alumni
  const achievingAlumni = [
    {
      id: 1,
      name: "Dr. Adebayo Johnson",
      graduationYear: 2005,
      achievement: "Leading Cardiologist at Lagos University Teaching Hospital",
      quote: "The foundation I received at Nhosa gave me the confidence to pursue my dreams in medicine.",
      image: require('../assets/img/N U D Logo.jpg'), // Replace with actual alumni image
      awards: ["National Science Award", "Medical Excellence Award"]
    },
    {
      id: 2,
      name: "Eng. Chioma Okonkwo",
      graduationYear: 2008,
      achievement: "Senior Engineer at Shell Nigeria, leading sustainable energy projects",
      quote: "My teachers at Nhosa inspired my passion for solving real-world problems through engineering.",
      image: require('../assets/img/N U D Logo.jpg'), // Replace with actual alumni image
      awards: ["Young Engineer of the Year", "Women in STEM Excellence Award"]
    },
    {
      id: 3,
      name: "Oluwaseun Adeniyi",
      graduationYear: 2010,
      achievement: "Award-winning entrepreneur, founder of TechNaija startup accelerator",
      quote: "The leadership skills I developed at Nhosa have been instrumental in my business success.",
      image: require('../assets/img/N U D Logo.jpg'), // Replace with actual alumni image
      awards: ["Forbes 30 Under 30", "Nigeria Entrepreneur Award"]
    },
    {
      id: 4,
      name: "Amina Bello",
      graduationYear: 2012,
      achievement: "International human rights lawyer working with the United Nations",
      quote: "Nhosa taught me to stand up for what's right and to use my voice to make a difference.",
      image: require('../assets/img/N U D Logo.jpg'), // Replace with actual alumni image
      awards: ["Human Rights Advocate Award", "Young Leader Award"]
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section with Parallax */}
      <section className="relative bg-gradient-to-br from-emerald-700 via-emerald-600 to-green-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div 
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        >
          <div className="max-w-4xl">
            <div className="inline-block mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium">
              Alumni Excellence
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Our <span className="text-emerald-200">Distinguished</span>
              <br />Alumni
            </h1>
            <p className="text-xl md:text-2xl text-emerald-50 max-w-2xl leading-relaxed">
              Celebrating the remarkable achievements of Nhosa Secondary School graduates who continue to make us proud.
            </p>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-emerald-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-green-400/20 rounded-full blur-3xl animate-pulse"></div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Inspiring the Next Generation</h2>
            <p className="text-lg text-gray-600 mb-8">
              At Nhosa Secondary School, we take immense pride in the accomplishments of our alumni. 
              These outstanding individuals embody our core values of excellence, integrity, and leadership. 
              Their achievements serve as inspiration for our current students, showing them what's possible 
              with dedication, hard work, and the strong foundation provided by a Nhosa education.
            </p>
            <div className="h-1 w-20 bg-emerald-500 mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Alumni Showcase */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Alumni of Excellence</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {achievingAlumni.map((alumni, index) => (
              <motion.div 
                key={alumni.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-xl overflow-hidden flex flex-col h-full"
              >
                <div className="p-6 flex-1">
                  <div className="flex items-start gap-6">
                    <div className="h-24 w-24 rounded-full overflow-hidden flex-shrink-0 border-4 border-emerald-100">
                      <img 
                        src={alumni.image} 
                        alt={alumni.name} 
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{alumni.name}</h3>
                      <p className="text-emerald-600 font-medium">Class of {alumni.graduationYear}</p>
                      <p className="mt-2 text-gray-700 font-medium">{alumni.achievement}</p>
                    </div>
                  </div>
                  
                  <blockquote className="mt-6 italic text-gray-600 border-l-4 border-emerald-300 pl-4 py-2">
                    "{alumni.quote}"
                  </blockquote>
                  
                  <div className="mt-6">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Recognitions</h4>
                    <div className="flex flex-wrap gap-2">
                      {alumni.awards.map((award, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1 bg-emerald-50 text-emerald-700 text-sm font-medium rounded-full"
                        >
                          {award}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-emerald-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Are You a Nhosa Alumnus?</h2>
            <p className="text-lg text-gray-600 mb-8">
              We're always looking to celebrate the achievements of our alumni. If you're a former student 
              with accomplishments you'd like to share, or if you know of a Nhosa graduate doing remarkable things, 
              we'd love to hear from you.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 font-semibold text-white bg-emerald-600 rounded-full hover:bg-emerald-700 transition-all duration-300 shadow-glow"
            >
              <span>Share Your Story</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AchievingAlumni;