import { NavLink } from 'react-router-dom'

function Header() {
  const claseLink = ({ isActive }) => (isActive ? 'nav-link activo' : 'nav-link')

  return (
    <header className="encabezado">
      <div className="logo">Hotel Lenguaje IV</div>
      <nav className="nav">
        <NavLink to="/" end className={claseLink}>Inicio</NavLink>
        <NavLink to="/acerca-de-nosotros" className={claseLink}>Acerca de nosotros</NavLink>
        <NavLink to="/reservas" className={claseLink}>Reservas</NavLink>
      </nav>
    </header>
  )
}

export default Header
