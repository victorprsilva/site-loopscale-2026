import { ChevronRight, TrendingUp, HandCoins, BarChart3 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { FadeIn, FadeInStagger, FadeInStaggerItem } from '../animations/FadeIn'

const heroImage1 = "https://www.figma.com/api/mcp/asset/e932723e-e788-44eb-930a-7aba4075a784"
const heroImage2 = "https://www.figma.com/api/mcp/asset/eed46c77-5c20-4374-84e3-8bfbbd31b728"
const heroImage3 = "https://www.figma.com/api/mcp/asset/c0f18363-9f62-4ef2-b5d6-c4ae2a6f5506"
const heroImage4 = "https://www.figma.com/api/mcp/asset/b105775c-83e1-431b-b56e-d16a00aedcd7"
const heroImage5 = "https://www.figma.com/api/mcp/asset/fab97d76-2739-4ab8-a8b7-b9d75a15a9ce"
const heroImage6 = "https://www.figma.com/api/mcp/asset/1277b4d3-b774-4e7e-8f5c-20d99dfebc0a"

export default function HomeHero() {
  const bullets = [
    {
      icon: TrendingUp,
      title: "CRO de Performance atuando lado a lado com o CEO",
      desc: "Não somos fornecedores. Assumimos o papel estratégico de integrar marketing, vendas e atendimento com foco em receita e margem."
    },
    {
      icon: HandCoins,
      title: "Funis validados com metas por etapa e KPIs reais",
      desc: "Da atração ao fechamento, tudo mapeado. Cada etapa com indicadores, donos e ritmo. Menos achismo, mais execução com direção."
    },
    {
      icon: BarChart3,
      title: "Crescimento com margem, eficiência e autonomia de time",
      desc: "Você para de depender do improviso e ganha um sistema que gera vendas previsíveis — sem travar a operação nem depender só de anúncios."
    }
  ]

  return (
    <section className="w-full bg-black pt-[120px] md:pt-[140px] pb-12 md:pb-16 lg:pb-20">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-[201px]">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 mb-16 md:mb-20 lg:mb-24">
          <div className="flex-1 max-w-[550px]">
            <FadeIn>
              <h1 className="text-white text-[48px] md:text-[64px] lg:text-[80px] font-montserrat font-black italic leading-[1] tracking-[-2px] md:tracking-[-3px] mb-8">
                SUA<br />
                EMPRESA<br />
                JÁ FATURA.
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <h2 className="text-white text-[24px] md:text-[32px] lg:text-[40px] font-inter font-bold leading-tight tracking-[-0.84px] mb-6">
                Agora precisa de processo, previsibilidade e escala.
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-gray-400 text-[15px] md:text-[16px] lg:text-[18px] font-inter leading-[1.7] mb-8">
                Se sua empresa fatura entre <span className="text-loopscale-blue font-medium underline">R$100 mil e R$2 milhões</span> por mês, a Loopscale te ajuda a crescer com clareza, método e dados — sem mais depender de sorte, indicações ou heróis no time.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <Link 
                to="/contato"
                className="relative overflow-hidden inline-flex bg-loopscale-blue text-white px-5 py-4 items-center gap-[10px] font-inter text-[14px] tracking-[0.84px] group"
              >
                <span 
                  className="absolute inset-0 bg-loopscale-blue-dark transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"
                  aria-hidden="true"
                />
                <span className="relative z-10 flex items-center gap-[10px]">
                  Solicitar diagnóstico
                  <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </FadeIn>
          </div>

          <FadeIn delay={0.2} direction="left" className="flex-1">
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="col-span-1 row-span-1">
                <div className="w-full h-[200px] md:h-[280px] lg:h-[300px] xl:h-[431px] rounded-lg overflow-hidden">
                  <img src={heroImage1} alt="" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="col-span-1 row-span-1">
                <div className="w-full h-[200px] md:h-[280px] lg:h-[290px] xl:h-[418px] rounded-lg overflow-hidden">
                  <img src={heroImage2} alt="" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="col-span-1 row-span-1">
                <div className="w-full h-[180px] md:h-[240px] lg:h-[260px] xl:h-[364px] rounded-lg overflow-hidden">
                  <img src={heroImage3} alt="" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="col-span-1 row-span-1">
                <div className="w-full h-[180px] md:h-[240px] lg:h-[260px] xl:h-[361px] rounded-lg overflow-hidden">
                  <img src={heroImage4} alt="" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="col-span-1 row-span-1">
                <div className="w-full h-[180px] md:h-[240px] lg:h-[260px] xl:h-[361px] rounded-lg overflow-hidden">
                  <img src={heroImage6} alt="" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="col-span-1 row-span-1">
                <div className="w-full h-[180px] md:h-[240px] lg:h-[260px] xl:h-[361px] rounded-lg overflow-hidden">
                  <img src={heroImage5} alt="" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <FadeIn className="lg:w-[200px] flex-shrink-0">
            <h3 className="text-white text-[24px] md:text-[28px] font-inter font-bold leading-tight">
              Bullets com autoridade:
            </h3>
          </FadeIn>

          <FadeInStagger staggerDelay={0.1} className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {bullets.map((bullet, index) => (
              <FadeInStaggerItem key={index} className="flex flex-col">
                <div className="w-[58px] h-[53px] bg-loopscale-blue/10 rounded flex items-center justify-center mb-4">
                  <bullet.icon size={28} className="text-loopscale-blue" />
                </div>
                <h4 className="text-white text-[18px] md:text-[20px] font-inter font-bold leading-tight mb-3">
                  {bullet.title}
                </h4>
                <p className="text-gray-400 text-[14px] md:text-[15px] font-inter leading-[1.6]">
                  {bullet.desc}
                </p>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </div>
      </div>
    </section>
  )
}
