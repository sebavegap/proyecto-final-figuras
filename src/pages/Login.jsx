import React, { useState, useContext } from 'react'

//import de hooks de Bootstrap
import { Form, Button, Container, Col, Row } from 'react-bootstrap'

//import de componentes para la navegación
import { useNavigate } from 'react-router-dom'

import MyContext from '../Context'

const Login = () => {
  //datos del inicio de sesión
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const { setConectado, setUser, usuarios } = useContext(MyContext);

  //creamos la variable navigate para usar más adelante
  const navigate = useNavigate();

  //función para autenticar a un usuario registrado
  const validarUsuario = () =>
  {
    const usuario = usuarios.find((usuario) => (usuario.usuario === login.toUpperCase() || usuario.email === login) && usuario.password === password);

    if (login && password)
    {
      if (usuario)
      {
        //manipulando el DOM
        document.getElementById('emailLogin').disabled = true;
        document.getElementById('passwordLogin').disabled = true;

        const login = document.getElementById('loginUsuario');

        login.innerText = 'Ingresando...';
        login.disabled = true;

        //un segundo de espera
        setTimeout(() =>
        {
          setConectado(true);

          //datos del usuario
          setUser(
          {
            id: usuario.id,
            usuario: usuario.usuario,
            email: usuario.email,
            password: usuario.password,
            admin: usuario.admin
          });

          //funcion para navegar al catalogo
          navigate('/galeria');
        }, 1000);
      }
      else
      {
        setConectado(false);

        alert('Datos no válidos');
      }
    }
    else
    {
      alert('Todos los campos son obligatorios');
    }
  }

  return (
    <div>


      <Container fluid className='d-flex align-items-center justify-content-center w-auto h-100 text-white' style={{ minHeight: '100vh' }}>
      <Container className="bg-dark bg-opacity-50 p-3 rounded">
  

        
        <Row className='py-5'>
          <Col className='d-flex justify-content-center'>
            <h1>Ingresa a tu cuenta</h1>
          </Col>
        </Row>
     
          
      <Form>
      <Row>
            <Col className='d-flex justify-content-center'>
      <Form.Group className="mb-3">
        <Form.Label>Usuario</Form.Label>
        <Form.Control type="email" id="emailLogin" onChange={(e) => setLogin(e.target.value)} placeholder="Tu usuario o tu email" autoComplete="off" />

      </Form.Group>
      </Col>
      </Row>




      <Row>
            <Col className='d-flex justify-content-center'>
      <Form.Group className="mb-3">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" id="passwordLogin" onChange={(e) => setPassword(e.target.value)} placeholder="********" autoComplete="off" />
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