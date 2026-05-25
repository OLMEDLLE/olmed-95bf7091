import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { StickyMobileCta } from "@/components/site/StickyMobileCta";
import { Breadcrumbs, breadcrumbsJsonLd } from "@/components/site/Breadcrumbs";
import { SubPageHeader } from "@/components/site/SubPageHeader";
import { Wrench, Cpu, Disc, Gauge, CheckCircle2 } from "lucide-react";

const URL = "https://olmed.lovable.app/mechanik-leczna";
const TITLE = "Mechanik Łęczna – OLMED Medyńscy | Serwis Samochodowy";
const DESC = "Mechanik samochodowy w Łęcznej. OLMED – rodzinny serwis Medyńscy. Naprawy, diagnostyka komputerowa, części od ręki. 25 lat doświadczenia. Zadzwoń 81 752 16 44.";

export const Route = createFileRoute("/mechanik-leczna")({
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
          { label: "Mechanik Łęczna", to: "/mechanik-leczna" },
        ])),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AutoRepair",
          name: "OLMED — Mechanik Samochodowy Łęczna",
          url: URL,
          telephone: "+48817521644",
          priceRange: "$$",
          image: "https://olmed.lovable.app/og.jpg",
          address: { "@type": "PostalAddress", streetAddress: "Rynek II 17", addressLocality: "Łęczna", postalCode: "21-010", addressCountry: "PL" },
          areaServed: ["Łęczna", "powiat łęczyński", "województwo lubelskie", "Łuszczów", "Milejów", "Puchaczów", "Cyców"],
          geo: { "@type": "GeoCoordinates", latitude: 51.3014, longitude: 22.8806 },
          openingHoursSpecification: [
            { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "07:00", closes: "17:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "07:00", closes: "14:00" },
          ],
        }),
      },
    ],
  }),
});

const services = [
  { icon: Wrench, t: "Naprawy mechaniczne", d: "Silnik, skrzynia biegów, układ napędowy, sprzęgło, rozrząd — pełen zakres napraw mechanicznych dla aut osobowych i dostawczych." },
  { icon: Cpu, t: "Diagnostyka komputerowa", d: "Odczyt błędów ze sterowników silnika, ABS, ESP, poduszek powietrznych. Profesjonalne testery dla wszystkich marek." },
  { icon: Disc, t: "Hamulce i zawieszenie", d: "Wymiana tarcz, klocków, amortyzatorów, wahaczy, tulei i drążków. Bezpieczeństwo Twoje i pasażerów to nasz priorytet." },
  { icon: Gauge, t: "Opony i geometria", d: "Zapewniamy montaż opon oraz ustawienie geometrii kół, wyważanie i sezonową wymianę." },
];

const faqs = [
  { q: "Gdzie znajdę najlepszego mechanika w Łęcznej?", a: "Serwis OLMED przy Rynku II 17 w Łęcznej działa od 25 lat. Rodzina Medyńskich osobiście pilnuje jakości każdej naprawy." },
  { q: "Czy naprawiacie wszystkie marki samochodów?", a: "Tak — obsługujemy auta osobowe i dostawcze wszystkich marek europejskich, azjatyckich i amerykańskich." },
  { q: "Ile kosztuje diagnostyka komputerowa w Łęcznej?", a: "Podstawowa diagnostyka komputerowa w OLMED Łęczna to koszt od 80 zł. Przy zleceniu naprawy diagnostyka często jest darmowa." },
  { q: "Czy obsługujecie kierowców spoza Łęcznej?", a: "Tak, przyjmujemy klientów z całego powiatu łęczyńskiego i województwa lubelskiego — m.in. Łuszczów, Milejów, Puchaczów, Cyców, Spiczyn." },
];

function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground pb-24 lg:pb-0">
      <Navbar />
      <main>
        <Breadcrumbs items={[{ label: "Strona główna", to: "/" }, { label: "Mechanik Łęczna" }]} />
        <SubPageHeader
          eyebrow="Mechanik Samochodowy · Łęczna"
          title="Mechanik samochodowy w Łęcznej – OLMED Medyńscy"
          lead="Rodzinny serwis samochodowy w sercu Łęcznej. Od 25 lat naprawiamy auta osobowe i dostawcze kierowcom z Łęcznej, powiatu łęczyńskiego i całego województwa lubelskiego. Diagnostyka, mechanika, części od ręki — wszystko w jednym miejscu."
        />

        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6 text-muted-foreground leading-relaxed">
              <h2 className="font-display text-3xl font-bold text-foreground">Profesjonalna mechanika samochodowa w Łęcznej</h2>
              <p>
                Szukasz sprawdzonego <strong>mechanika w Łęcznej</strong>? Serwis OLMED przy Rynku II 17
                obsługuje kierowców z Łęcznej i okolic od ponad 25 lat. Firma rodzinna Piotra i Radosława
                Medyńskich to gwarancja uczciwej wyceny, terminowych napraw i części wysokiej jakości od
                zaufanych dostawców — O.K. Serwis, ELF oraz ORLEN.
              </p>
              <p>
                W naszym warsztacie samochodowym w Łęcznej wykonujemy pełny zakres napraw mechanicznych:
                od wymiany rozrządu, sprzęgła i silnika, przez serwis hamulców i zawieszenia, aż po
                geometrię kół, wymianę opon i sezonowe przeglądy. Korzystamy z nowoczesnej diagnostyki
                komputerowej, która pozwala precyzyjnie zlokalizować usterkę i obniżyć koszt naprawy.
              </p>

              <h3 className="font-display text-2xl font-bold text-foreground pt-4">Mechanik Łęczna – zakres usług</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {services.map((s) => (
                  <div key={s.t} className="glass rounded-lg p-5 border border-border/60">
                    <s.icon className="size-5 text-primary mb-3" />
                    <h4 className="font-semibold text-foreground mb-1">{s.t}</h4>
                    <p className="text-sm">{s.d}</p>
                  </div>
                ))}
              </div>

              <h3 className="font-display text-2xl font-bold text-foreground pt-4">Dlaczego warto wybrać OLMED?</h3>
              <ul className="space-y-3">
                {[
                  "25 lat doświadczenia w Łęcznej i okolicach",
                  "Firma rodzinna — Piotr i Radosław Medyńscy odpowiadają osobiście za jakość",
                  "Własny sklep z częściami — większość komponentów dostępna od ręki",
                  "Diagnostyka komputerowa wszystkich marek",
                  "Możliwość pomocy drogowej w obrębie powiatu łęczyńskiego",
                  "Gwarancja na wykonane naprawy",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 text-primary shrink-0 mt-0.5" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>

              <h3 className="font-display text-2xl font-bold text-foreground pt-4">Obsługujemy kierowców z Łęcznej i okolic</h3>
              <p>
                Do warsztatu OLMED w Łęcznej trafiają auta nie tylko z samego miasta, ale również z
                pobliskich miejscowości: Łuszczowa, Milejowa, Puchaczowa, Cycowa, Spiczyna, Ludwina i
                wielu innych zakątków powiatu łęczyńskiego i województwa lubelskiego. Dla klientów
                spoza Łęcznej oferujemy elastyczne terminy, możliwość zostawienia auta na dłużej oraz
                pomoc drogową, jeśli pojazd nie jest w stanie samodzielnie dojechać do serwisu.
              </p>
            </div>

            <aside className="space-y-6">
              <div className="glass rounded-2xl p-6 border border-border/60">
                <div className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Umów wizytę</div>
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
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-8">FAQ – Mechanik Łęczna</h2>
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
