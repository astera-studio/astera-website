import type { ReactNode } from 'react'
import { C, F } from '@/theme'

type SectionHeadingProps = {
  children: ReactNode
}

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2
      style={{
        fontFamily: F.heading,
        fontWeight: 900,
        fontSize: 'clamp(2.2rem, 4vw, 4.8rem)',
        textTransform: 'uppercase',
        color: C.textPrimary,
        lineHeight: 0.91,
        letterSpacing: '-0.01em',
      }}
    >
      {children}
    </h2>
  )
}
