import Image from "next/image"

const examples = [
  {
    src: "/images/example-avene.png",
    alt: "Exemplo de rotulo gerado com HPLG V5",
    label: "Avène Hydrance",
    model: "Nano Banana 2 / Gemini 3",
  },
  {
    src: "/images/example-klorane.png",
    alt: "Exemplo de imagem gerada com HPLG V5",
    label: "Klorane",
    model: "Nano Banana 2 / Gemini 3",
  },
  {
    src: "/images/example-rene.png",
    alt: "Exemplo de composição gerada com HPLG V5",
    label: "René Furterer",
    model: "OpenAi / ChatGPT 5.2",
  },
  {
    src: "/images/example-avene-02.png",
    alt: "Exemplo de gerado com HPLG V5",
    label: "Avène Hydrance",
    model: "Seedream 4 / Artlist.io",
  },
]

export function GallerySection() {
  return (
    <section id="gallery" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section label */}
        <div className="flex items-center justify-between mb-16">
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            {"// SECTION: GENERATED_EXAMPLES"}
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground flex items-center gap-2">
            <span className="inline-block h-2 w-2 bg-accent" />
            007
          </span>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground uppercase leading-tight text-balance">
            Exemplos Gerados
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground max-w-2xl">
            Imagens de produtos geradas usando o framework HPLG V5. Observe a
            clareza da tipografia, fidelidade das labels e realismo dos materiais.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {examples.map((example) => (
            <div key={example.label} className="group border border-border overflow-hidden">
              <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                <Image
                  src={example.src}
                  alt={example.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="flex items-center justify-between p-4 border-t border-border">
                <div>
                  <span className="text-sm font-semibold text-foreground uppercase tracking-wide">
                    {example.label}
                  </span>
                  <span className="block text-[10px] text-muted-foreground uppercase tracking-widest mt-0.5">
                    {example.model}
                  </span>
                </div>
                <span className="text-[10px] text-muted-foreground uppercase tracking-widest">
                  HPLG_V5
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
