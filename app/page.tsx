import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { PipelineSection } from "@/components/pipeline-section"
import { ModulesSection } from "@/components/modules-section"
import { UlgeSection } from "@/components/ulge-section"
import { TemplateSection } from "@/components/template-section"
import { GallerySection } from "@/components/gallery-section"
import { Footer } from "@/components/footer"

function Divider() {
  return (
    <div className="mx-auto max-w-7xl px-6">
      <hr className="border-border" />
    </div>
  )
}

export default function Page() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <Divider />
      <ProblemSection />
      <Divider />
      <PipelineSection />
      <Divider />
      <ModulesSection />
      <Divider />
      <UlgeSection />
      <Divider />
      <TemplateSection />
      <Divider />
      <GallerySection />
      <Footer />
    </main>
  )
}
