import React, { useState, useContext } from 'react'

//import de hooks de Bootstrap
import { Form, Button, Container, Col, Row } from 'react-bootstrap'

//import de componentes para la navegación
import { useNavigate } from 'react-router-dom'

import MyContext from '../Context'

const Registro = () => {
//datos del registro de usuario
const [apodo, setApodo] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const { setConectado, setUser, usuarios, setUsuarios } = useContext(MyContext);

//creamos la variable navigate para usar más adelante
const navigate = useNavigate()

//función para registrar a un usuario
const registrarUsuario = () =>
{
  if (apodo && email && password)
  {
    //manipulando el DOM
    document.getElementById('apodoRegistro').disabled = true;
    document.getElementById('emailRegistro').disabled = true;
    document.getElementById('passwordRegistro').disabled = true;

    const login = document.getElementById('registroUsuario');

    login.innerText = 'Registrándose...';
    login.disabled = true;

    //un segundo de espera
    setTimeout(() =>
    {
      setConectado(true);

      const registro =
      {
        id: usuarios[usuarios.length - 1].id + 1,
        usuario: apodo.toUpperCase(),
        email: email,
        password: password,
        admin: false
      }

      //datos del usuario
      setUser(registro)

      //se actualiza el array de los usuarios
      setUsuarios([...usuarios, registro]);

      //funcion para navegar al catalogo
      navigate('/galeria');
    }, 1000);
  }
  else
  {
    alert('Todos los campos son obligatorios');
  }
}

  return (
    <div>
     <Container fluid className='d-flex align-items-center justify-content-center w-auto h-100 text-white' style={{ minHeight: '100vh' }}>
<Container>
  

        
        <Row className='py-5'>
          <Col className='d-flex justify-content-center'>
<h1>Registra tu cuenta</h1>
          </Col>
        </Row>

          <Form>
          <Row>
          <Col className='d-flex justify-content-center'>
      <Form.Group className="mb-3">
        <Form.Label>Usuario</Form.Label>
        <Form.Control type="text" id="apodoRegistro" onChange={(e) => setApodo(e.target.value)} placeholder="Ingresa tu apodo" autoComplete="off" />
      
      </Form.Group>
      </Col>
      </Row>

      <Row>
          <Col className='d-flex justify-content-center'>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" id="emailRegistro" onChange={(e) => setEmail(e.target.value)} placeholder="Ingresa tu email" autoComplete="off" />

      </Form.Group>
      </Col>
      </Row>

      <Row>
          <Col className='d-flex justify-content-center'>
      <Form.Group className="mb-3">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" id="passwordRegistro" onChange={(e) => setPassword(e.target.value)} placeholder="********" autoComplete="off" />
      </Form.Group>
      </Col>
      </Row>

      <Row>
          <Col className='d-flex justify-content-center'>
      <Button type="button" variant="success" id="registroUsuario" onClick={() => registrarUsuario()}>
        Registrarse
      </Button>
      </Col>
      </Row>
    </Form>
    </Container>
    </Container>
    </div>
  )
}

export default Registro