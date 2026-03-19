import { useMemo, useState, useEffect } from 'react'
import { navItems } from '@/data/nav'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { cn } from '@/lib/utils'

export function Navbar() {
  const ids = useMemo(() => navItems.map((item) => item.href.replace('#', '')), [])
  const activeId = useScrollSpy(ids, 200)
  const reducedMotion = useReducedMotion()
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (href: string) => {
    const el = document.getElementById(href.replace('#', ''))
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <style>{`
        .rim-container {
          position: relative;
        }
        .rim-container::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          padding: 1px;
          background: linear-gradient(
            var(--angle, 0deg),
            transparent 42%,
            #00f5ff 47%,
            #a855f7 50%,
            #ec4899 53%,
            transparent 58%
          );
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: exclude;
          animation: rim-rotate 10s linear infinite;
        }
        .rim-container::after {
          content: '';
          position: absolute;
          inset: -1px;
          border-radius: 9999px;
          padding: 3px;
          background: linear-gradient(
            var(--angle, 0deg),
            transparent 36%,
            rgba(0,245,255,0.15) 44%,
            rgba(168,85,247,0.15) 50%,
            rgba(236,72,153,0.15) 56%,
            transparent 64%
          );
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: exclude;
          filter: blur(6px);
          animation: rim-rotate 10s linear infinite;
          pointer-events: none;
        }
        @keyframes rim-rotate {
          0% { --angle: 0deg; }
          100% { --angle: 360deg; }
        }
        @property --angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }
      `}</style>

      {/* Scroll progress bar — fixed at top of viewport */}
      <div
        className="fixed top-0 left-0 z-[60] h-[2px] transition-all duration-100"
        style={{
          width: `${scrollProgress}%`,
          background: 'linear-gradient(90deg, #22d3ee, #a855f7, #f472b6)',
          boxShadow: '0 0 8px rgba(34,211,238,0.6)',
          opacity: reducedMotion ? 0 : 1,
        }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Page scroll progress"
      />

      <nav
        className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className={cn('rim-container rounded-full', reducedMotion && 'before:hidden after:hidden')}>
          <div
            className="relative flex items-center gap-0.5 rounded-full px-1.5 py-1.5 sm:gap-2 sm:px-4"
            style={{
              background: 'rgba(6, 10, 18, 0.95)',
              backdropFilter: 'blur(24px) saturate(200%)',
              WebkitBackdropFilter: 'blur(24px) saturate(200%)',
              border: '1px solid rgba(255,255,255,0.07)',
              boxShadow: `
                0 16px 48px rgba(0, 0, 0, 0.7),
                0 4px 16px rgba(0, 0, 0, 0.4),
                inset 0 1px 0 rgba(255,255,255,0.05),
                inset 0 -1px 0 rgba(0, 0, 0, 0.3)
              `,
            }}
          >
            {navItems.map((item) => {
              const Icon = item.icon
              const id = item.href.replace('#', '')
              const isActive = activeId === id
              return (
                <button
                  key={item.href}
                  onClick={() => handleClick(item.href)}
                  className={cn(
                    'rounded-full p-2.5 sm:px-4 sm:py-2 text-xs font-medium transition-all duration-200 sm:text-sm active:scale-90 font-mono-tech',
                    isActive ? '' : 'hover:text-[rgba(34, 211, 238,0.75)]'
                  )}
                  style={
                    isActive
                      ? {
                          color: 'var(--cyan)',
                          background: 'rgba(34, 211, 238, 0.13)',
                          boxShadow: 'inset 0 1px 0 rgba(34, 211, 238, 0.35)',
                        }
                      : { color: 'rgba(255,255,255,0.4)' }
                  }
                  aria-current={isActive ? 'true' : undefined}
                  aria-label={item.label}
                >
                  <span className="flex items-center gap-2">
                    <Icon size={18} className="transition-colors duration-200" />
                    <span className="hidden sm:inline">{item.label}</span>
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </nav>
    </>
  )
}
