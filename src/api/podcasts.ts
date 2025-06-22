export interface Podcast {
    id: string;
    title: string;
    host: string;
    description: string;
    duration: string;
    category: string;
    imageUrl: string;
    keywords: string[];
    audioUrl?: string;
    generatedScript?: string;
}

export const samplePodcasts: Podcast[] = [
    {
        id: '1',
        title: 'Building Confidence from the Inside Out',
        host: 'Dr. Maya Johnson',
        description:
            'Learn practical strategies to build unshakeable self-confidence and believe in your own worth.',
        duration: '25 min',
        category: 'Self-Confidence',
        imageUrl: '/placeholder-podcast.jpg',
        keywords: [
            'confidence',
            'self-esteem',
            'insecurity',
            'doubt',
            'worth',
            'value'
        ]
    },
    {
        id: '2',
        title: 'Navigating Friendship Drama Like a Boss',
        host: 'Sarah Chen',
        description:
            'Expert advice on handling friendship conflicts, setting boundaries, and building healthy relationships.',
        duration: '18 min',
        category: 'Relationships',
        imageUrl: '/placeholder-podcast.jpg',
        keywords: [
            'friends',
            'friendship',
            'drama',
            'conflict',
            'relationships',
            'boundaries'
        ]
    },
    {
        id: '3',
        title: 'Academic Pressure and Finding Balance',
        host: 'Prof. Angela Rivera',
        description:
            'Tips for managing school stress, perfectionism, and finding a healthy work-life balance.',
        duration: '22 min',
        category: 'Academic Success',
        imageUrl: '/placeholder-podcast.jpg',
        keywords: [
            'school',
            'grades',
            'pressure',
            'stress',
            'studying',
            'academic',
            'perfectionism'
        ]
    },
    {
        id: '4',
        title: 'Your Body, Your Rules: Embracing Self-Love',
        host: 'Zoe Martinez',
        description:
            'A powerful discussion about body positivity, self-acceptance, and loving yourself exactly as you are.',
        duration: '30 min',
        category: 'Body Positivity',
        imageUrl: '/placeholder-podcast.jpg',
        keywords: [
            'body',
            'appearance',
            'self-love',
            'beauty',
            'image',
            'acceptance'
        ]
    },
    {
        id: '5',
        title: 'Standing Up to Bullies and Finding Your Voice',
        host: 'Coach Michelle Thompson',
        description:
            'Empowering strategies for dealing with bullying, finding your inner strength, and speaking up for yourself.',
        duration: '28 min',
        category: 'Empowerment',
        imageUrl: '/placeholder-podcast.jpg',
        keywords: [
            'bullying',
            'bullies',
            'mean',
            'harassment',
            'voice',
            'standing up',
            'strength'
        ]
    }
];

export const findMatchingPodcast = (userMessage: string): Podcast => {
    const message = userMessage.toLowerCase();

    for (const podcast of samplePodcasts) {
        for (const keyword of podcast.keywords) {
            if (message.includes(keyword)) {
                return podcast;
            }
        }
    }

    // Default fallback
    return samplePodcasts[0];
};

