import { ChevronRight } from 'lucide-react'
import { FadeIn, FadeInStagger, FadeInStaggerItem } from '../animations/FadeIn'

export default function VendasTreinamento() {
  const items = [
    "Reuniões semanais de alinhamento e análise de dados",
    "",
    "",
    "Feedback individual com base em performance real"
  ]

  return (
    <section className="w-full bg-black py-12 md:py-16 lg:py-24">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-[200px]">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-12 md:mb-16">
          <div className="max-w-[502px]">
            <FadeIn>
              <h2 className="text-white text-[28px] md:text-[36px] lg:text-[48px] font-inter font-normal leading-tight tracking-[-0.84px] md:tracking-[-1.44px] mb-8 md:mb-10">
                Treinamento e rituais de performance
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-[#a0a0a0] text-[15px] md:text-[16px] lg:text-[18px] font-inter leading-[1.7] mb-6">
                Nada muda se o time não estiver junto no processo.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-loopscale-blue text-[15px] md:text-[16px] lg:text-[18px] font-inter leading-[1.6] underline">
                Por isso, criamos uma rotina de acompanhamento com:
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.3}>
            <a 
              href="#contato" 
              className="relative overflow-hidden bg-loopscale-blue text-white px-5 py-3 md:px-[20px] md:py-[16px] h-auto md:h-[53px] flex items-center justify-center gap-[10px] font-inter text-[14px] tracking-[0.84px] w-full lg:w-auto group"
            >
              <span 
                className="absolute inset-0 bg-loopscale-blue-dark transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"
                aria-hidden="true"
              />
              <span className="relative z-10 flex items-center gap-[10px]">
                Fale com nossa equipe
                <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </a>
          </FadeIn>
        </div>

        <FadeInStagger staggerDelay={0.1} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {items.map((item, index) => (
            <FadeInStaggerItem key={index}>
              <div className="bg-white p-6 md:p-8 min-h-[180px] md:min-h-[220px] flex flex-col justify-end relative">
                <div className="absolute top-6 left-6 w-[40px] h-[3px] bg-loopscale-blue"></div>
                {item && (
                  <p className="text-black text-[14px] md:text-[16px] font-inter font-medium leading-[1.4]">
                    {item}
                  </p>
                )}
              </div>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  )
}
