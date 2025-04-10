import { createContext, useState, useEffect } from 'react';

export const TrackSuggestionContext = createContext();
export const TrackSuggestionProvider = ({ children }) => {
    const [trackSuggestion, setTrackSuggestion] = useState('');

    useEffect(() => {
        console.log("TrackSuggestionContext initialized");
        console.log("Track suggestion state:", trackSuggestion);
    }, [trackSuggestion]);

    return (
        <TrackSuggestionContext.Provider value={{ trackSuggestion, setTrackSuggestion }}>
            {children}
        </TrackSuggestionContext.Provider>
    );
};
