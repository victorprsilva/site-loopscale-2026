import { motion } from 'framer-motion'
import { FadeIn, FadeInStagger, FadeInStaggerItem } from '../animations/FadeIn'
import diagnosticoImage from '../../img/marketing/diagnostico.webp'

export default function MarketingDiagnostico() {
  const cards = [
    {
      title: "Entrevista com stakeholders de marketing e vendas"
    },
    {
      title: "Leitura crítica da copy atual (campanhas, landing pages, redes, etc.)"
    },
    {
      title: "Avaliação da coerência entre proposta de valor e experiência real"
    }
  ]

  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-24">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-[212px]">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1">
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-32 mb-12 md:mb-16 lg:mb-20">
              <FadeIn className="flex-shrink-0">
                <h2 className="text-black text-[28px] md:text-[36px] lg:text-[48px] font-inter font-normal leading-tight tracking-[-0.84px] md:tracking-[-1.44px] max-w-[377px]">
                  Diagnóstico do posicionamento e da comunicação
                </h2>
              </FadeIn>
              
              <FadeIn delay={0.2} className="flex-1 max-w-[508px]">
                <p className="text-[#615F5F] text-[15px] md:text-[16px] lg:text-[18px] font-inter leading-[1.7]">
                  Antes de apertar qualquer botão de mídia, a gente para pra ouvir: o que a sua empresa está prometendo hoje? O que o cliente entende quando entra no seu site ou vê seu anúncio? E mais importante — isso condiz com o que o time de vendas está preparado pra entregar?
                </p>
              </FadeIn>
            </div>

            <FadeIn delay={0.3}>
              <p className="text-black text-[15px] md:text-[16px] lg:text-[18px] font-inter leading-[1.6] mb-8 md:mb-10">
                A gente conduz uma análise de posicionamento e comunicação ativa, que envolve:
              </p>
            </FadeIn>

            <FadeInStagger staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-10 md:mb-12">
              {cards.map((card, index) => (
                <FadeInStaggerItem key={index}>
                  <motion.div 
                    className="bg-loopscale-blue p-6 md:p-8 min-h-[200px] md:min-h-[280px] lg:min-h-[308px] flex items-end"
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <p className="text-white text-[16px] md:text-[18px] lg:text-[20px] font-inter font-medium leading-[1.4]">
                      {card.title}
                    </p>
                  </motion.div>
                </FadeInStaggerItem>
              ))}
            </FadeInStagger>

            <FadeIn delay={0.5}>
              <p className="text-[#615F5F] text-[15px] md:text-[16px] lg:text-[18px] font-inter leading-[1.6] max-w-[463px]">
                O objetivo é simples: alinhar discurso com entrega real, pra reduzir ruído, frustração e retrabalho.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.3} direction="left" className="hidden lg:block w-[400px] xl:w-[500px] 2xl:w-[641px] flex-shrink-0">
            <div className="w-full h-[500px] xl:h-[610px] rounded-lg overflow-hidden">
              <img 
                src={diagnosticoImage}
                alt="Diagnóstico"
                className="w-full h-full object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
