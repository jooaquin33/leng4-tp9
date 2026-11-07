import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Inicio from './components/Inicio.jsx'
import AcercaDeNosotros from './components/AcercaDeNosotros.jsx'
import Reservas from './components/Reservas.jsx'

function App() {
  return (
    <div className="app">
      <Header />
      <main className="contenido">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/acerca-de-nosotros" element={<AcercaDeNosotros />} />
          <Route path="/reservas" element={<Reservas />} />
          <Route path="*" element={<Inicio />} />
        </Routes>
      </main>
      <footer className="pie">
        <p>Universidad Católica de Salta · Ingeniería en Informática · Lenguaje IV - 2026</p>
      </footer>
    </div>
  )
}

export default App
