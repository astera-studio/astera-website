import { useState } from 'react'
import { SectionHeader } from '@/components/ui'
import { ProjectCard } from '@/components/portfolio/ProjectCard'
import type { Project } from '@/types'
import { C, F, S } from '@/theme'
import visualSystemsImage from '@/assets/projects/visual-systems.png'
import digitalSystemsImage from '@/assets/projects/digital-systems.png'
import brandSystemsImage from '@/assets/projects/brand-systems.png'
import experimentalImage from '@/assets/projects/experimental.png'

const PROJECTS: Project[] = [
  {
    id: 1,
    num: '01',
    title: 'Visual Systems',
    category: 'Brand Identity · Art Direction',
    image: visualSystemsImage,
  },
  {
    id: 2,
    num: '02',
    title: 'Digital Systems',
    category: 'UI/UX · Digital Experience',
    image: digitalSystemsImage,
  },
  {
    id: 3,
    num: '03',
    title: 'Brand Systems',
    category: 'Brand Identity · Editorial',
    image: brandSystemsImage,
    lightArtwork: true,
  },
  {
    id: 4,
    num: '04',
    title: 'Experimental',
    category: 'Creative Direction · Digital Art',
    image: experimentalImage,
  },
]

export function PortfolioSection() {
  const [linkH, setLinkH] = useState(false)

  return (
    <section
      id="work"
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
            className="hidden md:block focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[#467978]"
            onMouseEnter={() => setLinkH(true)}
            onMouseLeave={() => setLinkH(false)}
            style={{
              fontFamily: F.sans,
              fontSize: '0.72rem',
              fontWeight: 500,
              letterSpacing: '0.12em',
              color: C.textPrimary,
              opacity: linkH ? 1 : 0.62,
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
