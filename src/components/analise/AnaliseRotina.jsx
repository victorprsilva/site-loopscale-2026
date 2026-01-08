import { FadeIn, FadeInStagger, FadeInStaggerItem } from '../animations/FadeIn'

export default function AnaliseRotina() {
  const items = [
    "Reuniões semanais com leitura do painel por área",
    "Gatilhos de ação para desvios críticos",
    "Comparativo entre metas e realidade",
    "Correção de rota documentada (não no grito)",
    "Esse processo cria cultura de dados sem burocracia: é olhar, entender e agir."
  ]

  return (
    <section className="w-full bg-black py-12 md:py-16 lg:py-24">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 xl:px-[200px]">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 xl:gap-32">
          <div className="flex-1 max-w-[450px]">
            <FadeIn>
              <h2 className="text-white text-[28px] md:text-[36px] lg:text-[48px] font-inter font-normal leading-tight tracking-[-0.84px] md:tracking-[-1.44px] mb-8 md:mb-12">
                Criação de rotina de leitura, análise e correção
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-[#a0a0a0] text-[15px] md:text-[16px] lg:text-[18px] font-inter leading-[1.7]">
                Não adianta ter painel se ninguém sabe o que fazer com ele. Por isso, organizamos uma rotina com:
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
