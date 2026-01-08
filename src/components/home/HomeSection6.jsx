import { useState } from 'react'
import { Play } from 'lucide-react'
import { FadeIn } from '../animations/FadeIn'
import thumbImage from '../../img/thumb.png'

export default function HomeSection6() {
  const [activeVideo, setActiveVideo] = useState(null)

  const videos = [
    { id: 0, youtubeId: "MLpWrANjFbI", title: "Case 1" },
    { id: 1, youtubeId: "MLpWrANjFbI", title: "Everything aligned" },
    { id: 2, youtubeId: "MLpWrANjFbI", title: "Case 3" }
  ]

  const handlePlayVideo = (videoId) => {
    setActiveVideo(videoId)
  }

  return (
    <section className="w-full bg-black py-16 md:py-20 lg:py-24">
      <div className="max-w-[1920px] mx-auto">
        <FadeIn className="text-center mb-8 md:mb-12 px-6">
          <h2 className="text-white text-[32px] md:text-[42px] lg:text-[56px] font-inter font-bold leading-tight tracking-[-0.84px] md:tracking-[-1.68px] mb-6">
            Resultados que vêm de processo. Não de sorte.
          </h2>
          <p className="text-gray-400 text-[14px] md:text-[16px] font-inter leading-[1.6] max-w-[600px] mx-auto mb-4">
            Mais de 100 empresas já passaram pela estrutura da Loopscale.<br />
            De diferentes setores, portes e modelos de negócio.<br />
            Todas tinham uma coisa em comum: já faturavam — mas queriam mais do que "sobreviver bem".
          </p>
          <p className="text-white text-[14px] md:text-[16px] font-inter leading-[1.6]">
            Elas queriam crescer com método.
          </p>
        </FadeIn>

        <FadeIn delay={0.2} className="relative mb-8 md:mb-12 px-4">
          <div className="flex items-center justify-center gap-4 md:gap-6">
            <div 
              className="hidden md:block w-[200px] lg:w-[384px] h-[300px] md:h-[450px] lg:h-[614px] rounded-lg overflow-hidden opacity-70 cursor-pointer hover:opacity-90 transition-opacity relative"
              onClick={() => handlePlayVideo(0)}
            >
              {activeVideo === 0 ? (
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${videos[0].youtubeId}?autoplay=1`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <>
                  <img 
                    src={thumbImage}
                    alt="Case anterior"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[50px] h-[50px] rounded-full bg-gray-600/80 border-2 border-loopscale-blue flex items-center justify-center hover:bg-gray-500/80 transition-colors">
                      <Play size={20} className="text-white ml-1" fill="white" />
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="relative w-full md:w-[55%] lg:w-[1085px] h-[300px] md:h-[450px] lg:h-[614px] rounded-lg overflow-hidden">
              {activeVideo === 1 ? (
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${videos[1].youtubeId}?autoplay=1`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <>
                  <img 
                    src={thumbImage}
                    alt="Everything aligned"
                    className="w-full h-full object-cover"
                  />
                  <div 
                    className="absolute inset-0 flex items-center justify-center cursor-pointer"
                    onClick={() => handlePlayVideo(1)}
                  >
                    <div className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-full bg-gray-600/80 border-2 border-loopscale-blue flex items-center justify-center hover:bg-gray-500/80 transition-colors">
                      <Play size={24} className="text-white ml-1" fill="white" />
                    </div>
                  </div>
                </>
              )}
            </div>

            <div 
              className="hidden md:block w-[200px] lg:w-[384px] h-[300px] md:h-[450px] lg:h-[614px] rounded-lg overflow-hidden opacity-70 cursor-pointer hover:opacity-90 transition-opacity relative"
              onClick={() => handlePlayVideo(2)}
            >
              {activeVideo === 2 ? (
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${videos[2].youtubeId}?autoplay=1`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <>
                  <img 
                    src={thumbImage}
                    alt="Próximo case"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[50px] h-[50px] rounded-full bg-gray-600/80 border-2 border-loopscale-blue flex items-center justify-center hover:bg-gray-500/80 transition-colors">
                      <Play size={20} className="text-white ml-1" fill="white" />
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {videos.map((video, index) => (
              <button
                key={index}
                onClick={() => handlePlayVideo(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeVideo === index ? 'bg-loopscale-blue' : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
