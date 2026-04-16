const industries = [
  { number: "01", en: "Textiles", de: "Textilien", description: "Gewebe, Gestricke und technische Textilien für anspruchsvolle Anwendungen." },
  { number: "02", en: "Nonwovens", de: "Vliesstoffe", description: "Spunbond-, Meltblown- und Airlaid-Linien höchster Effizienz." },
  { number: "03", en: "Composites", de: "Komposite", description: "Faserverstärkte Verbundwerkstoffe für Hightech-Anwendungen." },
  { number: "04", en: "Man-Made Fibers", de: "Chemiefasern", description: "Synthetische und regenerierte Fasern – optimiert für maximale Effizienz." },
  { number: "05", en: "Natural Fibers", de: "Naturfasern", description: "Nachhaltige Verarbeitung von Baumwolle, Wolle, Jute und Co." },
];

export default function Industries() {
  return (
    <section id="branchen" className="bg-[#0e0e0e] py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-px bg-[#CC0000]" />
              <span className="text-[#CC0000] text-[10px] font-black uppercase tracking-[0.4em]">Unsere Expertise</span>
            </div>
            <h2 className="text-[clamp(40px,6vw,88px)] font-black leading-[0.9] tracking-tight text-white">
              Unsere<br />Branchen
            </h2>
          </div>
          <div className="text-[120px] font-black leading-none tracking-tighter self-end"
            style={{ color: "transparent", WebkitTextStroke: "1px rgba(255,255,255,0.06)" }} aria-hidden>
            05
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {industries.map((ind, i) => (
            <div key={ind.en}
              className={`group relative bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 lg:p-10 hover:bg-[#CC0000] transition-colors duration-400 cursor-default ${
                i === 4 ? "md:col-span-2 lg:col-span-1 lg:col-start-2" : ""
              }`}>
              <div className="flex justify-between items-start mb-10">
                <span className="text-[10px] font-black text-gray-700 group-hover:text-red-200 uppercase tracking-[0.3em] transition-colors">
                  {ind.number}
                </span>
                <span className="text-[10px] font-bold text-gray-600 group-hover:text-white/60 uppercase tracking-widest transition-colors">
                  {ind.en}
                </span>
              </div>
              <h3 className="text-3xl lg:text-4xl font-black text-white leading-tight tracking-tight mb-4">
                {ind.de}
              </h3>
              <div className="w-8 h-px bg-[#CC0000] group-hover:bg-white/40 mb-5 transition-colors" />
              <p className="text-sm text-gray-500 group-hover:text-white/80 leading-relaxed transition-colors">
                {ind.description}
              </p>
              <div className="absolute bottom-8 right-8 w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg">↗</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
