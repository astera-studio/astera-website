import { useEffect, useState } from 'react'
import { C, F, S } from '@/theme'
import { NavLink } from './NavLink'
import asteraLogo from '@/assets/brand/astera-logo-light.svg'

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
        <a
          href="#"
          aria-label="Astera"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            flexShrink: 0,
          }}
        >
          <img
            src={asteraLogo}
            alt="Astera"
            style={{
              display: 'block',
              width: 'clamp(120px, 12vw, 150px)',
              height: 'auto',
              userSelect: 'none',
              pointerEvents: 'none',
            }}
          />
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {['Sobre', 'Serviços', 'Trabalhos', 'Processo', 'Contato'].map(item => (
            <NavLink key={item} label={item} />
          ))}
        </div>

        <button
          type="button"
          className="hidden lg:block"
          onMouseEnter={() => setCtaHovered(true)}
          onMouseLeave={() => setCtaHovered(false)}
          onFocus={() => setCtaHovered(true)}
          onBlur={() => setCtaHovered(false)}
          style={{
            fontFamily: F.body,
            fontSize: '0.68rem',
            fontWeight: 600,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: ctaHovered ? C.canvas : C.accentPrimary,
            backgroundColor: ctaHovered ? C.accentPrimary : 'transparent',
            border: `1px solid rgba(232,106,51,0.4)`,
            padding: '10px clamp(16px, 1.5vw, 22px)',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease, color 0.3s ease',
          }}
        >
          Iniciar Projeto →
        </button>
      </div>
    </nav>
  )
}
