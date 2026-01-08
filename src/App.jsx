import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Marketing from './pages/Marketing'
import Vendas from './pages/Vendas'
import Atendimento from './pages/Atendimento'
import Analise from './pages/Analise'
import Case from './pages/Case'
import Contato from './pages/Contato'
import Ebooks from './pages/Ebooks'
import Aulas from './pages/Aulas'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/vendas" element={<Vendas />} />
        <Route path="/atendimento" element={<Atendimento />} />
        <Route path="/analise" element={<Analise />} />
        <Route path="/case" element={<Case />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/ebooks" element={<Ebooks />} />
        <Route path="/aulas" element={<Aulas />} />
      </Routes>
    </Router>
  )
}

export default App
