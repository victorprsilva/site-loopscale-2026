import { FadeIn } from './animations/FadeIn'

export default function AboutHero() {
  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-20">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 xl:px-[212px]">
        <FadeIn delay={0.1}>
          <p className="text-loopscale-blue text-[12px] md:text-[14px] font-montserrat mb-8 md:mb-12 tracking-wide uppercase">
            Sobre nós
          </p>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <h1 className="text-black text-[28px] md:text-[36px] lg:text-[48px] font-inter font-bold leading-tight md:leading-normal mb-6 md:mb-10 max-w-[636px] tracking-[-0.84px] md:tracking-[-1.44px]">
            Na Loop Scale, partimos de uma verdade simples:
          </h1>
        </FadeIn>
        
        <FadeIn delay={0.3}>
          <p className="text-[#615F5F] text-[16px] md:text-[18px] font-inter font-normal leading-[1.6] max-w-[835px]">
            Improviso não é estratégia. Muitas empresas até crescem por um tempo, mas logo descobrem que depender de sorte, indicações ou campanhas avulsas é a receita perfeita para viver de altos e baixos.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
