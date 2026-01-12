import { useState } from 'react'
import { ChevronRight } from 'lucide-react'
import { FadeIn } from '../animations/FadeIn'

export default function AtendimentoHero() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    site: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      const response = await fetch('/send-email.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          pagina: 'Atendimento'
        })
      })

      const data = await response.json()

      if (data.success) {
        setSubmitMessage('Mensagem enviada com sucesso! Entraremos em contato em breve.')
        setFormData({ nome: '', email: '', telefone: '', site: '' })
      } else {
        setSubmitMessage('Erro ao enviar mensagem. Tente novamente.')
      }
    } catch (error) {
      setSubmitMessage('Erro ao enviar mensagem. Tente novamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-20">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-[212px]">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-12 xl:gap-20 xl:gap-32">
          <div className="flex-1 max-w-[837px]">
            <FadeIn delay={0.1}>
              <p className="text-loopscale-blue text-[12px] md:text-[14px] font-montserrat mb-6 md:mb-8 tracking-wide uppercase">
                Atendimento
              </p>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <h1 className="text-black text-[28px] md:text-[36px] lg:text-[48px] font-inter font-bold leading-tight mb-8 md:mb-12 tracking-[-0.84px] md:tracking-[-1.44px]">
                Atender bem não é gentileza. É estratégia de retenção, recompra e crescimento.
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <div className="text-[#615F5F] text-[15px] md:text-[16px] lg:text-[18px] font-inter leading-[1.7] space-y-6">
                <p>
                  O atendimento é, muitas vezes, o elo mais subestimado da operação.
                </p>
                <p>
                  Enquanto marketing atrai e vendas converte, é no atendimento que o cliente decide se volta ou se nunca mais volta.
                </p>
                <p>
                  Só que a realidade da maioria das empresas é outra: Time sobrecarregado, respondendo no automático, apagando incêndio e sem saber exatamente o que foi prometido lá na ponta do marketing.
                </p>
                <p className="text-loopscale-blue font-medium">
                  Resultado?
                </p>
                <p>
                  Cliente frustrado, churn escondido, reputação abalada e equipe estressada. Na Loopscale, atendimento não é "pós". É continuação do comercial. E como tudo aqui: tem processo, tem métrica, tem rotina.
                </p>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.4} direction="left" className="w-full lg:w-[495px] flex-shrink-0">
            <form onSubmit={handleSubmit} className="space-y-6">
              <fieldset className="border border-black px-4 pb-4 pt-1">
                <legend className="text-[14px] text-black font-inter px-2">Nome</legend>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  placeholder="Jeferson arantes"
                  className="w-full text-[16px] font-inter text-black placeholder:text-gray-400 focus:outline-none bg-transparent"
                />
              </fieldset>

              <fieldset className="border border-black px-4 pb-4 pt-1">
                <legend className="text-[14px] text-black font-inter px-2">E-mail</legend>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  className="w-full text-[16px] font-inter text-black placeholder:text-gray-400 focus:outline-none bg-transparent"
                />
              </fieldset>

              <fieldset className="border border-black px-4 pb-4 pt-1">
                <legend className="text-[14px] text-black font-inter px-2">Telefone</legend>
                <input
                  type="tel"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  placeholder="xx 00 0000 00"
                  className="w-full text-[16px] font-inter text-black placeholder:text-gray-400 focus:outline-none bg-transparent"
                />
              </fieldset>

              <fieldset className="border border-black px-4 pb-4 pt-1">
                <legend className="text-[14px] text-black font-inter px-2">Site da empresa</legend>
                <input
                  type="url"
                  name="site"
                  value={formData.site}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  className="w-full text-[16px] font-inter text-black placeholder:text-gray-400 focus:outline-none bg-transparent"
                />
              </fieldset>

              {submitMessage && (
                <div className={`p-4 rounded-lg text-center ${submitMessage.includes('sucesso') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {submitMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="relative overflow-hidden w-full bg-loopscale-blue text-white px-5 py-4 flex items-center justify-center gap-[10px] font-inter text-[14px] tracking-[0.84px] transition-colors duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span 
                  className="absolute inset-0 bg-loopscale-blue-dark transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"
                  aria-hidden="true"
                />
                <span className="relative z-10 flex items-center gap-[10px]">
                  {isSubmitting ? 'Enviando...' : 'Enviar'}
                  <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
