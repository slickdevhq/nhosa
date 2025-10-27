import React, { useState } from 'react';
import { Save, Mail, Phone, MapPin, Edit } from 'lucide-react';

const ContactEditor = () => {
  const [contactInfo, setContactInfo] = useState({
    address: '123 School Avenue, Lagos, Nigeria',
    email: 'info@schoolname.edu.ng',
    phone: '+234 123 456 7890',
    officeHours: 'Monday - Friday: 8:00 AM - 4:00 PM'
  });

  const [socialMedia, setSocialMedia] = useState([
    { id: 1, platform: 'Facebook', url: 'https://facebook.com/schoolname' },
    { id: 2, platform: 'Twitter', url: 'https://twitter.com/schoolname' },
    { id: 3, platform: 'Instagram', url: 'https://instagram.com/schoolname' },
    { id: 4, platform: 'LinkedIn', url: 'https://linkedin.com/company/schoolname' }
  ]);

  const [formSubmissions, setFormSubmissions] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', subject: 'Admission Inquiry', message: 'I would like to know more about the admission process.', date: '2023-05-15', status: 'Unread' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', subject: 'School Tour', message: 'I am interested in scheduling a tour of your facilities.', date: '2023-05-16', status: 'Read' },
    { id: 3, name: 'Michael Johnson', email: 'michael@example.com', subject: 'Scholarship Information', message: 'Could you provide details about scholarship opportunities?', date: '2023-05-17', status: 'Replied' }
  ]);

  const [editingContactInfo, setEditingContactInfo] = useState(false);
  const [editingSocialMedia, setEditingSocialMedia] = useState(false);
  const [tempContactInfo, setTempContactInfo] = useState({...contactInfo});
  const [tempSocialMedia, setTempSocialMedia] = useState([...socialMedia]);

  const handleContactInfoChange = (e) => {
    const { name, value } = e.target;
    setTempContactInfo({
      ...tempContactInfo,
      [name]: value
    });
  };

  const handleSocialMediaChange = (id, field, value) => {
    setTempSocialMedia(tempSocialMedia.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  const saveContactInfo = () => {
    setContactInfo({...tempContactInfo});
    setEditingContactInfo(false);
  };

  const saveSocialMedia = () => {
    setSocialMedia([...tempSocialMedia]);
    setEditingSocialMedia(false);
  };

  const cancelContactInfoEdit = () => {
    setTempContactInfo({...contactInfo});
    setEditingContactInfo(false);
  };

  const cancelSocialMediaEdit = () => {
    setTempSocialMedia([...socialMedia]);
    setEditingSocialMedia(false);
  };

  const markAsRead = (id) => {
    setFormSubmissions(formSubmissions.map(item => 
      item.id === id && item.status === 'Unread' ? { ...item, status: 'Read' } : item
    ));
  };

  const markAsReplied = (id) => {
    setFormSubmissions(formSubmissions.map(item => 
      item.id === id ? { ...item, status: 'Replied' } : item
    ));
  };

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-gray-800">Contact Page Editor</h1>
      
      {/* Contact Information Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-700">Contact Information</h2>
          {!editingContactInfo ? (
            <button 
              onClick={() => setEditingContactInfo(true)}
              className="flex items-center px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              <Edit size={16} className="mr-1" /> Edit Information
            </button>
          ) : (
            <div className="flex space-x-2">
              <button 
                onClick={cancelContactInfoEdit}
                className="px-3 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
              >
                Cancel
              </button>
              <button 
                onClick={saveContactInfo}
                className="flex items-center px-3 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
              >
                <Save size={16} className="mr-1" /> Save Changes
              </button>
            </div>
          )}
        </div>
        
        {!editingContactInfo ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <MapPin className="text-green-600 mt-1 mr-3" size={20} />
              <div>
                <h3 className="font-medium text-gray-900">Address</h3>
                <p className="text-gray-600">{contactInfo.address}</p>
              </div>
            </div>
            <div className="flex items-start">
              <Mail className="text-green-600 mt-1 mr-3" size={20} />
              <div>
                <h3 className="font-medium text-gray-900">Email</h3>
                <p className="text-gray-600">{contactInfo.email}</p>
              </div>
            </div>
            <div className="flex items-start">
              <Phone className="text-green-600 mt-1 mr-3" size={20} />
              <div>
                <h3 className="font-medium text-gray-900">Phone</h3>
                <p className="text-gray-600">{contactInfo.phone}</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-green-600 mt-1 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Office Hours</h3>
                <p className="text-gray-600">{contactInfo.officeHours}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
              <textarea
                name="address"
                value={tempContactInfo.address}
                onChange={handleContactInfoChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                rows="3"
              ></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={tempContactInfo.email}
                onChange={handleContactInfoChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input
                type="text"
                name="phone"
                value={tempContactInfo.phone}
                onChange={handleContactInfoChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Office Hours</label>
              <input
                type="text"
                name="officeHours"
                value={tempContactInfo.officeHours}
                onChange={handleContactInfoChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
        )}
      </div>
      
      {/* Social Media Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-700">Social Media Links</h2>
          {!editingSocialMedia ? (
            <button 
              onClick={() => setEditingSocialMedia(true)}
              className="flex items-center px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              <Edit size={16} className="mr-1" /> Edit Links
            </button>
          ) : (
            <div className="flex space-x-2">
              <button 
                onClick={cancelSocialMediaEdit}
                className="px-3 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
              >
                Cancel
              </button>
              <button 
                onClick={saveSocialMedia}
                className="flex items-center px-3 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
              >
                <Save size={16} className="mr-1" /> Save Changes
              </button>
            </div>
          )}
        </div>
        
        {!editingSocialMedia ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {socialMedia.map(item => (
              <div key={item.id} className="flex items-center p-3 border border-gray-200 rounded-md">
                <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full mr-3">
                  <span className="text-gray-600 font-bold">{item.platform.charAt(0)}</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{item.platform}</h3>
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">
                    {item.url}
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {tempSocialMedia.map(item => (
              <div key={item.id} className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 border border-gray-200 rounded-md">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Platform</label>
                  <input
                    type="text"
                    value={item.platform}
                    onChange={(e) => handleSocialMediaChange(item.id, 'platform', e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">URL</label>
                  <input
                    type="url"
                    value={item.url}
                    onChange={(e) => handleSocialMediaChange(item.id, 'url', e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Form Submissions Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Contact Form Submissions</h2>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {formSubmissions.map((submission) => (
                <tr key={submission.id} className={submission.status === 'Unread' ? 'bg-blue-50' : ''}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{submission.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{submission.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{submission.subject}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{submission.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${submission.status === 'Unread' ? 'bg-blue-100 text-blue-800' : 
                        submission.status === 'Read' ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-green-100 text-green-800'}`}
                    >
                      {submission.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button 
                      onClick={() => markAsRead(submission.id)}
                      className="text-blue-600 hover:text-blue-900 mr-3"
                      disabled={submission.status !== 'Unread'}
                    >
                      Mark as Read
                    </button>
                    <button 
                      onClick={() => markAsReplied(submission.id)}
                      className="text-green-600 hover:text-green-900"
                      disabled={submission.status === 'Replied'}
                    >
                      Mark as Replied
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Message Details Modal would go here in a real implementation */}
    </div>
  );
};

export default ContactEditor;