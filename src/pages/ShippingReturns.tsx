import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnnouncementBar from "@/components/AnnouncementBar";

const ShippingReturns = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnnouncementBar />
      <Navbar />
      <main style={{ paddingTop: "36px" }}>
        <section className="py-24">
          <div className="max-w-screen-md mx-auto px-6 md:px-12">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Policies</p>
            <h1 className="font-display text-5xl md:text-7xl text-foreground leading-none mb-10">Shipping & Returns</h1>

            <div className="space-y-10">
              {/* Shipping */}
              <div>
                <h2 className="font-display text-2xl text-foreground mb-4">Shipping</h2>
                <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                  <p>All orders are processed within <span className="text-foreground font-medium">1–3 business days</span>. You'll receive a confirmation email with tracking once your order ships.</p>
                  <div className="border border-border p-6 space-y-3">
                    <div className="flex justify-between text-xs">
                      <span className="text-foreground font-medium">Australia (Standard)</span>
                      <span>5–10 business days</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-foreground font-medium">Australia (Express)</span>
                      <span>1–3 business days</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-foreground font-medium">International</span>
                      <span>10–20 business days</span>
                    </div>
                  </div>
                  <p>Shipping costs are calculated at checkout based on your location and selected method.</p>
                </div>
              </div>

              {/* Returns */}
              <div>
                <h2 className="font-display text-2xl text-foreground mb-4">Returns & Exchanges</h2>
                <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                  <p>We want you to be fully satisfied with your purchase. If something's not right, we've got you.</p>
                  <ul className="space-y-2">
                    {[
                      "Returns accepted within 30 days of delivery",
                      "Items must be unworn, unwashed, and in original condition with tags attached",
                      "Sale items are final sale and cannot be returned",
                      "Exchanges are subject to availability",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-xs">
                        <div className="w-1 h-1 bg-gold flex-shrink-0 mt-1.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p>
                    To initiate a return, email us at{" "}
                    <a href="mailto:info@certifiedrichnarrative.com.au" className="text-gold hover:underline">
                      info@certifiedrichnarrative.com.au
                    </a>{" "}
                    with your order number and reason for return.
                  </p>
                </div>
              </div>

              {/* Damages */}
              <div>
                <h2 className="font-display text-2xl text-foreground mb-4">Damaged or Defective Items</h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  If your item arrives damaged or defective, contact us within 7 days of delivery with photos and we'll arrange a replacement or full refund — no friction, no hassle.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ShippingReturns;