// Generate script using fallback approach (API calls don't work directly from browser due to CORS)
export const generateScript = async (
    userMessage: string,
    category: string
): Promise<string> => {
    // For now, return a personalized script based on the category and user message
    // In production, this would be handled by a backend server
    
    const scripts = {
        'Self-Confidence': `Hi! My name is Aisha, and this is Girl Talk AI. I hear you're struggling with confidence, and I want you to know that what you're feeling is completely normal and valid. 

Building confidence isn't about being perfect or never feeling uncertain - it's about believing in your worth even when things get tough. Think of confidence like a muscle that gets stronger with practice.

Start small. Maybe it's speaking up in class once this week, or wearing something that makes YOU feel good, not what others expect. Every time you do something that scares you a little, you're building that confidence muscle.

Remember, you don't need anyone else's permission to be yourself. You are enough, exactly as you are right now. The world needs your unique perspective, your ideas, and your voice. 

When doubt creeps in - and it will - remind yourself of three things you're good at. Write them down. Keep that list close. You've got this, and I believe in you!`,

        'Relationships': `Hi! My name is Aisha, and this is Girl Talk AI. Friendship drama can feel overwhelming, but you're not alone in this. Every girl goes through friendship challenges - it's part of learning how to build healthy relationships.

Here's the thing about good friendships: they should make you feel supported, not drained. If someone is consistently making you feel bad about yourself, that's not about you - it's about them and their own insecurities.

Setting boundaries isn't mean - it's necessary. You can say "I don't like it when you talk to me that way" or "I need some space right now." Real friends will respect that.

Sometimes friendships change, and that's okay too. People grow at different paces. Focus on the friends who celebrate your wins and support you through tough times.

Remember, you teach people how to treat you by what you accept. You deserve friendships that lift you up, not tear you down. Trust your instincts - they're usually right.`,

        'Academic Success': `Hi! My name is Aisha, and this is Girl Talk AI. School pressure is real, and I want you to know that your worth isn't determined by your grades or achievements.

Perfectionism can feel like it's helping, but it's actually holding you back from enjoying learning and growing. It's okay to make mistakes - that's literally how your brain learns and gets stronger.

Try this: instead of "I have to get an A," think "I'm going to do my best and learn something new." See the difference? One creates pressure, the other creates possibility.

Break big tasks into smaller ones. Study for 25 minutes, then take a 5-minute break. Your brain needs rest to actually absorb information.

And please, please remember to take care of yourself. Sleep, eat well, and make time for things you enjoy. A balanced life leads to better performance AND better mental health.

You are so much more than your grades. You're creative, kind, and capable. Academic success is just one part of your amazing story.`,

        'Body Positivity': `Hi! My name is Aisha, and this is Girl Talk AI. Your relationship with your body is one of the most important relationships you'll ever have, so let's make it a loving one.

First, know that every body is different, and that's beautiful. What you see on social media isn't reality - it's filtered, edited, and carefully curated. Your real, authentic self is what matters.

Try this: instead of focusing on what your body looks like, focus on what it can do. Your legs carry you to your dreams. Your arms give the best hugs. Your heart pumps life through your entire body every single day.

When negative thoughts come up, try talking to yourself like you'd talk to your best friend. You wouldn't tell her she's not good enough, so don't say it to yourself either.

Remember, beauty standards are made up and constantly changing. What never changes is your worth as a person. You are valuable, lovable, and deserving of respect exactly as you are.

Your body is your home for life - treat it with kindness, nourish it well, and celebrate all the amazing things it does for you every day.`,

        'Empowerment': `Hi! My name is Aisha, and this is Girl Talk AI. Dealing with bullying or mean behavior is never easy, but I want you to know that you have more power than you realize.

First, this is not your fault. Bullies act out because of their own insecurities and problems - it's never about you. You don't deserve to be treated badly, ever.

Your voice matters. Whether it's telling a trusted adult, standing up for yourself, or walking away with your head high - you get to choose how to respond. Sometimes the bravest thing is asking for help.

Surround yourself with people who see your worth. Build a support network of friends, family, and mentors who believe in you. Their voices matter more than any bully's words.

Practice confident body language - stand tall, make eye contact, speak clearly. Even if you don't feel brave inside, projecting confidence can help you feel it and might make bullies think twice.

Remember, you are strong, you are worthy, and you deserve to be treated with respect. Don't let anyone dim your light. The world needs your brightness.`
    };

    const script = scripts[category as keyof typeof scripts] || scripts['Self-Confidence'];
    
    // Add personalization based on user message
    const personalizedScript = script.replace(
        "I hear you're struggling with",
        `I hear you're dealing with "${userMessage}" and struggling with`
    );
    
    return personalizedScript;
};

// Generate audio using Web Speech API
export const generateAudio = async (text: string): Promise<string | null> => {
    try {
        // Check if browser supports Speech Synthesis
        if ('speechSynthesis' in window) {
            return new Promise((resolve) => {
                // Create a new SpeechSynthesisUtterance
                const utterance = new SpeechSynthesisUtterance(text);
                
                // Configure the voice
                utterance.rate = 0.9; // Slightly slower for better clarity
                utterance.pitch = 1.1; // Slightly higher pitch for a friendly tone
                utterance.volume = 1;
                
                // Try to find a female voice
                const voices = speechSynthesis.getVoices();
                const femaleVoice = voices.find(voice => 
                    voice.name.toLowerCase().includes('female') || 
                    voice.name.toLowerCase().includes('samantha') ||
                    voice.name.toLowerCase().includes('karen') ||
                    voice.name.toLowerCase().includes('moira')
                );
                
                if (femaleVoice) {
                    utterance.voice = femaleVoice;
                }
                
                // For demo purposes, we'll return a special identifier
                // that components can use to trigger speech synthesis
                resolve(`speech-synthesis:${Date.now()}`);
            });
        }
        
        // Fallback: return null to indicate no audio available
        return null;
    } catch (error) {
        console.error('Error generating audio:', error);
        return null;
    }
};

