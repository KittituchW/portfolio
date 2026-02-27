import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'
import { radarData } from '@/data/resume'

interface CustomTooltipProps {
  active?: boolean
  payload?: Array<{ value: number; payload: { subject: string } }>
}

function CustomTooltip({ active, payload }: CustomTooltipProps) {
  if (active && payload && payload.length > 0) {
    const data = payload[0]
    return (
      <div
        className="px-3 py-2 rounded-lg font-mono-tech text-xs"
        style={{
          background: 'rgba(2,11,20,0.95)',
          border: '1px solid rgba(0,245,255,0.3)',
          color: '#00f5ff',
        }}
      >
        <div className="text-white font-semibold mb-1">{data.payload.subject}</div>
        <div>Score: {data.value}/100</div>
      </div>
    )
  }
  return null
}

export function SkillRadar() {
  return (
    <div className="w-full h-80 md:h-96">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={radarData} margin={{ top: 20, right: 30, bottom: 20, left: 30 }}>
          <PolarGrid
            stroke="rgba(0,245,255,0.15)"
            strokeWidth={1}
          />
          <PolarAngleAxis
            dataKey="subject"
            tick={{
              fontFamily: "'Share Tech Mono', monospace",
              fontSize: 11,
              fill: '#00f5ff',
            }}
          />
          <Radar
            name="Skills"
            dataKey="score"
            stroke="#00f5ff"
            strokeWidth={2}
            fill="rgba(0,245,255,0.15)"
            dot={{ fill: '#00f5ff', r: 4, strokeWidth: 0 }}
            animationDuration={1500}
            animationEasing="ease-out"
          />
          <Tooltip content={<CustomTooltip />} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}
