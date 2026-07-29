import { useState, useEffect } from 'react'

// ─── DESIGN TOKENS ────────────────────────────────────────────────────────────

const C = {
  black:     '#090909',
  white:     '#F4F1EA',
  orange:    '#E86A33',
  turquoise: '#467978',
  deep:      '#224B5A',
  graphite:  '#222222',
  gray:      '#D8D8D8',
}

const F = {
  display: "'Big Shoulders Display', sans-serif",
  serif:   "'Playfair Display', serif",
  sans:    "'DM Sans', sans-serif",
}

// ─── ORBITAL DIAGRAM ─────────────────────────────────────────────────────────

function OrbitalDiagram() {
  return (
    <svg
      viewBox="0 0 600 600"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: '100%' }}
    >
      <defs>
        <radialGradient id="ambientGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor={C.turquoise} stopOpacity="0.22" />
          <stop offset="100%" stopColor={C.turquoise} stopOpacity="0" />
        </radialGradient>
        <radialGradient id="sphereGrad" cx="35%" cy="30%" r="65%">
          <stop offset="0%"   stopColor="#d0cec8" />
          <stop offset="45%"  stopColor={C.turquoise} />
          <stop offset="100%" stopColor={C.deep} />
        </radialGradient>
        <radialGradient id="orangeGrad" cx="35%" cy="35%" r="65%">
          <stop offset="0%"   stopColor="#f4a87a" />
          <stop offset="100%" stopColor={C.orange} />
        </radialGradient>
        <filter id="glowFx" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="subtleGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Ambient glow */}
      <circle cx="300" cy="300" r="230" fill="url(#ambientGlow)" />

      {/* Static outer rings */}
      <circle cx="300" cy="300" r="278" stroke={C.white} strokeOpacity="0.025" strokeWidth="1" fill="none" strokeDasharray="1 14" />
      <circle cx="300" cy="300" r="248" stroke={C.white} strokeOpacity="0.05"  strokeWidth="0.5" fill="none" />

      {/* Axis guides */}
      <line x1="50"  y1="300" x2="550" y2="300" stroke={C.white} strokeOpacity="0.03" strokeWidth="0.5" />
      <line x1="300" y1="50"  x2="300" y2="550" stroke={C.white} strokeOpacity="0.03" strokeWidth="0.5" />

      {/* Orbital 1 — slow clockwise */}
      <g style={{ transformOrigin: '300px 300px', animation: 'spin-orbital 45s linear infinite' }}>
        <ellipse cx="300" cy="300" rx="235" ry="78" stroke={C.turquoise} strokeOpacity="0.28" strokeWidth="0.75" fill="none" />
        <circle cx="535" cy="300" r="7"  fill="url(#orangeGrad)" filter="url(#glowFx)" />
        <circle cx="535" cy="300" r="14" fill="none" stroke={C.orange} strokeOpacity="0.28" strokeWidth="0.75" />
      </g>

      {/* Orbital 2 — tilted, counter-clockwise */}
      <g style={{ transformOrigin: '300px 300px', animation: 'spin-orbital 32s linear infinite reverse' }}>
        <ellipse cx="300" cy="300" rx="195" ry="64" stroke={C.turquoise} strokeOpacity="0.2" strokeWidth="0.75" fill="none" transform="rotate(40 300 300)" />
        <circle cx="300" cy="364" r="5"  fill={C.turquoise} filter="url(#subtleGlow)" />
        <circle cx="300" cy="364" r="10" fill="none" stroke={C.turquoise} strokeOpacity="0.35" strokeWidth="0.5" />
      </g>

      {/* Static middle ring */}
      <circle cx="300" cy="300" r="158" stroke={C.white} strokeOpacity="0.06" strokeWidth="0.5" fill="none" />

      {/* Small inner orbital */}
      <g style={{ transformOrigin: '300px 300px', animation: 'spin-orbital 22s linear infinite' }}>
        <ellipse cx="300" cy="300" rx="100" ry="38" stroke={C.turquoise} strokeOpacity="0.38" strokeWidth="0.75" fill="none" transform="rotate(-55 300 300)" />
        <circle cx="300" cy="262" r="3.5" fill={C.white} fillOpacity="0.5" />
      </g>

      {/* Technical annotation lines */}
      <line x1="148" y1="158" x2="166" y2="176" stroke={C.turquoise} strokeOpacity="0.45" strokeWidth="0.5" />
      <line x1="148" y1="158" x2="238" y2="158" stroke={C.turquoise} strokeOpacity="0.28" strokeWidth="0.5" />
      <text x="242" y="162" fontSize="7" fill={C.turquoise} fillOpacity="0.55" fontFamily={F.sans} letterSpacing="1.5">SYS</text>

      <line x1="452" y1="445" x2="434" y2="427" stroke={C.turquoise} strokeOpacity="0.45" strokeWidth="0.5" />
      <line x1="452" y1="445" x2="362" y2="445" stroke={C.turquoise} strokeOpacity="0.28" strokeWidth="0.5" />
      <text x="358" y="449" fontSize="7" fill={C.turquoise} fillOpacity="0.55" fontFamily={F.sans} letterSpacing="1.5" textAnchor="end">ORB.02</text>

      <text x="548" y="282" fontSize="7" fill={C.orange} fillOpacity="0.7"  fontFamily={F.sans} letterSpacing="1.5">A.01</text>
      <text x="54"  y="320" fontSize="7" fill={C.turquoise} fillOpacity="0.55" fontFamily={F.sans} letterSpacing="1.5">B.03</text>

      {/* Center sphere */}
      <circle cx="300" cy="300" r="38" fill="url(#sphereGrad)" />
      <circle cx="300" cy="300" r="38" fill="none" stroke={C.white} strokeOpacity="0.1"  strokeWidth="1" />
      <circle cx="300" cy="300" r="49" fill="none" stroke={C.turquoise} strokeOpacity="0.18" strokeWidth="0.5" strokeDasharray="3 8" />
      <ellipse cx="292" cy="288" rx="11" ry="8" fill={C.white} fillOpacity="0.07" transform="rotate(-30 292 288)" />
    </svg>
  )
}

