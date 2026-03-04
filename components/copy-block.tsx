"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"

interface CopyBlockProps {
  code: string
  label?: string
}

export function CopyBlock({ code, label }: CopyBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative group border border-border bg-card">
      {label && (
        <div className="flex items-center justify-between border-b border-border px-4 py-2">
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            {label}
          </span>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors"
            aria-label="Copiar prompt"
          >
            {copied ? (
              <>
                <Check size={12} />
                Copiado
              </>
            ) : (
              <>
                <Copy size={12} />
                Copiar
              </>
            )}
          </button>
        </div>
      )}
      <div className="relative">
        <pre className="overflow-x-auto p-4 text-xs leading-relaxed text-foreground whitespace-pre-wrap">
          <code>{code}</code>
        </pre>
        {!label && (
          <button
            onClick={handleCopy}
            className="absolute top-3 right-3 flex items-center gap-1.5 border border-border bg-card px-2.5 py-1.5 text-[10px] uppercase tracking-widest text-muted-foreground hover:text-accent hover:border-accent transition-colors opacity-0 group-hover:opacity-100"
            aria-label="Copiar prompt"
          >
            {copied ? (
              <>
                <Check size={12} />
                Copiado
              </>
            ) : (
              <>
                <Copy size={12} />
                Copiar
              </>
            )}
          </button>
        )}
      </div>
    </div>
  )
}
