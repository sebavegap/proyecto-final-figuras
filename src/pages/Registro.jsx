import React from 'react'

//import de hooks de Bootstrap
import { Form, Button, Container } from 'react-bootstrap'

const Registro = () => {
  return (
    <div>
      <Container className='text-white'>
<h1>Registra tu cuenta</h1>

          <Form>
      <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>Usuario</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-white">
          Este es el nombre que utilizarás para ingresar al sitio.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
      
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
    
      </Form.Group>
      <Button variant="success" type="submit">
        Registrarse
      </Button>
    </Form>
    </Container>
    </div>
  )
}

export default Registro