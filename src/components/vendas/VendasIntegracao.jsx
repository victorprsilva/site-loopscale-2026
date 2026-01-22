import { Check } from 'lucide-react'
import { FadeIn, ScaleIn } from '../animations/FadeIn'
import integracaoImage from '../../img/vendas/integracao.webp'

export default function VendasIntegracao() {
  const checkpoints = [
    "Qual a expectativa do cliente antes da ligação",
    "O que está sendo prometido no criativo",
    "E o que acontece com esse cliente depois que fecha"
  ]

  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-24">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-[200px]">
        <div className="flex flex-col xl:flex-row gap-12 xl:gap-16 2xl:gap-24">
          <div className="flex-1 max-w-[756px]">
            <FadeIn>
              <h2 className="text-black text-[28px] md:text-[36px] lg:text-[48px] font-inter font-bold leading-tight tracking-[-0.84px] md:tracking-[-1.44px] mb-8 md:mb-10">
                Integração com marketing e atendimento
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-black text-[16px] md:text-[18px] font-inter font-medium leading-[1.5] mb-6">
                O time de vendas não pode operar sozinho. Ele precisa saber:
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="text-[#615F5F] text-[15px] md:text-[16px] lg:text-[18px] font-inter leading-[1.7] space-y-4 mb-10">
                <p>
                  Criamos um modelo de integração que conecta marketing, comercial e atendimento em uma linha contínua de comunicação e dados. Isso reduz ruído, evita retrabalho e acelera o fechamento. Vendas não é mágica, não é talento — é processo.
                </p>
                <p>
                  Quando cada vendedor sabe o que fazer, quando fazer e por que está fazendo, a empresa para de depender de "estrelas" e começa a escalar com consistência. Na Loopscale, a área comercial deixa de ser um campo de batalha.
                </p>
                <p>
                  Ela vira o motor que transforma oportunidade em faturamento — com método, ritmo e previsibilidade.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-between gap-8 sm:gap-4">
                {checkpoints.map((checkpoint, index) => (
                  <div key={index} className="flex flex-col items-center sm:flex-row sm:items-start flex-1">
                    <div className="flex flex-col items-center sm:items-start">
                      <div className="w-[60px] h-[60px] rounded-full bg-loopscale-blue/10 flex items-center justify-center mb-4">
                        <Check size={20} className="text-loopscale-blue" strokeWidth={2} />
                      </div>
                      <p className="text-loopscale-blue text-[14px] md:text-[16px] font-inter font-medium leading-[1.4] max-w-[200px] lg:max-w-[180px] text-center sm:text-left">
                        {checkpoint}
                      </p>
                    </div>
                    {index < checkpoints.length - 1 && (
                      <div className="hidden sm:block w-[40px] md:w-[60px] lg:w-[80px] xl:w-[120px] h-[2px] bg-loopscale-blue/30 mt-[30px] mx-2 lg:mx-4 flex-shrink-0"></div>
                    )}
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          <ScaleIn delay={0.3} className="hidden xl:block w-full xl:w-[450px] 2xl:w-[641px] flex-shrink-0">
            <div className="w-full h-[400px] md:h-[500px] lg:h-[610px] rounded-lg overflow-hidden">
              <img 
                src={integracaoImage}
                alt="Atendimento ao cliente"
                className="w-full h-full object-cover"
              />
            </div>
          </ScaleIn>
        </div>
      </div>
    </section>
  )
}
