import { Phone, MapPin, ArrowUpRight } from "lucide-react";

interface SubPageHeaderProps {
  eyebrow: string;
  title: string;
  lead: string;
}

export function SubPageHeader({ eyebrow, title, lead }: SubPageHeaderProps) {
  return (
    <header className="relative py-12 lg:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,oklch(0.62_0.22_25/0.15),transparent_60%)] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-[10px] uppercase tracking-[0.3em] text-primary mb-4">{eyebrow}</div>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-balance max-w-4xl">
          {title}
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">{lead}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="tel:+48817521644"
            className="inline-flex items-center gap-2 bg-gradient-red text-primary-foreground px-6 py-3 rounded-md font-medium shadow-glow hover:opacity-90 transition"
          >
            <Phone className="size-4" /> Zadzwoń: 81 752 16 44
          </a>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Rynek+II+17+%C5%81%C4%99czna"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 glass px-6 py-3 rounded-md font-medium hover:bg-secondary transition"
          >
            <MapPin className="size-4" /> Wyznacz trasę <ArrowUpRight className="size-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
}
