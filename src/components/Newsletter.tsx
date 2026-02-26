import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="py-16 md:py-24 border-t border-border relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-gold opacity-[0.04] blur-3xl" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Stay in the loop</p>
        <h2 className="font-display text-5xl md:text-7xl text-foreground mb-4">
          ​Join the Narrative     
        </h2>
        <p className="text-muted-foreground text-sm leading-relaxed mb-10 max-w-md mx-auto">
          Be first to hear about new chapters, drops, and exclusive releases. No noise — only what matters.
        </p>

        {submitted ?
        <div className="border border-gold text-gold text-sm tracking-[0.1em] py-4 px-8 inline-block">
            ✓ You're in. Welcome to the narrative.
          </div> :

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-lg mx-auto">
            <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 bg-muted border border-border text-foreground placeholder:text-muted-foreground text-sm px-6 py-4 outline-none focus:border-gold transition-colors" />

            <button
            type="submit"
            className="gradient-gold text-primary-foreground font-semibold text-xs tracking-[0.25em] uppercase px-8 py-4 hover:opacity-90 transition-all whitespace-nowrap">

              Join Now
            </button>
          </form>
        }

        <p className="text-muted-foreground text-xs mt-4 tracking-wide">No spam. Unsubscribe anytime.</p>
      </div>
    </section>);

};

export default Newsletter;