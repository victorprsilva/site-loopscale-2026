import { ChevronRight } from 'lucide-react'
import { FadeIn } from '../animations/FadeIn'
import joaoImg from '../../img/about/joao.webp'

export default function LPJoao() {
  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-24">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-[212px]">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-24 items-center">
          <div className="flex-1 max-w-[903px]">
            <FadeIn>
              <h2 className="text-black text-[28px] md:text-[36px] lg:text-[48px] xl:text-[56px] font-inter font-bold leading-[1.1] tracking-[-1px] md:tracking-[-2px] mb-8 md:mb-12">
                Sim, você pode ter toda a sua operação de Marketing Digital rodando em até 30 dias.
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-[#615F5F] text-[16px] md:text-[18px] lg:text-[20px] font-inter leading-[1.7] mb-8 md:mb-12">
                Você não precisa mais depender da sorte ou de ações isoladas que não conversam entre si. Com a nossa consultoria, você terá uma estratégia integrada (tráfego, SEO, conteúdo e CRM) que gera controle, previsibilidade e vendas recorrentes.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="relative overflow-hidden inline-flex items-center gap-2 bg-loopscale-blue text-white px-6 py-4 font-inter text-[14px] tracking-[0.84px] transition-colors duration-300 group"
              >
                <span 
                  className="absolute inset-0 bg-loopscale-blue-dark transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"
                  aria-hidden="true"
                />
                <span className="relative z-10 flex items-center gap-2">
                  Solicite um Diagnóstico Gratuito
                  <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </button>
            </FadeIn>
          </div>

          <FadeIn delay={0.4} direction="left" className="w-full lg:w-auto flex-shrink-0">
            <div className="flex flex-col items-center lg:items-start">
              <div className="w-[300px] md:w-[450px] lg:w-[550px] xl:w-[649px] h-auto rounded-lg overflow-hidden mb-6">
                <img 
                  src={joaoImg}
                  alt="João Navia - Consultor estratégico"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div>
                <p className="text-black text-[24px] md:text-[32px] lg:text-[42px] font-inter font-bold leading-tight">
                  João Navia
                </p>
                <p className="text-[#615F5F] text-[14px] md:text-[16px] font-inter">
                  Consultor estratégico
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
