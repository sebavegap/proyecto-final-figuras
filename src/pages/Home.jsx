import React from 'react'

//import de componentes de bootstrap
import { Container, Row, Col, Button } from 'react-bootstrap'

const Home = () => {
  return (
    <div>
      <h1>¡Bienvenido a El.Coleccionista!</h1>
      <p>Aquí encontrarás una amplia selección de figuras de colección.</p>
      <p>Para revisar el catalogo, ingresa con tu cuenta o regístrate.</p>

      <Button>Ingresar</Button>
      <Button>Registrarse</Button>
    </div>
  )
}

export default Home