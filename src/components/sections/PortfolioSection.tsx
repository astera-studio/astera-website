import { useState } from 'react'
import { SectionHeader } from '@/components/ui'
import { ProjectCard } from '@/components/portfolio/ProjectCard'
import type { Project } from '@/types'
import { C, F, S } from '@/theme'

const PROJECTS: Project[] = [
  {
    id: 1,
    num: '01',
    title: 'Nordvik Architecture',
    category: 'Brand Identity · Web Design',
    year: '2024',
    image:
      'https://images.unsplash.com/photo-1593466486574-71b38f2ff423?w=1200&h=800&fit=crop&auto=format',
  },
  {
    id: 2,
    num: '02',
    title: 'Soleil Hospitality',
    category: 'Digital Experience',
    year: '2024',
    image:
      'https://images.unsplash.com/photo-1773982055675-67bc032d5774?w=800&h=800&fit=crop&auto=format',
  },
  {
    id: 3,
    num: '03',
    title: 'Meridian Capital',
    category: 'Web Design · Branding',
    year: '2023',
    image:
      'https://images.unsplash.com/photo-1771814488300-09b4394856b4?w=800&h=800&fit=crop&auto=format',
  },
  {
    id: 4,
    num: '04',
    title: 'Vertex Studio',
    category: 'Creative Direction',
    year: '2023',
    image:
      'https://images.unsplash.com/photo-1779384570168-cf04dc968a97?w=1200&h=800&fit=crop&auto=format',
  },
]

export function PortfolioSection() {
  const [linkH, setLinkH] = useState(false)

  return (
    <section
      style={{
        backgroundColor: C.surfaceAlternative,
        padding: `${S.sectionPaddingY} ${S.pageGutter}`,
      }}
    >
      <SectionHeader
        index="03"
        label="Trabalhos"
        aside={
          <a
            href="#"
            className="hidden md:block"
            onMouseEnter={() => setLinkH(true)}
            onMouseLeave={() => setLinkH(false)}
            style={{
              fontFamily: F.sans,
              fontSize: '0.72rem',
              letterSpacing: '0.16em',
              color: C.white,
              opacity: linkH ? 0.72 : 0.36,
              textDecoration: 'none',
              textTransform: 'uppercase',
              transition: 'opacity 0.3s',
            }}
          >
            Ver todos →
          </a>
        }
      >
        Projetos
        <br />
        selecionados
      </SectionHeader>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {PROJECTS.map((proj) => (
          <ProjectCard key={proj.id} proj={proj} />
        ))}
      </div>
    </section>
  )
}