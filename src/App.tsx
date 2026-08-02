import HoverButton from '@/components/ui/HoverButton'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import OrbitalDiagram from '@/components/graphics/OrbitalDiagram'
import { AboutSection } from '@/components/sections/AboutSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { PortfolioSection } from '@/components/sections/PortfolioSection'
import { ValuesSection } from '@/components/sections/ValuesSection'
import { ProcessSection } from '@/components/sections/ProcessSection'
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
