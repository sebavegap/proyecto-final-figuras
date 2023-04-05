import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Barra() {
  return (
    <>
      <Navbar bg="black" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            El.Coleccionista
            </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/galeria">En venta</Nav.Link>
          </Nav>
          <Nav>
          <Nav.Link href="/favoritos">Favoritos</Nav.Link>
          <Nav.Link href="/carrito" className="carrito" > 🛒$</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Barra;