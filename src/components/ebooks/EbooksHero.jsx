import { motion } from 'framer-motion'
import { FadeIn, FadeInStagger, FadeInStaggerItem } from '../animations/FadeIn'

const ebookImage1 = "https://www.figma.com/api/mcp/asset/fc8dacd2-fcb7-466a-902c-24c3c4a4a78d"
const ebookImage2 = "https://www.figma.com/api/mcp/asset/f6b2ddbb-452f-462d-828b-b3ecdf9c2170"

export default function EbooksHero() {
  const ebooks = [
    { 
      id: 1, 
      image: ebookImage1, 
      title: "Como montar um plano de marketing e vendas para crescer nos próximos 12 meses",
      downloadUrl: "#"
    },
    { 
      id: 2, 
      image: ebookImage2, 
      title: "A Máquina do Crescimento",
      downloadUrl: "#"
    }
  ]

  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-24">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 xl:px-[176px]">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-24">
          <div className="flex-1 max-w-[400px]">
            <FadeIn delay={0.1}>
              <h1 className="text-black text-[28px] md:text-[36px] lg:text-[42px] font-inter font-bold leading-tight tracking-[-0.84px] md:tracking-[-1.26px] mb-6 md:mb-8">
                Está pronto para dar o próximo passo?
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-[#615F5F] text-[15px] md:text-[16px] lg:text-[18px] font-inter leading-[1.7] mb-10 md:mb-12">
                Sim, é possível alavancar seu negócio com as estratégias certas. Descubra técnicas práticas, ferramentas eficazes e insights que realmente fazem a diferença. Chegou a hora de sair do lugar e conquistar resultados reais!
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-loopscale-blue text-[18px] md:text-[20px] lg:text-[24px] font-inter font-medium">
                Baixe Ebooks de graça.
              </p>
            </FadeIn>
          </div>

          <FadeInStagger staggerDelay={0.15} className="flex-1 flex flex-col md:flex-row gap-8 md:gap-10 lg:gap-12">
            {ebooks.map((ebook) => (
              <FadeInStaggerItem key={ebook.id} className="flex-1">
                <motion.div 
                  className="flex flex-col"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="w-full h-[400px] md:h-[450px] lg:h-[521px] mb-4 overflow-hidden rounded-lg">
                    <img 
                      src={ebook.image}
                      alt={ebook.title}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <a 
                    href={ebook.downloadUrl}
                    className="relative overflow-hidden w-full bg-loopscale-blue text-white px-5 py-4 flex items-center justify-center font-inter text-[14px] tracking-[0.84px] transition-colors duration-300 group"
                  >
                    <span 
                      className="absolute inset-0 bg-loopscale-blue-dark transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"
                      aria-hidden="true"
                    />
                    <span className="relative z-10">
                      Faça o download
                    </span>
                  </a>
                </motion.div>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </div>
      </div>
    </section>
  )
}
