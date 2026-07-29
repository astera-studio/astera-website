import { useState } from 'react'
import { C } from '@/theme/colors'
import { F } from '@/theme/fonts'

type HoverButtonProps = {
  variant: 'primary' | 'ghost'
  label: string
  large?: boolean
}

export default function HoverButton({
  variant,
  label,
  large,
}: HoverButtonProps) {
  const [hovered, setHovered] = useState(false)

  const pad = large ? '18px 52px' : '14px 36px'
  const fs = large ? '0.8rem' : '0.75rem'

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
        border: `1px solid ${
          hovered
            ? 'rgba(244,241,234,0.42)'
            : 'rgba(244,241,234,0.18)'
        }`,
        cursor: 'pointer',
        transition: 'all 0.35s ease',
        display: 'inline-block',
      }}
    >
      {label}
    </button>
  )
}