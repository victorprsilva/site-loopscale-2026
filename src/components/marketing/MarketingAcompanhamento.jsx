import { ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { FadeIn, FadeInStagger, FadeInStaggerItem } from '../animations/FadeIn'

export default function MarketingAcompanhamento() {
  const metricsTop = [
    "Volume por canal",
    "Taxa de conversão por origem",
    "Receita gerada por campanha ativa"
  ]

  const metricsBottom = [
    "Custo por oportunidade real (não só por lead)",
    "Tempo médio entre interesse e fechamento"
  ]

  return (
    <section className="w-full bg-black py-12 md:py-16 lg:py-24">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-[200px]">
        <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-8 mb-12 md:mb-16">
          <div className="max-w-[502px]">
            <FadeIn>
              <h2 className="text-white text-[28px] md:text-[36px] lg:text-[48px] font-inter font-normal leading-tight tracking-[-0.84px] md:tracking-[-1.44px] mb-8 md:mb-10">
                Acompanhamento com dados de ponta a ponta
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-[#a0a0a0] text-[15px] md:text-[16px] lg:text-[18px] font-inter leading-[1.7]">
                Toda campanha tem um objetivo. Mas poucos acompanham o que acontece depois do clique. A gente integra ferramentas de rastreamento (como Google Tag Manager, GA4, Pixel e CRM), cruza os dados de mídia com os dados de venda e monta um painel que mostra:
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

        <FadeIn delay={0.3}>
          <p className="text-loopscale-blue text-[15px] md:text-[16px] lg:text-[18px] font-inter leading-[1.6] mb-10 md:mb-12 underline">
            O marketing não é mais medido por curtida ou clique — é medido por resultado no caixa.
          </p>
        </FadeIn>

        <FadeInStagger staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5 mb-4 md:mb-5">
          {metricsTop.map((metric, index) => (
            <FadeInStaggerItem key={index}>
              <motion.div 
                className="bg-white p-6 md:p-8 min-h-[200px] md:min-h-[280px] lg:min-h-[315px] flex items-center justify-center relative"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="absolute top-0 left-0 w-[91px] h-[8px] bg-loopscale-blue"></div>
                <p className="text-black text-[16px] md:text-[18px] lg:text-[20px] font-inter font-medium leading-[1.4] text-center">
                  {metric}
                </p>
              </motion.div>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>

        <FadeInStagger staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 max-w-[1010px] mx-auto">
          {metricsBottom.map((metric, index) => (
            <FadeInStaggerItem key={index}>
              <motion.div 
                className="bg-white p-6 md:p-8 min-h-[200px] md:min-h-[280px] lg:min-h-[315px] flex items-center justify-center relative"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="absolute top-0 left-0 w-[91px] h-[8px] bg-loopscale-blue"></div>
                <p className="text-black text-[16px] md:text-[18px] lg:text-[20px] font-inter font-medium leading-[1.4] text-center">
                  {metric}
                </p>
              </motion.div>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  )
}
