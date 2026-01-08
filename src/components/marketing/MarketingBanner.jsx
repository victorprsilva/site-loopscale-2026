import { ScaleIn } from '../animations/FadeIn'

const bannerImage = "https://www.figma.com/api/mcp/asset/5559168c-8d02-4cad-b88e-3c7852cc6cd7"

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
