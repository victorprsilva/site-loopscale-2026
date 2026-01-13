import SEO from '../components/SEO'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AboutHero from '../components/AboutHero'
import AboutInfinity from '../components/AboutInfinity'
import AboutMission from '../components/AboutMission'
import AboutTarget from '../components/AboutTarget'
import AboutImpact from '../components/AboutImpact'
import AboutWhoWeAre from '../components/AboutWhoWeAre'

export default function Sobre() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Sobre Nós"
        description="Conheça a Loop Scale: mais de 15 anos de experiência em marketing, vendas e crescimento empresarial. Somos o parceiro que entra no jogo com você para construir uma máquina de receita previsível."
      />
      <Header />
      <main className="flex-1">
        <AboutHero />
        <AboutInfinity />
        <AboutMission />
        <AboutTarget />
        <AboutImpact />
        <AboutWhoWeAre />
      </main>
      <Footer />
    </div>
  )
}
