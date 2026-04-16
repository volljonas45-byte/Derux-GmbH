import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0e0e0e]">

      {/* Top accent */}
      <div className="h-px bg-gradient-to-r from-[#CC0000] via-[#CC0000]/30 to-transparent" />

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 pt-16 pb-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/logo-derux.png`}
              alt="DERUX GmbH"
              width={150}
              height={45}
              className="h-10 w-auto mb-6 brightness-0 invert opacity-70"
            />
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs mb-6">
              Innovative industrielle Lösungen für die Textilindustrie –
              weltweit seit Jahrzehnten.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-6 h-px bg-[#CC0000]" />
              <span className="text-[10px] font-black text-gray-700 uppercase tracking-[0.3em]">
                Engineering · Contracting · Services
              </span>
            </div>
          </div>

          {/* Nav */}
          <div>
            <div className="text-[10px] font-black text-gray-600 uppercase tracking-[0.3em] mb-6">
              Navigation
            </div>
            <ul className="space-y-3">
              {[
                { label: "Leistungen", href: "#leistungen" },
                { label: "Branchen", href: "#branchen" },
                { label: "Über uns", href: "#ueber-uns" },
                { label: "Kontakt", href: "#kontakt" },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-gray-500 hover:text-white transition-colors group flex items-center gap-2"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-[#CC0000] transition-all duration-300" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-[10px] font-black text-gray-600 uppercase tracking-[0.3em] mb-6">
              Kontakt
            </div>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>Alte Bergheimer Str. 9</li>
              <li>69115 Heidelberg</li>
              <li className="pt-2">
                <a href="tel:+496221871360" className="hover:text-white transition-colors">
                  +49 6221 87-13-630
                </a>
              </li>
              <li>
                <a href="mailto:derux@derux.de" className="hover:text-[#CC0000] transition-colors">
                  derux@derux.de
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-gray-700 uppercase tracking-widest">
          <span>© {year} DERUX GmbH</span>
          <div className="flex gap-8">
            <a href="/impressum" className="hover:text-white transition-colors">Impressum</a>
            <a href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
