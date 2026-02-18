import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import BrandStory from "@/components/BrandStory";
import FounderStatement from "@/components/FounderStatement";
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
        <BrandStory />
        <SocialProof />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
