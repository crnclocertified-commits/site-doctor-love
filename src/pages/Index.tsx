import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import BrandStory from "@/components/BrandStory";
import EvolutionRoadmap from "@/components/EvolutionRoadmap";
import NarrativeStudio from "@/components/NarrativeStudio";
import FounderStatement from "@/components/FounderStatement";
import NC002Waitlist from "@/components/NC002Waitlist";
import SocialProof from "@/components/SocialProof";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnnouncementBar />
      <Navbar />
      <main style={{ paddingTop: "36px" }}>
        <Hero />
        <ProductGrid />
        <SocialProof />
        <BrandStory />
        <FounderStatement />
        <EvolutionRoadmap />
        <NarrativeStudio />
        <NC002Waitlist />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

