
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);

  const tabs = [
    { id: '/', label: 'Home', icon: '🏠', gradient: 'from-pink-400 to-rose-400' },
    { id: '/get-support', label: 'Get Support', icon: '💭', gradient: 'from-purple-400 to-indigo-400' },
    { id: '/browse-podcasts', label: 'Browse Podcasts', icon: '🎧', gradient: 'from-blue-400 to-cyan-400' },
    { id: '/about-us', label: 'About Us', icon: '💖', gradient: 'from-pink-400 to-purple-400' },
  ];

  return (
    <nav className="bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 shadow-2xl relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-2 left-10 w-3 h-3 bg-white/30 rounded-full animate-pulse"></div>
        <div className="absolute top-6 right-20 w-2 h-2 bg-pink-300/40 rounded-full animate-bounce"></div>
        <div className="absolute bottom-3 left-1/3 w-2 h-2 bg-purple-300/40 rounded-full animate-pulse"></div>
        <div className="absolute top-3 right-1/4 text-white/20 text-xs">✨</div>
        <div className="absolute bottom-2 right-10 text-white/20 text-xs">💫</div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3">
            
          <div className="relative">
            <img 
              src="/logo.png" 
              alt="Girl Talk AI Logo" 
              className="w-12 h-12 rounded-2xl shadow-lg transform rotate-3"
            />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-300 rounded-full flex items-center justify-center text-xs">
              💫
            </div>
          </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-800 to-pink-600 bg-clip-text text-transparent">
                Girl Talk AI
              </h1>
              <p className="text-xs text-purple-600/70 font-medium">Your safe space 💕</p>
            </div>
          </Link>
          
          <div className="flex space-x-2">
            {tabs.map((tab) => (
              <Link
                key={tab.id}
                to={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-6 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                  location.pathname === tab.id
                    ? `bg-gradient-to-r ${tab.gradient} text-white shadow-xl`
                    : 'text-purple-600 hover:bg-white/60 backdrop-blur-sm'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <span className="text-lg filter drop-shadow-sm">{tab.icon}</span>
                  <span className="hidden sm:inline">{tab.label}</span>
                </div>
                {location.pathname === tab.id && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full shadow-lg"></div>
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
