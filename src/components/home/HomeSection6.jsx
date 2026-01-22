import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { FadeIn } from '../animations/FadeIn'

export default function HomeSection6() {
  const [isMobile, setIsMobile] = useState(false)
  const [centerVideo, setCenterVideo] = useState(0) // Índice do vídeo central
  const [shouldAutoplay, setShouldAutoplay] = useState(false) // Controla autoplay após 2s

  const videos = [
    { id: 0, youtubeId: "e_YcfUoHOWU", title: "Como uma Empresa Economizou 703 mil em Anúncios e Gerou 2 milhões em Faturamento." },
    { id: 1, youtubeId: "hyX0YadB5gs", title: "De R$400 mil para R$1,5 milhão: como organizar sua operação para escalar de verdade!" },
    { id: 2, youtubeId: "s3yBgM44LqQ", title: "VENDENDO R$ 95 MIL REAIS EM 30 DIAS EM UMA LOJA VIRTUAL" },
    { id: 3, youtubeId: "bNqWbjdIxoc", title: "600 Mil visitas Orgânicas - Como parar de depender de tráfego pago!" }
  ]

  // Detectar se é mobile para renderizar apenas uma versão dos iframes
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Autoplay após 2 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldAutoplay(true)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  // Função para obter os vídeos visíveis (esquerda, centro, direita)
  const getVisibleVideos = () => {
    const total = videos.length
    const left = (centerVideo - 1 + total) % total
    const right = (centerVideo + 1) % total
    return { left, center: centerVideo, right }
  }

  const visibleVideos = getVisibleVideos()

  // Navegação
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

        <FadeIn delay={0.2} className="relative mb-8 md:mb-12">
          {/* Desktop: Slider de vídeos com navegação */}
          {!isMobile && (
            <div className="hidden md:block relative px-4">
              {/* Container principal com setas */}
              <div className="flex items-center justify-center gap-4 md:gap-6">
                {/* Seta esquerda */}
                <button 
                  onClick={goToPrevious}
                  className="absolute left-2 lg:left-8 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all hover:scale-110"
                  aria-label="Vídeo anterior"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>

                {/* Vídeo da esquerda - clicável para centralizar */}
                <motion.div 
                  className="w-[180px] lg:w-[280px] xl:w-[384px] h-[300px] md:h-[400px] lg:h-[500px] xl:h-[614px] rounded-lg overflow-hidden opacity-50 hover:opacity-70 transition-all cursor-pointer relative group"
                  onClick={goToPrevious}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
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

                {/* Vídeo central - principal com autoplay */}
                <AnimatePresence mode="wait">
                  <motion.div 
                    className="w-full md:w-[55%] lg:w-[60%] xl:w-[1085px] h-[300px] md:h-[400px] lg:h-[500px] xl:h-[614px] rounded-lg overflow-hidden shadow-2xl ring-2 ring-loopscale-blue/30"
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

                {/* Vídeo da direita - clicável para centralizar */}
                <motion.div 
                  className="w-[180px] lg:w-[280px] xl:w-[384px] h-[300px] md:h-[400px] lg:h-[500px] xl:h-[614px] rounded-lg overflow-hidden opacity-50 hover:opacity-70 transition-all cursor-pointer relative group"
                  onClick={goToNext}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
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

                {/* Seta direita */}
                <button 
                  onClick={goToNext}
                  className="absolute right-2 lg:right-8 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all hover:scale-110"
                  aria-label="Próximo vídeo"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </div>

              {/* Indicadores (dots) */}
              <div className="flex justify-center gap-3 mt-8">
                {videos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToVideo(index)}
                    className={`transition-all duration-300 ${
                      centerVideo === index 
                        ? 'w-8 h-3 bg-loopscale-blue rounded-full' 
                        : 'w-3 h-3 bg-gray-600 hover:bg-gray-500 rounded-full'
                    }`}
                    aria-label={`Ir para vídeo ${index + 1}`}
                  />
                ))}
              </div>

              {/* Contador de vídeos */}
              <p className="text-center text-gray-500 text-sm mt-4">
                {centerVideo + 1} de {videos.length} cases
              </p>
            </div>
          )}

          {/* Mobile: Swipeable slider */}
          {isMobile && (
            <div className="relative">
              <div 
                className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 px-4"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {videos.map((video, index) => (
                  <div 
                    key={index}
                    className="flex-shrink-0 w-full snap-center"
                  >
                    <div className="w-full h-[300px] rounded-lg overflow-hidden">
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

              {/* Indicadores mobile */}
              <div className="flex justify-center gap-2 mt-4">
                {videos.map((_, index) => (
                  <div
                    key={index}
                    className="w-2 h-2 bg-gray-600 rounded-full"
                  />
                ))}
              </div>
              <p className="text-center text-gray-500 text-xs mt-2">
                Deslize para ver mais cases
              </p>
            </div>
          )}
        </FadeIn>
      </div>
    </section>
  )
}
