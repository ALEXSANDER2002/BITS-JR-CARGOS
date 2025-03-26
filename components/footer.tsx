import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t bg-white dark:bg-gray-900 relative z-10">
      <div className="container py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="relative w-8 h-8 md:w-10 md:h-10 bg-primary rounded-md flex items-center justify-center overflow-hidden">
                <span className="text-primary-foreground font-bold text-lg">B</span>
                <div className="absolute inset-0 bg-primary-foreground/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </div>
              <span className="font-bold text-xl md:text-2xl text-primary">Bits Jr</span>
            </Link>
            <p className="text-sm text-muted-foreground mt-2 max-w-md">
              Transformando ideias em soluções tecnológicas inovadoras para o mercado digital
            </p>
          </div>

          <div className="flex gap-3">
            {[
              { icon: Facebook, label: "Facebook" },
              { icon: Instagram, label: "Instagram" },
              { icon: Twitter, label: "Twitter" },
              { icon: Linkedin, label: "LinkedIn" },
              { icon: Github, label: "GitHub" },
            ].map((social, index) => (
              <Link
                key={index}
                href="#"
                className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-primary hover:text-white transition-all duration-300"
              >
                <social.icon className="h-4 w-4 md:h-5 md:w-5" />
                <span className="sr-only">{social.label}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <nav className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-3">
            <Link href="#areas" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Áreas de Atuação
            </Link>
            <Link href="#sobre" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Sobre Nós
            </Link>
          </nav>

          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Bits Jr. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

