import React from 'react'

//import de hooks de Bootstrap
import { Form, Button, Container } from 'react-bootstrap'

const Login = () => {
  return (
    <div>
      <Container className='text-white'>
<h1>Ingresa a tu cuenta</h1>

      <Form>
      <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>Usuario</Form.Label>
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
        Ingresar
      </Button>
    </Form>
    </Container>
    </div>
  )
}

export default Login