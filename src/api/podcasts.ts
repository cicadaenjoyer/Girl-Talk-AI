import axios from 'axios';

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

// Generate script using Hyperbolic API
export const generateScript = async (
    userMessage: string,
    category: string
): Promise<string> => {
    try {
        const response = await axios.post(
            'https://api.hyperbolic.xyz/v1/chat/completions',
            {
                messages: [
                    {
                        role: 'system',
                        content: `You are creating an AI "big sister" podcast for young girls. Generate empathetic, age-appropriate advice in a warm tone. Create a short podcast script (300-400 words). Start with: "Hi! My name is Aisha, and this is Girl Talk AI." Keep it personal and relate to ${category}.`
                    },
                    {
                        role: 'user',
                        content: userMessage
                    }
                ],
                model: 'Qwen/Qwen3-235B-A22B',
                max_tokens: 500,
                temperature: 0.7,
                top_p: 0.9
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization:
                        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0b201NjR0b21AZ21haWwuY29tIiwiaWF0IjoxNzI5NDEyNTc0fQ.KgY38Ei_OdtDH1vR_YRbb-zQX6AABi0VBn7qowd5AA4'
                }
            }
        );

        return (
            response.data.choices?.[0]?.message?.content ||
            'Script generation failed'
        );
    } catch (error) {
        console.error('Error generating script:', error);
        return `Hi! My name is Aisha, and this is Girl Talk AI. I understand you're dealing with: "${userMessage}". Let me help you with that.`;
    }
};

// Generate audio using Murf API
export const generateAudio = async (text: string): Promise<string | null> => {
    try {
        // First, create a speech request
        const createResponse = await axios.post(
            'https://api.murf.ai/v1/speech/generate-with-job',
            {
                voiceId: 'en-US-terrell',
                style: 'Conversational',
                text: text,
                rate: 0,
                pitch: 0,
                sampleRate: 48000,
                format: 'MP3',
                channelType: 'MONO',
                pronunciationDictionary: {},
                encodeAsBase64: false,
                variation: 1,
                audioDuration: 0
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    'api-key': 'ap2_b7936677-f74d-43d0-a993-40d78f812b69'
                }
            }
        );

        console.log('Murf API response:', createResponse.data);
        return (
            createResponse.data.audioFile ||
            createResponse.data.audioUrl ||
            null
        );
    } catch (error) {
        console.error('Error generating audio:', error);
        return null;
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
            audioUrl: audioUrl
        };

        return personalizedPodcast;
    } catch (error) {
        console.error('Error generating personalized podcast:', error);

        // Fallback: Just generate audio from the default description
        const audioUrl = await generateAudio(matchedPodcast.description);

        return {
            ...matchedPodcast,
            audioUrl: audioUrl,
            generatedScript: matchedPodcast.description
        };
    }
};
