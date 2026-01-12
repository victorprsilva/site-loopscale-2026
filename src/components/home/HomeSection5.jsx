import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { FadeIn, FadeInStagger, FadeInStaggerItem } from '../animations/FadeIn'
import bgImage from '../../img/home/section5-bg.jpg'

export default function HomeSection5() {
  const steps = [
    {
      number: "1",
      title: "Diagnóstico Profundo da Operação",
      desc: "Analisamos marketing, vendas e atendimento com lupa. Mergulhamos nos dados, nos rituais, nas conversas e nos números. Identificamos os gargalos reais que travam o crescimento — mesmo quando a empresa já está faturando bem."
    },
    {
      number: "2",
      title: "Mapeamento e Validação do Funil Completo",
      desc: "Do primeiro contato ao pós-venda, mapeamos cada etapa do funil e validamos o que funciona — e o que precisa sair do caminho. Aqui você começa a ver onde perde margem, onde perde lead e onde está crescendo com risco."
    },
    {
      number: "3",
      title: "Integração Real entre Marketing, Vendas e Atendimento",
      desc: "Nada de equipes desconectadas. Criamos um fluxo único de trabalho com rituais semanais, SLAs claros e objetivos compartilhados. A meta não é gerar lead. É gerar receita com eficiência."
    },
    {
      number: "4",
      title: "Definição de KPIs e Metas Por Etapa",
      subtitle: "Chega de número solto e dashboard que ninguém usa.",
      desc: "Cada fase do processo tem métricas reais, donos definidos e metas alcançáveis. Você sabe exatamente o que está funcionando — e o que precisa ser corrigido."
    },
    {
      number: "5",
      title: "Acompanhamento Estratégico Contínuo",
      desc: "Não entregamos um plano e desaparecemos. Acompanhamos semanalmente com você e seu time, ajustando a rota, resolvendo gargalos e garantindo que a máquina funcione de verdade — mesmo quando você estiver fora da operação."
    }
  ]

  return (
    <section className="w-full bg-[#0A1628] py-16 md:py-20 lg:py-24 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-[201px] relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-20">
          <FadeIn className="lg:w-[400px] xl:w-[493px] flex-shrink-0">
            <h2 className="text-white text-[28px] md:text-[36px] lg:text-[42px] font-inter font-bold leading-tight mb-6">
              Crescimento consistente não acontece por sorte. Ele é construído com processo.
            </h2>
            <p className="text-gray-400 text-[14px] md:text-[15px] lg:text-[16px] font-inter leading-[1.7] mb-6">
              Na Loopscale, não entregamos planos prontos ou apresentações bonitas.
            </p>
            <p className="text-gray-400 text-[14px] md:text-[15px] lg:text-[16px] font-inter leading-[1.7] mb-8">
              A gente entra na operação para construir com você uma Máquina de Receita Previsível — uma estrutura viva, aplicada no dia a dia, capaz de transformar caos em crescimento com método.
            </p>
            <p className="text-white text-[18px] md:text-[20px] font-inter font-bold mb-8">
              Aqui está como fazemos isso acontecer:
            </p>
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

          <FadeInStagger staggerDelay={0.1} className="flex-1">
            <div className="relative">
              <div className="absolute left-[29px] top-0 bottom-0 w-[2px] bg-loopscale-blue/30 hidden md:block" />
              
              {steps.map((step, index) => (
                <FadeInStaggerItem key={index} className="flex gap-6 mb-8 last:mb-0">
                  <div className="relative flex-shrink-0">
                    <div className="w-[59px] h-[59px] rounded-full border-2 border-loopscale-blue flex items-center justify-center bg-[#0A1628]">
                      <span className="text-white text-[16px] font-inter font-bold">
                        {step.number}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-white text-[18px] md:text-[20px] font-inter font-bold uppercase tracking-wide mb-2">
                      {step.title}
                    </h3>
                    {step.subtitle && (
                      <p className="text-white text-[14px] font-inter font-medium mb-2">
                        {step.subtitle}
                      </p>
                    )}
                    <p className="text-gray-400 text-[14px] md:text-[15px] font-inter leading-[1.6]">
                      {step.desc}
                    </p>
                  </div>
                </FadeInStaggerItem>
              ))}
            </div>
          </FadeInStagger>
        </div>
      </div>
    </section>
  )
}
