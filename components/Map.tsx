export default function Map() {
  return (
    <section className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-px bg-[#CC0000]" />
              <span className="text-[#CC0000] text-[10px] font-black uppercase tracking-[0.4em]">Standort</span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-black text-[#0e0e0e] tracking-tight">
              DERUX GmbH – Heidelberg
            </h2>
            <p className="text-gray-400 text-sm mt-1">Alte Bergheimer Straße 9, 69115 Heidelberg</p>
          </div>
          <a
            href="https://maps.google.com/?q=Alte+Bergheimer+Straße+9,+69115+Heidelberg"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-6 py-3 border border-gray-200 rounded-xl text-sm font-bold text-gray-600 hover:border-[#CC0000] hover:text-[#CC0000] transition-all duration-300 shrink-0"
          >
            In Google Maps öffnen
            <span className="group-hover:translate-x-0.5 transition-transform">↗</span>
          </a>
        </div>

        <div className="relative rounded-2xl overflow-hidden border border-gray-100 shadow-sm" style={{ height: "420px" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2597.123456789!2d8.6821!3d49.4093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797c1037f45b0f9%3A0x0!2sAlte+Bergheimer+Str.+9%2C+69115+Heidelberg!5e0!3m2!1sde!2sde!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "grayscale(20%) contrast(1.05)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="DERUX GmbH Standort – Alte Bergheimer Straße 9, Heidelberg"
          />
          {/* Red overlay accent */}
          <div className="absolute top-4 left-4 bg-[#CC0000] text-white text-xs font-black uppercase tracking-widest px-4 py-2 rounded-xl shadow-lg pointer-events-none">
            DERUX GmbH
          </div>
        </div>
      </div>
    </section>
  );
}
