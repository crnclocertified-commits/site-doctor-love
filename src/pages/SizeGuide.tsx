import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnnouncementBar from "@/components/AnnouncementBar";

const SizeGuide = () => {
  const sizes = [
    { size: "S", chest: "92", waist: "76", length: "70" },
    { size: "M", chest: "97", waist: "81", length: "72" },
    { size: "L", chest: "102", waist: "86", length: "74" },
    { size: "XL", chest: "107", waist: "91", length: "76" },
    { size: "XXL", chest: "112", waist: "96", length: "78" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnnouncementBar />
      <Navbar />
      <main style={{ paddingTop: "36px" }}>
        <section className="py-24">
          <div className="max-w-screen-md mx-auto px-6 md:px-12">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Find Your Fit</p>
            <h1 className="font-display text-5xl md:text-7xl text-foreground leading-none mb-10">Size Guide</h1>

            <p className="text-muted-foreground text-sm leading-relaxed mb-8">
              Our pieces are designed with a <span className="text-foreground font-medium">relaxed, streetwear-forward fit</span>. If you prefer a more fitted look, we recommend sizing down. All measurements are in centimetres (cm).
            </p>

            {/* T-Shirts */}
            <div className="mb-12">
              <h2 className="font-display text-2xl text-foreground mb-6">T-Shirts</h2>
              <div className="border border-border overflow-hidden">
                <div className="grid grid-cols-4 bg-secondary/40 text-xs tracking-[0.2em] uppercase text-foreground font-semibold">
                  <div className="p-4 border-r border-border">Size</div>
                  <div className="p-4 border-r border-border">Chest</div>
                  <div className="p-4 border-r border-border">Waist</div>
                  <div className="p-4">Length</div>
                </div>
                {sizes.map((row) => (
                  <div key={row.size} className="grid grid-cols-4 text-xs text-muted-foreground border-t border-border">
                    <div className="p-4 border-r border-border text-foreground font-medium">{row.size}</div>
                    <div className="p-4 border-r border-border">{row.chest} cm</div>
                    <div className="p-4 border-r border-border">{row.waist} cm</div>
                    <div className="p-4">{row.length} cm</div>
                  </div>
                ))}
              </div>
            </div>

            {/* How to measure */}
            <div>
              <h2 className="font-display text-2xl text-foreground mb-6">How to Measure</h2>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                {[
                  { label: "Chest", desc: "Measure around the fullest part of your chest, keeping the tape level." },
                  { label: "Waist", desc: "Measure around your natural waistline, keeping the tape comfortably loose." },
                  { label: "Length", desc: "Measure from the highest point of the shoulder to the bottom hem." },
                ].map((m) => (
                  <div key={m.label} className="flex gap-4">
                    <span className="text-gold text-xs tracking-[0.2em] uppercase font-semibold w-16 flex-shrink-0 pt-0.5">{m.label}</span>
                    <p>{m.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 border-t border-border pt-8">
              <p className="text-muted-foreground text-xs leading-relaxed">
                Still unsure? Reach out to us at{" "}
                <a href="mailto:info@certifiedrichnarrative.com.au" className="text-gold hover:underline">
                  info@certifiedrichnarrative.com.au
                </a>{" "}
                and we'll help you find the right fit.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SizeGuide;
