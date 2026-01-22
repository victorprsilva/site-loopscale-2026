import SEO from '../components/SEO'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContatoHero from '../components/contato/ContatoHero'

export default function Contato() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Contato"
        description="Entre em contato com a Loop Scale. Agende uma conversa para entender como podemos ajudar sua empresa a crescer com processos estruturados e resultados previsíveis."
        canonical="https://loopscale.com.br/contato"
      />
      <Header />
      <main className="flex-1">
        <ContatoHero />
      </main>
      <Footer />
    </div>
  )
}
