import crncloLogo from "@/assets/crnclo-logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <img src={crncloLogo} alt="CRNCLO" className="h-20 w-auto mb-4" style={{ mixBlendMode: "screen" }} />
            <p className="text-muted-foreground text-xs leading-relaxed max-w-xs">
              Certified Rich Narrative — The uniform for those who built their story without a blueprint, a mentor, or permission.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-foreground text-xs tracking-[0.2em] uppercase font-semibold mb-5">Shop</h4>
            <ul className="space-y-3">
              {[
                { name: "NC001 Collection", url: "https://certifiedrichnarrative.com.au/collections/nc001" },
                { name: "T-Shirts", url: "https://certifiedrichnarrative.com.au/collections/nc001" },
                { name: "Hoodies", url: "https://certifiedrichnarrative.com.au/collections/nc001" },
                { name: "Accessories", url: "https://certifiedrichnarrative.com.au/collections/nc001" },
                { name: "All Products", url: "https://certifiedrichnarrative.com.au/collections/all" },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-foreground text-xs hover:text-gold transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-foreground text-xs tracking-[0.2em] uppercase font-semibold mb-5">Info</h4>
            <ul className="space-y-3">
              {[
                { name: "Our Story", path: "/our-story" },
                { name: "Shipping & Returns", path: "/shipping-returns" },
                { name: "Size Guide", path: "/size-guide" },
                { name: "Contact Us", path: "/contact" },
                { name: "FAQ", path: "/faq" },
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.path} className="text-muted-foreground text-xs hover:text-gold transition-colors">
                    {item.name}
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
                { name: "Instagram", url: "https://instagram.com/crnclo" },
                { name: "TikTok", url: "https://tiktok.com/@crnclo" },
                { name: "Facebook", url: "https://facebook.com/crnclo" },
                { name: "YouTube", url: "https://youtube.com/@crnclo" },
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
            No Blueprint. No Excuses. One Standard. — Australia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
