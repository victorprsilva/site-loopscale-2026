import SEO from '../components/SEO'
import HeaderCase from '../components/case/HeaderCase'
import Footer from '../components/Footer'
import HomeHero from '../components/home/HomeHero'
import HomeSection2 from '../components/home/HomeSection2'
import HomeSection3 from '../components/home/HomeSection3'
import HomeSection4 from '../components/home/HomeSection4'
import HomeSection5 from '../components/home/HomeSection5'
import HomeSection6 from '../components/home/HomeSection6'
import HomeSection7 from '../components/home/HomeSection7'
import HomeDiagnostico from '../components/home/HomeDiagnostico'
import HomeSection8 from '../components/home/HomeSection8'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Consultoria de Crescimento Empresarial"
        description="A Loop Scale é especialista em estruturar operações de marketing, vendas e atendimento para empresas que faturam e querem escalar com previsibilidade. Mais de 15 anos de experiência e R$250 milhões em vendas geradas."
        canonical="https://loopscale.com.br/"
      />
      <HeaderCase />
      <main className="flex-1">
        <HomeHero />
        <HomeSection2 />
        <HomeSection3 />
        <HomeSection4 />
        <HomeSection5 />
        <HomeSection6 />
        <HomeSection7 />
        <HomeDiagnostico />
        <HomeSection8 />
      </main>
      <Footer />
    </div>
  )
}
