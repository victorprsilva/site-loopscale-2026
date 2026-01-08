import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react'
import logoWhite from '../../img/logo_branco.svg'

export default function HeaderCase() {
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md' : 'bg-transparent'}`}>
      <nav className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-[131px] h-[72px] lg:h-[92px] flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={logoWhite} alt="Loop Scale" className="h-[45px] lg:h-[61px] w-auto" />
        </Link>

        <ul className="hidden lg:flex items-center gap-12 xl:gap-[95px] text-[12px] font-montserrat uppercase tracking-[-0.36px]">
          <li>
            <Link to="/sobre" className="text-white hover:text-loopscale-blue transition-colors">
              SOBRE
            </Link>
          </li>
          
          <li className="relative">
            <button 
              className="flex items-center gap-[7px] text-white hover:text-loopscale-blue transition-colors uppercase"
              onMouseEnter={() => setActiveDropdown('servico')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              SERVIÇO
              <ChevronDown size={15} className="text-white" />
            </button>
          </li>

          <li>
            <Link to="/case" className="text-loopscale-blue transition-colors">
              CASES
            </Link>
          </li>

          <li>
            <a href="#blog" className="text-white hover:text-loopscale-blue transition-colors">
              BLOG
            </a>
          </li>

          <li className="relative">
            <button 
              className="flex items-center gap-[7px] text-white hover:text-loopscale-blue transition-colors uppercase"
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
          className="lg:hidden p-2 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-md border-t border-gray-800 absolute w-full left-0">
          <ul className="flex flex-col py-4 px-6 text-[14px] font-montserrat uppercase tracking-[-0.36px]">
            <li>
              <Link 
                to="/sobre" 
                className="block py-3 text-white hover:text-loopscale-blue transition-colors border-b border-gray-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                SOBRE
              </Link>
            </li>
            
            <li>
              <button className="flex items-center justify-between w-full py-3 text-white border-b border-gray-800">
                SERVIÇO
                <ChevronDown size={15} />
              </button>
            </li>

            <li>
              <Link 
                to="/case" 
                className="block py-3 text-loopscale-blue transition-colors border-b border-gray-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                CASES
              </Link>
            </li>

            <li>
              <a 
                href="#blog" 
                className="block py-3 text-white hover:text-loopscale-blue transition-colors border-b border-gray-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                BLOG
              </a>
            </li>

            <li>
              <button className="flex items-center justify-between w-full py-3 text-white border-b border-gray-800">
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
