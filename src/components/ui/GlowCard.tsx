import React, { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

type AccentColor = 'cyan' | 'orange' | 'green' | 'purple' | 'gold'

interface GlowCardProps {
  children: React.ReactNode
  accentColor?: AccentColor
  className?: string
  tilt?: boolean
  onClick?: () => void
}

const accentStyles: Record<AccentColor, { border: string; shadow: string; hoverBorder: string }> = {
  cyan: {
    border: 'rgba(0,245,255,0.15)',
    shadow: 'rgba(0,245,255,0.35)',
    hoverBorder: 'rgba(0,245,255,0.5)',
  },
  orange: {
    border: 'rgba(255,107,53,0.15)',
    shadow: 'rgba(255,107,53,0.35)',
    hoverBorder: 'rgba(255,107,53,0.5)',
  },
  green: {
    border: 'rgba(57,255,20,0.15)',
    shadow: 'rgba(57,255,20,0.35)',
    hoverBorder: 'rgba(57,255,20,0.5)',
  },
  purple: {
    border: 'rgba(168,85,247,0.15)',
    shadow: 'rgba(168,85,247,0.35)',
    hoverBorder: 'rgba(168,85,247,0.5)',
  },
  gold: {
    border: 'rgba(255,180,0,0.15)',
    shadow: 'rgba(255,180,0,0.35)',
    hoverBorder: 'rgba(255,180,0,0.5)',
  },
}

export function GlowCard({
  children,
  accentColor = 'cyan',
  className = '',
  tilt = true,
  onClick,
}: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const accent = accentStyles[accentColor]

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [12, -12]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), { stiffness: 300, damping: 30 })

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!tilt || !cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const xVal = (e.clientX - rect.left) / rect.width - 0.5
    const yVal = (e.clientY - rect.top) / rect.height - 0.5
    x.set(xVal)
    y.set(yVal)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <div
      className="perspective-1000 will-change-transform"
      style={{ perspective: '1000px' }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        style={
          tilt
            ? {
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
                border: `1px solid ${accent.border}`,
                boxShadow: `0 4px 24px rgba(0,0,0,0.4)`,
              }
            : {
                border: `1px solid ${accent.border}`,
                boxShadow: `0 4px 24px rgba(0,0,0,0.4)`,
              }
        }
        whileHover={{
          scale: 1.02,
          boxShadow: `0 0 25px ${accent.shadow}, 0 8px 32px rgba(0,0,0,0.5)`,
          borderColor: accent.hoverBorder,
        }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className={`
          relative overflow-hidden rounded-xl
          backdrop-blur-md
          bg-[rgba(2,11,20,0.7)]
          cursor-${onClick ? 'pointer' : 'default'}
          ${className}
        `}
      >
        {/* Scanline overlay */}
        <div
          className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.02] rounded-xl"
          style={{ zIndex: 10 }}
        >
          <div
            className="absolute inset-x-0 h-8"
            style={{
              background: `linear-gradient(to bottom, transparent, ${accent.shadow}, transparent)`,
              animation: 'scanline 4s linear infinite',
            }}
          />
        </div>
        {children}
      </motion.div>
    </div>
  )
}
