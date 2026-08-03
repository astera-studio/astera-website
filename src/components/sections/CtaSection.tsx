import { HoverButton } from '@/components/ui'
import { C, F, S } from '@/theme'

export function CtaSection() {
  return (
    <section style={{ backgroundColor: '#0c0c0c', padding: `clamp(6rem, 10vw, 10rem) ${S.pageGutter}`, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 60% at 50% 100%, rgba(70,121,120,0.09) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', backgroundColor: C.lineSubtle }} />

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
