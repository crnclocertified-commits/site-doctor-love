import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnnouncementBar from "@/components/AnnouncementBar";

const OurStory = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnnouncementBar />
      <Navbar />
      <main style={{ paddingTop: "36px" }}>
        <section className="py-24">
          <div className="max-w-screen-md mx-auto px-6 md:px-12">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">The Beginning</p>
            <h1 className="font-display text-5xl md:text-7xl text-foreground leading-none mb-10">Our Story</h1>

            <div className="space-y-6 text-muted-foreground text-sm leading-relaxed">
              <p>
                Certified Rich Narrative was born from a simple truth — some of us never had a roadmap. No mentors pulling us aside, no manual handed down. Just instinct, resilience, and the will to build something real.
              </p>
              <p>
                Founded by Jima Dau, CRNCLO isn't a fashion brand in the traditional sense. It's a record — a certified record of what you built without help, without permission, and without a blueprint. Every piece carries a name that means something. Every collection marks a stage of becoming.
              </p>
              <p>
                The brand operates across three tiers: <span className="text-foreground font-medium">Narrative (NC)</span> — the awakening stage, built for those still carving their path. <span className="text-foreground font-medium">Rich (RC)</span> — the established mind, for those who've moved from chaos to control. And <span className="text-foreground font-medium">Certified (CC)</span> — the self-built authority, for leaders who earned it through experience, not credentials.
              </p>
              <p>
                NC001 is the founding chapter. The first drop. A limited run that won't restock. It exists for those who moved first — the ones who understood the vision before it became obvious.
              </p>
              <p className="text-foreground font-medium">
                This isn't just clothing. It's proof of concept. Proof of self. Proof that the path you carved on your own is the one worth wearing.
              </p>
            </div>

            <div className="mt-16 border-t border-border pt-10">
              <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">The Founder</p>
              <blockquote className="font-display text-2xl text-foreground italic leading-relaxed">
                "Somewhere there's a kid with no blueprint. This is for them."
              </blockquote>
              <p className="text-muted-foreground text-xs tracking-[0.2em] uppercase mt-4">— Jima Dau, Founder of Certified Rich Narrative</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OurStory;
