import { Suspense, lazy } from 'react'
import { motion } from 'framer-motion'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { TechBadge } from '@/components/ui/TechBadge'
import { allTechTags } from '@/data/resume'

const SkillRadar = lazy(() =>
  import('@/components/charts/SkillRadar').then((m) => ({ default: m.SkillRadar }))
)
const SkillBar = lazy(() =>
  import('@/components/charts/SkillBar').then((m) => ({ default: m.SkillBar }))
)

function ChartSpinner() {
  return (
    <div className="flex items-center justify-center h-64">
      <div
        className="w-8 h-8 rounded-full border-2 border-t-transparent animate-spin"
        style={{ borderColor: 'rgba(0,245,255,0.3)', borderTopColor: 'var(--cyan)' }}
      />
    </div>
  )
}

const tagColors: Array<'cyan' | 'orange' | 'green' | 'purple'> = ['cyan', 'orange', 'green', 'purple']

export function Skills() {
  return (
    <section
      id="skills"
      className="relative section-padding"
      style={{ background: 'rgba(3,15,28,0.5)', zIndex: 1 }}
    >
      <div className="container-max">
        <SectionTitle
          label="// 05 — Skills"
          title="Technical Skills"
          subtitle="Expertise across the full ML stack"
        />

        {/* Radar + Bar layout */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          {/* Radar chart */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div
              className="p-6 rounded-xl"
              style={{
                background: 'rgba(2,11,20,0.8)',
                border: '1px solid rgba(0,245,255,0.12)',
              }}
            >
              <p
                className="font-mono-tech text-xs uppercase tracking-widest mb-4 text-center"
                style={{ color: 'var(--cyan)' }}
              >
                Skill Overview
              </p>
              <Suspense fallback={<ChartSpinner />}>
                <SkillRadar />
              </Suspense>
            </div>
          </motion.div>

          {/* Bar chart */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div
              className="p-6 rounded-xl"
              style={{
                background: 'rgba(2,11,20,0.8)',
                border: '1px solid rgba(0,245,255,0.12)',
              }}
            >
              <p
                className="font-mono-tech text-xs uppercase tracking-widest mb-4"
                style={{ color: 'var(--cyan)' }}
              >
                Tool Proficiency
              </p>
              <Suspense fallback={<ChartSpinner />}>
                <SkillBar />
              </Suspense>
            </div>
          </motion.div>
        </div>

        {/* Tag cloud */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p
            className="font-mono-tech text-xs uppercase tracking-widest mb-6 text-center"
            style={{ color: 'var(--muted)' }}
          >
            Full Technology Stack
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {allTechTags.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.02, duration: 0.3 }}
              >
                <TechBadge
                  label={tag}
                  color={tagColors[i % tagColors.length]}
                  size="md"
                  animationDelay={i * 100}
                />
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
