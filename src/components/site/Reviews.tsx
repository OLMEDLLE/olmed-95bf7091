import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const reviews = [
  { name: "Paweł K.", text: "Bardzo dobry serwis. Fachowa obsługa, uczciwa wycena i naprawa zrobiona terminowo. Polecam wszystkim z okolic Łęcznej.", rating: 5 },
  { name: "Anna M.", text: "Korzystam od kilku lat — zarówno warsztat, jak i SKP. Zawsze rzeczowo wytłumaczą co i dlaczego trzeba zrobić. Można im zaufać.", rating: 5 },
  { name: "Tomasz W.", text: "Profesjonalna diagnostyka komputerowa. Znaleźli usterkę, której nie wykrył inny warsztat. Bardzo dobry kontakt.", rating: 5 },
  { name: "Magdalena S.", text: "Wymiana oleju i przegląd zrobione szybko i porządnie. Sklep ma sporo części od ręki. Polecam.", rating: 5 },
  { name: "Krzysztof D.", text: "Solidna firma z wieloletnim doświadczeniem. Widać, że ludzie znają się na robocie. Auto wróciło sprawne.", rating: 5 },
];

export function Reviews() {
  const [i, setI] = useState(0);
  const prev = () => setI((p) => (p - 1 + reviews.length) % reviews.length);
  const next = () => setI((p) => (p + 1) % reviews.length);

  return (
    <section className="relative py-28 lg:py-40 bg-surface overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.62_0.22_25/0.1),transparent_60%)]" />
      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Opinie klientów</div>
        <h2 className="font-display text-4xl lg:text-5xl font-bold text-balance leading-tight mb-16">
          Co mówią o nas kierowcy z Łęcznej
        </h2>

        <div className="relative">
          <Quote className="absolute -top-8 left-1/2 -translate-x-1/2 size-16 text-primary/15" />
          <div className="glass rounded-2xl p-10 lg:p-16 min-h-[280px] flex flex-col justify-center">
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: reviews[i].rating }).map((_, k) => (
                <Star key={k} className="size-5 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-xl lg:text-2xl font-display leading-relaxed text-balance">
              „{reviews[i].text}"
            </p>
            <div className="mt-8 text-sm uppercase tracking-widest text-muted-foreground">
              {reviews[i].name} · Google
            </div>
          </div>

          <div className="flex justify-center items-center gap-3 mt-8">
            <button onClick={prev} className="size-11 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition" aria-label="Poprzednia">
              <ChevronLeft className="size-5" />
            </button>
            <div className="flex gap-2 px-4">
              {reviews.map((_, k) => (
                <button
                  key={k}
                  onClick={() => setI(k)}
                  className={`h-1.5 rounded-full transition-all ${k === i ? "w-8 bg-primary" : "w-1.5 bg-border"}`}
                  aria-label={`Opinia ${k + 1}`}
                />
              ))}
            </div>
            <button onClick={next} className="size-11 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition" aria-label="Następna">
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
