import { FadeInStagger, FadeInStaggerItem } from '../animations/FadeIn'

const videos = [
  { 
    id: "MLpWrANjFbI", 
    title: "Como Usar o Tráfego Pago para Alavancar as Vendas da sua Empresa!" 
  },
  { 
    id: "MLpWrANjFbI", 
    title: "Como uma Empresa Economizou 703 mil em Anúncios e Gerou 2 milhões em Faturamento." 
  },
  { 
    id: "MLpWrANjFbI", 
    title: "Conteúdo que Vira Receita: pare de postar por postar e comece a vender com estratégia!" 
  },
  { 
    id: "MLpWrANjFbI", 
    title: "Diagnóstico Consultivo: como vender com autoridade (e parar de parecer desesperado)!" 
  },
  { 
    id: "MLpWrANjFbI", 
    title: "Descubra porque sua empresa não cresce mesmo investindo cada vez mais em Marketing" 
  },
  { 
    id: "MLpWrANjFbI", 
    title: "Como Estruturar Seu Funil de Vendas para Gerar mais Conversões em Vendas" 
  },
  { 
    id: "MLpWrANjFbI", 
    title: "Marketing que Vende: como transformar conteúdo em receita (sem depender de sorte)!" 
  },
  { 
    id: "MLpWrANjFbI", 
    title: "Reunião Magnética- Alcance resultados reais de vendas!" 
  },
  { 
    id: "MLpWrANjFbI", 
    title: "Síndrome do Mês Zero: por que sua empresa começa todo mês do zero (e como sair disso)." 
  }
]

export default function AulasGrid() {
  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-24">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 xl:px-[200px]">
        <FadeInStagger staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
                {video.title}
              </p>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  )
}
