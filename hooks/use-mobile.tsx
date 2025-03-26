import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    const onChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches)
    }

    // Definir o valor inicial
    setIsMobile(mql.matches)

    // Adicionar listener
    mql.addEventListener("change", onChange)

    // Cleanup
    return () => {
      mql.removeEventListener("change", onChange)
    }
  }, [])

  // Durante SSR, retornar false
  if (!mounted) {
    return false
  }

  return isMobile
}
