"use client";

import { useState, useEffect } from "react";

export default function FloatingCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`fixed bottom-8 right-8 z-50 transition-all duration-500 ${
      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
    }`}>
      <a href="#kontakt"
        className="group flex items-center gap-3 px-6 py-4 bg-[#CC0000] text-white font-black uppercase tracking-[0.2em] text-[11px] shadow-2xl shadow-[#CC0000]/30 rounded-2xl hover:bg-[#0e0e0e] hover:shadow-black/30 transition-all duration-300">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-60" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
        </span>
        Jetzt anfragen
        <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
      </a>
    </div>
  );
}
