import { FadeInStagger, FadeInStaggerItem } from '../animations/FadeIn'

const videos = [
  { 
    id: "5X7P_kUUc2M", 
    title: "Como Usar o Tráfego Pago para Alavancar as Vendas da sua Empresa!" 
  },
  { 
    id: "oMZyt0YtkmY", 
    title: "Como uma Empresa Economizou 703 mil em Anúncios e Gerou 2 milhões em Faturamento." 
  },
  { 
    id: "9TmVfOwkfmE", 
    title: "Conteúdo que Vira Receita: pare de postar por postar e comece a vender com estratégia!" 
  },
  { 
    id: "VV4Cu3HPvzM", 
    title: "Diagnóstico Consultivo: como vender com autoridade (e parar de parecer desesperado)!" 
  },
  { 
    id: "eqq2q91sUIU", 
    title: "Descubra porque sua empresa não cresce mesmo investindo cada vez mais em Marketing" 
  },
  { 
    id: "9-1IO-YYM4k", 
    title: "Como Estruturar Seu Funil de Vendas para Gerar mais Conversões em Vendas" 
  },
  { 
    id: "x4Hok3YdRtk", 
    title: "Marketing que Vende: como transformar conteúdo em receita (sem depender de sorte)!" 
  },
  { 
    id: "I4XpKNsb3zQ", 
    title: "Reunião Magnética- Alcance resultados reais de vendas!" 
  },
  { 
    id: "4Y8JqHGcHrA", 
    title: "Síndrome do Mês Zero: por que sua empresa começa todo mês do zero (e como sair disso)." 
  }
]

export default function AulasGrid() {
  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-24">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-[200px]">
        <FadeInStagger staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {videos.map((video, index) => (
            <FadeInStaggerItem key={index} className="flex flex-col">
              <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-3">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="text-black text-[14px] md:text-[15px] font-inter leading-[1.5]">
               
              </p>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  )
}
