// import { useContext, useCallback, useEffect, } from "react";
// import MoodSelector from "../MoodSelector/MoodSelector";
// import MusicPlayer from "../MusicPlayer/MusicPlayer";

// import { TrackSuggestionContext } from "../../TrackSuggestionContext/TrackSuggestionContext";

// export const Home = () => {

//     const { trackSuggestion } = useContext(TrackSuggestionContext);

//     return (
//         <div className="w-full h-full">
//             <h1 className="text-center text-[50px] text-[#fff] mt-[50px] underline underline-offset-8">Harmony Diaries</h1>

//             <div className="w-full h-[800px] px-[50px] flex justify-center items-center gap-[20px] mx-auto ">

//                 {/* mood selector  */}
//                 <div className="w-max h-[calc(100%-200px)] rounded-[20px] bg-white/20 flex justify-center items-center">
//                     <MoodSelector />
//                 </div>

//                 {/* media player  */}
//                 <div className="w-[25%] h-[calc(100%-200px)] rounded-[20px] bg-white/20">
//                     <MusicPlayer trackName={trackSuggestion} />
//                 </div>
//             </div>
//         </div>
//     )
// }

// import { useEffect, useState, useCallback, useContext } from "react";
// import Particles from "react-tsparticles";
// import { loadSnowPreset } from "@tsparticles/preset-snow";

// import MoodSelector from "../MoodSelector/MoodSelector";
// import MusicPlayer from "../MusicPlayer/MusicPlayer";
// import { TrackSuggestionContext } from "../../TrackSuggestionContext/TrackSuggestionContext";

// export const Home = () => {
//     const { trackSuggestion } = useContext(TrackSuggestionContext);
//     const [options, setOptions] = useState(null);

//     const particlesInit = useCallback(async (engine) => {
//         console.log("Particles init");
//         await loadSnowPreset(engine);
//     }, []);

//     useEffect(() => {
//         setOptions({
//             preset: "snow",
//             background: {
//                 color: {
//                     value: "#0d47a1",
//                 },
//             },
//             fullScreen: {
//                 enable: false, // important when using within your app layout
//             },
//         });
//     }, []);

//     return (
//         <div className="relative w-full h-full">
//             {options && (
//                 <Particles
//                     id="tsparticles"
//                     init={particlesInit}
//                     options={options}
//                     className="absolute top-0 left-0 w-full h-full z-0"
//                 />
//             )}

//             <div className="relative z-10">
//                 <h1 className="text-center text-[50px] text-[#fff] mt-[50px] underline underline-offset-8">Harmony Diaries</h1>

//                 <div className="w-full h-[800px] px-[50px] flex justify-center items-center gap-[20px] mx-auto ">

//                     {/* mood selector  */}
//                     <div className="w-max h-[calc(100%-200px)] rounded-[20px] bg-white/20 flex justify-center items-center">
//                         <MoodSelector />
//                     </div>

//                     {/* media player  */}
//                     <div className="w-[25%] h-[calc(100%-200px)] rounded-[20px] bg-white/20">
//                         <MusicPlayer trackName={trackSuggestion} />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

import { useCallback, useEffect, useState, useContext } from "react";
import MoodSelector from "../MoodSelector/MoodSelector";
import MusicPlayer from "../MusicPlayer/MusicPlayer";
import { TrackSuggestionContext } from "../../TrackSuggestionContext/TrackSuggestionContext";

import Snowfall from 'react-snowfall'

export const Home = () => {
    const { trackSuggestion } = useContext(TrackSuggestionContext);

    return (
        <div className="relative w-full min-h-screen overflow-y-hidden">
            <Snowfall speed={[1, 2]} />
            <div className="relative z-10  custom-perspective">
                <h1 className="text-center text-[50px] text-[#fff] mt-[50px] hover:cursor-default hover:scale-[1.2] transition-all duration-2">Harmony Diaries</h1>

                {/* <div className="w-full h-[800px] px-[50px] flex justify-center items-center gap-[20px] mx-auto">
                    <div className="w-max h-[calc(100%-200px)] bg-white/20 rounded-[20px] flex justify-center items-center shadow-xl">
                        <MoodSelector />
                    </div>
                    <div className="w-[25%] h-[calc(100%-200px)] rounded-[20px] bg-white/20">
                        <MusicPlayer trackName={trackSuggestion} />
                    </div>
                </div> */}

                <div className="w-full h-[800px] px-[50px] flex justify-center items-center gap-[20px] mx-auto">
                    <div className="w-max h-[calc(100%-200px)] bg-white/20 rounded-[20px] flex justify-center items-center shadow-xl transition-all duration-500 ease-in-out">
                        <MoodSelector />
                    </div>
                    <div className="w-[25%] h-[calc(100%-200px)] rounded-[20px] bg-white/20 shadow-xl  transition-all duration-500 ease-in-out">
                        <MusicPlayer trackName={trackSuggestion} />
                    </div>
                </div>

                <div className="w-full flex justify-center items-center mt-[-50px] mb-[50px]"><span className="text-[20px] text-[#fff] text-center w-full">Made with ❤️ for my Baby Girl</span></div>

            </div>
        </div>
    );
};

