
import React from 'react';
import { Button } from '@/components/ui/button';

interface Podcast {
  id: string;
  title: string;
  host: string;
  description: string;
  duration: string;
  category: string;
  imageUrl: string;
}

interface PodcastRecommendationProps {
  podcast: Podcast;
  userMessage: string;
  onListenClick: () => void;
}

const PodcastRecommendation = ({ podcast, userMessage, onListenClick }: PodcastRecommendationProps) => {
  return (
    <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl shadow-xl p-8 max-w-2xl mx-auto">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-purple-800 mb-2">
          🎧 Perfect Podcast Match! 🎧
        </h3>
        <p className="text-purple-600 italic">
          "Based on what you shared, we think this episode will really speak to you!"
        </p>
      </div>
      
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <div className="flex items-start space-x-4">
          <div className="w-20 h-20 bg-gradient-to-br from-pink-300 to-purple-400 rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
            🎙️
          </div>
          
          <div className="flex-1">
            <h4 className="text-xl font-bold text-gray-800 mb-2">{podcast.title}</h4>
            <p className="text-purple-600 font-medium mb-2">Hosted by {podcast.host}</p>
            <p className="text-gray-600 text-sm mb-3">{podcast.description}</p>
            
            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
              <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full">
                {podcast.category}
              </span>
              <span>⏱️ {podcast.duration}</span>
            </div>
            
            <Button
              onClick={onListenClick}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-6 py-2 rounded-xl transition-all duration-200 transform hover:scale-105"
            >
              🎵 Listen Now
            </Button>
          </div>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-purple-100 rounded-2xl">
        <p className="text-purple-800 text-sm">
          <strong>💪 You've got this!</strong> Remember, every strong woman started exactly where you are right now. 
          You're already taking the brave step of seeking support, and that shows incredible strength! ✨
        </p>
      </div>
    </div>
  );
};

export default PodcastRecommendation;
