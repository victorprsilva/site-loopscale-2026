import { CheckCircle } from 'lucide-react'
import { FadeIn, FadeInStagger, FadeInStaggerItem } from '../animations/FadeIn'

export default function HomeDiagnostico() {
  const cards = [
    "Mapeamento dos principais gargalos que estão drenando sua margem ou travando a escala",
    "Sugestões práticas para alinhar marketing, vendas e atendimento",
    "Um panorama de como aplicar a Máquina de Receita Previsível ao seu cenário atual"
  ]

  return (
    <section className="w-full bg-black py-16 md:py-20 lg:py-24">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-[201px]">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-20 mb-12 md:mb-16">
          <FadeIn className="flex-1 max-w-[500px]">
            <h2 className="text-white text-[28px] md:text-[36px] lg:text-[42px] font-inter font-bold leading-tight">
              Solicite seu Diagnóstico de Crescimento — gratuito, objetivo e sem enrolação
            </h2>
          </FadeIn>

          <FadeIn delay={0.1} className="flex-1 max-w-[500px]">
            <p className="text-gray-400 text-[14px] md:text-[15px] lg:text-[16px] font-inter leading-[1.7] mb-6">
              Esse não é um orçamento disfarçado. É uma análise estratégica de verdade sobre como sua empresa está operando — e o que está impedindo ela de escalar com eficiência.
            </p>
            <p className="text-gray-400 text-[14px] md:text-[15px] lg:text-[16px] font-inter leading-[1.7] mb-6">
              Você preenche o formulário.<br />
              A gente analisa sua operação com base nos dados que você fornece.
            </p>
            <p className="text-gray-400 text-[14px] md:text-[15px] lg:text-[16px] font-inter leading-[1.7]">
              E você recebe uma devolutiva clara, com:
            </p>
          </FadeIn>
        </div>

        <FadeIn className="mb-6">
          <p className="text-white text-[16px] md:text-[18px] font-inter font-medium">
            Nosso foco é simples:
          </p>
        </FadeIn>

        <FadeInStagger staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
          {cards.map((card, index) => (
            <FadeInStaggerItem key={index}>
              <div className="bg-loopscale-blue rounded-lg p-6 md:p-8 h-full min-h-[200px] md:min-h-[250px] flex flex-col">
                <div className="w-[40px] h-[40px] rounded-full border-2 border-white flex items-center justify-center mb-6">
                  <CheckCircle size={24} className="text-white" />
                </div>
                <p className="text-white text-[16px] md:text-[18px] font-inter leading-[1.5]">
                  {card}
                </p>
              </div>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>

        <FadeIn>
          <p className="text-gray-400 text-[14px] md:text-[16px] font-inter leading-[1.7]">
            Tudo isso de forma personalizada, objetiva e sem compromisso de contratação.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
