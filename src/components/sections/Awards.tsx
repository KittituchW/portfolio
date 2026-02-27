import { motion } from 'framer-motion'
import { Trophy, Award, Medal, Star, Zap, BarChart2 } from 'lucide-react'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { GlowCard } from '@/components/ui/GlowCard'
import { awards } from '@/data/resume'
import type { Award as AwardType } from '@/data/resume'

const iconMap: Record<string, React.ElementType> = {
  Trophy,
  Award,
  Medal,
  Star,
  Zap,
  BarChart2,
}

const accentColorMap = {
  cyan: {
    text: '#00f5ff',
    bg: 'rgba(0,245,255,0.08)',
    border: 'rgba(0,245,255,0.2)',
    glow: '0 0 12px rgba(0,245,255,0.3)',
  },
  orange: {
    text: '#ff6b35',
    bg: 'rgba(255,107,53,0.08)',
    border: 'rgba(255,107,53,0.2)',
    glow: '0 0 12px rgba(255,107,53,0.3)',
  },
  green: {
    text: '#39ff14',
    bg: 'rgba(57,255,20,0.08)',
    border: 'rgba(57,255,20,0.2)',
    glow: '0 0 12px rgba(57,255,20,0.3)',
  },
  purple: {
    text: '#a855f7',
    bg: 'rgba(168,85,247,0.08)',
    border: 'rgba(168,85,247,0.2)',
    glow: '0 0 12px rgba(168,85,247,0.3)',
  },
  gold: {
    text: '#ffb800',
    bg: 'rgba(255,184,0,0.08)',
    border: 'rgba(255,184,0,0.2)',
    glow: '0 0 12px rgba(255,184,0,0.3)',
  },
}

function AwardCard({ award, delay }: { award: AwardType; delay: number }) {
  const Icon = iconMap[award.icon] ?? Trophy
  const accent = accentColorMap[award.accentColor]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    >
      <GlowCard
        accentColor={award.accentColor === 'gold' ? 'orange' : award.accentColor}
        className="p-5 h-full flex flex-col"
      >
        {/* Top row: icon + year badge */}
        <div className="flex items-start justify-between mb-4">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center"
            style={{ background: accent.bg, border: `1px solid ${accent.border}` }}
          >
            <Icon size={18} style={{ color: accent.text, filter: `drop-shadow(${accent.glow})` }} />
          </div>

          <span
            className="font-mono-tech text-xs px-2.5 py-1 rounded-full"
            style={{
              background: accent.bg,
              border: `1px solid ${accent.border}`,
              color: accent.text,
            }}
          >
            {award.year}
          </span>
        </div>

        {/* Title */}
        <h3
          className="font-orbitron font-bold text-sm leading-tight mb-1"
          style={{ color: 'var(--text)' }}
        >
          {award.title}
        </h3>

        {/* Org */}
        <p className="font-mono-tech text-xs mb-3" style={{ color: accent.text }}>
          {award.org}
        </p>

        {/* Metric badge */}
        {award.metric && (
          <div
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg mb-3 self-start"
            style={{
              background: accent.bg,
              border: `1px solid ${accent.border}`,
              boxShadow: accent.glow,
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: accent.text }} />
            <span className="font-mono-tech text-xs font-semibold" style={{ color: accent.text }}>
              {award.metric}
            </span>
          </div>
        )}

        {/* Description */}
        <p
          className="font-rajdhani text-sm leading-relaxed flex-1"
          style={{ color: 'var(--muted)' }}
        >
          {award.description}
        </p>
      </GlowCard>
    </motion.div>
  )
}

export function Awards() {
  return (
    <section id="awards" className="relative section-padding" style={{ zIndex: 1 }}>
      <div className="container-max">
        <SectionTitle
          label="// 06 — Awards"
          title="Honours & Awards"
          subtitle="Recognition for academic excellence and technical achievement"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map((award, index) => (
            <AwardCard
              key={award.title}
              award={award}
              delay={index * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
