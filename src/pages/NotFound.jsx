import { Link } from 'react-router-dom'
import { Home, ArrowLeft } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { FadeIn } from '../components/animations/FadeIn'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center px-6 pt-[120px] pb-20">
        <FadeIn className="text-center max-w-[600px]">
          <h1 className="text-[120px] md:text-[180px] lg:text-[220px] font-inter font-bold text-loopscale-blue leading-none mb-4">
            404
          </h1>
          
          <h2 className="text-white text-[24px] md:text-[32px] lg:text-[40px] font-inter font-normal leading-tight tracking-[-0.84px] mb-6">
            Página não encontrada
          </h2>
          
          <p className="text-gray-400 text-[14px] md:text-[16px] font-inter leading-[1.6] mb-10">
            A página que você está procurando não existe ou foi movida para outro endereço.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/"
              className="inline-flex items-center justify-center gap-2 bg-loopscale-blue text-white px-8 py-4 rounded-lg text-[14px] font-inter font-medium hover:bg-loopscale-blue/90 transition-colors"
            >
              <Home size={18} />
              Voltar ao Início
            </Link>
            
            <button 
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-2 border border-gray-600 text-white px-8 py-4 rounded-lg text-[14px] font-inter font-medium hover:border-white transition-colors"
            >
              <ArrowLeft size={18} />
              Página Anterior
            </button>
          </div>
        </FadeIn>
      </main>
      
      <Footer />
    </div>
  )
}
