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
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Built Without Guidance — NC001</p>
          <h2 className="font-display text-5xl md:text-7xl text-foreground leading-none mb-8">
            No Blueprint.<br />No Mentor.<br />
            <span className="text-3xl md:text-4xl text-gold">No Permission Needed.</span>
          </h2>
          <div className="space-y-5 text-muted-foreground text-sm leading-relaxed">
            <p>
              Some of us were never handed a roadmap. No one pulled us aside. No safety net. No inherited advantage. Just raw instinct, daily discipline, and the refusal to let someone else's story become ours.
            </p>
            <p>
              NC001 — The Becoming — is for the person still in the building phase. Still learning. Still breaking old patterns. Awake to who they're becoming, but not finished writing the chapter yet.
            </p>
            <p className="text-foreground font-medium">
              This isn't clothing. It's a certified record of everything you chose to build when nobody was watching.
            </p>
          </div>

          <div className="mt-10 flex gap-10">
            <div>
              <p className="font-display text-4xl text-gold">NC</p>
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mt-1">Built Without Guidance</p>
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
            Own Your Chapter — NC001
          </a>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
