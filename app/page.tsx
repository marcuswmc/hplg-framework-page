import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { ModulesSection } from "@/components/modules-section"
import { TemplateSection } from "@/components/template-section"
import { GallerySection } from "@/components/gallery-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <div className="mx-auto max-w-7xl px-6">
        <hr className="border-border" />
      </div>
      <ProblemSection />
      <div className="mx-auto max-w-7xl px-6">
        <hr className="border-border" />
      </div>
      <ModulesSection />
      <div className="mx-auto max-w-7xl px-6">
        <hr className="border-border" />
      </div>
      <TemplateSection />
      <div className="mx-auto max-w-7xl px-6">
        <hr className="border-border" />
      </div>
      <GallerySection />
      <Footer />
    </main>
  )
}
