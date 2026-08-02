import { C } from '@/theme/colors'
import { F } from '@/theme/fonts'
import { S } from '@/theme/spacing'
import { FooterLink } from './FooterLink'

export function Footer() {
  return (
    <footer style={{ backgroundColor: C.canvas, borderTop: `1px solid ${C.lineSubtle}`, padding: `2.5rem ${S.pageGutter}` }}>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div style={{fontFamily: F.heading, fontWeight: 900, fontSize: '1.2rem', letterSpacing: '0.14em', color: C.textPrimary, marginBottom: '3px' }}>
            ASTERA
          </div>
          <p style={{fontFamily: F.micro, fontSize: '0.6rem', letterSpacing: '0.14em', color: C.white, opacity: 0.26, textTransform: 'uppercase' }}>
            Creative Studio
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '24px' }}>
          {['Sobre', 'Serviços', 'Trabalhos', 'Processo', 'Contato'].map(item => (
            <FooterLink key={item} label={item} />
          ))}
        </div>

        <p style={{ fontFamily: F.micro, fontSize: '0.6rem', letterSpacing: '0.1em', color: C.textPrimary, opacity: 0.2 }}>
          © 2024 ASTERA Studio
        </p>
      </div>
    </footer>
  )
}
