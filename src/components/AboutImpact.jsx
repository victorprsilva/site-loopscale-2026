import { ChevronRight } from 'lucide-react'
import { FadeIn, FadeInStagger, FadeInStaggerItem } from './animations/FadeIn'

export default function AboutImpact() {
  const metrics = [
    {
      value: "+R$250 milhões",
      description: "em vendas geradas para nossos clientes"
    },
    {
      value: "+100 operações",
      description: "estruturadas com o método da Máquina de Receita"
    },
    {
      value: "30%",
      description: "de aumento médio em conversão nos primeiros 90 dias"
    },
    {
      value: "NPS9,4",
      description: "nas consultorias aplicadas"
    }
  ]

  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-24">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-[216px]">
        <FadeIn>
          <h2 className="text-black text-[24px] md:text-[28px] lg:text-[35px] font-montserrat font-medium leading-tight tracking-[-0.72px] md:tracking-[-1.05px] mb-10 md:mb-16 lg:mb-20">
            Impacto que sua empresa pode sentir.
          </h2>
        </FadeIn>

        <FadeInStagger staggerDelay={0.1} className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 lg:gap-16 mb-12 md:mb-16 lg:mb-24">
          {metrics.map((metric, index) => (
            <FadeInStaggerItem key={index} className="relative pl-0 lg:pl-6 lg:border-l lg:border-gray-200 first:border-l-0 first:pl-0">
              <p className="text-black text-[20px] md:text-[28px] lg:text-[35px] font-inter font-normal leading-tight tracking-[-0.6px] md:tracking-[-1.05px] mb-2 md:mb-4">
                {metric.value}
              </p>
              <p className="text-[#615F5F] text-[13px] md:text-[14px] lg:text-[15px] font-inter leading-[1.5] tracking-[-0.45px]">
                {metric.description}
              </p>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>

        <FadeIn delay={0.3}>
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
            <p className="text-[20px] md:text-[28px] lg:text-[36px] font-montserrat leading-[1.4] tracking-[-0.6px] md:tracking-[-1.08px] max-w-[719px]">
              <span className="text-black">Esses números </span>
              <span className="text-[#615f5f]">
                não são promessas.<br className="hidden md:block" />
                São o resultado natural de uma empresa que tem processo, cultura de análise e acompanhamento de verdade.
              </span>
            </p>

            <a 
              href="#contato" 
              className="relative overflow-hidden bg-loopscale-blue text-white px-5 py-3 md:px-[23px] md:py-[14px] h-auto md:h-[48px] flex items-center justify-center gap-[10px] font-inter text-[13px] md:text-[14px] tracking-[0.84px] w-full lg:w-auto flex-shrink-0 group"
            >
              <span 
                className="absolute inset-0 bg-loopscale-blue-dark transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"
                aria-hidden="true"
              />
              <span className="relative z-10 flex items-center gap-[10px]">
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
