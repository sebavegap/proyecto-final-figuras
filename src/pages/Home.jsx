//import react
import React from 'react'

//import de componentes de bootstrap
import { Container, Row, Col, Button } from 'react-bootstrap'

//import de componentes para la navegacióñ
import { useNavigate } from 'react-router-dom'

const Home = () => {

//creamos la variable navigate para usar más adelante
  const navigate = useNavigate()

  //función para navegar a la pagina de login
  const irALogin = () => {
    navigate('/login')
  }

  //función para navegar a la pagina de registro
  const irARegistro = () => {
    navigate('/registro')
  }



  return (
    <div>
      {/* container that centers vertically and horizontally*/}


      <Container fluid className='d-flex align-items-center justify-content-center w-auto h-100' style={{ minHeight: '100vh' }}>

        <Container className='text-white '>


          <Row className='py-5'>
            <Col className='d-flex justify-content-center'>
              <h1>¡Bienvenido a El.Coleccionista!</h1>
            </Col>
          </Row>

          <Row>
            <Col className='d-flex justify-content-center'>
              <p>Aquí encontrarás una amplia selección de figuras de colección.</p>
            </Col>
          </Row>

          <Row>
            <Col className='d-flex justify-content-center'>
          <p>Para revisar el catalogo, ingresa con tu cuenta o regístrate.</p>
          </Col>
          </Row>
          


          <Row className='py-5'>

            <Col className='d-flex justify-content-end'>
              <Button variant='light' onClick={irALogin}>Ingresar</Button>
            </Col>
            <Col className='d-flex justify-content-start'>
              <Button variant='light' onClick={irARegistro}>Registrarse</Button>
            </Col>
          </Row>

        </Container>
      </Container>


    </div>
  )
}

export default Home