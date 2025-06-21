
import React, { useState } from 'react';

const Navigation = () => {
  const [activeTab, setActiveTab] = useState('home');

  const tabs = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'chat', label: 'Get Support', icon: '💭' },
    { id: 'podcasts', label: 'Browse Podcasts', icon: '🎧' },
    { id: 'about', label: 'About Us', icon: '💖' },
  ];

  return (
    <nav className="bg-gradient-to-r from-pink-200 to-purple-200 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="text-2xl">✨</div>
            <h1 className="text-xl font-bold text-purple-800">SheStrong</h1>
          </div>
          
          <div className="flex space-x-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-white text-purple-700 shadow-md'
                    : 'text-purple-600 hover:bg-white/50'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
