import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import ChatBox from "@/components/ChatBox";
import PodcastRecommendation from "@/components/PodcastRecommendation";
import HelpfulResources from "@/components/HelpfulResources";
import { generatePodcast, type Podcast } from "@/api/podcasts";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [recommendedPodcast, setRecommendedPodcast] = useState<Podcast | null>(
    null
  );
  const [userMessage, setUserMessage] = useState("");
  const { toast } = useToast();

  const handleChatSubmit = async (message: string) => {
    setIsLoading(true);
    setUserMessage(message);

    try {
      const matchedPodcast = await generatePodcast(message);
      setRecommendedPodcast(matchedPodcast);
      toast({
        title: "Custom episode generated! 💕",
        description:
          "We've created a personalized podcast episode and helpful resources just for you!",
      });
    } catch (err) {
      // handle error
    } finally {
      setIsLoading(false);
    }
  };
  const handleListenClick = () => {
    toast({
      title: "Playing your custom episode! 🎧",
      description:
        "This would start playing your personalized podcast episode.",
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
        <div className="absolute top-1/4 left-1/6 text-pink-300/30 text-4xl animate-pulse">
          💖
        </div>
        <div className="absolute top-1/2 right-1/5 text-purple-300/30 text-3xl animate-bounce">
          ✨
        </div>
        <div className="absolute bottom-1/4 left-1/3 text-blue-300/30 text-5xl animate-pulse">
          🌸
        </div>
        <div className="absolute top-3/4 right-1/4 text-pink-300/30 text-3xl animate-bounce">
          💫
        </div>
      </div>

      <Navigation />

      <main className="container mx-auto px-4 py-12 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16 relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 w-24 h-24 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full opacity-40 animate-pulse"></div>

          <div className="flex justify-center items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-3xl flex items-center justify-center shadow-xl transform rotate-6">
              <span className="text-3xl">💪</span>
            </div>
            <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-blue-500 rounded-3xl flex items-center justify-center shadow-xl transform -rotate-3">
              <span className="text-4xl">✨</span>
            </div>
            <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-pink-400 rounded-2xl flex items-center justify-center shadow-lg transform rotate-12">
              <span className="text-2xl">👑</span>
            </div>
          </div>

          <h1 className="text-6xl font-bold bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-6 leading-tight">
            Girl Talk AI
          </h1>
          <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 max-w-4xl mx-auto shadow-xl border border-white/50">
            <p className="text-2xl text-purple-700 leading-relaxed font-medium">
              Your safe space to find guidance, inspiration, and the perfect
              podcast to help you navigate life's challenges. You're stronger
              than you know!
              <span className="inline-block ml-2 text-3xl">🌟💕✨</span>
            </p>
          </div>
        </div>

        {/* Chat Interface */}
        <div className="mb-12">
          <ChatBox onSubmit={handleChatSubmit} isLoading={isLoading} />
        </div>

        {/* Podcast Recommendation and Resources */}
        {recommendedPodcast && !isLoading && (
          <div className="space-y-8 mb-12">
            <PodcastRecommendation
              podcast={recommendedPodcast}
              userMessage={userMessage}
              onListenClick={handleListenClick}
            />

            <HelpfulResources userMessage={userMessage} />
          </div>
        )}

        {/* Inspirational Quote Section */}
        {!recommendedPodcast && !isLoading && (
          <div className="mt-20 relative">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full opacity-50 animate-pulse"></div>

            <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-10 max-w-3xl mx-auto shadow-2xl border border-white/60 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400"></div>

              <div className="text-center">
                <div className="flex justify-center items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-2xl">💫</span>
                  </div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-800 to-pink-600 bg-clip-text text-transparent">
                    Daily Inspiration
                  </h3>
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-400 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-2xl">💫</span>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6 border border-purple-200/50 mb-6">
                  <blockquote className="text-xl text-purple-700 italic font-medium leading-relaxed">
                    "She believed she could, so she did. Every challenge you
                    face is making you stronger, more resilient, and more
                    amazing than ever before!"
                  </blockquote>
                </div>

                <div className="flex justify-center items-center space-x-2">
                  <span className="text-lg">💝</span>
                  <p className="text-purple-600 font-semibold text-lg">
                    Your Girl Talk AI Community
                  </p>
                  <span className="text-lg">💝</span>
                </div>
              </div>

              {/* Corner decorations */}
              <div className="absolute bottom-4 left-4 text-pink-300/40 text-2xl">
                🌸
              </div>
              <div className="absolute top-4 right-4 text-purple-300/40 text-2xl">
                ✨
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
