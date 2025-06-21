
import React, { useState } from 'react';

const Navigation = () => {
  const [activeTab, setActiveTab] = useState('home');

  const tabs = [
    { id: 'home', label: 'Home', icon: '🏠', gradient: 'from-pink-400 to-rose-400' },
    { id: 'chat', label: 'Get Support', icon: '💭', gradient: 'from-purple-400 to-indigo-400' },
    { id: 'podcasts', label: 'Browse Podcasts', icon: '🎧', gradient: 'from-blue-400 to-cyan-400' },
    { id: 'about', label: 'About Us', icon: '💖', gradient: 'from-pink-400 to-purple-400' },
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
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg transform rotate-3">
                <span className="text-2xl filter drop-shadow-sm">✨</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-300 rounded-full flex items-center justify-center text-xs">
                💫
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-800 to-pink-600 bg-clip-text text-transparent">
                SheStrong
              </h1>
              <p className="text-xs text-purple-600/70 font-medium">Your safe space 💕</p>
            </div>
          </div>
          
          <div className="flex space-x-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-6 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeTab === tab.id
                    ? `bg-gradient-to-r ${tab.gradient} text-white shadow-xl`
                    : 'text-purple-600 hover:bg-white/60 backdrop-blur-sm'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <span className="text-lg filter drop-shadow-sm">{tab.icon}</span>
                  <span className="hidden sm:inline">{tab.label}</span>
                </div>
                {activeTab === tab.id && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full shadow-lg"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
