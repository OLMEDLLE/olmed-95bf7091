import { useState } from "react";
import { ChevronDown } from "lucide-react";

export const faqItems = [
  {
    q: "Jakie usługi oferuje serwis OLMED w Łęcznej?",
    a: "OLMED to kompleksowy serwis samochodowy: mechanika pojazdowa, diagnostyka komputerowa, naprawa i serwis klimatyzacji, wymiana i przechowywanie opon, geometria kół, wymiana olejów i płynów eksploatacyjnych ELF oraz ORLEN, a także sklep z częściami samochodowymi.",
  },
  {
    q: "Gdzie znajduje się Okręgowa Stacja Kontroli Pojazdów OLMED?",
    a: "OSKP OLMED mieści się przy ul. Krasnystawskiej 54 w Łęcznej. Stacja jest czynna od poniedziałku do piątku w godzinach 7:00–19:00 oraz w soboty 7:00–14:00. Kontakt: 518 518 315.",
  },
  {
    q: "Jakie pojazdy badacie w OSKP w Łęcznej?",
    a: "Wykonujemy badania techniczne samochodów osobowych i dostawczych do 3,5 t, motocykli, przyczep, pojazdów z instalacją LPG oraz hakiem holowniczym. Szczegóły uzyskasz pod numerem 518 518 315.",
  },
  {
    q: "Jakie marki samochodów obsługujecie?",
    a: "Serwisujemy wszystkie marki samochodów osobowych i dostawczych — zarówno europejskie, jak i azjatyckie czy amerykańskie. Jako autoryzowany partner O.K. Serwis stosujemy oryginalne i jakościowe części zamienne.",
  },
  {
    q: "Czy można u Was kupić części samochodowe?",
    a: "Tak, prowadzimy sklep z częściami samochodowymi przy Rynku II 17 w Łęcznej. Sprowadzamy części na zamówienie zwykle w ciągu 24 godzin. Zadzwoń: 81 752 16 44.",
  },
  {
    q: "Od ilu lat działa firma OLMED?",
    a: "OLMED to rodzinna firma motoryzacyjna prowadzona przez Piotra i Radosława Medyńskich, działająca w Łęcznej nieprzerwanie od ponad 25 lat.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-24 lg:py-32 bg-surface">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-[10px] uppercase tracking-[0.3em] text-primary mb-4">FAQ</div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Najczęściej zadawane pytania
          </h2>
          <p className="mt-5 text-muted-foreground max-w-2xl mx-auto">
            Odpowiedzi na pytania o serwis samochodowy, Okręgową Stację Kontroli Pojazdów i sklep z częściami w Łęcznej.
          </p>
        </div>

        <div className="space-y-3">
          {faqItems.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="glass rounded-lg border border-border/60 overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-secondary/40 transition"
                >
                  <h3 className="font-display text-base lg:text-lg font-semibold">{item.q}</h3>
                  <ChevronDown className={`size-5 text-primary shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-sm lg:text-base text-muted-foreground leading-relaxed">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
