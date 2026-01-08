import { ScaleIn } from '../animations/FadeIn'

const bannerImage = "https://www.figma.com/api/mcp/asset/b51b18fe-3a25-49dc-ac74-de7136b2e7c7"

export default function VendasBanner() {
  return (
    <section className="w-full">
      <ScaleIn className="w-full">
        <div className="w-full h-[300px] md:h-[500px] lg:h-[715px] overflow-hidden">
          <img 
            src={bannerImage}
            alt="Vendas - Price tags concept"
            className="w-full h-full object-cover"
          />
        </div>
      </ScaleIn>
    </section>
  )
}
