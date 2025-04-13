

import React, { useState, useContext } from 'react';
import Lottie from 'lottie-react';
import { GiLoveSong } from "react-icons/gi";

import HeartEyesOne from '../../assets/lottieicons/heart-eyes-one.json';
import WarmSmileTwo from '../../assets/lottieicons/warm-smile-two.json';
import SlightlyHappyThree from '../../assets/lottieicons/slightly-happy-three.json';
import PleadingFour from '../../assets/lottieicons/pleading-four.json';
import LoudlyCryingFive from '../../assets/lottieicons/loudly-crying-five.json';

import { getSongSuggestion } from '../../services/openaiService';

import { TrackSuggestionContext } from '../../TrackSuggestionContext/TrackSuggestionContext';


const emojis = [
    { label: '1', animation: LoudlyCryingFive, rating: 1 },
    { label: '2', animation: PleadingFour, rating: 2 },
    { label: '3', animation: SlightlyHappyThree, rating: 3 },
    { label: '4', animation: WarmSmileTwo, rating: 4 },
    { label: '5', animation: HeartEyesOne, rating: 5 },
];

const CustomSlider = ({ value, onChange }) => {

    return (
        <div className="flex items-center gap-4">
            {emojis.map((emoji, idx) => (
                <div
                    key={idx}
                    onClick={() => onChange(idx + 1)}
                    className={`cursor-pointer p-1 rounded-full ${value === idx + 1 ? 'bg-pink-200' : ''}`}
                >
                    <Lottie
                        animationData={emoji.animation}
                        className="w-10 h-10"
                        loop={true}
                        autoplay={true}
                    />
                    <p className="text-center text-[20px] text-[#fff]">{emoji.label}</p>
                </div>
            ))}
        </div>
    );
};

const MoodSelector = () => {
    const [dayRating, setDayRating] = useState('');
    const [thoughtRating, setThoughtRating] = useState('');
    const [connectionRating, setConnectionRating] = useState('');
    const [songSuggestion, setSongSuggestion] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const { setTrackSuggestion } = useContext(TrackSuggestionContext);

    const handleSubmit = async () => {
        console.log("Executed handleSubmit");
        if (!dayRating || !thoughtRating || !connectionRating) {
            alert("Please answer all the questions first.");
            return;
        }

        const prompt = `
            Mood Log:
            - Day rating: ${dayRating}/5
            - How's your heart feeling right now: ${thoughtRating}/5
            - How energitic you are feeling today: ${connectionRating}/5

            Suggest a song that matches this mood. It can be either a Hindi or an English song. Avoid suggesting songs that have already been recommended previously. Be creative and choose something unique, meaningful, or lesser-known if it fits.
    `;


        try {
            const suggestion = await getSongSuggestion(prompt);
            console.log('Suggested song:', suggestion);
            setSongSuggestion(suggestion);
            setTrackSuggestion(suggestion);
            setLoading(false);
        } catch (err) {
            console.error(err);
            setError('Failed to fetch song suggestion.');
        }
    };

    return (
        <div className="p-6 space-y-6 text-[30px] text-[#fff] flex justify-center items-center flex-col">
            <div className='mx-auto flex flex-col gap-[20px]'>
                <div className='flex flex-col justify-center items-center'>
                    <p className="font-semibold mb-2">How is your day going?</p>
                    <CustomSlider value={dayRating} onChange={setDayRating} />
                </div>

                <div className='flex flex-col justify-center items-center'>
                    <p className="font-semibold mb-2">How’s your heart feeling right now?</p>
                    <CustomSlider value={thoughtRating} onChange={setThoughtRating} />
                </div>

                <div className='flex flex-col justify-center items-center'>
                    <p className="font-semibold mb-2">How energetic are you feeling today?</p>
                    <CustomSlider value={connectionRating} onChange={setConnectionRating} />
                </div>
            </div>
            <button
                onClick={async () => {
                    setLoading(true);
                    await handleSubmit();
                    setLoading(false);
                }}
                className={`flex justify-center items-center gap-[10px] !mt-[40px] bg-pink-500 hover:bg-pink-600 text-white py-2 px-[60px] rounded-xl shadow text-[20px] ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={loading}
            >
                {loading ? (
                    <div className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-t-2 border-white rounded-full animate-spin"></div>
                        Loading...
                    </div>
                ) : (
                    <>
                        Get Song <GiLoveSong color='#fff' />
                    </>
                )}
            </button>
        </div>
    );
};

export default MoodSelector;
