import type { ReactNode } from 'react'
import SectionLabel from '@/components/ui/SectionLabel'
import SectionHeading from '@/components/ui/SectionHeading'
import { C } from '@/theme/colors'

type SectionHeaderProps = {
  index: string
  label: string
  children: ReactNode
  aside?: ReactNode
}

export default function SectionHeader({
  index,
  label,
  children,
  aside,
}: SectionHeaderProps) {
  const hasAside = Boolean(aside)

  return (
    <div
      className={
        hasAside
          ? 'flex flex-col md:flex-row md:items-end justify-between'
          : undefined
      }
      style={{
        marginBottom: '3.5rem',
        ...(hasAside
          ? {
              borderBottom: `1px solid ${C.lineSubtle}`,
              paddingBottom: '2rem',
              gap: '1.5rem',
            }
          : {}),
      }}
    >
      <div>
        <SectionLabel index={index} label={label} />
        <SectionHeading>{children}</SectionHeading>
      </div>

      {aside}
    </div>
  )
}