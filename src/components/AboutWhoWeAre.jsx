import { FadeIn, ScaleIn } from './animations/FadeIn'

const imgJoao = "https://www.figma.com/api/mcp/asset/63f123cd-b08f-4e4f-baea-f0d585e76dd0"

export default function AboutWhoWeAre() {
  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-24">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 xl:px-[216px]">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 xl:gap-[73px] items-start">
          <div className="flex-1 max-w-[903px] order-2 lg:order-1">
            <FadeIn>
              <h2 className="text-black text-[24px] md:text-[28px] lg:text-[35px] font-inter font-normal leading-tight tracking-[-0.72px] md:tracking-[-1.05px] mb-6 md:mb-10 lg:mb-12">
                Quem somos
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="text-[#6d6d6d] text-[18px] md:text-[24px] lg:text-[36px] font-inter leading-[1.5] space-y-6 md:space-y-8">
                <p>
                  A Loop Scale nasceu da vivência prática em dezenas de mercados. São mais de 15 anos ajudando empresas a saírem do caos e conquistarem estrutura de verdade. Não somos uma consultoria de promessas vazias: entregamos método, clareza e resultados que aparecem já nas primeiras semanas de aplicação.
                </p>
                
                <p>
                  Se você sente que sua empresa trabalha duro, mas o crescimento não acompanha, então você já descobriu por que existimos.
                </p>
                
                <p className="font-inter font-bold text-[#6d6d6d]">
                  Loop Scale – Estrutura, previsibilidade e escala para o seu crescimento.
                </p>
              </div>
            </FadeIn>
          </div>

          <div className="flex-shrink-0 w-full lg:w-auto order-1 lg:order-2">
            <ScaleIn>
              <div className="w-full lg:w-[400px] xl:w-[500px] 2xl:w-[649px] aspect-square rounded-lg overflow-hidden mb-4 md:mb-6">
                <img 
                  src={imgJoao} 
                  alt="João Navia" 
                  className="w-full h-full object-cover"
                />
              </div>
            </ScaleIn>
            
            <FadeIn delay={0.3}>
              <div>
                <h3 className="text-black text-[24px] md:text-[28px] lg:text-[35px] font-inter font-normal leading-tight tracking-[-0.72px] md:tracking-[-1.05px] mb-1">
                  João Navia
                </h3>
                <p className="text-[#6d6d6d] text-[14px] md:text-[16px] lg:text-[18px] font-inter leading-normal tracking-[-0.54px]">
                  Consultor estratégico
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
