export function ProblemSection() {
  const problems = [
    { label: "Texto ilegivel", desc: "Letras distorcidas e embaralhadas nos rotulos" },
    { label: "Letras aleatorias", desc: "Caracteres sem sentido gerados pelo modelo" },
    { label: "Logos distorcidos", desc: "Marcas e logotipos deformados ou irreconheciveis" },
    { label: "Proporcoes erradas", desc: "Embalagens com dimensoes incorretas" },
    { label: "Hierarquia inconsistente", desc: "Sem organizacao visual da informacao no rotulo" },
  ]

  return (
    <section id="framework" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section label */}
        <div className="flex items-center justify-between mb-16">
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            {"// SECTION: CORE_PROBLEM"}
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground flex items-center gap-2">
            <span className="inline-block h-2 w-2 bg-accent" />
            002
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground uppercase leading-tight text-balance">
              O problema central com labels de produtos em IA
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground max-w-lg">
              A maioria dos modelos de geracao de imagem trata o texto das embalagens como
              elemento decorativo, nao como um sistema de design estruturado. O resultado
              sao labels ilegsiveis e marcas irreconheciveis.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground max-w-lg">
              O <strong className="text-foreground">Super Prompt Formula V5</strong> resolve isso
              forcando o modelo a entender a embalagem usando uma{" "}
              <strong className="text-foreground">arquitetura de prompt estruturada</strong>.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {problems.map((problem, i) => (
              <div
                key={problem.label}
                className="flex items-start gap-4 border border-border p-4 hover:border-accent transition-colors"
              >
                <span className="text-[10px] text-muted-foreground mt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                    {problem.label}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    {problem.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
