"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { CheckCircle, Code, Database, Lightbulb, Smartphone, Globe } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { useIsMobile } from "@/hooks/use-mobile"

export function AboutUs() {
  const [isInView, setIsInView] = useState(false)
  const isMobile = useIsMobile()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("sobre")
    if (section) {
      observer.observe(section)
    }

    return () => {
      if (section) {
        observer.unobserve(section)
      }
    }
  }, [])

  const services = [
    { icon: Code, label: "Desenvolvimento Web", color: "bg-blue-600" },
    { icon: Smartphone, label: "Apps Móveis", color: "bg-indigo-600" },
    { icon: Database, label: "Sistemas", color: "bg-emerald-600" },
    { icon: Globe, label: "Marketing Digital", color: "bg-amber-600" },
    { icon: Lightbulb, label: "Inovação", color: "bg-purple-600" },
    { icon: CheckCircle, label: "Qualidade", color: "bg-sky-600" },
  ]

  const values = [
    "Excelência técnica",
    "Inovação constante",
    "Compromisso com resultados",
    "Trabalho em equipe",
    "Ética profissional",
  ]

  return (
    <section id="sobre" className="py-16 md:py-24 relative overflow-hidden bg-gray-50 dark:bg-gray-900/50">
      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mx-auto flex max-w-[68rem] flex-col items-center justify-center gap-3 text-center"
        >
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-primary">Sobre Nós</h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground text-sm md:text-base">
            Conheça mais sobre a Bits Jr e nossa missão
          </p>
        </motion.div>

        <div className="mt-10 md:mt-16 grid gap-8 md:gap-12 md:grid-cols-2 items-start max-w-[68rem] mx-auto">
          {/* Informações sobre a empresa */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6 md:space-y-8 order-2 md:order-1"
          >
            <div className="space-y-3 bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-primary">Nossa História</h3>
              <p className="text-muted-foreground text-sm md:text-base">
                A Bits Jr foi fundada por estudantes de Engenharia da Computação com o objetivo de proporcionar experiência
                prática aos alunos e oferecer soluções tecnológicas de qualidade para o mercado.
              </p>
              <p className="text-muted-foreground text-sm md:text-base">
                Desde nossa fundação, temos trabalhado com empresas de diversos segmentos, desenvolvendo projetos
                inovadores e contribuindo para o crescimento profissional de nossos membros.
              </p>
            </div>

            <div className="space-y-3 bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-primary">Nossa Missão</h3>
              <p className="text-muted-foreground text-sm md:text-base">
                Desenvolver soluções tecnológicas inovadoras que atendam às necessidades do mercado, enquanto
                proporcionamos aos nossos membros a oportunidade de aplicar conhecimentos teóricos em projetos reais.
              </p>
            </div>

            <div className="space-y-3 bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-primary">Nossos Valores</h3>
              <ul className="grid gap-2">
                {values.map((value, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -5 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -5 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                    className="flex items-center gap-2"
                  >
                    <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-sm md:text-base">{value}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Imagem e serviços */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 md:order-2"
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden border border-gray-100 dark:border-gray-700">
              <div className="relative w-full h-[500px] md:h-[600px]">
                <Image
                  src="/DIRETORIA-BITS-2 (2).png"
                  alt="Equipe Bits Jr"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="p-5 space-y-4">
                <h4 className="text-lg font-bold text-primary">Nossa Equipe</h4>
                <p className="text-muted-foreground text-sm md:text-base">
                  Somos formados por estudantes de Engenharia da Computação e áreas afins, comprometidos com a excelência e
                  o aprendizado contínuo. Nossa equipe multidisciplinar trabalha de forma colaborativa para entregar as
                  melhores soluções aos nossos clientes.
                </p>

                <div className="grid grid-cols-3 md:grid-cols-6 gap-4 pt-4">
                  {services.map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 5 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 5 }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                      className="flex flex-col items-center text-center gap-1"
                    >
                      <div className={cn("w-10 h-10 rounded-full flex items-center justify-center", service.color)}>
                        <service.icon className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-xs font-medium">{service.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

