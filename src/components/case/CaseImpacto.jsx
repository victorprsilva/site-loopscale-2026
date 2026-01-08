import { ChevronRight } from 'lucide-react'
import { FadeIn, FadeInStagger, FadeInStaggerItem } from '../animations/FadeIn'

export default function CaseImpacto() {
  const metrics = [
    { value: "+R$250 milhões", desc: "em vendas geradas para nossos clientes" },
    { value: "+100 operações", desc: "estruturadas com o método da Máquina de Receita" },
    { value: "30%", desc: "de aumento médio em conversão nos primeiros 90 dias" },
    { value: "NPS9,4", desc: "nas consultorias aplicadas" }
  ]

  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-[120px]">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-[198px]">
        <FadeIn>
          <h2 className="text-black text-[28px] md:text-[36px] lg:text-[42px] font-inter font-bold italic leading-[1.1] tracking-[-0.84px] mb-16 md:mb-[197px] max-w-[366px]">
            Impacto que sua empresa pode sentir.
          </h2>
        </FadeIn>

        <FadeInStagger staggerDelay={0.1} className="flex flex-col md:flex-row md:items-start mb-16 md:mb-[100px]">
          {metrics.map((metric, index) => (
            <FadeInStaggerItem key={index} className="flex items-start flex-1">
              <div className="flex-1 pr-4 md:pr-8">
                <p className="text-black text-[24px] md:text-[32px] lg:text-[36px] font-inter font-normal leading-tight mb-3">
                  {metric.value}
                </p>
                <p className="text-[#615F5F] text-[13px] md:text-[14px] font-inter leading-[1.5] max-w-[260px]">
                  {metric.desc}
                </p>
              </div>
              {index < metrics.length - 1 && (
                <div className="hidden md:block w-[1px] h-[104px] bg-gray-300 mr-4 md:mr-8 lg:mr-12"></div>
              )}
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>

        <FadeIn delay={0.4}>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-[719px]">
              <p className="text-black text-[24px] md:text-[32px] lg:text-[40px] font-inter font-bold italic leading-[1.25]">
                <span className="text-loopscale-blue">Esses números</span> não são promessas. São o resultado natural de uma empresa que tem processo, cultura de análise e acompanhamento de verdade.
              </p>
            </div>
            
            <a 
              href="#contato" 
              className="relative overflow-hidden bg-loopscale-blue text-white px-[23px] py-[14px] h-[48px] flex items-center justify-center gap-[10px] font-inter text-[14px] tracking-[0.84px] w-full lg:w-auto group flex-shrink-0"
            >
              <span 
                className="absolute inset-0 bg-loopscale-blue-dark transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"
                aria-hidden="true"
              />
              <span className="relative z-10 flex items-center gap-[10px] whitespace-nowrap">
                Quero aprender como aplicar na minha empresa
                <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
