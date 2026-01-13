import SEO from '../components/SEO'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContatoHero from '../components/contato/ContatoHero'

export default function Contato() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Contato"
        description="Entre em contato com a Loop Scale e descubra como podemos estruturar sua operação de marketing, vendas e atendimento para escalar com previsibilidade."
      />
      <Header />
      <main className="flex-1">
        <ContatoHero />
      </main>
      <Footer />
    </div>
  )
}
