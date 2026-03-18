'use client'
import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function CustomCursor() {
  const mx = useMotionValue(-100)
  const my = useMotionValue(-100)

  const rx = useSpring(mx, { stiffness: 120, damping: 18, mass: 0.6 })
  const ry = useSpring(my, { stiffness: 120, damping: 18, mass: 0.6 })

  const [hovered, setHovered] = useState(false)
  const [visible, setVisible] = useState(false)
  const [isTouch, setIsTouch] = useState(true)

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    setIsTouch(false)

    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX)
      my.set(e.clientY)
      setVisible(true)
    }
    const onLeave = () => setVisible(false)
    const onEnter = () => setVisible(true)

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseleave', onLeave)
    window.addEventListener('mouseenter', onEnter)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseleave', onLeave)
      window.removeEventListener('mouseenter', onEnter)
    }
  }, [mx, my])

  useEffect(() => {
    if (isTouch) return

    const selector = 'a, button, [role="button"], input, textarea, select, label'
    const enter = () => setHovered(true)
    const leave = () => setHovered(false)

    const attach = () => {
      document.querySelectorAll(selector).forEach((el) => {
        el.addEventListener('mouseenter', enter)
        el.addEventListener('mouseleave', leave)
      })
    }

    attach()

    const observer = new MutationObserver(attach)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => observer.disconnect()
  }, [isTouch])

  if (isTouch) return null

  return (
    <>
      {/* Dot — sits exactly on cursor */}
      <motion.div
        className="fixed pointer-events-none z-[9999]"
        style={{ left: mx, top: my, x: '-50%', y: '-50%' }}
        animate={{ opacity: visible ? 1 : 0, scale: hovered ? 0 : 1 }}
        transition={{ duration: 0.15 }}
      >
        <div
          style={{
            width: 5,
            height: 5,
            borderRadius: '50%',
            background: '#00f5ff',
            boxShadow: '0 0 8px #00f5ff, 0 0 16px rgba(0,245,255,0.5)',
          }}
        />
      </motion.div>

      {/* Ring — lags behind with spring */}
      <motion.div
        className="fixed pointer-events-none z-[9998] rounded-full"
        style={{
          left: rx,
          top: ry,
          x: '-50%',
          y: '-50%',
          borderWidth: 1,
          borderStyle: 'solid',
        }}
        animate={{
          opacity: visible ? 1 : 0,
          width: hovered ? 44 : 32,
          height: hovered ? 44 : 32,
          borderColor: hovered ? 'rgba(0,245,255,0.9)' : 'rgba(0,245,255,0.5)',
          backgroundColor: hovered ? 'rgba(0,245,255,0.07)' : 'transparent',
          boxShadow: hovered
            ? '0 0 18px rgba(0,245,255,0.45), inset 0 0 10px rgba(0,245,255,0.08)'
            : '0 0 8px rgba(0,245,255,0.2)',
        }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      />
    </>
  )
}