// ─── PRIMITIVES ───────────────────────────────────────────────────────────────

function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <p style={{ fontFamily: F.sans, fontSize: '0.62rem', letterSpacing: '0.28em', color: C.turquoise, textTransform: 'uppercase', marginBottom: '0.75rem' }}>
      {index} — {label}
    </p>
  )
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 style={{
      fontFamily: F.display,
      fontWeight: 900,
      fontSize: 'clamp(2.2rem, 4vw, 4.8rem)',
      textTransform: 'uppercase',
      color: C.white,
      lineHeight: 0.91,
      letterSpacing: '-0.01em',
    }}>
      {children}
    </h2>
  )
}

function HoverButton({ variant, label, large }: { variant: 'primary' | 'ghost'; label: string; large?: boolean }) {
  const [hovered, setHovered] = useState(false)
  const pad = large ? '18px 52px' : '14px 36px'
  const fs  = large ? '0.8rem' : '0.75rem'

  if (variant === 'primary') {
    return (
      <button
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          backgroundColor: hovered ? C.white : C.orange,
          color: C.black,
          fontFamily: F.sans,
          fontWeight: 600,
          fontSize: fs,
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          padding: pad,
          border: 'none',
          cursor: 'pointer',
          transition: 'background-color 0.35s ease',
          display: 'inline-block',
        }}
      >
        {label}
      </button>
    )
  }

  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: 'transparent',
        color: hovered ? C.white : 'rgba(244,241,234,0.58)',
        fontFamily: F.sans,
        fontWeight: 400,
        fontSize: fs,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        padding: large ? '17px 52px' : '13px 36px',
        border: `1px solid ${hovered ? 'rgba(244,241,234,0.42)' : 'rgba(244,241,234,0.18)'}`,
        cursor: 'pointer',
        transition: 'all 0.35s ease',
        display: 'inline-block',
      }}
    >
      {label}
    </button>
  )
}

