import { Award, Users, MapPin, Package, Handshake, Truck } from "lucide-react";

const reasons = [
  { icon: Award, title: "25 lat doświadczenia w Łęcznej", desc: "Od ponad ćwierć wieku naprawiamy auta kierowcom z Łęcznej, powiatu łęczyńskiego i całego województwa lubelskiego." },
  { icon: Users, title: "Rodzinna firma Medyńscy", desc: "Piotr i Radosław Medyńscy osobiście nadzorują każdą naprawę. Znamy naszych klientów po imieniu." },
  { icon: MapPin, title: "Dwa oddziały w Łęcznej", desc: "Serwis przy Rynku II 17 oraz Okręgowa Stacja Kontroli Pojazdów przy Krasnystawskiej 54 — wszystko na miejscu." },
  { icon: Package, title: "Części od ręki", desc: "Własny sklep z częściami samochodowymi w Łęcznej. Większość elementów dostępna od ręki lub w 24 h." },
  { icon: Handshake, title: "Partner O.K. Serwis, ELF i ORLEN", desc: "Pracujemy na oryginalnych częściach i markowych olejach. Gwarancja jakości potwierdzona certyfikatami." },
  { icon: Truck, title: "Pomoc drogowa w okolicach Łęcznej", desc: "Holujemy auta z Łuszczowa, Milejowa, Puchaczowa, Cycowa i całego powiatu łęczyńskiego." },
];

export function WhyOlmed() {
  return (
    <section id="dlaczego-olmed" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Dlaczego my</div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold leading-tight text-balance">
            Dlaczego kierowcy z Łęcznej wybierają OLMED
          </h2>
          <p className="mt-5 text-muted-foreground max-w-2xl">
            Sześć powodów, dla których mieszkańcy Łęcznej i okolic od 25 lat oddają swoje samochody w ręce rodziny Medyńskich.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden">
          {reasons.map((r) => (
            <div key={r.title} className="group relative bg-card p-8 lg:p-10 hover:bg-surface-elevated transition">
              <div className="size-12 rounded-md bg-gradient-red/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-gradient-red group-hover:border-transparent transition">
                <r.icon className="size-5 text-primary group-hover:text-primary-foreground transition" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
