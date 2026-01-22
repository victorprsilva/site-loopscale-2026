import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react'
import logo from '../img/logo.svg'
import submenuImage from '../img/menu.webp'

const servicos = [
  { name: 'Marketing', path: '/marketing' },
  { name: 'Vendas', path: '/vendas' },
  { name: 'Atendimento', path: '/atendimento' },
  { name: 'Análise', path: '/analise' }
]

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const dropdownRef = useRef(null)
  const conteudoRef = useRef(null)

  const conteudos = [
    { name: 'Ebooks', path: '/ebooks' },
    { name: 'Aulas', path: '/aulas' }
  ]

  const isActive = (path) => location.pathname === path

  useEffect(() => {
    const handleClickOutside = (event) => {
      const isOutsideServico = dropdownRef.current && !dropdownRef.current.contains(event.target)
      const isOutsideConteudo = conteudoRef.current && !conteudoRef.current.contains(event.target)
      if ((activeDropdown === 'servico' && isOutsideServico) || (activeDropdown === 'conteudo' && isOutsideConteudo)) {
        if (activeDropdown === 'servico' || activeDropdown === 'conteudo') {
          setActiveDropdown(null)
        }
      }
    }
    if (activeDropdown === 'servico' || activeDropdown === 'conteudo') {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [activeDropdown])

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
          
          <li className="relative" ref={dropdownRef}>
            <button 
              className="flex items-center gap-[7px] text-loopscale-blue hover:opacity-80 transition-opacity uppercase"
              onClick={() => setActiveDropdown(activeDropdown === 'servico' ? null : 'servico')}
            >
              SERVIÇO
              <ChevronDown size={15} className={`text-loopscale-blue transition-transform duration-300 ${activeDropdown === 'servico' ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Submenu Serviços - Desktop */}
            {activeDropdown === 'servico' && (
              <div className="absolute top-full left-0 mt-4 w-[700px] xl:w-[900px] bg-white border border-gray-200 shadow-xl rounded-lg z-50">
                <div className="p-8 flex justify-between gap-8">
                  <div className="flex flex-col gap-4">
                    {servicos.map((servico, index) => (
                      <Link
                        key={index}
                        to={servico.path}
                        className={`text-[20px] font-inter transition-colors ${
                          location.pathname === servico.path 
                            ? 'text-loopscale-blue font-medium' 
                            : 'text-black hover:text-loopscale-blue'
                        }`}
                        onClick={() => setActiveDropdown(null)}
                      >
                        {servico.name}
                      </Link>
                    ))}
                  </div>
                  <div className="hidden xl:block w-[299px] h-[220px] rounded-lg overflow-hidden flex-shrink-0">
                    <img 
                      src={submenuImage} 
                      alt="" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            )}
          </li>

          <li>
            <Link to="/case" className={`transition-colors ${isActive('/case') ? 'text-loopscale-blue' : 'text-black hover:text-loopscale-blue'}`}>
              CASES
            </Link>
          </li>

          <li>
            <a 
              href="https://blog.loopscale.com.br/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-black hover:text-loopscale-blue transition-colors"
            >
              BLOG
            </a>
          </li>

          <li className="relative" ref={conteudoRef}>
            <button 
              className="flex items-center gap-[7px] text-black hover:text-loopscale-blue transition-colors uppercase"
              onClick={() => setActiveDropdown(activeDropdown === 'conteudo' ? null : 'conteudo')}
            >
              CONTEÚDO
              <ChevronDown size={15} className={`transition-transform duration-300 ${activeDropdown === 'conteudo' ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Submenu Conteúdo - Desktop */}
            {activeDropdown === 'conteudo' && (
              <div className="absolute top-full left-0 mt-4 w-[200px] bg-white border border-gray-200 shadow-xl rounded-lg z-50">
                <div className="p-4 flex flex-col gap-2">
                  {conteudos.map((conteudo, index) => (
                    <Link
                      key={index}
                      to={conteudo.path}
                      className={`text-[16px] font-inter transition-colors py-2 ${
                        location.pathname === conteudo.path 
                          ? 'text-loopscale-blue font-medium' 
                          : 'text-black hover:text-loopscale-blue'
                      }`}
                      onClick={() => setActiveDropdown(null)}
                    >
                      {conteudo.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </li>
        </ul>

        <Link 
          to="/contato" 
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
              <button 
                className="flex items-center justify-between w-full py-3 text-loopscale-blue border-b border-gray-100"
                onClick={() => setActiveDropdown(activeDropdown === 'servico-mobile' ? null : 'servico-mobile')}
              >
                SERVIÇO
                <ChevronDown size={15} className={`text-loopscale-blue transition-transform ${activeDropdown === 'servico-mobile' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'servico-mobile' && (
                <div className="pl-4 pb-2 border-b border-gray-100">
                  {servicos.map((servico, index) => (
                    <Link
                      key={index}
                      to={servico.path}
                      className={`block py-2 text-[14px] font-inter normal-case ${
                        location.pathname === servico.path 
                          ? 'text-loopscale-blue' 
                          : 'text-gray-600 hover:text-loopscale-blue'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {servico.name}
                    </Link>
                  ))}
                </div>
              )}
            </li>

            <li>
              <Link 
                to="/case" 
                className={`block py-3 transition-colors border-b border-gray-100 ${isActive('/case') ? 'text-loopscale-blue' : 'text-black hover:text-loopscale-blue'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                CASES
              </Link>
            </li>

            <li>
              <a 
                href="https://blog.loopscale.com.br/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block py-3 text-black hover:text-loopscale-blue transition-colors border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                BLOG
              </a>
            </li>

            <li>
              <button 
                className="flex items-center justify-between w-full py-3 text-black border-b border-gray-100"
                onClick={() => setActiveDropdown(activeDropdown === 'conteudo-mobile' ? null : 'conteudo-mobile')}
              >
                CONTEÚDO
                <ChevronDown size={15} className={`transition-transform ${activeDropdown === 'conteudo-mobile' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'conteudo-mobile' && (
                <div className="pl-4 pb-2 border-b border-gray-100">
                  {conteudos.map((conteudo, index) => (
                    <Link
                      key={index}
                      to={conteudo.path}
                      className={`block py-2 text-[14px] font-inter normal-case ${
                        location.pathname === conteudo.path 
                          ? 'text-loopscale-blue' 
                          : 'text-gray-600 hover:text-loopscale-blue'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {conteudo.name}
                    </Link>
                  ))}
                </div>
              )}
            </li>

            <li className="pt-4">
              <Link 
                to="/contato" 
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
