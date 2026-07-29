import { ReactNode } from 'react'
import { C } from '@/theme/colors'
import { F } from '@/theme/fonts'

type SectionHeadingProps = {
  children: ReactNode
}

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2
      style={{
        fontFamily: F.display,
        fontWeight: 900,
        fontSize: 'clamp(2.2rem, 4vw, 4.8rem)',
        textTransform: 'uppercase',
        color: C.white,
        lineHeight: 0.91,
        letterSpacing: '-0.01em',
      }}
    >
      {children}
    </h2>
  )
}