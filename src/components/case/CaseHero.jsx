import { useState, useRef } from 'react'
import { Play } from 'lucide-react'
import { motion } from 'framer-motion'
import { FadeIn, FadeInStagger, FadeInStaggerItem } from '../animations/FadeIn'
import thumbImage from '../../img/thumb.webp'
import logoComCristo from '../../img/case/logo-comcristo.webp'
import logoKings from '../../img/case/logo-kings.webp'
import logoYamaha from '../../img/case/logo-yamaha.webp'
import logoNacionalInn from '../../img/case/logo-nacionalinn.webp'
import logoAddebitare from '../../img/case/logo-addebitare.webp'
import logoShineray from '../../img/case/logo-shineray.webp'

export default function CaseHero() {
  const [activeVideo, setActiveVideo] = useState(null)
  const scrollContainerRef = useRef(null)
  const logoScrollRef = useRef(null)

  const videos = [
    { id: 0, youtubeId: "MLpWrANjFbI", title: "Case 1" },
    { id: 1, youtubeId: "MLpWrANjFbI", title: "Everything aligned" },
    { id: 2, youtubeId: "MLpWrANjFbI", title: "Case 3" }
  ]

  const logos = [
    { name: "Com Cristo", image: logoComCristo },
    { name: "Kings Sneakers", image: logoKings },
    { name: "Yamaha", image: logoYamaha },
    { name: "Nacional Inn", image: logoNacionalInn },
    { name: "Addebitare", image: logoAddebitare },
    { name: "Shineray", image: logoShineray }
  ]

  const handlePlayVideo = (videoId) => {
    setActiveVideo(videoId)
  }

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft
      const itemWidth = scrollContainerRef.current.offsetWidth
      const newSlide = Math.round(scrollLeft / itemWidth)
    }
  }

  return (
    <section className="w-full bg-black pt-[120px] md:pt-[140px] pb-12 md:pb-16 lg:pb-20">
      <div className="max-w-[1920px] mx-auto">
        <FadeIn className="text-center mb-8 md:mb-12 px-6">
          <h1 className="text-white text-[32px] md:text-[42px] lg:text-[56px] font-inter font-normal leading-tight tracking-[-0.84px] md:tracking-[-1.68px] mb-6">
            Case de sucesso
          </h1>
          <p className="text-gray-400 text-[14px] md:text-[16px] font-inter leading-[1.6] max-w-[400px] mx-auto mb-4">
            Veja na real o que já fizemos para mudar a vida de empresas que confiam em nós.
          </p>
          <p className="text-white text-[14px] md:text-[16px] font-inter leading-[1.6]">
            Elas queriam crescer com método.
          </p>
        </FadeIn>

        <FadeIn delay={0.2} className="relative mb-16 md:mb-20 lg:mb-24">
          {/* Desktop: 3 videos side by side */}
          <div className="hidden md:flex items-center justify-center gap-4 md:gap-6 px-4">
            <div 
              className="hidden md:block w-[180px] lg:w-[280px] xl:w-[384px] h-[300px] md:h-[400px] lg:h-[500px] xl:h-[614px] rounded-lg overflow-hidden opacity-70 cursor-pointer hover:opacity-90 transition-opacity relative"
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

            <div className="relative w-full md:w-[55%] lg:w-[60%] xl:w-[1085px] h-[300px] md:h-[400px] lg:h-[500px] xl:h-[614px] rounded-lg overflow-hidden">
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
              className="hidden md:block w-[180px] lg:w-[280px] xl:w-[384px] h-[300px] md:h-[400px] lg:h-[500px] xl:h-[614px] rounded-lg overflow-hidden opacity-70 cursor-pointer hover:opacity-90 transition-opacity relative"
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

          {/* Mobile: Swipeable slider */}
          <div 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="md:hidden flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 px-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {videos.map((video, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-full snap-center"
              >
                <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
                  {activeVideo === index ? (
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <>
                      <img 
                        src={thumbImage}
                        alt={video.title}
                        className="w-full h-full object-cover"
                      />
                      <div 
                        className="absolute inset-0 flex items-center justify-center cursor-pointer"
                        onClick={() => handlePlayVideo(index)}
                      >
                        <div className="w-[60px] h-[60px] rounded-full bg-gray-600/80 border-2 border-loopscale-blue flex items-center justify-center hover:bg-gray-500/80 transition-colors">
                          <Play size={24} className="text-white ml-1" fill="white" />
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Desktop: Grid of logos */}
        <FadeInStagger staggerDelay={0.1} className="hidden md:block px-4 md:px-8 lg:px-16">
          <div className="flex flex-wrap justify-center gap-0">
            {logos.map((logo, index) => (
              <FadeInStaggerItem key={index}>
                <motion.div 
                  className="bg-white w-[160px] md:w-[180px] lg:w-[224px] h-[130px] md:h-[150px] lg:h-[176px] flex items-center justify-center p-4"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <img 
                    src={logo.image}
                    alt={logo.name}
                    className="max-w-[80%] max-h-[80%] object-contain"
                  />
                </motion.div>
              </FadeInStaggerItem>
            ))}
          </div>
        </FadeInStagger>

        {/* Mobile: Slider with 2 logos at a time */}
        <FadeIn className="md:hidden px-4">
          <div 
            ref={logoScrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {Array.from({ length: Math.ceil(logos.length / 2) }).map((_, slideIndex) => (
              <div 
                key={slideIndex}
                className="flex-shrink-0 w-full snap-center flex gap-0"
              >
                {logos.slice(slideIndex * 2, slideIndex * 2 + 2).map((logo, index) => (
                  <div 
                    key={index}
                    className="bg-white w-1/2 h-[130px] flex items-center justify-center p-4"
                  >
                    <img 
                      src={logo.image}
                      alt={logo.name}
                      className="max-w-[80%] max-h-[80%] object-contain"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-4">
            {Array.from({ length: Math.ceil(logos.length / 2) }).map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-gray-600"
              />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
