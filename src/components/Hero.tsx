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
      <div className="absolute inset-0 bg-background/40" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        {/* Badge */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-8 bg-gold opacity-60" />
          <span className="gradient-gold text-primary-foreground text-[10px] tracking-[0.35em] uppercase font-bold px-5 py-2 shadow-gold">
            Chapter 001 — Limited Run
          </span>
          <div className="h-px w-8 bg-gold opacity-60" />
        </div>

        {/* Headline */}
        <h1 className="font-display text-6xl sm:text-8xl md:text-[10rem] leading-none text-foreground mb-4">
          Built Without
        </h1>
        <h1 className="font-display text-6xl sm:text-8xl md:text-[10rem] leading-none text-gold mb-8">
          Guidance.
        </h1>

        {/* Sub */}
        <p className="text-muted-foreground text-sm sm:text-base tracking-[0.15em] uppercase max-w-md mb-10">
          The first release — For those who figured it out on their own.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <a
            href="https://certifiedrichnarrative.com.au/collections/all"
            target="_blank"
            rel="noreferrer"
            className="gradient-gold text-primary-foreground font-semibold text-xs tracking-[0.25em] uppercase px-10 py-4 hover:opacity-90 transition-all shadow-gold"
          >
            Shop NC001
          </a>
          <a
            href="#story"
            className="border border-foreground/30 text-foreground text-xs tracking-[0.25em] uppercase px-10 py-4 hover:border-foreground transition-all"
          >
            Our Story
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
