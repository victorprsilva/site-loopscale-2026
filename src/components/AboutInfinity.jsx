import { ScaleIn } from './animations/FadeIn'
import imgInfinity from '../img/about/infinity.webp'

export default function AboutInfinity() {
  return (
    <section className="w-full bg-black py-8 md:py-12 lg:py-16">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-center">
        <ScaleIn className="relative w-full max-w-[922px] aspect-[922/614]">
          <img 
            src={imgInfinity} 
            alt="Símbolo do infinito" 
            className="w-full h-full object-cover opacity-60"
          />
        </ScaleIn>
      </div>
    </section>
  )
}
