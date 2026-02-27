import { useState, useEffect, useRef, useCallback } from 'react'

interface ParallaxState {
  scrollY: number
  mouseX: number
  mouseY: number
}

interface UseParallaxReturn extends ParallaxState {
  getParallaxStyle: (speed: number) => { transform: string }
  getMouseParallaxStyle: (speed: number) => { transform: string }
}

const LERP_FACTOR = 0.08

function lerp(start: number, end: number, factor: number): number {
  return start + (end - start) * factor
}

export function useParallax(): UseParallaxReturn {
  const [state, setState] = useState<ParallaxState>({
    scrollY: 0,
    mouseX: 0,
    mouseY: 0,
  })

  const targetMouse = useRef({ x: 0, y: 0 })
  const currentMouse = useRef({ x: 0, y: 0 })
  const scrollY = useRef(0)
  const rafId = useRef<number>(0)
  const isRunning = useRef(true)

  useEffect(() => {
    const handleScroll = () => {
      scrollY.current = window.scrollY
    }

    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2
      const centerY = window.innerHeight / 2
      targetMouse.current = {
        x: (e.clientX - centerX) / centerX,
        y: (e.clientY - centerY) / centerY,
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('mousemove', handleMouseMove, { passive: true })

    const animate = () => {
      if (!isRunning.current) return

      currentMouse.current.x = lerp(currentMouse.current.x, targetMouse.current.x, LERP_FACTOR)
      currentMouse.current.y = lerp(currentMouse.current.y, targetMouse.current.y, LERP_FACTOR)

      setState({
        scrollY: scrollY.current,
        mouseX: currentMouse.current.x,
        mouseY: currentMouse.current.y,
      })

      rafId.current = requestAnimationFrame(animate)
    }

    rafId.current = requestAnimationFrame(animate)

    return () => {
      isRunning.current = false
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
      if (rafId.current) cancelAnimationFrame(rafId.current)
    }
  }, [])

  const getParallaxStyle = useCallback(
    (speed: number) => ({
      transform: `translateY(${state.scrollY * speed * 0.3}px)`,
    }),
    [state.scrollY]
  )

  const getMouseParallaxStyle = useCallback(
    (speed: number) => ({
      transform: `translate(${state.mouseX * speed * 20}px, ${state.mouseY * speed * 20}px)`,
    }),
    [state.mouseX, state.mouseY]
  )

  return {
    ...state,
    getParallaxStyle,
    getMouseParallaxStyle,
  }
}
