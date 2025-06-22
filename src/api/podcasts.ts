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
  // ...existing logic to pick a podcast...
  const podcast = samplePodcasts[0]; // or your matching logic

  // Call Murf API

  const response = await axios.post(
    "https://api.murf.ai/v1/speech/generate",
    {
      text: podcast.description, // or userMessage, or whatever you want spoken
      voiceId: "en-US-terrell",
    },
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "api-key": "ap2_b7936677-f74d-43d0-a993-40d78f812b69",
      },
    }
  );
  console.log("Murf API response:", response.data);
  return { ...podcast, audioUrl: response.data.audioFile };
};
