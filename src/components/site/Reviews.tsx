import { Star } from "lucide-react";

export const reviews = [
  {
    name: "Krzysztof Ukalski",
    meta: "2 opinie",
    date: "2 lata temu",
    rating: 5,
    text: "Ostatnio wymieniono w moim samochodzie olej, filtry, bardzo sprawnie, profesjonalnie. Jestem bardzo zadowolony, polecam usługi w Olmed.",
    color: "oklch(0.55 0.18 250)",
  },
  {
    name: "Almaro",
    meta: "Lokalny przewodnik · 219 opinii · 84 zdjęcia",
    date: "3 lata temu",
    rating: 5,
    text: "Profesjonalna obsługa, trafna diagnoza i uczciwa naprawa. Dobre części i hamulce Bosch w przystępnej cenie. Polecam 100%",
    color: "oklch(0.65 0.18 80)",
  },
  {
    name: "Jakub Patyk",
    meta: "Lokalny przewodnik · 82 opinie · 31 zdjęć",
    date: "4 lata temu",
    rating: 5,
    text: "Na prawdę porządny warsztat samochodowy. Wszystko na czas, rzetelnie zrobione w przystępnej cenie. Mechanicy pomocni i bardzo profesjonalni. Brakuje takiego warsztatu w Lublinie.",
    color: "oklch(0.55 0.15 160)",
  },
  {
    name: "Magdalena Majewska",
    meta: "9 opinii · 3 zdjęcia",
    date: "5 lat temu",
    rating: 5,
    text: "Super obsługa. Pękł mi przewód od płynu hamulcowego w trasie Lublin- Łęczna, a musiałam jeszcze wrócić do Lublina. Szybka naprawa. Jestem bardzo wdzięczna. Polecam.",
    color: "oklch(0.6 0.22 350)",
  },
  {
    name: "Hanna Kozak",
    meta: "2 opinie",
    date: "rok temu",
    rating: 5,
    text: "Obsługa super! Miałam do wymiany 4 żarówki na Cito poszło szybko i sprawnie i jeszcze Pan przeczyścił klosze! Dziękuję!",
    color: "oklch(0.55 0.18 30)",
  },
  {
    name: "Madzia.",
    meta: "Lokalny przewodnik · 40 opinii · 21 zdjęć",
    date: "9 miesięcy temu",
    rating: 5,
    text: "Obsługa na wysokim poziomie! Zawsze znajdą czas żeby coś sprawdzić i coś naprawić 😇",
    color: "oklch(0.55 0.2 290)",
  },
];

const GOOGLE_COLORS = ["#4285F4", "#EA4335", "#FBBC05", "#34A853"];

function GoogleG({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6.1 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.3-.1-2.3-.4-3.5z" />
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 16 19 13 24 13c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2c-2 1.5-4.5 2.4-7.2 2.4-5.2 0-9.6-3.3-11.3-8L6.2 33C9.5 39.5 16.2 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.3-4.1 5.6l6.2 5.2C40.9 36.2 44 30.5 44 24c0-1.3-.1-2.3-.4-3.5z" />
    </svg>
  );
}

function Stars({ value, size = "size-4" }: { value: number; size?: string }) {
  return (
    <div className="flex gap-0.5" aria-label={`${value} z 5 gwiazdek`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`${size} ${i < value ? "fill-[#FBBC04] text-[#FBBC04]" : "fill-muted text-muted"}`}
        />
      ))}
    </div>
  );
}

function initials(name: string) {
  const clean = name.replace(/[^\p{L}\s]/gu, "").trim();
  return clean.charAt(0).toUpperCase() || "?";
}

export function Reviews() {
  const total = reviews.length;
  const avg = reviews.reduce((s, r) => s + r.rating, 0) / total;
  const avgStr = avg.toFixed(1).replace(".", ",");

  return (
    <section id="opinie" className="relative py-24 lg:py-32 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header — Google Reviews style */}
        <header className="text-center mb-12">
          <div className="text-[10px] uppercase tracking-[0.3em] text-primary mb-4">Opinie Google</div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-10">
            Co mówią o nas klienci
          </h2>

          <div className="inline-flex flex-col sm:flex-row items-center gap-6 sm:gap-10 px-8 py-6 rounded-2xl glass border border-border/60">
            <div className="flex items-center gap-4">
              <GoogleG className="size-10" />
              <div className="text-left">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Google</div>
                <div className="font-display text-lg font-semibold">Opinie zweryfikowane</div>
              </div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-border" />
            <div
              className="flex items-center gap-4"
              itemScope
              itemType="https://schema.org/AggregateRating"
            >
              <div
                className="font-display text-5xl font-bold leading-none text-[#FBBC04]"
                itemProp="ratingValue"
              >
                {avgStr}
              </div>
              <div className="text-left">
                <Stars value={Math.round(avg)} size="size-5" />
                <div className="text-xs text-muted-foreground mt-1.5">
                  Średnia z{" "}
                  <span itemProp="reviewCount">{total}</span> opinii
                </div>
                <meta itemProp="bestRating" content="5" />
                <meta itemProp="worstRating" content="1" />
              </div>
            </div>
          </div>
        </header>

        {/* Review cards grid */}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r, idx) => (
            <li
              key={idx}
              className="group relative bg-background border border-border/70 rounded-xl p-6 hover:shadow-glow hover:border-primary/40 transition-all flex flex-col"
              itemScope
              itemType="https://schema.org/Review"
            >
              {/* Google G badge top right */}
              <GoogleG className="absolute top-4 right-4 size-5 opacity-70" />

              {/* Author row */}
              <header className="flex items-start gap-3 mb-4 pr-8">
                <div
                  className="size-11 rounded-full flex items-center justify-center text-white font-semibold text-base shrink-0"
                  style={{ background: r.color }}
                  aria-hidden="true"
                >
                  {initials(r.name)}
                </div>
                <div className="min-w-0">
                  <div
                    className="font-semibold text-sm text-foreground truncate"
                    itemProp="author"
                    itemScope
                    itemType="https://schema.org/Person"
                  >
                    <span itemProp="name">{r.name}</span>
                  </div>
                  <div className="text-xs text-muted-foreground leading-snug">{r.meta}</div>
                </div>
              </header>

              {/* Stars + date */}
              <div className="flex items-center gap-2 mb-3">
                <Stars value={r.rating} />
                <span className="text-xs text-muted-foreground">{r.date}</span>
                <div
                  itemProp="reviewRating"
                  itemScope
                  itemType="https://schema.org/Rating"
                  className="sr-only"
                >
                  <span itemProp="ratingValue">{r.rating}</span>
                  <span itemProp="bestRating">5</span>
                </div>
              </div>

              {/* Body */}
              <p
                className="text-sm leading-relaxed text-foreground/90 flex-1"
                itemProp="reviewBody"
              >
                {r.text}
              </p>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://www.google.com/search?q=OLMED+Łęczna"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-md bg-background border border-border hover:border-primary/50 transition text-sm font-medium"
          >
            <span className="flex gap-0.5">
              {GOOGLE_COLORS.map((c) => (
                <span key={c} className="size-1.5 rounded-full" style={{ background: c }} />
              ))}
            </span>
            Zobacz wszystkie opinie w Google
          </a>
        </div>
      </div>
    </section>
  );
}
