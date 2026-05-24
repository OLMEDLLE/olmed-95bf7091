import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Facebook, Menu, X } from "lucide-react";
import logoOlmed from "@/assets/logo-olmed.png";

const links = [
  { to: "/mechanik-leczna", label: "Mechanik" },
  { to: "/klimatyzacja-leczna", label: "Klimatyzacja" },
  { to: "/serwis-auta-leczna", label: "Serwis auta" },
  { to: "/stacja-kontroli-pojazdow-leczna", label: "OSKP" },
  { href: "/#kontakt", label: "Kontakt" },
] as const;


export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Topbar */}
      <div className="hidden lg:block border-b border-border/40 bg-background/80 backdrop-blur text-xs text-muted-foreground">
        <div className="max-w-7xl mx-auto px-6 h-10 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="tel:+48817521644" className="flex items-center gap-2 hover:text-foreground transition">
              <Phone className="size-3.5 text-primary" /> Warsztat: 81 752 16 44
            </a>
            <a href="tel:+48518518315" className="flex items-center gap-2 hover:text-foreground transition">
              <Phone className="size-3.5 text-primary" /> OSKP: 518 518 315
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="size-3.5 text-primary" /> Rynek II 17, Łęczna
            </span>
          </div>
          <div className="flex items-center gap-5">
            <span>Pn–Pt 7:00–17:00 · Sob 7:00–14:00</span>
            <a
              href="https://www.facebook.com/share/1BTdg8p1nA/?mibextid=wwXIfr"
              target="_blank" rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-foreground transition"
            >
              <Facebook className="size-3.5" /> Facebook
            </a>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/85 backdrop-blur-xl border-b border-border/60" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <img src={logoOlmed} alt="OLMED Łęczna" className="h-12 w-12 rounded-md object-cover" />
            <div className="leading-tight">
              <div className="font-display text-lg font-bold tracking-tight">OLMED</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Łęczna · od 25 lat</div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => {
              const className = "text-sm text-muted-foreground hover:text-foreground transition relative group";
              const inner = (
                <>
                  {l.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all group-hover:w-full" />
                </>
              );
              return "to" in l ? (
                <Link key={l.to} to={l.to} className={className}>{inner}</Link>
              ) : (
                <a key={l.href} href={l.href} className={className}>{inner}</a>
              );
            })}
          </nav>


          <div className="flex items-center gap-3">
            <a
              href="tel:+48817521644"
              className="hidden md:inline-flex items-center gap-2 bg-gradient-red text-primary-foreground px-5 py-2.5 rounded-md text-sm font-medium shadow-glow hover:opacity-90 transition"
            >
              <Phone className="size-4" /> Zadzwoń
            </a>
            <button
              className="lg:hidden p-2 rounded-md border border-border"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl">
            <nav className="px-6 py-6 flex flex-col gap-4">
              {links.map((l) =>
                "to" in l ? (
                  <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="text-base text-foreground/90">
                    {l.label}
                  </Link>
                ) : (
                  <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-base text-foreground/90">
                    {l.label}
                  </a>
                ),
              )}

              <a href="tel:+48817521644" className="mt-2 inline-flex items-center gap-2 bg-gradient-red text-primary-foreground px-5 py-3 rounded-md text-sm font-medium w-fit">
                <Phone className="size-4" /> 81 752 16 44
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
