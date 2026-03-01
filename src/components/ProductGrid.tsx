const products = [
{
  id: 1,
  name: "NC001 — Built Without Guidance.",
  manifesto: "For those who figured it out alone.",
  price: "$69.00 AUD",
  priceLabel: "Chapter 001 Pricing",
  tag: "T-Shirt",
  image: "https://certifiedrichnarrative.com.au/cdn/shop/files/unisex-premium-t-shirt-navy-front-69648f7fb878c.jpg?v=1768198062&width=800",
  hoverImage: "https://certifiedrichnarrative.com.au/cdn/shop/files/unisex-premium-t-shirt-navy-back-69648f7fba20c.jpg?v=1768198062&width=800",
  url: "https://certifiedrichnarrative.com.au/products/unisex-premium-t-shirt?variant=48123830927579"
},
{
  id: 2,
  name: "NC001.2 — Purpose Over Pressure.",
  manifesto: "Stay the course. The pressure isn't real.",
  price: "$49.00 AUD",
  priceLabel: "Chapter 001 Pricing",
  tag: "Dad Hat",
  image: "https://certifiedrichnarrative.com.au/cdn/shop/files/classic-dad-hat-black-right-front-68e0b82adbb66.png?v=1768537478&width=800",
  hoverImage: "https://certifiedrichnarrative.com.au/cdn/shop/files/classic-dad-hat-navy-left-front-68e0b82adc0c4.png?v=1768537478&width=800",
  url: "https://certifiedrichnarrative.com.au/products/dad-hat?variant=48154559447259"
},
{
  id: 3,
  name: "NC001.3 — Earned, Never Given.",
  manifesto: "Carry what you worked for.",
  price: "$129.00 AUD",
  priceLabel: "Chapter 001 Pricing",
  tag: "Duffle Bag",
  image: "https://certifiedrichnarrative.com.au/cdn/shop/files/all-over-print-duffle-bag-white-left-front-68e0b8dcada8e.png?v=1768539960&width=800",
  hoverImage: "https://certifiedrichnarrative.com.au/cdn/shop/files/all-over-print-duffle-bag-white-top-68e0b8dcacdd9.png?v=1768539960&width=800",
  url: "https://certifiedrichnarrative.com.au/products/duffle-bag?variant=48154706772187"
},
{
  id: 4,
  name: "NC001.4 — The Armour.",
  manifesto: "Wear what you built.",
  price: "$159.00 AUD",
  priceLabel: "Chapter 001 Pricing",
  tag: "Hoodie",
  image: "https://certifiedrichnarrative.com.au/cdn/shop/files/unisex-essential-eco-hoodie-french-navy-front-68d8cff210f7b.png?v=1768543455&width=800",
  hoverImage: "https://certifiedrichnarrative.com.au/cdn/shop/files/unisex-essential-eco-hoodie-french-navy-back-68d8cff2114ef.png?v=1768543455&width=800",
  url: "https://certifiedrichnarrative.com.au/products/unisex-essential-eco-hoodie?variant=48154799833307"
},
{
  id: 5,
  name: "NC001.5 — Discipline in Motion.",
  manifesto: "Built for the ones who never stopped moving.",
  price: "$139.00 AUD",
  priceLabel: "Chapter 001 Pricing",
  tag: "Sweatpants",
  image: "https://certifiedrichnarrative.com.au/cdn/shop/files/unisex-heavyweight-sweatpants-navy-front-6969e83eb1542.jpg?v=1768550305&width=800",
  hoverImage: "https://certifiedrichnarrative.com.au/cdn/shop/files/unisex-heavyweight-sweatpants-navy-back-6969e83eb0d59.jpg?v=1768550305&width=800",
  url: "https://certifiedrichnarrative.com.au/products/heavyweight-sweatpants?variant=48155338244315"
}];


const ProductCard = ({ product }: {product: typeof products[0];}) => {
  return (
    <a
      href={product.url}
      target="_blank"
      rel="noreferrer"
      className="group block surface hover:surface-raised transition-colors"
      style={{ boxShadow: "var(--shadow-card)" }}>

      {/* Image */}
      <div className="relative overflow-hidden aspect-[3/4] bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-all duration-700 group-hover:opacity-0 group-hover:scale-105" />

        <img
          src={product.hoverImage}
          alt={product.name + " back"}
          className="absolute inset-0 w-full h-full object-cover opacity-0 scale-105 transition-all duration-700 group-hover:opacity-100 group-hover:scale-100" />


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
        <p className="text-muted-foreground text-xs italic leading-snug mb-2">{product.manifesto}</p>
        <div className="flex items-baseline gap-2">
          <p className="text-gold-accent text-sm font-medium">{product.price}</p>
          <span className="text-muted-foreground text-[9px] tracking-[0.15em] uppercase">{product.priceLabel}</span>
        </div>
      </div>
    </a>);

};

const ProductGrid = () => {
  return (
    <section id="shop" className="py-16 md:py-24 px-4 sm:px-6 md:px-12 max-w-screen-xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 md:mb-12 gap-4">
        <div>
          <p className="text-gold-accent text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-2">Chapter 001 — Built without Guidance</p>
          <h2 className="font-display text-3xl sm:text-5xl md:text-7xl text-foreground">​NARRATIVE <span className="text-gold">COLLECTION</span></h2>
        </div>
        <a
          href="https://certifiedrichnarrative.com.au/collections/nc001"
          target="_blank"
          rel="noreferrer"
          className="border border-border text-foreground text-xs tracking-[0.2em] uppercase px-8 py-3 hover:border-gold hover:text-gold transition-all self-start md:self-auto">

          View All
        </a>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
        {products.map((p) =>
        <ProductCard key={p.id} product={p} />
        )}
      </div>
    </section>);

};

export default ProductGrid;