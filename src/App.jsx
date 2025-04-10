import { Home } from "./components/Home/Home"
import { TrackSuggestionProvider } from "./TrackSuggestionContext/TrackSuggestionContext";

function App() {
  return (
    <div className="bg-gradient-to-b from-[#d79dfa] to-[#a2a9fc] min-h-screen flex items-center justify-center">
      <TrackSuggestionProvider>
        <Home />
      </TrackSuggestionProvider>
    </div>
  )
}

export default App
