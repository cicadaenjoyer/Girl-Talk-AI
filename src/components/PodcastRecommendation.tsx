import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { playSpeechSynthesis, stopSpeechSynthesis } from "@/api/podcasts";

interface Podcast {
  id: string;
  title: string;
  host: string;
  description: string;
  duration: string;
  category: string;
  imageUrl: string;
  audioUrl?: string; // field for generated audio URL
  generatedScript?: string; // field for AI-generated podcast script
}

interface PodcastRecommendationProps {
  podcast: Podcast;
  userMessage: string;
  onListenClick: () => void;
}

const PodcastRecommendation = ({
  podcast,
  userMessage,
  onListenClick,
}: PodcastRecommendationProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayAudio = async () => {
    if (podcast.audioUrl?.startsWith("speech-synthesis:")) {
      // Handle speech synthesis
      try {
        setIsPlaying(true);
        await playSpeechSynthesis(
          podcast.generatedScript || podcast.description
        );
        setIsPlaying(false);
      } catch (error) {
        console.error("Error playing speech synthesis:", error);
        setIsPlaying(false);
      }
    } else if (podcast.audioUrl) {
      // Handle regular audio file
      const audioElement = document.getElementById(
        "podcast-audio"
      ) as HTMLAudioElement;
      if (audioElement) {
        audioElement.play();
      }
    } else {
      // Fallback to speech synthesis with generated script
      try {
        setIsPlaying(true);
        await playSpeechSynthesis(
          podcast.generatedScript || podcast.description
        );
        setIsPlaying(false);
      } catch (error) {
        console.error("Error playing fallback speech synthesis:", error);
        setIsPlaying(false);
      }
    }
  };

  const handleStopAudio = () => {
    setIsPlaying(false);
    stopSpeechSynthesis();

    // Also stop regular audio if it's playing
    const audioElement = document.getElementById(
      "podcast-audio"
    ) as HTMLAudioElement;
    if (audioElement) {
      audioElement.pause();
      audioElement.currentTime = 0;
    }
  };
  return (
    <div className="relative animate-fade-in">
      {/* Floating background elements */}
      <div className="absolute -top-10 -left-10 w-24 h-24 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-gradient-to-br from-blue-200 to-pink-200 rounded-full opacity-25 animate-bounce"></div>
      <div className="absolute top-1/2 -left-6 w-16 h-16 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full opacity-20 animate-pulse"></div>

      <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 rounded-3xl shadow-2xl p-8 max-w-2xl mx-auto border border-white/60 relative overflow-hidden">
        {/* Top gradient border */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 rounded-t-3xl"></div>

        <div className="text-center mb-8">
          <div className="flex justify-center items-center space-x-3 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-3xl flex items-center justify-center shadow-xl transform rotate-3">
              <span className="text-3xl">🎧</span>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg transform -rotate-6">
              <span className="text-2xl">✨</span>
            </div>
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-pink-400 rounded-xl flex items-center justify-center shadow-md transform rotate-12">
              <span className="text-xl">💫</span>
            </div>
          </div>

          <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-800 to-pink-600 bg-clip-text text-transparent mb-3">
            Your Custom Podcast Episode!
          </h3>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-purple-200/50">
            <p className="text-purple-700 italic text-lg font-medium">
              "We've created this special episode just for you, based on what
              you shared!" 🎯
            </p>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/70 relative overflow-hidden">
          {/* Card decoration */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full opacity-30 transform translate-x-8 -translate-y-8"></div>

          <div className="flex items-start space-x-6 relative z-10">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 bg-gradient-to-br from-pink-400 via-purple-500 to-blue-500 rounded-3xl flex items-center justify-center text-white text-3xl font-bold shadow-xl transform hover:scale-105 transition-transform duration-300 relative overflow-hidden">
                <span className="relative z-10">🎙️</span>
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
              </div>
              <div className="flex justify-center mt-2 space-x-1">
                <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-100"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-200"></div>
              </div>
            </div>

            <div className="flex-1">
              <h4 className="text-2xl font-bold text-gray-800 mb-3 leading-tight">
                {podcast.title}
              </h4>
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">🎤</span>
                </div>
                <p className="text-purple-700 font-semibold text-lg">
                  Hosted by {podcast.host}
                </p>
              </div>

              <p className="bg-gradient-to-br from-pink-50 to-purple-50 p-4 rounded-xl border border-purple-200/50 max-h-64 overflow-y-auto mb-4">
                {podcast.description}
              </p>

              <div className="flex items-center space-x-4 mb-6">
                <span
                  className={`px-4 py-2 rounded-full text-sm font-semibold shadow-md bg-gradient-to-r from-pink-100 to-purple-100 text-purple-700 border border-pink-200`}
                >
                  <span className="mr-1">🏷️</span>
                  {podcast.category}
                </span>
                <span className="flex items-center text-gray-600 font-medium">
                  <span className="mr-1 text-lg">⏱️</span>
                  {podcast.duration}
                </span>
              </div>

              <div className="flex space-x-3">
                <Button
                  onClick={() => {
                    onListenClick();
                    handlePlayAudio();
                  }}
                  disabled={isPlaying}
                  className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 hover:from-purple-600 hover:via-pink-600 hover:to-blue-600 text-white font-bold px-8 py-3 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                >
                  <div className="flex items-center space-x-2 relative z-10">
                    {isPlaying ? (
                      <>
                        <span className="text-xl animate-pulse">🎵</span>
                        <span className="text-lg">Playing...</span>
                        <span className="text-xl animate-spin">🔄</span>
                      </>
                    ) : (
                      <>
                        <span className="text-xl">🎵</span>
                        <span className="text-lg">Listen Now</span>
                        <span className="text-xl">▶️</span>
                      </>
                    )}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full hover:translate-x-full transition-transform duration-700"></div>
                </Button>

                {isPlaying && (
                  <Button
                    onClick={handleStopAudio}
                    className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-bold px-6 py-3 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <div className="flex items-center space-x-2">
                      <span className="text-xl">⏹️</span>
                      <span className="text-lg">Stop</span>
                    </div>
                  </Button>
                )}

                {podcast.audioUrl &&
                  !podcast.audioUrl.startsWith("speech-synthesis:") && (
                    <audio
                      id="podcast-audio"
                      controls
                      src={podcast.audioUrl}
                      className="hidden"
                    >
                      Your browser does not support the audio element.
                    </audio>
                  )}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 rounded-2xl border border-purple-200/50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-pink-400"></div>
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
              <span className="text-2xl">💪</span>
            </div>
            <div>
              <h5 className="font-bold text-purple-800 text-lg mb-2">
                Your personalized episode is ready! 👑
              </h5>
              <p className="text-purple-700 leading-relaxed">
                This episode was crafted specifically for your situation. Every
                strong woman started exactly where you are right now. You're
                already taking the brave step of seeking support, and that shows
                incredible strength!
                <span className="inline-block ml-1 text-lg">✨🌟💖</span>
              </p>
            </div>
          </div>
        </div>

        {/* AI Generated Script Section */}
        {podcast.generatedScript && (
          <div className="mt-6 p-6 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/70 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-400 to-purple-400"></div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                <span className="text-2xl">🎙️</span>
              </div>
              <div className="flex-1">
                <h5 className="font-bold text-purple-800 text-lg mb-3 flex items-center">
                  <span className="mr-2">AI-Generated Podcast Script</span>
                  <span className="text-sm bg-gradient-to-r from-pink-400 to-purple-500 text-white px-3 py-1 rounded-full">
                    ✨ Just for You
                  </span>
                </h5>
                <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-4 rounded-xl border border-purple-200/50 max-h-64 overflow-y-auto">
                  <p className="text-gray-700 leading-relaxed whitespace-pre-wrap font-medium">
                    {podcast.generatedScript}
                  </p>
                </div>
                <div className="mt-3 text-center">
                  <p className="text-sm text-purple-600 italic">
                    💕 This personalized script was created by AI based on your
                    specific situation
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PodcastRecommendation;
