import { ScaleIn } from '../animations/FadeIn'

const bannerImage = "https://www.figma.com/api/mcp/asset/b9da9195-49a5-460d-a9e7-f54f4be1f01b"

export default function AnaliseBanner() {
  return (
    <section className="w-full">
      <ScaleIn className="w-full">
        <div className="w-full h-[300px] md:h-[500px] lg:h-[715px] overflow-hidden">
          <img 
            src={bannerImage}
            alt="Análise de dados"
            className="w-full h-full object-cover"
          />
        </div>
      </ScaleIn>
    </section>
  )
}
