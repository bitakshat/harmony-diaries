// import { Home } from "./components/Home/Home"
// import { TrackSuggestionProvider } from "./TrackSuggestionContext/TrackSuggestionContext";

// function App() {
//   return (
//     <div className="bg-gradient-to-b from-[#d79dfa] to-[#a2a9fc] min-h-screen flex items-center justify-center">
//       <TrackSuggestionProvider>
//         <Home />
//       </TrackSuggestionProvider>
//     </div>
//   )
// }

// export default App

import { useEffect, useState } from "react";
import { Home } from "./components/Home/Home";
import { TrackSuggestionProvider } from "./TrackSuggestionContext/TrackSuggestionContext";

const gradients = [
  "from-[#d79dfa] to-[#a2a9fc]",
  "from-[#c5afff] to-[#b7e0ff]",
  "from-[#e3c4ff] to-[#a3c8f7]",
  "from-[#deb7ff] to-[#b0cfff]",
  "from-[#f3d7ff] to-[#c0dbff]",
];

function App() {
  const [currentGradient, setCurrentGradient] = useState(gradients[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newGradient = gradients[Math.floor(Math.random() * gradients.length)];
      setCurrentGradient(newGradient);
    }, 10000); // Change every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`transition-all duration-1000 ease-in-out bg-gradient-to-b ${currentGradient} min-h-screen flex items-center justify-center`}>
      <TrackSuggestionProvider>
        <Home />
      </TrackSuggestionProvider>
    </div>
  );
}

export default App;
