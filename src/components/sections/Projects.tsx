import { motion } from 'framer-motion'
import {
  TrendingUp,
  FileText,
  Shield,
  Database,
  Brain,
  ArrowRight,
} from 'lucide-react'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { GlowCard } from '@/components/ui/GlowCard'
import { TechBadge } from '@/components/ui/TechBadge'
import { StatCallout } from '@/components/ui/StatCallout'
import { projects } from '@/data/resume'
import type { Project } from '@/data/resume'

const iconMap: Record<string, React.ElementType> = {
  TrendingUp,
  FileText,
  Shield,
  Database,
  Brain,
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const accentColorMap = {
  cyan: {
    text: '#00f5ff',
    bg: 'rgba(0,245,255,0.08)',
    border: 'rgba(0,245,255,0.2)',
    glow: 'rgba(0,245,255,0.3)',
  },
  orange: {
    text: '#ff6b35',
    bg: 'rgba(255,107,53,0.08)',
    border: 'rgba(255,107,53,0.2)',
    glow: 'rgba(255,107,53,0.3)',
  },
  green: {
    text: '#39ff14',
    bg: 'rgba(57,255,20,0.08)',
    border: 'rgba(57,255,20,0.2)',
    glow: 'rgba(57,255,20,0.3)',
  },
  purple: {
    text: '#a855f7',
    bg: 'rgba(168,85,247,0.08)',
    border: 'rgba(168,85,247,0.2)',
    glow: 'rgba(168,85,247,0.3)',
  },
}

function ProjectCard({ project }: { project: Project }) {
  const Icon = iconMap[project.icon] ?? Brain
  const accent = accentColorMap[project.accentColor]

  return (
    <GlowCard accentColor={project.accentColor} className="p-5 h-full flex flex-col group">
      {/* Icon + Award */}
      <div className="flex items-start justify-between mb-4">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ background: accent.bg, border: `1px solid ${accent.border}` }}
        >
          <Icon size={18} style={{ color: accent.text }} />
        </div>

        {project.award && (
          <span
            className="font-mono-tech text-[9px] px-2 py-1 rounded-full"
            style={{
              background: 'rgba(255,107,53,0.1)',
              border: '1px solid rgba(255,107,53,0.3)',
              color: '#ff6b35',
            }}
          >
            {project.award}
          </span>
        )}
      </div>

      {/* Title */}
      <h3
        className="font-orbitron font-bold text-sm md:text-base mb-2"
        style={{ color: 'var(--text)' }}
      >
        {project.title}
      </h3>

      {/* Description */}
      <p
        className="font-rajdhani text-sm leading-relaxed flex-1 mb-4"
        style={{ color: 'var(--muted)' }}
      >
        {project.description}
      </p>

      {/* Metrics */}
      {project.metrics && project.metrics.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-3">
          {project.metrics.map((m, i) => (
            <StatCallout key={i} value={m} color={project.accentColor === 'cyan' ? 'cyan' : project.accentColor === 'orange' ? 'orange' : project.accentColor === 'green' ? 'green' : 'purple'} />
          ))}
        </div>
      )}

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tags.slice(0, 4).map((tag) => (
          <TechBadge key={tag} label={tag} color={project.accentColor} />
        ))}
        {project.tags.length > 4 && (
          <span
            className="font-mono-tech text-[10px] px-2 py-0.5 rounded-full"
            style={{ color: 'var(--muted)', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            +{project.tags.length - 4}
          </span>
        )}
      </div>

      {/* View link - fades in on hover */}
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 font-mono-tech text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 mt-auto"
          style={{ color: accent.text }}
        >
          View Project <ArrowRight size={12} />
        </a>
      )}
    </GlowCard>
  )
}

export function Projects() {
  return (
    <section
      id="projects"
      className="relative section-padding"
      style={{ background: 'rgba(3,15,28,0.5)', zIndex: 1 }}
    >
      <div className="container-max">
        <SectionTitle
          label="// 03 — Projects"
          title="Featured Projects"
          subtitle="Production-ready ML systems and research implementations"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants} className="flex">
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
