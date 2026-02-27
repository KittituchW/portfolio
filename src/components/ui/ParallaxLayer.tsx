import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface ParallaxLayerProps {
  speed?: number
  children: React.ReactNode
  className?: string
  mouseParallax?: boolean
  mouseX?: number
  mouseY?: number
}

export function ParallaxLayer({
  speed = 0.3,
  children,
  className = '',
  mouseParallax = false,
  mouseX = 0,
  mouseY = 0,
}: ParallaxLayerProps) {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -100 * speed])

  if (mouseParallax) {
    return (
      <div
        className={`will-change-transform ${className}`}
        style={{
          transform: `translate(${mouseX * speed * 20}px, ${mouseY * speed * 20}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        {children}
      </div>
    )
  }

  return (
    <motion.div
      style={{ y }}
      className={`will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  )
}
