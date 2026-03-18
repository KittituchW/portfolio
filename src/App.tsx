import { CustomCursor } from '@/components/ui/CustomCursor'
import { ParticleCanvas } from '@/components/canvas/ParticleCanvas'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Experience } from '@/components/sections/Experience'
import { Projects } from '@/components/sections/Projects'
import { Publications } from '@/components/sections/Publications'
import { Skills } from '@/components/sections/Skills'
import { Awards } from '@/components/sections/Awards'
import { Contact } from '@/components/sections/Contact'

export default function App() {
  return (
    <div className="relative min-h-screen" style={{ background: 'var(--bg)' }}>
      {/* Skip-to-content — POUR accessibility (Operable) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:font-rajdhani focus:text-sm focus:font-semibold"
        style={{ background: 'var(--bg2)', color: 'var(--cyan)', border: '1px solid var(--cyan)' }}
      >
        Skip to main content
      </a>

      <CustomCursor />

      {/* Particle canvas — fixed behind everything */}
      <ParticleCanvas />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main id="main-content" className="relative" style={{ zIndex: 1 }}>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Publications />
        <Skills />
        <Awards />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
