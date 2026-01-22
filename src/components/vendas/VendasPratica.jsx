import { useState, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { FadeIn } from '../animations/FadeIn'

export default function VendasPratica() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const sliderRef = useRef(null)

  const cards = [
    { title: "Entrevista com stakeholders de marketing e vendas" },
    { title: "Leitura crítica da copy atual (campanhas, landing pages, redes, etc.)" },
    { title: "Avaliação da coerência entre proposta de valor e experiência real" },
    { title: "Entrevista com stakeholders de marketing e vendas" },
    { title: "Leitura crítica da copy atual (campanhas, landing pages, redes, etc.)" },
    { title: "Esse raio-X mostra onde estão os furos — e qual parte do processo precisa ser corrigida primeiro." }
  ]

  const cardWidth = 340

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -340, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 340, behavior: 'smooth' })
    }
  }

  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-24">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-[212px]">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 mb-12 md:mb-16">
          <FadeIn>
            <h2 className="text-black text-[28px] md:text-[36px] lg:text-[48px] font-inter font-normal leading-tight tracking-[-0.84px] md:tracking-[-1.44px] max-w-[400px]">
              O que fazemos na prática:
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.2} className="max-w-[530px]">
            <p className="text-black text-[16px] md:text-[18px] lg:text-[20px] font-inter font-medium leading-[1.5] mb-4">
              Diagnóstico do processo comercial atual
            </p>
            <p className="text-[#615F5F] text-[15px] md:text-[16px] lg:text-[18px] font-inter leading-[1.7]">
              Tudo começa entendendo como sua empresa vende hoje — e por que isso não está funcionando.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.3}>
          <p className="text-black text-[15px] md:text-[16px] lg:text-[18px] font-inter leading-[1.6] mb-8">
            A gente faz um mapeamento completo da operação de vendas, levantando:
          </p>
        </FadeIn>

        <div className="flex items-center justify-end gap-4 mb-6">
          <button 
            onClick={scrollLeft}
            className="p-2 hover:bg-gray-100 transition-colors rounded-full"
            aria-label="Anterior"
          >
            <ChevronLeft size={24} className="text-black" />
          </button>
          <button 
            onClick={scrollRight}
            className="p-2 hover:bg-gray-100 transition-colors rounded-full"
            aria-label="Próximo"
          >
            <ChevronRight size={24} className="text-black" />
          </button>
        </div>

        <div 
          ref={sliderRef}
          className="flex gap-4 md:gap-5 overflow-x-auto scrollbar-hide pb-4 -mx-6 px-6 md:-mx-12 md:px-12 lg:-mx-24 lg:px-24 xl:-mx-[212px] xl:px-[212px]"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {cards.map((card, index) => (
            <motion.div 
              key={index}
              className="bg-loopscale-blue p-8 md:p-10 w-[300px] md:w-[340px] h-[280px] md:h-[320px] flex items-start flex-shrink-0"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <p className="text-white text-[14px] md:text-[16px] font-inter font-medium leading-[1.5]">
                {card.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
