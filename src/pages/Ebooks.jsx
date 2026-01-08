import Header from '../components/Header'
import Footer from '../components/Footer'
import EbooksHero from '../components/ebooks/EbooksHero'

export default function Ebooks() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <EbooksHero />
      </main>
      <Footer />
    </div>
  )
}
