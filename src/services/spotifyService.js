// src/services/spotifyService.js
export const getSpotifyToken = async () => {
    const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
    const clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
    const credentials = btoa(`${clientId}:${clientSecret}`);

    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Authorization': `Basic ${credentials}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'grant_type=client_credentials',
    });

    const data = await response.json();
    return data.access_token;
};

// searches track 
export const searchTrack = async (trackName) => {
    const token = await getSpotifyToken();
    console.log("Track name: ", trackName);

    const response = await fetch(
        `https://api.spotify.com/v1/search?q=${encodeURIComponent(trackName)}&type=track&limit=10`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    const data = await response.json();
    console.log("Spotify API response: ", data);

    // Find the first track that has a preview_url
    const playable = data.tracks.items.find(track => track.preview_url);
    console.log("playable track: ", playable);

    if (!playable) {
        console.warn("No previewable track found for:", trackName);
        return null;
    }

    return {
        previewUrl: playable.preview_url,
        title: playable.name,
        artist: playable.artists.map((a) => a.name).join(', '),
        artwork: playable.album.images[0]?.url,
    };
};

