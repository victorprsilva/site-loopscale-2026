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
        description="Conheça os resultados reais de empresas que transformaram suas operações com a Loop Scale. Mais de 100 empresas atendidas e R$250 milhões em vendas geradas."
        canonical="https://loopscale.com.br/case"
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
