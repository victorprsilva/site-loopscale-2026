import { FadeIn, FadeInStagger, FadeInStaggerItem } from '../animations/FadeIn'

export default function VendasPlaybook() {
  const items = [
    "Roteiros de abordagem e follow-up",
    "Estrutura de qualificação e priorização de leads",
    "Scripts de proposta e fechamento",
    "Protocolo de nutrição para oportunidades frias",
    "Análise de objeções reais e como neutralizá-las",
    "Tudo é testado, ajustado e adaptado à linguagem da empresa — sem engessamento, mas com direção."
  ]

  return (
    <section className="w-full bg-black py-12 md:py-16 lg:py-24">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-[200px]">
        <div className="flex flex-col xl:flex-row gap-12 xl:gap-16 2xl:gap-24">
          <div className="flex-1">
            <FadeIn>
              <h2 className="text-white text-[28px] md:text-[36px] lg:text-[48px] font-inter font-normal leading-tight tracking-[-0.84px] md:tracking-[-1.44px] mb-8 md:mb-12">
                Criação (ou reestruturação) do playbook comercial
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-[#a0a0a0] text-[15px] md:text-[16px] lg:text-[18px] font-inter leading-[1.7] mb-12 md:mb-16 max-w-[440px]">
                Playbook não é só um PDF bonito com frases prontas. É um documento vivo que guia a operação de vendas — do primeiro contato ao fechamento.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <h3 className="text-white text-[24px] md:text-[28px] lg:text-[35px] font-inter font-normal leading-tight tracking-[-0.72px] md:tracking-[-1.05px] mb-6 md:mb-8">
                Desenvolvemos junto com o time:
              </h3>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="w-full max-w-[300px] h-[1px] bg-white/30 relative mb-8">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t border-r border-white/30 rotate-45"></div>
              </div>
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
