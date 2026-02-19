import { useEffect, useState } from "react";

const messages = [
  "No Blueprint. No Excuses. One Standard. — Free shipping on orders over $150 AUD",
  "Not a fashion brand. A certified record of what you built.",
  "The uniform for those who dared to write their own story.",
  "We're uniquely in this together. — Free shipping on orders over $150 AUD",
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
    <div className="bg-gold text-primary-foreground text-center py-2 px-4 text-xs font-semibold tracking-[0.2em] uppercase overflow-hidden">
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
