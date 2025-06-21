
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
    <div className="bg-white rounded-3xl shadow-xl p-8 max-w-2xl mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-purple-800 mb-2">
          💕 Share What's on Your Mind 💕
        </h2>
        <p className="text-purple-600">
          Tell us what you're going through, and we'll find the perfect podcast to help you feel empowered!
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Hi there! I'm feeling... or I'm struggling with... or I need advice about..."
            className="min-h-32 resize-none border-pink-200 focus:border-purple-400 focus:ring-purple-200 rounded-2xl"
            disabled={isLoading}
          />
        </div>
        
        <Button
          type="submit"
          disabled={!message.trim() || isLoading}
          className="w-full bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white font-semibold py-3 rounded-2xl transition-all duration-200 transform hover:scale-105"
        >
          {isLoading ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
              <span>Finding your perfect podcast...</span>
            </div>
          ) : (
            <span>✨ Get My Podcast Recommendation ✨</span>
          )}
        </Button>
      </form>
    </div>
  );
};

export default ChatBox;
