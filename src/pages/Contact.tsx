import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnnouncementBar from "@/components/AnnouncementBar";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnnouncementBar />
      <Navbar />
      <main style={{ paddingTop: "36px" }}>
        <section className="py-24">
          <div className="max-w-screen-md mx-auto px-6 md:px-12">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Get In Touch</p>
            <h1 className="font-display text-5xl md:text-7xl text-foreground leading-none mb-10">Contact Us</h1>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-foreground text-xs tracking-[0.2em] uppercase font-semibold mb-3">Email</h3>
                  <a href="mailto:support@certifiedrichnarrative.com.au" className="text-gold text-sm hover:underline">
                    support@certifiedrichnarrative.com.au
                  </a>
                </div>
                <div>
                  <h3 className="text-foreground text-xs tracking-[0.2em] uppercase font-semibold mb-3">Location</h3>
                  <p className="text-muted-foreground text-sm">Melbourne, Australia</p>
                </div>
                <div>
                  <h3 className="text-foreground text-xs tracking-[0.2em] uppercase font-semibold mb-3">Response Time</h3>
                  <p className="text-muted-foreground text-sm">We typically respond within 24–48 hours.</p>
                </div>
                <div>
                  <h3 className="text-foreground text-xs tracking-[0.2em] uppercase font-semibold mb-3">Follow Us</h3>
                  <div className="flex gap-6">
                    {[
                      { name: "Instagram", url: "https://instagram.com" },
                      { name: "TikTok", url: "https://tiktok.com" },
                      { name: "Facebook", url: "https://facebook.com" },
                    ].map((s) => (
                      <a key={s.name} href={s.url} target="_blank" rel="noreferrer" className="text-muted-foreground text-xs hover:text-gold transition-colors">
                        {s.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick note */}
              <div className="border border-border p-8">
                <h3 className="font-display text-2xl text-foreground mb-4">Before You Reach Out</h3>
                <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                  <p>Check if your question is covered in our <a href="/faq" className="text-gold hover:underline">FAQ</a> or <a href="/shipping-returns" className="text-gold hover:underline">Shipping & Returns</a> pages first.</p>
                  <p>For order-related enquiries, please include your <span className="text-foreground font-medium">order number</span> in your email so we can assist you faster.</p>
                  <p>For collaborations, press, or wholesale enquiries, include a brief overview and we'll get back to you.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
