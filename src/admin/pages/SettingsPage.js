import React, { useState } from 'react';
import { School, Mail, Phone, MapPin, Image, Globe, Search, User, Lock, Key, Save, Check, Eye, EyeOff, AlertCircle } from 'lucide-react';

const SettingsPage = () => {
  const [generalSettings, setGeneralSettings] = useState({
    schoolName: 'Nhosa International School',
    email: 'info@nhosaschool.edu',
    phone: '+234 123 456 7890',
    address: '123 Education Avenue, Lagos, Nigeria',
    logo: '/images/logo.png',
    favicon: '/images/favicon.ico'
  });

  const [seoSettings, setSeoSettings] = useState({
    metaTitle: 'Nhosa International School - Excellence in Education',
    metaDescription: 'Nhosa International School provides world-class education with a focus on academic excellence, character development, and global citizenship.',
    keywords: 'international school, education, academics, Lagos, Nigeria',
    ogImage: '/images/og-image.jpg',
    googleAnalyticsId: 'UA-XXXXXXXXX-X'
  });

  const [userSettings, setUserSettings] = useState({
    username: 'admin',
    email: 'admin@nhosaschool.edu',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [activeTab, setActiveTab] = useState('general');
  const [saved, setSaved] = useState(false);
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false
  });

  const handleGeneralChange = (e) => {
    const { name, value } = e.target;
    setGeneralSettings({
      ...generalSettings,
      [name]: value
    });
  };

  const handleSeoChange = (e) => {
    const { name, value } = e.target;
    setSeoSettings({
      ...seoSettings,
      [name]: value
    });
  };

  const handleUserChange = (e) => {
    const { name, value } = e.target;
    setUserSettings({
      ...userSettings,
      [name]: value
    });
  };

  const handleGeneralSubmit = () => {
    console.log('Saving general settings...');
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleSeoSubmit = () => {
    console.log('Saving SEO settings...');
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleAccountSubmit = () => {
    console.log('Updating account...');
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handlePasswordChange = () => {
    if (userSettings.newPassword !== userSettings.confirmPassword) {
      alert('New passwords do not match!');
      return;
    }
    
    if (!userSettings.currentPassword) {
      alert('Please enter your current password!');
      return;
    }
    
    console.log('Changing password...');
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
    
    setUserSettings({
      ...userSettings,
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    });
  };

  const tabs = [
    { id: 'general', name: 'General', icon: School },
    { id: 'seo', name: 'SEO', icon: Search },
    { id: 'user', name: 'User Account', icon: User }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-green-50/30 to-gray-50 p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-1">Settings</h1>
            <p className="text-gray-500 text-sm">Manage your school's configuration and preferences</p>
          </div>
          {saved && (
            <div className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-xl shadow-lg">
              <Check size={18} />
              <span className="font-medium">Settings saved!</span>
            </div>
          )}
        </div>
        
        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-2">
          <div className="flex gap-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-br from-green-500 to-green-600 text-white shadow-md'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <Icon size={18} />
                  <span>{tab.name}</span>
                </button>
              );
            })}
          </div>
        </div>
        
        {/* General Settings */}
        {activeTab === 'general' && (
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                <School size={20} className="text-white" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">General Settings</h2>
                <p className="text-sm text-gray-500">Basic information about your school</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                  <School size={16} className="text-green-500" />
                  School Name
                </label>
                <input
                  type="text"
                  name="schoolName"
                  value={generalSettings.schoolName}
                  onChange={handleGeneralChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                />
              </div>
              
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                  <Mail size={16} className="text-green-500" />
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={generalSettings.email}
                  onChange={handleGeneralChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                />
              </div>
              
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                  <Phone size={16} className="text-green-500" />
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  value={generalSettings.phone}
                  onChange={handleGeneralChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                  <MapPin size={16} className="text-green-500" />
                  Address
                </label>
                <textarea
                  name="address"
                  value={generalSettings.address}
                  onChange={handleGeneralChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
                  rows="3"
                ></textarea>
              </div>
              
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                  <Image size={16} className="text-green-500" />
                  Logo
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="text"
                    name="logo"
                    value={generalSettings.logo}
                    onChange={handleGeneralChange}
                    className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  />
                  <button
                    type="button"
                    className="px-4 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-all font-medium"
                  >
                    Browse
                  </button>
                </div>
              </div>
              
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                  <Globe size={16} className="text-green-500" />
                  Favicon
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="text"
                    name="favicon"
                    value={generalSettings.favicon}
                    onChange={handleGeneralChange}
                    className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  />
                  <button
                    type="button"
                    className="px-4 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-all font-medium"
                  >
                    Browse
                  </button>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end">
              <button
                onClick={handleGeneralSubmit}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl hover:shadow-lg transition-all font-medium"
              >
                <Save size={18} />
                Save General Settings
              </button>
            </div>
          </div>
        )}
        
        {/* SEO Settings */}
        {activeTab === 'seo' && (
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                <Search size={20} className="text-white" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">SEO Settings</h2>
                <p className="text-sm text-gray-500">Optimize your website for search engines</p>
              </div>
            </div>
            
            <div className="space-y-6 mb-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Meta Title</label>
                <input
                  type="text"
                  name="metaTitle"
                  value={seoSettings.metaTitle}
                  onChange={handleSeoChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  placeholder="Enter meta title..."
                />
                <p className="text-xs text-gray-500 mt-2">Recommended: 50-60 characters</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Meta Description</label>
                <textarea
                  name="metaDescription"
                  value={seoSettings.metaDescription}
                  onChange={handleSeoChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
                  rows="4"
                  placeholder="Enter meta description..."
                ></textarea>
                <p className="text-xs text-gray-500 mt-2">Recommended: 150-160 characters</p>
              </div>    
              
                <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Keywords</label>
                <input
                  type="text"
                  name="keywords"
                  value={seoSettings.keywords}
                  onChange={handleSeoChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  placeholder="education, school, academics..."
                />
                <p className="text-xs text-gray-500 mt-2">Separate keywords with commas</p>
              </div>
              
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                  <Image size={16} className="text-green-500" />
                  OG Image
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="text"
                    name="ogImage"
                    value={seoSettings.ogImage}
                    onChange={handleSeoChange}
                    className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    placeholder="/images/og-image.jpg"
                  />
                  <button
                    type="button"
                    className="px-4 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-all font-medium"
                  >
                    Browse
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-2">Recommended size: 1200x630 pixels</p>
              </div>
              
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                  <Globe size={16} className="text-green-500" />
                  Google Analytics ID
                </label>
                <input
                  type="text"
                  name="googleAnalyticsId"
                  value={seoSettings.googleAnalyticsId}
                  onChange={handleSeoChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  placeholder="UA-XXXXXXXXX-X"
                />
              </div>
            </div>
            
            <div className="flex justify-end">
              <button
                onClick={handleSeoSubmit}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl hover:shadow-lg transition-all font-medium"
              >
                <Save size={18} />
                Save SEO Settings
              </button>
            </div>
          </div>
        )}
        
        {/* User Account Settings */}
        {activeTab === 'user' && (
          <div className="space-y-6">
            {/* Account Information */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                  <User size={20} className="text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">Account Information</h2>
                  <p className="text-sm text-gray-500">Update your account details</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <User size={16} className="text-green-500" />
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    value={userSettings.username}
                    onChange={handleUserChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  />
                </div>
                
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <Mail size={16} className="text-green-500" />
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={userSettings.email}
                    onChange={handleUserChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>
              
              <div className="flex justify-end">
                <button
                  onClick={handleAccountSubmit}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl hover:shadow-lg transition-all font-medium"
                >
                  <Save size={18} />
                  Update Account
                </button>
              </div>
            </div>
            
            {/* Change Password */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                  <Lock size={20} className="text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">Change Password</h2>
                  <p className="text-sm text-gray-500">Update your password to keep your account secure</p>
                </div>
              </div>
              
              <div className="mb-6 p-4 bg-blue-50 rounded-xl border border-blue-100 flex items-start gap-3">
                <AlertCircle size={20} className="text-blue-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-blue-800 font-medium mb-1">Password Requirements</p>
                  <ul className="text-xs text-blue-700 space-y-1">
                    <li>• At least 8 characters long</li>
                    <li>• Include uppercase and lowercase letters</li>
                    <li>• Include at least one number</li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-6 mb-8">
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <Key size={16} className="text-green-500" />
                    Current Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword.current ? 'text' : 'password'}
                      name="currentPassword"
                      value={userSettings.currentPassword}
                      onChange={handleUserChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all pr-12"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword({...showPassword, current: !showPassword.current})}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword.current ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>
                
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <Lock size={16} className="text-green-500" />
                    New Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword.new ? 'text' : 'password'}
                      name="newPassword"
                      value={userSettings.newPassword}
                      onChange={handleUserChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all pr-12"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword({...showPassword, new: !showPassword.new})}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword.new ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>
                
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <Lock size={16} className="text-green-500" />
                    Confirm New Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword.confirm ? 'text' : 'password'}
                      name="confirmPassword"
                      value={userSettings.confirmPassword}
                      onChange={handleUserChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all pr-12"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword({...showPassword, confirm: !showPassword.confirm})}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword.confirm ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end">
                <button
                  onClick={handlePasswordChange}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl hover:shadow-lg transition-all font-medium"
                >
                  <Key size={18} />
                  Change Password
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SettingsPage;