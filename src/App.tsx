import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { AboutSection } from '@/components/sections/AboutSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { PortfolioSection } from '@/components/sections/PortfolioSection'
import { ValuesSection } from '@/components/sections/ValuesSection'
import { ProcessSection } from '@/components/sections/ProcessSection'
import { CtaSection } from '@/components/sections/CtaSection'
import { HeroSection } from '@/components/sections/HeroSection'
import { C } from '@/theme/colors'
import { F } from '@/theme/fonts'

export default function App() {
  return (
    <div style={{ fontFamily: F.sans, backgroundColor: C.canvas, color: C.textPrimary, overflowX: 'hidden' }}>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <PortfolioSection />
      <ValuesSection />
      <CtaSection />
      <Footer />
    </div>
  )
}
