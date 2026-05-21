import facade from "@/assets/olmed-facade.jpeg";
import entrance from "@/assets/olmed-entrance.jpg";
import street from "@/assets/olmed-street.jpg";
import oskp from "@/assets/oskp-building.png";

const items = [
  { src: facade, alt: "Wejście do OLMED", label: "Oddział Rynek II" },
  { src: oskp, alt: "Stacja Kontroli Pojazdów", label: "OSKP Krasnystawska" },
  { src: entrance, alt: "Wejście do serwisu", label: "Serwis" },
  { src: street, alt: "Budynek OLMED od ulicy", label: "Łęczna" },
];

export function Gallery() {
  return (
    <section id="galeria" className="py-28 lg:py-40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Galeria</div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-balance leading-tight">
              Zobacz nasze oddziały w Łęcznej
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {items.map((it, i) => (
            <div
              key={it.alt}
              className={`group relative overflow-hidden rounded-xl bg-surface ${
                i === 0 ? "col-span-2 row-span-2 aspect-square lg:aspect-[4/5]" : "aspect-square"
              }`}
            >
              <img src={it.src} alt={it.alt} className="size-full object-cover transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80 group-hover:opacity-90 transition" />
              <div className="absolute bottom-0 left-0 p-5">
                <div className="text-xs uppercase tracking-widest text-primary">OLMED</div>
                <div className="font-display font-semibold text-lg">{it.label}</div>
              </div>
              <div className="absolute inset-0 ring-1 ring-inset ring-primary/0 group-hover:ring-primary/40 transition rounded-xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
