import { useMemo } from 'react'
import { navItems } from '@/data/nav'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { cn } from '@/lib/utils'

export function Navbar() {
  const ids = useMemo(() => navItems.map((item) => item.href.replace('#', '')), [])
  const activeId = useScrollSpy(ids, 200)
  const reducedMotion = useReducedMotion()

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
          padding: 1.5px;
          background: linear-gradient(var(--angle, 0deg), transparent 40%, #00f5ff 50%, transparent 60%);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: exclude;
          animation: rim-rotate 14s linear infinite;
        }
        .rim-container::after {
          content: '';
          position: absolute;
          inset: -3px;
          border-radius: 9999px;
          padding: 4.5px;
          background: linear-gradient(var(--angle, 0deg), transparent 35%, rgba(0, 245, 255, 0.35) 50%, transparent 65%);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: exclude;
          filter: blur(6px);
          animation: rim-rotate 6s linear infinite;
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

      <nav
        className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className={cn('rim-container rounded-full', reducedMotion && 'before:hidden after:hidden')}>
          <div
            className="relative flex items-center gap-0.5 rounded-full px-1.5 py-1.5 sm:gap-2 sm:px-4"
            style={{
              background: 'rgba(5, 16, 34, 0.97)',
              backdropFilter: 'blur(24px) saturate(200%)',
              WebkitBackdropFilter: 'blur(24px) saturate(200%)',
              border: '1px solid rgba(0, 245, 255, 0.22)',
              boxShadow: `
                0 16px 48px rgba(0, 0, 0, 0.7),
                0 4px 16px rgba(0, 0, 0, 0.4),
                0 0 48px rgba(0, 245, 255, 0.14),
                0 0 96px rgba(0, 245, 255, 0.06),
                inset 0 1px 0 rgba(0, 245, 255, 0.12),
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
                    isActive ? '' : 'hover:text-[rgba(0,245,255,0.75)]'
                  )}
                  style={
                    isActive
                      ? {
                          color: '#00f5ff',
                          background: 'rgba(0, 245, 255, 0.13)',
                          boxShadow: 'inset 0 1px 0 rgba(0, 245, 255, 0.35), 0 0 20px rgba(0, 245, 255, 0.2)',
                        }
                      : { color: 'rgba(0, 245, 255, 0.42)' }
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
