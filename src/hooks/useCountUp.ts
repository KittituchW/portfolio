import { useState, useEffect, useRef } from 'react'

function easeOutQuart(t: number): number {
  return 1 - Math.pow(1 - t, 4)
}

interface UseCountUpReturn {
  count: number
  ref: React.RefObject<HTMLDivElement | null>
}

export function useCountUp(
  target: number,
  duration = 2000,
  decimals = 0
): UseCountUpReturn {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const hasStarted = useRef(false)
  const frameRef = useRef<number>(0)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted.current) {
            hasStarted.current = true
            const startTime = performance.now()

            const animate = (currentTime: number) => {
              const elapsed = currentTime - startTime
              const progress = Math.min(elapsed / duration, 1)
              const eased = easeOutQuart(progress)
              const multiplier = Math.pow(10, decimals)
              const current = Math.round(eased * target * multiplier) / multiplier
              setCount(current)

              if (progress < 1) {
                frameRef.current = requestAnimationFrame(animate)
              } else {
                setCount(target)
              }
            }

            frameRef.current = requestAnimationFrame(animate)
          }
        })
      },
      { threshold: 0.5 }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [target, duration, decimals])

  return { count, ref }
}
