import { useEffect, useState } from "react";

const messages = [
  "No Blueprint. No Excuses. One Standard. — Free shipping on orders over $150 AUD",
  "This isn't a fashion brand. It's a certified record of what you built without help.",
  "Worn by those who stopped waiting for permission. — NC001 available now.",
  "You didn't get handed a roadmap. Neither did we. — Free shipping over $150 AUD",
];

const AnnouncementBar = () => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % messages.length);
        setVisible(true);
      }, 400);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gold text-primary-foreground text-center py-2 px-3 sm:px-4 text-[9px] sm:text-xs font-semibold tracking-[0.1em] sm:tracking-[0.2em] uppercase overflow-hidden">
      <span
        style={{
          opacity: visible ? 1 : 0,
          transition: "opacity 0.4s ease",
          display: "inline-block",
        }}
      >
        {messages[index]}
      </span>
    </div>
  );
};

export default AnnouncementBar;
