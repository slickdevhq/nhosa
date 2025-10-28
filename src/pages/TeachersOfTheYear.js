import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TeachersOfTheYear = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sample data for teachers of the year
  const honoredTeachers = [
    {
      id: 1,
      name: "Mrs. Folake Adeyemi",
      subject: "Mathematics",
      year: 2023,
      achievement: "Developed innovative teaching methods that improved student math scores by 35%",
      quote: "Teaching is not just about imparting knowledge, but inspiring a love for learning that lasts a lifetime.",
      image: require('../assets/img/N U D Logo.jpg'), // Replace with actual teacher image
      impact: "Her dedication has transformed how students approach mathematics, making it accessible and enjoyable for all."
    },
    {
      id: 2,
      name: "Mr. Chukwudi Okonkwo",
      subject: "Physics",
      year: 2022,
      achievement: "Led the school's science team to national recognition in the Science Olympiad",
      quote: "I believe every student has the potential to excel in science when given the right guidance and encouragement.",
      image: require('../assets/img/N U D Logo.jpg'), // Replace with actual teacher image
      impact: "His hands-on approach to teaching physics has inspired many students to pursue careers in STEM fields."
    },
    {
      id: 3,
      name: "Ms. Amina Ibrahim",
      subject: "Literature",
      year: 2021,
      achievement: "Published educational resources that are now used across multiple schools in Nigeria",
      quote: "Literature opens minds to new worlds and perspectives. It's a privilege to guide students on this journey.",
      image: require('../assets/img/N U D Logo.jpg'), // Replace with actual teacher image
      impact: "Her passion for literature has cultivated critical thinking and empathy in countless students."
    },
    {
      id: 4,
      name: "Mr. Oluwaseun Adeleke",
      subject: "Computer Science",
      year: 2020,
      achievement: "Established the school's first coding club and mentored students to win regional tech competitions",
      quote: "In today's digital world, coding literacy is as important as reading and writing. I'm proud to equip our students for the future.",
      image: require('../assets/img/N U D Logo.jpg'), // Replace with actual teacher image
      impact: "His forward-thinking approach has positioned our students at the forefront of technological innovation."
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
              Excellence in Education
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Our <span className="text-emerald-200">Outstanding</span>
              <br />Educators
            </h1>
            <p className="text-xl md:text-2xl text-emerald-50 max-w-2xl leading-relaxed">
              Celebrating the dedicated teachers who go above and beyond to inspire and educate our students.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Recognizing Educational Excellence</h2>
            <p className="text-lg text-gray-600 mb-8">
              At Nhosa Secondary School, we believe that great teachers are the heart of education. 
              Each year, we honor educators who demonstrate exceptional dedication, innovation, and impact. 
              These teachers not only excel in their subject areas but also inspire students to reach their full potential.
              Their commitment to educational excellence sets a standard for all of us.
            </p>
            <div className="h-1 w-20 bg-emerald-500 mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Teachers Showcase */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Teachers of the Year</h2>
          
          <div className="grid grid-cols-1 gap-12">
            {honoredTeachers.map((teacher, index) => (
              <motion.div 
                key={teacher.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-xl overflow-hidden"
              >
                <div className="md:flex">
                  <div className="md:w-1/3 bg-emerald-50 p-8 flex items-center justify-center">
                    <div className="h-48 w-48 rounded-full overflow-hidden border-4 border-emerald-100 shadow-lg">
                      <img 
                        src={teacher.image} 
                        alt={teacher.name} 
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{teacher.name}</h3>
                        <p className="text-emerald-600 font-medium">{teacher.subject} Teacher</p>
                      </div>
                      <div className="bg-emerald-600 text-white px-4 py-2 rounded-full font-bold">
                        {teacher.year}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Achievement</h4>
                      <p className="text-gray-700">{teacher.achievement}</p>
                    </div>
                    
                    <blockquote className="mb-6 italic text-gray-600 border-l-4 border-emerald-300 pl-4 py-2">
                      "{teacher.quote}"
                    </blockquote>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Impact</h4>
                      <p className="text-gray-700">{teacher.impact}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nomination Section */}
      <section className="py-20 bg-emerald-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Know an Outstanding Educator?</h2>
            <p className="text-lg text-gray-600 mb-8">
              We believe in recognizing excellence in education. If you know a teacher at Nhosa Secondary School 
              who deserves recognition for their exceptional work, we encourage you to nominate them for the 
              Teacher of the Year award. Your nomination helps us celebrate those who make a difference every day.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 font-semibold text-white bg-emerald-600 rounded-full hover:bg-emerald-700 transition-all duration-300 shadow-glow"
            >
              <span>Nominate a Teacher</span>
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

export default TeachersOfTheYear;