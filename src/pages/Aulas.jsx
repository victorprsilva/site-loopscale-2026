import SEO from '../components/SEO'
import HeaderCase from '../components/case/HeaderCase'
import Footer from '../components/Footer'
import AulasHero from '../components/aulas/AulasHero'
import AulasGrid from '../components/aulas/AulasGrid'

export default function Aulas() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Aulas e Vídeos"
        description="Assista às aulas gratuitas do canal Loop Scale no YouTube. Aprenda sobre tráfego pago, marketing digital e estratégias de crescimento empresarial."
      />
      <HeaderCase />
      <main className="flex-1">
        <AulasHero />
        <AulasGrid />
      </main>
      <Footer />
    </div>
  )
}
