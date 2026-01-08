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
