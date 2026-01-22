import { useState } from 'react'
import { ChevronRight, Play } from 'lucide-react'
import { FadeIn, FadeInStagger, FadeInStaggerItem } from '../animations/FadeIn'
import { motion } from 'framer-motion'

import crmImg from '../../img/lp/CRM configurado do zero.webp'
import mensagensImg from '../../img/lp/Mensagens automáticas integradas ao funil.webp'
import iaImg from '../../img/lp/IA para prospecção e qualificação de leads.webp'
import relatoriosImg from '../../img/lp/Relatórios inteligentes.webp'
import maquinaDigitalImg from '../../img/lp/Toda a sua máquina digital rodando em até 7 dias.webp'

export default function LPExtras() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoId = "e_YcfUoHOWU"

  const extras = [
    {
      image: crmImg,
      highlight: "CRM configurado do zero,",
      text: "pronto para registrar e acompanhar todos os leads"
    },
    {
      image: mensagensImg,
      highlight: "Mensagens automáticas integradas ao funil",
      text: "via WhatsApp e e-mail"
    },
    {
      image: iaImg,
      highlight: "IA para prospecção e qualificação de leads,",
      text: "acelerando vendas"
    },
    {
      image: relatoriosImg,
      highlight: "Relatórios inteligentes:",
      text: "receba diariamente via IA um resumo das campanhas"
    },
    {
      image: maquinaDigitalImg,
      highlight: "Toda a sua máquina digital rodando em até 30 dias:",
      text: "tráfego, CRM e automações"
    }
  ]

  const handlePlayVideo = () => {
    setIsPlaying(true)
  }

  return (
    <section className="w-full bg-black py-12 md:py-16 lg:py-24">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-[212px]">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 mb-12 md:mb-16">
          <FadeIn>
            <h2 className="text-white text-[28px] md:text-[36px] lg:text-[48px] font-inter font-bold leading-[1.1] tracking-[-1px] md:tracking-[-1.5px] max-w-[512px]">
              E mais — muito além das campanhas de mídia paga:
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="relative overflow-hidden inline-flex items-center gap-2 bg-loopscale-blue text-white px-6 py-4 font-inter text-[14px] tracking-[0.84px] transition-colors duration-300 group"
            >
              <span 
                className="absolute inset-0 bg-loopscale-blue-dark transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"
                aria-hidden="true"
              />
              <span className="relative z-10 flex items-center gap-2">
                Fale com nossa equipe
                <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </button>
          </FadeIn>
        </div>

        <FadeInStagger staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24">
          {extras.map((extra, index) => (
            <FadeInStaggerItem key={index}>
              <motion.div 
                className="flex flex-col"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="w-[91px] h-[4px] bg-loopscale-blue mb-4"></div>
                <div className="relative overflow-hidden rounded-lg aspect-[4/3] mb-4">
                  <img 
                    src={extra.image} 
                    alt={extra.highlight} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-white text-[15px] md:text-[17px] font-inter leading-[1.5]">
                  <span className="text-loopscale-blue">{extra.highlight}</span> {extra.text}
                </p>
              </motion.div>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>

        <FadeIn delay={0.3} className="text-center">
          <h3 className="text-white text-[24px] md:text-[32px] lg:text-[42px] font-inter font-bold leading-tight tracking-[-0.84px] md:tracking-[-1.26px] mb-8 md:mb-12">
            Como Uma Empresa Economizou 703 mil em anúncios
          </h3>
          
          <div className="relative w-full max-w-[1085px] mx-auto aspect-video rounded-lg overflow-hidden shadow-xl">
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
                  alt="Case de Sucesso"
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
    </section>
  )
}
