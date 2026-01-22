import { ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { FadeIn, FadeInStagger, FadeInStaggerItem } from './animations/FadeIn'
import iconeEscudo from '../img/icone_escudo.webp'

export default function AboutMission() {
  const painPoints = [
    "Time comercial correndo atrás de meta sem saber onde exatamente está travando.",
    "Campanhas de marketing que até geram cliques e likes, mas não trazem previsibilidade no faturamento.",
    "Caixa apertado no fim do mês, mesmo com muito esforço e investimento.",
    "Dependência de indicações e clientes recorrentes, sem controle real do crescimento.",
    "Sensação de estar sempre \"apagando incêndios\" ao invés de conduzir o negócio com clareza."
  ]

  const services = [
    "Estruturamos times de vendas para que deixem de depender de heróis individuais.",
    "Identificamos onde a operação trava e eliminamos os pontos de vazamento de receita.",
    "Conectamos marketing e comercial em um fluxo único, capaz de gerar leads qualificados e clientes consistentes.",
    "Aplicamos métodos validados que já ajudaram empresas de diferentes setores a crescerem de forma estável e lucrativa."
  ]

  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-20">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-[216px]">
        <FadeIn>
          <h2 className="text-black text-[24px] md:text-[28px] lg:text-[35px] font-inter font-bold leading-tight tracking-[-0.72px] md:tracking-[-1.05px] mb-10 md:mb-16 lg:mb-20">
            E você provavelmente<br />já sentiu isso na pele:
          </h2>
        </FadeIn>

        <div className="relative mb-12 md:mb-20 lg:mb-32">
          <div className="hidden md:block absolute top-[11px] left-[17px] right-[17px] h-[1px] bg-gray-300"></div>
          
          <FadeInStagger staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-6 md:gap-8">
            {painPoints.map((point, index) => (
              <FadeInStaggerItem key={index} className="relative">
                <div className="w-[18px] h-[18px] md:w-[21px] md:h-[21px] bg-loopscale-blue rounded-full mb-4 md:mb-5"></div>
                <p className="text-[#615F5F] text-[14px] md:text-[15px] font-inter leading-[1.6] tracking-[-0.45px]">
                  {point}
                </p>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </div>

        <FadeIn>
          <div className="mb-10 md:mb-16 lg:mb-20">
            <h3 className="text-black text-[24px] md:text-[28px] lg:text-[35px] font-inter font-normal leading-tight tracking-[-0.72px] md:tracking-[-1.05px] mb-6 md:mb-8">
              Nossa missão
            </h3>
            <p className="text-[#6d6d6d] text-[16px] md:text-[18px] lg:text-[20px] font-inter leading-[1.5] tracking-[-0.6px] max-w-[636px]">
              Transformar esse cenário de caos em um modelo previsível de crescimento. Criamos processos claros que integram marketing e vendas, organizamos as etapas do funil e desenhamos metas reais e não achismos. Assim, cada decisão deixa de ser um chute e passa a ser parte de uma engrenagem de escala.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 md:mb-10">
            <p className="text-[#615F5F] text-[12px] md:text-[14px] font-inter uppercase tracking-[0.84px]">
              O que fazemos
            </p>
            
            <a 
              href="#contato" 
              className="relative overflow-hidden bg-loopscale-blue text-white px-5 py-3 md:px-[20px] md:py-[16px] h-auto md:h-[53px] flex items-center justify-center gap-[10px] font-inter text-[14px] tracking-[0.84px] w-full sm:w-auto group"
            >
              <span 
                className="absolute inset-0 bg-loopscale-blue-dark transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"
                aria-hidden="true"
              />
              <span className="relative z-10 flex items-center gap-[10px]">
                Fale com nossa equipe
                <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </a>
          </div>
        </FadeIn>

        <FadeInStagger staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-[18px]">
          {services.map((service, index) => (
            <FadeInStaggerItem key={index}>
              <motion.div 
                className="bg-loopscale-blue p-5 md:p-[23px] min-h-[200px] md:min-h-[280px] lg:min-h-[308px] flex flex-col h-full"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="w-12 h-12 md:w-[56px] md:h-[56px] bg-white rounded-lg flex items-center justify-center mb-6 md:mb-8">
                  <img src={iconeEscudo} alt="Ícone" className="w-6 h-6 md:w-[30px] md:h-[30px]" />
                </div>
                <p className="text-white text-[14px] md:text-[15px] font-inter leading-[1.6] tracking-[-0.45px]">
                  {service}
                </p>
              </motion.div>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  )
}
