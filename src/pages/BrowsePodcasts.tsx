import React from 'react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react'; // Add this line
import ChatBox from '@/components/ChatBox';

const BrowsePodcastsPage = () => {
    const { toast } = useToast();
    const [isLoading, setIsLoading] = useState(false); // Add this line

    // Add this function:
    const handleChatSubmit = async message => {
        setIsLoading(true);

        // Simulate API call delay
        setTimeout(() => {
            toast({
                title: 'Message received! 💬',
                description:
                    "Thank you for sharing your thoughts. We'll get back to you shortly!"
            });
            setIsLoading(false);
        }, 2000);
    };

    const podcastCategories = [
        {
            title: 'Self-Care & Wellness',
            icon: '🧘‍♀️',
            gradient: 'from-pink-400 to-rose-400',
            episodes: [
                'Morning Mindfulness',
                'Body Positivity Journey',
                'Stress Relief Techniques'
            ]
        },
        {
            title: 'Career & Confidence',
            icon: '💼',
            gradient: 'from-purple-400 to-indigo-400',
            episodes: [
                'Negotiating Your Worth',
                'Leadership Skills',
                'Imposter Syndrome Solutions'
            ]
        },
        {
            title: 'Relationships & Love',
            icon: '💕',
            gradient: 'from-pink-400 to-purple-400',
            episodes: [
                'Healthy Boundaries',
                'Self-Love First',
                'Communication Mastery'
            ]
        },
        {
            title: 'Mental Health',
            icon: '🧠',
            gradient: 'from-blue-400 to-cyan-400',
            episodes: [
                'Anxiety Management',
                'Depression Support',
                'Building Resilience'
            ]
        },
        {
            title: 'Personal Growth',
            icon: '🌱',
            gradient: 'from-green-400 to-emerald-400',
            episodes: ['Goal Setting', 'Habit Building', 'Finding Your Purpose']
        },
        {
            title: 'Life Transitions',
            icon: '🦋',
            gradient: 'from-purple-400 to-pink-400',
            episodes: ['Career Changes', 'Moving Forward', 'New Beginnings']
        }
    ];

    const handlePlayEpisode = (category: string, episode: string) => {
        toast({
            title: `Playing: ${episode} 🎧`,
            description: `From the ${category} collection`
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
                    🎧
                </div>
                <div className="absolute top-1/2 right-1/5 text-purple-300/30 text-3xl animate-bounce">
                    🎙️
                </div>
                <div className="absolute bottom-1/4 left-1/3 text-blue-300/30 text-5xl animate-pulse">
                    🎵
                </div>
                <div className="absolute top-3/4 right-1/4 text-pink-300/30 text-3xl animate-bounce">
                    🎶
                </div>
            </div>

            <Navigation />

            <main className="container mx-auto px-4 py-12 relative z-10">
                {/* Hero Section */}
                <div className="text-center mb-16 relative">
                    <div className="flex justify-center items-center space-x-4 mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-3xl flex items-center justify-center shadow-xl transform rotate-6">
                            <span className="text-3xl">🎧</span>
                        </div>
                        <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-blue-500 rounded-3xl flex items-center justify-center shadow-xl transform -rotate-3">
                            <span className="text-4xl">🎙️</span>
                        </div>
                        <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-pink-400 rounded-2xl flex items-center justify-center shadow-lg transform rotate-12">
                            <span className="text-2xl">🎵</span>
                        </div>
                    </div>

                    <h1 className="text-6xl font-bold bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-6 leading-tight">
                        Browse Podcasts
                    </h1>

                    <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 max-w-4xl mx-auto shadow-xl border border-white/50">
                        <p className="text-2xl text-purple-700 leading-relaxed font-medium">
                            Discover our curated collection of empowering
                            podcast episodes designed specifically for strong
                            women like you!
                            <span className="inline-block ml-2 text-3xl">
                                🌟💪✨
                            </span>
                        </p>
                    </div>
                </div>

                <div className="mb-12">
                    <ChatBox
                        onSubmit={handleChatSubmit}
                        isLoading={isLoading}
                    />
                </div>

                <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 max-w-4xl mx-auto shadow-xl border border-white/50 mb-16">
                    <p className="text-2xl text-purple-700 leading-relaxed font-medium">
                        Discover our curated collection of empowering podcast
                        episodes designed specifically for strong women like
                        you!
                        <span className="inline-block ml-2 text-3xl">
                            🌟💪✨
                        </span>
                    </p>
                </div>
                {/* Podcast Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {podcastCategories.map((category, index) => (
                        <div
                            key={category.title}
                            className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/60 relative overflow-hidden transform hover:scale-105 transition-all duration-300"
                        >
                            <div
                                className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${category.gradient}`}
                            ></div>

                            <div className="text-center mb-6">
                                <div
                                    className={`w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-3xl flex items-center justify-center shadow-xl mx-auto mb-4 transform hover:rotate-12 transition-transform duration-300`}
                                >
                                    <span className="text-3xl">
                                        {category.icon}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-800 to-pink-600 bg-clip-text text-transparent">
                                    {category.title}
                                </h3>
                            </div>

                            <div className="space-y-3">
                                {category.episodes.map(
                                    (episode, episodeIndex) => (
                                        <div
                                            key={episodeIndex}
                                            className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-4 border border-purple-200/50"
                                        >
                                            <div className="flex items-center justify-between">
                                                <span className="text-purple-700 font-medium">
                                                    {episode}
                                                </span>
                                                <Button
                                                    onClick={() =>
                                                        handlePlayEpisode(
                                                            category.title,
                                                            episode
                                                        )
                                                    }
                                                    className={`bg-gradient-to-r ${category.gradient} hover:opacity-90 text-white font-semibold px-4 py-2 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md`}
                                                    size="sm"
                                                >
                                                    <span className="mr-1">
                                                        ▶️
                                                    </span>
                                                    Play
                                                </Button>
                                            </div>
                                        </div>
                                    )
                                )}
                            </div>

                            <div className="mt-6 pt-6 border-t border-purple-200/50">
                                <Button
                                    className={`w-full bg-gradient-to-r ${category.gradient} hover:opacity-90 text-white font-bold py-3 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg`}
                                >
                                    <span className="mr-2">🎧</span>
                                    View All Episodes
                                    <span className="ml-2">✨</span>
                                </Button>
                            </div>

                            {/* Corner decorations */}
                            <div className="absolute bottom-4 left-4 text-pink-300/40 text-xl">
                                {category.icon}
                            </div>
                            <div className="absolute top-4 right-4 text-purple-300/40 text-xl">
                                ✨
                            </div>
                        </div>
                    ))}
                </div>

                {/* Featured Section */}
                <div className="mt-20 relative">
                    <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-10 max-w-4xl mx-auto shadow-2xl border border-white/60 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400"></div>

                        <div className="text-center">
                            <div className="flex justify-center items-center space-x-3 mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl flex items-center justify-center shadow-lg">
                                    <span className="text-2xl">⭐</span>
                                </div>
                                <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-800 to-pink-600 bg-clip-text text-transparent">
                                    Can't Find What You Need?
                                </h3>
                                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-400 rounded-2xl flex items-center justify-center shadow-lg">
                                    <span className="text-2xl">💫</span>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6 border border-purple-200/50 mb-6">
                                <p className="text-xl text-purple-700 leading-relaxed">
                                    Get personalized support! Share your
                                    specific situation and we'll create a custom
                                    podcast episode just for you.
                                </p>
                            </div>

                            <Button className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 hover:from-purple-600 hover:via-pink-600 hover:to-blue-600 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg text-lg">
                                <span className="mr-2">💬</span>
                                Get Custom Support
                                <span className="ml-2">✨</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export { BrowsePodcastsPage };

const BrowsePodcasts = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useToast();

    const handleChatSubmit = async (message: string) => {
        setIsLoading(true);

        // Simulate API call delay
        setTimeout(() => {
            toast({
                title: 'Message received! 💬',
                description:
                    "Thank you for sharing your thoughts. We'll get back to you shortly!"
            });
            setIsLoading(false);
        }, 2000);
    };

    const podcastCategories = [
        {
            title: 'Career & Confidence',
            icon: '💼',
            gradient: 'from-purple-400 to-indigo-400',
            episodes: [
                'Negotiating Your Worth',
                'Leadership Skills',
                'Imposter Syndrome Solutions'
            ]
        },
        {
            title: 'Relationships & Love',
            icon: '💕',
            gradient: 'from-pink-400 to-purple-400',
            episodes: [
                'Healthy Boundaries',
                'Self-Love First',
                'Communication Mastery'
            ]
        },
        {
            title: 'Mental Health',
            icon: '🧠',
            gradient: 'from-blue-400 to-cyan-400',
            episodes: [
                'Anxiety Management',
                'Depression Support',
                'Building Resilience'
            ]
        },
        {
            title: 'Personal Growth',
            icon: '🌱',
            gradient: 'from-green-400 to-emerald-400',
            episodes: ['Goal Setting', 'Habit Building', 'Finding Your Purpose']
        },
        {
            title: 'Life Transitions',
            icon: '🦋',
            gradient: 'from-purple-400 to-pink-400',
            episodes: ['Career Changes', 'Moving Forward', 'New Beginnings']
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 via-blue-50 to-indigo-100 relative overflow-hidden">
            {/* Floating background decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-blue-200 to-pink-200 rounded-full opacity-25 animate-bounce"></div>
            </div>

            {/* Hero Section */}
            <div className="text-center mb-16 relative">
                <div className="flex justify-center items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-3xl flex items-center justify-center shadow-xl transform rotate-6">
                        <span className="text-3xl">🎧</span>
                    </div>
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-blue-500 rounded-3xl flex items-center justify-center shadow-xl transform -rotate-3">
                        <span className="text-4xl">🎙️</span>
                    </div>
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-pink-400 rounded-2xl flex items-center justify-center shadow-lg transform rotate-12">
                        <span className="text-2xl">🎵</span>
                    </div>
                </div>

                <h1 className="text-6xl font-bold bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-6 leading-tight">
                    Browse Podcasts
                </h1>
                <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 max-w-4xl mx-auto shadow-xl border border-white/50">
                    <p className="text-2xl text-purple-700 leading-relaxed font-medium">
                        Share what's on your mind and we'll create a
                        personalized podcast episode just for you. You're not
                        alone in this journey!
                        <span className="inline-block ml-2 text-3xl">
                            🌟💪✨
                        </span>
                    </p>
                </div>
            </div>

            {/* Chat Interface */}
            <div className="mb-12">
                <ChatBox onSubmit={handleChatSubmit} isLoading={isLoading} />
            </div>

            {/* Podcast Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {podcastCategories.map((category, index) => (
                    <div
                        key={category.title}
                        className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/60 relative overflow-hidden transform hover:scale-105 transition-all duration-300"
                    >
                        <div
                            className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${category.gradient}`}
                        ></div>

                        <div className="text-center mb-6">
                            <div
                                className={`w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-3xl flex items-center justify-center shadow-xl mx-auto mb-4 transform hover:rotate-12 transition-transform duration-300`}
                            >
                                <span className="text-3xl">
                                    {category.icon}
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-800 to-pink-600 bg-clip-text text-transparent">
                                {category.title}
                            </h3>
                            <ul className="mt-4 space-y-2">
                                {category.episodes.map((episode, idx) => (
                                    <li
                                        key={idx}
                                        className="text-purple-700 font-medium"
                                    >
                                        {episode}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BrowsePodcastsPage;
