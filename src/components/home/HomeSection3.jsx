import { FadeIn, FadeInStagger, FadeInStaggerItem } from '../animations/FadeIn'

export default function HomeSection3() {
  const scenarios = [
    {
      number: "01",
      title: "Seu crescimento depende exclusivamente de tráfego pago Você investe em anúncios.",
      desc: "Às vezes dá certo, às vezes não. Quando o ROI cai, o time entra em pânico. Não existe previsibilidade, só reatividade."
    },
    {
      number: "02",
      title: "Marketing gera lead. Vendas reclama. Conversão despenca.",
      desc: "O comercial diz que o lead não vem qualificado. O marketing diz que o time não sabe vender. Resultado: um aponta o erro do outro — e ninguém melhora o processo."
    },
    {
      number: "03",
      title: "Cada campanha vira um novo incêndio",
      desc: "O time corre. Refaz tudo. Entrega no grito. Mas ninguém sabe por que deu certo — ou por que deu errado. Faltam dados, rituais, previsibilidade."
    },
    {
      number: "04",
      title: "O dono centraliza tudo porque ninguém tem autonomia real",
      desc: "Você precisa estar em cada reunião, revisar cada meta, aprovar cada post. Sem você, nada anda. A empresa cresce — mas carrega seu nome e suas costas."
    },
    {
      number: "05",
      title: "Você tem dados… mas não usa para decidir",
      desc: "Planilhas existem. Indicadores até aparecem. Mas a operação ainda funciona na intuição. Decisões importantes são tomadas com base em 'achismo' ou mensagens no WhatsApp."
    },
    {
      number: "06",
      title: "Cada campanha vira um novo incêndio",
      desc: "O time corre. Refaz tudo. Entrega no grito. Mas ninguém sabe por que deu certo — ou por que deu errado. Faltam dados, rituais, previsibilidade."
    }
  ]

  return (
    <section className="w-full bg-black py-16 md:py-20 lg:py-24">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-[201px]">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-20">
          <FadeIn className="lg:w-[595px] flex-shrink-0">
            <h2 className="text-white text-[28px] md:text-[36px] lg:text-[42px] font-inter font-bold italic leading-tight mb-6">
              O que está travando sua empresa não é falta de esforço. É excesso de improviso.
            </h2>
            <p className="text-gray-400 text-[16px] md:text-[18px] font-inter">
              Veja se algum desses cenários soa familiar:
            </p>
          </FadeIn>

          <FadeInStagger staggerDelay={0.1} className="flex-1">
            {scenarios.map((item, index) => (
              <FadeInStaggerItem key={index} className="border-b border-gray-800 py-8 first:pt-0">
                <div className="flex gap-6">
                  <span className="text-gray-600 text-[14px] font-inter font-medium">
                    {item.number}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-white text-[18px] md:text-[20px] font-inter font-bold leading-tight mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-[14px] md:text-[15px] font-inter leading-[1.6]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </div>
      </div>
    </section>
  )
}
