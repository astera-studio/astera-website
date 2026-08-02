import { useState } from 'react'
import { C } from '@/theme/colors'
import { F } from '@/theme/fonts'
import { M } from '@/theme/motion'

type ValueCardProps = {
  val: {
    num: string
    sym: string
    title: string
    body: string
  }
}

export function ValueCard({ val }: ValueCardProps) {
  const [h, setH] = useState(false)

  return (
    <div
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        padding: 'clamp(1.5rem, 2.5vw, 2.5rem)',
        borderTop: `2px solid ${h ? C.turquoise : 'transparent'}`,
        backgroundColor: h ? 'rgba(70,121,120,0.038)' : 'transparent',
        transition: `all ${M.uiFeedback}`,
        height: '100%',
        boxSizing: 'border-box',
      }}
    >
      <div style={{ fontFamily: F.sans, fontSize: '1.35rem', color: C.turquoise, marginBottom: '0.875rem', opacity: h ? 0.9 : 0.52, transition: `opacity ${M.uiFeedback}` }}>
        {val.sym}
      </div>
      <div style={{ fontFamily: F.sans, fontSize: '0.6rem', letterSpacing: '0.15em', color: C.turquoise, opacity: 0.52, marginBottom: '0.65rem' }}>
        {val.num}
      </div>
      <h3 style={{ fontFamily: F.display, fontWeight: 800, fontSize: 'clamp(1.05rem, 1.6vw, 1.25rem)', textTransform: 'uppercase', color: C.white, letterSpacing: '0.08em', marginBottom: '0.65rem' }}>
        {val.title}
      </h3>
      <div style={{ width: '20px', height: '1px', backgroundColor: h ? C.orange : 'rgba(244,241,234,0.13)', marginBottom: '0.65rem', transition: `background-color ${M.uiFeedback}` }} />
      <p style={{ fontFamily: F.sans, fontSize: '0.82rem', lineHeight: 1.72, color: C.white, opacity: 0.43 }}>
        {val.body}
      </p>
    </div>
  )
}
