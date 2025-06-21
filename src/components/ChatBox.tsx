
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

interface ChatBoxProps {
  onSubmit: (message: string) => void;
  isLoading?: boolean;
}

const ChatBox = ({ onSubmit, isLoading = false }: ChatBoxProps) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSubmit(message.trim());
      setMessage('');
    }
  };

  return (
    <div className="relative">
      {/* Floating decorative elements */}
      <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-gradient-to-br from-blue-200 to-pink-200 rounded-full opacity-40 animate-bounce"></div>
      
      <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 max-w-2xl mx-auto border border-white/50 relative overflow-hidden">
        {/* Inner decorative pattern */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400"></div>
        
        <div className="text-center mb-8">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-2xl">💕</span>
            </div>
            <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-blue-500 rounded-xl flex items-center justify-center shadow-md transform rotate-12">
              <span className="text-xl">💭</span>
            </div>
            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-pink-400 rounded-lg flex items-center justify-center shadow-sm transform -rotate-6">
              <span className="text-sm">✨</span>
            </div>
          </div>
          
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-800 to-pink-600 bg-clip-text text-transparent mb-3">
            Share What's on Your Mind
          </h2>
          <p className="text-purple-600 text-lg leading-relaxed">
            Tell us what you're going through, and we'll find the perfect podcast to help you feel empowered! 🌟
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Hi there! I'm feeling... or I'm struggling with... or I need advice about... 💪"
              className="min-h-36 resize-none border-2 border-pink-200 focus:border-purple-400 focus:ring-purple-200 rounded-2xl bg-gradient-to-br from-pink-50/50 to-purple-50/50 text-gray-700 placeholder:text-purple-400/70 text-lg p-4 shadow-inner"
              disabled={isLoading}
            />
            <div className="absolute bottom-3 right-3 flex space-x-1">
              <span className="text-pink-400 text-sm">💕</span>
              <span className="text-purple-400 text-sm">🌸</span>
              <span className="text-blue-400 text-sm">✨</span>
            </div>
          </div>
          
          <Button
            type="submit"
            disabled={!message.trim() || isLoading}
            className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 text-white font-bold py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden"
          >
            {isLoading ? (
              <div className="flex items-center justify-center space-x-3">
                <div className="relative">
                  <div className="animate-spin h-5 w-5 border-3 border-white border-t-transparent rounded-full"></div>
                  <div className="absolute inset-0 animate-pulse">
                    <div className="h-5 w-5 border-2 border-pink-200 rounded-full"></div>
                  </div>
                </div>
                <span className="text-lg">Finding your perfect podcast... 🔍✨</span>
              </div>
            ) : (
              <div className="flex items-center justify-center space-x-2">
                <span className="text-xl">✨</span>
                <span className="text-lg font-semibold">Get My Podcast Recommendation</span>
                <span className="text-xl">🎧</span>
              </div>
            )}
            
            {/* Button shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </Button>
        </form>
        
        {/* Corner decorations */}
        <div className="absolute top-4 right-4 text-purple-300/40 text-xl">🌸</div>
        <div className="absolute bottom-4 left-4 text-pink-300/40 text-lg">💫</div>
      </div>
    </div>
  );
};

export default ChatBox;
