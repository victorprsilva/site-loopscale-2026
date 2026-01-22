import SEO from '../components/SEO'
import LPHeader from '../components/lp/LPHeader'
import LPFooter from '../components/lp/LPFooter'
import LPHero from '../components/lp/LPHero'
import LPVideo from '../components/lp/LPVideo'
import LPResultados from '../components/lp/LPResultados'
import LPDesafios from '../components/lp/LPDesafios'
import LPConsultoria from '../components/lp/LPConsultoria'
import LPExtras from '../components/lp/LPExtras'
import LPJoao from '../components/lp/LPJoao'
import LPFAQ from '../components/lp/LPFAQ'

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Agência de Marketing Digital | Loop Scale"
        description="Agência de Marketing Digital para empresas que querem crescer com previsibilidade. Estrutura completa de marketing digital em até 30 dias. Tráfego pago, SEO e conteúdo alinhados."
        canonical="https://loopscale.com.br/agencia-de-marketing-digital"
      />
      <LPHeader />
      <main className="flex-1">
        <LPHero />
        <LPVideo />
        <LPResultados />
        <LPDesafios />
        <LPConsultoria />
        <LPExtras />
        <LPJoao />
        <LPFAQ />
      </main>
      <LPFooter />
    </div>
  )
}
