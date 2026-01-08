import HeaderCase from '../components/case/HeaderCase'
import Footer from '../components/Footer'
import CaseHero from '../components/case/CaseHero'
import CaseImpacto from '../components/case/CaseImpacto'

export default function Case() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeaderCase />
      <main className="flex-1">
        <CaseHero />
        <CaseImpacto />
      </main>
      <Footer />
    </div>
  )
}
