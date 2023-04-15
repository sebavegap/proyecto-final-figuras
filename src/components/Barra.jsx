import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import MyContext from '../Context';

function Barra() {
  const { total } = useContext(MyContext);

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
          <Navbar.Brand as={Link} to="/" style={{ fontWeight: 700 }}>
            El.Coleccionista
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="me-auto,auto">
              <Nav.Link as={Link} to="/" style={{ fontWeight: 500 }}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/galeria" style={{ fontWeight: 500 }}>
                En venta
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/favoritos" style={{ fontWeight: 500 }}>
                Favoritos
              </Nav.Link>
              <Nav.Link as={Link} to="/carrito" className="carrito" style={{ fontWeight: 500 }}>
                🛒 $ {total}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Barra;
