import { Phone, Mail, MapPin, Clock, Facebook, ArrowUpRight } from "lucide-react";

const branches = [
  {
    name: "OLMED — Serwis i sklep",
    address: "Rynek II 17, Łęczna",
    phone: "81 752 16 44",
    phoneHref: "tel:+48817521644",
    email: "olmedok@wp.pl",
    hours: ["Pn–Pt: 7:00–17:00", "Sobota: 7:00–14:00"],
    map: "https://www.google.com/maps?q=Rynek+II+17+%C5%81%C4%99czna&output=embed",
  },
  {
    name: "OLMED — Stacja Kontroli Pojazdów",
    address: "Krasnystawska 54, Łęczna",
    phone: "518 518 315",
    phoneHref: "tel:+48518518315",
    email: "olmedok@wp.pl",
    hours: ["Pn–Pt: 7:00–19:00", "Sobota: 7:00–14:00"],
    map: "https://www.google.com/maps?q=Krasnystawska+54+%C5%81%C4%99czna&output=embed",
  },
];

export function Contact() {
  return (
    <section id="kontakt" className="py-28 lg:py-40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Kontakt</div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-balance leading-tight">
            Dwa oddziały w Łęcznej. Zadzwoń lub odwiedź.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {branches.map((b) => (
            <div key={b.name} className="bg-gradient-card border border-border rounded-2xl overflow-hidden flex flex-col">
              <div className="aspect-[16/10] bg-surface relative">
                <iframe
                  src={b.map}
                  className="size-full grayscale-[0.4] contrast-110"
                  loading="lazy"
                  title={b.name}
                />
              </div>
              <div className="p-8 lg:p-10 flex-1 flex flex-col">
                <h3 className="font-display text-2xl font-semibold mb-6">{b.name}</h3>
                <div className="space-y-4 text-sm">
                  <a href={`https://maps.google.com/?q=${encodeURIComponent(b.address)}`} target="_blank" rel="noreferrer" className="flex items-start gap-3 group">
                    <MapPin className="size-4 text-primary mt-0.5 shrink-0" />
                    <span className="group-hover:text-primary transition">{b.address}</span>
                  </a>
                  <a href={b.phoneHref} className="flex items-start gap-3 group">
                    <Phone className="size-4 text-primary mt-0.5 shrink-0" />
                    <span className="group-hover:text-primary transition font-medium">{b.phone}</span>
                  </a>
                  <a href={`mailto:${b.email}`} className="flex items-start gap-3 group">
                    <Mail className="size-4 text-primary mt-0.5 shrink-0" />
                    <span className="group-hover:text-primary transition">{b.email}</span>
                  </a>
                  <div className="flex items-start gap-3">
                    <Clock className="size-4 text-primary mt-0.5 shrink-0" />
                    <div>
                      {b.hours.map((h) => <div key={h}>{h}</div>)}
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex gap-3">
                  <a href={b.phoneHref} className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-red text-primary-foreground px-5 py-3 rounded-md text-sm font-medium shadow-glow hover:opacity-90 transition">
                    <Phone className="size-4" /> Zadzwoń
                  </a>
                  <a href={`https://maps.google.com/?q=${encodeURIComponent(b.address)}`} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 glass px-5 py-3 rounded-md text-sm font-medium hover:bg-secondary transition">
                    Trasa <ArrowUpRight className="size-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="https://www.facebook.com/share/1BTdg8p1nA/?mibextid=wwXIfr"
            target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition"
          >
            <Facebook className="size-4" /> Śledź nas na Facebooku
          </a>
        </div>
      </div>
    </section>
  );
}
