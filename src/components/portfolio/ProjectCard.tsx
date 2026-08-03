import { useState } from 'react'
import type { Project } from '@/types/project'
import { C } from '@/theme/colors'
import { F } from '@/theme/fonts'
import { M } from '@/theme/motion'

type ProjectCardProps = {
  proj: Project
}

export function ProjectCard({ proj }: ProjectCardProps) {
  const [h, setH] = useState(false)

  return (
    <div
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{ position: 'relative', overflow: 'hidden', cursor: 'pointer', backgroundColor: C.graphite }}
    >
      <div style={{ position: 'relative', paddingBottom: '66%', overflow: 'hidden' }}>
        <img
          src={proj.image}
          alt={proj.title}
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
            transform: h ? 'scale(1.05)' : 'scale(1)',
            transition: 'transform 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            filter: 'brightness(0.62) saturate(0.75)',
          }}
        />

        {/* Gradient overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(9,9,9,0.88) 0%, rgba(9,9,9,0.18) 55%, transparent 100%)',
          opacity: h ? 0.92 : 0.72,
          transition: 'opacity 0.4s ease',
        }} />

        {/* Content */}
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 'clamp(1.25rem, 2vw, 2rem)' }}>
          <div style={{ transform: h ? 'translateY(0)' : 'translateY(4px)', transition: 'transform 0.4s ease' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.6rem' }}>
              <span style={{ fontFamily: F.metadata, fontSize: '0.6rem', letterSpacing: '0.18em', color: C.white, opacity: 0.42 }}>{proj.num}</span>
              <span style={{ fontFamily: F.metadata, fontSize: '0.6rem', letterSpacing: '0.15em', color: C.turquoise, opacity: 0.85, textTransform: 'uppercase' }}>{proj.year}</span>
            </div>
            <h3 style={{ fontFamily: F.display, fontWeight: 900, fontSize: 'clamp(1.25rem, 2.2vw, 1.85rem)', textTransform: 'uppercase', color: C.white, letterSpacing: '0.04em', lineHeight: 1.05, marginBottom: '0.5rem' }}>
              {proj.title}
            </h3>
            <p style={{ fontFamily: F.metadata, fontSize: '0.63rem', letterSpacing: '0.14em', color: C.white, opacity: 0.46, textTransform: 'uppercase' }}>
              {proj.category}
            </p>
          </div>
        </div>

        {/* View arrow */}
        <div style={{
          position: 'absolute', top: 'clamp(1rem, 2vw, 1.5rem)', right: 'clamp(1rem, 2vw, 1.5rem)',
          width: '38px', height: '38px', border: '1px solid rgba(244,241,234,0.25)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: C.white, fontSize: '0.85rem',
          opacity: h ? 1 : 0, transform: h ? 'scale(1)' : 'scale(0.75)',
          transition: `all ${M.uiFeedback}`,
        }}>
          ↗
        </div>
      </div>
    </div>
  )
}
