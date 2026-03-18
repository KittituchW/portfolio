import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, ChevronDown, Clock, Briefcase, Globe } from 'lucide-react'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { GlowCard } from '@/components/ui/GlowCard'
import { contact, profile } from '@/data/resume'

const contactItems = [
  {
    icon: Mail,
    label: 'Email',
    value: contact.email,
    href: `mailto:${contact.email}`,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: contact.phone,
    href: `tel:${contact.phone.replace(/\s/g, '')}`,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: contact.location,
    href: null,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: contact.linkedin,
    href: `https://${contact.linkedin}`,
    external: true,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: contact.github,
    href: `https://${contact.github}`,
    external: true,
  },
]

const terminalLines = [
  { key: 'name', value: `"${profile.name}"` },
  { key: 'role', value: '"ML Engineer & Data Scientist"' },
  { key: 'status', value: '"Available for opportunities"' },
  { key: 'specialisation', value: '["Deep Learning", "MLOps", "Time-Series"]' },
  { key: 'openTo', value: '["Full-time", "Research", "Relocation"]' },
]


const faqs = [
  {
    q: 'Are you available for remote or hybrid work?',
    a: "Yes — I'm open to remote, hybrid, and on-site roles in Sydney and internationally. I'm also open to relocation for the right opportunity.",
  },
  {
    q: 'What types of roles are you looking for?',
    a: "Machine Learning Engineer, Data Scientist, AI Research Engineer, or MLOps roles. I'm particularly interested in positions involving deep learning, financial modelling, transformer architectures, or production ML systems.",
  },
  {
    q: 'What is your core technical stack?',
    a: 'PyTorch, FastAPI, Docker, and GCP for production systems. Scikit-learn, XGBoost, and LightGBM for classical ML. HuggingFace Transformers for NLP and fine-tuning. Airflow, dbt, and BigQuery for data engineering.',
  },
  {
    q: 'Do you have experience deploying models to production?',
    a: "Yes — I've built and deployed end-to-end ML systems including containerised FastAPI microservices on Render, real-time Streamlit dashboards, and walk-forward validated forecasting pipelines for fintech applications.",
  },
]

