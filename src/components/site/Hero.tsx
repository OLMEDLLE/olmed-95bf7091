import { ArrowRight, Phone } from "lucide-react";
import facade from "@/assets/olmed-facade.jpeg";
import logoOk from "@/assets/logo-ok-serwis.png";
import logoElf from "@/assets/logo-elf.png";
import logoOrlen from "@/assets/logo-orlen.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-hero">
      <div className="absolute inset-0">
        <img src={facade} alt="Siedziba OLMED Łęczna" className="size-full object-cover opacity-40 animate-slow-zoom" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,oklch(0.62_0.22_25/0.25),transparent_55%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-32 lg:pt-44 pb-24 lg:pb-32">
        <div className="max-w-4xl animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs uppercase tracking-[0.25em] text-muted-foreground mb-8">
            <span className="size-1.5 rounded-full bg-primary" /> 25 lat doświadczenia · Łęczna
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] text-balance">
            OLMED — <span className="block text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground to-primary">nowoczesna motoryzacja</span> z 25-letnią historią
          </h1>

          <p className="mt-8 text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Profesjonalny serwis, diagnostyka, części samochodowe i obsługa kierowców
            oparta na doświadczeniu, jakości i zaufaniu klientów.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#uslugi"
              className="group inline-flex items-center gap-2 bg-gradient-red text-primary-foreground px-7 py-4 rounded-md font-medium shadow-glow hover:opacity-90 transition"
            >
              Zobacz usługi
              <ArrowRight className="size-4 group-hover:translate-x-1 transition" />
            </a>
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 glass text-foreground px-7 py-4 rounded-md font-medium hover:bg-secondary transition"
            >
              <Phone className="size-4" /> Skontaktuj się
            </a>
          </div>
        </div>

        {/* Partner badges */}
        <div className="relative mt-24 lg:mt-32">
          <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-6">Zaufali nam · Oficjalni partnerzy</div>
          <div className="flex flex-wrap items-center gap-x-10 gap-y-6">
            <img src={logoOk} alt="O.K. Serwis" className="h-14 w-14 rounded object-cover" />
            <img src={logoElf} alt="ELF" className="h-10 object-contain bg-white rounded px-3 py-1.5" />
            <img src={logoOrlen} alt="ORLEN" className="h-12 object-contain rounded" />
          </div>
        </div>
      </div>

      {/* Decorative stroke text */}
      <div className="hidden lg:block absolute -bottom-6 -right-6 stroke-text font-display font-bold text-[12rem] leading-none select-none pointer-events-none">
        OLMED
      </div>
    </section>
  );
}
