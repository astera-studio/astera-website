import SectionLabel from '@/components/ui/SectionLabel'
import SectionHeading from '@/components/ui/SectionHeading'
import { ServiceCard } from '@/components/services/ServiceCard'
import { C } from '@/theme/colors'
import { F } from '@/theme/fonts'
import { S } from '@/theme/spacing'

const SERVICES = [
  {
    num: '01', title: 'Brand Identity', subtitle: 'Identidade Visual',
    description: 'Criamos identidades visuais que comunicam a essência da sua marca com precisão e elegância. Do naming ao sistema completo de design.',
    tags: ['Naming', 'Logo', 'Sistema Visual', 'Brand Guidelines'],
  },
  {
    num: '02', title: 'Web Design', subtitle: 'Design & Desenvolvimento',
    description: 'Websites que unem estética refinada e performance técnica. Cada projeto é desenvolvido sob medida, com foco na conversão e na experiência do usuário.',
    tags: ['UI Design', 'Desenvolvimento', 'CMS', 'Performance'],
  },
  {
    num: '03', title: 'Digital Experiences', subtitle: 'Experiências Digitais',
    description: 'Plataformas e interfaces que definem padrões. Design sofisticado com tecnologia de ponta para criar algo verdadeiramente memorável.',
    tags: ['UI/UX', 'Interação', 'Motion', 'Prototipagem'],
  },
  {
    num: '04', title: 'E-commerce', subtitle: 'Comércio Digital',
    description: 'Lojas online que convertem visitantes em clientes leais. Design orientado a resultados, sem abrir mão da elegância da marca.',
    tags: ['Shopify', 'WooCommerce', 'Estratégia', 'UX'],
  },
  {
    num: '05', title: 'Creative Direction', subtitle: 'Direção Criativa',
    description: 'Consultoria estratégica de alto nível para marcas que querem elevar seu posicionamento. Da análise competitiva à curadoria visual completa.',
    tags: ['Estratégia', 'Art Direction', 'Consultoria', 'Posicionamento'],
  },
]

export function ServicesSection() {
  return (
    <section style={{ backgroundColor: '#0b0b0b', padding: `${S.sectionPaddingY} ${S.pageGutter}` }}>
      <div
        className="flex flex-col md:flex-row md:items-end justify-between"
        style={{ borderBottom: '1px solid rgba(244,241,234,0.065)', paddingBottom: '2rem', marginBottom: '3.5rem', gap: '1.5rem' }}
      >
        <div>
          <SectionLabel index="01" label="Serviços" />
          <SectionHeading>O que<br />fazemos</SectionHeading>
        </div>
        <p className="hidden md:block" style={{ fontFamily: F.sans, fontSize: '0.85rem', color: C.white, opacity: 0.36, maxWidth: '250px', lineHeight: 1.72, textAlign: 'right' }}>
          Serviços completos de design e tecnologia para marcas que querem se destacar.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {SERVICES.map((svc, i) => (
          <ServiceCard key={i} svc={svc} />
        ))}
      </div>
    </section>
  )
}