export function Contact() {
  const reducedMotion = useReducedMotion()
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <section
      id="contact"
      className="relative section-padding"
      style={{ background: 'rgba(3,15,28,0.5)', zIndex: 1 }}
    >
      <div className="container-max">
        <SectionTitle
          label="// 07 — Contact"
          title="Get In Touch"
          subtitle="Open to full-time roles, research collaborations, and interesting opportunities"
          centered
        />


        {/* Trust signal — above contact grid */}
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reducedMotion ? 0 : 0.5 }}
          className="flex flex-wrap justify-center gap-4 mb-10 max-w-2xl mx-auto"
        >
          {[
            { icon: Clock, text: 'Usually replies within 24h' },
            { icon: Briefcase, text: 'Open to full-time & research roles' },
            { icon: Globe, text: 'Open to relocation' },
          ].map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono-tech text-xs"
              style={{
                background: 'rgba(34,211,238,0.06)',
                border: '1px solid rgba(34,211,238,0.18)',
                color: 'var(--muted)',
              }}
            >
              <Icon size={12} style={{ color: 'var(--cyan)' }} />
              {text}
            </div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={reducedMotion ? {} : { opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: reducedMotion ? 0 : 0.7, ease: 'easeOut' }}
            className="space-y-3"
          >
            {contactItems.map((item, i) => {
              const Icon = item.icon

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  <GlowCard accentColor="cyan" className="p-4" tilt={false}>
                    <div className="flex items-center gap-3">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{
                          background: 'rgba(34, 211, 238,0.08)',
                          border: '1px solid rgba(34, 211, 238,0.2)',
                        }}
                      >
                        <Icon size={14} style={{ color: 'var(--cyan)' }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div
                          className="font-mono-tech text-[10px] uppercase tracking-wider mb-0.5"
                          style={{ color: 'var(--muted)' }}
                        >
                          {item.label}
                        </div>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.external ? '_blank' : undefined}
                            rel={item.external ? 'noopener noreferrer' : undefined}
                            className="font-rajdhani text-sm flex items-center gap-1 hover:underline transition-colors"
                            style={{ color: 'var(--cyan)' }}
                          >
                            <span className="truncate">{item.value}</span>
                            {item.external && <ExternalLink size={10} className="flex-shrink-0" />}
                          </a>
                        ) : (
                          <span className="font-rajdhani text-sm" style={{ color: 'var(--text)' }}>
                            {item.value}
                          </span>
                        )}
                      </div>
                    </div>
                  </GlowCard>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Terminal display */}
          <motion.div
            initial={reducedMotion ? {} : { opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: reducedMotion ? 0 : 0.7, ease: 'easeOut' }}
          >
            <div
              className="rounded-xl overflow-hidden h-full"
              style={{
                background: 'rgba(2,11,20,0.95)',
                border: '1px solid rgba(57,255,20,0.2)',
                boxShadow: '0 0 30px rgba(57,255,20,0.08)',
              }}
            >
              {/* Terminal header */}
              <div
                className="flex items-center gap-2 px-4 py-3"
                style={{ borderBottom: '1px solid rgba(57,255,20,0.15)' }}
              >
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <span className="font-mono-tech text-xs ml-2" style={{ color: 'rgba(57,255,20,0.6)' }}>
                  terminal
                </span>
              </div>

              {/* Terminal body */}
              <div className="p-5 font-mono-tech text-sm">
                <div className="mb-4 flex items-center gap-1" style={{ color: '#39ff14' }}>
                  <span>$ ./contact --init</span>
                  <span className="cursor-blink" />
                </div>

                <div className="space-y-3">
                  {terminalLines.map((line, i) => (
                    <motion.div
                      key={line.key}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.15, duration: 0.4 }}
                      className="flex items-start gap-2"
                    >
                      <span style={{ color: 'rgba(57,255,20,0.5)' }}>{'>'}</span>
                      <span style={{ color: 'rgba(34, 211, 238,0.7)' }}>{line.key}</span>
                      <span style={{ color: 'var(--muted)' }}>:</span>
                      <span
                        style={{
                          color: line.value.startsWith('[') ? 'var(--pink)' : 'rgba(200,230,240,0.8)',
                        }}
                      >
                        {line.value}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2 }}
                  className="mt-5 pt-4"
                  style={{ borderTop: '1px solid rgba(57,255,20,0.1)' }}
                >
                  <p className="text-xs" style={{ color: 'rgba(57,255,20,0.5)' }}>
                    // Ready for new opportunities
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Social icon row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center gap-4 mt-12"
        >
          {[
            { icon: Github, href: `https://${contact.github}`, label: 'GitHub' },
            { icon: Linkedin, href: `https://${contact.linkedin}`, label: 'LinkedIn' },
            { icon: Mail, href: `mailto:${contact.email}`, label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target={label !== 'Email' ? '_blank' : undefined}
              rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
              whileHover={{ scale: 1.15, boxShadow: '0 0 20px rgba(34, 211, 238,0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-xl transition-all duration-200"
              style={{
                background: 'rgba(34, 211, 238,0.06)',
                border: '1px solid rgba(34, 211, 238,0.15)',
                color: 'var(--muted)',
              }}
              aria-label={label}
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </motion.div>

        {/* FAQ — AEO: helps AI assistants cite structured answers */}
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: reducedMotion ? 0 : 0.6, delay: 0.2 }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <p
            className="font-mono-tech text-xs uppercase tracking-[0.2em] mb-6 text-center"
            style={{ color: 'var(--cyan)' }}
          >
            // Frequently Asked
          </p>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden"
                style={{
                  background: 'rgba(34,211,238,0.03)',
                  border: `1px solid ${openFaq === i ? 'rgba(34,211,238,0.3)' : 'rgba(34,211,238,0.1)'}`,
                  transition: 'border-color 0.2s',
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                  aria-expanded={openFaq === i}
                >
                  <span className="font-rajdhani font-semibold text-sm md:text-base" style={{ color: 'var(--text)' }}>
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={16}
                    style={{
                      color: 'var(--cyan)',
                      transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s ease',
                      flexShrink: 0,
                      marginLeft: '12px',
                    }}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: reducedMotion ? 0 : 0.25, ease: 'easeOut' }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p
                        className="font-rajdhani text-sm md:text-base leading-relaxed px-5 pb-4"
                        style={{ color: 'var(--muted)' }}
                      >
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
