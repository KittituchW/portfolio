import { motion } from 'framer-motion'

interface ScrollRevealCardProps {
  children: React.ReactNode
  className?: string
  delay?: number
  borderColor?: string
  glowColor?: string
}

export function ScrollRevealCard({
  children,
  className = '',
  delay = 0,
  borderColor = 'rgba(255,255,255,0.1)',
  glowColor = 'rgba(255,255,255,0.05)',
}: ScrollRevealCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.85,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay,
      }}
      whileHover={{
        scale: 1.015,
        boxShadow: `0 16px 48px rgba(0,0,0,0.6), 0 0 28px ${glowColor}`,
        transition: { duration: 0.25, ease: 'easeOut' },
      }}
      style={{
        border: `1px solid ${borderColor}`,
        boxShadow: `0 8px 40px rgba(0,0,0,0.45)`,
      }}
      className={`
        relative rounded-xl overflow-hidden
        backdrop-blur-md
        bg-[rgba(4,14,26,0.72)]
        ${className}
      `}
    >
      {children}
    </motion.div>
  )
}
