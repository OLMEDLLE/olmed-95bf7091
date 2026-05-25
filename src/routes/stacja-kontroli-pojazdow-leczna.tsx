import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { StickyMobileCta } from "@/components/site/StickyMobileCta";
import { Breadcrumbs, breadcrumbsJsonLd } from "@/components/site/Breadcrumbs";
import { SubPageHeader } from "@/components/site/SubPageHeader";
import { CheckCircle2 } from "lucide-react";

const URL = "https://olmed.lovable.app/stacja-kontroli-pojazdow-leczna";
const TITLE = "OSKP Łęczna – Stacja Kontroli Pojazdów OLMED | Przeglądy";
const DESC = "Okręgowa Stacja Kontroli Pojazdów OLMED w Łęcznej. Przeglądy rejestracyjne osobowe, dostawcze, LPG, hak. Krasnystawska 54. Pn–Pt 7–19, Sob 7–14. Tel. 518 518 315.";

export const Route = createFileRoute("/stacja-kontroli-pojazdow-leczna")({
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
          { label: "OSKP Łęczna", to: "/stacja-kontroli-pojazdow-leczna" },
        ])),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AutomotiveBusiness",
          name: "OLMED — Okręgowa Stacja Kontroli Pojazdów Łęczna",
          url: URL,
          telephone: "+48518518315",
          priceRange: "$$",
          address: { "@type": "PostalAddress", streetAddress: "Krasnystawska 54", addressLocality: "Łęczna", postalCode: "21-010", addressCountry: "PL" },
          geo: { "@type": "GeoCoordinates", latitude: 51.3014, longitude: 22.8806 },
          openingHoursSpecification: [
            { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "07:00", closes: "19:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "07:00", closes: "14:00" },
          ],
        }),
      },
    ],
  }),
});

const faqs = [
  { q: "Jakie badania wykonuje OSKP OLMED w Łęcznej?", a: "Wykonujemy badania techniczne samochodów osobowych, dostawczych do 3,5 t, motocykli, przyczep oraz dodatkowe badania pojazdów z instalacją LPG i hakiem holowniczym." },
  { q: "Czy trzeba umawiać się na przegląd?", a: "Nie jest to wymagane, ale telefoniczna rezerwacja (518 518 315) gwarantuje szybką obsługę bez kolejki." },
  { q: "Co zabrać na przegląd techniczny?", a: "Dowód rejestracyjny pojazdu. W przypadku auta zarejestrowanego za granicą – dodatkowo tłumaczenie i dokumenty homologacji." },
  { q: "Jakie pojazdy badacie?", a: "Wszystkie kategorie: samochody osobowe, dostawcze do 3,5 t, motocykle, przyczepy, pojazdy z instalacją LPG oraz hakiem holowniczym." },
];

function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground pb-24 lg:pb-0">
      <Navbar />
      <main>
        <Breadcrumbs items={[{ label: "Strona główna", to: "/" }, { label: "OSKP Łęczna" }]} />
        <SubPageHeader
          eyebrow="Okręgowa Stacja Kontroli Pojazdów · Łęczna"
          title="Stacja Kontroli Pojazdów w Łęcznej – OSKP OLMED"
          lead="Okręgowa Stacja Kontroli Pojazdów OLMED przy ul. Krasnystawskiej 54 w Łęcznej. Pełen zakres badań technicznych: samochody osobowe, dostawcze, motocykle, przyczepy, LPG, hak. Otwarte także w soboty."
        />

        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6 text-muted-foreground leading-relaxed">
              <h2 className="font-display text-3xl font-bold text-foreground">Przegląd rejestracyjny w Łęcznej – szybko i bez stresu</h2>
              <p>
                <strong>OSKP OLMED</strong> w Łęcznej to nowoczesna Okręgowa Stacja Kontroli Pojazdów wyposażona
                w pełną linię diagnostyczną. Badamy samochody osobowe, dostawcze do 3,5 tony, motocykle,
                przyczepy oraz pojazdy z instalacją LPG i hakiem. Krótkie kolejki, profesjonalna obsługa
                i ceny zgodne z taryfą ustawową.
              </p>

              <h3 className="font-display text-2xl font-bold text-foreground pt-4">Zakres badań technicznych</h3>
              <ul className="space-y-3">
                {[
                  "Badanie techniczne okresowe samochodu osobowego – 149 zł",
                  "Badanie samochodu dostawczego do 3,5 t – 149 zł",
                  "Badanie motocykla – 63 zł",
                  "Badanie przyczepy lekkiej do 750 kg – 78 zł",
                  "Dodatkowe badanie instalacji LPG – 63 zł",
                  "Dodatkowe badanie haka holowniczego – 21 zł",
                  "Badanie po wypadku, ponowne badanie techniczne, badanie pojazdu zabytkowego",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 text-primary shrink-0 mt-0.5" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>

              <h3 className="font-display text-2xl font-bold text-foreground pt-4">Godziny otwarcia OSKP OLMED</h3>
              <p>
                Stacja czynna od poniedziałku do piątku w godzinach <strong>7:00–19:00</strong> oraz w soboty
                <strong> 7:00–14:00</strong>. Długie godziny pracy ułatwiają załatwienie przeglądu po godzinach
                pracy – bez konieczności brania urlopu.
              </p>

              <h3 className="font-display text-2xl font-bold text-foreground pt-4">Lokalizacja – Krasnystawska 54, Łęczna</h3>
              <p>
                OSKP OLMED znajduje się przy głównej drodze wjazdowej do Łęcznej od strony Krasnegostawu.
                Łatwy dojazd dla kierowców z Łęcznej, Łuszczowa, Milejowa, Puchaczowa, Cycowa, Spiczyna
                i całego powiatu łęczyńskiego. Duży parking, miejsce na przyczepę.
              </p>
            </div>

            <aside className="space-y-6">
              <div className="glass rounded-2xl p-6 border border-border/60">
                <div className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Umów przegląd</div>
                <h3 className="font-display text-xl font-bold mb-4">OSKP OLMED Łęczna</h3>
                <p className="text-sm text-muted-foreground mb-4">Krasnystawska 54, 21-010 Łęczna</p>
                <p className="text-sm text-muted-foreground mb-4">Pn–Pt: 7:00–19:00<br />Sob: 7:00–14:00</p>
                <a href="tel:+48518518315" className="block text-center bg-gradient-red text-primary-foreground px-5 py-3 rounded-md font-semibold">
                  518 518 315
                </a>
              </div>
              <div className="rounded-2xl overflow-hidden border border-border/60 aspect-square">
                <iframe
                  src="https://www.google.com/maps?q=Krasnystawska+54+%C5%81%C4%99czna&output=embed"
                  className="size-full"
                  loading="lazy"
                  title="OSKP OLMED Łęczna – mapa"
                />
              </div>
            </aside>
          </div>
        </section>

        <section className="py-16 bg-surface">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-8">FAQ – OSKP Łęczna</h2>
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
