import { Phone, MapPin, Calendar } from "lucide-react";

export function StickyMobileCta() {
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 border-t border-border/70 bg-background/95 backdrop-blur-xl">
      <div className="grid grid-cols-3 gap-px bg-border">
        <a
          href="tel:+48817521644"
          aria-label="Zadzwoń do serwisu OLMED Łęczna"
          className="flex flex-col items-center gap-1 py-3 bg-background text-foreground active:bg-secondary"
        >
          <Phone className="size-4 text-primary" />
          <span className="text-[11px] font-medium">Zadzwoń</span>
        </a>
        <a
          href="#kontakt"
          aria-label="Umów wizytę w OLMED Łęczna"
          className="flex flex-col items-center gap-1 py-3 bg-gradient-red text-primary-foreground"
        >
          <Calendar className="size-4" />
          <span className="text-[11px] font-semibold">Umów wizytę</span>
        </a>
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=Rynek+II+17+%C5%81%C4%99czna"
          target="_blank"
          rel="noreferrer"
          aria-label="Wyznacz trasę do OLMED Łęczna"
          className="flex flex-col items-center gap-1 py-3 bg-background text-foreground active:bg-secondary"
        >
          <MapPin className="size-4 text-primary" />
          <span className="text-[11px] font-medium">Trasa</span>
        </a>
      </div>
    </div>
  );
}
