import SEO from '../components/SEO'
import HeaderCase from '../components/case/HeaderCase'
import Footer from '../components/Footer'
import CaseHero from '../components/case/CaseHero'
import CaseImpacto from '../components/case/CaseImpacto'

export default function Case() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Cases de Sucesso"
        description="Conheça os resultados que geramos: +R$250 milhões em vendas, +100 operações estruturadas e 30% de aumento médio em conversão nos primeiros 90 dias."
      />
      <HeaderCase />
      <main className="flex-1">
        <CaseHero />
        <CaseImpacto />
      </main>
      <Footer />
    </div>
  )
}
