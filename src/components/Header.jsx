import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react'
import logo from '../img/logo.svg'

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <header className="w-full sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50">
      <nav className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-[131px] h-[72px] lg:h-[92px] flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Loop Scale" className="h-[45px] lg:h-[61px] w-auto" />
        </Link>

        <ul className="hidden lg:flex items-center gap-6 xl:gap-10 2xl:gap-[95px] text-[12px] font-montserrat uppercase tracking-[-0.36px]">
          <li>
            <Link to="/sobre" className={`transition-colors ${isActive('/sobre') || isActive('/') ? 'text-loopscale-blue' : 'text-black hover:text-loopscale-blue'}`}>
              SOBRE
            </Link>
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

        <Link 
          to="#contato" 
          className="relative overflow-hidden hidden lg:flex bg-loopscale-blue text-white px-5 py-3 lg:px-[20px] lg:py-[16px] h-[48px] lg:h-[53px] items-center gap-[10px] font-inter text-[14px] tracking-[0.84px] group"
        >
          <span 
            className="absolute inset-0 bg-loopscale-blue-dark transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"
            aria-hidden="true"
          />
          <span className="relative z-10 flex items-center gap-[10px]">
            Contato
            <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </Link>

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
              <Link 
                to="/sobre" 
                className={`block py-3 transition-colors border-b border-gray-100 ${isActive('/sobre') || isActive('/') ? 'text-loopscale-blue' : 'text-black hover:text-loopscale-blue'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                SOBRE
              </Link>
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
              <Link 
                to="#contato" 
                className="relative overflow-hidden flex items-center justify-center gap-2 bg-loopscale-blue text-white px-5 py-3 font-inter text-[14px] tracking-[0.84px] w-full group"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span 
                  className="absolute inset-0 bg-loopscale-blue-dark transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"
                  aria-hidden="true"
                />
                <span className="relative z-10 flex items-center gap-2">
                  Contato
                  <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
