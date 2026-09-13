import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import Technologies from "./Components/Technologies";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <HeroSection />
        <Technologies />
        <Footer />
      </main>
    </div>
  );
}

export default App;