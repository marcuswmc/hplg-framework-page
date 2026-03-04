"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Framework", href: "#framework" },
  { label: "Modules", href: "#modules" },
  { label: "Exemplos", href: "#gallery" },
  { label: "Template", href: "#template" },
]

export function Navigation() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-flex h-3 w-3 bg-accent" />
          <span className="text-sm font-semibold tracking-tight text-foreground uppercase">
            HPLG_V5
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://marcusdev.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
          >
            by Marcus Dev
          </a>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-background px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://marcusdev.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
          >
            by Marcus Dev
          </a>
        </div>
      )}
    </header>
  )
}
