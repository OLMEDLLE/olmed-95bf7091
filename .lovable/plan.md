## Cel
TOP1 w Google dla fraz: olmed łęczna, olmed leczna, olmed, mechanik łęczna, klimatyzacja łęczna, medyńscy łęczna.

## Co już jest (zostawiamy / rozbudowujemy)
- JSON-LD: Organization, AutoRepair, AutomotiveBusiness, FAQPage, BreadcrumbList, LocalBusiness z opiniami ✓
- sitemap.xml (server route) ✓
- robots.txt ✓
- FAQ z lokalnymi pytaniami ✓
- Canonical, OG tags na `/` ✓
- Sekcje: Hero, About, Services, Oskp, WhyUs, Partners, Gallery, Reviews, Faq, Contact ✓

## Plan zmian

### 1. Architektura: dodać osobne podstrony (lepsze SEO niż #anchor)
Utworzymy nowe trasy dla głównych fraz lokalnych — każda z własnym H1, title, meta, canonical, JSON-LD:
- `/mechanik-leczna` — Mechanik Samochodowy Łęczna (rozbudowana treść 600+ słów)
- `/klimatyzacja-leczna` — Serwis Klimatyzacji Samochodowej Łęczna
- `/serwis-auta-leczna` — Serwis Auta / przeglądy Łęczna
- `/stacja-kontroli-pojazdow-leczna` — OSKP Łęczna
- `/kontakt` — dane kontaktowe, mapa, formularz
Nawigacja w Navbar dostanie linki `<Link to="...">`.

### 2. Meta SEO (per route)
Unikalne `title` (~55 znaków, format: "Olmed Łęczna – {usługa} | Medyńscy"), `description` (~155 znaków z frazą + lokalizacją + CTA), `og:*`, `twitter:card`, `canonical`. Dodać `og:image` (zdjęcie elewacji) tylko na liściach.

### 3. Strona główna `/`
- H1 zaktualizować by zawierał "Łęczna" jednoznacznie: "OLMED Łęczna — Serwis Samochodowy, Klimatyzacja i OSKP"
- Dodać sekcję **"Dlaczego kierowcy z Łęcznej wybierają Olmed"** (6 powodów: 25 lat, rodzinna firma Medyńscy, OSKP na miejscu, części od ręki, partnerzy O.K./ELF/ORLEN, pomoc drogowa)
- Dodać sekcję **"Najczęściej wybierane usługi"** (3 karty: mechanika, klimatyzacja, przeglądy) z linkami do podstron
- Sekcja **mapa Google** (iframe embed — bez klucza API) z adresami obu oddziałów
- Breadcrumbs (komponent + JSON-LD per route)
- Rozszerzyć FAQ o pytania: "Czy jesteście mechanikiem w Łęcznej?", "Gdzie naprawić klimatyzację w Łęcznej?", "Kim są Medyńscy?"

### 4. Content SEO (rozbudowa)
Na nowych podstronach: 600–1000 słów naturalnego tekstu z frazami: Łęczna, województwo lubelskie, okolice Łęcznej (Łuszczów, Milejów, Puchaczów, Cyców), powiat łęczyński. Semantyczne nagłówki H2/H3.

### 5. Local SEO
- Sticky mobile CTA bar (telefon + "Umów wizytę" + Google Maps trasy) — fixed bottom na <md
- `tel:` i `https://www.google.com/maps/dir/?api=1&destination=...` CTA na każdej stronie
- LocalBusiness JSON-LD z `geo` (lat/lng obu lokalizacji), `image`, `priceRange`

### 6. Performance
- `loading="lazy"` + `decoding="async"` na wszystkich obrazach poniżej fold (część już jest)
- `<link rel="preload">` LCP image (facade) — już jest `fetchPriority="high"`, dodać preload w head
- Preconnect/preload Google Fonts (już jest)
- Sprawdzić rozmiary obrazów, dodać `width`/`height` przeciw CLS

### 7. Sitemap & robots
- Zaktualizować `sitemap[.]xml.ts` o nowe trasy z `lastmod`, `priority`
- `robots.txt` bez zmian (już OK)

### 8. Dostępność & semantyka
- Sprawdzić `<main>`, alt teksty, aria-label dla icon-only buttonów, kontrast tokenów

### 9. Dostarczone artefakty (w odpowiedzi)
Lista wszystkich meta titles/descriptions, podsumowanie JSON-LD, lista 8 propozycji blogów pod SEO (np. "Jak przygotować auto do przeglądu w OSKP Łęczna", "Ile kosztuje nabicie klimatyzacji w Łęcznej 2026", "Wymiana opon w Łęcznej — kiedy i za ile").

## Zakres prac
~10 nowych/zmodyfikowanych plików:
- 4–5 nowych route files
- Navbar (linki), Hero (H1), Footer
- Nowe komponenty: `WhyOlmed`, `TopServices`, `MapEmbed`, `StickyMobileCta`, `Breadcrumbs`
- `sitemap[.]xml.ts`, `__root.tsx` (sitewide OG/twitter defaults)

Po akceptacji wykonam wszystko za jednym razem.