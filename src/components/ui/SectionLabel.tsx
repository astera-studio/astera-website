import { C } from '@/theme/colors'
import { F } from '@/theme/fonts'

function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <p
      style={{
        fontFamily: F.eyebrow,
        fontSize: '0.62rem',
        letterSpacing: '0.28em',
        color: C.turquoise,
        textTransform: 'uppercase',
        marginBottom: '0.75rem',
      }}
    >
      {index} — {label}
    </p>
  )
}

export default SectionLabel

