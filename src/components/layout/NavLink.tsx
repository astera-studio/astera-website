import { useState } from 'react'
import { C, F } from '@/theme'

type NavLinkProps = {
  label: string
}

export function NavLink({ label }: NavLinkProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href="#"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      style={{
        fontFamily: F.sans,
        fontSize: '0.72rem',
        fontWeight: 500,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: hovered ? C.turquoise : C.white,
        opacity: hovered ? 1 : 0.9,
        transition: 'color .25s ease, opacity .25s ease',
      }}
    >
      {label}
    </a>
  )
}
