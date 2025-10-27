import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  Home, Users, BookOpen, Calendar, FileText, 
  Image, Settings, LogOut, Menu, X, ChevronRight, Bell, Search
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import logo from '../../assets/img/N U D Logo.jpg'

const AdminLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const menuItems = [
    { name: 'Dashboard', icon: <Home size={20} />, path: '/admin' },
    { name: 'Home Page', icon: <Home size={20} />, path: '/admin/home-editor' },
    { name: 'About Page', icon: <Users size={20} />, path: '/admin/about-editor' },
    { name: 'Academics', icon: <BookOpen size={20} />, path: '/admin/academics-editor' },
    { name: 'News & Events', icon: <Calendar size={20} />, path: '/admin/news-manager' },
    { name: 'Admissions', icon: <FileText size={20} />, path: '/admin/admissions-editor' },
    { name: 'Media Gallery', icon: <Image size={20} />, path: '/admin/media-gallery' },
    { name: 'Settings', icon: <Settings size={20} />, path: '/admin/settings' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      {/* Backdrop Overlay for Mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        } ${sidebarOpen ? 'w-64' : 'lg:w-20'} fixed lg:static inset-y-0 left-0 z-30
        bg-gradient-to-b from-green-900 via-green-800 to-green-900 
        text-white transition-all duration-300 ease-in-out
        shadow-2xl border-r border-green-700/30`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-5 border-b border-green-700/50 backdrop-blur-sm">
          {sidebarOpen ? (
            <Link to="/admin" className="flex items-center space-x-3 group">
              <div className="relative">
                <img 
                  src={logo} 
                  alt="School Logo" 
                  className="h-11 w-11 rounded-xl object-cover ring-2 ring-white/20 
                  group-hover:ring-white/40 transition-all duration-300 shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-green-400/20 to-transparent rounded-xl" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg tracking-tight">Admin Portal</span>
                <span className="text-xs text-green-200 font-medium">Management System</span>
              </div>
            </Link>
          ) : (        
            <div className="relative hidden mx-auto">
              <img 
                src="/assets/img/N U D Logo.jpg" 
                alt="School Logo" 
                className="h-11 w-11 rounded-xl object-cover ring-2 ring-white/20 shadow-lg"
              />
            </div>
          )}
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg hover:bg-white/10 transition-all duration-200 
            active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-4 px-3 space-y-1">
          {menuItems.map((item) => {
            const active = isActive(item.path);
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center px-4 py-3 rounded-xl group relative
                  transition-all duration-200 ${
                    active
                      ? 'bg-white text-green-900 shadow-lg shadow-green-900/20'
                      : 'text-green-50 hover:bg-white/10 hover:text-white'
                  } ${!sidebarOpen && 'justify-center lg:px-4'}`}
              >
                {active && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-green-400 rounded-r-full" />
                )}
                <span className={`${active ? 'text-green-700' : 'text-green-100 group-hover:text-white'} 
                  transition-colors duration-200`}>
                  {item.icon}
                </span>
                {sidebarOpen && (
                  <span className={`ml-3 font-medium text-sm ${active ? 'font-semibold' : ''}`}>
                    {item.name}
                  </span>
                )}
                {sidebarOpen && active && (
                  <ChevronRight size={16} className="ml-auto text-green-700" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Logout Button */}
        <div className="absolute bottom-0 left-0 right-0 p-3 border-t border-green-700/50 backdrop-blur-sm">
          <button
            onClick={handleLogout}
            className={`flex items-center px-4 py-3 rounded-xl text-green-50 
            hover:bg-red-500/20 hover:text-white transition-all duration-200 w-full
            group ${!sidebarOpen && 'justify-center'}`}
          >
            <LogOut size={20} className="group-hover:rotate-12 transition-transform duration-200" />
            {sidebarOpen && <span className="ml-3 font-medium text-sm">Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200/50 sticky top-0 z-10">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-all duration-200"
              >
                <Menu size={20} className="text-gray-700" />
              </button>
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  {location.pathname === '/admin' ? 'Dashboard' : 
                    menuItems.find(item => item.path === location.pathname)?.name || 'Admin Portal'}
                </h1>
                <p className="text-xs text-gray-500 mt-0.5">
                  Welcome back to your admin panel
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              {/* Search Button */}
              <button className="p-2.5 rounded-xl hover:bg-gray-100 transition-all duration-200 
                relative group">
                <Search size={20} className="text-gray-600" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full 
                  animate-pulse" />
              </button>

              {/* Notifications */}
              <button className="p-2.5 rounded-xl hover:bg-gray-100 transition-all duration-200 
                relative group">
                <Bell size={20} className="text-gray-600" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full 
                  text-white text-xs flex items-center justify-center font-semibold">3</span>
              </button>

              {/* Profile */}
              <div className="flex items-center space-x-3 pl-3 pr-4 py-2 rounded-xl 
                hover:bg-gray-100 transition-all duration-200 cursor-pointer group">
                <div className="relative">
                  <img 
                    src="/assets/img/N U D Logo.jpg" 
                    alt="Admin" 
                    className="h-9 w-9 rounded-xl object-cover ring-2 ring-gray-200 
                    group-hover:ring-green-300 transition-all duration-300"
                  />
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full 
                    ring-2 ring-white" />
                </div>
                <div className="hidden md:block">
                  <p className="text-sm font-semibold text-gray-900">Admin User</p>
                  <p className="text-xs text-gray-500">Administrator</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;