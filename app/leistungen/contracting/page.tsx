import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCta from "@/components/FloatingCta";

export const metadata: Metadata = {
  title: "Contracting – DERUX GmbH | Generalunternehmer Textilindustrie",
  description:
    "DERUX als Generalunternehmer: Schlüsselfertige Realisierung Ihrer Textil- und Vliesstoffanlagen. Termin- und budgetsicher, ein Ansprechpartner, weltweite Erfahrung.",
};

const features = [
  {
    title: "Generalunternehmerschaft",
    description: "Wir übernehmen die vollständige Verantwortung – von der Planung über Beschaffung und Montage bis zur Inbetriebnahme.",
  },
  {
    title: "Schlüsselfertige Projekte",
    description: "Sie übergeben die Anforderungen, wir liefern die betriebsbereite Anlage. Kein Koordinationsaufwand für Ihr Team.",
  },
  {
    title: "Lieferantenmanagement",
    description: "Wir verfügen über ein weltweites Netzwerk qualifizierter Lieferanten und Subunternehmer – für jedes Projekt das Beste.",
  },
  {
    title: "Qualitätssicherung",
    description: "Strukturiertes QM-System mit Abnahmeprüfungen und Dokumentation in jeder Projektphase.",
  },
  {
    title: "Terminmanagement",
    description: "Detaillierte Projektplanung mit klaren Meilensteinen und proaktivem Risikomanagement.",
  },
  {
    title: "Budgetkontrolle",
    description: "Transparente Kostenverfolgung und frühzeitige Eskalation bei Abweichungen – keine bösen Überraschungen.",
  },
];

const advantages = [
  { title: "Ein Ansprechpartner", desc: "Kein Schnittstellenchaos zwischen Planern, Lieferanten und Monteuren." },
  { title: "Volle Kostensicherheit", desc: "Festpreisangebote mit klarer Leistungsbeschreibung." },
  { title: "Globale Erfahrung", desc: "Projekte in 50+ Ländern, vertraut mit internationalen Normen." },
  { title: "Termingarantie", desc: "Verbindliche Zeitpläne mit definierten Meilensteinen." },
];

export default function ContractingPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-end bg-[#0e0e0e] overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-end pointer-events-none overflow-hidden" aria-hidden>
            <span className="text-[20vw] font-black tracking-tighter leading-none pr-4"
              style={{ color: "transparent", WebkitTextStroke: "1px rgba(255,255,255,0.03)" }}>
              CON
            </span>
          </div>
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#CC0000] rounded-r-full" />
          <div className="absolute top-0 right-0 w-96 h-full pointer-events-none"
            style={{ background: "linear-gradient(135deg, transparent 50%, #CC0000 50%)", opacity: 0.06 }} />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 w-full pb-20 pt-40">
            <Link href="/#leistungen"
              className="inline-flex items-center gap-2 text-gray-500 text-xs uppercase tracking-widest font-bold hover:text-white transition-colors mb-10">
              ← Alle Leistungen
            </Link>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-px bg-[#CC0000]" />
              <span className="text-[#CC0000] text-[10px] font-black uppercase tracking-[0.4em]">Leistung 02</span>
            </div>
            <h1 className="text-[clamp(56px,9vw,120px)] font-black leading-[0.88] tracking-tight text-white mb-6">
              Contracting
            </h1>
            <p className="text-gray-400 text-lg lg:text-xl leading-relaxed max-w-2xl">
              Als erfahrener Generalunternehmer übernehmen wir die vollständige Realisierung
              Ihres Projekts – termingerecht, budgetsicher, schlüsselfertig.
            </p>
          </div>
        </section>

        {/* Advantages */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-16">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-px bg-[#CC0000]" />
                  <span className="text-[#CC0000] text-[10px] font-black uppercase tracking-[0.4em]">Ihr Vorteil</span>
                </div>
                <h2 className="text-3xl lg:text-5xl font-black leading-tight tracking-tight text-[#0e0e0e] mb-6">
                  Alles aus einer Hand.
                  <span className="text-[#CC0000]"> Ohne Kompromisse.</span>
                </h2>
                <p className="text-gray-500 leading-relaxed mb-5">
                  Als Generalunternehmer sind wir Ihr einziger Ansprechpartner vom ersten
                  Entwurf bis zur laufenden Produktion. Sie behalten den Überblick –
                  wir erledigen den Rest.
                </p>
                <p className="text-gray-500 leading-relaxed">
                  Keine Koordination zwischen Dutzenden Lieferanten. Keine ungeplanten
                  Kosten. Kein Zeitverzug durch Schnittstellenprobleme.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {advantages.map((a) => (
                  <div key={a.title} className="flex gap-5 bg-[#f9f9f9] rounded-2xl p-5 border border-gray-100">
                    <div className="w-8 h-8 bg-[#CC0000] rounded-lg flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-black text-[#0e0e0e] text-sm mb-1">{a.title}</div>
                      <div className="text-xs text-gray-500 leading-relaxed">{a.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="bg-[#f5f5f5] py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-16">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-10 h-px bg-[#CC0000]" />
              <span className="text-[#CC0000] text-[10px] font-black uppercase tracking-[0.4em]">Leistungsumfang</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-black leading-tight tracking-tight text-[#0e0e0e] mb-14">
              Was wir für Sie übernehmen
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((f, i) => (
                <div key={f.title}
                  className="group bg-white rounded-2xl p-7 border border-gray-100 hover:border-[#CC0000]/30 hover:shadow-lg transition-all duration-300">
                  <div className="text-[10px] font-black text-gray-200 uppercase tracking-widest mb-4">0{i + 1}</div>
                  <div className="w-6 h-px bg-[#CC0000] mb-4 group-hover:w-12 transition-all duration-300" />
                  <h3 className="font-black text-[#0e0e0e] mb-3 tracking-tight">{f.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process strip */}
        <section className="bg-[#0e0e0e] py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-16">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-10 h-px bg-[#CC0000]" />
              <span className="text-[#CC0000] text-[10px] font-black uppercase tracking-[0.4em]">Unser Prozess</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Anfrage & Analyse", "Angebot & Planung", "Realisierung", "Übergabe & Support"].map((step, i) => (
                <div key={step} className="bg-white/[0.04] rounded-2xl p-6 border border-white/[0.06]">
                  <div className="text-3xl font-black text-[#CC0000] mb-4">0{i + 1}</div>
                  <div className="text-white font-bold text-sm tracking-tight">{step}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white py-24 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center">
            <h2 className="text-3xl lg:text-5xl font-black text-[#0e0e0e] mb-5 tracking-tight">
              Ihr Projekt in unseren Händen.
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
              Lassen Sie uns über Ihr Vorhaben sprechen – kostenlos und unverbindlich.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#kontakt"
                className="group flex items-center justify-center gap-4 px-10 py-5 bg-[#CC0000] text-white font-black uppercase tracking-[0.2em] text-xs rounded-2xl hover:bg-[#0e0e0e] transition-all duration-300">
                Jetzt anfragen
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <a href="tel:+496221871360"
                className="group flex items-center justify-center gap-3 px-10 py-5 border border-gray-200 text-gray-600 font-black uppercase tracking-[0.2em] text-xs rounded-2xl hover:border-[#CC0000] hover:text-[#CC0000] transition-all duration-300">
                +49 6221 87-13-630
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <FloatingCta />
    </>
  );
}
