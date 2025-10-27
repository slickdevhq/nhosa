import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { 
  Home, 
  FileText, 
  Book, 
  Users, 
  Calendar, 
  Mail, 
  Settings, 
  LogOut,
  Menu,
  X,
  ChevronDown,
  Bell
} from 'lucide-react';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Dashboard', href: '/admin', icon: Home },
    { name: 'Home Page', href: '/admin/home', icon: FileText },
    { name: 'About Page', href: '/admin/about', icon: Users },
    { name: 'Academics', href: '/admin/academics', icon: Book },
    { name: 'Admissions', href: '/admin/admissions', icon: Users },
    { name: 'News & Events', href: '/admin/news', icon: Calendar },
    { name: 'Contact', href: '/admin/contact', icon: Mail },
    { name: 'Settings', href: '/admin/settings', icon: Settings },
  ];

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div 
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-emerald-800 text-white transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b border-emerald-700">
          <div className="flex items-center">
            <img 
              src="/assets/img/N U D Logo.jpg" 
              alt="Nhosa Logo" 
              className="h-8 w-8 rounded-full mr-2" 
            />
            <span className="text-lg font-semibold">Nhosa Admin</span>
          </div>
          <button 
            className="md:hidden text-white focus:outline-none" 
            onClick={toggleSidebar}
          >
            <X size={24} />
          </button>
        </div>
        <nav className="mt-5 px-2">
          <div className="space-y-1">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href || 
                (item.href !== '/admin' && location.pathname.startsWith(item.href));
              
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                    isActive
                      ? 'bg-emerald-700 text-white'
                      : 'text-emerald-100 hover:bg-emerald-600'
                  }`}
                >
                  <item.icon 
                    className={`mr-3 h-5 w-5 ${
                      isActive ? 'text-white' : 'text-emerald-300'
                    }`} 
                  />
                  {item.name}
                </Link>
              );
            })}
          </div>
        </nav>
        <div className="absolute bottom-0 w-full">
          <div className="px-4 py-4 border-t border-emerald-700">
            <Link
              to="/admin/logout"
              className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-emerald-100 hover:bg-emerald-600"
            >
              <LogOut className="mr-3 h-5 w-5 text-emerald-300" />
              Logout
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col md:ml-64">
        {/* Top Navigation */}
        <div className="sticky top-0 z-10 bg-white shadow-sm">
          <div className="flex items-center justify-between h-16 px-4">
            <button
              className="md:hidden text-gray-500 focus:outline-none"
              onClick={toggleSidebar}
            >
              <Menu size={24} />
            </button>
            
            <div className="flex items-center space-x-4">
              <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
                <Bell size={20} />
              </button>
              
              <div className="relative">
                <button
                  className="flex items-center space-x-2 focus:outline-none"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  <div className="h-8 w-8 rounded-full bg-emerald-600 flex items-center justify-center text-white">
                    <span className="text-sm font-medium">AD</span>
                  </div>
                  <span className="hidden md:block text-sm font-medium text-gray-700">Admin</span>
                  <ChevronDown size={16} className="text-gray-500" />
                </button>
                
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                    <Link
                      to="/admin/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Your Profile
                    </Link>
                    <Link
                      to="/admin/settings"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Settings
                    </Link>
                    <Link
                      to="/admin/logout"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Logout
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;