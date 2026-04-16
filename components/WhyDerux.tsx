const usps = [
  {
    number: "01",
    title: "Ein Ansprechpartner – alles aus einer Hand",
    description:
      "Als Generalunternehmer übernehmen wir die komplette Verantwortung: von der Planung über die Beschaffung bis zur Inbetriebnahme.",
    highlight: "Generalunternehmer",
  },
  {
    number: "02",
    title: "Über 25 Jahre Branchenerfahrung",
    description:
      "Wir kennen die Textilindustrie in- und auswendig. Hunderte Projekte weltweit – von kleinen Anpassungen bis zu Greenfield-Projekten.",
    highlight: "500+ Projekte",
  },
  {
    number: "03",
    title: "Globale Präsenz, lokale Expertise",
    description:
      "Mit Erfahrung in über 50 Ländern verstehen wir internationale Anforderungen, lokale Normen und kulturelle Besonderheiten.",
    highlight: "50+ Länder",
  },
  {
    number: "04",
    title: "Termingerecht. Budgetsicher. Nachweisbar.",
    description:
      "Strukturierte Prozesse und transparentes Projektmanagement garantieren, dass Sie jederzeit wissen, wo Ihr Projekt steht.",
    highlight: "100% Qualität",
  },
];

export default function WhyDerux() {
  return (
    <section className="bg-[#f5f5f5] py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-px bg-[#CC0000]" />
              <span className="text-[#CC0000] text-[10px] font-black uppercase tracking-[0.4em]">Ihr Vorteil</span>
            </div>
            <h2 className="text-[clamp(40px,6vw,88px)] font-black leading-[0.9] tracking-tight text-[#0e0e0e]">
              Warum<br />
              <span style={{ color: "transparent", WebkitTextStroke: "2px #CC0000" }}>DERUX?</span>
            </h2>
          </div>
          <div>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Der Unterschied liegt nicht nur in unserer Erfahrung – sondern in
              unserer Verpflichtung zum Erfolg Ihres Projekts.
            </p>
            <a href="#kontakt"
              className="group inline-flex items-center gap-4 px-8 py-4 bg-[#CC0000] text-white font-black uppercase tracking-[0.2em] text-xs rounded-2xl hover:bg-[#0e0e0e] transition-colors duration-300">
              Kostenloses Erstgespräch
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {usps.map((usp) => (
            <div key={usp.number}
              className="group bg-white p-8 lg:p-10 rounded-2xl border border-gray-100 hover:border-[#CC0000]/30 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start justify-between mb-6">
                <span className="text-[10px] font-black text-gray-200 uppercase tracking-widest">{usp.number}</span>
                <span className="text-[10px] font-black text-[#CC0000] uppercase tracking-widest bg-[#CC0000]/5 px-3 py-1 rounded-full">
                  {usp.highlight}
                </span>
              </div>
              <div className="w-8 h-px bg-[#CC0000] mb-6 group-hover:w-16 transition-all duration-300" />
              <h3 className="text-lg font-black text-[#0e0e0e] leading-snug mb-4 tracking-tight">{usp.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{usp.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-[#0e0e0e] p-8 lg:p-10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-white font-black text-xl mb-1">Bereit für Ihr nächstes Projekt?</div>
            <div className="text-gray-500 text-sm">Unverbindliche Erstberatung – kostenlos und ohne Verpflichtung.</div>
          </div>
          <a href="#kontakt"
            className="shrink-0 group flex items-center gap-4 px-8 py-4 bg-[#CC0000] text-white font-black uppercase tracking-[0.2em] text-xs rounded-2xl hover:bg-white hover:text-[#CC0000] transition-all duration-300">
            Jetzt anfragen
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
