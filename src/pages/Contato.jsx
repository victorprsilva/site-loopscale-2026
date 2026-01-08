import Header from '../components/Header'
import Footer from '../components/Footer'
import ContatoHero from '../components/contato/ContatoHero'

export default function Contato() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <ContatoHero />
      </main>
      <Footer />
    </div>
  )
}
