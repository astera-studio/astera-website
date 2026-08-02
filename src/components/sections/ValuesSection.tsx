import SectionHeader from '@/components/ui/SectionHeader'
import { ValueCard } from '@/components/values/ValueCard'
import { C } from '@/theme/colors'
import { S } from '@/theme/spacing'

const VALUES = [
  { num: '01', sym: '◈', title: 'Estratégia',    body: 'Cada decisão criativa é fundamentada em análise profunda. Design sem estratégia é apenas decoração.' },
  { num: '02', sym: '◇', title: 'Excelência',    body: 'Não entregamos o suficiente. Entregamos o excepcional. Cada pixel, cada linha de código importa.' },
  { num: '03', sym: '○', title: 'Transparência', body: 'Comunicação clara, prazos honestos e processos abertos. Confiança é a base de tudo o que construímos.' },
  { num: '04', sym: '△', title: 'Criatividade',  body: 'Pensamento original que foge dos clichês. Soluções únicas que fazem sua marca ser verdadeiramente lembrada.' },
  { num: '05', sym: '⬡', title: 'Evolução',      body: 'O mundo digital muda constantemente. Estamos sempre à frente, antecipando e adaptando o que construímos.' },
]

export function ValuesSection() {
  return (
    <section style={{ backgroundColor: C.black, padding: `${S.sectionPaddingY} ${S.pageGutter}` }}>
    <SectionHeader index="04" label="Valores">
    O que nos<br />guia
    </SectionHeader>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5"
        style={{ border: `1px solid ${C.lineSubtle}`, borderRight: 'none', borderBottom: 'none' }}
      >
        {VALUES.map((val, i) => (
          <div key={i} style={{ borderRight: `1px solid ${C.lineSubtle}`, borderBottom: `1px solid ${C.lineSubtle}` }}>
            <ValueCard val={val} />
          </div>
        ))}
      </div>
    </section>
  )
}
