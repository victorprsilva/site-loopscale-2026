import { ScaleIn } from '../animations/FadeIn'
import bannerImage from '../../img/marketing/banner.jpg'

export default function MarketingBanner() {
  return (
    <section className="w-full">
      <ScaleIn className="w-full">
        <div className="w-full h-[300px] md:h-[500px] lg:h-[715px] overflow-hidden">
          <img 
            src={bannerImage}
            alt="Startup business growth concept"
            className="w-full h-full object-cover"
          />
        </div>
      </ScaleIn>
    </section>
  )
}
