import axios from "axios";

const data = {
  text: "There is much to be said",
  voiceId: "en-US-terrell",
};

axios
  .post("https://api.murf.ai/v1/speech/generate", data, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "api-key": process.env.MURF_API_KEY,
    },
  })
  .then((response) => {
    console.log(response.data.audioFile);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

export interface PodcastWithAudio extends Podcast {
  audioUrl?: string;
}
