import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const HABITACIONES = [
  {
    id: 1,
    nombre: 'Habitación Individual',
    descripcion: '1 cama individual, ideal para una persona.',
    precio: 15000,
  },
  {
    id: 2,
    nombre: 'Habitación Doble',
    descripcion: '2 camas individuales o 1 cama matrimonial.',
    precio: 22000,
  },
  {
    id: 3,
    nombre: 'Habitación Triple',
    descripcion: '3 camas individuales, ideal para grupos.',
    precio: 28000,
  },
  {
    id: 4,
    nombre: 'Suite',
    descripcion: 'Habitación amplia con jacuzzi y vista a la montaña.',
    precio: 40000,
  },
]

function TarjetaHabitacion({ habitacion }) {
  const [fechaInicio, setFechaInicio] = useState(null)
  const [fechaFin, setFechaFin] = useState(null)

  const manejarCambioFechas = (rango) => {
    const [inicio, fin] = rango
    setFechaInicio(inicio)
    setFechaFin(fin)
  }

  const formatearFecha = (fecha) =>
    fecha
      ? fecha.toLocaleDateString('es-AR', { day: '2-digit', month: '2-digit', year: 'numeric' })
      : ''

  const confirmarReserva = () => {
    if (!fechaInicio || !fechaFin) {
      alert('Seleccioná un rango de fechas antes de confirmar la reserva.')
      return
    }

    alert(
      `Reserva confirmada\n\n` +
        `Habitación: ${habitacion.nombre}\n` +
        `Check-in: ${formatearFecha(fechaInicio)}\n` +
        `Check-out: ${formatearFecha(fechaFin)}`
    )
  }

  return (
    <div className="tarjeta-habitacion">
      <h3>{habitacion.nombre}</h3>
      <p className="descripcion">{habitacion.descripcion}</p>
      <p className="precio">${habitacion.precio.toLocaleString('es-AR')} por noche</p>

      <DatePicker
        selectsRange
        startDate={fechaInicio}
        endDate={fechaFin}
        onChange={manejarCambioFechas}
        minDate={new Date()}
        inline
      />

      <button className="btn-reservar" onClick={confirmarReserva}>
        Reservar
      </button>
    </div>
  )
}

function Reservas() {
  return (
    <section className="pagina">
      <h1>Reservas</h1>
      <p>Elegí una habitación y seleccioná el rango de fechas de tu estadía.</p>

      <div className="grilla-habitaciones">
        {HABITACIONES.map((habitacion) => (
          <TarjetaHabitacion key={habitacion.id} habitacion={habitacion} />
        ))}
      </div>
    </section>
  )
}

export default Reservas
