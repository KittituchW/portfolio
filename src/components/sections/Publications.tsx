import { motion } from 'framer-motion'
import { BookOpen, MapPin, Calendar, CheckCircle } from 'lucide-react'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { GlowCard } from '@/components/ui/GlowCard'
import { TechBadge } from '@/components/ui/TechBadge'
import { publications } from '@/data/resume'

const accentMap = {
  cyan: {
    text: '#00f5ff',
    bg: 'rgba(0,245,255,0.1)',
    border: 'rgba(0,245,255,0.3)',
    glow: 'rgba(0,245,255,0.4)',
    badgeBg: 'rgba(0,245,255,0.12)',
  },
  purple: {
    text: '#a855f7',
    bg: 'rgba(168,85,247,0.1)',
    border: 'rgba(168,85,247,0.3)',
    glow: 'rgba(168,85,247,0.4)',
    badgeBg: 'rgba(168,85,247,0.12)',
  },
}

export function Publications() {
  return (
    <section id="publications" className="relative section-padding" style={{ zIndex: 1 }}>
      <div className="container-max">
        <SectionTitle
          label="// 04 — Publications"
          title="Research Publications"
          subtitle="Peer-reviewed conference papers in ML and financial forecasting"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {publications.map((pub, index) => {
            const accent = accentMap[pub.accentColor]

            return (
              <motion.div
                key={pub.conference}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
              >
                <GlowCard accentColor={pub.accentColor} className="p-6 h-full flex flex-col" tilt={false}>
                  {/* Header row */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: accent.bg, border: `1px solid ${accent.border}` }}
                    >
                      <BookOpen size={18} style={{ color: accent.text }} />
                    </div>

                    {/* Conference badge — holographic label */}
                    <div
                      className="px-3 py-1.5 rounded-lg font-mono-tech text-xs font-bold flex-shrink-0"
                      style={{
                        background: accent.badgeBg,
                        border: `1px solid ${accent.border}`,
                        color: accent.text,
                        boxShadow: `0 0 12px ${accent.glow}`,
                        textShadow: `0 0 8px ${accent.glow}`,
                      }}
                    >
                      {pub.badge}
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className="font-rajdhani font-semibold text-base md:text-lg leading-snug mb-3"
                    style={{ color: 'var(--text)' }}
                  >
                    {pub.title}
                  </h3>

                  {/* Conference details */}
                  <div className="space-y-1.5 mb-5">
                    <div className="flex items-center gap-2">
                      <MapPin size={12} style={{ color: 'var(--muted)' }} />
                      <span className="font-mono-tech text-xs" style={{ color: 'var(--muted)' }}>
                        {pub.conference} — {pub.location}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={12} style={{ color: 'var(--muted)' }} />
                      <span className="font-mono-tech text-xs" style={{ color: 'var(--muted)' }}>
                        {pub.date}
                      </span>
                    </div>
                  </div>

                  {/* Key findings */}
                  <div className="mb-5 flex-1">
                    <p
                      className="font-mono-tech text-xs uppercase tracking-wider mb-3"
                      style={{ color: accent.text }}
                    >
                      Key Findings
                    </p>
                    <div className="space-y-2">
                      {pub.findings.map((finding, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2 px-3 py-2 rounded-lg"
                          style={{ background: accent.bg, border: `1px solid ${accent.border}` }}
                        >
                          <CheckCircle size={12} className="flex-shrink-0 mt-0.5" style={{ color: accent.text }} />
                          <span className="font-mono-tech text-xs" style={{ color: accent.text }}>
                            {finding}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {pub.tags.map((tag) => (
                      <TechBadge key={tag} label={tag} color={pub.accentColor} />
                    ))}
                  </div>
                </GlowCard>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
