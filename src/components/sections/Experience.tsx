import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { GlowCard } from '@/components/ui/GlowCard'
import { TechBadge } from '@/components/ui/TechBadge'
import { StatCallout } from '@/components/ui/StatCallout'
import { experiences } from '@/data/resume'
import { Briefcase, Calendar } from 'lucide-react'

export function Experience() {
  const reducedMotion = useReducedMotion()

  return (
    <section id="experience" className="relative section-padding" style={{ zIndex: 1 }}>
      <div className="container-max">
        <SectionTitle
          label="// 02 — Experience"
          title="Work Experience"
          subtitle="Building expertise across research and industry"
        />

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-px timeline-line"
            style={{ zIndex: 0 }}
          />

          <div className="space-y-12 md:space-y-16">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0

              return (
                <div key={`${exp.company}-${exp.period}`} className="relative flex items-start">
                  {/* Mobile: always left-aligned */}
                  <div className="md:hidden pl-12 w-full">
                    {/* Timeline dot */}
                    <div
                      className="absolute left-4 top-6 -translate-x-1/2 w-4 h-4 rounded-full"
                      style={{
                        background: 'var(--cyan)',
                        boxShadow: '0 0 12px rgba(34, 211, 238,0.8)',
                        animation: reducedMotion ? undefined : 'pulse-glow 2s ease-in-out infinite',
                        zIndex: 2,
                      }}
                    />
                    <ExperienceCard exp={exp} side="right" />
                  </div>

                  {/* Desktop: alternating layout */}
                  <div className="hidden md:flex w-full items-start gap-8">
                    {/* Left side */}
                    <div className={`flex-1 ${isLeft ? 'flex justify-end' : ''}`}>
                      {isLeft && (
                        <motion.div
                          initial={reducedMotion ? {} : { opacity: 0, x: -60 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: '-80px' }}
                          transition={{ duration: reducedMotion ? 0 : 0.7, ease: 'easeOut' }}
                          className="max-w-lg w-full"
                        >
                          <ExperienceCard exp={exp} side="left" />
                        </motion.div>
                      )}
                    </div>

                    {/* Center dot */}
                    <div className="flex-shrink-0 relative" style={{ width: '2px' }}>
                      <div
                        className="absolute top-6 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full"
                        style={{
                          background: 'var(--bg)',
                          border: '2px solid var(--cyan)',
                          boxShadow: '0 0 15px rgba(34, 211, 238,0.8)',
                          animation: reducedMotion ? undefined : 'pulse-glow 2s ease-in-out infinite',
                          zIndex: 2,
                        }}
                      />
                    </div>

                    {/* Right side */}
                    <div className={`flex-1 ${!isLeft ? 'flex justify-start' : ''}`}>
                      {!isLeft && (
                        <motion.div
                          initial={reducedMotion ? {} : { opacity: 0, x: 60 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: '-80px' }}
                          transition={{ duration: reducedMotion ? 0 : 0.7, ease: 'easeOut' }}
                          className="max-w-lg w-full"
                        >
                          <ExperienceCard exp={exp} side="right" />
                        </motion.div>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

interface ExperienceCardProps {
  exp: (typeof experiences)[0]
  side: 'left' | 'right'
}

function ExperienceCard({ exp }: ExperienceCardProps) {
  return (
    <GlowCard accentColor="cyan" className="p-6" tilt={false}>
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Briefcase size={14} style={{ color: 'var(--cyan)' }} />
            <h3 className="font-orbitron font-bold text-sm md:text-" style={{ color: 'var(--text)' }}>
              {exp.role}
            </h3>
          </div>
          <p className="font-rajdhani font-semibold text-sm" style={{ color: 'var(--cyan)' }}>
            {exp.company}
          </p>
          <p className="font-mono-tech text-sm mt-0.5" style={{ color: 'var(--muted)' }}>
            {exp.location}
          </p>
        </div>
        <div
          className="flex items-center gap-1.5 px-3 py-1 rounded-full flex-shrink-0"
          style={{
            background: 'rgba(34, 211, 238,0.06)',
            border: '1px solid rgba(34, 211, 238,0.2)',
          }}
        >
          <Calendar size={10} style={{ color: 'var(--muted)' }} />
          <span className="font-mono-tech text-sm" style={{ color: 'var(--muted)' }}>
            {exp.period}
          </span>
        </div>
      </div>

      {/* Bullets */}
      <ul className="space-y-2 mb-4">
        {exp.bullets.map((bullet, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'var(--cyan)' }} />
            <span className="font-rajdhani text-base leading-relaxed" style={{ color: 'var(--text)' }}>
              {bullet}
            </span>
          </li>
        ))}
      </ul>

      {/* Metric callouts */}
      {exp.metrics.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {exp.metrics.map((metric, i) => (
            <StatCallout key={i} value={metric} color="cyan" />
          ))}
        </div>
      )}

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {exp.tags.map((tag) => (
          <TechBadge key={tag} label={tag} />
        ))}
      </div>
    </GlowCard>
  )
}
