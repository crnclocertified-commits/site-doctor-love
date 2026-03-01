const SocialProof = () => {
  return (
    <section className="py-16 md:py-24 border-t border-border bg-card">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <p className="text-gold text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-3">Founding Chapter</p>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl text-foreground">Be Part of NC001</h2>
          <p className="text-muted-foreground text-sm mt-4 max-w-lg mx-auto leading-relaxed">
            The first drop. The first chapter. Be one of the first to wear it — before everyone else catches on.
          </p>
        </div>

        {/* Three pillars */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: "◈",
              title: "Limited First Run",
              body: "NC001 won't restock. Once it's gone, it's gone. The founding pieces belong to those who moved first.",
            },
            {
              icon: "◉",
              title: "Free Returns",
              body: "Not the right fit? We'll sort it. No friction, no hassle — because buying without a safety net isn't the vibe.",
            },
            {
              icon: "◎",
              title: "NC002 — Full Brand Experience",
              body: "The next chapter ships in full CRN branded packaging. Join the waitlist and be first when NC002 drops.",
            },
          ].map((p, i) => (
            <div key={i} className="surface p-8 border border-border hover:border-gold transition-colors">
              <p className="text-gold-accent text-2xl mb-5">{p.icon}</p>
              <h3 className="font-display text-2xl text-foreground mb-3">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>

        {/* Founding stats */}
        <div className="mt-12 md:mt-20 grid grid-cols-3 gap-3 sm:gap-6 border-t border-border pt-10 md:pt-16">
          {[
          { value: "NC001", label: "Founding Chapter — Active" },
            { value: "AU", label: "Born in Australia" },
            { value: "No Restocks", label: "Chapter 001 closes when it's gone" },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <p className="font-display text-2xl sm:text-4xl md:text-6xl text-gold-accent">{s.value}</p>
              <p className="text-muted-foreground text-[9px] sm:text-xs tracking-[0.1em] sm:tracking-[0.2em] uppercase mt-1 sm:mt-2">{s.label}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="https://certifiedrichnarrative.com.au/collections/nc001"
            target="_blank"
            rel="noreferrer"
            className="inline-block gradient-gold text-primary-foreground font-semibold text-xs tracking-[0.25em] uppercase px-12 py-4 hover:opacity-90 transition-all shadow-gold"
          >
            Claim Your Founding Piece
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
