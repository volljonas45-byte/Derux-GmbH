export default function Marquee() {
  const items = [
    "Engineering",
    "Contracting",
    "Services",
    "Textiles",
    "Nonwovens",
    "Composites",
    "Man-Made Fibers",
    "Natural Fibers",
  ];

  const repeated = [...items, ...items, ...items];

  return (
    <div className="relative overflow-hidden bg-[#CC0000] py-4 border-y border-[#aa0000]">
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 28s linear infinite;
        }
      `}</style>

      <div className="marquee-track">
        {repeated.map((item, i) => (
          <div key={i} className="flex items-center shrink-0">
            <span className="text-white text-xs font-black uppercase tracking-[0.35em] px-8 whitespace-nowrap">
              {item}
            </span>
            <span className="text-white/40 text-xs">◆</span>
          </div>
        ))}
      </div>
    </div>
  );
}
