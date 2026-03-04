import { CopyBlock } from "./copy-block"

const masterTemplate = `Use the reference image [REFERENCE].jpg as visual inspiration.

Extract from the reference image: composition, lighting, background palette, camera angle, shadows, reflections.

The product used in the composition is attached as [PRODUCT].jpg.

Preserve packaging fidelity: bottle shape, packaging proportions, label layout, brand logo, colors and materials.

Front label must be perfectly readable. Typography must be ultra sharp, high resolution, anti-aliased and optically clear.

Language of label: [INSERT LANGUAGE]

Label layout grid: brand → product line → product type → benefits → ingredients → volume.

Label text layout exactly as follows:
[INSERT LABEL STRUCTURE]

sharp product label typography, editorial product photography, high resolution packaging text, vector-like label clarity

Ultra realistic commercial product photography, studio lighting, soft shadows, extremely sharp focus

no distorted text, no misspelled text, no fake letters, perfect packaging typography, clean label layout`

const labelExample = `RENE FURTERER PARIS
TRIPHASIC
ACTIVE GROW
SHAMPOOING ACTIVATEUR DE POUSSE
GROWTH ACTIVATOR SHAMPOO
CHEVEUX PLUS LONGS, PLUS FORTS
LONGER, STRONGER HAIR
VITAMINE B8 + PROPOLIS
500 ml e 16.9 FL.OZ.`

export function TemplateSection() {
  return (
    <section id="template" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section label */}
        <div className="flex items-center justify-between mb-16">
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            {"// SECTION: MASTER_TEMPLATE"}
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground flex items-center gap-2">
            <span className="inline-block h-2 w-2 bg-accent" />
            006
          </span>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground uppercase leading-tight text-balance">
            Master Template V5
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground max-w-2xl">
            O template completo combina todos os modulos em um unico prompt otimizado.
            Substitua os campos entre colchetes com as informacoes do seu produto.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <CopyBlock code={masterTemplate} label="master_prompt_v5.txt" />
          </div>

          <div className="flex flex-col gap-6">
            <CopyBlock code={labelExample} label="exemplo_label_structure.txt" />

            {/* Grid legend */}
            <div className="border border-border bg-card p-4">
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground block mb-4">
                Label Grid System
              </span>
              <div className="flex flex-col gap-2">
                {[
                  { pos: "Top", content: "Brand Name" },
                  { pos: "Upper Mid", content: "Product Line" },
                  { pos: "Center", content: "Product Type" },
                  { pos: "Lower Mid", content: "Benefits" },
                  { pos: "Lower", content: "Ingredients" },
                  { pos: "Bottom", content: "Volume / Size" },
                ].map((row) => (
                  <div
                    key={row.pos}
                    className="flex items-center justify-between border-b border-border pb-2 last:border-0"
                  >
                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                      {row.pos}
                    </span>
                    <span className="text-xs text-foreground font-medium">
                      {row.content}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Reinforcement Tokens */}
        <div className="mt-12 border border-border bg-card p-6">
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground block mb-4">
            Typography Reinforcement Tokens
          </span>
          <div className="flex flex-wrap gap-2">
            {[
              "sharp product label typography",
              "editorial product photography",
              "high resolution packaging text",
              "clean cosmetic label",
              "vector-like label clarity",
              "packaging typography fidelity",
              "macro packaging detail",
              "no distorted text",
              "no misspelled text",
              "no fake letters",
              "exact label replication",
            ].map((token) => (
              <span
                key={token}
                className="border border-border px-3 py-1.5 text-[10px] text-foreground tracking-wide"
              >
                {token}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
