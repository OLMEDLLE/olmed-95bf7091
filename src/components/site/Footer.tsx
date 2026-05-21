import { Phone, Mail, MapPin, Facebook } from "lucide-react";
import logoOlmed from "@/assets/logo-olmed.png";
import logoOk from "@/assets/logo-ok-serwis.png";
import logoElf from "@/assets/logo-elf.png";
import logoOrlen from "@/assets/logo-orlen.jpg";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-surface">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src={logoOlmed} alt="OLMED" className="h-12 w-12 rounded-md" />
              <div>
                <div className="font-display text-xl font-bold">OLMED</div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Łęczna · od 25 lat</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
              Rodzinna firma motoryzacyjna z Łęcznej. Profesjonalny serwis,
              diagnostyka, sklep z częściami i Okręgowa Stacja Kontroli Pojazdów.
            </p>
            <div className="mt-8">
              <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-4">Partnerzy</div>
              <div className="flex items-center gap-6">
                <img src={logoOk} alt="O.K. Serwis" className="h-10 w-10 rounded object-cover" />
                <img src={logoElf} alt="ELF" className="h-7 bg-white rounded px-2 py-1 object-contain" />
                <img src={logoOrlen} alt="ORLEN" className="h-9 object-contain rounded" />
              </div>
            </div>
          </div>

          <div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-5">Serwis</div>
            <div className="space-y-3 text-sm">
              <a href="tel:+48817521644" className="flex items-center gap-2 hover:text-primary transition"><Phone className="size-3.5 text-primary" /> 81 752 16 44</a>
              <a href="mailto:olmedok@wp.pl" className="flex items-center gap-2 hover:text-primary transition"><Mail className="size-3.5 text-primary" /> olmedok@wp.pl</a>
              <div className="flex items-start gap-2 text-muted-foreground"><MapPin className="size-3.5 text-primary mt-0.5" /> Rynek II 17, Łęczna</div>
              <div className="text-muted-foreground pl-5">Pn–Pt 7:00–17:00 · Sob 7:00–14:00</div>
            </div>
          </div>

          <div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-5">OSKP</div>
            <div className="space-y-3 text-sm">
              <a href="tel:+48518518315" className="flex items-center gap-2 hover:text-primary transition"><Phone className="size-3.5 text-primary" /> 518 518 315</a>
              <div className="flex items-start gap-2 text-muted-foreground"><MapPin className="size-3.5 text-primary mt-0.5" /> Krasnystawska 54, Łęczna</div>
              <div className="text-muted-foreground pl-5">Pn–Pt 7:00–19:00 · Sob 7:00–14:00</div>
              <a href="https://www.facebook.com/share/1BTdg8p1nA/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-primary transition pt-2">
                <Facebook className="size-3.5 text-primary" /> Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} OLMED Łęczna. Wszelkie prawa zastrzeżone.</div>
          <div className="flex gap-6">
            <a href="#o-firmie" className="hover:text-foreground transition">O firmie</a>
            <a href="#uslugi" className="hover:text-foreground transition">Usługi</a>
            <a href="#oskp" className="hover:text-foreground transition">OSKP</a>
            <a href="#kontakt" className="hover:text-foreground transition">Kontakt</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
