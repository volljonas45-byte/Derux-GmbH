import Image from "next/image";

export default function About() {
  return (
    <section id="ueber-uns" className="bg-white">

      {/* Full-bleed image strip with text overlay */}
      <div className="relative overflow-hidden">
        <div className="relative h-[70vh] min-h-[480px]">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/event-leinwand.png`}
            alt="DERUX GmbH – International präsent"
            fill
            className="object-cover object-center"
            style={{ transform: "rotate(-4.5deg) scale(1.1)", transformOrigin: "center center" }}
            priority
          />
          {/* Dark overlay – heavy on left for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

          {/* Overlay text */}
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-7xl mx-auto px-6 lg:px-16 w-full pb-14">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-px bg-[#CC0000]" />
                <span className="text-[#CC0000] text-[10px] font-black uppercase tracking-[0.4em]">
                  Über uns
                </span>
              </div>
              <h2 className="text-[clamp(40px,6vw,96px)] font-black leading-[0.88] tracking-tight text-white mb-0">
                Globale{" "}
                <span
                  style={{
                    color: "transparent",
                    WebkitTextStroke: "2px #CC0000",
                  }}
                >
                  Expertise.
                </span>
              </h2>
            </div>
          </div>

          {/* Red side accent */}
          <div className="absolute top-0 bottom-0 left-0 w-1 bg-[#CC0000]" />
        </div>
      </div>

      {/* Content below image */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left – body text */}
          <div>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Die DERUX GmbH ist ein international tätiges Unternehmen mit Sitz
              in Heidelberg. Wir sind auf die Planung, Lieferung und Realisierung
              von Produktionsanlagen für die Textilindustrie spezialisiert.
            </p>
            <p className="text-gray-500 leading-relaxed mb-10">
              Mit unserem erfahrenen Team aus Ingenieuren, Projektmanagern und
              Technikern begleiten wir unsere Kunden von der ersten Idee bis zur
              laufenden Produktion – zuverlässig, kompetent und weltweit.
            </p>
            <a
              href="#kontakt"
              className="inline-flex items-center gap-4 text-[#CC0000] font-bold uppercase tracking-[0.25em] text-xs border-b border-[#CC0000] pb-1 hover:gap-6 transition-all duration-300"
            >
              Kontakt aufnehmen <span>→</span>
            </a>
          </div>

          {/* Right – values grid */}
          <div className="grid grid-cols-2 gap-0 border border-gray-100">
            {[
              { num: "01", title: "Zuverlässigkeit", desc: "Verlässlicher Partner auf allen Ebenen" },
              { num: "02", title: "Qualität", desc: "Höchste Standards in jedem Projekt" },
              { num: "03", title: "Innovation", desc: "Moderne Lösungen für die Industrie" },
              { num: "04", title: "Partnerschaft", desc: "Langfristige Kundenbeziehungen" },
            ].map((v, i) => (
              <div
                key={v.title}
                className={`p-7 border-gray-100 ${i === 0 || i === 1 ? "border-b" : ""} ${i % 2 === 0 ? "border-r" : ""}`}
              >
                <div className="text-[10px] text-gray-300 font-black uppercase tracking-widest mb-3">
                  {v.num}
                </div>
                <div className="w-5 h-px bg-[#CC0000] mb-4" />
                <div className="text-sm font-bold text-[#0e0e0e] mb-2">{v.title}</div>
                <div className="text-xs text-gray-400 leading-relaxed">{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wide stats bar */}
      <div className="border-t border-gray-100 bg-[#0e0e0e]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
          {[
            { val: "25+", label: "Jahre Erfahrung" },
            { val: "50+", label: "Länder" },
            { val: "500+", label: "Projekte" },
            { val: "1990er", label: "Gegründet" },
          ].map((item) => (
            <div key={item.label} className="px-6 lg:px-10 py-10 first:pl-0">
              <div className="text-3xl font-black text-white mb-1">{item.val}</div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-gray-600">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
