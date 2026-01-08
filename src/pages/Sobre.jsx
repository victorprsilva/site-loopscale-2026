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
