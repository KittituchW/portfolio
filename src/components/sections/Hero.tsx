import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, ChevronDown, Download, Eye } from 'lucide-react'
import { useTypewriter } from '@/hooks/useTypewriter'
import { CountUp } from '@/components/ui/CountUp'
import { profile, stats, contact } from '@/data/resume'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export function Hero() {
  const { displayText } = useTypewriter({
    phrases: profile.typewriterPhrases,
    typeSpeed: 80,
    deleteSpeed: 40,
    pauseTime: 1800,
  })

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [targetPos, setTargetPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2
      const cy = window.innerHeight / 2
      setTargetPos({
        x: (e.clientX - cx) / cx,
        y: (e.clientY - cy) / cy,
      })
    }

    let rafId: number
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t

    const tick = () => {
      setMousePos((prev) => ({
        x: lerp(prev.x, targetPos.x, 0.08),
        y: lerp(prev.y, targetPos.y, 0.08),
      }))
      rafId = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    rafId = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(rafId)
    }
  }, [targetPos])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden"
      style={{ zIndex: 1 }}
    >
      {/* Radial background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(0,245,255,0.06) 0%, transparent 70%)',
          zIndex: 0,
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto"
      >
        {/* Status badge */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono-tech text-xs uppercase tracking-widest"
            style={{
              background: 'rgba(57,255,20,0.08)',
              border: '1px solid rgba(57,255,20,0.25)',
              color: '#39ff14',
            }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{
                backgroundColor: '#39ff14',
                animation: 'pulse-glow 2s ease-in-out infinite',
                boxShadow: '0 0 8px rgba(57,255,20,0.8)',
              }}
            />
            Open to Work — Sydney, AU
          </div>
        </motion.div>

        {/* Name */}
        <motion.div
          variants={itemVariants}
          style={{
            transform: `translate(${mousePos.x * 10}px, ${mousePos.y * 10}px)`,
            transition: 'transform 0.1s ease-out',
          }}
          className="mb-4"
        >
          <h1 className="font-orbitron font-black leading-none">
            <span
              className="block text-5xl md:text-7xl lg:text-8xl text-glow"
              style={{ color: 'var(--cyan)' }}
            >
              {profile.nameShort}
            </span>
            <span
              className="block text-3xl md:text-5xl lg:text-6xl mt-2"
              style={{
                color: 'var(--text)',
                textShadow: '0 0 30px rgba(0,245,255,0.15)',
              }}
            >
              {profile.nameLast}
            </span>
          </h1>
        </motion.div>

        {/* Typewriter */}
        <motion.div
          variants={itemVariants}
          style={{
            transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)`,
            transition: 'transform 0.1s ease-out',
          }}
          className="mb-6"
        >
          <p className="font-orbitron text-xl md:text-2xl lg:text-3xl" style={{ color: 'var(--text)' }}>
            I build{' '}
            <span className="text-glow" style={{ color: 'var(--cyan)' }}>
              {displayText}
            </span>
            <span className="cursor-blink" />
          </p>
        </motion.div>

        {/* Bio */}
        <motion.div
          variants={itemVariants}
          style={{
            transform: `translate(${mousePos.x * 5}px, ${mousePos.y * 5}px)`,
            transition: 'transform 0.1s ease-out',
          }}
          className="mb-10"
        >
          <p
            className="font-rajdhani text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: 'var(--muted)' }}
          >
            Machine Learning Engineer and Data Scientist specialising in deep learning,
            time-series forecasting, and production ML systems. Published researcher
            at AusDM&apos;25 and ICBDA 2026.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-16">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0,245,255,0.5)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('projects')}
            className="flex items-center gap-2 px-6 py-3 rounded-lg font-rajdhani font-semibold text-sm uppercase tracking-wider transition-all duration-200"
            style={{
              background: 'rgba(0,245,255,0.15)',
              border: '1px solid rgba(0,245,255,0.5)',
              color: 'var(--cyan)',
              boxShadow: '0 0 15px rgba(0,245,255,0.2)',
            }}
          >
            <Eye size={16} />
            View Projects
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            download
            className="flex items-center gap-2 px-6 py-3 rounded-lg font-rajdhani font-semibold text-sm uppercase tracking-wider transition-all duration-200"
            style={{
              background: 'transparent',
              border: '1px solid rgba(0,245,255,0.3)',
              color: 'var(--cyan)',
            }}
          >
            <Download size={16} />
            Download Resume
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.1, color: '#00f5ff' }}
            whileTap={{ scale: 0.95 }}
            href={`https://${contact.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg transition-all duration-200"
            style={{
              border: '1px solid rgba(0,245,255,0.2)',
              color: 'var(--muted)',
            }}
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.1, color: '#00f5ff' }}
            whileTap={{ scale: 0.95 }}
            href={`https://${contact.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg transition-all duration-200"
            style={{
              border: '1px solid rgba(0,245,255,0.2)',
              color: 'var(--muted)',
            }}
            aria-label="GitHub"
          >
            <Github size={18} />
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={itemVariants}>
              <CountUp
                target={stat.value}
                suffix={stat.suffix}
                duration={2000}
                decimals={stat.decimals}
                label={stat.label}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-[145px] left-1/2 -translate-x-1/2"
        style={{ color: 'var(--muted)' }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </motion.button>
    </section>
  )
}
