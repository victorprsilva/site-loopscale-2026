import { FadeIn, FadeInStagger, FadeInStaggerItem } from '../animations/FadeIn'
import cardImage1 from '../../img/home/section4-card-1.webp'
import cardImage2 from '../../img/home/section4-card-2.webp'
import cardImage3 from '../../img/home/section4-card-3.webp'

export default function HomeSection4() {
  const cards = [
    { image: cardImage1, label: "Sistema" },
    { image: cardImage2, label: "Plano" },
    { image: cardImage3, label: "Operação" }
  ]

  return (
    <section className="w-full bg-[#E8E8E8] py-16 md:py-20 lg:py-24">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-[201px]">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-20 mb-12 md:mb-16">
          <FadeIn className="flex-1 max-w-[550px]">
            <h2 className="text-black text-[28px] md:text-[36px] lg:text-[42px] font-inter font-bold italic leading-tight">
              Se essas dores te acompanham, a verdade é simples:
            </h2>
          </FadeIn>

          <FadeIn delay={0.1} className="flex-1 max-w-[437px]">
            <p className="text-[#615F5F] text-[14px] md:text-[15px] lg:text-[16px] font-inter leading-[1.7]">
              Sua empresa não precisa de mais uma ferramenta ou consultoria que promete mágica. Ela <strong className="text-black">precisa de um sistema</strong>. Um <strong className="text-black">plano</strong>. Uma <strong className="text-black">operação integrada</strong>, com metas, dados e ritmo de execução.
            </p>
          </FadeIn>
        </div>

        <FadeIn className="mb-8">
          <p className="text-black text-[16px] md:text-[18px] font-inter font-medium">
            E é exatamente isso que a Loopscale entrega.
          </p>
        </FadeIn>

        <FadeInStagger staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {cards.map((card, index) => (
            <FadeInStaggerItem key={index}>
              <div className="relative h-[400px] md:h-[450px] lg:h-[465px] rounded-lg overflow-hidden">
                <img 
                  src={card.image}
                  alt={card.label}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="text-white text-[28px] md:text-[32px] lg:text-[36px] font-inter font-bold text-center">
                    {card.label}
                  </p>
                </div>
              </div>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  )
}
