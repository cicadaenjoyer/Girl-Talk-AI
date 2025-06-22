import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import ChatBox from '@/components/ChatBox';
import PodcastRecommendation from '@/components/PodcastRecommendation';
import HelpfulResources from '@/components/HelpfulResources';
import { findMatchingPodcast, type Podcast } from '@/api/podcasts';
import { useToast } from '@/hooks/use-toast';

const GetSupport = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [recommendedPodcast, setRecommendedPodcast] = useState<Podcast | null>(null);
  const [userMessage, setUserMessage] = useState('');
  const { toast } = useToast();

  const handleChatSubmit = async (message: string) => {
    setIsLoading(true);
    setUserMessage(message);
    
    setTimeout(() => {
      const matchedPodcast = findMatchingPodcast(message);
      setRecommendedPodcast(matchedPodcast);
      setIsLoading(false);
      
      toast({
        title: "Custom episode generated! 💕",
        description: "We've created a personalized podcast episode and helpful resources just for you!",
      });
    }, 2000);
  };

  const handleListenClick = () => {
    toast({
      title: "Playing your custom episode! 🎧",
      description: "This would start playing your personalized podcast episode.",
    });
  };

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
        <div className="absolute top-1/2 right-1/5 text-purple-300/30 text-3xl animate-bounce">✨</div>
        <div className="absolute bottom-1/4 left-1/3 text-blue-300/30 text-5xl animate-pulse">🌸</div>
        <div className="absolute top-3/4 right-1/4 text-pink-300/30 text-3xl animate-bounce">💫</div>
      </div>
      
      <Navigation />
      
      <main className="container mx-auto px-4 py-12 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16 relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 w-24 h-24 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full opacity-40 animate-pulse"></div>
          
          <div className="flex justify-center items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-3xl flex items-center justify-center shadow-xl transform rotate-6">
              <span className="text-3xl">💬</span>
            </div>
            <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-blue-500 rounded-3xl flex items-center justify-center shadow-xl transform -rotate-3">
              <span className="text-4xl">🤗</span>
            </div>
            <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-pink-400 rounded-2xl flex items-center justify-center shadow-lg transform rotate-12">
              <span className="text-2xl">💕</span>
            </div>
          </div>
          
          <h1 className="text-6xl font-bold bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-6 leading-tight">
            Get Support
          </h1>
        </div>

        {/* Motivational Section */}
        {!recommendedPodcast && !isLoading && (
          <div className="mt-20 relative">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full opacity-50 animate-pulse"></div>
            
            <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-10 max-w-3xl mx-auto shadow-2xl border border-white/60 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400"></div>
              
              <div className="text-center">
                <div className="flex justify-center items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-2xl">🤗</span>
                  </div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-800 to-pink-600 bg-clip-text text-transparent">
                    We're Here for You
                  </h3>
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-400 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-2xl">💝</span>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6 border border-purple-200/50 mb-6">
                  <blockquote className="text-xl text-purple-700 italic font-medium leading-relaxed">
                    "Your feelings are valid, your struggles are real, and your strength is incredible. 
                    But for those moments when you need an extra helping hand, here are some resources to turn to."
                  </blockquote>
                </div>

                {/* Fixed Resources Section */}
                <div className="flex justify-center items-start space-x-4 p-6 bg-purple-50 rounded-lg">
                  <span className="text-2xl">💝</span>
                  <div className="flex-1 max-w-4xl">
                    <ul className="space-y-3">
                      <li>
                        <a 
                          href="https://www.girlshealth.gov/feelings/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="block p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-purple-400 hover:border-purple-600 group"
                        >
                          <span className="text-purple-700 font-semibold group-hover:text-purple-800">girlshealth.gov</span>
                          <span className="text-gray-600 ml-2">– For all your "what even am I feeling?" moments.</span>
                        </a>
                      </li>
                      <li>
                        <a 
                          href="https://teenmentalhealth.org/for-families/mental-health-girls/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="block p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-purple-400 hover:border-purple-600 group"
                        >
                          <span className="text-purple-700 font-semibold group-hover:text-purple-800">Teen Mental Health</span>
                          <span className="text-gray-600 ml-2">– Mental health info tailored just for us.</span>
                        </a>
                      </li>
                      <li>
                        <a 
                          href="https://mhanational.org/issues/mental-health-young-women-girls" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="block p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-purple-400 hover:border-purple-600 group"
                        >
                          <span className="text-purple-700 font-semibold group-hover:text-purple-800">Mental Health America</span>
                          <span className="text-gray-600 ml-2">– Real stats, real support, real you.</span>
                        </a>
                      </li>
                      <li>
                        <a 
                          href="https://www.crisistextline.org/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="block p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-purple-400 hover:border-purple-600 group"
                        >
                          <span className="text-purple-700 font-semibold group-hover:text-purple-800">Crisis Text Line (Text "GIRL" to 741741)</span>
                          <span className="text-gray-600 ml-2">– Text in your fuzzy blanket from anywhere.</span>
                        </a>
                      </li>
                      <li>
                        <a 
                          href="https://www.7cups.com/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="block p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-purple-400 hover:border-purple-600 group"
                        >
                          <span className="text-purple-700 font-semibold group-hover:text-purple-800">7 Cups</span>
                          <span className="text-gray-600 ml-2">– Talk to someone who actually listens.</span>
                        </a>
                      </li>
                      <li>
                        <a 
                          href="https://www.thetrevorproject.org/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="block p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-purple-400 hover:border-purple-600 group"
                        >
                          <span className="text-purple-700 font-semibold group-hover:text-purple-800">The Trevor Project</span>
                          <span className="text-gray-600 ml-2">– You're perfect as you are. Full stop.</span>
                        </a>
                      </li>
                      <li>
                        <a 
                          href="https://www.thebodypositive.org/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="block p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-purple-400 hover:border-purple-600 group"
                        >
                          <span className="text-purple-700 font-semibold group-hover:text-purple-800">The Body Positive</span>
                          <span className="text-gray-600 ml-2">– Unfollow beauty myths. Follow your joy.</span>
                        </a>
                      </li>
                      <li>
                        <a 
                          href="https://www.sadgirlsclub.org/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="block p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-purple-400 hover:border-purple-600 group"
                        >
                          <span className="text-purple-700 font-semibold group-hover:text-purple-800">Sad Girls Club</span>
                          <span className="text-gray-600 ml-2">– For millennial and Gen Z girls dealing with depression + anxiety.</span>
                        </a>
                      </li>
                      <li>
                        <a 
                          href="https://www.youngminds.org.uk/young-person/blog/what-is-self-care/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="block p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-purple-400 hover:border-purple-600 group"
                        >
                          <span className="text-purple-700 font-semibold group-hover:text-purple-800">YoungMinds</span>
                          <span className="text-gray-600 ml-2">– Real self-care (like saying no, not just bubble baths).</span>
                        </a>
                      </li>
                      <li>
                        <a 
                          href="https://minddoc.com/en/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="block p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-purple-400 hover:border-purple-600 group"
                        >
                          <span className="text-purple-700 font-semibold group-hover:text-purple-800">MindDoc</span>
                          <span className="text-gray-600 ml-2">– Track your feels, learn your patterns.</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <span className="text-2xl">💝</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default GetSupport;
