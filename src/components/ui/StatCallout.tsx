interface StatCalloutProps {
  value: string
  label?: string
  color?: 'cyan' | 'orange' | 'green' | 'purple'
}

const colorStyles = {
  cyan: {
    bg: 'rgba(0,245,255,0.08)',
    border: 'rgba(0,245,255,0.25)',
    text: '#00f5ff',
    glow: '0 0 12px rgba(0,245,255,0.3)',
  },
  orange: {
    bg: 'rgba(255,107,53,0.08)',
    border: 'rgba(255,107,53,0.25)',
    text: '#ff6b35',
    glow: '0 0 12px rgba(255,107,53,0.3)',
  },
  green: {
    bg: 'rgba(57,255,20,0.08)',
    border: 'rgba(57,255,20,0.25)',
    text: '#39ff14',
    glow: '0 0 12px rgba(57,255,20,0.3)',
  },
  purple: {
    bg: 'rgba(168,85,247,0.08)',
    border: 'rgba(168,85,247,0.25)',
    text: '#a855f7',
    glow: '0 0 12px rgba(168,85,247,0.3)',
  },
}

export function StatCallout({ value, label, color = 'cyan' }: StatCalloutProps) {
  const styles = colorStyles[color]

  return (
    <span
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono-tech text-xs font-semibold"
      style={{
        backgroundColor: styles.bg,
        border: `1px solid ${styles.border}`,
        color: styles.text,
      }}
    >
      <span
        className="w-1.5 h-1.5 rounded-full inline-block"
        style={{ backgroundColor: styles.text }}
      />
      {value}
      {label && <span className="opacity-70 ml-1">{label}</span>}
    </span>
  )
}
