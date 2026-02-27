const BrandStory = () => {
  return (
    <section id="story" className="py-16 md:py-24 border-t border-border">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-12 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Image */}
        <div className="relative">
          <div
            className="aspect-[4/5] bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url(\"/lovable-uploads/96305eeb-bfbe-4422-b9ff-53497a7cabf4.jpg\")"
            }} />

          {/* Gold accent line */}
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-gold opacity-60" />
          <div className="absolute -top-4 -left-4 w-12 h-12 border border-gold opacity-30" />
        </div>

        {/* Text */}
        <div>
          <p className="text-gold-accent text-xs tracking-[0.3em] uppercase mb-4">The Movement</p>
          <h2 className="font-display text-3xl sm:text-5xl md:text-7xl text-foreground leading-none mb-6 md:mb-8">
            We're Uniquely<br />In This Together.
          </h2>
          <div className="space-y-5 text-muted-foreground text-sm leading-relaxed">
            <p>
              Certified Rich Narrative was born from a simple truth — some of us never had a roadmap. No mentors pulling us aside, no manual handed down. Just instinct, resilience, and the will to build something real.
            </p>
            <p>
              NC001 is the first chapter of that story. Each piece in this collection carries a name that means something — a reminder that the path you carved on your own is the one worth wearing.
            </p>
            <p className="text-foreground font-medium">
              This isn't just clothing. It's a certified record of what you built.
            </p>
          </div>

          <div className="mt-10 flex gap-10">
            <div>
              <p className="font-display text-4xl text-gold-accent">001</p>
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mt-1">First Chapter</p>
            </div>
            <div className="w-px bg-border" />
            <div>
              <p className="font-display text-4xl text-gold">AU</p>
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mt-1">Made for AU</p>
            </div>
            <div className="w-px bg-border" />
            <div>
              <p className="font-display text-4xl text-gold">CRN</p>
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mt-1">The Standard</p>
            </div>
          </div>

          <a
            href="https://certifiedrichnarrative.com.au/collections/nc001"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-10 gradient-gold text-primary-foreground font-semibold text-xs tracking-[0.25em] uppercase px-10 py-4 hover:opacity-90 transition-all shadow-gold">

            Shop the Story
          </a>
        </div>
      </div>
    </section>);

};

export default BrandStory;