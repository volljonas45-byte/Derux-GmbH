"use client";

import { useState } from "react";

type Step = 1 | 2 | 3;

const services = ["Engineering", "Contracting", "Services", "Noch unsicher"];
const industries = ["Textilien", "Vliesstoffe", "Komposite", "Chemiefasern", "Naturfasern", "Sonstiges"];
const timelines = ["So schnell wie möglich", "In 3–6 Monaten", "In 6–12 Monaten", "Langfristige Planung"];

export default function Contact() {
  const [step, setStep] = useState<Step>(1);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    service: "",
    industry: "",
    timeline: "",
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const progress = ((step - 1) / 2) * 100;

  const canNext = () => {
    if (step === 1) return form.service !== "";
    if (step === 2) return form.industry !== "" && form.timeline !== "";
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    const subject = `Projektanfrage: ${form.service} – ${form.industry}`;
    const body = `Leistung: ${form.service}
Branche: ${form.industry}
Zeitrahmen: ${form.timeline}

Nachricht:
${form.message}

---
Name: ${form.name}
Unternehmen: ${form.company}
E-Mail: ${form.email}
Telefon: ${form.phone}`;
    window.open(
      `mailto:derux@derux.de?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    );
    setSent(true);
  };

  const ChipSelect = ({
    options, value, onChange,
  }: { options: string[]; value: string; onChange: (v: string) => void }) => (
    <div className="flex flex-wrap gap-3">
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => onChange(opt)}
          className={`px-5 py-3 text-sm font-bold uppercase tracking-wide border transition-all duration-200 ${
            value === opt
              ? "bg-[#CC0000] border-[#CC0000] text-white"
              : "border-gray-200 text-gray-500 hover:border-[#CC0000] hover:text-[#CC0000]"
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  );

  return (
    <section id="kontakt" className="bg-[#f5f5f5]">
      {/* Header */}
      <div className="bg-[#0e0e0e] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-px bg-[#CC0000]" />
            <span className="text-[#CC0000] text-[10px] font-black uppercase tracking-[0.4em]">
              Kontakt & Anfrage
            </span>
          </div>
          <h2 className="text-[clamp(40px,6vw,96px)] font-black leading-[0.88] tracking-tight text-white">
            Starten Sie Ihr
            <br />
            <span style={{ color: "transparent", WebkitTextStroke: "2px #CC0000" }}>
              Projekt.
            </span>
          </h2>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-20">
        <div className="grid lg:grid-cols-3 gap-16">

          {/* Left sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-10 lg:sticky lg:top-32">
              <div>
                <div className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-5">
                  Direktkontakt
                </div>
                <div className="space-y-5">
                  <a href="tel:+496221871360" className="flex items-center gap-4 group">
                    <div className="w-10 h-10 bg-[#CC0000] flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400">Telefon</div>
                      <div className="text-sm font-bold text-[#0e0e0e] group-hover:text-[#CC0000] transition-colors">
                        +49 6221 87-13-630
                      </div>
                    </div>
                  </a>
                  <a href="mailto:derux@derux.de" className="flex items-center gap-4 group">
                    <div className="w-10 h-10 bg-[#0e0e0e] flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400">E-Mail</div>
                      <div className="text-sm font-bold text-[#0e0e0e] group-hover:text-[#CC0000] transition-colors">
                        derux@derux.de
                      </div>
                    </div>
                  </a>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gray-200 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400">Adresse</div>
                      <div className="text-sm font-bold text-[#0e0e0e]">
                        Alte Bergheimer Str. 9<br />
                        <span className="font-normal text-gray-400">69115 Heidelberg</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust signals */}
              <div className="border-t border-gray-200 pt-10">
                <div className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-5">
                  Ihr Versprechen
                </div>
                <div className="space-y-4">
                  {[
                    "Antwort in 24 Stunden",
                    "Kostenlose Erstberatung",
                    "Kein Verkaufsdruck",
                    "Vertrauliche Behandlung",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-[#CC0000] flex items-center justify-center shrink-0">
                        <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-500">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right – Multi-step form */}
          <div className="lg:col-span-2">
            {sent ? (
              /* Success state */
              <div className="bg-white p-12 text-center">
                <div className="w-16 h-16 bg-[#CC0000] flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-[#0e0e0e] mb-3">Anfrage gesendet!</h3>
                <p className="text-gray-500 mb-8 max-w-sm mx-auto">
                  Vielen Dank für Ihre Anfrage. Wir melden uns innerhalb von 24
                  Stunden persönlich bei Ihnen.
                </p>
                <button
                  onClick={() => { setSent(false); setStep(1); setForm({ service: "", industry: "", timeline: "", name: "", company: "", email: "", phone: "", message: "" }); }}
                  className="text-sm text-[#CC0000] font-bold uppercase tracking-widest hover:underline"
                >
                  Neue Anfrage stellen
                </button>
              </div>
            ) : (
              <div className="bg-white">
                {/* Progress bar */}
                <div className="h-1 bg-gray-100">
                  <div
                    className="h-full bg-[#CC0000] transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                {/* Step indicators */}
                <div className="px-8 lg:px-12 pt-8 flex items-center gap-2 mb-8">
                  {([1, 2, 3] as Step[]).map((s) => (
                    <div key={s} className="flex items-center gap-2">
                      <div
                        className={`w-7 h-7 flex items-center justify-center text-[11px] font-black transition-all duration-300 ${
                          s < step
                            ? "bg-[#CC0000] text-white"
                            : s === step
                            ? "bg-[#0e0e0e] text-white"
                            : "bg-gray-100 text-gray-400"
                        }`}
                      >
                        {s < step ? "✓" : s}
                      </div>
                      {s < 3 && (
                        <div className={`flex-1 h-px w-8 ${s < step ? "bg-[#CC0000]" : "bg-gray-100"}`} />
                      )}
                    </div>
                  ))}
                  <div className="ml-2 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                    Schritt {step} von 3
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="px-8 lg:px-12 pb-10">

                  {/* Step 1 – Was brauchen Sie? */}
                  {step === 1 && (
                    <div>
                      <h3 className="text-xl font-black text-[#0e0e0e] mb-2">
                        Was suchen Sie?
                      </h3>
                      <p className="text-sm text-gray-400 mb-8">
                        Wählen Sie die passende Leistungskategorie aus.
                      </p>
                      <ChipSelect
                        options={services}
                        value={form.service}
                        onChange={(v) => setForm({ ...form, service: v })}
                      />
                    </div>
                  )}

                  {/* Step 2 – Branche + Zeitrahmen */}
                  {step === 2 && (
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-xl font-black text-[#0e0e0e] mb-2">
                          Welche Branche?
                        </h3>
                        <p className="text-sm text-gray-400 mb-6">
                          In welchem Bereich der Textilindustrie sind Sie tätig?
                        </p>
                        <ChipSelect
                          options={industries}
                          value={form.industry}
                          onChange={(v) => setForm({ ...form, industry: v })}
                        />
                      </div>
                      <div>
                        <div className="text-sm font-black text-[#0e0e0e] mb-4 uppercase tracking-wide">
                          Zeitrahmen
                        </div>
                        <ChipSelect
                          options={timelines}
                          value={form.timeline}
                          onChange={(v) => setForm({ ...form, timeline: v })}
                        />
                      </div>
                    </div>
                  )}

                  {/* Step 3 – Kontaktdaten */}
                  {step === 3 && (
                    <div className="space-y-5">
                      <div>
                        <h3 className="text-xl font-black text-[#0e0e0e] mb-2">
                          Ihre Kontaktdaten
                        </h3>
                        <p className="text-sm text-gray-400 mb-8">
                          Wir melden uns persönlich und diskret bei Ihnen.
                        </p>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">
                            Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Max Mustermann"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            className="w-full border-b border-gray-200 bg-transparent py-3 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-[#CC0000] transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">
                            Unternehmen
                          </label>
                          <input
                            type="text"
                            placeholder="Firma GmbH"
                            value={form.company}
                            onChange={(e) => setForm({ ...form, company: e.target.value })}
                            className="w-full border-b border-gray-200 bg-transparent py-3 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-[#CC0000] transition-colors"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">
                            E-Mail *
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="max@firma.de"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            className="w-full border-b border-gray-200 bg-transparent py-3 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-[#CC0000] transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">
                            Telefon
                          </label>
                          <input
                            type="tel"
                            placeholder="+49 ..."
                            value={form.phone}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            className="w-full border-b border-gray-200 bg-transparent py-3 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-[#CC0000] transition-colors"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">
                          Kurze Projektbeschreibung
                        </label>
                        <textarea
                          rows={4}
                          placeholder="Was möchten Sie realisieren?"
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          className="w-full border-b border-gray-200 bg-transparent py-3 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-[#CC0000] transition-colors resize-none"
                        />
                      </div>

                      {/* Summary */}
                      <div className="bg-[#f5f5f5] p-5 text-xs text-gray-500 space-y-1">
                        <div className="font-black text-[#0e0e0e] text-[10px] uppercase tracking-widest mb-3">
                          Ihre Angaben
                        </div>
                        <div>Leistung: <span className="text-[#CC0000] font-bold">{form.service}</span></div>
                        <div>Branche: <span className="text-[#CC0000] font-bold">{form.industry}</span></div>
                        <div>Zeitrahmen: <span className="text-[#CC0000] font-bold">{form.timeline}</span></div>
                      </div>
                    </div>
                  )}

                  {/* Navigation */}
                  <div className="flex items-center justify-between mt-10 pt-8 border-t border-gray-100">
                    {step > 1 ? (
                      <button
                        type="button"
                        onClick={() => setStep((s) => (s - 1) as Step)}
                        className="text-sm text-gray-400 hover:text-[#0e0e0e] transition-colors font-bold uppercase tracking-widest flex items-center gap-2"
                      >
                        ← Zurück
                      </button>
                    ) : (
                      <div />
                    )}

                    {step < 3 ? (
                      <button
                        type="button"
                        disabled={!canNext()}
                        onClick={() => setStep((s) => (s + 1) as Step)}
                        className={`group flex items-center gap-4 px-8 py-4 font-black uppercase tracking-[0.2em] text-xs transition-all duration-300 ${
                          canNext()
                            ? "bg-[#CC0000] text-white hover:bg-[#0e0e0e]"
                            : "bg-gray-100 text-gray-300 cursor-not-allowed"
                        }`}
                      >
                        Weiter
                        <span className={`transition-transform duration-300 ${canNext() ? "group-hover:translate-x-1" : ""}`}>→</span>
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={!form.name || !form.email}
                        className={`group flex items-center gap-4 px-8 py-4 font-black uppercase tracking-[0.2em] text-xs transition-all duration-300 ${
                          form.name && form.email
                            ? "bg-[#CC0000] text-white hover:bg-[#0e0e0e]"
                            : "bg-gray-100 text-gray-300 cursor-not-allowed"
                        }`}
                      >
                        Anfrage absenden
                        <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                      </button>
                    )}
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
