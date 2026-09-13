import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import Technologies from "./Components/Technologies";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <HeroSection />
        <Technologies />
      </main>
    </div>
  );
}

export default App;