import { FadeIn, FadeInStagger, FadeInStaggerItem } from '../animations/FadeIn'

export default function AtendimentoMetricas() {
  const items = [
    "Tempo médio de resposta",
    "Tempo médio de resolução",
    "Índice de cancelamento por falha no atendimento",
    "Taxa de satisfação (NPS, CSAT)a",
    "Taxa de recontato sobre o mesmo problema",
    "Essas métricas são lidas semanalmente — com plano de ação prático e ajustes operacionais sempre que necessário."
  ]

  return (
    <section className="w-full bg-black py-12 md:py-16 lg:py-24">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-[200px]">
        <div className="flex flex-col xl:flex-row gap-12 xl:gap-16 2xl:gap-24">
          <div className="flex-1 max-w-[400px]">
            <FadeIn>
              <h2 className="text-white text-[28px] md:text-[36px] lg:text-[48px] font-inter font-normal leading-tight tracking-[-0.84px] md:tracking-[-1.44px] mb-8 md:mb-12">
                Definição de métricas e acompanhamento
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-[#a0a0a0] text-[15px] md:text-[16px] lg:text-[18px] font-inter leading-[1.7]">
                Atendimento também tem número. Implementamos indicadores que realmente dizem alguma coisa:
              </p>
            </FadeIn>
          </div>

          <FadeInStagger staggerDelay={0.15} className="flex-1 flex flex-col">
            {items.map((item, index) => (
              <FadeInStaggerItem key={index} className="border-b border-gray-700 py-8 md:py-10 first:pt-0">
                <p className="text-white text-[16px] md:text-[18px] lg:text-[20px] font-inter font-medium leading-[1.4]">
                  {item}
                </p>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </div>
      </div>
    </section>
  )
}
