import { FadeIn, FadeInStagger, FadeInStaggerItem } from '../animations/FadeIn'
import { motion } from 'framer-motion'

export default function LPConsultoria() {
  const beneficios = [
    {
      text: "Estratégia personalizada baseada no seu negócio, metas e público-alvo"
    },
    {
      text: "Estruturação completa em Google Ads, Meta Ads, SEO e/ou LinkedIn"
    },
    {
      text: "Campanhas ativas em até 30 dias com foco em atração e conversão"
    },
    {
      text: "Conteúdo otimizado para redes sociais, blogs e funis de e-mail"
    },
    {
      text: "Relatórios claros com dados acionáveis e acompanhamento de especialista"
    },
    {
      text: "Time completo cuidando da sua conta: estrategista digital, gestor de tráfego, copywriter e analista de performance"
    }
  ]

  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-24">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-[212px]">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="lg:w-[40%]">
            <FadeIn>
              <h2 className="text-black text-[28px] md:text-[36px] lg:text-[48px] xl:text-[56px] font-inter font-bold leading-[1.1] tracking-[-1px] md:tracking-[-2px] mb-6">
                O que você recebe com a nossa consultoria de Marketing Digital:
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-[#615F5F] text-[16px] md:text-[18px] font-inter leading-[1.6] mb-8">
                Um plano estratégico claro para atrair, converter e crescer com consistência.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-black text-[16px] md:text-[18px] font-inter font-medium mb-4">
                Fazemos isso por meio de:
              </p>
              <div className="w-[200px] md:w-[340px] h-[2px] bg-loopscale-blue"></div>
            </FadeIn>
          </div>

          <div className="lg:w-[60%]">
            <FadeInStagger staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {beneficios.map((beneficio, index) => (
                <FadeInStaggerItem key={index}>
                  <motion.div 
                    className="bg-loopscale-blue p-6 md:p-8 h-[200px] md:h-[280px] lg:h-[308px] flex flex-col"
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <div className="w-9 h-[6px] bg-white mb-6"></div>
                    <p className="text-white text-[14px] md:text-[16px] font-inter leading-[1.5]">
                      {beneficio.text}
                    </p>
                  </motion.div>
                </FadeInStaggerItem>
              ))}
            </FadeInStagger>
          </div>
        </div>
      </div>
    </section>
  )
}
