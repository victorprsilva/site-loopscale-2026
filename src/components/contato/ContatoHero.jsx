import { useState } from 'react'
import { ChevronRight } from 'lucide-react'
import { FadeIn } from '../animations/FadeIn'

export default function ContatoHero() {
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
          pagina: 'Contato'
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
          <div className="flex-1 max-w-[715px]">
            <FadeIn delay={0.1}>
              <p className="text-loopscale-blue text-[14px] md:text-[16px] font-inter mb-4 md:mb-6">
                Contato
              </p>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <h1 className="text-black text-[32px] md:text-[42px] lg:text-[48px] font-inter font-bold leading-tight tracking-[-0.84px] md:tracking-[-1.44px] mb-8 md:mb-12">
                Pronto para causar impacto?
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <p className="text-[#615F5F] text-[15px] md:text-[16px] lg:text-[18px] font-inter leading-[1.7] mb-12 md:mb-16 max-w-[678px]">
                Você está a um clique do próximo passo. Envie-nos um e-mail, uma mensagem ou agende uma reunião online ou pessoalmente. Nosso escritório. Respondemos rapidamente e estamos aqui para ajudá-lo(a) a seguir em frente.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="mb-10 md:mb-12">
                <p className="text-loopscale-blue text-[14px] md:text-[16px] font-inter font-medium tracking-wide mb-4">
                  ENTRE EM CONTATO
                </p>
                <p className="text-black text-[16px] md:text-[18px] font-inter mb-3">
                  atendimento@loopscale.com
                </p>
                <p className="text-black text-[16px] md:text-[18px] font-inter">
                  11 9 9999-9999
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div>
                <p className="text-loopscale-blue text-[14px] md:text-[16px] font-inter font-medium tracking-wide mb-4">
                  SIGA-NOS
                </p>
                <div className="flex gap-3">
                  <a 
                    href="https://www.facebook.com/profile.php?id=61575601150808" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-loopscale-blue rounded-full flex items-center justify-center hover:bg-loopscale-blue-dark transition-colors"
                  >
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 36.6 36.6 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/>
                    </svg>
                  </a>
                  <a 
                    href="http://instagram.com/loop_scale" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-loopscale-blue rounded-full flex items-center justify-center hover:bg-loopscale-blue-dark transition-colors"
                  >
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://youtube.com/@loop_scale?si=GjMlh1Uke5obCZBd" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-loopscale-blue rounded-full flex items-center justify-center hover:bg-loopscale-blue-dark transition-colors"
                  >
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://www.linkedin.com/company/loop-scale" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-loopscale-blue rounded-full flex items-center justify-center hover:bg-loopscale-blue-dark transition-colors"
                  >
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.4} direction="left" className="w-full lg:w-[495px] flex-shrink-0">
            <form onSubmit={handleSubmit} className="space-y-5">
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
