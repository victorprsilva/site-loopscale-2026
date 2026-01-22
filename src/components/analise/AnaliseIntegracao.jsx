import { Check } from 'lucide-react'
import { FadeIn, ScaleIn } from '../animations/FadeIn'
import integracaoImage from '../../img/analise/integracao.webp'

export default function AnaliseIntegracao() {
  const checkpoints = [
    "Entre plataformas (CRM + mídia + planilhas + atendimento)",
    "Entre dado e contexto (pra saber o que ele significa, não só o que mostra)",
    "Entre times (marketing + vendas + atendimento lendo o mesmo número)"
  ]

  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-24">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-[216px]">
        <div className="flex flex-col xl:flex-row gap-12 xl:gap-16 2xl:gap-24">
          <div className="flex-1 max-w-[800px]">
            <FadeIn>
              <h2 className="text-black text-[28px] md:text-[36px] lg:text-[48px] font-inter font-bold italic leading-tight tracking-[-0.84px] md:tracking-[-1.44px] mb-6 md:mb-8">
                Às vezes o dado existe, mas está num sistema que o time nem abre.
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-black text-[16px] md:text-[18px] font-inter font-medium leading-[1.5] mb-10">
                Não basta processo. Tem que ter postura.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-4 mb-10">
                {checkpoints.map((checkpoint, index) => (
                  <div key={index} className="flex flex-col sm:flex-row items-center sm:items-center">
                    <div className="flex flex-col items-center sm:items-start">
                      <div className="w-[50px] h-[50px] md:w-[55px] md:h-[55px] rounded-full bg-loopscale-blue flex items-center justify-center mb-4">
                        <Check size={20} className="text-white" strokeWidth={2} />
                      </div>
                      <p className="text-loopscale-blue text-[13px] md:text-[14px] lg:text-[16px] font-inter font-medium leading-[1.4] max-w-[200px] sm:max-w-[160px] lg:max-w-[200px] text-center sm:text-left">
                        {checkpoint}
                      </p>
                    </div>
                    {index < checkpoints.length - 1 && (
                      <div className="hidden sm:block w-[30px] md:w-[50px] lg:w-[80px] h-[2px] bg-black mt-[-60px] mx-1 lg:mx-2"></div>
                    )}
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="text-[#615F5F] text-[15px] md:text-[16px] lg:text-[18px] font-inter leading-[1.7]">
                Isso tira a operação da cegueira operacional — e faz todo mundo falar a mesma língua.
              </p>
            </FadeIn>
          </div>

          <ScaleIn delay={0.3} className="hidden xl:block w-full xl:w-[400px] 2xl:w-[557px] flex-shrink-0">
            <div className="w-full h-[400px] md:h-[500px] lg:h-[610px] rounded-lg overflow-hidden">
              <img 
                src={integracaoImage}
                alt="Integração de dados"
                className="w-full h-full object-cover"
              />
            </div>
          </ScaleIn>
        </div>
      </div>
    </section>
  )
}
