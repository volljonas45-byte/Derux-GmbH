import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Engineering",
    subtitle: "Technische Exzellenz",
    description:
      "Maßgeschneiderte Konzepte und Lösungen für komplexe industrielle Anforderungen – von der ersten Planung bis zur Inbetriebnahme.",
    features: ["Prozessplanung", "Anlagenengineering", "Technische Beratung", "Projektmanagement"],
    href: "/leistungen/engineering",
  },
  {
    number: "02",
    title: "Contracting",
    subtitle: "Schlüsselfertig & termingerecht",
    description:
      "Als Generalunternehmer übernehmen wir die vollständige Realisierung Ihrer Projekte – budgetsicher und in höchster Qualität.",
    features: ["Generalunternehmerschaft", "Schlüsselfertige Projekte", "Lieferantenmanagement", "Qualitätssicherung"],
    href: "/leistungen/contracting",
  },
  {
    number: "03",
    title: "Services",
    subtitle: "Weltweiter Betrieb",
    description:
      "Unser umfassendes Serviceangebot gewährleistet den störungsfreien Betrieb Ihrer Anlagen – rund um die Uhr, weltweit.",
    features: ["Wartung & Instandhaltung", "Ersatzteilversorgung", "Schulungen & Training", "After-Sales Support"],
    href: "/leistungen/services",
  },
];

export default function Services() {
  return (
    <section id="leistungen" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 pt-28 pb-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-px bg-[#CC0000]" />
              <span className="text-[#CC0000] text-[10px] font-black uppercase tracking-[0.4em]">Was wir tun</span>
            </div>
            <h2 className="text-[clamp(40px,6vw,88px)] font-black leading-[0.9] tracking-tight text-[#0e0e0e]">
              Unsere<br />
              <span style={{ color: "transparent", WebkitTextStroke: "2px #CC0000" }}>Leistungen</span>
            </h2>
          </div>
          <p className="text-gray-400 text-base leading-relaxed max-w-sm lg:text-right">
            Vollständiges Leistungsspektrum für die Textilindustrie – von der Idee bis zum laufenden Betrieb.
          </p>
        </div>
      </div>

      {/* Service rows */}
      <div className="border-t border-gray-100">
        {services.map((s) => (
          <Link
            key={s.title}
            href={s.href}
            className="group block border-b border-gray-100 hover:bg-[#0e0e0e] transition-colors duration-500"
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-16 py-10 grid grid-cols-12 gap-6 items-center">
              <div className="col-span-2 md:col-span-1">
                <span className="text-4xl font-black text-gray-100 group-hover:text-[#CC0000] transition-colors duration-500">
                  {s.number}
                </span>
              </div>

              <div className="col-span-10 md:col-span-3">
                <div className="text-xs text-gray-400 group-hover:text-gray-500 uppercase tracking-widest mb-1 transition-colors">
                  {s.subtitle}
                </div>
                <h3 className="text-3xl lg:text-4xl font-black text-[#0e0e0e] group-hover:text-white transition-colors duration-500 tracking-tight">
                  {s.title}
                </h3>
              </div>

              <div className="hidden md:block col-span-4">
                <p className="text-sm text-gray-400 group-hover:text-gray-400 leading-relaxed transition-colors">
                  {s.description}
                </p>
              </div>

              <div className="hidden lg:flex col-span-3 flex-wrap gap-2">
                {s.features.map((f) => (
                  <span key={f}
                    className="text-[10px] uppercase tracking-widest px-3 py-1.5 border border-gray-200 text-gray-400 rounded-full group-hover:border-white/10 group-hover:text-gray-500 transition-colors duration-500">
                    {f}
                  </span>
                ))}
              </div>

              <div className="col-span-1 flex justify-end">
                <div className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded-xl group-hover:border-[#CC0000] group-hover:bg-[#CC0000] transition-all duration-300">
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm">→</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
