import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnnouncementBar from "@/components/AnnouncementBar";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is CRNCLO / Certified Rich Narrative?",
    a: "CRNCLO is a streetwear brand built on self-made philosophy. Each collection — Narrative (NC), Rich (RC), and Certified (CC) — represents a stage of personal evolution. It's clothing for those who built their story without a blueprint.",
  },
  {
    q: "What is NC001?",
    a: "NC001 is our founding chapter — the first-ever drop from the Narrative Collection. It's a limited run that won't restock. Once it's gone, it's gone. The founding pieces belong to those who moved first.",
  },
  {
    q: "Will NC001 restock?",
    a: "No. NC001 is a limited first run and will not be restocked. This is intentional — each chapter closes when it sells out, and we move forward to the next.",
  },
  {
    q: "How do I know what size to order?",
    a: "Check our Size Guide page for detailed measurements. Our pieces are designed with a relaxed, streetwear-forward fit. If you prefer a more fitted look, we recommend sizing down.",
  },
  {
    q: "Where do you ship?",
    a: "We ship across Australia and internationally. Standard Australian shipping takes 5–10 business days, express takes 1–3 business days, and international orders take 10–20 business days.",
  },
  {
    q: "What is your return policy?",
    a: "Returns are accepted within 30 days of delivery. Items must be unworn, unwashed, and in original condition with tags attached. Sale items are final sale. Visit our Shipping & Returns page for full details.",
  },
  {
    q: "What is NC002?",
    a: "NC002 is the next chapter of the Narrative Collection. It will ship in full CRN branded packaging and represent the brand's evolution. Join the waitlist on our homepage to be the first to know when it drops.",
  },
  {
    q: "How do I contact support?",
    a: "Email us at info@certifiedrichnarrative.com.au. We typically respond within 24–48 hours. For order-related enquiries, include your order number for faster assistance.",
  },
  {
    q: "Where is CRNCLO based?",
    a: "We're proudly based in Melbourne, Australia. Born in AU, built for the world.",
  },
  {
    q: "What are the RC and CC collections?",
    a: "Rich (RC) and Certified (CC) are the second and third stages of the CRNCLO evolution. They unlock when the founder earns it — through documented knowledge, proof of profitability, and full transparency. Follow Narrative Studio for updates.",
  },
];

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnnouncementBar />
      <Navbar />
      <main style={{ paddingTop: "36px" }}>
        <section className="py-24">
          <div className="max-w-screen-md mx-auto px-6 md:px-12">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Questions</p>
            <h1 className="font-display text-5xl md:text-7xl text-foreground leading-none mb-10">FAQ</h1>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border-border">
                  <AccordionTrigger className="text-left text-sm text-foreground hover:text-gold hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-12 border-t border-border pt-8">
              <p className="text-muted-foreground text-xs leading-relaxed">
                Still have questions? Reach out at{" "}
                <a href="mailto:info@certifiedrichnarrative.com.au" className="text-gold hover:underline">
                  info@certifiedrichnarrative.com.au
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
