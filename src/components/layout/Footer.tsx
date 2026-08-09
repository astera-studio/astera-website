import { C, F, S } from '@/theme'
import { FooterLink } from './FooterLink'

export function Footer() {
  return (
    <footer style={{ backgroundColor: C.canvas, borderTop: `1px solid ${C.lineSubtle}`, padding: `2.5rem ${S.pageGutter}` }}>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div style={{fontFamily: F.heading, fontWeight: 900, fontSize: '1.2rem', letterSpacing: '0.14em', color: C.textPrimary, marginBottom: '3px' }}>
            ASTERA
          </div>
          <p style={{fontFamily: F.micro, fontSize: '0.62rem', fontWeight: 500, letterSpacing: '0.12em', color: C.textPrimary, opacity: 0.48, textTransform: 'uppercase' }}>
            Independent Creative Studio
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '24px' }}>
          {['Sobre', 'Serviços', 'Trabalhos', 'Processo', 'Contato'].map(item => (
            <FooterLink key={item} label={item} />
          ))}
        </div>

        <p style={{ fontFamily: F.micro, fontSize: '0.62rem', fontWeight: 500, letterSpacing: '0.08em', color: C.textPrimary, opacity: 0.44 }}>
          © 2026 ASTERA
        </p>
      </div>
    </footer>
  )
}
