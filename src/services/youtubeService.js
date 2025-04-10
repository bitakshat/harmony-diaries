// src/services/youtubeService.js

export const searchYouTube = async (query) => {
    const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;

    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=1&q=${encodeURIComponent(query)}&key=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        const video = data.items[0];
        if (!video) return null;

        return {
            videoId: video.id.videoId,
            title: video.snippet.title,
            artist: video.snippet.channelTitle,
            artwork: video.snippet.thumbnails.high.url,
            previewUrl: `https://www.youtube.com/embed/${video.id.videoId}?autoplay=1`,
            source: 'youtube'
        };
    } catch (error) {
        console.error("YouTube Search Error:", error);
        return null;
    }
};
