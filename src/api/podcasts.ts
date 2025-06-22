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
  audioUrl?: any; //  field for generated audio URL
  generatedScript?: string; // field for AI-generated podcast script
}

// const config = {
//   apiKey: process.env.MURF_API_KEY,
// };

export const samplePodcasts: Podcast[] = [
  {
    id: "1",
    title: "Building Confidence from the Inside Out",
    host: "Dr. Maya Johnson",
    description:
      "Learn practical strategies to build unshakeable self-confidence and believe in your own worth.",
    duration: "25 min",
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
    title: "Navigating Friendship Drama Like a Boss",
    host: "Sarah Chen",
    description:
      "Expert advice on handling friendship conflicts, setting boundaries, and building healthy relationships.",
    duration: "18 min",
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
    title: "Academic Pressure and Finding Balance",
    host: "Prof. Angela Rivera",
    description:
      "Tips for managing school stress, perfectionism, and finding a healthy work-life balance.",
    duration: "22 min",
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
    title: "Your Body, Your Rules: Embracing Self-Love",
    host: "Zoe Martinez",
    description:
      "A powerful discussion about body positivity, self-acceptance, and loving yourself exactly as you are.",
    duration: "30 min",
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
    title: "Standing Up to Bullies and Finding Your Voice",
    host: "Coach Michelle Thompson",
    description:
      "Empowering strategies for dealing with bullying, finding your inner strength, and speaking up for yourself.",
    duration: "28 min",
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

// TODO: Setup an API hook and generate a podcast episode through an
// API call

export const generatePodcast = async (
  userMessage: string
): Promise<Podcast> => {
  // Find matching podcast based on user message
  const matchedPodcast = findMatchingPodcast(userMessage);

  try {
    // Call Hyperbolic API to generate personalized podcast script
    const response = await axios.post(
      "https://api.hyperbolic.xyz/v1/chat/completions",
      {
        messages: [
          {
            role: "system",
            content: `You are creating an AI "big sister" podcast-style platform for young girls.

Generate empathetic, age-appropriate, friendly advice in a warm, "big sister" tone.

Convert that into a short "podcast script" (~1-2 min * 150 wpm)

Preface with:
"Hi! My name is Aisha, and this is Girl Talk AI, a safe space for girls to get advice on anything from school stress, friendship drama, or more personal matters. Let's talk about what's on your mind today…"

150wpm speaking, generate in 500 word blocks

Just output the script, no fluff. Make it personal and relate to the specific category: ${matchedPodcast.category}`
          },
          {
            role: "user",
            content: userMessage
          }
        ],
        model: "Qwen/Qwen3-235B-A22B", 
        max_tokens: 29820,
        temperature: 0.1,
        top_p: 0.9
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0b201NjR0b21AZ21haWwuY29tIiwiaWF0IjoxNzI5NDEyNTc0fQ.KgY38Ei_OdtDH1vR_YRbb-zQX6AABi0VBn7qowd5AA4"
        }
      }
    );

    console.log("Hyperbolic API response:", response.data);
    
    // Extract the generated script from the response
    const generatedScript = response.data.choices?.[0]?.message?.content || matchedPodcast.description;
    
    // Create personalized podcast with AI-generated content
    const personalizedPodcast: Podcast = {
      ...matchedPodcast,
      id: `${matchedPodcast.id}_personalized_${Date.now()}`,
      title: `Personal Advice: ${matchedPodcast.title}`,
      description: `A personalized episode just for you about: ${userMessage}`,
      generatedScript: generatedScript
    };

    return personalizedPodcast;
    
  } catch (error) {
    console.error("Error generating personalized podcast:", error);
    
    // Fallback to original podcast if API fails
    return {
      ...matchedPodcast,
      generatedScript: `Hi! My name is Aisha, and this is Girl Talk AI. I understand you're dealing with: "${userMessage}". ${matchedPodcast.description}`
    };
  }
};
