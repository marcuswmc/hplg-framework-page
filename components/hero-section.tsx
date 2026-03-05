import { ArrowDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20">
      {/* Section label */}
      <div className="w-full max-w-7xl flex items-center justify-between mb-12">
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          {"// SECTION: PROMPT FRAMEWORK"}
        </span>
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground flex items-center gap-2">
          <span className="inline-block h-2 w-2 bg-accent" />
          001
        </span>
      </div>

      <div className="max-w-5xl text-center flex flex-col items-center gap-8">
        {/* Version badge */}
        <div className="inline-flex items-center gap-2 border border-border px-4 py-2">
          <span className="h-2 w-2 bg-accent inline-block" />
          <span className="text-xs uppercase tracking-widest text-muted-foreground">
            Super Prompt Formula V5
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] text-balance uppercase">
          High-Fidelity Product Label Generation
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl text-sm md:text-base leading-relaxed text-muted-foreground">
          Framework unificado para gerar imagens de produtos com labels de alta
          fidelidade em modelos de IA. Tipografia legivel, hierarquia
          estruturada e renderizacao fotorrealista.
        </p>

        {/* 5 Modules */}
        <div className="flex flex-wrap justify-center gap-3 mt-4">
          {[
            "Scene Blueprint",
            "Central Subject",
            "Label Structure",
            "Visual Style",
            "Anti-Hallucination",
          ].map((module) => (
            <span
              key={module}
              className="border border-border px-3 py-1.5 text-[11px] uppercase tracking-wider text-foreground"
            >
              {module}
            </span>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#framework"
          className="mt-8 inline-flex items-center gap-3 bg-foreground text-primary-foreground px-8 py-4 text-sm uppercase tracking-widest font-semibold hover:bg-accent transition-colors"
        >
          <span className="h-2 w-2 bg-accent group-hover:bg-primary-foreground inline-block" />
          Learn now
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 flex flex-col items-center gap-2 animate-bounce">
        <ArrowDown size={16} className="text-muted-foreground" />
      </div>
    </section>
  )
}
