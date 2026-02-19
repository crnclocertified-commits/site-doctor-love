const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-display text-2xl text-foreground tracking-widest mb-4">CRN</h3>
            <p className="text-muted-foreground text-xs leading-relaxed max-w-xs">
              Certified Rich Narrative — The uniform for those who built their story without a blueprint, a mentor, or permission.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-foreground text-xs tracking-[0.2em] uppercase font-semibold mb-5">Shop</h4>
            <ul className="space-y-3">
              {["NC001 Collection", "T-Shirts", "Hoodies", "Accessories", "All Products"].map((item) => (
                <li key={item}>
                  <a
                    href="https://certifiedrichnarrative.com.au/collections/all"
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-foreground text-xs hover:text-foreground transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-foreground text-xs tracking-[0.2em] uppercase font-semibold mb-5">Info</h4>
            <ul className="space-y-3">
              {["Our Story", "Shipping & Returns", "Size Guide", "Contact Us", "FAQ"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground text-xs hover:text-foreground transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-foreground text-xs tracking-[0.2em] uppercase font-semibold mb-5">Follow</h4>
            <ul className="space-y-3">
              {[
                { name: "Instagram", url: "https://instagram.com" },
                { name: "TikTok", url: "https://tiktok.com" },
                { name: "Facebook", url: "https://facebook.com" },
              ].map((s) => (
                <li key={s.name}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-foreground text-xs hover:text-gold transition-colors"
                  >
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs tracking-wide">
            © {new Date().getFullYear()} Certified Rich Narrative. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs tracking-wide">
            Built Without Guidance. — Australia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
