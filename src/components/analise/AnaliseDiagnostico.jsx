import { motion } from 'framer-motion'
import { FadeIn, FadeInStagger, FadeInStaggerItem } from '../animations/FadeIn'

export default function AnaliseDiagnostico() {
  const cards = [
    { title: "Quais ferramentas estão sendo usadas (GA4, RD, Hubspot, Pipedrive, Tag Manager, etc.)" },
    { title: "Quem tem acesso e quem interpreta" },
    { title: "O que está sendo rastreado (e o que está passando batido)" },
    { title: "Quais indicadores estão no radar e quais estão cegos" }
  ]

  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-24">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-[212px]">
        <FadeIn>
          <h2 className="text-black text-[28px] md:text-[36px] lg:text-[48px] font-inter font-normal leading-tight tracking-[-0.84px] md:tracking-[-1.44px] mb-8 md:mb-10 max-w-[500px]">
            Diagnóstico do atendimento atual
          </h2>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <p className="text-[#615F5F] text-[15px] md:text-[16px] lg:text-[18px] font-inter leading-[1.7] mb-4 max-w-[500px]">
            A gente começa mapeando de onde vêm os dados hoje e como eles estão sendo lidos (ou ignorados).
          </p>
          <p className="text-black text-[16px] md:text-[18px] font-inter font-medium leading-[1.5] mb-10">
            Analisamos:
          </p>
        </FadeIn>

        <FadeInStagger staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5">
          {cards.map((card, index) => (
            <FadeInStaggerItem key={index}>
              <motion.div 
                className="bg-loopscale-blue p-8 md:p-10 min-h-[220px] md:min-h-[280px] flex items-start"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <p className="text-white text-[14px] md:text-[16px] font-inter font-medium leading-[1.5]">
                  {card.title}
                </p>
              </motion.div>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  )
}
