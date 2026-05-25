import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { StickyMobileCta } from "@/components/site/StickyMobileCta";
import { Breadcrumbs, breadcrumbsJsonLd } from "@/components/site/Breadcrumbs";
import { SubPageHeader } from "@/components/site/SubPageHeader";
import { Snowflake, Wind, Droplet, ShieldCheck, CheckCircle2 } from "lucide-react";

const URL = "https://olmed.lovable.app/klimatyzacja-leczna";
const TITLE = "Klimatyzacja Łęczna – Serwis Klimatyzacji Samochodowej OLMED";
const DESC = "Klimatyzacja samochodowa w Łęcznej. OLMED Medyńscy – nabijanie, odgrzybianie i naprawa klimatyzacji. Krótkie terminy. Rynek II 17, tel. 81 752 16 44.";

export const Route = createFileRoute("/klimatyzacja-leczna")({
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
          { label: "Klimatyzacja Łęczna", to: "/klimatyzacja-leczna" },
        ])),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AutoRepair",
          name: "OLMED — Serwis Klimatyzacji Samochodowej Łęczna",
          url: URL,
          telephone: "+48817521644",
          priceRange: "$$",
          address: { "@type": "PostalAddress", streetAddress: "Rynek II 17", addressLocality: "Łęczna", postalCode: "21-010", addressCountry: "PL" },
          areaServed: ["Łęczna", "powiat łęczyński", "województwo lubelskie"],
          geo: { "@type": "GeoCoordinates", latitude: 51.3014, longitude: 22.8806 },
        }),
      },
    ],
  }),
});

const steps = [
  { icon: Snowflake, t: "Diagnostyka i kontrola ciśnienia", d: "Sprawdzamy szczelność układu, ciśnienie czynnika i pracę sprężarki." },
  { icon: Droplet, t: "Nabijanie klimatyzacji (R134a / R1234yf)", d: "Wymiana czynnika chłodniczego i oleju w sprężarce — zarówno starsze, jak i nowe samochody." },
  { icon: Wind, t: "Odgrzybianie ozonem / ultradźwiękowe", d: "Usuwamy nieprzyjemne zapachy, bakterie i grzyby z parownika oraz kanałów wentylacji." },
  { icon: ShieldCheck, t: "Wymiana filtra kabinowego", d: "Czysty filtr kabinowy to zdrowie pasażerów i wydajność klimatyzacji w aucie." },
];

const faqs = [
  { q: "Czy trzeba umawiać się na serwis klimatyzacji?", a: "Telefoniczna rezerwacja pod numerem 81 752 16 44 gwarantuje szybki termin — szczególnie wiosną, kiedy chętnych jest najwięcej." },
  { q: "Jak często serwisować klimatyzację w aucie?", a: "Zalecamy serwis klimatyzacji raz w roku — najlepiej wiosną. Co 2 lata warto wykonać odgrzybianie, aby pozbyć się bakterii z parownika." },
  { q: "Czy odgrzybiacie klimatyzację ozonem?", a: "Tak, w naszym serwisie w Łęcznej wykonujemy odgrzybianie klimatyzacji ozonem oraz ultradźwiękowe — skuteczne i bezpieczne metody usuwania zapachów." },
  { q: "Naprawiacie sprężarki klimatyzacji?", a: "Tak — diagnozujemy i wymieniamy sprężarki, skraplacze, parowniki oraz przewody klimatyzacji we wszystkich markach aut." },
];

function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground pb-24 lg:pb-0">
      <Navbar />
      <main>
        <Breadcrumbs items={[{ label: "Strona główna", to: "/" }, { label: "Klimatyzacja Łęczna" }]} />
        <SubPageHeader
          eyebrow="Klimatyzacja samochodowa · Łęczna"
          title="Serwis klimatyzacji samochodowej w Łęcznej – OLMED"
          lead="Nabijanie, odgrzybianie i naprawa klimatyzacji samochodowej w Łęcznej. Obsługujemy czynniki R134a i R1234yf, wszystkie marki aut osobowych i dostawczych. Krótkie terminy i gwarancja jakości."
        />

        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6 text-muted-foreground leading-relaxed">
              <h2 className="font-display text-3xl font-bold text-foreground">Klimatyzacja samochodowa Łęczna – pełen serwis</h2>
              <p>
                <strong>Klimatyzacja w aucie</strong> to nie tylko komfort, ale też bezpieczeństwo —
                koncentracja kierowcy w upale spada nawet o 30%. W serwisie OLMED w Łęcznej zadbamy o to,
                aby Twoja klimatyzacja działała wydajnie, cicho i bez nieprzyjemnych zapachów. Od 25 lat
                obsługujemy kierowców z Łęcznej, powiatu łęczyńskiego i województwa lubelskiego.
              </p>
              <p>
                Pracujemy na nowoczesnych stacjach do obsługi klimatyzacji obsługujących oba popularne
                czynniki chłodnicze — starszy <strong>R134a</strong> oraz nowy ekologiczny <strong>R1234yf</strong> stosowany
                w autach od 2017 roku. Każde nabijanie poprzedzamy testem szczelności, abyś nie płacił
                za czynnik, który wycieknie po tygodniu.
              </p>

              <h3 className="font-display text-2xl font-bold text-foreground pt-4">Jak wygląda serwis klimatyzacji w OLMED?</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {steps.map((s) => (
                  <div key={s.t} className="glass rounded-lg p-5 border border-border/60">
                    <s.icon className="size-5 text-primary mb-3" />
                    <h4 className="font-semibold text-foreground mb-1">{s.t}</h4>
                    <p className="text-sm">{s.d}</p>
                  </div>
                ))}
              </div>

              <h3 className="font-display text-2xl font-bold text-foreground pt-4">Cennik klimatyzacji – Łęczna (od)</h3>
              <ul className="space-y-3">
                {[
                  "Nabijanie klimatyzacji R134a – od 149 zł",
                  "Nabijanie klimatyzacji R1234yf – od 349 zł",
                  "Odgrzybianie ozonem – od 80 zł",
                  "Wymiana filtra kabinowego – od 30 zł (+ filtr)",
                  "Test szczelności układu – w cenie nabijania",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 text-primary shrink-0 mt-0.5" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm">Ceny orientacyjne — finalny koszt zależy od modelu auta i ilości czynnika. Zadzwoń po dokładną wycenę.</p>

              <h3 className="font-display text-2xl font-bold text-foreground pt-4">Klimatyzacja samochodowa – Łęczna i okolice</h3>
              <p>
                Serwis OLMED przy Rynku II 17 obsługuje klientów z Łęcznej, Łuszczowa, Milejowa,
                Puchaczowa, Cycowa, Spiczyna oraz pozostałych miejscowości województwa lubelskiego.
                Klimatyzację najlepiej zaserwisować wiosną — przed pierwszymi upałami terminy są
                najkrótsze. Zachęcamy do wcześniejszej rezerwacji telefonicznej.
              </p>
            </div>

            <aside className="space-y-6">
              <div className="glass rounded-2xl p-6 border border-border/60">
                <div className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Umów wizytę</div>
                <h3 className="font-display text-xl font-bold mb-4">Klimatyzacja OLMED Łęczna</h3>
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
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-8">FAQ – Klimatyzacja Łęczna</h2>
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
