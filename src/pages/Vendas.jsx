import SEO from '../components/SEO'
import Header from '../components/Header'
import Footer from '../components/Footer'
import VendasHero from '../components/vendas/VendasHero'
import VendasBanner from '../components/vendas/VendasBanner'
import VendasPratica from '../components/vendas/VendasPratica'
import VendasPlaybook from '../components/vendas/VendasPlaybook'
import VendasMetas from '../components/vendas/VendasMetas'
import VendasTreinamento from '../components/vendas/VendasTreinamento'
import VendasIntegracao from '../components/vendas/VendasIntegracao'

export default function Vendas() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Vendas Estruturadas"
        description="Transforme sua equipe comercial com processos claros, playbooks de vendas e metas realistas. Estruture uma operação de vendas que escala com previsibilidade."
        canonical="https://loopscale.com.br/vendas"
      />
      <Header />
      <main className="flex-1">
        <VendasHero />
        <VendasBanner />
        <VendasPratica />
        <VendasPlaybook />
        <VendasMetas />
        <VendasTreinamento />
        <VendasIntegracao />
      </main>
      <Footer />
    </div>
  )
}
