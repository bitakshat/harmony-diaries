import { createContext, useState, useEffect } from 'react';

export const TrackSuggestionContext = createContext();
export const TrackSuggestionProvider = ({ children }) => {
    const [trackSuggestion, setTrackSuggestion] = useState('');

    return (
        <TrackSuggestionContext.Provider value={{ trackSuggestion, setTrackSuggestion }}>
            {children}
        </TrackSuggestionContext.Provider>
    );
};
