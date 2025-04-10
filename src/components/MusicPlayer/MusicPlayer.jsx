// import React, { useState, useEffect } from 'react';
// import { searchYouTube } from '../../services/youtubeService';

// const MusicPlayer = ({ trackName }) => {
//     const [trackInfo, setTrackInfo] = useState(null);
//     const [message, setMessage] = useState('');

//     useEffect(() => {
//         const fetchTrack = async () => {
//             const data = await searchYouTube(trackName);
//             if (!data) {
//                 setMessage("No track found for the given name");
//                 return;
//             }
//             setTrackInfo(data);
//         };

//         if (trackName) fetchTrack();
//     }, [trackName, message]);

//     if (!trackInfo) {
//         return <div className="text-center text-[#fff] text-[20px] w-full h-full flex justify-center items-center">{message ? message : 'Loading Track...'}</div>;
//     }

//     return (
//         <div className="rounded-2xl p-6 shadow-xl w-full h-full mx-auto space-y-4 flex justify-center items-center flex-col gap-[50px]">
//             <div className='flex justify-center items-center gap-[20px]'>
//                 {trackInfo.artwork && (
//                     <img
//                         src={trackInfo.artwork}
//                         alt="Artwork"
//                         className="w-24 h-24 mx-auto rounded-full object-cover"
//                     />
//                 )}

//                 <div className="text-center text-[#fff]">
//                     <p className="text-lg font-bold">{trackInfo.title}</p>
//                     <p>{trackInfo.artist}</p>
//                 </div>
//             </div>

//             <iframe
//                 width="100%"
//                 height="250px"
//                 src={trackInfo.previewUrl}
//                 allow="autoplay"
//                 allowFullScreen
//                 className="rounded-lg"
//             ></iframe>
//         </div>
//     );
// };

// export default MusicPlayer;


import React, { useState, useEffect, useRef } from 'react';
import { searchYouTube } from '../../services/youtubeService';

const MusicPlayer = ({ trackName }) => {
    const [trackInfo, setTrackInfo] = useState(null);
    const [message, setMessage] = useState('');
    const [isPlaying, setIsPlaying] = useState(false);
    const playerRef = useRef(null);

    useEffect(() => {
        const fetchTrack = async () => {
            const data = await searchYouTube(trackName);
            if (!data) {
                setMessage("No track found for the given name");
                return;
            }
            setTrackInfo(data);
        };

        if (trackName) fetchTrack();
    }, [trackName]);

    // Initialize YouTube Player API
    useEffect(() => {
        if (!trackInfo || !window.YT) return;

        const onPlayerReady = (event) => {
            event.target.playVideo();
        };

        const onPlayerStateChange = (event) => {
            const state = event.data;
            if (state === window.YT.PlayerState.PLAYING) {
                setIsPlaying(true);
            } else {
                setIsPlaying(false);
            }
        };

        playerRef.current = new window.YT.Player('youtube-player', {
            videoId: trackInfo.videoId,
            events: {
                onReady: onPlayerReady,
                onStateChange: onPlayerStateChange,
            },
        });
    }, [trackInfo]);

    // Load YouTube IFrame API script
    useEffect(() => {
        if (window.YT) return;

        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }, []);

    if (!trackInfo) {
        return <div className="text-center text-[#fff] text-[20px] w-full h-full flex justify-center items-center">{message ? message : 'Loading Track...'}</div>;
    }

    return (
        <div className="rounded-2xl p-6 shadow-xl w-full h-full mx-auto space-y-4 flex justify-center items-center flex-col gap-[50px]">
            <div className='flex justify-center items-center gap-[20px]'>
                {trackInfo.artwork && (
                    <img
                        src={trackInfo.artwork}
                        alt="Artwork"
                        className={`w-24 h-24 mx-auto rounded-full object-cover transition-transform duration-700 ease-linear shadow-2xl border-2 border-[#fff]
                            ${isPlaying ? 'animate-spin-slow' : ''}`}
                    />
                )}

                <div className="text-center text-[#fff]">
                    <p className="text-lg font-bold">{trackInfo.title}</p>
                    <p>{trackInfo.artist}</p>
                </div>
            </div>

            <div className="w-full">
                <div id="youtube-player" className="rounded-lg overflow-hidden w-full aspect-video"></div>
            </div>
        </div>
    );
};

export default MusicPlayer;
