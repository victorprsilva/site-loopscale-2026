import { motion } from 'framer-motion'
import { FadeIn, FadeInStagger, FadeInStaggerItem } from '../animations/FadeIn'

export default function VendasMetas() {
  const cards = [
    { title: "Tempo de resposta ao lead" },
    { title: "Taxa de conversão por origem e perfil" },
    { title: "Scripts de proposta e fechamento" },
    { title: "Taxa de avanço entre etapas (ex: agendamento → proposta → fechamento)" },
    { title: "Taxa de conversão por origem e perfil" },
    { title: "Ciclo médio de venda" }
  ]

  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-24">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 xl:px-[212px]">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-24">
          <div className="flex-1 max-w-[500px]">
            <FadeIn>
              <h2 className="text-black text-[28px] md:text-[36px] lg:text-[48px] font-inter font-normal leading-tight tracking-[-0.84px] md:tracking-[-1.44px] mb-8 md:mb-10">
                Implementação de metas por etapa e rotina de acompanhamento
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-[#615F5F] text-[15px] md:text-[16px] lg:text-[18px] font-inter leading-[1.7] mb-8">
                Um dos maiores erros das empresas é cobrar só o número final: "bateu a meta ou não?"
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-loopscale-blue text-[15px] md:text-[16px] lg:text-[18px] font-inter leading-[1.6] mb-4">
                Fazemos isso por meio de:
              </p>
              <div className="w-full max-w-[300px] h-[1px] bg-loopscale-blue relative">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t border-r border-loopscale-blue rotate-45"></div>
              </div>
            </FadeIn>
          </div>

          <FadeInStagger staggerDelay={0.1} className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {cards.map((card, index) => (
              <FadeInStaggerItem key={index}>
                <motion.div 
                  className="bg-loopscale-blue p-6 md:p-8 min-h-[180px] md:min-h-[220px] flex flex-col justify-between relative"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="w-[40px] h-[3px] bg-white mb-6"></div>
                  <p className="text-white text-[16px] md:text-[18px] font-inter font-medium leading-[1.4]">
                    {card.title}
                  </p>
                </motion.div>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </div>
      </div>
    </section>
  )
}
