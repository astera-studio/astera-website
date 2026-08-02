import HoverButton from '@/components/ui/HoverButton'
import OrbitalDiagram from '@/components/graphics/OrbitalDiagram'
import { C } from '@/theme/colors'
import { F } from '@/theme/fonts'

const TICKER = ['Brand Identity', 'Web Design', 'Digital Experience', 'E-commerce', 'Creative Direction', 'UI/UX Design', 'Visual Identity', 'Motion Design']

export function HeroSection() {
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
