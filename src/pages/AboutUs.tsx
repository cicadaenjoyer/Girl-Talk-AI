
import React from 'react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "Founder & CEO",
      icon: "👩‍💼",
      gradient: "from-pink-400 to-rose-400",
      description: "Passionate about empowering women through technology and storytelling."
    },
    {
      name: "Maya Rodriguez",
      role: "Head of Content",
      icon: "🎙️",
      gradient: "from-purple-400 to-indigo-400",
      description: "Expert in creating meaningful content that resonates with women's experiences."
    },
    {
      name: "Dr. Amanda Foster",
      role: "Mental Health Advisor",
      icon: "🧠",
      gradient: "from-blue-400 to-cyan-400",
      description: "Licensed therapist specializing in women's mental health and wellness."
    }
  ];

  const values = [
    {
      title: "Authenticity",
      icon: "💎",
      gradient: "from-pink-400 to-purple-400",
      description: "We believe in real stories, genuine support, and authentic connections."
    },
    {
      title: "Inclusivity",
      icon: "🌈",
      gradient: "from-purple-400 to-blue-400",
      description: "Every woman deserves support, regardless of background, age, or circumstances."
    },
    {
      title: "Empowerment",
      icon: "💪",
      gradient: "from-blue-400 to-pink-400",
      description: "We're here to lift you up and remind you of your incredible strength."
    },
    {
      title: "Innovation",
      icon: "✨",
      gradient: "from-green-400 to-emerald-400",
      description: "Using cutting-edge AI to create personalized support experiences."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Floating background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-blue-200 to-pink-200 rounded-full opacity-25 animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full opacity-15 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-gradient-to-br from-pink-200 to-blue-200 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-10 animate-pulse"></div>
        
        {/* Floating icons */}
        <div className="absolute top-1/4 left-1/6 text-pink-300/30 text-4xl animate-pulse">💖</div>
        <div className="absolute top-1/2 right-1/5 text-purple-300/30 text-3xl animate-bounce">🌟</div>
        <div className="absolute bottom-1/4 left-1/3 text-blue-300/30 text-5xl animate-pulse">🦋</div>
        <div className="absolute top-3/4 right-1/4 text-pink-300/30 text-3xl animate-bounce">✨</div>
      </div>
      
      <Navigation />
      
      <main className="container mx-auto px-4 py-12 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16 relative">
          <div className="flex justify-center items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-3xl flex items-center justify-center shadow-xl transform rotate-6">
              <span className="text-3xl">💖</span>
            </div>
            <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-blue-500 rounded-3xl flex items-center justify-center shadow-xl transform -rotate-3">
              <span className="text-4xl">🌟</span>
            </div>
            <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-pink-400 rounded-2xl flex items-center justify-center shadow-lg transform rotate-12">
              <span className="text-2xl">✨</span>
            </div>
          </div>
          
          <h1 className="text-6xl font-bold bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-6 leading-tight">
            About SheStrong
          </h1>
          <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 max-w-4xl mx-auto shadow-xl border border-white/50">
            <p className="text-2xl text-purple-700 leading-relaxed font-medium">
              We're a community dedicated to supporting women through every challenge, celebration, and moment in between.
              <span className="inline-block ml-2 text-3xl">💪🌈💕</span>
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="mb-20 relative">
          <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-10 max-w-5xl mx-auto shadow-2xl border border-white/60 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400"></div>
            
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-800 to-pink-600 bg-clip-text text-transparent mb-6">
                Our Mission
              </h2>
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 border border-purple-200/50">
                <p className="text-xl text-purple-700 leading-relaxed font-medium">
                  To create a safe, supportive space where every woman can find the guidance, inspiration, and strength she needs to navigate life's challenges. 
                  Through personalized AI-generated content and curated resources, we're revolutionizing how women access mental health support and personal development.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl p-6 border border-pink-200/50">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg mr-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-2xl font-bold text-purple-800">Our Vision</h3>
                </div>
                <p className="text-purple-700 leading-relaxed">
                  A world where every woman feels empowered, supported, and confident in her ability to overcome any challenge.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-100 to-pink-100 rounded-2xl p-6 border border-blue-200/50">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg mr-4">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="text-2xl font-bold text-purple-800">Our Impact</h3>
                </div>
                <p className="text-purple-700 leading-relaxed">
                  Over 10,000 women have found support through our platform, with 95% reporting improved mental wellbeing.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-800 to-pink-600 bg-clip-text text-transparent text-center mb-12">
            Meet Our Team
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={member.name} className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/60 relative overflow-hidden transform hover:scale-105 transition-all duration-300">
                <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${member.gradient}`}></div>
                
                <div className="text-center">
                  <div className={`w-20 h-20 bg-gradient-to-br ${member.gradient} rounded-full flex items-center justify-center shadow-xl mx-auto mb-4 transform hover:rotate-12 transition-transform duration-300`}>
                    <span className="text-4xl">{member.icon}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-purple-800 mb-2">{member.name}</h3>
                  <p className="text-lg font-semibold text-pink-600 mb-4">{member.role}</p>
                  
                  <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-4 border border-purple-200/50">
                    <p className="text-purple-700 leading-relaxed">{member.description}</p>
                  </div>
                </div>

                {/* Corner decorations */}
                <div className="absolute bottom-4 left-4 text-pink-300/40 text-xl">{member.icon}</div>
                <div className="absolute top-4 right-4 text-purple-300/40 text-xl">✨</div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-800 to-pink-600 bg-clip-text text-transparent text-center mb-12">
            Our Values
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={value.title} className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/60 relative overflow-hidden transform hover:scale-105 transition-all duration-300">
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${value.gradient}`}></div>
                
                <div className="text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center shadow-lg mx-auto mb-4`}>
                    <span className="text-2xl">{value.icon}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-purple-800 mb-3">{value.title}</h3>
                  <p className="text-purple-700 leading-relaxed text-sm">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative">
          <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-10 max-w-4xl mx-auto shadow-2xl border border-white/60 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400"></div>
            
            <div className="text-center">
              <div className="flex justify-center items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-800 to-pink-600 bg-clip-text text-transparent">
                  Join Our Community
                </h3>
                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-400 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-2xl">💕</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6 border border-purple-200/50 mb-6">
                <p className="text-xl text-purple-700 leading-relaxed">
                  Ready to start your journey with SheStrong? Get personalized support and join thousands of women who are already thriving!
                </p>
              </div>
              
              <Button
                className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 hover:from-purple-600 hover:via-pink-600 hover:to-blue-600 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
              >
                <span className="mr-2">💬</span>
                Get Started Today
                <span className="ml-2">✨</span>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutUs;
