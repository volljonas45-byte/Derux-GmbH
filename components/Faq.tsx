"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Für welche Branchen ist DERUX GmbH tätig?",
    a: "DERUX ist spezialisiert auf die gesamte Textilindustrie: Textilien, Vliesstoffe (Nonwovens), Komposite, Chemiefasern (Man-Made Fibers) und Naturfasern. Wir begleiten Unternehmen von der Planung bis zur laufenden Produktion.",
  },
  {
    q: "Arbeitet DERUX international?",
    a: "Ja – wir sind in über 50 Ländern tätig und haben hunderte Projekte weltweit erfolgreich abgeschlossen. Unsere Teams kennen internationale Normen, lokale Anforderungen und sprechen mehrere Sprachen.",
  },
  {
    q: "Was bedeutet Generalunternehmerschaft bei DERUX?",
    a: "Als Generalunternehmer übernehmen wir die vollständige Verantwortung für Ihr Projekt – von der ersten Planung über Beschaffung, Lieferantenmanagement und Montage bis zur Inbetriebnahme. Sie haben einen einzigen Ansprechpartner für alles.",
  },
  {
    q: "Wie schnell können wir ein Erstgespräch vereinbaren?",
    a: "Sehr schnell – schreiben Sie uns über das Kontaktformular oder rufen Sie direkt an. Wir melden uns innerhalb von 24 Stunden bei Ihnen und vereinbaren ein unverbindliches Erstgespräch.",
  },
  {
    q: "Bietet DERUX auch After-Sales Support und Wartung?",
    a: "Ja. Unser Service-Team begleitet Sie auch nach der Inbetriebnahme: Wartung, Ersatzteilversorgung, Schulungen und technischer Support – weltweit und rund um die Uhr.",
  },
  {
    q: "Für welche Projektgrößen ist DERUX geeignet?",
    a: "Wir betreuen sowohl kleinere Optimierungs- und Erweiterungsprojekte als auch komplette Greenfield-Projekte. Kontaktieren Sie uns – wir prüfen gerne, wie wir Ihr Vorhaben am besten unterstützen können.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-white py-28 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left */}
          <div className="lg:sticky lg:top-32 self-start">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-px bg-[#CC0000]" />
              <span className="text-[#CC0000] text-[10px] font-black uppercase tracking-[0.4em]">
                FAQ
              </span>
            </div>
            <h2 className="text-[clamp(36px,5vw,72px)] font-black leading-[0.9] tracking-tight text-[#0e0e0e] mb-8">
              Häufige
              <br />
              <span style={{ color: "transparent", WebkitTextStroke: "2px #CC0000" }}>
                Fragen.
              </span>
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-10 max-w-sm">
              Haben Sie weitere Fragen? Wir beantworten diese gerne persönlich.
            </p>
            <a
              href="#kontakt"
              className="group inline-flex items-center gap-4 text-[#CC0000] font-black uppercase tracking-[0.25em] text-xs border-b border-[#CC0000] pb-1 hover:gap-6 transition-all duration-300"
            >
              Direkt anfragen <span>→</span>
            </a>
          </div>

          {/* Right – accordion */}
          <div className="divide-y divide-gray-100">
            {faqs.map((faq, i) => (
              <div key={i} className="group">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between py-6 text-left gap-6"
                  aria-expanded={open === i}
                >
                  <span className={`font-bold text-sm leading-snug transition-colors duration-200 ${open === i ? "text-[#CC0000]" : "text-[#0e0e0e]"}`}>
                    {faq.q}
                  </span>
                  <span
                    className={`shrink-0 w-8 h-8 flex items-center justify-center border transition-all duration-300 text-sm ${
                      open === i
                        ? "border-[#CC0000] bg-[#CC0000] text-white rotate-45"
                        : "border-gray-200 text-gray-400 group-hover:border-[#CC0000] group-hover:text-[#CC0000]"
                    }`}
                  >
                    +
                  </span>
                </button>
                {open === i && (
                  <div className="pb-6 pr-14">
                    <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
