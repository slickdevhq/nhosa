import React, { useState } from 'react';
import { Users, BookOpen, Calendar, Mail, TrendingUp, Award, ArrowUpRight, Activity } from 'lucide-react';

const DashboardHome = () => {
  const [hoveredStat, setHoveredStat] = useState(null);

  const stats = [
    { name: 'Total Students', value: '1,200', change: '+12%', icon: Users, color: 'bg-gradient-to-br from-blue-500 to-blue-600', lightBg: 'bg-blue-50', textColor: 'text-blue-600' },
    { name: 'Total Teachers', value: '85', change: '+5%', icon: BookOpen, color: 'bg-gradient-to-br from-emerald-500 to-emerald-600', lightBg: 'bg-emerald-50', textColor: 'text-emerald-600' },
    { name: 'Events', value: '24', change: '+8%', icon: Calendar, color: 'bg-gradient-to-br from-purple-500 to-purple-600', lightBg: 'bg-purple-50', textColor: 'text-purple-600' },
    { name: 'Messages', value: '156', change: '+23%', icon: Mail, color: 'bg-gradient-to-br from-amber-500 to-amber-600', lightBg: 'bg-amber-50', textColor: 'text-amber-600' },
  ];

  const recentActivities = [
    { id: 1, action: 'Updated Home page hero section', user: 'Admin', time: '2 hours ago', type: 'update' },
    { id: 2, action: 'Added new event: Science Fair 2023', user: 'Admin', time: '5 hours ago', type: 'create' },
    { id: 3, action: 'Updated About page content', user: 'Admin', time: '1 day ago', type: 'update' },
    { id: 4, action: 'Added new news article', user: 'Admin', time: '2 days ago', type: 'create' },
    { id: 5, action: 'Updated contact information', user: 'Admin', time: '3 days ago', type: 'update' },
  ];

  const quickActions = [
    { label: 'Add New Event', icon: Calendar, gradient: 'from-emerald-500 to-teal-500', bgHover: 'hover:bg-gradient-to-r' },
    { label: 'Update News', icon: TrendingUp, gradient: 'from-blue-500 to-cyan-500', bgHover: 'hover:bg-gradient-to-r' },
    { label: 'Update Achievements', icon: Award, gradient: 'from-purple-500 to-pink-500', bgHover: 'hover:bg-gradient-to-r' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100/50 p-6">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-1">Dashboard</h1>
            <p className="text-gray-500 flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              Welcome to Nhosa Secondary School Admin Dashboard
            </p>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <div className="bg-white rounded-xl px-4 py-2 shadow-sm border border-gray-100">
              <span className="text-xs text-gray-500">Today</span>
              <p className="text-sm font-semibold text-gray-900">{new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid with Enhanced Design */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredStat(index)}
            onMouseLeave={() => setHoveredStat(null)}
            className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200"
          >
            {/* Gradient Background Effect */}
            <div className={`absolute inset-0 ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
            
            <div className="relative p-6">
              <div className="flex items-start justify-between mb-4">
                <div className={`${stat.lightBg} rounded-xl p-3 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className={`${stat.textColor}`} size={24} />
                </div>
                <div className="flex items-center gap-1 text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                  <ArrowUpRight size={12} />
                  {stat.change}
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">{stat.name}</p>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              </div>
            </div>
            
            {/* Bottom accent line */}
            <div className={`h-1 ${stat.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
          </div>
        ))}
      </div>

      {/* Quick Actions - Redesigned */}
      <div className="bg-white rounded-2xl shadow-sm mb-8 overflow-hidden border border-gray-100">
        <div className="px-6 py-5 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
          <div className="flex items-center gap-2">
            <Activity className="text-gray-400" size={20} />
            <h2 className="text-lg font-semibold text-gray-900">Quick Actions</h2>
          </div>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {quickActions.map((action, index) => (
              <button
                key={index}
                className="group relative bg-gradient-to-br from-gray-50 to-white hover:from-white hover:to-gray-50 border-2 border-gray-100 hover:border-gray-200 rounded-xl p-5 transition-all duration-300 hover:shadow-lg overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${action.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                <div className="relative flex items-center justify-center gap-3">
                  <div className={`bg-gradient-to-r ${action.gradient} rounded-lg p-2 text-white group-hover:scale-110 transition-transform duration-300`}>
                    <action.icon size={18} />
                  </div>
                  <span className="font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                    {action.label}
                  </span>
                  <ArrowUpRight className="ml-auto text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" size={16} />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activities - Enhanced */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
        <div className="px-6 py-5 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Activity className="text-gray-400" size={20} />
              <h2 className="text-lg font-semibold text-gray-900">Recent Activities</h2>
            </div>
            <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Last 7 days</span>
          </div>
        </div>
        
        <div className="divide-y divide-gray-100">
          {recentActivities.map((activity, index) => (
            <div
              key={activity.id}
              className="px-6 py-4 hover:bg-gray-50 transition-colors duration-200 group cursor-pointer"
            >
              <div className="flex items-center gap-4">
                {/* Activity Type Indicator */}
                <div className={`flex-shrink-0 w-10 h-10 rounded-xl ${
                  activity.type === 'create' ? 'bg-emerald-50' : 'bg-blue-50'
                } flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                  <div className={`w-2 h-2 rounded-full ${
                    activity.type === 'create' ? 'bg-emerald-500' : 'bg-blue-500'
                  }`}></div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 mb-0.5">{activity.action}</p>
                  <p className="text-xs text-gray-500">By {activity.user}</p>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-400">{activity.time}</span>
                  <ArrowUpRight className="text-gray-300 group-hover:text-gray-600 opacity-0 group-hover:opacity-100 transition-all duration-200" size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="px-6 py-4 border-t border-gray-100 bg-gray-50">
          <button className="text-sm font-medium text-emerald-600 hover:text-emerald-700 transition-colors flex items-center gap-1 group">
            View All Activities
            <ArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;