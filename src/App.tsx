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
      {/* Particle canvas — fixed behind everything */}
      <ParticleCanvas />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main className="relative" style={{ zIndex: 1 }}>
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
