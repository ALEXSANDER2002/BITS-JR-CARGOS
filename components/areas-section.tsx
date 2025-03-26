"use client"

import { useState, useEffect, useRef } from "react"
import { Code, LineChart, MessageSquare, Rocket, Users2, Calendar, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

const areas = [
  {
    id: "presidencia",
    title: "Presidência",
    icon: Users2,
    description: "Liderança estratégica e representação institucional da Bits Jr",
    content: [
      "Representação institucional da empresa júnior",
      "Definição de diretrizes estratégicas",
      "Coordenação entre as diferentes áreas",
      "Tomada de decisões executivas",
      "Garantia do alinhamento com os valores e missão da empresa",
    ],
    color: "from-blue-600 to-blue-800",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
    borderColor: "border-blue-200 dark:border-blue-800/30",
  },
  {
    id: "gestao",
    title: "Gestão",
    icon: LineChart,
    description: "Administração eficiente dos recursos e processos internos",
    content: [
      "Gestão financeira e orçamentária",
      "Administração de recursos humanos",
      "Desenvolvimento de processos internos",
      "Controle de qualidade e compliance",
      "Planejamento estratégico operacional",
    ],
    color: "from-emerald-600 to-emerald-800",
    bgColor: "bg-emerald-50 dark:bg-emerald-950/20",
    borderColor: "border-emerald-200 dark:border-emerald-800/30",
  },
  {
    id: "comercial",
    title: "Comercial",
    icon: MessageSquare,
    description: "Prospecção de clientes e gestão de relacionamentos comerciais",
    content: [
      "Prospecção e captação de clientes",
      "Negociação e fechamento de contratos",
      "Gestão de relacionamento com clientes",
      "Desenvolvimento de estratégias de marketing",
      "Análise de mercado e concorrência",
    ],
    color: "from-amber-600 to-amber-800",
    bgColor: "bg-amber-50 dark:bg-amber-950/20",
    borderColor: "border-amber-200 dark:border-amber-800/30",
  },
  {
    id: "projetos",
    title: "Projetos",
    icon: Code,
    description: "Desenvolvimento e implementação de soluções tecnológicas",
    content: [
      "Desenvolvimento de websites e aplicativos",
      "Implementação de sistemas de gestão",
      "Criação de soluções personalizadas",
      "Gerenciamento de projetos tecnológicos",
      "Manutenção e suporte técnico",
    ],
    color: "from-indigo-600 to-indigo-800",
    bgColor: "bg-indigo-50 dark:bg-indigo-950/20",
    borderColor: "border-indigo-200 dark:border-indigo-800/30",
  },
  {
    id: "inovacao",
    title: "Inovação",
    icon: Rocket,
    description: "Pesquisa e desenvolvimento de novas tecnologias e experiências",
    content: [
      "Design de interfaces (UI) centradas no usuário",
      "Experiência do usuário (UX) e pesquisa de usabilidade",
      "Marketing digital e estratégias de crescimento",
      "Desenvolvimento de protótipos inovadores",
      "Implementação de metodologias ágeis",
      "Criação de soluções disruptivas para o mercado",
    ],
    color: "from-purple-600 to-purple-800",
    bgColor: "bg-purple-50 dark:bg-purple-950/20",
    borderColor: "border-purple-200 dark:border-purple-800/30",
  },
  {
    id: "eventos",
    title: "Gestão de Eventos",
    icon: Calendar,
    description: "Organização e coordenação de eventos técnicos e institucionais",
    content: [
      "Planejamento e execução de eventos",
      "Organização de workshops e treinamentos",
      "Coordenação de hackathons e competições",
      "Gestão de parcerias para eventos",
      "Promoção da marca através de eventos estratégicos",
    ],
    color: "from-sky-600 to-sky-800",
    bgColor: "bg-sky-50 dark:bg-sky-950/20",
    borderColor: "border-sky-200 dark:border-sky-800/30",
  },
]

export function AreasSection() {
  const [activeArea, setActiveArea] = useState(areas[0].id)
  const [isInView, setIsInView] = useState(false)
  const [screenSize, setScreenSize] = useState({
    isMobile: false,
    isTablet: false,
  })
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  // Detectar tamanho da tela
  useEffect(() => {
    const checkScreenSize = () => {
      setScreenSize({
        isMobile: window.innerWidth < 640,
        isTablet: window.innerWidth >= 640 && window.innerWidth < 1024,
      })
    }

    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)

    return () => {
      window.removeEventListener("resize", checkScreenSize)
    }
  }, [])

  // Detectar quando a seção está visível
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("areas")
    if (section) {
      observer.observe(section)
    }

    return () => {
      if (section) {
        observer.unobserve(section)
      }
    }
  }, [])

  // Função para rolar o container de botões
  const scrollButtons = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200
      const currentScroll = scrollContainerRef.current.scrollLeft

      scrollContainerRef.current.scrollTo({
        left: direction === "left" ? currentScroll - scrollAmount : currentScroll + scrollAmount,
        behavior: "smooth",
      })
    }
  }

  const currentArea = areas.find((area) => area.id === activeArea) || areas[0]
  const currentIndex = areas.findIndex((area) => area.id === activeArea)

  // Navegar para a próxima/anterior área
  const navigateArea = (direction: "prev" | "next") => {
    const totalAreas = areas.length
    let newIndex = direction === "prev" ? currentIndex - 1 : currentIndex + 1

    // Circular navigation
    if (newIndex < 0) newIndex = totalAreas - 1
    if (newIndex >= totalAreas) newIndex = 0

    setActiveArea(areas[newIndex].id)
  }

  return (
    <section id="areas" className="py-12 sm:py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-3 text-center"
        >
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
            Conheça nossas áreas de atuação
          </h2>
          <p className="max-w-[90%] sm:max-w-[85%] leading-normal text-muted-foreground text-sm sm:text-base">
            A Bits Jr é composta por diferentes áreas que trabalham em conjunto para oferecer soluções tecnológicas
            inovadoras e de alta qualidade.
          </p>
        </motion.div>

        {/* Layout para dispositivos móveis (muito pequenos) */}
        {screenSize.isMobile && (
          <div className="mt-8 space-y-6">
            {/* Navegação por abas */}
            <div className="relative">
              <div
                ref={scrollContainerRef}
                className="flex overflow-x-auto py-2 gap-2 hide-scrollbar snap-x snap-mandatory"
              >
                {areas.map((area) => (
                  <button
                    key={area.id}
                    onClick={() => setActiveArea(area.id)}
                    className={cn(
                      "flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 snap-start",
                      activeArea === area.id
                        ? `bg-primary text-white shadow-sm`
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700",
                    )}
                  >
                    {area.title}
                  </button>
                ))}
              </div>

              {/* Botões de navegação */}
              <button
                onClick={() => scrollButtons("left")}
                className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white/80 dark:bg-gray-800/80 rounded-full shadow-sm border border-gray-200 dark:border-gray-700"
                aria-label="Rolar para a esquerda"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => scrollButtons("right")}
                className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white/80 dark:bg-gray-800/80 rounded-full shadow-sm border border-gray-200 dark:border-gray-700"
                aria-label="Rolar para a direita"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            {/* Card de conteúdo */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeArea}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className={cn(
                  "p-4 rounded-xl border shadow-sm relative overflow-hidden",
                  currentArea.borderColor,
                  currentArea.bgColor,
                )}
              >
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={cn(
                        "w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br",
                        currentArea.color,
                      )}
                    >
                      <currentArea.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">{currentArea.title}</h3>
                      <p className="text-xs text-muted-foreground">{currentArea.description}</p>
                    </div>
                  </div>

                  <div className="grid gap-3">
                    {currentArea.content.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="flex items-start gap-2"
                      >
                        <div
                          className={cn(
                            "w-5 h-5 rounded-full flex items-center justify-center mt-0.5 bg-gradient-to-br",
                            currentArea.color,
                          )}
                        >
                          <span className="text-white text-xs font-bold">{index + 1}</span>
                        </div>
                        <p className="text-sm">{item}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Navegação entre áreas */}
                  <div className="flex justify-between mt-6">
                    <button
                      onClick={() => navigateArea("prev")}
                      className="flex items-center gap-1 text-xs font-medium text-primary hover:underline"
                    >
                      <ChevronLeft className="h-3 w-3" /> Anterior
                    </button>
                    <button
                      onClick={() => navigateArea("next")}
                      className="flex items-center gap-1 text-xs font-medium text-primary hover:underline"
                    >
                      Próxima <ChevronRight className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        )}

        {/* Layout para tablets */}
        {screenSize.isTablet && (
          <div className="mt-10 space-y-8">
            {/* Navegação por abas */}
            <div className="flex flex-wrap justify-center gap-2">
              {areas.map((area) => (
                <button
                  key={area.id}
                  onClick={() => setActiveArea(area.id)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                    activeArea === area.id
                      ? `bg-primary text-white shadow-sm`
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700",
                  )}
                >
                  <span className="flex items-center gap-2">
                    <area.icon className="h-4 w-4" />
                    {area.title}
                  </span>
                </button>
              ))}
            </div>

            {/* Card de conteúdo */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeArea}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className={cn(
                  "p-5 rounded-xl border shadow-sm relative overflow-hidden",
                  currentArea.borderColor,
                  currentArea.bgColor,
                )}
              >
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-5">
                    <div
                      className={cn(
                        "w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br",
                        currentArea.color,
                      )}
                    >
                      <currentArea.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{currentArea.title}</h3>
                      <p className="text-sm text-muted-foreground">{currentArea.description}</p>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {currentArea.content.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <div
                          className={cn(
                            "w-6 h-6 rounded-full flex items-center justify-center mt-0.5 bg-gradient-to-br",
                            currentArea.color,
                          )}
                        >
                          <span className="text-white text-xs font-bold">{index + 1}</span>
                        </div>
                        <p className="text-sm">{item}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        )}

        {/* Layout para desktop */}
        {!screenSize.isMobile && !screenSize.isTablet && (
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col gap-2"
            >
              {areas.map((area) => (
                <button
                  key={area.id}
                  onClick={() => setActiveArea(area.id)}
                  className={cn(
                    "flex items-center gap-3 p-3 rounded-lg text-left transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 border border-transparent",
                    activeArea === area.id ? `${area.bgColor} ${area.borderColor} shadow-sm` : "",
                  )}
                >
                  <div
                    className={cn(
                      "w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br",
                      area.color,
                    )}
                  >
                    <area.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium">{area.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-1">{area.description}</p>
                  </div>
                </button>
              ))}
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeArea}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className={cn(
                  "p-6 rounded-xl border shadow-sm relative overflow-hidden",
                  currentArea.borderColor,
                  currentArea.bgColor,
                )}
              >
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-5">
                    <div
                      className={cn(
                        "w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br",
                        currentArea.color,
                      )}
                    >
                      <currentArea.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{currentArea.title}</h3>
                      <p className="text-base text-muted-foreground">{currentArea.description}</p>
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    {currentArea.content.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <div
                          className={cn(
                            "w-6 h-6 rounded-full flex items-center justify-center mt-0.5 bg-gradient-to-br",
                            currentArea.color,
                          )}
                        >
                          <span className="text-white text-xs font-bold">{index + 1}</span>
                        </div>
                        <p className="text-base">{item}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  )
}

