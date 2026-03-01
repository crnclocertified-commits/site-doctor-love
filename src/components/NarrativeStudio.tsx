const NarrativeStudio = () => {
  return (
    <section className="py-24 border-t border-border relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/10 pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            hsl(var(--gold)) 0px,
            hsl(var(--gold)) 1px,
            transparent 1px,
            transparent 80px
          )`,
        }}
      />

      <div className="relative max-w-screen-xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-gold opacity-60" />
              <span className="text-gold text-xs tracking-[0.35em] uppercase">The Build, Documented</span>
              <div className="h-px w-10 bg-gold opacity-60" />
            </div>

            <h2 className="font-display text-5xl md:text-7xl text-gold leading-none mb-4">
              Narrative<br />
              <span className="text-gold">Studio</span>
            </h2>

            <p className="text-muted-foreground text-sm tracking-[0.15em] uppercase mb-6">
              Real time. No filter. No blueprint.
            </p>

            <div className="space-y-4 text-muted-foreground text-sm leading-relaxed mb-8">
              <p>
                We don't build this behind closed doors. Every decision, every lesson, every failure and win is documented on TikTok and YouTube — as it happens, before it's polished.
              </p>
              <p>
                Because <span className="text-foreground font-medium">contribution is legacy</span>. What we learn building CRNCLO belongs to every person who's building without a roadmap — and watching to know they're not alone.
              </p>
              <p className="text-foreground font-medium">
                This isn't content. It's accountability. Follow the build.
              </p>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.tiktok.com/@crnclo"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 border border-border text-foreground text-xs tracking-[0.2em] uppercase px-6 py-4 hover:border-gold hover:text-gold transition-all group"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.19 8.19 0 004.79 1.53V6.78a4.85 4.85 0 01-1.02-.09z"/>
                </svg>
                Follow on TikTok
              </a>
              <a
                href="https://www.youtube.com/@certifiedrichnarrative"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 border border-border text-foreground text-xs tracking-[0.2em] uppercase px-6 py-4 hover:border-gold hover:text-gold transition-all group"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
                </svg>
                Watch on YouTube
              </a>
            </div>
          </div>

          {/* Right side — coming soon inner circle teaser */}
          <div className="relative">
            <div className="border border-gold/30 p-10 bg-secondary/30 relative overflow-hidden">
              {/* Background accent */}
              <div
                className="absolute inset-0 opacity-5"
                style={{ background: "var(--gradient-gold)" }}
              />

              <div className="relative">
                <p className="text-gold-accent text-[9px] tracking-[0.4em] uppercase mb-6">Coming Soon</p>
                <h3 className="font-display text-4xl text-foreground leading-tight mb-4">
                  The Inner<br />
                  <span className="text-gold">Circle</span>
                </h3>

                <div className="space-y-4 text-muted-foreground text-sm leading-relaxed mb-8">
                  <p>
                    Not a group chat. A private table for those building in the same direction — where real knowledge gets shared, growth is held accountable, and the standard stays high.
                  </p>
                  <p>
                    Founder learning materials. Raw business IQ. The conversations that actually move people forward.
                  </p>
                </div>

                {/* Pillars */}
                <div className="space-y-3">
                  {[
                    { pillar: "Growth", desc: "The goal" },
                    { pillar: "Resilience", desc: "The engine" },
                    { pillar: "Authenticity", desc: "The compass" },
                    { pillar: "Compassion", desc: "The heart" },
                    { pillar: "Contribution", desc: "The legacy" },
                  ].map(({ pillar, desc }) => (
                    <div key={pillar} className="flex items-center gap-4">
                      <div className="w-1.5 h-1.5 bg-gold flex-shrink-0" />
                      <span className="text-foreground text-xs font-semibold tracking-[0.15em] uppercase">{pillar}</span>
                      <span className="text-muted-foreground text-xs">— {desc}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-muted-foreground text-xs tracking-[0.15em] uppercase">
                    NC002 waitlist = first in the door when the Inner Circle opens.
                  </p>
                </div>
              </div>
            </div>

            {/* Corner accents */}
            <div className="absolute -bottom-4 -right-4 w-16 h-16 border border-gold opacity-30" />
            <div className="absolute -top-4 -left-4 w-8 h-8 border border-gold opacity-20" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default NarrativeStudio;
