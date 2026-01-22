import { Check } from 'lucide-react'
import { FadeIn, ScaleIn } from '../animations/FadeIn'
import treinamentoImage from '../../img/atendimento/treinamento.webp'

export default function AtendimentoTreinamento() {
  const checkpoints = [
    "Entender o valor real do cliente",
    "Comunicar com empatia, sem submissão",
    "Lidar com conflitos sem escalar tudo",
    "Agir com responsabilidade sobre a experiência, e não só cumprir demanda"
  ]

  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-24">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-[104px]">
        <div className="flex flex-col xl:flex-row gap-12 xl:gap-16 2xl:gap-24">
          <div className="flex-1 max-w-[900px]">
            <FadeIn>
              <h2 className="text-black text-[28px] md:text-[36px] lg:text-[48px] font-inter font-bold leading-tight tracking-[-0.84px] md:tracking-[-1.44px] mb-6 md:mb-8">
                Treinamento de postura e cultura de cliente
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-black text-[16px] md:text-[18px] font-inter font-medium leading-[1.5] mb-8 md:mb-10">
                Não basta processo. Tem que ter postura.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row items-center sm:items-start justify-start gap-6 sm:gap-3 lg:gap-4 mb-10 md:mb-12">
                {checkpoints.map((checkpoint, index) => (
                  <div key={index} className="flex flex-col sm:flex-row items-center">
                    <div className="flex flex-col items-center sm:items-start">
                      <div className="w-[50px] h-[50px] md:w-[55px] md:h-[55px] rounded-full bg-loopscale-blue flex items-center justify-center mb-4">
                        <Check size={20} className="text-white" strokeWidth={2} />
                      </div>
                      <p className="text-loopscale-blue text-[13px] md:text-[14px] lg:text-[16px] font-inter font-medium leading-[1.4] max-w-[180px] sm:max-w-[140px] lg:max-w-[160px] text-center sm:text-left">
                        {checkpoint}
                      </p>
                    </div>
                    {index < checkpoints.length - 1 && (
                      <div className="hidden sm:block w-[20px] md:w-[40px] lg:w-[60px] xl:w-[80px] h-[2px] bg-black mt-[-60px] mx-1 lg:mx-2"></div>
                    )}
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="text-[#615F5F] text-[15px] md:text-[16px] lg:text-[18px] font-inter leading-[1.7] space-y-4">
                <p>
                  Porque cliente satisfeito não é só o que não reclama — é o que volta e recomenda. Atendimento é tão estratégico quanto a primeira venda.
                </p>
                <p>
                  Se não estiver bem feito, toda a energia que você colocou pra conquistar um cliente vira custo de aquisição perdido. Aqui na Loopscale, o atendimento não apaga incêndio — ele constrói reputação, fortalece a operação e vira canal de receita.
                </p>
                <p>
                  Com processo, clareza e autonomia, a equipe sai do modo reativo e entra no jogo da fidelização.
                </p>
              </div>
            </FadeIn>
          </div>

          <ScaleIn delay={0.3} className="hidden xl:block w-full xl:w-[450px] 2xl:w-[641px] flex-shrink-0">
            <div className="w-full h-[400px] md:h-[500px] lg:h-[610px] rounded-lg overflow-hidden">
              <img 
                src={treinamentoImage}
                alt="Treinamento de equipe"
                className="w-full h-full object-cover"
              />
            </div>
          </ScaleIn>
        </div>
      </div>
    </section>
  )
}