// ─── NAVIGATION ───────────────────────────────────────────────────────────────

function NavLink({ label }: { label: string }) {
  const [h, setH] = useState(false)
  return (
    <a
      href="#"
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        fontFamily: F.sans,
        fontSize: '0.7rem',
        letterSpacing: '0.16em',
        color: C.white,
        opacity: h ? 0.9 : 0.42,
        textDecoration: 'none',
        textTransform: 'uppercase',
        transition: 'opacity 0.3s',
      }}
    >
      {label}
    </a>
  )
}

function Nav({ scrolled }: { scrolled: boolean }) {
  const [ctaHovered, setCtaHovered] = useState(false)

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: scrolled ? 'rgba(9,9,9,0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(24px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'none',
        borderBottom: `1px solid ${scrolled ? 'rgba(244,241,234,0.06)' : 'transparent'}`,
        transition: 'background-color 0.5s ease, border-color 0.5s ease',
      }}
    >
      <div
        className="flex items-center justify-between"
        style={{ height: '72px', padding: '0 clamp(1.5rem, 4vw, 6rem)' }}
      >
        <div style={{ fontFamily: F.display, fontWeight: 900, fontSize: '1.25rem', letterSpacing: '0.14em', color: C.white }}>
          ASTERA
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['Sobre', 'Serviços', 'Trabalhos', 'Processo', 'Contato'].map(item => (
            <NavLink key={item} label={item} />
          ))}
        </div>

        <button
          className="hidden md:block"
          onMouseEnter={() => setCtaHovered(true)}
          onMouseLeave={() => setCtaHovered(false)}
          style={{
            fontFamily: F.sans,
            fontSize: '0.68rem',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: ctaHovered ? C.black : C.orange,
            backgroundColor: ctaHovered ? C.orange : 'transparent',
            border: `1px solid rgba(232,106,51,0.4)`,
            padding: '10px 22px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
        >
          Iniciar Projeto →
        </button>
      </div>
    </nav>
  )
}

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

function AboutSection() {
  const stats = [
    { num: '7+',   label: 'Anos de Experiência' },
    { num: '120+', label: 'Projetos Entregues' },
    { num: '40+',  label: 'Clientes Satisfeitos' },
  ]

  return (
    <section style={{ backgroundColor: C.black, padding: 'clamp(5rem, 8vw, 9rem) clamp(1.5rem, 4vw, 6rem)' }}>
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
          fontFamily: F.serif,
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

// ─── SERVICES ─────────────────────────────────────────────────────────────────

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

function ServiceCard({ svc }: { svc: typeof SERVICES[0] }) {
  const [h, setH] = useState(false)

  return (
    <div
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        backgroundColor: h ? 'rgba(70,121,120,0.052)' : 'transparent',
        border: `1px solid ${h ? 'rgba(70,121,120,0.28)' : 'rgba(244,241,234,0.065)'}`,
        padding: 'clamp(1.5rem, 2.5vw, 2.5rem)',
        transition: 'all 0.4s ease',
        cursor: 'default',
        position: 'relative',
        height: '100%',
        boxSizing: 'border-box',
      }}
    >
      <div style={{ fontFamily: F.sans, fontSize: '0.6rem', letterSpacing: '0.2em', color: C.turquoise, opacity: 0.8, marginBottom: '1.5rem' }}>
        {svc.num}
      </div>

      <h3 style={{ fontFamily: F.display, fontWeight: 800, fontSize: 'clamp(1.3rem, 1.8vw, 1.65rem)', letterSpacing: '0.06em', textTransform: 'uppercase', color: C.white, lineHeight: 1, marginBottom: '5px' }}>
        {svc.title}
      </h3>
      <p style={{ fontFamily: F.serif, fontStyle: 'italic', fontSize: '0.82rem', color: C.white, opacity: 0.36, marginBottom: '1.25rem' }}>
        {svc.subtitle}
      </p>

      <div style={{ width: h ? '40px' : '20px', height: '1px', backgroundColor: h ? C.orange : 'rgba(244,241,234,0.16)', transition: 'all 0.4s ease', marginBottom: '1.25rem' }} />

      <p style={{ fontFamily: F.sans, fontSize: '0.84rem', lineHeight: 1.74, color: C.white, opacity: 0.46, marginBottom: '1.5rem' }}>
        {svc.description}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {svc.tags.map(tag => (
          <span key={tag} style={{ fontFamily: F.sans, fontSize: '0.57rem', letterSpacing: '0.13em', color: C.turquoise, opacity: 0.7, border: '1px solid rgba(70,121,120,0.22)', padding: '4px 10px', textTransform: 'uppercase' }}>
            {tag}
          </span>
        ))}
      </div>

      {h && (
        <div style={{ position: 'absolute', top: '-1px', left: '-1px', width: '26px', height: '26px', borderTop: `2px solid ${C.turquoise}`, borderLeft: `2px solid ${C.turquoise}`, pointerEvents: 'none' }} />
      )}
    </div>
  )
}

