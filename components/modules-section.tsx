"use client"

import { useState } from "react"
import { CopyBlock } from "./copy-block"
import { ChevronDown, ChevronRight } from "lucide-react"

interface Module {
  id: string
  number: string
  title: string
  description: string
  prompt: string
}

const modules: Module[] = [
  {
    id: "reference",
    number: "01",
    title: "Reference Module",
    description:
      "Define a inspiracao visual usada para guiar a composicao e estetica da imagem gerada.",
    prompt: `Use the reference image [REFERENCE].jpg as visual inspiration.`,
  },
  {
    id: "concept",
    number: "02",
    title: "Concept Extraction Module",
    description:
      "Extraia apenas os atributos visuais relevantes da imagem de referencia para guiar a geracao.",
    prompt: `Extract from the reference image: composition, lighting, background palette, camera angle, shadows, reflections, product placement, depth and perspective.`,
  },
  {
    id: "identity",
    number: "03",
    title: "Product Identity Module",
    description:
      "Defina o produto que sera o assunto principal da cena gerada.",
    prompt: `The product used in the composition is attached as [PRODUCT].jpg. Use this product as the primary subject of the scene.`,
  },
  {
    id: "consistency",
    number: "04",
    title: "Product Consistency Module",
    description:
      "Garanta que a embalagem permaneca identica ao produto original em todos os detalhes.",
    prompt: `The packaging must remain identical to the original product. Preserve: bottle shape, packaging proportions, brand logo, label layout, packaging colors, materials, cap or pump design.`,
  },
  {
    id: "label",
    number: "05",
    title: "Label Replication Module",
    description:
      "O rotulo frontal do produto deve ser perfeitamente legivel com tipografia de alta resolucao.",
    prompt: `Front product label must be perfectly readable. Typography must be: ultra sharp, high resolution, anti-aliased, optically clear, commercial packaging fidelity.`,
  },
  {
    id: "grid",
    number: "06",
    title: "Label Grid System",
    description:
      "Defina a hierarquia estrutural do rotulo para organizar as informacoes de forma clara.",
    prompt: `Label layout grid:
Top → Brand Name
Upper Middle → Product Line
Center → Product Type
Lower Middle → Product Benefits
Lower Section → Active Ingredients
Bottom → Volume / Size`,
  },
  {
    id: "typography",
    number: "07",
    title: "Typography Reinforcement",
    description:
      "Tokens de reforco tipografico para garantir clareza maxima no texto da embalagem.",
    prompt: `sharp product label typography, editorial product photography, high resolution packaging text, clean cosmetic label, vector-like label clarity, packaging typography fidelity, macro packaging detail`,
  },
  {
    id: "camera",
    number: "08",
    title: "Photography & Camera Module",
    description:
      "Configuracoes de camera e iluminacao para fotografia comercial de produto ultra realista.",
    prompt: `Ultra realistic commercial product photography, studio lighting, soft shadows, premium beauty campaign aesthetic, extremely sharp focus, accurate packaging proportions.

Optional camera control: 85mm product photography lens, macro product photography, studio diffusion lighting.`,
  },
  {
    id: "material",
    number: "09",
    title: "Material Realism Module",
    description:
      "Reforco de realismo dos materiais para reflexos, refracoes e texturas fidedignas.",
    prompt: `Realistic plastic reflections, accurate glass refraction, cosmetic packaging material realism, high-fidelity label printing texture, subtle specular highlights.`,
  },
  {
    id: "error",
    number: "10",
    title: "Text Error Prevention",
    description:
      "Estrategia anti-alucinacao para prevenir erros de texto comuns em modelos de IA.",
    prompt: `No distorted text, no misspelled text, no fake letters, no random typography, perfect packaging typography, clean label layout, exact label replication.`,
  },
]

export function ModulesSection() {
  const [openModule, setOpenModule] = useState<string | null>("reference")

  return (
    <section id="modules" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section label */}
        <div className="flex items-center justify-between mb-16">
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            {"// SECTION: PROMPT_MODULES"}
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground flex items-center gap-2">
            <span className="inline-block h-2 w-2 bg-accent" />
            004
          </span>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground uppercase leading-tight text-balance">
            Arquitetura de Prompt V5
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground max-w-2xl">
            O framework e composto por 10 modulos especializados. Cada modulo foca em
            um aspecto critico da geracao de labels. Clique para expandir e copiar o prompt
            de cada modulo.
          </p>
        </div>

        {/* Architecture overview */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-12">
          {modules.map((mod) => (
            <button
              key={mod.id}
              onClick={() =>
                setOpenModule(openModule === mod.id ? null : mod.id)
              }
              className={`border p-3 text-left transition-all ${
                openModule === mod.id
                  ? "border-accent bg-accent/5"
                  : "border-border hover:border-foreground/30"
              }`}
            >
              <span className="text-[10px] text-muted-foreground block">
                {mod.number}
              </span>
              <span className="text-[10px] md:text-[11px] font-semibold text-foreground uppercase tracking-wide leading-tight block mt-1">
                {mod.title.replace(" Module", "")}
              </span>
            </button>
          ))}
        </div>

        {/* Module details */}
        <div className="flex flex-col gap-3">
          {modules.map((mod) => (
            <div key={mod.id} className="border border-border">
              <button
                onClick={() =>
                  setOpenModule(openModule === mod.id ? null : mod.id)
                }
                className="w-full flex items-center gap-4 p-4 hover:bg-secondary/50 transition-colors"
              >
                <span className="text-xs text-muted-foreground w-6">
                  {mod.number}
                </span>
                {openModule === mod.id ? (
                  <ChevronDown size={14} className="text-accent" />
                ) : (
                  <ChevronRight size={14} className="text-muted-foreground" />
                )}
                <span className="text-sm font-semibold text-foreground uppercase tracking-wide flex-1 text-left">
                  {mod.title}
                </span>
                <span className="hidden md:inline text-[10px] text-muted-foreground uppercase tracking-widest">
                  {openModule === mod.id ? "Aberto" : "Expandir"}
                </span>
              </button>

              {openModule === mod.id && (
                <div className="border-t border-border p-4 flex flex-col gap-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {mod.description}
                  </p>
                  <CopyBlock code={mod.prompt} label={`prompt_${mod.id}`} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
