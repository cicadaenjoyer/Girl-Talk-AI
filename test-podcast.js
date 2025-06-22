// Test file to verify podcast functionality works
console.log('Testing Girl Talk AI Podcast functionality...');

// Test the speech synthesis functionality
if ('speechSynthesis' in window) {
    console.log('✅ Speech synthesis is supported');
    console.log('Available voices:', speechSynthesis.getVoices().length);
} else {
    console.log('❌ Speech synthesis is not supported in this browser');
}

// Test the podcast generation
import { generatePodcast, playSpeechSynthesis } from './src/api/podcasts.js';

// Test generating a podcast
generatePodcast("I'm feeling really insecure about my body")
    .then(podcast => {
        console.log('✅ Podcast generated successfully:', podcast.title);
        console.log(
            'Generated script length:',
            podcast.generatedScript?.length
        );
        console.log('Audio URL:', podcast.audioUrl);
    })
    .catch(error => {
        console.error('❌ Error generating podcast:', error);
    });

console.log('Test completed!');
