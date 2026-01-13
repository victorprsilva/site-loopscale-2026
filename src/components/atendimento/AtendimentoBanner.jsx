import { ScaleIn } from '../animations/FadeIn'
import bannerImage from '../../img/atendimento/banner.webp'

export default function AtendimentoBanner() {
  return (
    <section className="w-full">
      <ScaleIn className="w-full">
        <div className="w-full h-[300px] md:h-[500px] lg:h-[715px] overflow-hidden">
          <img 
            src={bannerImage}
            alt="Atendimento ao cliente"
            className="w-full h-full object-cover"
          />
        </div>
      </ScaleIn>
    </section>
  )
}
