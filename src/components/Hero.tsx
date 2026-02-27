const Hero = () => {
  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transition-transform duration-[8000ms]"
        style={{
          backgroundImage: `url(https://certifiedrichnarrative.com.au/cdn/shop/files/IMG_0479.jpg?v=1770939065&width=1920)`,
        }}
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 bg-background/50" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        {/* Badge */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-8 bg-gold opacity-60" />
          <span className="gradient-gold text-primary-foreground text-[10px] tracking-[0.35em] uppercase font-bold px-5 py-2 shadow-gold">
            Chapter 001 — Limited First Run
          </span>
          <div className="h-px w-8 bg-gold opacity-60" />
        </div>

        {/* Headline */}
        <h1 className="font-display text-4xl sm:text-7xl md:text-[10rem] leading-none text-foreground mb-2 sm:mb-4">
          Built Without
        </h1>
        <h1 className="font-display text-4xl sm:text-7xl md:text-[10rem] leading-none text-gold mb-6 sm:mb-8">
          Guidance.
        </h1>

        {/* Sub */}
        <p className="text-muted-foreground text-xs sm:text-sm max-w-lg mb-3 sm:mb-4 px-4 sm:px-0 leading-relaxed font-semibold">
          Clothing for builders, not spectators. Every piece represent a chapter of learning, failure, and growth — wear the process.
        </p>
        <p className="text-muted-foreground/60 text-[10px] sm:text-xs tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-8 sm:mb-10">
          Built Without Guidance — NC001 — Won't Restock
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center w-full sm:w-auto px-4 sm:px-0">
          <a
            href="https://certifiedrichnarrative.com.au/collections/nc001"
            target="_blank"
            rel="noreferrer"
            className="gradient-gold text-primary-foreground font-semibold text-[11px] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase px-8 sm:px-10 py-4 hover:opacity-90 transition-all shadow-gold w-full sm:w-auto text-center"
          >
            Secure Yours — NC001
          </a>
          <a
            href="/our-story"
            className="border border-foreground/30 text-foreground text-[11px] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase px-8 sm:px-10 py-4 hover:border-gold hover:text-gold transition-all w-full sm:w-auto text-center"
          >
            Read the Story
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-px h-10 bg-foreground/20" />
        <span className="text-muted-foreground text-[10px] tracking-[0.3em] uppercase">Scroll</span>
      </div>
    </section>
  );
};

export default Hero;
