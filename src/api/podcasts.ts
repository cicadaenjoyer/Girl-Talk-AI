
import { createDatabase, getUser } from '@/api/firebase.ts';

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
    id: '1',
    title: 'Building Confidence from the Inside Out',
    host: 'Dr. Maya Johnson',
    description: 'Learn practical strategies to build unshakeable self-confidence and believe in your own worth.',
    duration: '25 min',
    category: 'Self-Confidence',
    imageUrl: '/placeholder-podcast.jpg',
    keywords: ['confidence', 'self-esteem', 'insecurity', 'doubt', 'worth', 'value']
  },
  {
    id: '2',
    title: 'Navigating Friendship Drama Like a Boss',
    host: 'Sarah Chen',
    description: 'Expert advice on handling friendship conflicts, setting boundaries, and building healthy relationships.',
    duration: '18 min',
    category: 'Relationships',
    imageUrl: '/placeholder-podcast.jpg',
    keywords: ['friends', 'friendship', 'drama', 'conflict', 'relationships', 'boundaries']
  },
  {
    id: '3',
    title: 'Academic Pressure and Finding Balance',
    host: 'Prof. Angela Rivera',
    description: 'Tips for managing school stress, perfectionism, and finding a healthy work-life balance.',
    duration: '22 min',
    category: 'Academic Success',
    imageUrl: '/placeholder-podcast.jpg',
    keywords: ['school', 'grades', 'pressure', 'stress', 'studying', 'academic', 'perfectionism']
  },
  {
    id: '4',
    title: 'Your Body, Your Rules: Embracing Self-Love',
    host: 'Zoe Martinez',
    description: 'A powerful discussion about body positivity, self-acceptance, and loving yourself exactly as you are.',
    duration: '30 min',
    category: 'Body Positivity',
    imageUrl: '/placeholder-podcast.jpg',
    keywords: ['body', 'appearance', 'self-love', 'beauty', 'image', 'acceptance']
  },
  {
    id: '5',
    title: 'Standing Up to Bullies and Finding Your Voice',
    host: 'Coach Michelle Thompson',
    description: 'Empowering strategies for dealing with bullying, finding your inner strength, and speaking up for yourself.',
    duration: '28 min',
    category: 'Empowerment',
    imageUrl: '/placeholder-podcast.jpg',
    keywords: ['bullying', 'bullies', 'mean', 'harassment', 'voice', 'standing up', 'strength']
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

// TODO: Setup an API hook and generate a podcast episode through an
// API call
export const generatePodcast = (userMessage: string, db_id: number): Podcast => {
  const message = userMessage.toLocaleLowerCase();
  let user_data = Object.create(null);

  // checking if user exists in the db
  if (getUser(db_id) == null) {
    user_data = rcreateDatabase(db_id);
    console.log(user_data);
    return user_data;
  }

  // Default fallback
  return samplePodcasts[0]
}
