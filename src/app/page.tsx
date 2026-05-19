import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Benefits from '@/components/Benefits'
import Modules from '@/components/Modules'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import Integrations from '@/components/Integrations'
import SobreNos from '@/components/SobreNos'
import MissaoValores from '@/components/MissaoValores'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Modules />
        <Features />
        <HowItWorks />
        <Integrations />
        <SobreNos />
        <MissaoValores />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
