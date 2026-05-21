import { useEffect, useRef, useState } from "react";
import { Award, Cpu, Users, Sparkles, Heart, MapPin } from "lucide-react";

function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const start = performance.now();
        const dur = 1600;
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          setVal(Math.round(end * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        obs.disconnect();
      }
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [end]);
  return <span ref={ref}>{val}{suffix}</span>;
}

const values = [
  { icon: Award, title: "25 lat doświadczenia", desc: "Ćwierć wieku ciągłej pracy z samochodami w jednym miejscu." },
  { icon: Cpu, title: "Nowoczesna diagnostyka", desc: "Profesjonalny sprzęt pomiarowy i testery elektroniki." },
  { icon: Sparkles, title: "Jakość wykonania", desc: "Markowe części i sprawdzone oleje od partnerów ELF i ORLEN." },
  { icon: Users, title: "Doświadczony zespół", desc: "Mechanicy i diagności z wieloletnią praktyką warsztatową." },
  { icon: Heart, title: "Zaufanie klientów", desc: "Pracujemy uczciwie — kierowcy wracają do nas latami." },
  { icon: MapPin, title: "Lokalna renoma", desc: "Rozpoznawalna marka motoryzacyjna w Łęcznej i okolicy." },
];

export function WhyUs() {
  return (
    <section className="relative py-28 lg:py-40 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Dlaczego my</div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-balance leading-tight">
            Marka motoryzacyjna budowana przez ćwierć wieku
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mb-20">
          {[
            { v: 25, s: "+", l: "lat na rynku motoryzacyjnym" },
            { v: 9, s: "", l: "obszarów specjalizacji" },
            { v: 2, s: "", l: "oddziały w Łęcznej" },
          ].map((s) => (
            <div key={s.l} className="glass rounded-xl p-8 text-center">
              <div className="font-display text-5xl lg:text-6xl font-bold text-primary">
                <Counter end={s.v} suffix={s.s} />
              </div>
              <div className="mt-3 text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v) => (
            <div key={v.title} className="group bg-gradient-card border border-border rounded-xl p-7 hover:border-primary/40 transition">
              <v.icon className="size-7 text-primary mb-5 group-hover:scale-110 transition" />
              <h3 className="font-display text-lg font-semibold mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
