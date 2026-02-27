const collections = [
  {
    code: "NC",
    name: "Narrative",
    subtitle: "Built Without Guidance",
    chapter: "NC001 — Active Now",
    status: "active",
    description:
      "Still learning. Still building. Still breaking old patterns. Aware of the story, but not finished writing it. This is the awakening stage.",
    language: "Message-driven. Minimal. Meaningful.",
    for: "The person who says: I'm not where I want to be yet — but I'm not asleep anymore.",
    items: ["Everyday streetwear", "Grounded silhouettes", "Philosophy in the detail"],
  },
  {
    code: "RC",
    name: "Rich",
    subtitle: "The Established Mind",
    chapter: "Coming: RC001",
    status: "locked",
    description:
      "Moved from chaos to control. Impulse to intention. Calm, structured, intentional. This isn't loud wealth — this is internal richness expressed externally through simplicity.",
    language: "Clean cuts. Premium fabrics. Understated branding.",
    for: "Someone who doesn't need to look rich. They move rich.",
    items: ["Premium neutral tones", "Elevated basics", "Emotional restraint in fabric"],
  },
  {
    code: "CC",
    name: "Certified",
    subtitle: "The Self-Built Authority",
    chapter: "Coming: CC001",
    status: "locked",
    description:
      "The replacement for suits — for those built by experience, not curriculum. Walk into a room and your life story is your qualification. No corporate permission required.",
    language: "Structured silhouettes. Tailored street-formal fusion.",
    for: "Entrepreneurs, creators, self-made thinkers — leaders without a title.",
    items: ["Street-formal fusion", "Boardroom presence", "Authority without assimilation"],
  },
];

const EvolutionRoadmap = () => {
  return (
    <section id="evolution" className="py-16 md:py-24 border-t border-border overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-12">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-gold opacity-60" />
            <span className="text-gold-accent text-xs tracking-[0.35em] uppercase">The Architecture</span>
            <div className="h-px w-10 bg-gold opacity-60" />
          </div>
          <h2 className="font-display text-3xl sm:text-5xl md:text-7xl text-foreground leading-none mb-4">
            The Evolution
          </h2>
          <p className="text-muted-foreground text-sm tracking-[0.15em] uppercase max-w-lg mx-auto">
            Three collections. Three stages of becoming. You don't just wear CRNCLO — you evolve with it.
          </p>
        </div>

        {/* Timeline connector (desktop) */}
        <div className="hidden md:flex items-center justify-center mb-12 gap-0">
          {collections.map((col, i) => (
            <div key={col.code} className="flex items-center">
              <div
                className={`w-3 h-3 border ${col.status === "active" ? "bg-gold border-gold" : "border-border bg-background"}`}
                style={{ transform: "rotate(45deg)" }}
              />
              {i < collections.length - 1 && (
                <div className={`h-px w-32 lg:w-48 ${i === 0 ? "bg-gold/40" : "bg-border/40"}`} />
              )}
            </div>
          ))}
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {collections.map((col) => (
            <div
              key={col.code}
              className={`relative p-8 border transition-all ${
                col.status === "active"
                  ? "border-gold/40 bg-secondary/40"
                  : "border-border bg-secondary/10 opacity-70"
              }`}
              style={col.status === "active" ? { boxShadow: "var(--shadow-gold)" } : {}}
            >
              {/* Status tag */}
              <div className="flex items-center justify-between mb-6">
                <span
                  className={`text-[9px] tracking-[0.3em] uppercase px-3 py-1 ${
                    col.status === "active"
                      ? "gradient-gold text-primary-foreground"
                      : "border border-border text-muted-foreground"
                  }`}
                >
                  {col.chapter}
                </span>
                {col.status === "locked" && (
                  <span className="text-[9px] tracking-[0.2em] uppercase text-muted-foreground border border-border px-2 py-1">
                    Locked
                  </span>
                )}
              </div>

              {/* Code + Name */}
              <p className="font-display text-4xl sm:text-6xl text-gold-accent leading-none mb-1">{col.code}</p>
              <p className="font-display text-xl text-foreground mb-1">{col.name}</p>
              <p className="text-muted-foreground text-xs tracking-[0.2em] uppercase mb-6">{col.subtitle}</p>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{col.description}</p>

              {/* Design language */}
              <p className="text-gold-accent/70 text-xs italic mb-6">{col.language}</p>

              {/* Items */}
              <ul className="space-y-2 mb-6">
                {col.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-xs text-muted-foreground tracking-wide">
                    <div className={`w-1 h-1 ${col.status === "active" ? "bg-gold" : "bg-border"} flex-shrink-0`} />
                    {item}
                  </li>
                ))}
              </ul>

              {/* For who */}
              <div className="border-t border-border pt-5">
                <p className="text-[10px] text-muted-foreground tracking-[0.15em] uppercase mb-1">This is for —</p>
                <p className="text-foreground text-xs italic leading-relaxed">"{col.for}"</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stage gate note */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-xs tracking-[0.2em] uppercase">
            Each collection unlocks when the founder earns it — documented knowledge, proof of profitability, full transparency.
          </p>
          <p className="text-gold-accent text-xs tracking-[0.15em] mt-2 uppercase">
            We don't move forward until we're ready. You'll see it all through Narrative Studio.
          </p>
        </div>

      </div>
    </section>
  );
};

export default EvolutionRoadmap;
