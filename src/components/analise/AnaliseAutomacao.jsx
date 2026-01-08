import { Check } from 'lucide-react'
import { motion } from 'framer-motion'
import { FadeIn, FadeInStagger, FadeInStaggerItem } from '../animations/FadeIn'

export default function AnaliseAutomacao() {
  const cards = [
    { title: "Enviam relatórios semanais por e-mail ou WhatsApp" },
    { title: "Gatilham alertas quando um indicador foge do padrão" },
    { title: "Atualizam o time sobre o que realmente importa — sem sobrecarregar ninguém" }
  ]

  return (
    <section className="w-full bg-black py-12 md:py-16 lg:py-24">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-[200px]">
        <FadeIn>
          <h2 className="text-white text-[28px] md:text-[36px] lg:text-[48px] font-inter font-normal leading-tight tracking-[-0.84px] md:tracking-[-1.44px] mb-6 md:mb-8 max-w-[500px]">
            Automação de coleta e envio de relatórios
          </h2>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <p className="text-[#a0a0a0] text-[15px] md:text-[16px] lg:text-[18px] font-inter leading-[1.7] mb-10 max-w-[600px]">
            Pra fechar o ciclo, configuramos automações que:
          </p>
        </FadeIn>

        <FadeInStagger staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mb-12">
          {cards.map((card, index) => (
            <FadeInStaggerItem key={index}>
              <motion.div 
                className="bg-loopscale-blue p-6 md:p-8 min-h-[200px] md:min-h-[280px] flex flex-col justify-between relative"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="w-[40px] h-[40px] rounded-full bg-white/20 flex items-center justify-center">
                  <Check size={20} className="text-white" strokeWidth={2} />
                </div>
                <p className="text-white text-[14px] md:text-[16px] font-inter font-medium leading-[1.5]">
                  {card.title}
                </p>
              </motion.div>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>

        <FadeIn delay={0.4}>
          <div className="text-[#a0a0a0] text-[15px] md:text-[16px] lg:text-[18px] font-inter leading-[1.7] space-y-4 max-w-[600px]">
            <p>
              A ideia é simples: deixar o dado chegar antes do problema. Quem decide no escuro paga caro. Quem mede errado, corrige errado. E quem acha que "dado é coisa de startup", costuma travar quando precisa crescer.
            </p>
            <p>
              Na Loopscale, dados não são opção — são base de operação. Eles mostram onde o sistema está falhando, o que precisa mudar, e pra onde a empresa pode crescer com segurança. Quando os dados são certos e estão nas mãos certas, o crescimento deixa de ser aposta. E vira escolha.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
