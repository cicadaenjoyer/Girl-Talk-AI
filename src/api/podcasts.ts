import axios from "axios";
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
    id: "1",
    title: "Your Personal Podcast",
    host: "Aisha",
    description: "Expert advice",
    duration: "10 min",
    category: "Self-Confidence",
    imageUrl: "/placeholder-podcast.jpg",
    keywords: [
      "confidence",
      "self-esteem",
      "insecurity",
      "doubt",
      "worth",
      "value",
    ],
  },
  {
    id: "2",
    title: "Your Personal Podcast",
    host: "Aisha",
    description: "Expert advice",
    duration: "10 min",
    category: "Relationships",
    imageUrl: "/placeholder-podcast.jpg",
    keywords: [
      "friends",
      "friendship",
      "drama",
      "conflict",
      "relationships",
      "boundaries",
    ],
  },
  {
    id: "3",
    title: "Your Personal Podcast",
    host: "Aisha",
    description: "Expert advice",
    duration: "10 min",
    category: "Academic Success",
    imageUrl: "/placeholder-podcast.jpg",
    keywords: [
      "school",
      "grades",
      "pressure",
      "stress",
      "studying",
      "academic",
      "perfectionism",
    ],
  },
  {
    id: "4",
    title: "Your Personal Podcast",
    host: "Aisha",
    description: "Expert advice",
    duration: "10 min",
    category: "Body Positivity",
    imageUrl: "/placeholder-podcast.jpg",
    keywords: [
      "body",
      "appearance",
      "self-love",
      "beauty",
      "image",
      "acceptance",
    ],
  },
  {
    id: "5",
    title: "Your Personal Podcast",
    host: "Aisha",
    description: "Expert advice",
    duration: "10 min",
    category: "Empowerment",
    imageUrl: "/placeholder-podcast.jpg",
    keywords: [
      "bullying",
      "bullies",
      "mean",
      "harassment",
      "voice",
      "standing up",
      "strength",
    ],
  },
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
      "https://api.hyperbolic.xyz/v1/chat/completions",
      {
        messages: [
          {
            role: "system",
            content: `Preface with: "Hey Girly,". Generate empathetic, age-appropriate ,friendly, advice in a warm, “big sister” tone, but still be energetic.

Try and incorperate a moderate amount slang thats "cool with the kids". Like yass, slay, girly pop, tweaking out, mama, girlboss, etc, etc. Like TikTok slang. 

Convert that into a “podcast script” (~7-10min * 150 wpm) .

just output the script, absolutely no fluff

`,
          },
          {
            role: "user",
            content: userMessage,
          },
        ],
        model: "meta-llama/Llama-3.3-70B-Instruct",
        max_tokens: 98886,
        temperature: 0.1,
        top_p: 0.9,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0b201NjR0b21AZ21haWwuY29tIiwiaWF0IjoxNzI5NDEyNTc0fQ.KgY38Ei_OdtDH1vR_YRbb-zQX6AABi0VBn7qowd5AA4",
        },
      }
    );
    return (
      response.data.choices?.[0]?.message?.content || "Script generation failed"
    );
  } catch (error) {
    console.error("Error generating script:", error);
    return `Hi! My name is Aisha, and this is Girl Talk AI. I understand you're dealing with: \"${userMessage}\". Let me help you with that.`;
  }
};

// Generate audio using Murf AI (via backend API)
export const generateAudio = async (text: string): Promise<string | null> => {
  try {
    const response = await axios.post("/api/generatePodcast", {
      text,
      voiceId: "en-US-ariana",
      //   rate: 10,
    });
    return response.data.audioFile || null;
  } catch (error) {
    console.error("Error generating audio:", error);
    return null;
  }
};

export const generatePodcast = async (
  userMessage: string
): Promise<Podcast> => {
  const matchedPodcast = findMatchingPodcast(userMessage);
  try {
    // Step 1: Generate personalized script using Hyperbolic
    const generatedScript = await generateScript(
      userMessage,
      matchedPodcast.category
    );
    // Step 2: Generate audio from the script using Murf AI
    const audioUrl = await generateAudio(generatedScript);
    // Step 3: Create personalized podcast
    const personalizedPodcast: Podcast = {
      ...matchedPodcast,
      id: `${matchedPodcast.id}_personalized_${Date.now()}`,
      title: `Personal Advice: ${matchedPodcast.title}`,
      description: generatedScript,
      generatedScript: generatedScript,
      audioUrl: audioUrl || undefined,
    };
    return personalizedPodcast;
  } catch (error) {
    console.error("Error generating personalized podcast:", error);
    // Fallback: Create podcast with generated script but no audio
    const fallbackScript = await generateScript(
      userMessage,
      matchedPodcast.category
    );
    return {
      ...matchedPodcast,
      id: `${matchedPodcast.id}_fallback_${Date.now()}`,
      title: `Personal Advice: ${matchedPodcast.title}`,
      description: fallbackScript,
      generatedScript: fallbackScript,
      audioUrl: undefined,
    };
  }
};
