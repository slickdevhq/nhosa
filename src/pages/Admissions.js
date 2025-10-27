import React, { useState } from 'react';
import { CheckCircle, Calendar, FileText, Users, Award, BookOpen } from 'lucide-react';

const Admissions = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    email: '',
    phone: '',
    address: '',
    previousSchool: '',
    gradeLevel: '',
    message: ''
  });

  const [focusedField, setFocusedField] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert('Application submitted successfully! We will contact you soon.');
    setFormData({
      studentName: '',
      parentName: '',
      email: '',
      phone: '',
      address: '',
      previousSchool: '',
      gradeLevel: '',
      message: ''
    });
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
            <div className="inline-block mb-6 px-4 py-2 bg-emerald-600/30 backdrop-blur-sm rounded-full border border-emerald-400/30">
              <span className="text-sm font-medium text-emerald-100">Applications Now Open</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Begin Your Journey to
              <span className="block text-emerald-300">Academic Excellence</span>
            </h1>
            <p className="text-lg md:text-xl text-emerald-50 max-w-2xl mx-auto leading-relaxed">
              Join a community where tradition meets innovation, and every student is empowered to reach their full potential.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Nhosa Secondary School?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Experience education that goes beyond textbooks</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="group">
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Academic Excellence</h3>
                <p className="text-gray-600 leading-relaxed">Consistently outstanding WAEC and NECO results with personalized learning support.</p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Faculty</h3>
                <p className="text-gray-600 leading-relaxed">Dedicated teachers committed to nurturing both academic and personal growth.</p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Modern Facilities</h3>
                <p className="text-gray-600 leading-relaxed">State-of-the-art classrooms, laboratories, and digital learning resources.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simple Admission Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Three easy steps to join our community</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-lg border-2 border-emerald-100 group-hover:border-emerald-200 transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl mb-6 shadow-lg">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Submit Application</h3>
                <p className="text-gray-600 leading-relaxed">Complete our online form with required documents and information about your child.</p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-lg border-2 border-emerald-100 group-hover:border-emerald-200 transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl mb-6 shadow-lg">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Assessment</h3>
                <p className="text-gray-600 leading-relaxed">Qualified applicants take an entrance exam to demonstrate their academic readiness.</p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-lg border-2 border-emerald-100 group-hover:border-emerald-200 transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl mb-6 shadow-lg">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Interview & Acceptance</h3>
                <p className="text-gray-600 leading-relaxed">Meet with our team for a personal discussion and receive your admission decision.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Admission Requirements</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Prepare these documents to ensure a smooth application process. Our admissions team is here to guide you every step of the way.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
                  <FileText className="w-5 h-5 text-emerald-600 mr-2" />
                  Required Documents
                </h3>
                <div className="space-y-3">
                  {[
                    'Completed application form',
                    'Birth certificate or valid passport',
                    'Recent passport-sized photographs (2 copies)',
                    'Academic records from previous school',
                    'Letter of recommendation (transfer students)',
                    'Application fee payment receipt'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start group">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl shadow-lg p-8 text-white">
                <h3 className="text-lg font-bold mb-6 flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Important Dates 2023/2024
                </h3>
                <div className="space-y-4">
                  {[
                    { label: 'Application Deadline', date: 'July 31, 2023' },
                    { label: 'Entrance Examination', date: 'August 12, 2023' },
                    { label: 'Interview Period', date: 'August 21-25, 2023' },
                    { label: 'Admission Notification', date: 'September 1, 2023' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center pb-3 border-b border-emerald-500/30 last:border-0">
                      <span className="font-medium text-emerald-50">{item.label}</span>
                      <span className="font-bold">{item.date}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:sticky lg:top-8">
              <div className="bg-gradient-to-br from-gray-200 to-gray-100 rounded-2xl h-96 lg:h-[600px] shadow-lg flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-emerald-700/20"></div>
                <div className="text-center z-10">
                  <BookOpen className="w-24 h-24 text-emerald-700/40 mx-auto mb-4" />
                  <p className="text-gray-500 font-medium">School Campus Image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Apply Now</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Take the first step towards an exceptional education. Complete the form below and our admissions team will be in touch.</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Student's Full Name *
                    </label>
                    <input
                      type="text"
                      name="studentName"
                      value={formData.studentName}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('studentName')}
                      onBlur={() => setFocusedField('')}
                      className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-200 ${
                        focusedField === 'studentName' 
                          ? 'border-emerald-500 bg-emerald-50/30 shadow-sm' 
                          : 'border-gray-200 bg-white hover:border-gray-300'
                      }`}
                      placeholder="Enter student's name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Parent/Guardian Name *
                    </label>
                    <input
                      type="text"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('parentName')}
                      onBlur={() => setFocusedField('')}
                      className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-200 ${
                        focusedField === 'parentName' 
                          ? 'border-emerald-500 bg-emerald-50/30 shadow-sm' 
                          : 'border-gray-200 bg-white hover:border-gray-300'
                      }`}
                      placeholder="Enter parent's name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
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
                      placeholder="example@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
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
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Home Address *
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('address')}
                    onBlur={() => setFocusedField('')}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-200 ${
                      focusedField === 'address' 
                        ? 'border-emerald-500 bg-emerald-50/30 shadow-sm' 
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}
                    placeholder="Enter full address"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Previous School *
                    </label>
                    <input
                      type="text"
                      name="previousSchool"
                      value={formData.previousSchool}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('previousSchool')}
                      onBlur={() => setFocusedField('')}
                      className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-200 ${
                        focusedField === 'previousSchool' 
                          ? 'border-emerald-500 bg-emerald-50/30 shadow-sm' 
                          : 'border-gray-200 bg-white hover:border-gray-300'
                      }`}
                      placeholder="Name of previous school"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Applying for Grade Level *
                    </label>
                    <select
                      name="gradeLevel"
                      value={formData.gradeLevel}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('gradeLevel')}
                      onBlur={() => setFocusedField('')}
                      className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-200 ${
                        focusedField === 'gradeLevel' 
                          ? 'border-emerald-500 bg-emerald-50/30 shadow-sm' 
                          : 'border-gray-200 bg-white hover:border-gray-300'
                      }`}
                    >
                      <option value="">Select Grade Level</option>
                      <option value="JSS 1">JSS 1</option>
                      <option value="JSS 2">JSS 2</option>
                      <option value="JSS 3">JSS 3</option>
                      <option value="SSS 1">SSS 1</option>
                      <option value="SSS 2">SSS 2</option>
                      <option value="SSS 3">SSS 3</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Additional Information
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField('')}
                    rows="4"
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-200 resize-none ${
                      focusedField === 'message' 
                        ? 'border-emerald-500 bg-emerald-50/30 shadow-sm' 
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}
                    placeholder="Tell us anything else we should know..."
                  ></textarea>
                </div>

                <div className="pt-4">
                  <button 
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-semibold py-4 px-8 rounded-xl hover:from-emerald-700 hover:to-emerald-800 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    Submit Application
                  </button>
                  <p className="text-center text-sm text-gray-500 mt-4">
                    By submitting this form, you agree to our terms and conditions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tuition & Fees */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tuition & Fees</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Transparent pricing with flexible payment options to support your family</p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-emerald-700 to-emerald-600 text-white">
                    <tr>
                      <th className="px-6 py-5 text-left font-semibold">Grade Level</th>
                      <th className="px-6 py-5 text-left font-semibold">Tuition Fee</th>
                      <th className="px-6 py-5 text-left font-semibold">Other Fees</th>
                      <th className="px-6 py-5 text-left font-semibold">Total</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="hover:bg-emerald-50/50 transition-colors">
                      <td className="px-6 py-5 font-medium text-gray-900">JSS 1-3</td>
                      <td className="px-6 py-5 text-gray-700">₦350,000</td>
                      <td className="px-6 py-5 text-gray-700">₦75,000</td>
                      <td className="px-6 py-5 font-bold text-emerald-700">₦425,000</td>
                    </tr>
                    <tr className="hover:bg-emerald-50/50 transition-colors">
                      <td className="px-6 py-5 font-medium text-gray-900">SSS 1-2</td>
                      <td className="px-6 py-5 text-gray-700">₦400,000</td>
                      <td className="px-6 py-5 text-gray-700">₦85,000</td>
                      <td className="px-6 py-5 font-bold text-emerald-700">₦485,000</td>
                    </tr>
                    <tr className="hover:bg-emerald-50/50 transition-colors">
                      <td className="px-6 py-5 font-medium text-gray-900">SSS 3</td>
                      <td className="px-6 py-5 text-gray-700">₦450,000</td>
                      <td className="px-6 py-5 text-gray-700">₦100,000</td>
                      <td className="px-6 py-5 font-bold text-emerald-700">₦550,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Other Fees Include</h3>
                <p className="text-sm text-gray-600">Registration, Books, Uniform, Development Levy, and ICT facilities</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Payment Options</h3>
                <p className="text-sm text-gray-600">Full payment or flexible installment plans available to suit your needs</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Scholarships Available</h3>
                <p className="text-sm text-gray-600">Merit-based scholarships for exceptional students. Contact admissions for details</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;