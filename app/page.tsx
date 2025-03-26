import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AreasSection } from "@/components/areas-section"
import { AboutUs } from "@/components/about-us"
import { TechBackground } from "@/components/tech-background"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-background via-background to-background/80 relative overflow-hidden">
      <TechBackground />
      <Navbar />

      <main className="flex-1 relative z-10">
        <AreasSection />
        <AboutUs />
      </main>

      <Footer />
    </div>
  )
}

