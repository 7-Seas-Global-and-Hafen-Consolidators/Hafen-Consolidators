import { useEffect, useRef, useState } from 'react'

/**
 * useReveal — revela um elemento quando ele entra na viewport.
 * Retorna uma ref para anexar ao elemento e um booleano de visibilidade.
 */
export default function useReveal(options = { threshold: 0.15 }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(entry.target)
        }
      },
      options
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return [ref, visible]
}
