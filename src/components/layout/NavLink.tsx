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
      style={{
        fontFamily: F.body,
        color: C.textPrimary,
        fontSize: '0.7rem',
        letterSpacing: '0.16em',
        opacity: hovered ? 0.9 : 0.42,
        textDecoration: 'none',
        textTransform: 'uppercase',
        transition: 'opacity 0.3s',
      }}
    >
      {label}
    </a>
  )
}