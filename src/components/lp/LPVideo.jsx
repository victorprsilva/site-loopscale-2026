import { useState } from 'react'
import { Play } from 'lucide-react'
import { FadeIn } from '../animations/FadeIn'

export default function LPVideo() {
  const [isPlaying, setIsPlaying] = useState(false)
  
  const videoId = "e_YcfUoHOWU"

  const handlePlayVideo = () => {
    setIsPlaying(true)
  }

  return (
    <section className="w-full bg-black py-12 md:py-16 lg:py-24">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-[212px]">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-24 items-center">
          <div className="flex-1 max-w-[522px]">
            <FadeIn>
              <h2 className="text-white text-[24px] md:text-[32px] lg:text-[42px] font-inter font-bold leading-tight tracking-[-0.84px] md:tracking-[-1.26px] mb-8">
                "Já ajudamos mais de 100 empresas a crescerem com estratégias de marketing digital completas."
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-[#615F5F] text-[15px] md:text-[16px] lg:text-[18px] font-inter leading-[1.7] mb-8">
                Gerenciamos mais de R$ 3 milhões por mês em campanhas e projetos digitais, Integrando, marketing, vendas, atendimento, IA e dados para gerar receita previsível para nossos clientes.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-loopscale-blue text-white px-4 py-2 rounded-full">
                  <span className="text-[14px] md:text-[16px] font-inter font-medium">+15 anos</span>
                </div>
              </div>
              <p className="text-[#615F5F] text-[15px] md:text-[16px] lg:text-[18px] font-inter leading-[1.7]">
                de experiência em Marketing Digital e performance.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.4} direction="left" className="w-full lg:w-[772px] flex-shrink-0">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-xl">
              {isPlaying ? (
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <>
                  <img 
                    src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                    alt="Vídeo Loop Scale"
                    className="w-full h-full object-cover"
                  />
                  <div 
                    className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/20 hover:bg-black/30 transition-colors"
                    onClick={handlePlayVideo}
                  >
                    <div className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-full bg-red-600 flex items-center justify-center hover:bg-red-700 transition-colors hover:scale-110 transform duration-200">
                      <Play size={28} className="text-white ml-1" fill="white" />
                    </div>
                  </div>
                </>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
