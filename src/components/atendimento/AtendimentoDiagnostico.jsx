import { motion } from 'framer-motion'
import { FadeIn, FadeInStagger, FadeInStaggerItem } from '../animations/FadeIn'

export default function AtendimentoDiagnostico() {
  const cards = [
    { title: "Canais de atendimento (WhatsApp, e-mail, chat, telefone...)" },
    { title: "Reclamações recorrentes e principais causas de fricção" },
    { title: "Nível de conhecimento do time sobre produto, campanha e contexto do cliente" },
    { title: "Tempo médio de resposta e resolução" },
    { title: "Padronização (ou falta dela) no discurso" },
    { title: "Esse mapeamento mostra não só o que está sendo mal resolvido — mas também quanto dinheiro está sendo perdido por causa disso." }
  ]

  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-24">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-[212px]">
        <div className="flex flex-col xl:flex-row gap-12 xl:gap-16 2xl:gap-24">
          <div className="flex-1 max-w-[400px]">
            <FadeIn>
              <h2 className="text-black text-[28px] md:text-[36px] lg:text-[48px] font-inter font-normal leading-tight tracking-[-0.84px] md:tracking-[-1.44px] mb-8 md:mb-10">
                Diagnóstico do atendimento atual
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-black text-[16px] md:text-[18px] font-inter font-medium leading-[1.5] mb-4">
                Aqui, a gente analisa:
              </p>
              <p className="text-[#615F5F] text-[15px] md:text-[16px] lg:text-[18px] font-inter leading-[1.7]">
                O primeiro passo é entender como o cliente está sendo tratado após o contato inicial ou a venda.
              </p>
            </FadeIn>
          </div>

          <FadeInStagger staggerDelay={0.1} className="flex-1 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5">
            {cards.map((card, index) => (
              <FadeInStaggerItem key={index}>
                <motion.div 
                  className="bg-loopscale-blue p-8 md:p-10 min-h-[180px] md:min-h-[220px] flex items-start"
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
      </div>
    </section>
  )
}
