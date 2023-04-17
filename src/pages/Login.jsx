import React, { useState, useContext } from 'react'

//import de hooks de Bootstrap
import { Form, Button, Container, Col, Row } from 'react-bootstrap'

//import de componentes para la navegación
import { useNavigate } from 'react-router-dom'

import MyContext from '../Context'

const Login = () => {
  //datos del inicio de sesión
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { setConectado, setUser, usuarios } = useContext(MyContext);

  //creamos la variable navigate para usar más adelante
  const navigate = useNavigate();

  //función para autenticar a un usuario registrado
  const validarUsuario = () =>
  {
    const usuario = usuarios.find((usuario) => usuario.email === email && usuario.password === password);

    if (email && password)
    {
      if (usuario)
      {
        //manipulando el DOM
        const login = document.getElementById('loginUsuario');

        login.innerText = 'Ingresando...';
        login.disabled = true;

        //un segundo de espera
        setTimeout(() =>
        {
          setConectado(true);

          setUser({email: usuario.email, password: usuario.password, admin: usuario.admin})

          //funcion para navegar al catalogo
          navigate('/galeria');
        }, 1000);
      }
      else
      {
        setConectado(false);

        alert('Usuario inválido');
      }
    }
    else
    {
      alert('Los campos son obligatorios');
    }

    console.log(usuario)
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
        <Form.Control type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" autoComplete="off" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      </Col>
      </Row>




      <Row>
            <Col className='d-flex justify-content-center'>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" autoComplete="off" />
      </Form.Group>
      </Col>
      </Row>

      

      <Row>
            <Col className='d-flex justify-content-center'>
      <Button type="button" variant="success" id="loginUsuario" onClick={() => validarUsuario()}>
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