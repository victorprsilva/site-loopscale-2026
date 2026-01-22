import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { FadeIn, FadeInStagger, FadeInStaggerItem } from '../animations/FadeIn'

export default function HomeSection7() {
  const metrics = [
    {
      value: "+R$250 milhões",
      desc: "em vendas geradas para nossos clientes"
    },
    {
      value: "+100 operações",
      desc: "estruturadas com o método da Máquina de Receita"
    },
    {
      value: "30%",
      desc: "de aumento médio em conversão nos primeiros 90 dias"
    },
    {
      value: "NPS 9,4",
      desc: "nas consultorias aplicadas"
    }
  ]

  return (
    <section className="w-full bg-[#E8E8E8] py-16 md:py-20 lg:py-24">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-[201px]">
        <FadeIn className="mb-12 md:mb-16">
          <h2 className="text-black text-[28px] md:text-[36px] lg:text-[42px] font-inter font-bold italic leading-tight max-w-[400px]">
            Impacto que sua empresa pode sentir.
          </h2>
        </FadeIn>

        <FadeInStagger staggerDelay={0.1} className="grid grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-20">
          {metrics.map((metric, index) => (
            <FadeInStaggerItem key={index} className="border-l-2 border-black pl-4 md:pl-6">
              <p className="text-black text-[24px] md:text-[28px] lg:text-[32px] font-inter font-bold mb-2">
                {metric.value}
              </p>
              <p className="text-[#615F5F] text-[13px] md:text-[14px] font-inter leading-[1.5]">
                {metric.desc}
              </p>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>

        <div className="flex flex-col xl:flex-row gap-8 xl:gap-12 2xl:gap-20 items-start xl:items-end">
          <FadeIn className="flex-1 max-w-[700px]">
            <p className="text-black text-[24px] md:text-[32px] lg:text-[40px] font-inter font-bold leading-tight">
              <span className="text-loopscale-blue">Esses números</span> não são promessas.<br />
              São o resultado natural de uma empresa que tem processo, cultura de análise e acompanhamento de verdade.
            </p>
          </FadeIn>

          <FadeIn delay={0.2} className="flex-shrink-0">
            <Link 
              to="/contato"
              className="relative overflow-hidden inline-flex bg-loopscale-blue text-white px-5 py-4 items-center gap-[10px] font-inter text-[14px] tracking-[0.84px] group"
            >
              <span 
                className="absolute inset-0 bg-loopscale-blue-dark transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"
                aria-hidden="true"
              />
              <span className="relative z-10 flex items-center gap-[10px]">
                Quero aprender como aplicar na minha empresa
                <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
