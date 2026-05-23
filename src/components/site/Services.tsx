import { Wrench, Cpu, Droplet, Snowflake, Disc, Package, CircleDot, ClipboardCheck, ShieldCheck, Truck, Phone } from "lucide-react";
import pomocDrogowa from "@/assets/pomoc-drogowa.jpeg";

const services = [
  { icon: Wrench, title: "Mechanika pojazdowa", desc: "Naprawy bieżące, kapitalne i awaryjne — z dbałością o każdy detal." },
  { icon: Cpu, title: "Diagnostyka komputerowa", desc: "Profesjonalne testery i odczyt błędów sterowników wszystkich marek." },
  { icon: Droplet, title: "Wymiana oleju", desc: "Oleje ELF dobrane do silnika oraz wymiana filtrów eksploatacyjnych." },
  { icon: Snowflake, title: "Serwis klimatyzacji", desc: "Nabijanie, odgrzybianie i pełna obsługa układów chłodzenia kabiny." },
  { icon: Disc, title: "Hamulce i zawieszenie", desc: "Diagnostyka, regeneracja i wymiana podzespołów odpowiedzialnych za bezpieczeństwo." },
  { icon: Package, title: "Części samochodowe", desc: "Sklep z częściami markowych producentów — dostępne od ręki." },
  { icon: CircleDot, title: "Opony", desc: "Zapewniamy montaż." },
  { icon: Truck, title: "Pomoc drogowa", desc: "Holowanie i transport pojazdów — szybka reakcja na terenie Łęcznej i okolic." },
  { icon: ClipboardCheck, title: "Przeglądy techniczne", desc: "Kompleksowe przygotowanie auta do każdego rodzaju badania." },
  { icon: ShieldCheck, title: "Stacja Kontroli Pojazdów", desc: "Okręgowa SKP — pełen zakres badań na nowoczesnym sprzęcie." },
];

export function Services() {
  return (
    <section id="uslugi" className="relative py-28 lg:py-40 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Nasze usługi</div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-balance leading-tight">
              Kompleksowa obsługa samochodu w jednym miejscu
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Od rutynowych przeglądów, przez nowoczesną diagnostykę elektroniki,
            aż po pełnoprawną Stację Kontroli Pojazdów.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative bg-card p-8 lg:p-10 hover:bg-surface-elevated transition-colors duration-300"
            >
              <div className="absolute top-0 left-0 h-px w-0 bg-primary transition-all duration-500 group-hover:w-full" />
              <div className="size-12 rounded-md bg-gradient-red/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-gradient-red group-hover:border-transparent transition">
                <s.icon className="size-5 text-primary group-hover:text-primary-foreground transition" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
