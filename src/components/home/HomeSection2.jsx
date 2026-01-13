import { ChevronRight, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { FadeIn, FadeInStagger, FadeInStaggerItem } from '../animations/FadeIn'
import cardImage1 from '../../img/home/section2-card-1.webp'
import cardImage2 from '../../img/home/section2-card-2.webp'
import cardImage3 from '../../img/home/section2-card-3.webp'

export default function HomeSection2() {
  const focusCards = [
    {
      title: "Eliminar decisões no escuro",
      bgColor: "bg-[#171717]",
      image: cardImage1
    },
    {
      title: "Parar o improviso que consome o time",
      bgColor: "bg-[#0e2530]",
      image: cardImage2
    },
    {
      title: "Substituir tarefas isoladas por um sistema de crescimento integrado",
      bgColor: "bg-loopscale-blue",
      image: cardImage3
    }
  ]

  const checkpoints = [
    "Escalar a receita com previsibilidade",
    "Criar uma operação que não dependa de você",
    "Tomar decisões com base em dados — não intuição ou WhatsApp"
  ]

  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-24">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-[201px]">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-20 mb-16 md:mb-20">
          <FadeIn className="flex-1 max-w-[453px]">
            <h2 className="text-black text-[28px] md:text-[36px] lg:text-[42px] font-inter font-bold leading-tight tracking-[-0.84px]">
              Não somos prestadores de serviço. Somos o parceiro que entra no jogo com você.
            </h2>
          </FadeIn>

          <FadeIn delay={0.1} className="flex-1 max-w-[508px]">
            <p className="text-[#615F5F] text-[14px] md:text-[15px] lg:text-[16px] font-inter leading-[1.7] mb-6">
              A Loopscale é fruto de mais de 15 anos de experiência na linha de frente do marketing, vendas e crescimento empresarial.
            </p>
            <p className="text-[#615F5F] text-[14px] md:text-[15px] lg:text-[16px] font-inter leading-[1.7] mb-6">
              Depois de atuar em mais de 100 operações, ficou claro: empresas que já faturam não precisam de mais um fornecedor — precisam de estrutura.
            </p>
            <p className="text-[#615F5F] text-[14px] md:text-[15px] lg:text-[16px] font-inter leading-[1.7]">
              Assumimos o papel de CRO Partner, atuando ao lado do CEO para construir uma máquina de crescimento real, baseada em dados, processos e rituais de execução.
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
                Fale com nossa equipe
                <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          </FadeIn>
        </div>

        <FadeIn className="mb-8">
          <p className="text-black text-[16px] md:text-[18px] font-inter font-medium">
            Nosso foco é simples:
          </p>
        </FadeIn>

        <FadeInStagger staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-16 md:mb-20">
          {focusCards.map((card, index) => (
            <FadeInStaggerItem key={index}>
              <div className={`${card.bgColor} rounded-lg p-6 h-[400px] md:h-[450px] lg:h-[465px] flex flex-col justify-between overflow-hidden relative`}>
                <h3 className="text-white text-[20px] md:text-[22px] lg:text-[24px] font-montserrat font-bold leading-tight tracking-[-0.72px] relative z-10 px-4">
                  {card.title}
                </h3>
                <div className="relative w-full h-[280px] md:h-[300px] flex items-center justify-center">
                  <div className="w-[280px] h-[280px] md:w-[300px] md:h-[300px] rounded-full relative overflow-hidden">
                    <div 
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `url(${card.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: '50% 50%',
                        backgroundRepeat: 'no-repeat'
                      }}
                    />
                    <div 
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: 'radial-gradient(circle, transparent 40%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0.8) 100%)'
                      }}
                    />
                  </div>
                </div>
              </div>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-20 mb-16 md:mb-20">
          <FadeIn className="flex-1 max-w-[700px]">
            <p className="text-black text-[24px] md:text-[32px] lg:text-[40px] font-inter font-bold italic leading-tight">
              Essa não é uma promessa teórica. É uma metodologia criada, testada e refinada ao longo de mais de uma década, com empresas de diferentes portes, setores e estágios de maturidade. Você não precisa de mais um fornecedor de mídia, landing page ou relatório.
            </p>
          </FadeIn>

          <FadeIn delay={0.2} className="flex-shrink-0 self-end">
            <Link 
              to="/contato"
              className="relative overflow-hidden inline-flex bg-loopscale-blue text-white px-5 py-4 items-center gap-[10px] font-inter text-[14px] tracking-[0.84px] group"
            >
              <span 
                className="absolute inset-0 bg-loopscale-blue-dark transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"
                aria-hidden="true"
              />
              <span className="relative z-10 flex items-center gap-[10px]">
                Fale com nossa equipe
                <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          </FadeIn>
        </div>

        <FadeIn className="mb-8">
          <h3 className="text-black text-[28px] md:text-[36px] lg:text-[42px] font-inter font-bold leading-tight max-w-[533px]">
            Você precisa de alguém que enxergue o todo, pense como dono e entregue estrutura para:
          </h3>
        </FadeIn>

        <FadeInStagger staggerDelay={0.15} className="mb-16 md:mb-20">
          <div className="border-t border-gray-300 pt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {checkpoints.map((item, index) => (
                <FadeInStaggerItem key={index} className="flex flex-col items-center text-center">
                  <div className="w-[61px] h-[61px] rounded-full border-2 border-loopscale-blue flex items-center justify-center mb-4">
                    <CheckCircle size={30} className="text-loopscale-blue" />
                  </div>
                  <p className="text-loopscale-blue text-[16px] md:text-[18px] font-inter font-medium leading-tight">
                    {item}
                  </p>
                </FadeInStaggerItem>
              ))}
            </div>
          </div>
        </FadeInStagger>

        <FadeIn>
          <p className="text-[#615F5F] text-[14px] md:text-[16px] font-inter leading-[1.7] max-w-[593px]">
            Você já provou que tem um produto bom.<br />
            Seu negócio já vende, já entrega, já fatura.<br />
            Mas crescer com consistência — mês após mês — virou um desafio?
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
