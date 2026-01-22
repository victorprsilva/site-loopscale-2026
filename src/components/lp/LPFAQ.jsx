import { useState } from 'react'
import { ChevronRight, ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import { FadeIn, FadeInStagger, FadeInStaggerItem } from '../animations/FadeIn'
import { motion, AnimatePresence } from 'framer-motion'
import infinityImg from '../../img/about/infinity.webp'

export default function LPFAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: "Essa consultoria serve para qualquer tipo de negócio?",
      answer: "Atendemos empresas que já faturam a partir de R$ 30 mil/mês e que buscam crescimento previsível com marketing digital estruturado."
    },
    {
      question: "Em quanto tempo toda a operação fica pronta?",
      answer: "Em até 30 dias após o diagnóstico, sua operação de marketing digital (tráfego pago, SEO, conteúdo e CRM) estará no ar."
    },
    {
      question: "Vocês também criam os conteúdos e criativos?",
      answer: "Sim. Nossa equipe cuida de copywriting, criativos e peças visuais, alinhados com a estratégia definida."
    },
    {
      question: "Qual o valor do investimento?",
      answer: "Você investe em mídia direto nas plataformas (Google, Meta, LinkedIn, etc.) e paga a consultoria à parte. O valor depende da complexidade da sua operação."
    },
    {
      question: "Vocês cuidam apenas de tráfego pago?",
      answer: "Não. Atuamos de forma integrada, incluindo SEO, conteúdo, automações e CRM para que todo o funil funcione de ponta a ponta."
    },
    {
      question: "Vocês entregam só os anúncios ou também todo o sistema de acompanhamento?",
      answer: "Você recebe uma estrutura completa: CRM configurado, automações de WhatsApp e e-mail, relatórios diários via IA e acompanhamento contínuo de um especialista."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section className="w-full bg-black py-12 md:py-16 lg:py-24">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-[212px]">
        <FadeIn>
          <h2 className="text-white text-[28px] md:text-[36px] lg:text-[48px] font-inter font-bold leading-tight tracking-[-0.84px] md:tracking-[-1.44px] mb-8 md:mb-12">
            Ficou com Dúvidas?
          </h2>
        </FadeIn>

        <FadeInStagger staggerDelay={0.05} className="mb-16 md:mb-24">
          {faqs.map((faq, index) => (
            <FadeInStaggerItem key={index}>
              <div 
                className="bg-loopscale-blue mb-2 cursor-pointer transition-colors hover:bg-loopscale-blue-dark"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center justify-between p-5 md:p-6">
                  <p className="text-white text-[15px] md:text-[17px] font-inter font-medium pr-4">
                    {faq.question}
                  </p>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronRight size={20} className="text-white flex-shrink-0" />
                  </motion.div>
                </div>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-white/80 text-[14px] md:text-[16px] font-inter leading-[1.6] px-5 md:px-6 pb-5 md:pb-6">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          <div className="flex-1 max-w-[466px]">
            <FadeIn>
              <h3 className="text-white text-[28px] md:text-[36px] lg:text-[42px] font-inter font-bold leading-[1.1] tracking-[-0.84px] md:tracking-[-1.26px] mb-6 md:mb-8">
                Chega de esperar resultado no marketing.
              </h3>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-gray-400 text-[15px] md:text-[16px] font-inter leading-[1.6] mb-8">
                Tenha sua estrutura de tráfego rodando em até 30 dias com quem entrega performance.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <Link 
                to="#hero"
                className="relative overflow-hidden inline-flex items-center gap-2 bg-loopscale-blue text-white px-6 py-4 font-inter text-[14px] tracking-[0.84px] transition-colors duration-300 group"
              >
                <span 
                  className="absolute inset-0 bg-loopscale-blue-dark transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"
                  aria-hidden="true"
                />
                <span className="relative z-10 flex items-center gap-2">
                  Solicite um Diagnóstico Gratuito
                  <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </FadeIn>
          </div>

          <FadeIn delay={0.4} direction="left" className="w-full lg:w-auto flex-shrink-0">
            <div className="w-full max-w-[500px] lg:max-w-[700px] xl:max-w-[922px]">
              <img 
                src={infinityImg}
                alt="Infinity Loop Scale"
                className="w-full h-auto object-contain"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
