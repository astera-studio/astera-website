import { SectionHeader } from '@/components/ui'
import { ProjectCard } from '@/components/portfolio/ProjectCard'
import type { Project } from '@/types'
import { C, S } from '@/theme'
import visualSystemsImage from '@/assets/projects/visual-systems.webp'
import digitalSystemsImage from '@/assets/projects/digital-systems.webp'
import brandSystemsImage from '@/assets/projects/brand-systems.webp'
import experimentalImage from '@/assets/projects/experimental.webp'

const PROJECTS: Project[] = [
  {
    id: 1,
    num: '01',
    title: 'Visual Systems',
    href: 'https://www.behance.net/gallery/254982449/BAD-GAL-Identidade-Visual-Direcao-Criativa',
    category: 'Brand Identity · Art Direction',
    image: visualSystemsImage,
  },
  {
    id: 2,
    num: '02',
    title: 'Digital Systems',
    href: 'https://www.behance.net/gallery/254982921/CAAHUCOM-Landing-Page-Conceitual',
    category: 'UI/UX · Digital Experience',
    image: digitalSystemsImage,
  },
  {
    id: 3,
    num: '03',
    title: 'Brand Systems',
    href: 'https://www.behance.net/gallery/254982357/ASTERA-Identidade-Visual-Direcao-Criativa',
    category: 'Brand Identity · Editorial',
    image: brandSystemsImage,
    lightArtwork: true,
  },
  {
    id: 4,
    num: '04',
    title: 'Experimental',
    href: 'https://www.behance.net/gallery/254982765/ASTERA-Digital-Experience-Creative-Development',
    category: 'Creative Direction · Digital Art',
    image: experimentalImage,
  },
]

export function PortfolioSection() {
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
        aside={<span aria-hidden="true" />}
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
