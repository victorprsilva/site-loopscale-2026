import { FadeIn, FadeInStagger, FadeInStaggerItem } from '../animations/FadeIn'

export default function AtendimentoFluxos() {
  const items = [
    "Tipo de solicitação (dúvida, suporte, reclamação, pós-venda, etc.)",
    "Perfil do cliente (novo, ativo, recorrente)",
    "Canal utilizado e tempo de resposta ideal"
  ]

  return (
    <section className="w-full bg-black py-12 md:py-16 lg:py-24">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-[200px]">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-12 xl:gap-20 xl:gap-32">
          <div className="flex-1">
            <FadeIn>
              <h2 className="text-white text-[28px] md:text-[36px] lg:text-[48px] font-inter font-normal leading-tight tracking-[-0.84px] md:tracking-[-1.44px] mb-8 md:mb-12">
                Estruturação dos fluxos de atendimento
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-[#a0a0a0] text-[15px] md:text-[16px] lg:text-[18px] font-inter leading-[1.7] mb-12 md:mb-16 max-w-[440px]">
                Com base no diagnóstico, desenhamos os fluxos ideais de interação, divididos por:
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <h3 className="text-white text-[24px] md:text-[28px] lg:text-[35px] font-inter font-normal leading-tight tracking-[-0.72px] md:tracking-[-1.05px] mb-6 md:mb-8">
                Isso garante que todo cliente saiba pra onde ir, e todo atendente saiba o que fazer.
              </h3>
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
