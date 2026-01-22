import { ChevronRight } from 'lucide-react'
import { FadeIn, FadeInStagger, FadeInStaggerItem } from '../animations/FadeIn'
import falarComEquipeImg from '../../img/lp/falar-com-equipe.webp'

export default function LPDesafios() {
  const desafios = [
    {
      number: "01",
      text: "Não sabe por onde começar no Marketing Digital"
    },
    {
      number: "02",
      text: "Já investiu em redes sociais ou Google Ads, mas não teve retorno"
    },
    {
      number: "03",
      text: "Está cansado de agências que prometem demais e entregam de menos"
    },
    {
      number: "04",
      text: "Perde oportunidades porque não tem uma estratégia completa rodando"
    }
  ]

  return (
    <section className="w-full bg-black py-12 md:py-16 lg:py-24">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-[212px]">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          <div className="lg:w-[45%]">
            <FadeIn>
              <h2 className="text-white text-[28px] md:text-[36px] lg:text-[48px] xl:text-[56px] font-inter font-bold leading-[1.1] tracking-[-1px] md:tracking-[-2px] mb-8 md:mb-12">
                Você sabe que precisa anunciar, mas enfrenta desafios como:
              </h2>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="mt-12 md:mt-16 flex flex-col items-center lg:items-start">
                <img 
                  src={falarComEquipeImg} 
                  alt="Fale com nossa equipe" 
                  className="w-full max-w-[300px] md:max-w-[400px] h-auto mb-8"
                />
                <h3 className="text-loopscale-blue text-[20px] md:text-[24px] font-inter font-medium mb-6 text-center lg:text-left">
                  Nós entramos justamente aí.
                </h3>
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="relative overflow-hidden inline-flex items-center gap-2 bg-loopscale-blue text-white px-6 py-4 font-inter text-[14px] tracking-[0.84px] transition-colors duration-300 group"
                >
                  <span 
                    className="absolute inset-0 bg-loopscale-blue-dark transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"
                    aria-hidden="true"
                  />
                  <span className="relative z-10 flex items-center gap-2">
                    Fale com nossa equipe
                    <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </button>
              </div>
            </FadeIn>
          </div>

          <div className="lg:w-[55%]">
            <FadeInStagger staggerDelay={0.1}>
              {desafios.map((desafio, index) => (
                <FadeInStaggerItem key={index}>
                  <div className="border-b border-gray-700 py-8 md:py-10">
                    <div className="flex items-start gap-6 md:gap-8">
                      <span className="text-loopscale-blue text-[14px] md:text-[16px] font-inter font-medium">
                        {desafio.number}
                      </span>
                      <p className="text-white text-[18px] md:text-[22px] lg:text-[26px] font-inter font-medium leading-[1.3]">
                        {desafio.text}
                      </p>
                    </div>
                  </div>
                </FadeInStaggerItem>
              ))}
            </FadeInStagger>
          </div>
        </div>
      </div>
    </section>
  )
}
