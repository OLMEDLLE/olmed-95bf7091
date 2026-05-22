import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Oskp } from "@/components/site/Oskp";
import { WhyUs } from "@/components/site/WhyUs";
import { Partners } from "@/components/site/Partners";
import { Gallery } from "@/components/site/Gallery";
import { Reviews, reviews } from "@/components/site/Reviews";
import { Faq, faqItems } from "@/components/site/Faq";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "OLMED Łęczna — Serwis samochodowy, części i OSKP · 25 lat" },
      { name: "description", content: "OLMED Łęczna — rodzinny serwis samochodowy, diagnostyka, części, klimatyzacja, opony i Okręgowa Stacja Kontroli Pojazdów. 25 lat doświadczenia." },
      { property: "og:title", content: "OLMED Łęczna — Nowoczesna motoryzacja od 25 lat" },
      { property: "og:description", content: "Profesjonalny serwis, diagnostyka, części i OSKP w Łęcznej." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://olmed.lovable.app/" },
    ],
    links: [
      { rel: "canonical", href: "https://olmed.lovable.app/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Sora:wght@600;700;800&family=Inter:wght@400;500;600&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://olmed.lovable.app/#organization",
              name: "OLMED Piotr i Radosław Medyńscy",
              url: "https://olmed.lovable.app/",
              telephone: "+48817521644",
              email: "olmedok@wp.pl",
              areaServed: "Łęczna",
              sameAs: ["https://www.facebook.com/share/1BTdg8p1nA/?mibextid=wwXIfr"],
            },
            {
              "@type": "AutoRepair",
              "@id": "https://olmed.lovable.app/#serwis",
              name: "OLMED — Serwis i sklep",
              url: "https://olmed.lovable.app/#kontakt",
              telephone: "+48817521644",
              email: "olmedok@wp.pl",
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Rynek II 17",
                addressLocality: "Łęczna",
                postalCode: "21-010",
                addressCountry: "PL",
              },
              openingHoursSpecification: [
                { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "07:00", closes: "17:00" },
                { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "07:00", closes: "14:00" },
              ],
              parentOrganization: { "@id": "https://olmed.lovable.app/#organization" },
            },
            {
              "@type": "AutomotiveBusiness",
              "@id": "https://olmed.lovable.app/#oskp",
              name: "OLMED — Okręgowa Stacja Kontroli Pojazdów",
              url: "https://olmed.lovable.app/#oskp",
              telephone: "+48518518315",
              email: "olmedok@wp.pl",
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Krasnystawska 54",
                addressLocality: "Łęczna",
                postalCode: "21-010",
                addressCountry: "PL",
              },
              openingHoursSpecification: [
                { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "07:00", closes: "19:00" },
                { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "07:00", closes: "14:00" },
              ],
              parentOrganization: { "@id": "https://olmed.lovable.app/#organization" },
            },
            {
              "@type": "FAQPage",
              "@id": "https://olmed.lovable.app/#faq",
              mainEntity: faqItems.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Strona główna", item: "https://olmed.lovable.app/" },
                { "@type": "ListItem", position: 2, name: "Usługi", item: "https://olmed.lovable.app/#uslugi" },
                { "@type": "ListItem", position: 3, name: "OSKP", item: "https://olmed.lovable.app/#oskp" },
                { "@type": "ListItem", position: 4, name: "Kontakt", item: "https://olmed.lovable.app/#kontakt" },
              ],
            },
          ],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Oskp />
        <WhyUs />
        <Partners />
        <Gallery />
        <Reviews />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
