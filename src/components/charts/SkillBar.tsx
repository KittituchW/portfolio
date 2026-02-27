import { useState } from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts'
import { skillGroups } from '@/data/resume'
import { motion, AnimatePresence } from 'framer-motion'

interface CustomTooltipProps {
  active?: boolean
  payload?: Array<{ value: number; payload: { name: string } }>
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
        <div className="text-white font-semibold mb-1">{data.payload.name}</div>
        <div>Proficiency: {data.value}%</div>
      </div>
    )
  }
  return null
}

export function SkillBar() {
  const [activeTab, setActiveTab] = useState(0)

  const currentGroup = skillGroups[activeTab]

  return (
    <div className="w-full">
      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {skillGroups.map((group, index) => (
          <button
            key={group.category}
            onClick={() => setActiveTab(index)}
            className="relative font-mono-tech text-xs px-4 py-2 rounded-lg transition-all duration-200"
            style={{
              background: activeTab === index ? 'rgba(0,245,255,0.12)' : 'rgba(0,245,255,0.04)',
              border: `1px solid ${activeTab === index ? 'rgba(0,245,255,0.5)' : 'rgba(0,245,255,0.15)'}`,
              color: activeTab === index ? '#00f5ff' : 'var(--muted)',
              boxShadow: activeTab === index ? '0 0 12px rgba(0,245,255,0.2)' : 'none',
            }}
          >
            {group.category}
          </button>
        ))}
      </div>

      {/* Chart */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="w-full h-64"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={currentGroup.skills}
              layout="vertical"
              margin={{ top: 0, right: 20, bottom: 0, left: 100 }}
            >
              <defs>
                <linearGradient id="barGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#00f5ff" stopOpacity={0.9} />
                  <stop offset="100%" stopColor="#a855f7" stopOpacity={0.9} />
                </linearGradient>
              </defs>
              <XAxis
                type="number"
                domain={[0, 100]}
                tick={{ fontFamily: "'Share Tech Mono'", fontSize: 10, fill: 'var(--muted)' }}
                axisLine={{ stroke: 'rgba(0,245,255,0.1)' }}
                tickLine={false}
              />
              <YAxis
                dataKey="name"
                type="category"
                tick={{ fontFamily: "'Share Tech Mono'", fontSize: 11, fill: '#c8e6f0' }}
                axisLine={false}
                tickLine={false}
                width={95}
              />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(0,245,255,0.04)' }} />
              <Bar
                dataKey="level"
                fill="url(#barGradient)"
                radius={[0, 4, 4, 0]}
                animationDuration={800}
                animationEasing="ease-out"
              >
                {currentGroup.skills.map((_, index) => (
                  <Cell key={index} fill="url(#barGradient)" />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
