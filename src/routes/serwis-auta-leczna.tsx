import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { StickyMobileCta } from "@/components/site/StickyMobileCta";
import { Breadcrumbs, breadcrumbsJsonLd } from "@/components/site/Breadcrumbs";
import { SubPageHeader } from "@/components/site/SubPageHeader";
import { CheckCircle2 } from "lucide-react";

const URL = "https://olmed.lovable.app/serwis-auta-leczna";
const TITLE = "Serwis Auta Łęczna – OLMED Medyńscy | Przeglądy i Naprawy";
const DESC = "Serwis samochodowy w Łęcznej. OLMED – kompleksowy przegląd auta, wymiana oleju, opon, klocków. 25 lat doświadczenia. Rynek II 17. Tel. 81 752 16 44.";

export const Route = createFileRoute("/serwis-auta-leczna")({
  component: Page,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: URL },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbsJsonLd([
          { label: "Strona główna", to: "/" },
          { label: "Serwis Auta Łęczna", to: "/serwis-auta-leczna" },
        ])),
      },
    ],
  }),
});

const faqs = [
  { q: "Co wchodzi w skład przeglądu auta w OLMED Łęczna?", a: "Standardowy przegląd obejmuje wymianę oleju i filtrów, kontrolę hamulców, zawieszenia, układu wydechowego, świateł, opon, akumulatora i poziomu płynów eksploatacyjnych." },
  { q: "Jak często serwisować samochód?", a: "Najczęściej co 15 000 km lub raz w roku — zgodnie z zaleceniem producenta. W OLMED pomagamy dobrać optymalny interwał dla Twojego auta i stylu jazdy." },
  { q: "Czy mogę zostawić auto na dzień?", a: "Tak, oferujemy obsługę zostawienia auta na cały dzień. Po umówieniu wizyty wystarczy podrzucić kluczyki — odbierzesz gotowy samochód po pracy." },
];

function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground pb-24 lg:pb-0">
      <Navbar />
      <main>
        <Breadcrumbs items={[{ label: "Strona główna", to: "/" }, { label: "Serwis Auta Łęczna" }]} />
        <SubPageHeader
          eyebrow="Serwis samochodowy · Łęczna"
          title="Serwis auta w Łęcznej – OLMED Medyńscy"
          lead="Kompleksowy serwis samochodu w Łęcznej: przeglądy okresowe, wymiana oleju ELF i ORLEN, hamulce, opony, klimatyzacja i diagnostyka. Jedna wizyta – wszystko zrobione."
        />

        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6 text-muted-foreground leading-relaxed">
              <h2 className="font-display text-3xl font-bold text-foreground">Kompleksowy serwis auta w jednym miejscu</h2>
              <p>
                <strong>OLMED Łęczna</strong> to rodzinny serwis samochodowy działający od 25 lat. W jednym
                miejscu wykonasz przegląd okresowy, wymianę oleju, naprawy mechaniczne, serwis klimatyzacji,
                wymianę opon i przegląd techniczny w naszej Okręgowej Stacji Kontroli Pojazdów. Oszczędzasz
                czas i pieniądze — nie musisz jeździć po Łęcznej z jednego warsztatu do drugiego.
              </p>

              <h3 className="font-display text-2xl font-bold text-foreground pt-4">Co obejmuje serwis auta w OLMED?</h3>
              <ul className="space-y-3">
                {[
                  "Wymiana oleju silnikowego i filtrów (oleju, paliwa, powietrza, kabinowego)",
                  "Kontrola i wymiana płynów eksploatacyjnych — chłodniczy, hamulcowy, wspomagania",
                  "Diagnostyka komputerowa i odczyt błędów",
                  "Sprawdzenie i wymiana klocków, tarcz hamulcowych",
                  "Kontrola zawieszenia, geometrii kół, łożysk",
                  "Serwis i nabijanie klimatyzacji",
                  "Wymiana opon i sezonowe przechowywanie",
                  "Pomoc drogowa w obrębie Łęcznej i powiatu łęczyńskiego",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 text-primary shrink-0 mt-0.5" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>

              <h3 className="font-display text-2xl font-bold text-foreground pt-4">Oryginalne części i markowe oleje</h3>
              <p>
                Jesteśmy autoryzowanym partnerem <strong>O.K. Serwis</strong> – ogólnopolskiej sieci niezależnych
                warsztatów oferującej jakość porównywalną z ASO przy niższych cenach. Stosujemy oryginalne
                oleje <strong>ELF</strong> i <strong>ORLEN</strong> dopasowane do specyfikacji silnika.
              </p>

              <h3 className="font-display text-2xl font-bold text-foreground pt-4">Serwis auta – Łęczna i okolice</h3>
              <p>
                Do warsztatu OLMED trafiają auta z Łęcznej, Łuszczowa, Milejowa, Puchaczowa, Cycowa,
                Spiczyna i wielu innych miejscowości województwa lubelskiego. Dla stałych klientów
                oferujemy elastyczne terminy, indywidualne rabaty na części i przypomnienia o
                kolejnym przeglądzie.
              </p>
            </div>

            <aside className="space-y-6">
              <div className="glass rounded-2xl p-6 border border-border/60">
                <div className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Umów serwis</div>
                <h3 className="font-display text-xl font-bold mb-4">OLMED – serwis Łęczna</h3>
                <p className="text-sm text-muted-foreground mb-4">Rynek II 17, 21-010 Łęczna</p>
                <p className="text-sm text-muted-foreground mb-4">Pn–Pt: 7:00–17:00<br />Sob: 7:00–14:00</p>
                <a href="tel:+48817521644" className="block text-center bg-gradient-red text-primary-foreground px-5 py-3 rounded-md font-semibold">
                  81 752 16 44
                </a>
              </div>
              <div className="rounded-2xl overflow-hidden border border-border/60 aspect-square">
                <iframe
                  src="https://www.google.com/maps?q=Rynek+II+17+%C5%81%C4%99czna&output=embed"
                  className="size-full"
                  loading="lazy"
                  title="OLMED Łęczna – mapa"
                />
              </div>
            </aside>
          </div>
        </section>

        <section className="py-16 bg-surface">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-8">FAQ – Serwis auta Łęczna</h2>
            <div className="space-y-3">
              {faqs.map((f) => (
                <details key={f.q} className="glass rounded-lg border border-border/60 p-5">
                  <summary className="font-semibold cursor-pointer">{f.q}</summary>
                  <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link to="/" className="text-sm text-primary hover:underline">← Wróć na stronę główną OLMED Łęczna</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyMobileCta />
    </div>
  );
}
