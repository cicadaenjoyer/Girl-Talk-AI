
import React from 'react';
import { ExternalLink, Heart, BookOpen, Users, Phone } from 'lucide-react';

interface Resource {
  title: string;
  description: string;
  url: string;
  type: 'article' | 'hotline' | 'community' | 'tool';
  icon: React.ReactNode;
}

interface HelpfulResourcesProps {
  userMessage: string;
}

const HelpfulResources = ({ userMessage }: HelpfulResourcesProps) => {
  const getResourcesForMessage = (message: string): Resource[] => {
    const lowerMessage = message.toLowerCase();
    
    // Base resources that always appear
    const baseResources: Resource[] = [
      {
        title: "Crisis Text Line",
        description: "Free 24/7 support via text message",
        url: "https://www.crisistextline.org/",
        type: "hotline",
        icon: <Phone size={16} />
      },
      {
        title: "Teen Line",
        description: "Teens helping teens through tough times",
        url: "https://teenlineonline.org/",
        type: "community",
        icon: <Users size={16} />
      }
    ];

    // Specific resources based on keywords
    if (lowerMessage.includes('confidence') || lowerMessage.includes('self-esteem') || lowerMessage.includes('insecure')) {
      return [
        ...baseResources,
        {
          title: "Building Self-Confidence Guide",
          description: "Practical tips for boosting your self-worth",
          url: "https://kidshealth.org/en/teens/confidence.html",
          type: "article",
          icon: <BookOpen size={16} />
        },
        {
          title: "Body Positive Community",
          description: "Supportive space for self-love and acceptance",
          url: "https://www.nationaleatingdisorders.org/body-positive-resources",
          type: "community",
          icon: <Heart size={16} />
        }
      ];
    }

    if (lowerMessage.includes('friend') || lowerMessage.includes('relationship') || lowerMessage.includes('drama')) {
      return [
        ...baseResources,
        {
          title: "Healthy Relationships Guide",
          description: "Learn about setting boundaries and communication",
          url: "https://www.loveisrespect.org/",
          type: "article",
          icon: <BookOpen size={16} />
        },
        {
          title: "Friendship Support Forum",
          description: "Connect with others navigating friendship challenges",
          url: "https://www.7cups.com/",
          type: "community",
          icon: <Users size={16} />
        }
      ];
    }

    if (lowerMessage.includes('school') || lowerMessage.includes('stress') || lowerMessage.includes('pressure')) {
      return [
        ...baseResources,
        {
          title: "Study Skills & Stress Management",
          description: "Tools for academic success and mental wellness",
          url: "https://kidshealth.org/en/teens/school-stress.html",
          type: "tool",
          icon: <BookOpen size={16} />
        },
        {
          title: "Student Support Network",
          description: "Connect with other students facing similar challenges",
          url: "https://www.jedfoundation.org/",
          type: "community",
          icon: <Users size={16} />
        }
      ];
    }

    if (lowerMessage.includes('bully') || lowerMessage.includes('mean') || lowerMessage.includes('harassment')) {
      return [
        ...baseResources,
        {
          title: "StopBullying.gov Resources",
          description: "Government resources for dealing with bullying",
          url: "https://www.stopbullying.gov/",
          type: "article",
          icon: <BookOpen size={16} />
        },
        {
          title: "Cyberbullying Support",
          description: "Help for online harassment and digital safety",
          url: "https://cyberbullying.org/",
          type: "tool",
          icon: <Heart size={16} />
        }
      ];
    }

    // Default resources
    return [
      ...baseResources,
      {
        title: "Teen Mental Health Resources",
        description: "Comprehensive guide to mental wellness",
        url: "https://www.nimh.nih.gov/health/topics/child-and-adolescent-mental-health",
        type: "article",
        icon: <BookOpen size={16} />
      },
      {
        title: "Young Women's Support Community",
        description: "Safe space for young women to connect and support each other",
        url: "https://www.girlshealth.gov/",
        type: "community",
        icon: <Heart size={16} />
      }
    ];
  };

  const resources = getResourcesForMessage(userMessage);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'hotline': return 'from-red-400 to-pink-400';
      case 'community': return 'from-purple-400 to-blue-400';
      case 'article': return 'from-green-400 to-teal-400';
      case 'tool': return 'from-orange-400 to-yellow-400';
      default: return 'from-pink-400 to-purple-400';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'hotline': return '🆘 Crisis Support';
      case 'community': return '👥 Community';
      case 'article': return '📚 Article';
      case 'tool': return '🛠️ Tool';
      default: return '💕 Resource';
    }
  };

  return (
    <div className="relative animate-fade-in">
      {/* Floating background elements */}
      <div className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-br from-green-200 to-teal-200 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-gradient-to-br from-orange-200 to-yellow-200 rounded-full opacity-25 animate-bounce"></div>
      
      <div className="bg-gradient-to-br from-green-50 via-teal-50 to-blue-50 rounded-3xl shadow-2xl p-8 max-w-2xl mx-auto border border-white/60 relative overflow-hidden">
        {/* Top gradient border */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 via-teal-400 to-blue-400 rounded-t-3xl"></div>
        
        <div className="text-center mb-6">
          <div className="flex justify-center items-center space-x-3 mb-4">
            <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg transform rotate-3">
              <span className="text-2xl">🌟</span>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-blue-500 rounded-xl flex items-center justify-center shadow-md transform -rotate-6">
              <span className="text-xl">💚</span>
            </div>
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-green-400 rounded-lg flex items-center justify-center shadow-sm transform rotate-12">
              <span className="text-lg">✨</span>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold bg-gradient-to-r from-green-700 to-teal-600 bg-clip-text text-transparent mb-2">
            Helpful Resources Just for You
          </h3>
          <p className="text-teal-700 text-sm">
            We've curated these resources to support you on your journey 🌈
          </p>
        </div>
        
        <div className="space-y-4">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg border border-white/70 hover:shadow-xl transition-all duration-300 transform hover:scale-102 relative overflow-hidden group"
            >
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              
              <div className="flex items-start space-x-4 relative z-10">
                <div className={`w-12 h-12 bg-gradient-to-br ${getTypeColor(resource.type)} rounded-xl flex items-center justify-center shadow-md flex-shrink-0`}>
                  {resource.icon}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h4 className="font-bold text-gray-800 text-lg">{resource.title}</h4>
                    <span className="text-xs bg-gradient-to-r from-teal-100 to-green-100 text-teal-700 px-2 py-1 rounded-full font-medium">
                      {getTypeLabel(resource.type)}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                    {resource.description}
                  </p>
                  
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-teal-600 hover:text-teal-700 font-semibold text-sm transition-colors duration-200"
                  >
                    <span>Visit Resource</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 p-4 bg-gradient-to-r from-teal-100 to-green-100 rounded-xl border border-teal-200/50">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center">
              <span className="text-lg">💝</span>
            </div>
            <p className="text-teal-800 text-sm font-medium">
              Remember: You're not alone in this journey. Reach out for help when you need it! 💕
            </p>
          </div>
        </div>
        
        {/* Corner decorations */}
        <div className="absolute top-4 right-4 text-green-300/40 text-xl">🌸</div>
        <div className="absolute bottom-4 left-4 text-teal-300/40 text-lg">💫</div>
      </div>
    </div>
  );
};

export default HelpfulResources;
