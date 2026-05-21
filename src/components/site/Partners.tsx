import logoOk from "@/assets/logo-ok-serwis.png";
import logoElf from "@/assets/logo-elf.svg";
import logoOrlen from "@/assets/logo-orlen.jpg";

export function Partners() {
  return (
    <section id="partnerzy" className="py-24 lg:py-32 border-y border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Partnerzy</div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-balance">
            Współpracujemy z liderami branży motoryzacyjnej
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { src: logoOk, alt: "O.K. Serwis", name: "O.K. Serwis", desc: "Sieć warsztatów godnych zaufania" },
            { src: logoElf, alt: "ELF", name: "ELF", desc: "Oleje i płyny eksploatacyjne" },
            { src: logoOrlen, alt: "ORLEN", name: "ORLEN", desc: "Sprawdzony partner paliwowy" },
          ].map((p) => (
            <div key={p.name} className="glass rounded-xl p-10 flex flex-col items-center text-center hover:bg-surface-elevated transition">
              <div className="h-24 flex items-center">
                <img src={p.src} alt={p.alt} className="max-h-20 object-contain rounded" />
              </div>
              <div className="mt-6 font-display font-semibold text-lg">{p.name}</div>
              <div className="text-sm text-muted-foreground mt-1">{p.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
