import React from 'react'

//import de hooks de Bootstrap
import { Form, Button, Container, Col, Row } from 'react-bootstrap'

//import de componentes para la navegación
import { useNavigate } from 'react-router-dom'

const Login = () => {


//creamos la variable navigate para usar más adelante
const navigate = useNavigate()

//funcion para navegar al catalogo
const irAGaleria = () => {
  navigate('/galeria')
}


  return (
    <div>


      <Container fluid className='d-flex align-items-center justify-content-center w-auto h-100 text-white' style={{ minHeight: '100vh' }}>
<Container>
  

        
        <Row className='py-5'>
          <Col className='d-flex justify-content-center'>
            <h1>Ingresa a tu cuenta</h1>
          </Col>
        </Row>
     
          
      <Form>
      <Row>
            <Col className='d-flex justify-content-center'>
      <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>Usuario</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      </Col>
      </Row>




      <Row>
            <Col className='d-flex justify-content-center'>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      </Col>
      </Row>

      

      <Row>
            <Col className='d-flex justify-content-center'>
      <Button variant="success" type="submit" onClick={irAGaleria}>
        Ingresar
      </Button>
      </Col>
      </Row>
    </Form>

    </Container>
    </Container>
    </div>
  )
}

export default Login