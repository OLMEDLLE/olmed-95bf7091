import { Phone, MapPin, Clock, ShieldCheck } from "lucide-react";
import oskp from "@/assets/oskp-building.png";

export function Oskp() {
  return (
    <section id="oskp" className="relative py-28 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,oklch(0.62_0.22_25/0.15),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-16 items-center">
        <div className="lg:col-span-3 relative">
          <div className="absolute -inset-4 bg-gradient-red/20 blur-3xl rounded-full" />
          <img
            src={oskp}
            alt="Okręgowa Stacja Kontroli Pojazdów OLMED w Łęcznej"
            className="relative w-full aspect-[16/10] object-cover rounded-xl shadow-elevated border border-border"
          />
        </div>

        <div className="lg:col-span-2">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4 flex items-center gap-2">
            <ShieldCheck className="size-4" /> Okręgowa SKP
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold leading-tight text-balance">
            Stacja Kontroli Pojazdów
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Profesjonalna diagnostyka prowadzona przez doświadczonych diagnostów
            na nowoczesnym stanowisku pomiarowym. Pełen zakres badań technicznych
            samochodów osobowych, dostawczych i pojazdów z instalacją gazową.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-4 p-4 glass rounded-lg">
              <MapPin className="size-5 text-primary shrink-0 mt-0.5" />
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Adres</div>
                <div className="font-medium">Krasnystawska 54, Łęczna</div>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 glass rounded-lg">
              <Clock className="size-5 text-primary shrink-0 mt-0.5" />
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Godziny otwarcia</div>
                <div className="font-medium">Pn–Pt 7:00–19:00 · Sob 7:00–14:00</div>
              </div>
            </div>
          </div>

          <a
            href="tel:+48518518315"
            className="mt-8 inline-flex items-center gap-3 bg-gradient-red text-primary-foreground px-6 py-4 rounded-md font-medium shadow-glow hover:opacity-90 transition w-full sm:w-auto justify-center"
          >
            <Phone className="size-4" /> Skontaktuj się telefonicznie · 518 518 315
          </a>
        </div>
      </div>
    </section>
  );
}
