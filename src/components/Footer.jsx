import { Link } from 'react-router-dom'
import { Facebook, Instagram, Youtube, Linkedin } from 'lucide-react'
import logoBranco from '../img/logo_branco.svg'

export default function Footer() {
  return (
    <footer className="w-full bg-black py-10 md:py-12">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-[197px]">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 mb-10 md:mb-12 items-center lg:items-start text-center lg:text-left">
          <div className="flex-shrink-0">
            <img src={logoBranco} alt="Loop Scale" className="h-[80px] md:h-[100px] lg:h-[116px] w-auto" />
          </div>

          <nav className="flex flex-wrap justify-center lg:justify-start gap-6 md:gap-10 lg:gap-[60px]">
            <Link 
              to="/sobre" 
              className="text-[#5c5c5c] text-[12px] font-inter uppercase tracking-[-0.36px] hover:text-white transition-colors"
            >
              SOBRE
            </Link>
            <Link 
              to="/marketing" 
              className="text-[#5c5c5c] text-[12px] font-inter uppercase tracking-[-0.36px] hover:text-white transition-colors"
            >
              SERVIÇO
            </Link>
            <a 
              href="#depoimentos" 
              className="text-[#5c5c5c] text-[12px] font-inter uppercase tracking-[-0.36px] hover:text-white transition-colors"
            >
              DEPOIMENTOS
            </a>
            <a 
              href="#diagnostico" 
              className="text-[#5c5c5c] text-[12px] font-inter uppercase tracking-[-0.36px] hover:text-white transition-colors"
            >
              DIAGNÓSTICO
            </a>
            <a 
              href="#contato" 
              className="text-[#5c5c5c] text-[12px] font-inter uppercase tracking-[-0.36px] hover:text-white transition-colors"
            >
              CONTATO
            </a>
          </nav>

          <div className="flex flex-col items-center lg:items-start">
            <a 
              href="mailto:contato@loopscale.com.br" 
              className="text-white text-[14px] md:text-[16px] lg:text-[18px] font-montserrat leading-[1.4] tracking-[-0.54px] hover:text-gray-300 transition-colors"
            >
              contato@loopscale.com.br
            </a>
            
            <div className="flex gap-3 mt-4 md:mt-5 justify-center lg:justify-start">
              <a 
                href="#" 
                className="w-8 h-8 md:w-[32px] md:h-[32px] rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={12} className="text-[#f6f6f6]" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 md:w-[32px] md:h-[32px] rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} className="text-[#f6f6f6]" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 md:w-[32px] md:h-[32px] rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={16} className="text-[#f6f6f6]" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 md:w-[32px] md:h-[32px] rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} className="text-[#f6f6f6]" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 md:pt-8">
          <p className="text-[#5c5c5c] text-[14px] md:text-[16px] lg:text-[18px] font-montserrat leading-[1.4] tracking-[-0.54px] text-center">
            © 2025 Loopscale. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
