import { ArrowDown } from "lucide-react"

const steps = [
  {
    id: "input",
    label: "product_image",
    description: "Imagem real do produto com rotulo visivel",
    type: "input" as const,
  },
  {
    id: "ulge",
    label: "Universal Label Grid Extractor",
    description: "Analisa e extrai a estrutura do rotulo em formato padronizado",
    type: "process" as const,
  },
  {
    id: "grid",
    label: "label_layout_grid",
    description: "Bloco estruturado com hierarquia, posicao e tipografia do rotulo",
    type: "data" as const,
  },
  {
    id: "spf",
    label: "Prompt Formula V5",
    description: "Framework de 5 modulos estruturais para geracao de alta fidelidade",
    type: "process" as const,
  },
  {
    id: "output",
    label: "AI Product Generation",
    description: "Imagem de produto com label de alta fidelidade, tipografia legivel e realismo fotografico",
    type: "output" as const,
  },
]

function getStepStyle(type: "input" | "process" | "data" | "output") {
  switch (type) {
    case "input":
      return "border-foreground bg-foreground text-primary-foreground"
    case "process":
      return "border-accent bg-accent text-accent-foreground"
    case "data":
      return "border-border bg-card text-foreground"
    case "output":
      return "border-foreground bg-foreground text-primary-foreground"
  }
}

function getStepTag(type: "input" | "process" | "data" | "output") {
  switch (type) {
    case "input":
      return "INPUT"
    case "process":
      return "PROCESS"
    case "data":
      return "DATA"
    case "output":
      return "OUTPUT"
  }
}

export function PipelineSection() {
  return (
    <section id="pipeline" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section label */}
        <div className="flex items-center justify-between mb-16">
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            {"// SECTION: PIPELINE_FLOW"}
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground flex items-center gap-2">
            <span className="inline-block h-2 w-2 bg-accent" />
            003
          </span>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground uppercase leading-tight text-balance">
            Pipeline de Geracao
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground max-w-2xl">
            O fluxo completo: da imagem real do produto ate a geracao de alta
            fidelidade. O ULGE Prompt extrai a estrutura do rotulo, e a Super
            Prompt Formula V5 usa essa estrutura para gerar a imagem final.
          </p>
        </div>

        {/* Pipeline flow */}
        <div className="flex flex-col items-center gap-0 max-w-xl mx-auto">
          {steps.map((step, i) => (
            <div key={step.id} className="w-full flex flex-col items-center">
              {/* Step card */}
              <div
                className={`w-full border p-5 ${getStepStyle(step.type)}`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-[10px] uppercase tracking-widest font-semibold ${
                      step.type === "input" || step.type === "output"
                        ? "text-primary-foreground/60"
                        : step.type === "process"
                        ? "text-accent-foreground/70"
                        : "text-muted-foreground"
                    }`}
                  >
                    {getStepTag(step.type)}
                  </span>
                  <span
                    className={`text-[10px] tracking-widest ${
                      step.type === "input" || step.type === "output"
                        ? "text-primary-foreground/60"
                        : step.type === "process"
                        ? "text-accent-foreground/70"
                        : "text-muted-foreground"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3
                  className={`text-sm md:text-base font-bold uppercase tracking-wide ${
                    step.type === "data" ? "text-foreground" : ""
                  }`}
                >
                  {step.label}
                </h3>
                <p
                  className={`text-[11px] leading-relaxed mt-1.5 ${
                    step.type === "input" || step.type === "output"
                      ? "text-primary-foreground/70"
                      : step.type === "process"
                      ? "text-accent-foreground/80"
                      : "text-muted-foreground"
                  }`}
                >
                  {step.description}
                </p>
              </div>

              {/* Arrow between steps */}
              {i < steps.length - 1 && (
                <div className="flex flex-col items-center py-2">
                  <div className="w-px h-4 bg-border" />
                  <ArrowDown size={14} className="text-muted-foreground" />
                  <div className="w-px h-4 bg-border" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-6 mt-12">
          {[
            { type: "input", label: "Input / Output", style: "bg-foreground" },
            { type: "process", label: "Process", style: "bg-accent" },
            { type: "data", label: "Data", style: "bg-card border border-border" },
          ].map((legend) => (
            <div key={legend.type} className="flex items-center gap-2">
              <span className={`inline-block h-3 w-3 ${legend.style}`} />
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                {legend.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
