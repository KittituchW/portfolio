interface TechBadgeProps {
  label: string
  color?: 'cyan' | 'orange' | 'green' | 'purple'
  size?: 'sm' | 'md' | 'base' | 'lg' | 'xl'
  animationDelay?: number
}

const colorStyles = {
  cyan: {
    bg: 'rgba(0,245,255,0.08)',
    border: 'rgba(0,245,255,0.2)',
    text: '#00f5ff',
    hoverBg: 'rgba(0,245,255,0.15)',
  },
  orange: {
    bg: 'rgba(255,107,53,0.08)',
    border: 'rgba(255,107,53,0.2)',
    text: '#ff6b35',
    hoverBg: 'rgba(255,107,53,0.15)',
  },
  green: {
    bg: 'rgba(57,255,20,0.08)',
    border: 'rgba(57,255,20,0.2)',
    text: '#39ff14',
    hoverBg: 'rgba(57,255,20,0.15)',
  },
  purple: {
    bg: 'rgba(168,85,247,0.08)',
    border: 'rgba(168,85,247,0.2)',
    text: '#a855f7',
    hoverBg: 'rgba(168,85,247,0.15)',
  },
}

export function TechBadge({
  label,
  color = 'cyan',
  size = 'base',
  animationDelay = 0,
}: TechBadgeProps) {
  const styles = colorStyles[color]

  return (
    <span
      className={`
        inline-block font-mono-tech rounded-full transition-all duration-200
        ${size === 'base' ? 'px-2 py-0.5 text-[10px]' : size === 'lg' ? 'px-4 py-1.5 text-sm' : 'px-3 py-1 text-xs'}
      `}
      style={{
        backgroundColor: styles.bg,
        border: `1px solid ${styles.border}`,
        color: styles.text,
        animationDelay: `${animationDelay}ms`,
      }}
    >
      {label}
    </span>
  )
}