function ServicesSection() {
  return (
    <section style={{ backgroundColor: '#0b0b0b', padding: 'clamp(5rem, 8vw, 9rem) clamp(1.5rem, 4vw, 6rem)' }}>
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

const PROJECTS = [
  { id: 1, num: '01', title: 'Nordvik Architecture', category: 'Brand Identity · Web Design', year: '2024', image: 'https://images.unsplash.com/photo-1593466486574-71b38f2ff423?w=1200&h=800&fit=crop&auto=format' },
  { id: 2, num: '02', title: 'Soleil Hospitality',   category: 'Digital Experience',          year: '2024', image: 'https://images.unsplash.com/photo-1773982055675-67bc032d5774?w=800&h=800&fit=crop&auto=format' },
  { id: 3, num: '03', title: 'Meridian Capital',     category: 'Web Design · Branding',       year: '2023', image: 'https://images.unsplash.com/photo-1771814488300-09b4394856b4?w=800&h=800&fit=crop&auto=format' },
  { id: 4, num: '04', title: 'Vertex Studio',        category: 'Creative Direction',          year: '2023', image: 'https://images.unsplash.com/photo-1779384570168-cf04dc968a97?w=1200&h=800&fit=crop&auto=format' },
]

function ProjectCard({ proj }: { proj: typeof PROJECTS[0] }) {
  const [h, setH] = useState(false)

  return (
    <div
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{ position: 'relative', overflow: 'hidden', cursor: 'pointer', backgroundColor: C.graphite }}
    >
      <div style={{ position: 'relative', paddingBottom: '66%', overflow: 'hidden' }}>
        <img
          src={proj.image}
          alt={proj.title}
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
            transform: h ? 'scale(1.05)' : 'scale(1)',
            transition: 'transform 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            filter: 'brightness(0.62) saturate(0.75)',
          }}
        />

        {/* Gradient overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(9,9,9,0.88) 0%, rgba(9,9,9,0.18) 55%, transparent 100%)',
          opacity: h ? 0.92 : 0.72,
          transition: 'opacity 0.4s ease',
        }} />

        {/* Content */}
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 'clamp(1.25rem, 2vw, 2rem)' }}>
          <div style={{ transform: h ? 'translateY(0)' : 'translateY(4px)', transition: 'transform 0.4s ease' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.6rem' }}>
              <span style={{ fontFamily: F.sans, fontSize: '0.6rem', letterSpacing: '0.18em', color: C.white, opacity: 0.42 }}>{proj.num}</span>
              <span style={{ fontFamily: F.sans, fontSize: '0.6rem', letterSpacing: '0.15em', color: C.turquoise, opacity: 0.85, textTransform: 'uppercase' }}>{proj.year}</span>
            </div>
            <h3 style={{ fontFamily: F.display, fontWeight: 900, fontSize: 'clamp(1.25rem, 2.2vw, 1.85rem)', textTransform: 'uppercase', color: C.white, letterSpacing: '0.04em', lineHeight: 1.05, marginBottom: '0.5rem' }}>
              {proj.title}
            </h3>
            <p style={{ fontFamily: F.sans, fontSize: '0.63rem', letterSpacing: '0.14em', color: C.white, opacity: 0.46, textTransform: 'uppercase' }}>
              {proj.category}
            </p>
          </div>
        </div>

        {/* View arrow */}
        <div style={{
          position: 'absolute', top: 'clamp(1rem, 2vw, 1.5rem)', right: 'clamp(1rem, 2vw, 1.5rem)',
          width: '38px', height: '38px', border: '1px solid rgba(244,241,234,0.25)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: C.white, fontSize: '0.85rem',
          opacity: h ? 1 : 0, transform: h ? 'scale(1)' : 'scale(0.75)',
          transition: 'all 0.35s ease',
        }}>
          ↗
        </div>
      </div>
    </div>
  )
}

