"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/5594992760247`, '_blank')
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-background/95 backdrop-blur-md border-b shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container flex h-16 md:h-20 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative w-8 h-8 md:w-10 md:h-10 bg-primary rounded-md flex items-center justify-center overflow-hidden">
              <span className="text-primary-foreground font-bold text-lg md:text-xl">B</span>
              <div className="absolute inset-0 bg-primary-foreground/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </div>
            <span className="font-bold text-xl md:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
              Bits Jr
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex gap-8">
          <Link href="#areas" className="text-sm font-medium transition-colors hover:text-primary relative group">
            Áreas de Atuação
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="#sobre" className="text-sm font-medium transition-colors hover:text-primary relative group">
            Sobre Nós
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button
            onClick={handleWhatsAppClick}
            className="bg-primary text-primary-foreground shadow hover:bg-primary/90"
          >
            Fale Conosco
          </Button>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon" className="border-primary/20">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="border-primary/20 bg-background/95 backdrop-blur-lg">
            <div className="flex flex-col gap-6 pt-6">
              <Link
                href="#areas"
                className="text-base font-medium transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Áreas de Atuação
              </Link>
              <Link
                href="#sobre"
                className="text-base font-medium transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Sobre Nós
              </Link>
              <div className="flex flex-col gap-2 mt-4">
                <Button
                  onClick={handleWhatsAppClick}
                  className="bg-primary hover:bg-primary/90 w-full"
                >
                  Fale Conosco
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

