import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useScrollSpy } from '@/hooks/useScrollSpy'

const NAV_LINKS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'publications', label: 'Publications' },
  { id: 'skills', label: 'Skills' },
  { id: 'awards', label: 'Awards' },
  { id: 'contact', label: 'Contact' },
]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [scrolled, setScrolled] = useState(false)
  const lastScrollY = useRef(0)
  const activeSection = useScrollSpy(NAV_LINKS.map((l) => l.id), 80)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrolled(currentScrollY > 20)

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false)
        setIsMenuOpen(false)
      } else {
        setIsVisible(true)
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const offset = 80
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <>
      {/* Backdrop — sits above page content but below the nav, blocks stray taps on mobile */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>

    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : '-100%' }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        background: scrolled ? 'rgba(2,11,20,0.9)' : 'rgba(2,11,20,0.7)',
        borderBottom: '1px solid rgba(0,245,255,0.1)',
        pointerEvents: isVisible ? 'auto' : 'none',
      }}
    >
      {/* Rim light bottom border */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, #00f5ff 50%, transparent 100%)',
          backgroundSize: '200% 100%',
          animation: 'rimLight 3s linear infinite',
        }}
      />

      <div className="container-max px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.button
            onClick={() => scrollToSection('hero')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="font-orbitron font-black text-xl tracking-wider text-glow"
            style={{ color: 'var(--cyan)' }}
          >
            KW
          </motion.button>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="relative px-3 py-2 font-mono-tech text-xs uppercase tracking-wider transition-colors duration-200"
                style={{
                  color: activeSection === link.id ? 'var(--cyan)' : 'var(--muted)',
                }}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeLink"
                    className="absolute bottom-0 left-0 right-0 h-px"
                    style={{ background: 'var(--cyan)' }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-3 rounded-lg transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            style={{ color: 'var(--cyan)' }}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="md:hidden"
            style={{
              background: 'rgba(2,11,20,0.97)',
              borderTop: '1px solid rgba(0,245,255,0.1)',
            }}
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollToSection(link.id)}
                  className="text-left px-4 py-3 rounded-lg font-mono-tech text-sm uppercase tracking-wider transition-all duration-200"
                  style={{
                    color: activeSection === link.id ? 'var(--cyan)' : 'var(--muted)',
                    background: activeSection === link.id ? 'rgba(0,245,255,0.08)' : 'transparent',
                    cursor: 'pointer',
                    touchAction: 'manipulation',
                  }}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
    </>
  )
}
