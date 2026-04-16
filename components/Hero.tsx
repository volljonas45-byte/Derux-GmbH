export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0e0e0e]">

      {/* Giant ghost watermark */}
      <div className="absolute inset-0 flex items-center justify-end pointer-events-none select-none overflow-hidden" aria-hidden>
        <span className="text-[22vw] font-black tracking-tighter leading-none pr-4"
          style={{ color: "transparent", WebkitTextStroke: "1px rgba(255,255,255,0.04)" }}>
          DERUX
        </span>
      </div>

      {/* Diagonal red slash */}
      <div className="absolute top-0 right-0 w-[480px] h-screen pointer-events-none"
        style={{ background: "linear-gradient(135deg, transparent 50%, #CC0000 50%)", opacity: 0.08 }} />

      {/* Red vertical bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#CC0000] rounded-r-full" />

      {/* Scan line */}
      <div className="absolute left-0 right-0 h-px bg-white/5 top-1/2" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 w-full pt-28 pb-48">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-14 h-px bg-[#CC0000]" />
          <span className="text-[#CC0000] text-xs font-bold uppercase tracking-[0.4em]">
            DERUX GmbH — Heidelberg
          </span>
        </div>

        <h1 className="font-black leading-[0.9] mb-10 tracking-tight">
          <span className="block text-[clamp(56px,9vw,130px)] text-white">Engineering.</span>
          <span className="block text-[clamp(56px,9vw,130px)]"
            style={{ color: "transparent", WebkitTextStroke: "2px #CC0000" }}>
            Contracting.
          </span>
          <span className="block text-[clamp(56px,9vw,130px)] text-white">Services.</span>
        </h1>

        <div className="flex flex-col lg:flex-row lg:items-end gap-10 lg:gap-20 mt-14">
          <p className="text-gray-400 text-base lg:text-lg leading-relaxed max-w-md">
            Innovative Lösungen für die effiziente Produktion von Textilien,
            Vliesstoffen, Kompositen, Chemiefasern und Naturfasern – weltweit.
          </p>
          <div className="flex flex-wrap gap-4 shrink-0">
            <a href="#leistungen"
              className="group flex items-center gap-4 px-8 py-4 bg-[#CC0000] text-white font-bold uppercase tracking-[0.2em] text-xs rounded-2xl hover:bg-white hover:text-[#CC0000] transition-all duration-300">
              Leistungen
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
            <a href="#kontakt"
              className="group flex items-center gap-4 px-8 py-4 border border-white/20 text-white/70 font-bold uppercase tracking-[0.2em] text-xs rounded-2xl hover:border-white/60 hover:text-white transition-all duration-300">
              Kontakt
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/[0.06] bg-white/[0.02] backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.06]">
          {[
            { value: "25+", label: "Jahre Erfahrung" },
            { value: "50+", label: "Länder weltweit" },
            { value: "500+", label: "Projekte" },
            { value: "100%", label: "Qualität" },
          ].map((stat) => (
            <div key={stat.label} className="px-6 py-7 first:pl-0">
              <div className="text-2xl font-black text-white">{stat.value}</div>
              <div className="text-gray-600 text-[10px] uppercase tracking-[0.25em] mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-20 right-8 lg:right-14 flex flex-col items-center gap-3">
        <div className="text-[10px] text-gray-600 uppercase tracking-[0.3em] [writing-mode:vertical-rl]">Scroll</div>
        <div className="w-px h-12 bg-gradient-to-b from-gray-600 to-transparent" />
      </div>
    </section>
  );
}
