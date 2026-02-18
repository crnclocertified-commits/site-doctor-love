const testimonials = [
  {
    quote: "The quality is unreal. Feels premium, looks premium. NC001 is just different.",
    name: "Marcus T.",
    location: "Melbourne, AU",
  },
  {
    quote: "Built Without Guidance hits different when you've actually lived it. This brand gets it.",
    name: "Jay K.",
    location: "Sydney, AU",
  },
  {
    quote: "Ordered the hoodie and joggers together — the fit is immaculate. CRN is the real deal.",
    name: "Dami O.",
    location: "Brisbane, AU",
  },
];

const SocialProof = () => {
  return (
    <section className="py-24 border-t border-border bg-card">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">Community</p>
          <h2 className="font-display text-5xl md:text-6xl text-foreground">What They're Saying</h2>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="surface p-8 border border-border hover:border-gold transition-colors">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="text-gold text-sm">★</span>
                ))}
              </div>
              <p className="text-foreground text-sm leading-relaxed italic mb-6">"{t.quote}"</p>
              <div>
                <p className="text-foreground text-sm font-semibold">{t.name}</p>
                <p className="text-muted-foreground text-xs tracking-wide mt-1">{t.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-6 border-t border-border pt-16">
          {[
            { value: "500+", label: "Orders shipped" },
            { value: "4.9★", label: "Average rating" },
            { value: "NC001", label: "First chapter" },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <p className="font-display text-5xl md:text-6xl text-gold">{s.value}</p>
              <p className="text-muted-foreground text-xs tracking-[0.2em] uppercase mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
