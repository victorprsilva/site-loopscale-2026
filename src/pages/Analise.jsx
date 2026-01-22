import SEO from '../components/SEO'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AnaliseHero from '../components/analise/AnaliseHero'
import AnaliseBanner from '../components/analise/AnaliseBanner'
import AnaliseDiagnostico from '../components/analise/AnaliseDiagnostico'
import AnaliseIndicadores from '../components/analise/AnaliseIndicadores'
import AnaliseDashboards from '../components/analise/AnaliseDashboards'
import AnaliseRotina from '../components/analise/AnaliseRotina'
import AnaliseIntegracao from '../components/analise/AnaliseIntegracao'
import AnaliseAutomacao from '../components/analise/AnaliseAutomacao'

export default function Analise() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Análise de Dados"
        description="Transforme dados em decisões estratégicas. Dashboards personalizados, análise de métricas e integração de sistemas para uma visão completa do seu negócio."
        canonical="https://loopscale.com.br/analise"
      />
      <Header />
      <main className="flex-1">
        <AnaliseHero />
        <AnaliseBanner />
        <AnaliseDiagnostico />
        <AnaliseIndicadores />
        <AnaliseDashboards />
        <AnaliseRotina />
        <AnaliseIntegracao />
        <AnaliseAutomacao />
      </main>
      <Footer />
    </div>
  )
}
