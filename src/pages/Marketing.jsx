import SEO from '../components/SEO'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MarketingHero from '../components/marketing/MarketingHero'
import MarketingBanner from '../components/marketing/MarketingBanner'
import MarketingDiagnostico from '../components/marketing/MarketingDiagnostico'
import MarketingPlanejamento from '../components/marketing/MarketingPlanejamento'
import MarketingDiferencial from '../components/marketing/MarketingDiferencial'
import MarketingAcompanhamento from '../components/marketing/MarketingAcompanhamento'
import MarketingEstrutura from '../components/marketing/MarketingEstrutura'

export default function Marketing() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Marketing Integrado"
        description="Estruture seu marketing com processos claros, métricas reais e geração de demanda qualificada. Diagnóstico completo, implementação de CRM e automação para resultados previsíveis."
        canonical="https://loopscale.com.br/marketing"
      />
      <Header />
      <main className="flex-1">
        <MarketingHero />
        <MarketingBanner />
        <MarketingDiagnostico />
        <MarketingPlanejamento />
        <MarketingDiferencial />
        <MarketingAcompanhamento />
        <MarketingEstrutura />
      </main>
      <Footer />
    </div>
  )
}
