import { useState } from 'react'
import { C, F } from '@/theme'

type FooterLinkProps = {
  label: string
}

export function FooterLink({ label }: FooterLinkProps) {
  const [h, setH] = useState(false)

  return (
    <a
      href="#"
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{ fontFamily: F.body, fontSize: '0.63rem', letterSpacing: '0.15em', color: C.textPrimary, opacity: h ? 0.62 : 0.28, textDecoration: 'none', textTransform: 'uppercase', transition: 'opacity 0.3s' }}
    >
      {label}
    </a>
  )
}
