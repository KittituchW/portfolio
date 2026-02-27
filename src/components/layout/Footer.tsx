import { Github, Linkedin, Mail } from 'lucide-react'
import { contact, profile } from '@/data/resume'

export function Footer() {
  return (
    <footer
      className="relative py-8 px-6 border-t"
      style={{
        borderColor: 'rgba(0,245,255,0.1)',
        background: 'rgba(3,15,28,0.8)',
      }}
    >
      <div className="container-max">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <div className="font-orbitron font-bold text-sm text-glow" style={{ color: 'var(--cyan)' }}>
              {profile.initials}
            </div>
            <p className="font-mono-tech text-xs mt-1" style={{ color: 'var(--muted)' }}>
              {profile.name}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`https://${contact.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg transition-all duration-200 hover-glow-cyan"
              style={{
                color: 'var(--muted)',
                border: '1px solid rgba(0,245,255,0.1)',
              }}
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href={`https://${contact.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg transition-all duration-200 hover-glow-cyan"
              style={{
                color: 'var(--muted)',
                border: '1px solid rgba(0,245,255,0.1)',
              }}
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="p-2 rounded-lg transition-all duration-200 hover-glow-cyan"
              style={{
                color: 'var(--muted)',
                border: '1px solid rgba(0,245,255,0.1)',
              }}
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
          </div>

          <p className="font-mono-tech text-xs text-center" style={{ color: 'var(--muted)' }}>
            © {new Date().getFullYear()} {profile.name}
          </p>
        </div>
      </div>
    </footer>
  )
}
