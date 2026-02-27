import { motion } from 'framer-motion'
import { GraduationCap, MapPin, FlaskConical, Award } from 'lucide-react'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { GlowCard } from '@/components/ui/GlowCard'

const quickFacts = [
  {
    icon: GraduationCap,
    label: 'Education',
    value: 'UTS Master of Data Science',
    sub: 'GPA 6.78/7.0',
    color: 'cyan' as const,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Sydney, Australia',
    sub: 'Open to Relocation',
    color: 'green' as const,
  },
  {
    icon: FlaskConical,
    label: 'Research',
    value: 'Transformer-based Forecasting',
    sub: 'Financial Time Series',
    color: 'purple' as const,
  },
  {
    icon: Award,
    label: 'Scholarship',
    value: "UTS President's Scholar",
    sub: 'AUD $39k p.a.',
    color: 'orange' as const,
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function About() {
  return (
    <section
      id="about"
      className="relative section-padding"
      style={{ background: 'rgba(3,15,28,0.5)', zIndex: 1 }}
    >
      <div className="container-max">
        <SectionTitle
          label="// 01 — About"
          title="About Me"
          subtitle="Machine Learning Engineer with a passion for research and real-world impact"
        />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="space-y-5">
              <p className="font-rajdhani text-base md:text-lg leading-relaxed" style={{ color: 'var(--text)' }}>
                I&apos;m a Machine Learning Engineer and Data Scientist with a strong foundation in
                deep learning, transformer architectures, and production ML systems. My research
                focuses on applying video transformer models to financial time-series forecasting,
                achieving state-of-the-art results over classical multivariate models.
              </p>
              <p className="font-rajdhani text-base md:text-lg leading-relaxed" style={{ color: 'var(--text)' }}>
                I hold a Master of Data Science from the University of Technology Sydney with a GPA
                of 6.78/7.0, and I am the recipient of the prestigious UTS President&apos;s Scholarship —
                a fully funded award recognising exceptional research potential.
              </p>
              <p className="font-rajdhani text-base md:text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
                My career goal is to bridge cutting-edge research with real-world deployable systems —
                building ML pipelines that deliver measurable business value while advancing the field
                through rigorous academic contributions.
              </p>
            </div>

            {/* Highlight bar */}
            <div
              className="mt-8 p-4 rounded-xl"
              style={{
                background: 'rgba(0,245,255,0.04)',
                border: '1px solid rgba(0,245,255,0.12)',
                borderLeft: '3px solid var(--cyan)',
              }}
            >
              <p className="font-mono-tech text-sm" style={{ color: 'var(--cyan)' }}>
                Published at <span className="font-semibold">AusDM&apos;25</span> (Brisbane) and{' '}
                <span className="font-semibold">ICBDA 2026</span> (Waseda University, Tokyo)
              </p>
            </div>
          </motion.div>

          {/* Quick Facts Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {quickFacts.map((fact) => {
              const Icon = fact.icon
              const colorMap = {
                cyan: { text: '#00f5ff', bg: 'rgba(0,245,255,0.08)', border: 'rgba(0,245,255,0.2)' },
                green: { text: '#39ff14', bg: 'rgba(57,255,20,0.08)', border: 'rgba(57,255,20,0.2)' },
                purple: { text: '#a855f7', bg: 'rgba(168,85,247,0.08)', border: 'rgba(168,85,247,0.2)' },
                orange: { text: '#ff6b35', bg: 'rgba(255,107,53,0.08)', border: 'rgba(255,107,53,0.2)' },
              }
              const c = colorMap[fact.color]

              return (
                <motion.div key={fact.label} variants={itemVariants}>
                  <GlowCard accentColor={fact.color} className="p-5 h-full">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                      style={{ background: c.bg, border: `1px solid ${c.border}` }}
                    >
                      <Icon size={18} style={{ color: c.text }} />
                    </div>
                    <div
                      className="font-mono-tech text-sm uppercase tracking-wider mb-1"
                      style={{ color: 'var(--muted)' }}
                    >
                      {fact.label}
                    </div>
                    <div className="font-orbitron font-bold text-sm mb-1" style={{ color: 'var(--text)' }}>
                      {fact.value}
                    </div>
                    <div className="font-rajdhani text-sm" style={{ color: c.text }}>
                      {fact.sub}
                    </div>
                  </GlowCard>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
