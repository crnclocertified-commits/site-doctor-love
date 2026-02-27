const FounderStatement = () => {
  return (
    <section className="py-16 md:py-24 border-t border-border bg-secondary/30">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">

        {/* Label */}
        <p className="text-gold-accent text-xs tracking-[0.3em] uppercase mb-12 text-center">From the Founder</p>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Photo */}
          <div className="relative order-2 md:order-1">
            <div
              className="aspect-[3/4] bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(https://certifiedrichnarrative.com.au/cdn/shop/files/IMG_0420.jpg?v=1770938911&width=1200)`
              }} />

            {/* Corner accents */}
            <div className="absolute -bottom-4 -left-4 w-20 h-20 border border-gold opacity-40" />
            <div className="absolute -top-4 -right-4 w-10 h-10 border border-gold opacity-20" />
          </div>

          {/* Statement */}
          <div className="order-1 md:order-2">
            {/* Opening quote mark */}
            <div className="font-display text-6xl md:text-8xl text-gold-accent leading-none -mb-2 md:-mb-4 opacity-60 select-none">"</div>

            <blockquote className="font-display text-2xl md:text-4xl text-foreground leading-tight mb-6 md:mb-8">
              ​If there's no roadmap we become the architects          
            </blockquote>

            <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
              <p>
                There was no mentor. No roadmap. No safety net. Just the belief that if I kept showing up — every day, without applause — something real would come from it.
              </p>
              <p>
                NC001 isn't a fashion brand. It's a record. A certified record of what gets built when you refuse to wait for permission.
              </p>
              <p className="text-foreground font-medium">
                If you found your own way — this is for you.
              </p>
            </div>

            {/* Signature */}
            <div className="mt-8 md:mt-10 pt-6 md:pt-8 border-t border-border">
              <p className="font-display text-xl md:text-2xl text-gold-accent">Jima Dau</p>
              <p className="text-muted-foreground text-xs tracking-[0.2em] uppercase mt-1">Founder — Certified Rich Narrative</p>
            </div>
          </div>

        </div>
      </div>
    </section>);

};

export default FounderStatement;