import { FadeIn, ScaleIn } from '../animations/FadeIn'
import womanImage from '../../img/marketing/woman.webp'

export default function MarketingEstrutura() {
  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-24">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-[212px]">
        <div className="flex flex-col xl:flex-row gap-12 xl:gap-16 2xl:gap-24">
          <div className="flex-1 max-w-[756px]">
            <FadeIn>
              <h2 className="text-black text-[28px] md:text-[36px] lg:text-[48px] font-inter font-normal leading-tight tracking-[-0.84px] md:tracking-[-1.44px] mb-8 md:mb-10">
                A estrutura nunca é fixa.
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="text-[#615F5F] text-[15px] md:text-[16px] lg:text-[18px] font-inter leading-[1.7] space-y-6">
                <p>
                  Vender não é sobre ter carisma, falar bem ou "ter feeling". É sobre ter um processo previsível, alinhado com o marketing e com a operação. É sobre saber, com clareza, de onde o cliente veio, o que ele já ouviu e o que ele espera. E principalmente: é sobre não deixar dinheiro na mesa porque o vendedor não sabia o que fazer com a oportunidade.
                </p>
                <p>
                  A maior parte dos times comerciais está presa entre dois extremos: ou recebem leads sem contexto e culpam o marketing… ou carregam nas costas uma operação desorganizada, sem saber quem priorizar ou o que dizer.
                </p>
                <p>
                  Na Loopscale, a área de Vendas deixa de ser o gargalo. Ela vira a ponte entre atração e entrega, com processo, playbook, meta por etapa e rotina de melhoria contínua.
                </p>
              </div>
            </FadeIn>
          </div>

          <ScaleIn delay={0.3} className="hidden xl:block w-full xl:w-[450px] 2xl:w-[641px] flex-shrink-0">
            <div className="w-full h-[400px] md:h-[500px] lg:h-[610px] rounded-lg overflow-hidden">
              <img 
                src={womanImage}
                alt="Profissional de vendas"
                className="w-full h-full object-cover"
              />
            </div>
          </ScaleIn>
        </div>
      </div>
    </section>
  )
}
