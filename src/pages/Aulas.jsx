import HeaderCase from '../components/case/HeaderCase'
import Footer from '../components/Footer'
import AulasHero from '../components/aulas/AulasHero'
import AulasGrid from '../components/aulas/AulasGrid'

export default function Aulas() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeaderCase />
      <main className="flex-1">
        <AulasHero />
        <AulasGrid />
      </main>
      <Footer />
    </div>
  )
}
