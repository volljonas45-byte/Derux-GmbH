const steps = [
  { number: "01", title: "Erstkontakt", subtitle: "Kostenlos & unverbindlich", description: "Sie schildern uns Ihr Vorhaben – per Formular, Telefon oder E-Mail. Wir melden uns innerhalb von 24 Stunden zurück.", duration: "Tag 1" },
  { number: "02", title: "Projektanalyse", subtitle: "Durch unsere Experten", description: "Unsere Ingenieure analysieren Ihre Anforderungen, prüfen Machbarkeit und erarbeiten erste Lösungsansätze.", duration: "Woche 1–2" },
  { number: "03", title: "Angebot & Konzept", subtitle: "Transparent & detailliert", description: "Sie erhalten ein vollständiges Angebot mit Zeitplan, Budget und technischem Konzept – klar und ohne versteckte Kosten.", duration: "Woche 2–3" },
  { number: "04", title: "Realisierung", subtitle: "Termintreu & budgetsicher", description: "DERUX übernimmt die gesamte Umsetzung als Generalunternehmer – mit voller Transparenz über den Projektfortschritt.", duration: "Je nach Projekt" },
];

export default function Process() {
  return (
    <section className="bg-white py-28 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        <div className="grid lg:grid-cols-2 gap-12 items-end mb-20">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-px bg-[#CC0000]" />
              <span className="text-[#CC0000] text-[10px] font-black uppercase tracking-[0.4em]">So einfach geht's</span>
            </div>
            <h2 className="text-[clamp(40px,5.5vw,80px)] font-black leading-[0.9] tracking-tight text-[#0e0e0e]">
              Ihr Weg zum<br />
              <span style={{ color: "transparent", WebkitTextStroke: "2px #CC0000" }}>Projekt.</span>
            </h2>
          </div>
          <p className="text-gray-400 text-base leading-relaxed max-w-sm lg:text-right">
            Von der ersten Idee bis zur laufenden Anlage – klar, strukturiert, verlässlich.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step) => (
            <div key={step.number}
              className="group bg-[#f9f9f9] rounded-2xl p-8 border border-gray-100 hover:border-[#CC0000]/30 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-white border border-gray-200 group-hover:border-[#CC0000] group-hover:bg-[#CC0000] transition-all duration-300 flex items-center justify-center mb-8 shadow-sm">
                <span className="text-sm font-black text-gray-400 group-hover:text-white transition-colors duration-300">
                  {step.number}
                </span>
              </div>

              <span className="inline-flex items-center text-[10px] font-black text-[#CC0000] uppercase tracking-widest bg-[#CC0000]/5 px-2.5 py-1 rounded-full mb-4">
                {step.duration}
              </span>

              <h3 className="text-lg font-black text-[#0e0e0e] mb-1 tracking-tight">{step.title}</h3>
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">{step.subtitle}</div>
              <div className="w-6 h-px bg-[#CC0000] mb-4 group-hover:w-10 transition-all duration-300" />
              <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col sm:flex-row items-center gap-6 justify-center">
          <a href="#kontakt"
            className="group flex items-center gap-4 px-10 py-5 bg-[#CC0000] text-white font-black uppercase tracking-[0.2em] text-xs rounded-2xl hover:bg-[#0e0e0e] transition-colors duration-300">
            Jetzt Schritt 1 starten
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a href="tel:+496221871360"
            className="group flex items-center gap-3 text-sm text-gray-500 hover:text-[#CC0000] transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Oder direkt anrufen: +49 6221 87-13-630
          </a>
        </div>
      </div>
    </section>
  );
}
