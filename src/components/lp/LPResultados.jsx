import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { FadeIn } from '../animations/FadeIn'

const videos = [
  { id: 0, youtubeId: 'e_YcfUoHOWU', title: 'Como uma Empresa Economizou 703 mil em Anúncios e Gerou 2 milhões em Faturamento.' },
  { id: 1, youtubeId: 'hyX0YadB5gs', title: 'De R$400 mil para R$1,5 milhão: como organizar sua operação para escalar de verdade!' },
  { id: 2, youtubeId: 's3yBgM44LqQ', title: 'VENDENDO R$ 95 MIL REAIS EM 30 DIAS EM UMA LOJA VIRTUAL' },
  { id: 3, youtubeId: 'bNqWbjdIxoc', title: '600 Mil visitas Orgânicas - Como parar de depender de tráfego pago!' }
]

export default function LPResultados() {
  const [isMobile, setIsMobile] = useState(false)
  const [centerVideo, setCenterVideo] = useState(0)
  const [shouldAutoplay, setShouldAutoplay] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => setShouldAutoplay(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  const getVisibleVideos = () => {
    const total = videos.length
    const left = (centerVideo - 1 + total) % total
    const right = (centerVideo + 1) % total
    return { left, center: centerVideo, right }
  }

  const visibleVideos = getVisibleVideos()

  const goToPrevious = () => {
    setCenterVideo((prev) => (prev - 1 + videos.length) % videos.length)
    setShouldAutoplay(false)
  }

  const goToNext = () => {
    setCenterVideo((prev) => (prev + 1) % videos.length)
    setShouldAutoplay(false)
  }

  const goToVideo = (index) => {
    setCenterVideo(index)
    setShouldAutoplay(false)
  }

  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-24">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-[212px]">
        <FadeIn className="text-center mb-8 md:mb-12">
          <h2 className="text-black text-[28px] md:text-[36px] lg:text-[48px] xl:text-[56px] font-inter font-bold leading-tight tracking-[-0.84px] md:tracking-[-1.68px]">
            Cases de Sucesso
          </h2>
          <p className="text-[#615F5F] text-[15px] md:text-[16px] leading-[1.6] max-w-[760px] mx-auto">
            Veja como os vídeos explicam em detalhe o impacto do nosso trabalho e porque o marketing da sua empresa
            precisa de um sistema com processos integrados.
          </p>
        </FadeIn>

        <FadeIn delay={0.2} className="relative mb-8 md:mb-10">
          {!isMobile && (
            <div className="hidden md:block relative">
              <div className="flex items-center justify-center gap-6">
                <button
                  onClick={goToPrevious}
                  className="absolute left-2 lg:left-8 z-10 w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all hover:scale-110 shadow"
                  aria-label="Vídeo anterior"
                >
                  <ChevronLeft className="w-6 h-6 text-loopscale-blue" />
                </button>
                <motion.div
                  className="w-[200px] lg:w-[280px] xl:w-[320px] h-[240px] lg:h-[320px] rounded-lg overflow-hidden opacity-50 hover:opacity-70 transition-all cursor-pointer relative group"
                  onClick={goToPrevious}
                  whileHover={{ scale: 1.02 }}
                >
                  <iframe
                    className="w-full h-full pointer-events-none"
                    src={`https://www.youtube.com/embed/${videos[visibleVideos.left].youtubeId}`}
                    title={videos[visibleVideos.left].title}
                    frameBorder="0"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                </motion.div>

                <AnimatePresence mode="wait">
                  <motion.div
                    className="w-full md:w-[55%] lg:w-[55%] xl:w-[780px] h-[240px] lg:h-[340px] rounded-lg overflow-hidden shadow-2xl ring-2 ring-loopscale-blue/30"
                    key={centerVideo}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                  >
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${videos[visibleVideos.center].youtubeId}${shouldAutoplay ? '?autoplay=1&mute=1' : ''}`}
                      title={videos[visibleVideos.center].title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </motion.div>
                </AnimatePresence>

                <motion.div
                  className="w-[200px] lg:w-[280px] xl:w-[320px] h-[240px] lg:h-[320px] rounded-lg overflow-hidden opacity-50 hover:opacity-70 transition-all cursor-pointer relative group"
                  onClick={goToNext}
                  whileHover={{ scale: 1.02 }}
                >
                  <iframe
                    className="w-full h-full pointer-events-none"
                    src={`https://www.youtube.com/embed/${videos[visibleVideos.right].youtubeId}`}
                    title={videos[visibleVideos.right].title}
                    frameBorder="0"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                </motion.div>

                <button
                  onClick={goToNext}
                  className="absolute right-2 lg:right-8 z-10 w-12 h-12 rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center transition-all hover:scale-110"
                  aria-label="Próximo vídeo"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </div>

              <div className="flex justify-center gap-3 mt-6">
                {videos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToVideo(index)}
                    className={`transition-all duration-300 ${centerVideo === index ? 'w-10 h-3 bg-loopscale-blue rounded-full' : 'w-3 h-3 bg-gray-500 hover:bg-gray-400 rounded-full'}`}
                    aria-label={`Ir para vídeo ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          )}

          {isMobile && (
            <div className="relative">
              <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 px-4"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {videos.map((video, index) => (
                  <div key={index} className="flex-shrink-0 w-full snap-center">
                    <div className="w-full h-[240px] md:h-[320px] rounded-lg overflow-hidden">
                      <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${video.youtubeId}${index === 0 && shouldAutoplay ? '?autoplay=1&mute=1' : ''}`}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center gap-2 mt-4">
                {videos.map((_, index) => (
                  <div key={index} className="w-2 h-2 bg-gray-600 rounded-full" />
                ))}
              </div>
            </div>
          )}
        </FadeIn>
      </div>
    </section>
  )
}
