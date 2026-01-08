import { motion } from 'framer-motion'
import { FadeIn, FadeInStagger, FadeInStaggerItem, ScaleIn } from '../animations/FadeIn'

const dashboardImage = "https://www.figma.com/api/mcp/asset/7716318a-2d7a-4ed0-8b1a-32ba1337d773"

export default function AnaliseDashboards() {
  const cards = [
    { title: "O que está indo bem" },
    { title: "O que precisa de atenção" },
    { title: "E o que virou problema antes de explodir" }
  ]

  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-24">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 xl:px-[174px]">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-24">
          <div className="flex-1 max-w-[700px]">
            <FadeIn>
              <h2 className="text-black text-[28px] md:text-[36px] lg:text-[48px] font-inter font-normal leading-tight tracking-[-0.84px] md:tracking-[-1.44px] mb-8 md:mb-10">
                Estruturação de dashboards de operação
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-[#615F5F] text-[15px] md:text-[16px] lg:text-[18px] font-inter leading-[1.7] mb-10">
                Com os KPIs definidos, montamos painéis de acompanhamento visual, integrados com as ferramentas que você já usa (GA4, CRM, planilhas, BI, etc.). Esses painéis são acessíveis, responsivos e lidos toda semana nas reuniões com a equipe.
              </p>
            </FadeIn>

            <FadeInStagger staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
              {cards.map((card, index) => (
                <FadeInStaggerItem key={index}>
                  <motion.div 
                    className="bg-loopscale-blue p-6 md:p-8 min-h-[200px] md:min-h-[280px] flex flex-col justify-between relative"
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <div className="w-[36px] h-[6px] bg-white"></div>
                    <p className="text-white text-[14px] md:text-[16px] font-inter font-medium leading-[1.5]">
                      {card.title}
                    </p>
                  </motion.div>
                </FadeInStaggerItem>
              ))}
            </FadeInStagger>
          </div>

          <ScaleIn delay={0.3} className="w-full lg:w-[400px] xl:w-[500px] 2xl:w-[641px] flex-shrink-0">
            <div className="w-full h-[400px] md:h-[500px] lg:h-[610px] rounded-lg overflow-hidden">
              <img 
                src={dashboardImage}
                alt="Dashboard de análise"
                className="w-full h-full object-cover"
              />
            </div>
          </ScaleIn>
        </div>
      </div>
    </section>
  )
}
