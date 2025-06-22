export interface Podcast {
  id: string;
  title: string;
  host: string;
  description: string;
  duration: string;
  category: string;
  imageUrl: string;
  keywords: string[];
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

// TODO: Setup an API hook and generate a podcast episode through an
// API call
export const generatePodcast = (userMessage: string): Podcast => {
  const message = userMessage.toLocaleLowerCase();

  // Default fallback
  return samplePodcasts[0];
};
