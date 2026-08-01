import { C } from '@/theme/colors'
import { F } from '@/theme/fonts'
import { FooterLink } from './FooterLink'

export function Footer() {
  return (
    <footer style={{ backgroundColor: C.black, borderTop: '1px solid rgba(244,241,234,0.065)', padding: '2.5rem clamp(1.5rem, 4vw, 6rem)' }}>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div style={{ fontFamily: F.display, fontWeight: 900, fontSize: '1.2rem', letterSpacing: '0.14em', color: C.white, marginBottom: '3px' }}>
            ASTERA
          </div>
          <p style={{ fontFamily: F.sans, fontSize: '0.6rem', letterSpacing: '0.14em', color: C.white, opacity: 0.26, textTransform: 'uppercase' }}>
            Creative Studio
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '24px' }}>
          {['Sobre', 'Serviços', 'Trabalhos', 'Processo', 'Contato'].map(item => (
            <FooterLink key={item} label={item} />
          ))}
        </div>

        <p style={{ fontFamily: F.sans, fontSize: '0.6rem', letterSpacing: '0.1em', color: C.white, opacity: 0.2 }}>
          © 2024 ASTERA Studio
        </p>
      </div>
    </footer>
  )
}
