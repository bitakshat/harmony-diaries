
import { useCallback, useEffect, useState, useContext } from "react";
import MoodSelector from "../MoodSelector/MoodSelector";
import MusicPlayer from "../MusicPlayer/MusicPlayer";
import { TrackSuggestionContext } from "../../TrackSuggestionContext/TrackSuggestionContext";

import Snowfall from 'react-snowfall'

export const Home = () => {
    const { trackSuggestion } = useContext(TrackSuggestionContext);

    return (
        <div className="relative w-full min-h-screen overflow-y-hidden overflow-x-hidden">
            <Snowfall speed={[1, 2]} />
            <div className="relative z-10 custom-perspective">
                <h1 className="text-center text-[50px] text-[#fff] mt-[50px] hover:cursor-default hover:scale-[1.2] transition-all duration-2">Harmony Diaries</h1>

                <div className="w-full h-[800px] px-[50px] flex justify-center items-center gap-[20px] mx-auto">
                    <div className="w-max h-[calc(100%-200px)] bg-white/20 rounded-[20px] flex justify-center items-center shadow-xl transition-all duration-500 ease-in-out">
                        <MoodSelector />
                    </div>
                    <div className="w-[25%] h-[calc(100%-200px)] rounded-[20px] bg-white/20 shadow-xl  transition-all duration-500 ease-in-out">
                        <MusicPlayer trackName={trackSuggestion} />
                    </div>
                </div>

                <div className="w-full flex justify-center items-center mt-[-50px]"><span className="text-[20px] text-[#fff] text-center pb-[50px]">Made with <span className="hover:scale-[1.2] transition-all p-[10px]">❤️</span> for my Gunnie</span></div>

            </div>
        </div>
    );
};

