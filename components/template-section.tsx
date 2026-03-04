import { CopyBlock } from "./copy-block"

const masterTemplate = `A photo-realistic commercial scene, meticulously designed using the 'Prompt Architecture V5' framework.
This prompt is a technical instruction for a generative AI model to blend an existing product with a reference composition,
achieving ultra-high-fidelity label rendering.
- The overall scene, including composition, lighting palette, background textures, camera angle, shadows, and reflections, 
must be a direct visual translation of the concepts found in the reference image provided as [IMAGEM_DE_REFERENCIA].jpg. 
- This is the visual blueprint for the atmosphere and spatial arrangement.
- The central subject of this composition is the exact container and bottle shape found in the product image provided as
[IMAGEM_DO_PRODUTO].jpg. This is the object being placed into the scene. Its packaging proportions, material properties, 
brand logo, and overall 
color palette must be preserved with perfect fidelity.
- The front label on the main bottle must be perfectly readable and textually precise. The layout, typographic hierarchy, and every single word 
and character must follow the structure below exactly, with zero distortion and perfect alignment (anti-aliased, vector-like sharpness):

LABEL STRUCTURE START
[LABEL_LAYOUT_GRID]
LABEL STRUCTURE END

- The visual style is an ultra-realistic, high-resolution commercial product photograph. 
- The style is that of professional editorial advertising. It features studio lighting that highlights 
product details, soft and precise shadows, and an extremely sharp focus across the entire label area. 
- The typography on the label must be optically clear and high resolution. 
- The final output must be completely free of misspelled text, distorted letters, or fake characters,
ensuring perfect packaging typography and a clean, premium label design.`

const labelExample = `reference_image: produto_avene.jpg
product_name: Hydrance Aqua-Gel
brand: Avène
category: dermocosmetic skincare
container_type: glass jar

typography_hierarchy:

  brand_primary: Avène
  brand_secondary: EAU THERMALE
  product_line: HYDRANCE
  product_type: AQUA-GEL
  description:
    AQUA GEL-CRÈME HYDRATANT
    HYDRATING AQUA CREAM-IN-GEL
  claims: Made in France
  volume: 50 ml e 1.6 fl.oz.

label_layout_grid:

  left_section:
    EAU THERMALE
    Avène
    LABORATOIRE DERMATOLOGIQUE

  center_section:
    HYDRANCE
    AQUA-GEL

  description_section:
    AQUA GEL-CRÈME HYDRATANT
    HYDRATING AQUA CREAM-IN-GEL

  bottom_left: Made in France
  bottom_right: 50 ml e 1.6 fl.oz.

design_elements:
  thin horizontal blue line aligned with AQUA-GEL text`

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

        <div className="flex flex-col gap-6">
          <CopyBlock code={masterTemplate} label="master_prompt_v5.txt" />

          <CopyBlock code={labelExample} label="output_example_avene.txt" />

          {/* Grid legend */}
          <div className="border border-border bg-card p-6">
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground block mb-6">
              ULGE Grid Model
            </span>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Columns */}
              <div>
                <span className="text-[9px] uppercase tracking-[0.2em] text-accent block mb-3">
                  Columns
                </span>
                <div className="flex gap-2">
                  {["LEFT", "CENTER", "RIGHT"].map((col) => (
                    <span
                      key={col}
                      className="border border-border px-3 py-1.5 text-[10px] text-foreground tracking-wide flex-1 text-center"
                    >
                      {col}
                    </span>
                  ))}
                </div>
              </div>

              {/* Rows */}
              <div>
                <span className="text-[9px] uppercase tracking-[0.2em] text-accent block mb-3">
                  Rows
                </span>
                <div className="flex flex-col gap-2">
                  {[
                    { pos: "TOP", content: "brand_primary / brand_secondary" },
                    { pos: "UPPER_MID", content: "product_line" },
                    { pos: "CENTER", content: "product_type / description" },
                    { pos: "LOWER_MID", content: "claims / ingredients" },
                    { pos: "BOTTOM", content: "volume / design_elements" },
                  ].map((row) => (
                    <div
                      key={row.pos}
                      className="flex items-center justify-between border-b border-border pb-2 last:border-0"
                    >
                      <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                        {row.pos}
                      </span>
                      <span className="text-[10px] text-foreground font-medium">
                        {row.content}
                      </span>
                    </div>
                  ))}
                </div>
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
