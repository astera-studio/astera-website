import { useEffect, useState } from 'react'
import { C } from '@/theme/colors'
import { F } from '@/theme/fonts'
import { S } from '@/theme/spacing'
import { NavLink } from './NavLink'

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [ctaHovered, setCtaHovered] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

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
        style={{ height: '72px', padding: `0 ${S.pageGutter}` }}
      >
        <div style={{ fontFamily: F.heading, fontWeight: 900, fontSize: '1.25rem', letterSpacing: '0.14em', color: C.textPrimary }}>
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
            fontFamily: F.body,
            fontSize: '0.68rem',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: ctaHovered ? C.canvas : C.accentPrimary,
            backgroundColor: ctaHovered ? C.accentPrimary : 'transparent',
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
