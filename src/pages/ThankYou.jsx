import HeaderCase from '../components/case/HeaderCase'
import Footer from '../components/Footer'
import obrigadoImg from '../img/obrigado.webp'

export default function ThankYou() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <HeaderCase />
      <main className="flex-1">
        <section className="relative w-full bg-black">
          <div className="absolute inset-0 bg-black" />
          <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 py-24 lg:py-32">
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
              <div className="lg:w-1/2 space-y-8">
                <h1 className="text-[48px] md:text-[64px] lg:text-[72px] font-bold leading-[1.1]">Obrigado</h1>
                <div className="inline-flex items-center gap-4 px-6 py-3 text-[16px] font-medium bg-loopscale-blue">
                  <span>Em breve um de nossos consultores entrará em contato</span>
                </div>
                <div className="space-y-4 text-[#d1d1d1] text-[15px] md:text-[16px] leading-[1.8]">
                  <p>
                    João Návia, fundador da Loopscale, especialista em ajudar empresas a estruturar marketing, vendas e
                    atendimento para crescerem com base em dados e processos sólidos.
                  </p>
                  <p>
                    Com mais de 15 anos de experiência, João já liderou mais de 100 projetos que geraram mais de R$ 250
                    milhões em vendas estruturadas. Sua missão: ajudar empresários a transformar intuição em estratégia,
                    achismos em processos e dados em receita.
                  </p>
                  <p>Transforme o desejo de crescer em um plano sólido e seguro.</p>
                </div>
              </div>

              <div className="lg:w-1/2 flex justify-center">
                <div className="w-full max-w-[800px]">
                  <img src={obrigadoImg} alt="Obrigado" className="w-full h-auto object-contain" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
