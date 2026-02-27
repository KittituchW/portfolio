import { useState, useEffect } from 'react'

export function useScrollSpy(sectionIds: string[], offset = 0): string {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? '')

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: `-${offset}px 0px -50% 0px`,
      threshold: 0,
    }

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) {
        const observer = new IntersectionObserver(observerCallback, observerOptions)
        observer.observe(element)
        observers.push(observer)
      }
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [sectionIds, offset])

  return activeSection
}
