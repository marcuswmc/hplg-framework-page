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
    id: "scene",
    number: "01",
    title: "Scene Blueprint",
    description:
      "Define o blueprint visual da cena usando uma imagem de referencia. Composicao, iluminacao, paleta, angulo de camera, sombras e reflexos sao extraidos desta referencia.",
    prompt: `A photo-realistic commercial scene, meticulously designed using the 'Prompt Architecture V5' framework.

The overall scene, including composition, lighting palette, background textures, camera angle, shadows, and reflections, must be a direct visual translation of the concepts found in the reference image provided as [IMAGEM_DE_REFERENCIA].jpg.

This is the visual blueprint for the atmosphere and spatial arrangement.`,
  },
  {
    id: "subject",
    number: "02",
    title: "Central Subject",
    description:
      "Define o produto como sujeito central da composicao. O container, formato, proporcoes e identidade visual devem ser preservados com fidelidade perfeita.",
    prompt: `The central subject of this composition is the exact container and bottle shape found in the product image provided as [IMAGEM_DO_PRODUTO].jpg.

This is the object being placed into the scene. Its packaging proportions, material properties, brand logo, and overall color palette must be preserved with perfect fidelity.`,
  },
  {
    id: "label",
    number: "03",
    title: "Label Structure",
    description:
      "O rotulo frontal deve ser perfeitamente legivel. Layout, hierarquia tipografica e cada palavra devem seguir a estrutura definida com zero distorcao.",
    prompt: `The front label on the main bottle must be perfectly readable and textually precise.

The layout, typographic hierarchy, and every single word and character must follow the structure below exactly, with zero distortion and perfect alignment (anti-aliased, vector-like sharpness):

LABEL STRUCTURE START
[LABEL_LAYOUT_GRID]
LABEL STRUCTURE END`,
  },
  {
    id: "style",
    number: "04",
    title: "Visual Style",
    description:
      "Define o estilo visual como fotografia comercial ultra-realista com qualidade de publicidade editorial profissional.",
    prompt: `The visual style is an ultra-realistic, high-resolution commercial product photograph.

The style is that of professional editorial advertising. It features studio lighting that highlights product details, soft and precise shadows, and an extremely sharp focus across the entire label area.

The typography on the label must be optically clear and high resolution.`,
  },
  {
    id: "anti-hallucination",
    number: "05",
    title: "Anti-Hallucination",
    description:
      "Estrategia de prevencao de erros para garantir tipografia perfeita sem texto distorcido, letras falsas ou caracteres aleatorios.",
    prompt: `The final output must be completely free of misspelled text, distorted letters, or fake characters, ensuring perfect packaging typography and a clean, premium label design.`,
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
            O framework e composto por 5 modulos estruturais. Cada modulo controla
            um aspecto critico da geracao: cena, sujeito, rotulo, estilo e anti-alucinacao.
            Clique para expandir e copiar.
          </p>
        </div>

        {/* Architecture overview */}
        <div className="grid grid-cols-5 gap-2 mb-12">
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