function PortfolioSection() {
  const [linkH, setLinkH] = useState(false)

  return (
    <section style={{ backgroundColor: '#0b0b0b', padding: 'clamp(5rem, 8vw, 9rem) clamp(1.5rem, 4vw, 6rem)' }}>
      <div
        className="flex flex-col md:flex-row md:items-end justify-between"
        style={{ borderBottom: '1px solid rgba(244,241,234,0.065)', paddingBottom: '2rem', marginBottom: '3.5rem', gap: '1.5rem' }}
      >
        <div>
          <SectionLabel index="03" label="Trabalhos" />
          <SectionHeading>Projetos<br />selecionados</SectionHeading>
        </div>
        <a
          href="#"
          className="hidden md:block"
          onMouseEnter={() => setLinkH(true)}
          onMouseLeave={() => setLinkH(false)}
          style={{ fontFamily: F.sans, fontSize: '0.72rem', letterSpacing: '0.16em', color: C.white, opacity: linkH ? 0.72 : 0.36, textDecoration: 'none', textTransform: 'uppercase', transition: 'opacity 0.3s' }}
        >
          Ver todos →
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {PROJECTS.map(proj => <ProjectCard key={proj.id} proj={proj} />)}
      </div>
    </section>
  )
}

// ─── VALUES ───────────────────────────────────────────────────────────────────

const VALUES = [
  { num: '01', sym: '◈', title: 'Estratégia',    body: 'Cada decisão criativa é fundamentada em análise profunda. Design sem estratégia é apenas decoração.' },
  { num: '02', sym: '◇', title: 'Excelência',    body: 'Não entregamos o suficiente. Entregamos o excepcional. Cada pixel, cada linha de código importa.' },
  { num: '03', sym: '○', title: 'Transparência', body: 'Comunicação clara, prazos honestos e processos abertos. Confiança é a base de tudo o que construímos.' },
  { num: '04', sym: '△', title: 'Criatividade',  body: 'Pensamento original que foge dos clichês. Soluções únicas que fazem sua marca ser verdadeiramente lembrada.' },
  { num: '05', sym: '⬡', title: 'Evolução',      body: 'O mundo digital muda constantemente. Estamos sempre à frente, antecipando e adaptando o que construímos.' },
]

