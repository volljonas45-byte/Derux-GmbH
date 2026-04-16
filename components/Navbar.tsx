"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Leistungen", href: "#leistungen" },
    { label: "Branchen", href: "#branchen" },
    { label: "Über uns", href: "#ueber-uns" },
    { label: "Kontakt", href: "#kontakt" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        <Link href="/">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/logo-derux.png`}
            alt="DERUX GmbH"
            width={160}
            height={48}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-[#CC0000] ${
                scrolled ? "text-gray-600" : "text-white/80"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#kontakt"
            className="ml-2 px-6 py-2.5 bg-[#CC0000] text-white text-sm font-bold uppercase tracking-widest rounded-xl hover:bg-[#aa0000] transition-colors"
          >
            Anfrage
          </a>
        </nav>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü"
        >
          <span className={`block w-6 h-0.5 transition-all ${scrolled ? "bg-gray-800" : "bg-white"}`} />
          <span className={`block w-6 h-0.5 transition-all ${scrolled ? "bg-gray-800" : "bg-white"}`} />
          <span className={`block w-6 h-0.5 transition-all ${scrolled ? "bg-gray-800" : "bg-white"}`} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-gray-700 font-medium uppercase tracking-wide text-sm"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#kontakt"
            className="mt-2 px-6 py-3 bg-[#CC0000] text-white text-sm font-bold uppercase tracking-widest text-center rounded-xl"
            onClick={() => setMenuOpen(false)}
          >
            Anfrage
          </a>
        </div>
      )}
    </header>
  );
}
