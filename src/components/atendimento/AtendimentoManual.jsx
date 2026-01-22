import { motion } from 'framer-motion'
import { FadeIn, FadeInStagger, FadeInStaggerItem } from '../animations/FadeIn'

export default function AtendimentoManual() {
  const cards = [
    { title: "Modelos de resposta por tipo de situação" },
    { title: "Limites de autonomia e pontos de alerta" },
    { title: "Gatilhos de urgência e priorização" },
    { title: "Nível de linguagem e tom de voz da marca" },
    { title: "Protocolos de encaminhamento e escalonamento" },
    { title: "Nada de scripts engessados. Criamos uma base que orienta, dá segurança e acelera o tempo de resposta com qualidade." }
  ]

  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-24">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-[212px]">
        <div className="flex flex-col xl:flex-row gap-12 xl:gap-16 2xl:gap-24">
          <div className="flex-1 max-w-[400px]">
            <FadeIn>
              <h2 className="text-black text-[28px] md:text-[36px] lg:text-[48px] font-inter font-normal leading-tight tracking-[-0.84px] md:tracking-[-1.44px] mb-8 md:mb-10">
                Criação do Manual de Atendimento
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-[#615F5F] text-[15px] md:text-[16px] lg:text-[18px] font-inter leading-[1.7]">
                Elaboramos um guia completo e prático que transforma o atendimento em rotina confiável. Esse manual inclui:
              </p>
            </FadeIn>
          </div>

          <FadeInStagger staggerDelay={0.1} className="flex-1 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5">
            {cards.map((card, index) => (
              <FadeInStaggerItem key={index}>
                <motion.div 
                  className="bg-loopscale-blue p-8 md:p-10 min-h-[180px] md:min-h-[220px] flex flex-col justify-between relative"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="w-[40px] h-[3px] bg-white mb-6"></div>
                  <p className="text-white text-[14px] md:text-[16px] font-inter font-medium leading-[1.5]">
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
