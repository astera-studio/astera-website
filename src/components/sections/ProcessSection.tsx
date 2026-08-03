import { useState } from 'react'
import { SectionHeader } from '@/components/ui'
import type { ProcessStep } from '@/types'
import { C, F, S } from '@/theme'

const PROCESS: ProcessStep[] = [
  { num: '01', title: 'Discovery',    subtitle: 'Imersão',        body: 'Mergulhamos na sua marca, mercado e audiência para entender o que precisa ser comunicado e como chegar lá com precisão.' },
  { num: '02', title: 'Strategy',     subtitle: 'Estratégia',     body: 'Desenvolvemos um plano claro: posicionamento, mensagem-chave, canais e métricas de sucesso para guiar toda a criação.' },
  { num: '03', title: 'Design',       subtitle: 'Criação',        body: 'A visão ganha forma. Conceitos visuais, protótipos iterativos e refinamento até que cada detalhe esteja perfeito.' },
  { num: '04', title: 'Development',  subtitle: 'Desenvolvimento', body: 'Construímos com código limpo, performance otimizada e atenção absoluta a cada detalhe técnico e de acessibilidade.' },
  { num: '05', title: 'Evolution',    subtitle: 'Evolução',       body: 'Acompanhamos os resultados, medimos o impacto e continuamos evoluindo. Sua marca é um organismo vivo que cresce.' },
]

export function ProcessSection() {
  const [active, setActive] = useState(0)
  const step = PROCESS[active]

  return (
    <section style={{ backgroundColor: C.black, padding: `${S.sectionPaddingY} ${S.pageGutter}` }}>
     <SectionHeader index="02" label="Processo">
      Como<br />trabalhamos
     </SectionHeader>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-0 lg:gap-16 items-start">
        {/* Steps */}
        <div>
          {PROCESS.map((s, i) => (
            <div
              key={i}
              onClick={() => setActive(i)}
              style={{ borderTop: `1px solid ${C.lineSubtle}`, padding: '1.5rem 0', cursor: 'pointer' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <span style={{ fontFamily: F.sans, fontSize: '0.6rem', letterSpacing: '0.15em', color: active === i ? C.orange : C.turquoise, opacity: active === i ? 1 : 0.58, minWidth: '1.8rem' }}>
                    {s.num}
                  </span>
                  <span style={{ fontFamily: F.display, fontWeight: 800, fontSize: 'clamp(1.05rem, 1.8vw, 1.4rem)', letterSpacing: '0.08em', textTransform: 'uppercase', color: active === i ? C.white : 'rgba(244,241,234,0.32)', transition: 'color 0.3s' }}>
                    {s.title}
                  </span>
                </div>
                <span style={{ fontFamily: F.serif, fontStyle: 'italic', fontSize: '0.78rem', color: C.white, opacity: 0.26 }}>
                  {s.subtitle}
                </span>
              </div>

              {active === i && (
                <div style={{ marginTop: '0.875rem', paddingLeft: 'calc(1.8rem + 20px)' }}>
                  <p style={{ fontFamily: F.sans, fontSize: '0.87rem', lineHeight: 1.76, color: C.white, opacity: 0.46 }}>
                    {s.body}
                  </p>
                </div>
              )}
            </div>
          ))}
          <div style={{ borderTop: `1px solid ${C.lineSubtle}` }} />
        </div>

        {/* Visual panel */}
        <div
          className="hidden lg:flex items-center justify-center"
          style={{ backgroundColor: 'rgba(70,121,120,0.032)', border: '1px solid rgba(70,121,120,0.1)', height: '380px', position: 'relative', overflow: 'hidden' }}
        >
          {/* Ghost number */}
          <div style={{ position: 'absolute', fontFamily: F.display, fontWeight: 900, fontSize: '16rem', color: C.white, opacity: 0.016, letterSpacing: '-0.06em', lineHeight: 1, userSelect: 'none', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
            {step.num}
          </div>

          <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '2.5rem' }}>
            <p style={{ fontFamily: F.sans, fontSize: '0.6rem', letterSpacing: '0.28em', color: C.turquoise, textTransform: 'uppercase', marginBottom: '1rem', opacity: 0.7 }}>
              {step.num} — {step.subtitle}
            </p>
            <h3 style={{ fontFamily: F.display, fontWeight: 900, fontSize: 'clamp(2rem, 3.2vw, 2.8rem)', textTransform: 'uppercase', color: C.white, letterSpacing: '0.08em', marginBottom: '1.25rem' }}>
              {step.title}
            </h3>
            <p style={{ fontFamily: F.sans, fontSize: '0.87rem', lineHeight: 1.76, color: C.white, opacity: 0.44, maxWidth: '300px', margin: '0 auto' }}>
              {step.body}
            </p>
          </div>

          {[['top','14px','right','14px','borderTop','borderRight'],['bottom','14px','left','14px','borderBottom','borderLeft'],['top','14px','left','14px','borderTop','borderLeft'],['bottom','14px','right','14px','borderBottom','borderRight']].map(([v1,n1,v2,n2,b1,b2], i) => (
            <div key={i} style={{ position: 'absolute', [v1]: n1, [v2]: n2, width: '18px', height: '18px', [b1]: `1px solid rgba(70,121,120,0.38)`, [b2]: `1px solid rgba(70,121,120,0.38)` }} />
          ))}
        </div>
      </div>
    </section>
  )
}
