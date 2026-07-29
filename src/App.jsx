import { LanguageProvider } from "./lib/i18n/LanguageContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Memory from "./components/Memory";
import GrowthSignals from "./components/GrowthSignals";
import OpportunityFeed from "./components/OpportunityFeed";
import SakhiInAction from "./components/SakhiInAction";
import SuccessStories from "./components/SuccessStories";
import MultilingualExperience from "./components/MultilingualExperience";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import PersistentAtmosphere from "./components/living/PersistentAtmosphere";

/**
 * No intro state, no "has the video finished" flag anywhere. The video
 * lives inside Hero as a pinned, looping background layer; Navbar fades
 * in over it on mount. There is exactly one page, and scrolling is the
 * only thing that changes what's on screen — each section its own
 * composition, its own mood, its own signature interaction.
 */
export default function App() {
  return (
    <LanguageProvider>
      <div className="font-body">
        <PersistentAtmosphere />
        <Navbar />
        <main>
          <Hero />
          <Memory />
          <GrowthSignals />
          <OpportunityFeed />
          <SakhiInAction />
          <SuccessStories />
          <MultilingualExperience />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
