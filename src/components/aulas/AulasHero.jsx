import { useState } from 'react'
import { Play } from 'lucide-react'
import { FadeIn } from '../animations/FadeIn'
import channelLogo from '../../img/aulas/channel-logo.webp'

export default function AulasHero() {
  const [isPlaying, setIsPlaying] = useState(false)
  
  const featuredVideoId = "X6m_pr0lXKs"

  const handlePlayVideo = () => {
    setIsPlaying(true)
  }

  return (
    <section className="w-full bg-black pt-[120px] md:pt-[140px] pb-12 md:pb-16 lg:pb-20">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-16 xl:px-24">
        <FadeIn className="text-center mb-8 md:mb-12">
          <div className="flex justify-center mb-4">
            <div className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] lg:w-[141px] lg:h-[141px] rounded-full overflow-hidden bg-white flex items-center justify-center">
              <img 
                src={channelLogo}
                alt="Loop Scale"
                className="w-[79px] h-[60px] object-contain"
              />
            </div>
          </div>
          <p className="text-gray-400 text-[12px] md:text-[14px] font-inter mb-4">
            @loop_scale – 43K subscribers – 281 videos
          </p>
          <h1 className="text-white text-[24px] md:text-[32px] lg:text-[42px] font-inter font-bold leading-tight tracking-[-0.84px] md:tracking-[-1.26px] mb-3">
            Loop Scale - Estratégias para Dobrar Sua Receita
          </h1>
          <p className="text-gray-400 text-[14px] md:text-[16px] font-inter">
            Especialistas em Estratégias de Crescimento de Negócios | Estratégia, Execução e Performance
          </p>
        </FadeIn>

        <FadeIn delay={0.2} className="flex justify-center">
          <div className="relative w-full max-w-[900px] xl:max-w-[1059px] h-[300px] md:h-[400px] lg:h-[480px] xl:h-[588px] rounded-lg overflow-hidden">
            {isPlaying ? (
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${featuredVideoId}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <>
                <img 
                  src={`https://img.youtube.com/vi/${featuredVideoId}/maxresdefault.jpg`}
                  alt="Aula Loop Scale"
                  className="w-full h-full object-cover"
                />
                <div 
                  className="absolute inset-0 flex items-center justify-center cursor-pointer"
                  onClick={handlePlayVideo}
                >
                  <div className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-full bg-red-600 flex items-center justify-center hover:bg-red-700 transition-colors">
                    <Play size={28} className="text-white ml-1" fill="white" />
                  </div>
                </div>
              </>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
