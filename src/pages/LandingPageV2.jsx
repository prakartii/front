import NavbarV2 from "../components/v2/NavbarV2";
import HeroV2 from "../components/v2/HeroV2";
import MemoryV2 from "../components/v2/MemoryV2";
import MemoryJournalV2 from "../components/v2/MemoryJournalV2";
import MultilingualV2 from "../components/v2/MultilingualV2";
import FinancialInclusionV2 from "../components/v2/FinancialInclusionV2";
import OpportunityEngineV2 from "../components/v2/OpportunityEngineV2";
import GrowthIntelligenceV2 from "../components/v2/GrowthIntelligenceV2";
import BusinessCompanionV2 from "../components/v2/BusinessCompanionV2";
import TextileStrip from "../components/v2/TextileStrip";
import Footer from "../components/Footer";

/**
 * SAKHI V2 — full teardown of the editorial landing page, rebuilt as a
 * card-driven product experience. In-progress: Hero, Memory, and
 * Multilingual are rebuilt; remaining sections (Growth, Opportunity,
 * SakhiInAction, SuccessStories, FinalCTA) stay on the old page until
 * their V2 versions are approved and added here.
 */
export default function LandingPageV2() {
  return (
    <div className="relative font-body2 bg-v2-cream v2-weave-ground overflow-x-hidden overflow-y-visible">
      {/* The book's own margin — a hand-block-printed strip running the
          full height of the page, framing every section the same way a
          bound journal's edge does. */}
      <div className="hidden xl:block absolute left-0 top-0 h-full w-5 z-[1]">
        <TextileStrip width={20} ink="#6F5748" />
      </div>

      <NavbarV2 />
      <main>
        <HeroV2 />
        <MemoryV2 />
        <MemoryJournalV2 />
        <MultilingualV2 />
        <FinancialInclusionV2 />
        <OpportunityEngineV2 />
        <GrowthIntelligenceV2 />
        <BusinessCompanionV2 />
      </main>
      <Footer />
    </div>
  );
}
