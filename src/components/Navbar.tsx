import { ShoppingBag, Search, Menu, X } from "lucide-react";
import { useState } from "react";
import crncloLogo from "@/assets/crnclo-logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 z-50" style={{ top: "36px" }}>
      <nav className="bg-background/95 backdrop-blur-md border-b border-border px-6 md:px-12 py-1 flex items-center justify-between overflow-visible">
        {/* Left nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="https://certifiedrichnarrative.com.au/collections/nc001" target="_blank" rel="noreferrer" className="text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors">Shop</a>
          <a href="/our-story" className="text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors">Our Story</a>
          <a href="https://certifiedrichnarrative.com.au/collections/nc001" target="_blank" rel="noreferrer" className="text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors">NC001</a>
        </div>

        {/* Logo */}
        <a href="/" className="text-center flex-1 md:flex-none flex items-center justify-center">
          <img src={crncloLogo} alt="CRNCLO" className="h-32 md:h-44 w-auto" style={{ mixBlendMode: "screen" }} />
        </a>

        {/* Right nav */}
        <div className="flex items-center gap-4">
          <button className="hidden md:flex text-muted-foreground hover:text-foreground transition-colors">
            <Search size={18} />
          </button>
          <a
            href="https://certifiedrichnarrative.com.au/collections/nc001"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <ShoppingBag size={18} />
          </a>
          <button
            className="md:hidden text-muted-foreground hover:text-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-background border-b border-border px-6 py-6 flex flex-col gap-6">
          <a href="https://certifiedrichnarrative.com.au/collections/nc001" target="_blank" rel="noreferrer" className="text-sm tracking-[0.2em] uppercase text-muted-foreground" onClick={() => setMenuOpen(false)}>Shop</a>
          <a href="/our-story" className="text-sm tracking-[0.2em] uppercase text-muted-foreground" onClick={() => setMenuOpen(false)}>Our Story</a>
          <a href="https://certifiedrichnarrative.com.au/collections/nc001" target="_blank" rel="noreferrer" className="text-sm tracking-[0.2em] uppercase text-muted-foreground" onClick={() => setMenuOpen(false)}>NC001</a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
