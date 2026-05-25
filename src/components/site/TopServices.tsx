import { Link } from "@tanstack/react-router";
import { Wrench, Snowflake, ShieldCheck, ArrowRight } from "lucide-react";

const top = [
  {
    icon: Wrench,
    title: "Mechanik samochodowy Łęczna",
    desc: "Naprawy bieżące i awaryjne wszystkich marek. Diagnostyka komputerowa i części od ręki.",
    to: "/mechanik-leczna",
  },
  {
    icon: Snowflake,
    title: "Klimatyzacja samochodowa Łęczna",
    desc: "Nabijanie, odgrzybianie i kompleksowy serwis klimatyzacji w aucie — szybki termin i fachowa diagnoza.",
    to: "/klimatyzacja-leczna",
  },
  {
    icon: ShieldCheck,
    title: "Stacja Kontroli Pojazdów Łęczna",
    desc: "Okręgowa SKP OLMED przy Krasnystawskiej 54. Przeglądy osobowe, dostawcze, LPG i hak.",
    to: "/stacja-kontroli-pojazdow-leczna",
  },
];

export function TopServices() {
  return (
    <section id="top-uslugi" className="relative py-24 lg:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Najczęściej wybierane</div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold leading-tight text-balance">
            Najczęściej wybierane usługi OLMED w Łęcznej
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {top.map((s) => (
            <Link
              key={s.to}
              to={s.to}
              className="group glass rounded-2xl border border-border/60 p-8 hover:border-primary/40 transition flex flex-col"
            >
              <div className="size-12 rounded-md bg-gradient-red/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-gradient-red transition">
                <s.icon className="size-5 text-primary group-hover:text-primary-foreground transition" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{s.desc}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary">
                Dowiedz się więcej <ArrowRight className="size-4 group-hover:translate-x-1 transition" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
