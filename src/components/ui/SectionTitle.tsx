import { motion } from 'framer-motion'

interface SectionTitleProps {
  label?: string
  title: string
  subtitle?: string
  centered?: boolean
}

export function SectionTitle({ label, title, subtitle, centered = false }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`mb-12 ${centered ? 'text-center' : ''}`}
    >
      {label && (
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-mono-tech text-xs uppercase tracking-[0.2em] mb-3 block"
          style={{ color: 'var(--cyan)' }}
        >
          {label}
        </motion.span>
      )}

      <div className={`relative inline-block ${centered ? 'mx-auto' : ''}`}>
        <h2
          className="font-orbitron font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-2"
          style={{ textShadow: '0 0 30px rgba(0,245,255,0.15)' }}
        >
          {title}
        </h2>

        {/* Animated underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          style={{
            transformOrigin: centered ? 'center' : 'left',
            background: 'linear-gradient(90deg, var(--cyan), var(--purple))',
            height: '3px',
            borderRadius: '2px',
            marginTop: '4px',
          }}
        />
      </div>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="font-rajdhani text-base md:text-lg mt-4 max-w-2xl"
          style={{ color: 'var(--muted)' }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}
