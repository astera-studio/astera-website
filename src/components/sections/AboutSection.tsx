import { C, F, S } from '@/theme'


export function AboutSection() {
  const stats = [
    { num: '7+',   label: 'Anos de Experiência' },
    { num: '120+', label: 'Projetos Entregues' },
    { num: '40+',  label: 'Clientes Satisfeitos' },
  ]

  return (
    <section style={{ backgroundColor: C.black, padding: `${S.sectionPaddingY} ${S.pageGutter}` }}>
      {/* Stats */}
      <div
        className="grid grid-cols-3"
        style={{ borderBottom: '1px solid rgba(244,241,234,0.07)', paddingBottom: 'clamp(3rem, 5vw, 5rem)', marginBottom: 'clamp(3.5rem, 6vw, 6.5rem)' }}
      >
        {stats.map((stat, i) => (
          <div key={i} style={{
            borderRight: i < 2 ? '1px solid rgba(244,241,234,0.07)' : 'none',
            padding: `0 clamp(1.25rem, 3vw, 3.5rem)`,
            paddingLeft: i === 0 ? 0 : undefined,
          }}>
            <div style={{ fontFamily: F.display, fontWeight: 900, fontSize: 'clamp(2.5rem, 5vw, 5.5rem)', color: C.white, lineHeight: 1, letterSpacing: '-0.02em', marginBottom: '8px' }}>
              {stat.num}
            </div>
            <div style={{ fontFamily: F.sans, fontSize: '0.66rem', letterSpacing: '0.18em', color: C.white, opacity: 0.36, textTransform: 'uppercase' }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Quote */}
      <div style={{ textAlign: 'center', marginBottom: 'clamp(3.5rem, 6vw, 6.5rem)' }}>
        <p style={{ fontFamily: F.sans, fontSize: '0.62rem', letterSpacing: '0.28em', color: C.turquoise, textTransform: 'uppercase', marginBottom: '1.75rem' }}>
          — O Estúdio
        </p>
        <h2 style={{
          fontFamily: F.editorial,
          fontWeight: 600,
          fontStyle: 'italic',
          fontSize: 'clamp(1.55rem, 3vw, 3.1rem)',
          lineHeight: 1.32,
          color: C.white,
          maxWidth: '780px',
          margin: '0 auto 2rem',
        }}>
          "Grandes marcas não nascem por acaso. Elas são construídas com estratégia, criatividade e atenção aos detalhes."
        </h2>
        <div style={{ width: '36px', height: '1px', backgroundColor: C.orange, margin: '0 auto' }} />
      </div>

      {/* Two columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 max-w-4xl">
        {[
          {
            title: 'Independência Criativa',
            body: 'Somos um estúdio independente — sem os vícios das grandes agências. Cada projeto recebe atenção integral, estratégia personalizada e execução impecável do começo ao fim.',
          },
          {
            title: 'Digital-First',
            body: 'Vivemos na intersecção entre arte, design e tecnologia. Nossa abordagem é fundamentalmente digital, construindo experiências que conectam marcas com pessoas de forma autêntica e duradoura.',
          },
        ].map((col, i) => (
          <div key={i}>
            <h3 style={{ fontFamily: F.display, fontWeight: 800, fontSize: '1rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: C.white, marginBottom: '0.875rem' }}>
              {col.title}
            </h3>
            <p style={{ fontFamily: F.sans, fontSize: '0.9rem', lineHeight: 1.8, color: C.white, opacity: 0.47 }}>
              {col.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
