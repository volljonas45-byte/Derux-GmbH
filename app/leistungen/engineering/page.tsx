import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCta from "@/components/FloatingCta";

export const metadata: Metadata = {
  title: "Engineering – DERUX GmbH | Anlagenplanung für die Textilindustrie",
  description:
    "DERUX Engineering: Maßgeschneiderte Planung und technische Konzepte für Textil-, Vliesstoff- und Composites-Anlagen. Erfahrene Ingenieure, weltweite Projekterfahrung.",
};

const features = [
  {
    title: "Prozessplanung & -optimierung",
    description: "Wir analysieren bestehende Prozesse und entwickeln optimierte Konzepte – für maximale Effizienz und minimale Betriebskosten.",
  },
  {
    title: "Anlagenengineering",
    description: "Von der Grundlagenplanung über das Detail-Engineering bis zur Montageplanung – alles aus einer Hand.",
  },
  {
    title: "Technische Beratung",
    description: "Unsere Experten beraten Sie bei der Technologieauswahl, Maschinenspezifikation und Lieferantenauswahl.",
  },
  {
    title: "Projektmanagement",
    description: "Strukturiertes Projektmanagement nach internationalen Standards – termingerecht und transparent.",
  },
  {
    title: "Machbarkeitsstudien",
    description: "Vor jedem Projekt prüfen wir Machbarkeit, ROI und technische Risiken – damit Sie fundiert entscheiden können.",
  },
  {
    title: "Inbetriebnahme",
    description: "Unsere Ingenieure begleiten die Inbetriebnahme vor Ort und stellen sicher, dass Ihre Anlage von Anfang an optimal läuft.",
  },
];

const industries = ["Textilien", "Vliesstoffe", "Komposite", "Chemiefasern", "Naturfasern"];

export default function EngineeringPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-end bg-[#0e0e0e] overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-end pointer-events-none overflow-hidden" aria-hidden>
            <span className="text-[20vw] font-black tracking-tighter leading-none pr-4"
              style={{ color: "transparent", WebkitTextStroke: "1px rgba(255,255,255,0.03)" }}>
              ENG
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
              <span className="text-[#CC0000] text-[10px] font-black uppercase tracking-[0.4em]">Leistung 01</span>
            </div>
            <h1 className="text-[clamp(56px,9vw,120px)] font-black leading-[0.88] tracking-tight text-white mb-6">
              Engineering
            </h1>
            <p className="text-gray-400 text-lg lg:text-xl leading-relaxed max-w-2xl">
              Maßgeschneiderte technische Konzepte und Lösungen für die Textilindustrie –
              von der ersten Idee bis zur betriebsbereiten Anlage.
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-px bg-[#CC0000]" />
                <span className="text-[#CC0000] text-[10px] font-black uppercase tracking-[0.4em]">Unser Ansatz</span>
              </div>
              <h2 className="text-3xl lg:text-5xl font-black leading-tight tracking-tight text-[#0e0e0e] mb-6">
                Technik, die funktioniert.
                <span className="text-[#CC0000]"> Immer.</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-5">
                Im DERUX Engineering steht nicht das Technisch-Machbare im Vordergrund, sondern das
                wirtschaftlich Sinnvolle. Wir entwickeln Lösungen, die zu Ihrer Produktion, Ihren
                Ressourcen und Ihren Zielen passen.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Unser Team aus erfahrenen Ingenieuren hat hunderte Anlagen weltweit geplant und
                realisiert – in allen Bereichen der Textilindustrie.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: "25+", label: "Jahre Engineering-Erfahrung" },
                { val: "500+", label: "Projekte weltweit" },
                { val: "50+", label: "Länder" },
                { val: "100%", label: "Qualitätsanspruch" },
              ].map((s) => (
                <div key={s.label} className="bg-[#f9f9f9] rounded-2xl p-6 border border-gray-100">
                  <div className="text-3xl font-black text-[#0e0e0e] mb-1">{s.val}</div>
                  <div className="text-xs text-gray-400 uppercase tracking-widest">{s.label}</div>
                </div>
              ))}
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
              Was wir für Sie tun
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

        {/* Industries */}
        <section className="bg-white py-24 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-16">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-px bg-[#CC0000]" />
                  <span className="text-[#CC0000] text-[10px] font-black uppercase tracking-[0.4em]">Branchen</span>
                </div>
                <h2 className="text-3xl lg:text-5xl font-black leading-tight tracking-tight text-[#0e0e0e] mb-6">
                  Für alle Bereiche der Textilindustrie
                </h2>
                <p className="text-gray-500 leading-relaxed">
                  Unser Engineering-Know-how erstreckt sich über die gesamte Breite der
                  Textilindustrie. Egal welche Faser, welche Technologie – wir kennen die
                  Anforderungen Ihrer Branche.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                {industries.map((ind) => (
                  <span key={ind}
                    className="px-5 py-3 bg-[#f5f5f5] border border-gray-200 rounded-full text-sm font-bold text-gray-700 hover:border-[#CC0000] hover:text-[#CC0000] transition-colors cursor-default">
                    {ind}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0e0e0e] py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center">
            <h2 className="text-3xl lg:text-5xl font-black text-white mb-5 tracking-tight">
              Bereit für Ihr Engineering-Projekt?
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
              Schildern Sie uns Ihr Vorhaben – wir melden uns innerhalb von 24 Stunden mit einer ersten Einschätzung.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#kontakt"
                className="group flex items-center justify-center gap-4 px-10 py-5 bg-[#CC0000] text-white font-black uppercase tracking-[0.2em] text-xs rounded-2xl hover:bg-white hover:text-[#CC0000] transition-all duration-300">
                Jetzt anfragen
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <a href="tel:+496221871360"
                className="group flex items-center justify-center gap-3 px-10 py-5 border border-white/20 text-white font-black uppercase tracking-[0.2em] text-xs rounded-2xl hover:border-white/60 transition-all duration-300">
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