function ValueCard({ val }: { val: typeof VALUES[0] }) {
  const [h, setH] = useState(false)

  return (
    <div
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        padding: 'clamp(1.5rem, 2.5vw, 2.5rem)',
        borderTop: `2px solid ${h ? C.turquoise : 'transparent'}`,
        backgroundColor: h ? 'rgba(70,121,120,0.038)' : 'transparent',
        transition: 'all 0.35s ease',
        height: '100%',
        boxSizing: 'border-box',
      }}
    >
      <div style={{ fontFamily: F.sans, fontSize: '1.35rem', color: C.turquoise, marginBottom: '0.875rem', opacity: h ? 0.9 : 0.52, transition: 'opacity 0.35s' }}>
        {val.sym}
      </div>
      <div style={{ fontFamily: F.sans, fontSize: '0.6rem', letterSpacing: '0.15em', color: C.turquoise, opacity: 0.52, marginBottom: '0.65rem' }}>
        {val.num}
      </div>
      <h3 style={{ fontFamily: F.display, fontWeight: 800, fontSize: 'clamp(1.05rem, 1.6vw, 1.25rem)', textTransform: 'uppercase', color: C.white, letterSpacing: '0.08em', marginBottom: '0.65rem' }}>
        {val.title}
      </h3>
      <div style={{ width: '20px', height: '1px', backgroundColor: h ? C.orange : 'rgba(244,241,234,0.13)', marginBottom: '0.65rem', transition: 'background-color 0.35s' }} />
      <p style={{ fontFamily: F.sans, fontSize: '0.82rem', lineHeight: 1.72, color: C.white, opacity: 0.43 }}>
        {val.body}
      </p>
    </div>
  )
}

function ValuesSection() {
  return (
    <section style={{ backgroundColor: C.black, padding: 'clamp(5rem, 8vw, 9rem) clamp(1.5rem, 4vw, 6rem)' }}>
      <div style={{ marginBottom: '3.5rem' }}>
        <SectionLabel index="04" label="Valores" />
        <SectionHeading>O que nos<br />guia</SectionHeading>
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5"
        style={{ border: '1px solid rgba(244,241,234,0.065)', borderRight: 'none', borderBottom: 'none' }}
      >
        {VALUES.map((val, i) => (
          <div key={i} style={{ borderRight: '1px solid rgba(244,241,234,0.065)', borderBottom: '1px solid rgba(244,241,234,0.065)' }}>
            <ValueCard val={val} />
          </div>
        ))}
      </div>
    </section>
  )
}

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

// ─── FOOTER ───────────────────────────────────────────────────────────────────

function FooterLink({ label }: { label: string }) {
  const [h, setH] = useState(false)
  return (
    <a
      href="#"
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{ fontFamily: F.sans, fontSize: '0.63rem', letterSpacing: '0.15em', color: C.white, opacity: h ? 0.62 : 0.28, textDecoration: 'none', textTransform: 'uppercase', transition: 'opacity 0.3s' }}
    >
      {label}
    </a>
  )
}

function Footer() {
  return (
    <footer style={{ backgroundColor: C.black, borderTop: '1px solid rgba(244,241,234,0.065)', padding: '2.5rem clamp(1.5rem, 4vw, 6rem)' }}>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div style={{ fontFamily: F.display, fontWeight: 900, fontSize: '1.2rem', letterSpacing: '0.14em', color: C.white, marginBottom: '3px' }}>
            ASTERA
          </div>
          <p style={{ fontFamily: F.sans, fontSize: '0.6rem', letterSpacing: '0.14em', color: C.white, opacity: 0.26, textTransform: 'uppercase' }}>
            Creative Studio
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '24px' }}>
          {['Sobre', 'Serviços', 'Trabalhos', 'Processo', 'Contato'].map(item => (
            <FooterLink key={item} label={item} />
          ))}
        </div>

        <p style={{ fontFamily: F.sans, fontSize: '0.6rem', letterSpacing: '0.1em', color: C.white, opacity: 0.2 }}>
          © 2024 ASTERA Studio
        </p>
      </div>
    </footer>
  )
}

// ─── APP ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <div style={{ fontFamily: F.sans, backgroundColor: C.black, color: C.white, overflowX: 'hidden' }}>
      <Nav scrolled={scrolled} />
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
