"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Code } from "lucide-react"

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { left, top, width, height } = container.getBoundingClientRect()

      const x = (clientX - left) / width - 0.5
      const y = (clientY - top) / height - 0.5

      const title = container.querySelector(".hero-title") as HTMLElement
      const subtitle = container.querySelector(".hero-subtitle") as HTMLElement

      if (title && subtitle) {
        title.style.transform = `translate(${x * -20}px, ${y * -20}px)`
        subtitle.style.transform = `translate(${x * -10}px, ${y * -10}px)`
      }
    }

    container.addEventListener("mousemove", handleMouseMove)

    return () => {
      container.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const scrollToAreas = () => {
    const areasSection = document.getElementById("areas")
    if (areasSection) {
      areasSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section ref={containerRef} className="w-full min-h-[90vh] flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-background to-background z-0"></div>

      {/* Linhas de código decorativas */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-code-pattern opacity-20 rotate-12 blur-sm"></div>
      <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-code-pattern opacity-20 -rotate-12 blur-sm"></div>

      {/* Círculos decorativos */}
      <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-3xl"></div>
      <div className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full bg-gradient-to-tr from-green-500/10 to-blue-500/10 blur-3xl"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center text-center space-y-10 max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="relative inline-block">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-blue-500 to-violet-500 rounded-lg blur opacity-30 animate-pulse"></div>
              <div className="relative">
                <Code className="h-16 w-16 text-primary mx-auto mb-4 animate-float" />
              </div>
            </div>

            <h1 className="hero-title text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-500 to-violet-500 transition-transform duration-200 ease-out">
              Bits Jr
            </h1>

            <p className="hero-subtitle mx-auto max-w-[700px] text-xl text-muted-foreground md:text-2xl transition-transform duration-200 ease-out">
              Transformando ideias em soluções tecnológicas inovadoras
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-violet-600 hover:from-primary/90 hover:to-violet-700 transition-all duration-300 text-lg group relative overflow-hidden"
              onClick={scrollToAreas}
            >
              <span className="relative z-10 flex items-center">
                Conheça nossas áreas
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </span>
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </Button>
          </div>

          {/* Indicador de scroll */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex justify-center">
              <div className="w-1 h-2 bg-primary rounded-full mt-2 animate-scroll-indicator"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

