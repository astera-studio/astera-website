import { useState } from 'react'
import type { Service } from '@/types'
import { C, F } from '@/theme'

type ServiceCardProps = {
  svc: Service
}

export function ServiceCard({ svc }: ServiceCardProps) {
  const [h, setH] = useState(false)

  return (
    <div
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        backgroundColor: h ? 'rgba(70,121,120,0.052)' : 'transparent',
        border: `1px solid ${h ? 'rgba(70,121,120,0.28)' : C.lineSubtle}`,
        padding: 'clamp(1.5rem, 2.5vw, 2.5rem)',
        transition: 'all 0.4s ease',
        cursor: 'default',
        position: 'relative',
        height: '100%',
        boxSizing: 'border-box',
      }}
    >
      <div style={{ fontFamily: F.sans, fontSize: '0.6rem', letterSpacing: '0.2em', color: C.turquoise, opacity: 0.8, marginBottom: '1.5rem' }}>
        {svc.num}
      </div>

      <h3 style={{ fontFamily: F.display, fontWeight: 800, fontSize: 'clamp(1.3rem, 1.8vw, 1.65rem)', letterSpacing: '0.06em', textTransform: 'uppercase', color: C.white, lineHeight: 1, marginBottom: '5px' }}>
        {svc.title}
      </h3>
      <p style={{ fontFamily: F.serif, fontStyle: 'italic', fontSize: '0.82rem', color: C.white, opacity: 0.36, marginBottom: '1.25rem' }}>
        {svc.subtitle}
      </p>

      <div style={{ width: h ? '40px' : '20px', height: '1px', backgroundColor: h ? C.orange : 'rgba(244,241,234,0.16)', transition: 'all 0.4s ease', marginBottom: '1.25rem' }} />

      <p style={{ fontFamily: F.sans, fontSize: '0.84rem', lineHeight: 1.74, color: C.white, opacity: 0.46, marginBottom: '1.5rem' }}>
        {svc.description}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {svc.tags.map(tag => (
          <span key={tag} style={{ fontFamily: F.sans, fontSize: '0.57rem', letterSpacing: '0.13em', color: C.turquoise, opacity: 0.7, border: '1px solid rgba(70,121,120,0.22)', padding: '4px 10px', textTransform: 'uppercase' }}>
            {tag}
          </span>
        ))}
      </div>

      {h && (
        <div style={{ position: 'absolute', top: '-1px', left: '-1px', width: '26px', height: '26px', borderTop: `2px solid ${C.turquoise}`, borderLeft: `2px solid ${C.turquoise}`, pointerEvents: 'none' }} />
      )}
    </div>
  )
}
