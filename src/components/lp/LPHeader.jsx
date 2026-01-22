import { Link } from 'react-router-dom'
import logo from '../../img/logo.svg'

export default function LPHeader() {
  return (
    <header className="w-full sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50">
      <nav className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-[131px] h-[72px] lg:h-[92px] flex items-center justify-center">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Loop Scale" className="h-[45px] lg:h-[61px] w-auto" />
        </Link>
      </nav>
    </header>
  )
}
