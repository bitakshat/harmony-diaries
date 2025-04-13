import { useEffect, useState } from "react";
import { Home } from "./components/Home/Home";
import { TrackSuggestionProvider } from "./TrackSuggestionContext/TrackSuggestionContext";

const gradients = [
  { from: "#9b59b6", to: "#34495e" },   // Amethyst → Midnight Blue
  { from: "#6a11cb", to: "#2575fc" },   // Purple → Blue
  { from: "#2c3e50", to: "#4ca1af" },   // Charcoal → Teal
  { from: "#1e3c72", to: "#2a5298" },   // Deep Blue hues
  { from: "#41295a", to: "#2F0743" },   // Violet → Eggplant

  { from: "#0f2027", to: "#2c5364" },   // Night Sky Blue
  { from: "#134e5e", to: "#71b280" },   // Teal Forest → Mint
  { from: "#3a1c71", to: "#d76d77" },   // Plum → Rose
  { from: "#355c7d", to: "#6c5b7b" },   // Denim Blue → Dusty Purple
  { from: "#232526", to: "#414345" },   // Steel Greys

  { from: "#141e30", to: "#243b55" },   // Dark Navy
  { from: "#485563", to: "#29323c" },   // Slate → Blackened Blue
];

function App() {
  const [currentGradientIndex, setCurrentGradientIndex] = useState(0);
  const [nextGradientIndex, setNextGradientIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);

      setTimeout(() => {
        setCurrentGradientIndex(nextGradientIndex);
        setNextGradientIndex((nextGradientIndex + 1) % gradients.length);
        setIsTransitioning(false);
      }, 8000); // match duration of transition
    }, 16000); // total cycle: 8s transition + 8s stay

    return () => clearInterval(interval);
  }, [nextGradientIndex]);

  const current = gradients[currentGradientIndex];
  const next = gradients[nextGradientIndex];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Current visible gradient */}
      <div
        className="absolute inset-0 transition-opacity duration-[8000ms] ease-in-out z-0"
        style={{
          backgroundImage: `linear-gradient(to bottom, ${current.from}, ${current.to})`,
          opacity: isTransitioning ? 0 : 1,
        }}
      />

      {/* Incoming gradient that will fade in */}
      <div
        className="absolute inset-0 transition-opacity duration-[8000ms] ease-in-out z-0"
        style={{
          backgroundImage: `linear-gradient(to bottom, ${next.from}, ${next.to})`,
          opacity: isTransitioning ? 1 : 0,
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <TrackSuggestionProvider>
          <Home />
        </TrackSuggestionProvider>
      </div>
    </div>
  );
}

export default App;
