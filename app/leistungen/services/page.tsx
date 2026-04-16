import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCta from "@/components/FloatingCta";

export const metadata: Metadata = {
  title: "Services – DERUX GmbH | Wartung & After-Sales Textilindustrie",
  description:
    "DERUX Services: Wartung, Instandhaltung, Ersatzteilversorgung und Schulungen für Textil- und Vliesstoffanlagen weltweit. Rund-um-die-Uhr-Support.",
};

const features = [
  {
    title: "Wartung & Instandhaltung",
    description: "Präventive und korrektive Instandhaltung nach Herstellervorgaben – für maximale Verfügbarkeit Ihrer Anlage.",
  },
  {
    title: "Ersatzteilversorgung",
    description: "Schnelle Lieferung von Original- und kompatiblen Ersatzteilen weltweit – aus unserem Netzwerk qualifizierter Lieferanten.",
  },
  {
    title: "Schulungen & Training",
    description: "Praxisnahe Schulungen für Ihr Bedienpersonal und Ihre Wartungstechniker – vor Ort oder digital.",
  },
  {
    title: "After-Sales Support",
    description: "Technischer Support nach der Inbetriebnahme – telefonisch, per Video oder vor Ort beim Kunden.",
  },
  {
    title: "Anlagenoptimierung",
    description: "Analyse bestehender Anlagen und Entwicklung von Optimierungsmaßnahmen für bessere Performance und Energieeffizienz.",
  },
  {
    title: "Retrofit & Modernisierung",
    description: "Nachrüstung älterer Anlagen mit moderner Steuerungstechnik und aktuellen Komponenten – wirtschaftlicher als Neukauf.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-end bg-[#0e0e0e] overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-end pointer-events-none overflow-hidden" aria-hidden>
            <span className="text-[20vw] font-black tracking-tighter leading-none pr-4"
              style={{ color: "transparent", WebkitTextStroke: "1px rgba(255,255,255,0.03)" }}>
              SRV
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
              <span className="text-[#CC0000] text-[10px] font-black uppercase tracking-[0.4em]">Leistung 03</span>
            </div>
            <h1 className="text-[clamp(56px,9vw,120px)] font-black leading-[0.88] tracking-tight text-white mb-6">
              Services
            </h1>
            <p className="text-gray-400 text-lg lg:text-xl leading-relaxed max-w-2xl">
              Langfristige Betreuung Ihrer Anlagen – weltweit, zuverlässig und rund um die Uhr.
              Damit Ihre Produktion niemals stillsteht.
            </p>
          </div>
        </section>

        {/* Promise */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-16">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-px bg-[#CC0000]" />
                  <span className="text-[#CC0000] text-[10px] font-black uppercase tracking-[0.4em]">Unser Versprechen</span>
                </div>
                <h2 className="text-3xl lg:text-5xl font-black leading-tight tracking-tight text-[#0e0e0e] mb-6">
                  Ihre Anlage läuft.
                  <span className="text-[#CC0000]"> Garantiert.</span>
                </h2>
                <p className="text-gray-500 leading-relaxed mb-5">
                  Eine Anlage ist nur so gut wie ihr Service-Konzept. DERUX begleitet Sie
                  nicht nur durch das Projekt – wir sind auch danach für Sie da.
                </p>
                <p className="text-gray-500 leading-relaxed">
                  Mit unserem globalen Service-Netzwerk und erfahrenen Technikern vor Ort
                  minimieren wir Ausfallzeiten und maximieren die Lebensdauer Ihrer Investition.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                {[
                  { val: "24h", label: "Reaktionszeit" },
                  { val: "Global", label: "Service-Netzwerk" },
                  { val: "50+", label: "Länder betreut" },
                ].map((s) => (
                  <div key={s.label} className="bg-[#f9f9f9] rounded-2xl p-6 border border-gray-100 flex items-center gap-5">
                    <div className="text-3xl font-black text-[#CC0000]">{s.val}</div>
                    <div className="text-sm text-gray-500 uppercase tracking-widest">{s.label}</div>
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
              <span className="text-[#CC0000] text-[10px] font-black uppercase tracking-[0.4em]">Serviceangebot</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-black leading-tight tracking-tight text-[#0e0e0e] mb-14">
              Unser Servicespektrum
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

        {/* Dark strip */}
        <section className="bg-[#CC0000] py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight mb-4">
                Stillstand kostet mehr als Wartung.
              </h2>
              <p className="text-white/70 leading-relaxed">
                Ungeplante Ausfälle in der Textilproduktion sind teuer. Mit einem
                professionellen Service-Konzept von DERUX schützen Sie Ihre Investition
                und sichern Ihre Produktion langfristig ab.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <Link href="/#kontakt"
                className="group flex items-center justify-center gap-4 px-8 py-5 bg-white text-[#CC0000] font-black uppercase tracking-[0.2em] text-xs rounded-2xl hover:bg-[#0e0e0e] hover:text-white transition-all duration-300">
                Service anfragen
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white py-24 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center">
            <h2 className="text-3xl lg:text-5xl font-black text-[#0e0e0e] mb-5 tracking-tight">
              Jetzt Service-Konzept anfragen
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
              Schildern Sie uns Ihre Anlage und Ihre Anforderungen – wir erstellen Ihnen ein maßgeschneidertes Service-Konzept.
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
