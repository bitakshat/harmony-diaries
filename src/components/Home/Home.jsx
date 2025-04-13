import { useContext } from "react";
import MoodSelector from "../MoodSelector/MoodSelector";
import MusicPlayer from "../MusicPlayer/MusicPlayer";
import { TrackSuggestionContext } from "../../TrackSuggestionContext/TrackSuggestionContext";
import Snowfall from "react-snowfall";

export const Home = () => {
    const { trackSuggestion } = useContext(TrackSuggestionContext);

    return (
        <>
            <Snowfall speed={[1, 2]} />
            <div className="relative w-full min-h-screen overflow-hidden flex items-center justify-center custom-perspective">
                <div className="relative z-10 w-full max-w-[1400px] px-6 md:px-12 py-8 flex flex-col items-center justify-center text-center">
                    {/* Title */}
                    <h1 className="text-[32px] sm:text-[42px] md:text-[50px] text-white mb-12 font-semibold hover:cursor-default transition-transform duration-300 hover:scale-110">
                        Harmony Diaries
                    </h1>

                    {/* Content Section */}
                    <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
                        {/* Mood Selector */}
                        <div className="w-full md:w-[60%] bg-white/20 rounded-[20px] shadow-xl p-6 flex items-center justify-center backdrop-blur-md transition-all duration-500">
                            <MoodSelector />
                        </div>

                        {/* Music Player */}
                        <div className="w-full h-full md:w-[35%] bg-white/20 rounded-[20px] shadow-xl p-6 flex items-center justify-center backdrop-blur-md transition-all duration-500">
                            <MusicPlayer trackName={trackSuggestion} />
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="mt-12 text-white text-[16px] sm:text-[18px] md:text-[20px]">
                        Made with <span className="inline-block transform hover:scale-125 transition-transform px-1">❤️</span> for my Gunnie
                    </div>
                </div>
            </div>
        </>
    );
};
