import SEO from '../components/SEO'
import Header from '../components/Header'
import Footer from '../components/Footer'
import EbooksHero from '../components/ebooks/EbooksHero'

export default function Ebooks() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Ebooks Gratuitos"
        description="Baixe nossos ebooks gratuitos sobre marketing, vendas e crescimento empresarial. Conteúdo prático baseado em mais de 15 anos de experiência no mercado."
        canonical="https://loopscale.com.br/ebooks"
      />
      <Header />
      <main className="flex-1">
        <EbooksHero />
      </main>
      <Footer />
    </div>
  )
}
