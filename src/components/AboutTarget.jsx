import { motion } from 'framer-motion'
import { FadeIn, FadeInStagger, FadeInStaggerItem } from './animations/FadeIn'
import img1 from '../img/about/target-1.jpg'
import img2 from '../img/about/target-2.jpg'
import img3 from '../img/about/target-3.jpg'

export default function AboutTarget() {
  const images = [img1, img2, img3, img1, img2, img3]

  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-20">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-16 xl:px-[75px]">
        <FadeIn>
          <h2 className="text-black text-[28px] md:text-[40px] lg:text-[56px] font-inter font-normal leading-tight tracking-[-0.84px] md:tracking-[-1.68px] text-center mb-6 md:mb-8">
            Para quem é a Loop Scale
          </h2>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <p className="text-center text-[18px] md:text-[24px] lg:text-[36px] font-inter leading-[1.5] tracking-[-0.54px] md:tracking-[-1.08px] max-w-[1053px] mx-auto mb-10 md:mb-16 px-4">
            <span className="text-[#6d6d6d]">Atendemos desde empresas que </span>
            <span className="text-white bg-black px-2">faturavam R$ 100 mil</span>
            <span className="text-[#6d6d6d]"> por ano até negócios acima dos 8 dígitos de receita. Em todos os casos, o desafio era o mesmo: </span>
            <span className="text-[#272727]">sair do ciclo de improviso e construir um crescimento sólido, previsível e escalável.</span>
          </p>
        </FadeIn>

        <FadeInStagger staggerDelay={0.08} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 lg:gap-8">
          {images.map((img, index) => (
            <FadeInStaggerItem key={index}>
              <motion.div 
                className="aspect-[3/4] rounded-lg overflow-hidden"
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              >
                <img 
                  src={img} 
                  alt={`Cliente ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  )
}
