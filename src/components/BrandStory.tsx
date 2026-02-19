const BrandStory = () => {
  return (
    <section id="story" className="py-24 border-t border-border">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="relative">
          <div
            className="aspect-[4/5] bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(https://certifiedrichnarrative.com.au/cdn/shop/files/IMG_0420.jpg?v=1770938911&width=1200)`,
            }}
          />
          {/* Gold accent line */}
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-gold opacity-60" />
          <div className="absolute -top-4 -left-4 w-12 h-12 border border-gold opacity-30" />
        </div>

        {/* Text */}
        <div>
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">The Becoming</p>
          <h2 className="font-display text-5xl md:text-7xl text-foreground leading-none mb-8">
            Orphaned<br />By The World.<br />
            <span className="text-3xl md:text-4xl text-gold">We Reclaim The Narrative.</span>
          </h2>
          <div className="space-y-5 text-muted-foreground text-sm leading-relaxed">
            <p>
              Some of us were never handed a blueprint. No mentor pulling us aside, no safety net, no permission slip. Just instinct, resilience, and the refusal to accept a story someone else wrote for us.
            </p>
            <p>
              NC001 — The Becoming — is the first chapter. It's for the person who isn't where they want to be yet, but is no longer asleep. Aware of their story. Actively rewriting it.
            </p>
            <p className="text-foreground font-medium">
              This isn't clothing. It's a certified record of everything you chose to build without guidance.
            </p>
          </div>

          <div className="mt-10 flex gap-10">
            <div>
              <p className="font-display text-4xl text-gold">NC</p>
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mt-1">The Becoming</p>
            </div>
            <div className="w-px bg-border" />
            <div>
              <p className="font-display text-4xl text-gold">RC</p>
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mt-1">The Mind</p>
            </div>
            <div className="w-px bg-border" />
            <div>
              <p className="font-display text-4xl text-gold">CC</p>
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mt-1">The Authority</p>
            </div>
          </div>

          <a
            href="https://certifiedrichnarrative.com.au/collections/all"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-10 gradient-gold text-primary-foreground font-semibold text-xs tracking-[0.25em] uppercase px-10 py-4 hover:opacity-90 transition-all shadow-gold"
          >
            Shop NC001
          </a>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
