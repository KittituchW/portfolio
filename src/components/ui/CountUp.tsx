import { useCountUp } from '@/hooks/useCountUp'

interface CountUpProps {
  target: number
  suffix?: string
  duration?: number
  decimals?: number
  label: string
}

export function CountUp({ target, suffix = '', duration = 2000, decimals = 0, label }: CountUpProps) {
  const { count, ref } = useCountUp(target, duration, decimals)

  const displayValue = decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toString()

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="text-center">
      <div className="font-orbitron font-bold text-3xl md:text-4xl text-glow" style={{ color: 'var(--cyan)' }}>
        {displayValue}
        <span className="text-2xl md:text-3xl">{suffix}</span>
      </div>
      <div className="font-mono-tech text-xs uppercase tracking-widest mt-1.5" style={{ color: 'var(--muted)' }}>
        {label}
      </div>
    </div>
  )
}
