import { useState } from 'react'
import SectionLabel from '@/components/ui/SectionLabel'
import SectionHeading from '@/components/ui/SectionHeading'
import HoverButton from '@/components/ui/HoverButton'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import OrbitalDiagram from '@/components/graphics/OrbitalDiagram'
import { AboutSection } from '@/components/sections/AboutSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { PortfolioSection } from '@/components/sections/PortfolioSection'
import { ValuesSection } from '@/components/sections/ValuesSection'
import { C } from '@/theme/colors'
import { F } from '@/theme/fonts'

// ─── ORBITAL DIAGRAM ─────────────────────────────────────────────────────────


// ─── HERO ─────────────────────────────────────────────────────────────────────

const TICKER = ['Brand Identity', 'Web Design', 'Digital Experience', 'E-commerce', 'Creative Direction', 'UI/UX Design', 'Visual Identity', 'Motion Design']

function HeroSection() {
  return (
    <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: C.black }}>
      {/* Background radial glow */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 55% 65% at 72% 48%, rgba(70,121,120,0.075) 0%, transparent 68%)',
      }} />

      {/* Main content */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', padding: 'clamp(5.5rem, 9vw, 8rem) clamp(1.5rem, 4vw, 6rem) clamp(2.5rem, 4vw, 4rem)' }}>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: copy */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '2rem' }}>
              <span style={{ display: 'block', width: '28px', height: '1px', backgroundColor: C.turquoise, flexShrink: 0 }} />
              <span style={{ fontFamily: F.sans, fontSize: '0.62rem', letterSpacing: '0.28em', color: C.turquoise, textTransform: 'uppercase' }}>
                Art · Design · Technology
              </span>
            </div>

            <h1 style={{
              fontFamily: F.display,
              fontWeight: 900,
              fontSize: 'clamp(3rem, 5.5vw, 7.2rem)',
              lineHeight: 0.92,
              color: C.white,
              letterSpacing: '-0.01em',
              textTransform: 'uppercase',
              marginBottom: '2rem',
            }}>
              Projetamos<br />
              <span style={{ opacity: 0.88 }}>o futuro</span><br />
              <span style={{ WebkitTextStroke: '1.5px #F4F1EA', color: 'transparent' }}>digital</span><br />
              das marcas.
            </h1>

            <p style={{ fontFamily: F.sans, fontSize: '0.93rem', lineHeight: 1.78, color: C.white, opacity: 0.47, maxWidth: '390px', marginBottom: '2.5rem' }}>
              Um estúdio criativo independente onde estratégia, design e tecnologia se encontram para criar experiências digitais premium.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <HoverButton variant="primary" label="Iniciar Projeto" />
              <HoverButton variant="ghost"   label="Ver Trabalhos" />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '3.5rem' }}>
              <span style={{ display: 'block', width: '1px', height: '40px', backgroundColor: 'rgba(244,241,234,0.12)' }} />
              <span style={{ fontFamily: F.sans, fontSize: '0.6rem', letterSpacing: '0.22em', color: C.white, opacity: 0.28, textTransform: 'uppercase' }}>
                Scroll
              </span>
            </div>
          </div>

          {/* Right: orbital */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'clamp(300px, 42vw, 560px)' }}>
            <OrbitalDiagram />
          </div>
        </div>
      </div>

      {/* Ticker */}
      <div style={{ borderTop: '1px solid rgba(244,241,234,0.065)', overflow: 'hidden', padding: '15px 0' }}>
        <div style={{ display: 'flex', whiteSpace: 'nowrap', animation: 'ticker-scroll 30s linear infinite' }}>
          {[0, 1].map((_, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
              {TICKER.map((item, j) => (
                <span key={j} style={{ display: 'inline-flex', alignItems: 'center', gap: '2.5rem', padding: '0 2.5rem', fontFamily: F.sans, fontSize: '0.62rem', letterSpacing: '0.24em', color: C.white, opacity: 0.17, textTransform: 'uppercase' }}>
                  {item}
                  <span style={{ color: C.orange, opacity: 0.55 }}>·</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── ABOUT ────────────────────────────────────────────────────────────────────

// ─── SERVICES ─────────────────────────────────────────────────────────────────

// ─── PROCESS ──────────────────────────────────────────────────────────────────

const PROCESS = [
  { num: '01', title: 'Discovery',    subtitle: 'Imersão',        body: 'Mergulhamos na sua marca, mercado e audiência para entender o que precisa ser comunicado e como chegar lá com precisão.' },
  { num: '02', title: 'Strategy',     subtitle: 'Estratégia',     body: 'Desenvolvemos um plano claro: posicionamento, mensagem-chave, canais e métricas de sucesso para guiar toda a criação.' },
  { num: '03', title: 'Design',       subtitle: 'Criação',        body: 'A visão ganha forma. Conceitos visuais, protótipos iterativos e refinamento até que cada detalhe esteja perfeito.' },
  { num: '04', title: 'Development',  subtitle: 'Desenvolvimento', body: 'Construímos com código limpo, performance otimizada e atenção absoluta a cada detalhe técnico e de acessibilidade.' },
  { num: '05', title: 'Evolution',    subtitle: 'Evolução',       body: 'Acompanhamos os resultados, medimos o impacto e continuamos evoluindo. Sua marca é um organismo vivo que cresce.' },
]

function ProcessSection() {
  const [active, setActive] = useState(0)
  const step = PROCESS[active]

  return (
    <section style={{ backgroundColor: C.black, padding: 'clamp(5rem, 8vw, 9rem) clamp(1.5rem, 4vw, 6rem)' }}>
      <div style={{ marginBottom: '3.5rem' }}>
        <SectionLabel index="02" label="Processo" />
        <SectionHeading>Como<br />trabalhamos</SectionHeading>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-0 lg:gap-16 items-start">
        {/* Steps */}
        <div>
          {PROCESS.map((s, i) => (
            <div
              key={i}
              onClick={() => setActive(i)}
              style={{ borderTop: '1px solid rgba(244,241,234,0.065)', padding: '1.5rem 0', cursor: 'pointer' }}
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
          <div style={{ borderTop: '1px solid rgba(244,241,234,0.065)' }} />
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

// ─── PORTFOLIO ────────────────────────────────────────────────────────────────

// ─── VALUES ───────────────────────────────────────────────────────────────────

// ─── CTA ──────────────────────────────────────────────────────────────────────

function CtaSection() {
  return (
    <section style={{ backgroundColor: '#0c0c0c', padding: 'clamp(6rem, 10vw, 10rem) clamp(1.5rem, 4vw, 6rem)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 60% at 50% 100%, rgba(70,121,120,0.09) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', backgroundColor: 'rgba(244,241,234,0.065)' }} />

      <div style={{ position: 'relative', maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        <p style={{ fontFamily: F.sans, fontSize: '0.62rem', letterSpacing: '0.28em', color: C.turquoise, textTransform: 'uppercase', marginBottom: '2rem', opacity: 0.82 }}>
          — Próximo Passo
        </p>

        <h2 style={{
          fontFamily: F.display,
          fontWeight: 900,
          fontSize: 'clamp(2.5rem, 5.5vw, 6.5rem)',
          textTransform: 'uppercase',
          color: C.white,
          lineHeight: 0.92,
          letterSpacing: '-0.01em',
          marginBottom: '2.5rem',
        }}>
          Vamos construir<br />
          <span style={{ color: C.turquoise }}>o próximo</span><br />
          passo da sua marca.
        </h2>

        <p style={{ fontFamily: F.sans, fontSize: '0.93rem', lineHeight: 1.76, color: C.white, opacity: 0.4, maxWidth: '440px', margin: '0 auto 3rem' }}>
          Estamos prontos para transformar sua visão em realidade digital. Vamos conversar sobre o seu projeto.
        </p>

        <HoverButton variant="primary" label="Iniciar um Projeto →" large />

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0', flexWrap: 'wrap', marginTop: '4rem' }}>
          {[
            { label: 'Email',     value: 'hola@astera.studio' },
            { label: 'Instagram', value: '@astera.studio' },
            { label: 'LinkedIn',  value: 'astera-studio' },
          ].map((contact, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
              {i > 0 && <div style={{ width: '1px', height: '28px', backgroundColor: 'rgba(244,241,234,0.1)', margin: '0 2.5rem' }} />}
              <div style={{ textAlign: 'center' }}>
                <p style={{ fontFamily: F.sans, fontSize: '0.6rem', letterSpacing: '0.15em', color: C.white, opacity: 0.26, textTransform: 'uppercase', marginBottom: '4px' }}>{contact.label}</p>
                <p style={{ fontFamily: F.sans, fontSize: '0.87rem', color: C.white, opacity: 0.52 }}>{contact.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── APP ──────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div style={{ fontFamily: F.sans, backgroundColor: C.black, color: C.white, overflowX: 'hidden' }}>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <PortfolioSection />
      <ValuesSection />
      <CtaSection />
      <Footer />
    </div>
  )
}
