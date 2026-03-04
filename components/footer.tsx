export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-3 w-3 bg-accent" />
            <span className="text-sm font-semibold tracking-tight text-foreground uppercase">
              HPLG_V5
            </span>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Super Prompt Formula V5
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              High-Fidelity Product Label Generation
            </span>
          </div>

          <a
            href="https://marcusdev.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors"
          >
            marcusdev.me
          </a>
        </div>

        <div className="mt-8 pt-6 border-t border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <span className="text-[10px] text-muted-foreground">
            {"// Framework para modelos de IA generativa"}
          </span>
          <div className="flex items-center gap-4">
            {["Midjourney", "DALL-E", "Stable Diffusion", "Flux"].map((model) => (
              <span
                key={model}
                className="text-[10px] uppercase tracking-widest text-muted-foreground"
              >
                {model}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
