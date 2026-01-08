import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { FadeIn } from '../animations/FadeIn'

export default function HomeSection8() {
  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-24">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 xl:px-[201px]">
        <FadeIn className="text-center max-w-[800px] mx-auto">
          <h2 className="text-black text-[28px] md:text-[36px] lg:text-[42px] font-inter font-bold leading-tight mb-6">
            Fechamento com postura de autoridade e tranquilidade:
          </h2>
          <p className="text-[#615F5F] text-[16px] md:text-[18px] font-inter leading-[1.6] mb-4">
            Se fizer sentido para os dois lados, seguimos juntos.
          </p>
          <p className="text-[#615F5F] text-[14px] md:text-[16px] font-inter leading-[1.6] mb-8">
            Se não fizer, você sai com um plano que vale muito mais do que o seu tempo de preenchimento.
          </p>
          <Link 
            to="/contato"
            className="relative overflow-hidden inline-flex bg-loopscale-blue text-white px-5 py-4 items-center gap-[10px] font-inter text-[14px] tracking-[0.84px] group"
          >
            <span 
              className="absolute inset-0 bg-loopscale-blue-dark transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"
              aria-hidden="true"
            />
            <span className="relative z-10 flex items-center gap-[10px]">
              Quero aprender como aplicar na minha empresa
              <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}
