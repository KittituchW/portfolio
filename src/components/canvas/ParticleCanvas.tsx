import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number   // constant base velocity — never changed after init
  vy: number
  rx: number   // repulsion impulse — decays each frame
  ry: number
  radius: number
}

const COUNT_DIVISOR = 20   // ~1 particle per 20px of width, capped at 80
const SPEED        = 1.5   // base speed multiplier
const CONNECT_DIST = 120   // px — edge draw threshold
const REPULSE_DIST = 150   // px — mouse repulsion radius
const REPULSE_STR  = 2.0   // repulsion impulse strength

export function ParticleCanvas() {
  const canvasRef   = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef    = useRef({ x: -9999, y: -9999 })
  const rafRef      = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1

    function resize() {
      if (!canvas) return
      const w = window.innerWidth
      const h = window.innerHeight
      canvas.width  = w * dpr
      canvas.height = h * dpr
      canvas.style.width  = `${w}px`
      canvas.style.height = `${h}px`
      ctx!.scale(dpr, dpr)
      initParticles()
    }

    function initParticles() {
      const w     = window.innerWidth
      const h     = window.innerHeight
      const count = Math.min(80, Math.floor(w / COUNT_DIVISOR))
      particlesRef.current = Array.from({ length: count }, () => ({
        x:      Math.random() * w,
        y:      Math.random() * h,
        // Random direction, constant speed — same as particles.js default
        vx:     (Math.random() - 0.5) * SPEED,
        vy:     (Math.random() - 0.5) * SPEED,
        rx:     0,
        ry:     0,
        radius: Math.random() * 1.5 + 0.5,
      }))
    }

    function draw() {
      if (!canvas || !ctx) return
      const w = window.innerWidth
      const h = window.innerHeight
      ctx.clearRect(0, 0, w, h)

      const particles = particlesRef.current
      const mouse     = mouseRef.current

      // ── Physics ───────────────────────────────────────────────────────────
      for (const p of particles) {
        // Mouse repulsion — added only to the impulse vector, not base velocity
        const dx   = p.x - mouse.x
        const dy   = p.y - mouse.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < REPULSE_DIST && dist > 0) {
          const force = (REPULSE_DIST - dist) / REPULSE_DIST
          p.rx += (dx / dist) * force * REPULSE_STR
          p.ry += (dy / dist) * force * REPULSE_STR
        }

        // Impulse decays; base velocity (vx/vy) is untouched
        p.rx *= 0.88
        p.ry *= 0.88

        p.x += p.vx + p.rx
        p.y += p.vy + p.ry

        // out_mode: "out" — particle exits one side, re-enters the opposite
        // side with a fresh random position on the perpendicular axis
        if (p.x - p.radius > w) { p.x = -p.radius;       p.y = Math.random() * h }
        if (p.x + p.radius < 0) { p.x = w + p.radius;    p.y = Math.random() * h }
        if (p.y - p.radius > h) { p.y = -p.radius;       p.x = Math.random() * w }
        if (p.y + p.radius < 0) { p.y = h + p.radius;    p.x = Math.random() * w }
      }

      // ── Build adjacency (edges + neighbour sets for triangles) ───────────
      interface Edge { i: number; j: number; dist: number }
      const edges: Edge[] = []
      const nbr: Set<number>[] = particles.map(() => new Set<number>())

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const pi   = particles[i]
          const pj   = particles[j]
          const edx  = pi.x - pj.x
          const edy  = pi.y - pj.y
          const dist = Math.sqrt(edx * edx + edy * edy)
          if (dist < CONNECT_DIST) {
            edges.push({ i, j, dist })
            nbr[i].add(j)
            nbr[j].add(i)
          }
        }
      }

      // ── Triangles (drawn first so edges render on top) ────────────────────
      for (let i = 0; i < particles.length; i++) {
        const ni = Array.from(nbr[i])
        for (let a = 0; a < ni.length; a++) {
          const j = ni[a]
          if (j <= i) continue
          for (let b = a + 1; b < ni.length; b++) {
            const k = ni[b]
            if (k <= i || !nbr[j].has(k)) continue
            const pi = particles[i], pj = particles[j], pk = particles[k]
            const d1 = Math.hypot(pi.x - pj.x, pi.y - pj.y)
            const d2 = Math.hypot(pj.x - pk.x, pj.y - pk.y)
            const d3 = Math.hypot(pi.x - pk.x, pi.y - pk.y)
            // Tighter triangles get more opacity
            const alpha = ((CONNECT_DIST - Math.max(d1, d2, d3)) / CONNECT_DIST) * 0.06
            ctx.beginPath()
            ctx.moveTo(pi.x, pi.y)
            ctx.lineTo(pj.x, pj.y)
            ctx.lineTo(pk.x, pk.y)
            ctx.closePath()
            ctx.fillStyle = `rgba(0, 245, 255, ${alpha})`
            ctx.fill()
          }
        }
      }

      // ── Edges ─────────────────────────────────────────────────────────────
      for (const { i, j, dist } of edges) {
        const alpha = ((CONNECT_DIST - dist) / CONNECT_DIST) * 0.28
        ctx.beginPath()
        ctx.moveTo(particles[i].x, particles[i].y)
        ctx.lineTo(particles[j].x, particles[j].y)
        ctx.strokeStyle = `rgba(0, 245, 255, ${alpha})`
        ctx.lineWidth = 0.5
        ctx.stroke()
      }

      // ── Particles ─────────────────────────────────────────────────────────
      for (const p of particles) {
        ctx.save()
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 3)
        g.addColorStop(0, 'rgba(0, 245, 255, 0.9)')
        g.addColorStop(1, 'rgba(0, 245, 255, 0)')
        ctx.fillStyle   = g
        ctx.shadowColor = '#00f5ff'
        ctx.shadowBlur  = 6
        ctx.fill()
        ctx.restore()
      }

      rafRef.current = requestAnimationFrame(draw)
    }

    const handleMouseMove  = (e: MouseEvent) => { mouseRef.current = { x: e.clientX, y: e.clientY } }
    const handleMouseLeave = ()              => { mouseRef.current = { x: -9999, y: -9999 } }
    const handleTouchMove  = (e: TouchEvent) => {
      const t = e.touches[0]
      if (t) mouseRef.current = { x: t.clientX, y: t.clientY }
    }
    const handleTouchEnd = () => { mouseRef.current = { x: -9999, y: -9999 } }

    window.addEventListener('mousemove',  handleMouseMove,  { passive: true })
    document.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('touchmove',  handleTouchMove,  { passive: true })
    window.addEventListener('touchend',   handleTouchEnd,   { passive: true })
    window.addEventListener('resize',     resize,           { passive: true })

    resize()
    rafRef.current = requestAnimationFrame(draw)

    return () => {
      window.removeEventListener('mousemove',  handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('touchmove',  handleTouchMove)
      window.removeEventListener('touchend',   handleTouchEnd)
      window.removeEventListener('resize',     resize)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  )
}