// Utility function to play speech synthesis audio
export const playSpeechSynthesis = (text: string): Promise<void> => {
    return new Promise((resolve, reject) => {
        if (!('speechSynthesis' in window)) {
            reject(new Error('Speech synthesis not supported in this browser'));
            return;
        }

        // Stop any ongoing speech
        speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        
        // Configure the voice
        utterance.rate = 0.9;
        utterance.pitch = 1.1;
        utterance.volume = 1;
        
        // Wait for voices to load if needed
        const setVoiceAndSpeak = () => {
            const voices = speechSynthesis.getVoices();
            
            // Try to find a good female voice
            const preferredVoices = [
                'Samantha', 'Karen', 'Moira', 'Victoria', 'Alex', 'Allison'
            ];
            
            let selectedVoice = null;
            
            // First, try to find a voice by name
            for (const voiceName of preferredVoices) {
                selectedVoice = voices.find(voice => 
                    voice.name.toLowerCase().includes(voiceName.toLowerCase())
                );
                if (selectedVoice) break;
            }
            
            // If no preferred voice found, look for any English female voice
            if (!selectedVoice) {
                selectedVoice = voices.find(voice => 
                    voice.lang.startsWith('en') && 
                    (voice.name.toLowerCase().includes('female') || 
                     voice.name.toLowerCase().includes('woman'))
                );
            }
            
            // If still no voice, just use the first English voice
            if (!selectedVoice) {
                selectedVoice = voices.find(voice => voice.lang.startsWith('en'));
            }
            
            if (selectedVoice) {
                utterance.voice = selectedVoice;
            }
            
            utterance.onend = () => {
                console.log('Speech synthesis completed');
                resolve();
            };
            
            utterance.onerror = (event) => {
                console.error('Speech synthesis error:', event.error);
                reject(new Error(`Speech synthesis error: ${event.error}`));
            };
            
            utterance.onstart = () => {
                console.log('Speech synthesis started');
            };
            
            try {
                speechSynthesis.speak(utterance);
            } catch (error) {
                reject(error);
            }
        };

        // If voices are already loaded
        if (speechSynthesis.getVoices().length > 0) {
            setVoiceAndSpeak();
        } else {
            // Wait for voices to load (with timeout)
            let voicesLoaded = false;
            const timeout = setTimeout(() => {
                if (!voicesLoaded) {
                    console.warn('Voices loading timeout, proceeding with default voice');
                    setVoiceAndSpeak();
                }
            }, 1000);
            
            speechSynthesis.onvoiceschanged = () => {
                if (!voicesLoaded) {
                    voicesLoaded = true;
                    clearTimeout(timeout);
                    setVoiceAndSpeak();
                }
            };
        }
    });
};

// Utility function to stop speech synthesis
export const stopSpeechSynthesis = (): void => {
    if ('speechSynthesis' in window) {
        speechSynthesis.cancel();
    }
};

export const generatePodcast = async (
    userMessage: string
): Promise<Podcast> => {
    // Find matching podcast based on user message
    const matchedPodcast = findMatchingPodcast(userMessage);

    try {
        // Step 1: Generate personalized script
        const generatedScript = await generateScript(
            userMessage,
            matchedPodcast.category
        );

        // Step 2: Generate audio from the script
        const audioUrl = await generateAudio(generatedScript);

        // Step 3: Create personalized podcast
        const personalizedPodcast: Podcast = {
            ...matchedPodcast,
            id: `${matchedPodcast.id}_personalized_${Date.now()}`,
            title: `Personal Advice: ${matchedPodcast.title}`,
            description: generatedScript,
            generatedScript: generatedScript,
            audioUrl: audioUrl || undefined
        };

        return personalizedPodcast;
    } catch (error) {
        console.error('Error generating personalized podcast:', error);

        // Fallback: Create podcast with generated script but no audio
        const fallbackScript = await generateScript(userMessage, matchedPodcast.category);

        return {
            ...matchedPodcast,
            id: `${matchedPodcast.id}_fallback_${Date.now()}`,
            title: `Personal Advice: ${matchedPodcast.title}`,
            description: fallbackScript,
            generatedScript: fallbackScript,
            audioUrl: undefined
        };
    }
};
