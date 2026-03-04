"use client"

import { useState } from "react"
import { CopyBlock } from "./copy-block"
import { Scan, ArrowRight } from "lucide-react"

const ulgePrompt = `You are a packaging analysis system specialized in cosmetic and consumer product labels.

Your task is to analyze the product label in the attached image and extract the exact label layout grid with high fidelity.

Input image:
<product_image>

Objective:
Identify and extract the label structure, preserving typography hierarchy, spatial layout, and grouping of text elements.

Instructions:

1. Read all visible text on the label.
2. Group the text according to visual hierarchy.
3. Identify the spatial position of each text block.
4. Preserve line breaks exactly as seen.
5. Ignore background noise and reflections.
6. Identify decorative elements (lines, icons, separators).
7. Extract the label structure using a standardized layout grid.

Grid Model:

columns:
LEFT
CENTER
RIGHT

rows:
TOP
UPPER_MIDDLE
CENTER
LOWER_MIDDLE
BOTTOM

You must output the result in the following structured format.

Output format:

reference_image: <image_name>
product_name:
brand:
category:
container_type:

typography_hierarchy:
brand_primary:
brand_secondary:
product_line:
product_type:
description:
ingredients:
claims:
volume:

label_layout_grid:

left_section:

center_section:

right_section:

description_section:

bottom_left:

bottom_center:

bottom_right:

design_elements:

Rules for extraction:

• Preserve original spelling exactly.
• Preserve original capitalization.
• Preserve original line breaks.
• Do not translate text.
• Do not summarize text.
• Maintain label reading order.

The final result must produce a label_layout_grid block that can be directly reused in an AI image generation prompt.`

const exampleOutput = `reference_image: produto_avene.jpg
product_name: Hydrance Aqua-Gel
brand: Avène
category: dermocosmetic skincare
container_type: glass jar

typography_hierarchy:

brand_primary:
  Avène

brand_secondary:
  EAU THERMALE

product_line:
  HYDRANCE

product_type:
  AQUA-GEL

description:
  AQUA GEL-CRÈME HYDRATANT
  HYDRATING AQUA CREAM-IN-GEL

claims:
  Made in France

volume:
  50 ml e 1.6 fl.oz.

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

bottom_left:
  Made in France

bottom_right:
  50 ml e 1.6 fl.oz.

design_elements:
  thin horizontal blue line aligned with AQUA-GEL text`

const capabilities = [
  {
    step: "01",
    label: "Leitura do rotulo",
    desc: "Ler o rotulo antes de gerar texto",
  },
  {
    step: "02",
    label: "Estrutura visual",
    desc: "Preservar estrutura visual do layout",
  },
  {
    step: "03",
    label: "Hierarquia tipografica",
    desc: "Organizar hierarquia tipografica completa",
  },
  {
    step: "04",
    label: "Blocos reutilizaveis",
    desc: "Manter blocos reutilizaveis para geracao",
  },
]

export function UlgeSection() {
  const [activeTab, setActiveTab] = useState<"prompt" | "output">("prompt")

  return (
    <section id="ulge" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section label */}
        <div className="flex items-center justify-between mb-16">
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            {"// SECTION: ULGE_PROMPT"}
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground flex items-center gap-2">
            <span className="inline-block h-2 w-2 bg-accent" />
            005
          </span>
        </div>

        {/* Header */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 border border-accent px-3 py-1.5 mb-6">
              <Scan size={14} className="text-accent" />
              <span className="text-[10px] uppercase tracking-widest text-accent font-semibold">
                Novo
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground uppercase leading-tight text-balance">
              Universal Label Grid Extractor
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground max-w-lg">
              Prompt projetado para analisar qualquer imagem de produto com rotulo
              e retornar uma estrutura padronizada pronta para uso em geracao de
              imagens. Produz automaticamente o bloco{" "}
              <code className="text-foreground bg-secondary px-1.5 py-0.5 text-xs">
                label_layout_grid
              </code>{" "}
              compativel com a Super Prompt Formula V5.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Maximiza
            </span>
            <div className="grid grid-cols-2 gap-3">
              {[
                "Fidelidade de rotulos",
                "Hierarquia tipografica",
                "Posicionamento espacial",
                "Reutilizacao em prompts",
              ].map((item) => (
                <div
                  key={item}
                  className="border border-border p-3 text-xs text-foreground uppercase tracking-wide font-medium"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* What the model is forced to do */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          {capabilities.map((cap) => (
            <div
              key={cap.step}
              className="border border-border p-4 flex flex-col gap-2"
            >
              <span className="text-[10px] text-accent font-semibold">{cap.step}</span>
              <span className="text-sm font-semibold text-foreground uppercase tracking-wide">
                {cap.label}
              </span>
              <span className="text-[11px] text-muted-foreground leading-relaxed">
                {cap.desc}
              </span>
            </div>
          ))}
        </div>

        {/* Tabs: Prompt / Expected Output */}
        <div className="border border-border">
          <div className="flex border-b border-border">
            <button
              onClick={() => setActiveTab("prompt")}
              className={`flex-1 px-6 py-3 text-xs uppercase tracking-widest font-semibold transition-colors ${
                activeTab === "prompt"
                  ? "bg-foreground text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              ULGE Prompt
            </button>
            <button
              onClick={() => setActiveTab("output")}
              className={`flex-1 px-6 py-3 text-xs uppercase tracking-widest font-semibold transition-colors border-l border-border ${
                activeTab === "output"
                  ? "bg-foreground text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Expected Output (Avene)
            </button>
          </div>

          <div className="p-0">
            {activeTab === "prompt" ? (
              <CopyBlock code={ulgePrompt} label="ulge_prompt.txt" />
            ) : (
              <CopyBlock code={exampleOutput} label="output_example_avene.txt" />
            )}
          </div>
        </div>

        {/* Ideal use note */}
        <div className="mt-6 border border-accent/30 bg-accent/5 p-4 flex items-start gap-3">
          <ArrowRight size={14} className="text-accent mt-0.5 shrink-0" />
          <p className="text-xs leading-relaxed text-foreground">
            O output do ULGE e ideal para pipelines de geracao de imagem. Use-o como input
            direto para o campo{" "}
            <code className="bg-secondary px-1.5 py-0.5 text-[11px]">
              [INSERT LABEL STRUCTURE]
            </code>{" "}
            no Master Template V5.
          </p>
        </div>
      </div>
    </section>
  )
}
