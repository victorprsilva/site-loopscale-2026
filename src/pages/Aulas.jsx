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
        description="Assista nossas aulas gratuitas sobre marketing, vendas e crescimento empresarial. Conteúdo prático e direto ao ponto para aplicar no seu negócio."
        canonical="https://loopscale.com.br/aulas"
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
