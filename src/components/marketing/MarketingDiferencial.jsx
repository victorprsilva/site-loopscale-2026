import { motion } from 'framer-motion'
import { FadeIn, FadeInStagger, FadeInStaggerItem } from '../animations/FadeIn'
import rocketImage from '../../img/marketing/rocket.webp'

export default function MarketingDiferencial() {
  const cards = [
    {
      title: "Pautas semanais de alinhamento"
    },
    {
      title: "Documentos compartilhados com discurso, tom e sequência"
    },
    {
      title: "Protocolos de resposta rápida caso a campanha traga objeções novas ou inesperadas"
    }
  ]

  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-24">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-[212px]">
        <div className="flex flex-col xl:flex-row gap-12 xl:gap-16">
          <div className="flex-1">
            <div className="mb-12 md:mb-16 lg:mb-20">
              <FadeIn>
                <h2 className="text-black text-[28px] md:text-[36px] lg:text-[48px] font-inter font-normal leading-tight tracking-[-0.84px] md:tracking-[-1.44px] max-w-[600px] mb-6 md:mb-8">
                  O grande diferencial da Loopscale está aqui.
                </h2>
              </FadeIn>
              
              <FadeIn delay={0.2}>
                <p className="text-[#615F5F] text-[15px] md:text-[16px] lg:text-[18px] font-inter leading-[1.7] max-w-[700px]">
                  Antes de qualquer campanha ir pro ar, validamos a mensagem com o time de vendas. Não existe "prometer uma coisa e jogar o lead no colo do vendedor". A copy da campanha passa por leitura crítica junto com quem atende o cliente. E o atendimento também entra no circuito, pra saber que tipo de expectativa está sendo criada lá na frente.
                </p>
              </FadeIn>
            </div>

            <FadeIn delay={0.3}>
              <p className="text-black text-[15px] md:text-[16px] lg:text-[18px] font-inter leading-[1.6] mb-8 md:mb-10">
                Fazemos isso por meio de:
              </p>
            </FadeIn>

            <FadeInStagger staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5 mb-10 md:mb-12">
              {cards.map((card, index) => (
                <FadeInStaggerItem key={index}>
                  <motion.div 
                    className="bg-loopscale-blue p-8 md:p-10 min-h-[200px] md:min-h-[280px] lg:min-h-[308px] flex items-start"
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
              <p className="text-[#615F5F] text-[15px] md:text-[16px] lg:text-[18px] font-inter leading-[1.6] max-w-[504px]">
                Esse trabalho cria consistência entre a primeira impressão e a experiência real. Resultado? Conversão maior, menos retrabalho e mais recompras.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.3} direction="left" className="hidden xl:block w-[400px] xl:w-[450px] 2xl:w-[641px] flex-shrink-0">
            <div className="w-full h-[500px] xl:h-[610px] rounded-lg overflow-hidden">
              <img 
                src={rocketImage}
                alt="Foguete - Crescimento"
                className="w-full h-full object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
