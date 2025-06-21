
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import ChatBox from '@/components/ChatBox';
import PodcastRecommendation from '@/components/PodcastRecommendation';
import { findMatchingPodcast, type Podcast } from '@/data/podcasts';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [recommendedPodcast, setRecommendedPodcast] = useState<Podcast | null>(null);
  const [userMessage, setUserMessage] = useState('');
  const { toast } = useToast();

  const handleChatSubmit = async (message: string) => {
    setIsLoading(true);
    setUserMessage(message);
    
    // Simulate API call delay
    setTimeout(() => {
      const matchedPodcast = findMatchingPodcast(message);
      setRecommendedPodcast(matchedPodcast);
      setIsLoading(false);
      
      toast({
        title: "Perfect match found! 💕",
        description: "We found a podcast episode that's perfect for you!",
      });
    }, 2000);
  };

  const handleListenClick = () => {
    toast({
      title: "Opening podcast player! 🎧",
      description: "This would open your podcast player in a real app.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-4">
            SheStrong 💪✨
          </h1>
          <p className="text-xl text-purple-700 max-w-3xl mx-auto leading-relaxed">
            Your safe space to find guidance, inspiration, and the perfect podcast to help you navigate 
            life's challenges. You're stronger than you know! 🌟
          </p>
        </div>

        {/* Chat Interface */}
        <div className="mb-8">
          <ChatBox onSubmit={handleChatSubmit} isLoading={isLoading} />
        </div>

        {/* Podcast Recommendation */}
        {recommendedPodcast && !isLoading && (
          <div className="animate-fade-in">
            <PodcastRecommendation
              podcast={recommendedPodcast}
              userMessage={userMessage}
              onListenClick={handleListenClick}
            />
          </div>
        )}

        {/* Inspirational Quote Section */}
        {!recommendedPodcast && !isLoading && (
          <div className="mt-16 text-center">
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 max-w-2xl mx-auto shadow-lg">
              <h3 className="text-2xl font-bold text-purple-800 mb-4">
                💫 Daily Inspiration 💫
              </h3>
              <blockquote className="text-lg text-purple-700 italic">
                "She believed she could, so she did. Every challenge you face is making you stronger, 
                more resilient, and more amazing than ever before!"
              </blockquote>
              <p className="text-purple-600 mt-4 font-medium">- Your SheStrong Community</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
