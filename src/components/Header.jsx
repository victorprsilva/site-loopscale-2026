import { useState } from 'react'
import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react'
import logo from '../img/logo.svg'

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="w-full sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50">
      <nav className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-[131px] h-[72px] lg:h-[92px] flex items-center justify-between">
        <a href="/" className="flex items-center">
          <img src={logo} alt="Loop Scale" className="h-[45px] lg:h-[61px] w-auto" />
        </a>

        <ul className="hidden lg:flex items-center gap-12 xl:gap-[95px] text-[12px] font-montserrat uppercase tracking-[-0.36px]">
          <li>
            <a href="#sobre" className="text-black hover:text-loopscale-blue transition-colors">
              SOBRE
            </a>
          </li>
          
          <li className="relative">
            <button 
              className="flex items-center gap-[7px] text-loopscale-blue hover:opacity-80 transition-opacity uppercase"
              onMouseEnter={() => setActiveDropdown('servico')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              SERVIÇO
              <ChevronDown size={15} className="text-loopscale-blue" />
            </button>
          </li>

          <li>
            <a href="#cases" className="text-black hover:text-loopscale-blue transition-colors">
              CASES
            </a>
          </li>

          <li>
            <a href="#blog" className="text-black hover:text-loopscale-blue transition-colors">
              BLOG
            </a>
          </li>

          <li className="relative">
            <button 
              className="flex items-center gap-[7px] text-black hover:text-loopscale-blue transition-colors uppercase"
              onMouseEnter={() => setActiveDropdown('conteudo')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              CONTEÚDO
              <ChevronDown size={15} />
            </button>
          </li>
        </ul>

        <a 
          href="#contato" 
          className="hidden lg:flex bg-loopscale-blue text-white px-5 py-3 lg:px-[20px] lg:py-[16px] h-[48px] lg:h-[53px] items-center gap-[10px] hover:bg-loopscale-blue-dark transition-colors font-inter text-[14px] tracking-[0.84px]"
        >
          Contato
          <ChevronRight size={16} />
        </a>

        <button 
          className="lg:hidden p-2 text-black"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg">
          <ul className="flex flex-col py-4 px-6 text-[14px] font-montserrat uppercase tracking-[-0.36px]">
            <li>
              <a 
                href="#sobre" 
                className="block py-3 text-black hover:text-loopscale-blue transition-colors border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                SOBRE
              </a>
            </li>
            
            <li>
              <button className="flex items-center justify-between w-full py-3 text-loopscale-blue border-b border-gray-100">
                SERVIÇO
                <ChevronDown size={15} className="text-loopscale-blue" />
              </button>
            </li>

            <li>
              <a 
                href="#cases" 
                className="block py-3 text-black hover:text-loopscale-blue transition-colors border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                CASES
              </a>
            </li>

            <li>
              <a 
                href="#blog" 
                className="block py-3 text-black hover:text-loopscale-blue transition-colors border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                BLOG
              </a>
            </li>

            <li>
              <button className="flex items-center justify-between w-full py-3 text-black border-b border-gray-100">
                CONTEÚDO
                <ChevronDown size={15} />
              </button>
            </li>

            <li className="pt-4">
              <a 
                href="#contato" 
                className="flex items-center justify-center gap-2 bg-loopscale-blue text-white px-5 py-3 hover:bg-loopscale-blue-dark transition-colors font-inter text-[14px] tracking-[0.84px] w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contato
                <ChevronRight size={16} />
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
