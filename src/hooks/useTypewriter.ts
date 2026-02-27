import { useState, useEffect, useRef } from 'react'

interface UseTypewriterOptions {
  phrases: string[]
  typeSpeed?: number
  deleteSpeed?: number
  pauseTime?: number
}

interface UseTypewriterReturn {
  displayText: string
  isTyping: boolean
}

export function useTypewriter({
  phrases,
  typeSpeed = 80,
  deleteSpeed = 40,
  pauseTime = 1800,
}: UseTypewriterOptions): UseTypewriterReturn {
  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const phraseIndex = useRef(0)
  const charIndex = useRef(0)
  const isDeleting = useRef(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const tick = () => {
      const currentPhrase = phrases[phraseIndex.current]

      if (isDeleting.current) {
        // Deleting
        setIsTyping(false)
        charIndex.current -= 1
        setDisplayText(currentPhrase.slice(0, charIndex.current))

        if (charIndex.current === 0) {
          isDeleting.current = false
          phraseIndex.current = (phraseIndex.current + 1) % phrases.length
          timeoutRef.current = setTimeout(tick, 400)
          return
        }
        timeoutRef.current = setTimeout(tick, deleteSpeed)
      } else {
        // Typing
        setIsTyping(true)
        charIndex.current += 1
        setDisplayText(currentPhrase.slice(0, charIndex.current))

        if (charIndex.current === currentPhrase.length) {
          isDeleting.current = true
          timeoutRef.current = setTimeout(tick, pauseTime)
          return
        }
        timeoutRef.current = setTimeout(tick, typeSpeed)
      }
    }

    timeoutRef.current = setTimeout(tick, typeSpeed)

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [phrases, typeSpeed, deleteSpeed, pauseTime])

  return { displayText, isTyping }
}
