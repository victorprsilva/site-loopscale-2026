import { FadeIn, FadeInStagger, FadeInStaggerItem } from '../animations/FadeIn'

export default function MarketingPlanejamento() {
  const items = [
    "Definição de personas baseadas em dados (comercial e CRM)",
    "Estruturação de campanhas por funil (topo, meio e fundo com objetivo claro)",
    "Criação de pautas, âncoras de oferta e ativações específicas (e-mail, social, mídia paga)",
    "Integração com as metas comerciais (volume, qualidade e timing)"
  ]

  return (
    <section className="w-full bg-black py-12 md:py-16 lg:py-24">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-[200px]">
        <div className="flex flex-col xl:flex-row gap-12 xl:gap-16 2xl:gap-24">
          <div className="flex-1">
            <FadeIn>
              <h2 className="text-white text-[28px] md:text-[36px] lg:text-[48px] font-inter font-normal leading-tight tracking-[-0.84px] md:tracking-[-1.44px] mb-8 md:mb-12">
                Planejamento de campanhas com base na jornada comercial
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-[#a0a0a0] text-[15px] md:text-[16px] lg:text-[18px] font-inter leading-[1.7] mb-12 md:mb-16 max-w-[440px]">
                Campanha não é arte bonita no Canva. Campanha é construção. Desenhamos a jornada de decisão do cliente, desde o primeiro contato até a conversão — e planejamos ações específicas para cada estágio: reconhecimento, consideração, decisão e pós-venda.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <h3 className="text-white text-[24px] md:text-[28px] lg:text-[35px] font-inter font-normal leading-tight tracking-[-0.72px] md:tracking-[-1.05px] mb-6 md:mb-8">
                Impacto que sua empresa pode sentir.
              </h3>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="text-[#a0a0a0] text-[15px] md:text-[16px] lg:text-[18px] font-inter leading-[1.7] max-w-[423px]">
                Não existe campanha solta. Cada ação está amarrada à etapa do funil e à capacidade de atendimento da operação.
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
