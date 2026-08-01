import { useState } from 'react'
import SectionLabel from '@/components/ui/SectionLabel'
import SectionHeading from '@/components/ui/SectionHeading'
import { ProjectCard } from '@/components/portfolio/ProjectCard'
import { C } from '@/theme/colors'
import { F } from '@/theme/fonts'

const PROJECTS = [
  { id: 1, num: '01', title: 'Nordvik Architecture', category: 'Brand Identity · Web Design', year: '2024', image: 'https://images.unsplash.com/photo-1593466486574-71b38f2ff423?w=1200&h=800&fit=crop&auto=format' },
  { id: 2, num: '02', title: 'Soleil Hospitality',   category: 'Digital Experience',          year: '2024', image: 'https://images.unsplash.com/photo-1773982055675-67bc032d5774?w=800&h=800&fit=crop&auto=format' },
  { id: 3, num: '03', title: 'Meridian Capital',     category: 'Web Design · Branding',       year: '2023', image: 'https://images.unsplash.com/photo-1771814488300-09b4394856b4?w=800&h=800&fit=crop&auto=format' },
  { id: 4, num: '04', title: 'Vertex Studio',        category: 'Creative Direction',          year: '2023', image: 'https://images.unsplash.com/photo-1779384570168-cf04dc968a97?w=1200&h=800&fit=crop&auto=format' },
]

export function PortfolioSection() {
  const [linkH, setLinkH] = useState(false)

  return (
    <section style={{ backgroundColor: '#0b0b0b', padding: 'clamp(5rem, 8vw, 9rem) clamp(1.5rem, 4vw, 6rem)' }}>
      <div
        className="flex flex-col md:flex-row md:items-end justify-between"
        style={{ borderBottom: '1px solid rgba(244,241,234,0.065)', paddingBottom: '2rem', marginBottom: '3.5rem', gap: '1.5rem' }}
      >
        <div>
          <SectionLabel index="03" label="Trabalhos" />
          <SectionHeading>Projetos<br />selecionados</SectionHeading>
        </div>
        <a
          href="#"
          className="hidden md:block"
          onMouseEnter={() => setLinkH(true)}
          onMouseLeave={() => setLinkH(false)}
          style={{ fontFamily: F.sans, fontSize: '0.72rem', letterSpacing: '0.16em', color: C.white, opacity: linkH ? 0.72 : 0.36, textDecoration: 'none', textTransform: 'uppercase', transition: 'opacity 0.3s' }}
        >
          Ver todos →
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {PROJECTS.map(proj => <ProjectCard key={proj.id} proj={proj} />)}
      </div>
    </section>
  )
}
