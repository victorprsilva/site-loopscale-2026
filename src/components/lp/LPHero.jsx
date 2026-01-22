import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { FadeIn } from '../animations/FadeIn'
import { formatPhone, formatWebsite } from '../../utils/formatters'

export default function LPHero() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    site: '',
    numeroFuncionarios: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    let formattedValue = value

    if (name === 'telefone') {
      formattedValue = formatPhone(value)
    }

    setFormData({ ...formData, [name]: formattedValue })
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
          site: formData.site ? formatWebsite(formData.site) : '',
          pagina: 'Landing Page Marketing'
        })
      })

      const data = await response.json()

      if (data.success) {
        navigate('/obrigado')
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
    <section id="hero" className="w-full bg-white py-12 md:py-16 lg:py-20">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-[212px]">
        <div className="flex flex-col xl:flex-row gap-12 xl:gap-16 2xl:gap-24">
          <div className="flex-1 max-w-[712px]">
            
            <FadeIn delay={0.2}>
              <h1 className="text-black text-[32px] md:text-[42px] lg:text-[56px] xl:text-[72px] font-inter font-bold leading-[1.1] mb-8 md:mb-12 tracking-[-1px] md:tracking-[-2px]">
                Agência de Marketing Digital para Empresas que Querem Crescer com Previsibilidade
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <p className="text-[#615F5F] text-[15px] md:text-[16px] lg:text-[18px] font-inter leading-[1.7]">
                Em até 30 dias, sua empresa terá uma estrutura completa de marketing digital pronta para atrair leads e gerar vendas. Estratégia, tráfego pago, SEO e conteúdo alinhados para entregar resultado de verdade.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.4} direction="left" className="w-full xl:w-[495px] flex-shrink-0">
            <form onSubmit={handleSubmit} className="space-y-5">
              <fieldset className="border border-black px-4 pb-4 pt-1">
                <legend className="text-[14px] text-black font-inter px-2">Nome</legend>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  placeholder="Seu nome"
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
                  type="text"
                  name="site"
                  value={formData.site}
                  onChange={handleChange}
                  placeholder="seusite.com.br"
                  className="w-full text-[16px] font-inter text-black placeholder:text-gray-400 focus:outline-none bg-transparent"
                />
              </fieldset>

              <fieldset className="border border-black px-4 pb-4 pt-1">
                <legend className="text-[14px] text-black font-inter px-2">Número de funcionários</legend>
                <input
                  type="number"
                  name="numeroFuncionarios"
                  value={formData.numeroFuncionarios}
                  onChange={handleChange}
                  placeholder="0"
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
