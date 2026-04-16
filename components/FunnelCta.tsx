export default function FunnelCta() {
  return (
    <section className="bg-[#CC0000] py-24 overflow-hidden relative">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden" aria-hidden>
        <span className="text-[18vw] font-black tracking-tighter leading-none"
          style={{ color: "transparent", WebkitTextStroke: "1px rgba(255,255,255,0.07)" }}>
          DERUX
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-px bg-white/40" />
              <span className="text-white/60 text-[10px] font-black uppercase tracking-[0.4em]">Kostenloses Erstgespräch</span>
            </div>
            <h2 className="text-[clamp(36px,5vw,72px)] font-black leading-[0.9] tracking-tight text-white mb-8">
              Haben Sie ein<br />Projekt für uns?
            </h2>
            <p className="text-white/70 text-lg leading-relaxed max-w-md">
              Erzählen Sie uns von Ihrem Vorhaben. Wir analysieren es kostenlos
              und unverbindlich – und zeigen Ihnen, wie DERUX helfen kann.
            </p>
          </div>

          <div className="lg:pl-12">
            <div className="space-y-4 mb-10">
              {[
                "Antwort innerhalb von 24 Stunden",
                "Kostenlos & unverbindlich",
                "Direkt mit einem Ingenieur sprechen",
                "Über 500 erfolgreich abgeschlossene Projekte",
              ].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <div className="w-5 h-5 bg-white/15 rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-white/80 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#kontakt"
                className="group flex items-center justify-center gap-4 px-8 py-5 bg-white text-[#CC0000] font-black uppercase tracking-[0.2em] text-xs rounded-2xl hover:bg-[#0e0e0e] hover:text-white transition-all duration-300">
                Projekt anfragen
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a href="tel:+496221871360"
                className="group flex items-center justify-center gap-3 px-8 py-5 border-2 border-white/30 text-white font-black uppercase tracking-[0.2em] text-xs rounded-2xl hover:border-white hover:bg-white/10 transition-all duration-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Direkt anrufen
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
