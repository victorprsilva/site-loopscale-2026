import SEO from '../components/SEO'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AtendimentoHero from '../components/atendimento/AtendimentoHero'
import AtendimentoBanner from '../components/atendimento/AtendimentoBanner'
import AtendimentoDiagnostico from '../components/atendimento/AtendimentoDiagnostico'
import AtendimentoFluxos from '../components/atendimento/AtendimentoFluxos'
import AtendimentoManual from '../components/atendimento/AtendimentoManual'
import AtendimentoIntegracao from '../components/atendimento/AtendimentoIntegracao'
import AtendimentoMetricas from '../components/atendimento/AtendimentoMetricas'
import AtendimentoTreinamento from '../components/atendimento/AtendimentoTreinamento'

export default function Atendimento() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Atendimento ao Cliente"
        description="Estruture um atendimento que fideliza e gera resultados. Processos claros, treinamento de equipe e sistemas integrados para uma experiência excepcional ao cliente."
        canonical="https://loopscale.com.br/atendimento"
      />
      <Header />
      <main className="flex-1">
        <AtendimentoHero />
        <AtendimentoBanner />
        <AtendimentoDiagnostico />
        <AtendimentoFluxos />
        <AtendimentoManual />
        <AtendimentoIntegracao />
        <AtendimentoMetricas />
        <AtendimentoTreinamento />
      </main>
      <Footer />
    </div>
  )
}
