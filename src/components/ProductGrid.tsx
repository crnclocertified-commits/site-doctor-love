const products = [
  {
    id: 1,
    name: "NC001 — Built Without Guidance.",
    price: "$69.00 AUD",
    tag: "T-Shirt",
    image: "https://certifiedrichnarrative.com.au/cdn/shop/files/unisex-premium-t-shirt-navy-front-69648f7fb878c.jpg?v=1768198062&width=800",
    hoverImage: "https://certifiedrichnarrative.com.au/cdn/shop/files/unisex-premium-t-shirt-navy-back-69648f7fba20c.jpg?v=1768198062&width=800",
    url: "https://certifiedrichnarrative.com.au/products/unisex-premium-t-shirt?variant=48123830927579",
  },
  {
    id: 2,
    name: "NC001.5 — Discipline in Motion",
    price: "$139.00 AUD",
    tag: "Joggers",
    image: "https://certifiedrichnarrative.com.au/cdn/shop/files/IMG_0479.jpg?v=1770939065&width=800",
    hoverImage: "https://certifiedrichnarrative.com.au/cdn/shop/files/IMG_0420.jpg?v=1770938911&width=800",
    url: "https://certifiedrichnarrative.com.au/collections/all",
  },
  {
    id: 3,
    name: "NC001.4 — The Armour",
    price: "$159.00 AUD",
    tag: "Hoodie",
    image: "https://certifiedrichnarrative.com.au/cdn/shop/files/IMG_0420.jpg?v=1770938911&width=800",
    hoverImage: "https://certifiedrichnarrative.com.au/cdn/shop/files/IMG_0479.jpg?v=1770939065&width=800",
    url: "https://certifiedrichnarrative.com.au/collections/all",
  },
  {
    id: 4,
    name: "NC001.3 — Earned, Never Given.",
    price: "$129.00 AUD",
    tag: "Duffle Bag",
    image: "https://certifiedrichnarrative.com.au/cdn/shop/files/IMG_0420.jpg?v=1770938911&width=800",
    hoverImage: "https://certifiedrichnarrative.com.au/cdn/shop/files/IMG_0479.jpg?v=1770939065&width=800",
    url: "https://certifiedrichnarrative.com.au/collections/all",
  },
  {
    id: 5,
    name: "NC001.2 — Purpose Over Pressure",
    price: "$49.00 AUD",
    tag: "Dad Hat",
    image: "https://certifiedrichnarrative.com.au/cdn/shop/files/IMG_0479.jpg?v=1770939065&width=800",
    hoverImage: "https://certifiedrichnarrative.com.au/cdn/shop/files/IMG_0420.jpg?v=1770938911&width=800",
    url: "https://certifiedrichnarrative.com.au/collections/all",
  },
];

const ProductCard = ({ product }: { product: typeof products[0] }) => {
  return (
    <a
      href={product.url}
      target="_blank"
      rel="noreferrer"
      className="group block surface hover:surface-raised transition-colors"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[3/4] bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-all duration-700 group-hover:opacity-0 group-hover:scale-105"
        />
        <img
          src={product.hoverImage}
          alt={product.name + " back"}
          className="absolute inset-0 w-full h-full object-cover opacity-0 scale-105 transition-all duration-700 group-hover:opacity-100 group-hover:scale-100"
        />

        {/* Tag */}
        <span className="absolute top-3 left-3 bg-background/80 backdrop-blur-sm text-foreground text-[10px] tracking-[0.2em] uppercase px-3 py-1">
          {product.tag}
        </span>

        {/* Quick shop */}
        <div className="absolute bottom-0 left-0 right-0 bg-gold text-primary-foreground text-xs tracking-[0.2em] uppercase font-semibold text-center py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          Shop Now
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="text-sm font-semibold text-foreground tracking-wide leading-tight mb-1">{product.name}</h3>
        <p className="text-gold text-sm font-medium">{product.price}</p>
      </div>
    </a>
  );
};

const ProductGrid = () => {
  return (
    <section id="shop" className="py-24 px-6 md:px-12 max-w-screen-xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
        <div>
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-2">The Collection</p>
          <h2 className="font-display text-5xl md:text-7xl text-foreground">Shop NC001</h2>
        </div>
        <a
          href="https://certifiedrichnarrative.com.au/collections/all"
          target="_blank"
          rel="noreferrer"
          className="border border-border text-foreground text-xs tracking-[0.2em] uppercase px-8 py-3 hover:border-gold hover:text-gold transition-all self-start md:self-auto"
        >
          View All
        </a>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
