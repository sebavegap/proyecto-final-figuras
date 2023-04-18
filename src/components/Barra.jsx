import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

//import de componentes para la navegación
import { useNavigate } from 'react-router-dom'

import MyContext from '../Context';

function Barra() {
  const { conectado, setConectado, user, total } = useContext(MyContext);

  //creamos la variable navigate para volver al Home
  const navigate = useNavigate();

  const cerrarSesion = () =>
  {
      //funcion para cerrar la sesión
      setConectado(false);

      //un segundo de espera
      setTimeout(() => navigate('/'), 1000);
  }

  return (
    <>
      <Navbar
        bg="black"
        variant="dark"
        style={{
          borderStyle: 'solid',
          borderWidth: '0px 0px 1px 0px',
          borderColor: '#FFFFFF3B',
          boxShadow: '0px 0px 10px 0px',
          transition: '1s',
          position: 'fixed',
          top: 0,
          right: 0,
          left: 0,
          zIndex: 1030,
        }}
      >
        <Container>
          {!conectado ?
          <Navbar.Brand as={Link} to="/" style={{ fontWeight: 700 }}>
            El.Coleccionista
          </Navbar.Brand> :
          <Navbar.Brand as={Link} to="/galeria" style={{ fontWeight: 700 }}>
            El.Coleccionista
          </Navbar.Brand>}
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="me-auto,auto">
              {!conectado &&
                <Nav.Link as={Link} to="/" style={{ fontWeight: 500 }}>
                  Home
                </Nav.Link>}
              {conectado && user.admin &&
              <Nav.Link as={Link} to="/figura" style={{ fontWeight: 500 }}>
                Producto nuevo
              </Nav.Link>}
              {conectado &&
              <Nav.Link as={Link} to="/galeria" style={{ fontWeight: 500 }}>
                En venta
              </Nav.Link>}
            </Nav>
            <Nav>
              {conectado &&
              <Nav.Link as={Link} to="/favoritos" style={{ fontWeight: 500 }}>
                Favoritos
              </Nav.Link>}
              {conectado &&
              <Nav.Link as={Link} to="/carrito" className="carrito" style={{ fontWeight: 500 }}>
                🛒 $ {total}
              </Nav.Link>}
              {conectado &&
                <Nav.Link as={Link} to="/" onClick={() => cerrarSesion()} style={{ fontWeight: 500 }}>
                  Salir
                </Nav.Link>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Barra;
