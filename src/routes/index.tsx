import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Oskp } from "@/components/site/Oskp";
import { WhyUs } from "@/components/site/WhyUs";
import { Partners } from "@/components/site/Partners";
import { Gallery } from "@/components/site/Gallery";
import { Reviews } from "@/components/site/Reviews";
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
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Sora:wght@600;700;800&family=Inter:wght@400;500;600&display=swap" },
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
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
