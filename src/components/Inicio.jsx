import { Link } from 'react-router-dom'

function Inicio() {
  return (
    <section className="pagina pagina-inicio">
      <h1>Bienvenido al Hotel Lenguaje IV</h1>
      <p>
        Un lugar pensado para descansar mientras cursás la carrera. Contamos con habitaciones
        individuales, dobles, triples y suites, todas con vista a la montaña.
      </p>
      <p>
        Desde la sección <Link to="/reservas">Reservas</Link> podés elegir tu habitación y
        seleccionar las fechas de tu estadía desde un calendario.
      </p>
    </section>
  )
}

export default Inicio
