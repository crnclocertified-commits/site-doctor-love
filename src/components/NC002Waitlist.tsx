import { useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

const emailSchema = z.string().trim().email({ message: "Enter a valid email address." }).max(255);

const NC002Waitlist = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const result = emailSchema.safeParse(email);
    if (!result.success) {
      setError(result.error.errors[0].message);
      return;
    }

    const { error: dbError } = await supabase
      .from("email_signups")
      .insert({ email: result.data, source: "nc002_waitlist" as const });

    if (dbError && dbError.code !== "23505") {
      setError("Something went wrong. Please try again.");
      return;
    }

    setSubmitted(true);
  };

  return (
    <section className="py-16 md:py-24 border-t border-border relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-secondary/20 pointer-events-none" />

      <div className="relative max-w-screen-xl mx-auto px-6 md:px-12">
        <div className="max-w-2xl mx-auto text-center">

          {/* Chapter badge */}
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="h-px w-10 bg-foreground/15" />
            <span className="text-foreground/40 text-xs tracking-[0.35em] uppercase">Coming Next</span>
            <div className="h-px w-10 bg-foreground/15" />
          </div>

          <h2 className="font-display text-3xl sm:text-5xl md:text-7xl text-foreground leading-none mb-4">
            The Next<br />Chapter.
          </h2>

          <p className="text-muted-foreground text-sm tracking-[0.15em] uppercase mb-4">
            NC002 — The Next Chapter
          </p>

          <p className="text-muted-foreground text-sm leading-relaxed max-w-md mx-auto mb-10">
            NC001 was the proof. NC002 is the evolution — full branded packaging, a deeper product experience, and a community who earned their spot by moving first. No restocks. No late arrivals. First access only.
          </p>

          {submitted ? (
            <div className="border border-foreground/20 px-8 py-6 bg-foreground/5">
              <p className="text-foreground font-display text-xl mb-1">You're locked in.</p>
              <p className="text-muted-foreground text-xs tracking-[0.2em] uppercase">
                You'll hear from us before the world does.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError("");
                  }}
                  maxLength={255}
                  className="w-full bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm px-5 py-4 focus:outline-none focus:border-foreground/30 transition-colors"
                  aria-label="Email address for NC002 waitlist"
                />
                {error && (
                  <p className="text-destructive text-xs mt-2 text-left">{error}</p>
                )}
              </div>
              <button
                type="submit"
                className="bg-foreground text-background font-semibold text-xs tracking-[0.25em] uppercase px-8 py-4 hover:bg-foreground/90 transition-all whitespace-nowrap"
              >
                Be First
              </button>
            </form>
          )}

          <p className="text-muted-foreground text-xs mt-5 tracking-[0.15em] uppercase opacity-60">
            No noise. No spam. Just first access — when it matters.
          </p>

        </div>
      </div>
    </section>
  );
};

export default NC002Waitlist;
