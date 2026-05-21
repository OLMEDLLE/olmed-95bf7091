import entrance from "@/assets/olmed-entrance.jpg";
import street from "@/assets/olmed-street.jpg";

export function About() {
  return (
    <section id="o-firmie" className="relative py-28 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <img src={entrance} alt="Wejście do serwisu OLMED" className="w-full aspect-[3/4] object-cover rounded-lg shadow-elevated" />
            <img src={street} alt="Budynek OLMED Łęczna" className="w-full aspect-[3/4] object-cover rounded-lg shadow-elevated mt-12" />
          </div>
          <div className="absolute -bottom-6 -left-6 glass rounded-lg px-6 py-5">
            <div className="font-display text-4xl font-bold text-primary">25</div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">lat na rynku</div>
          </div>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">O firmie</div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold leading-tight text-balance">
            Rodzinna firma. Profesjonalny warsztat. <span className="text-primary">Nowoczesna motoryzacja.</span>
          </h2>
          <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
            <p>
              OLMED to rodzinna firma z Łęcznej, która od ćwierć wieku rozwija się razem
              z kierowcami z regionu. Zaczęliśmy od małego warsztatu — dziś prowadzimy
              kompleksowy serwis samochodowy, sklep z częściami oraz Okręgową Stację
              Kontroli Pojazdów.
            </p>
            <p>
              Łączymy doświadczenie zdobyte przez 25 lat z nowoczesnym wyposażeniem,
              cyfrową diagnostyką i autoryzowanym podejściem opartym o sprawdzonych
              partnerów — O.K. Serwis, ELF i ORLEN.
            </p>
            <p>
              Wierzymy, że dobry serwis to nie tylko narzędzia i części. To przede
              wszystkim ludzie, którzy znają samochody i traktują klientów uczciwie.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6 pt-8 border-t border-border">
            {[
              { v: "25", l: "lat doświadczenia" },
              { v: "2", l: "oddziały w Łęcznej" },
              { v: "3", l: "marki partnerskie" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl font-bold">{s.v}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
