import { useContext, useState } from 'react';

import { Container, Row, ButtonGroup, Button, Col, InputGroup, FormControl, Dropdown, DropdownButton } from 'react-bootstrap';

//import de imagenes para botones Disney+
import MarvelLogo from '../assets/imgs/marvel-logo.png';
import StarWarsLogo from '../assets/imgs/starwars-logo.png';

import CardFigura from '../components/CardFigura';

import Context from '../Context';

const Galeria = () => {
  //consumimos el contexto
  const { datosFiguras } = useContext(Context);
  //creamos un estado para filtrar las figuras
  const [figurasFiltradas, setFigurasFiltradas] = useState(datosFiguras[0]);
  const [busqueda, setBusqueda] = useState('');

  //creamos una funcion para filtrar las figuras con los botones arriba de las cards
  //la función utiliza el parametro categoria para filtrar las figuras, que le entregamos desde los botones
  const filtrarFiguras = (categoria) => {
    //filtramos el array de figuras con el metodo filter, y le pasamos la condición para filtrar
    //la variable filtradas va a contener el nuevo array de figuras filtradas
    const filtradas = datosFiguras[0].filter((data) =>
      //la condición va a buscar que la linea de la figura incluya la categoria que le pasamos por parametro
      data.linea.toLowerCase().includes(categoria.toLowerCase())
    );
    //finalmente seteamos el estado con el nuevo array de figuras filtradas
    setFigurasFiltradas(filtradas);
  };

  const reiniciarFiltro = () => {
    //reiniciamos el estado con todas las figuras seteando el estado con el array de datosFiguras
    setFigurasFiltradas(datosFiguras[0]);
  };
  //funcion para capturar el valor del input y actualizar el estado
  const actualizarBusqueda = (event) => {
    setBusqueda(event.target.value);
  };
  //filtro de las figuras previamente filtradas por los botones
  //Ahora usamos filter para generar un nuevo array con la figuras que incluyan el nombre que el usuario esté escribiendo en el input
  const figurasAMostrar = figurasFiltradas.filter((figura) =>
    figura.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  //funcion para ordenar las figuras por precio, ascendete o descendente
  const ordenarFiguras = (orden) => {
    const figurasOrdenadas = [...figurasFiltradas].sort((a, b) => {
      if (orden === 'asc') {
        return a.precio - b.precio;
      } else {
        return b.precio - a.precio;
      }
    });

    setFigurasFiltradas(figurasOrdenadas);
  };


  return (
    <Container style={{ marginBlock: '5em' }}>
      <Container className="bg-dark bg-opacity-50 p-3 rounded">
        <h1 className='text-white justify-content-start pb-3'>Galería de Figuras</h1>
        <Row className="align-items-end">
          <Col xs={12} md={6}>
            <ButtonGroup>
              {/* los botones llaman a la función filtrarFiguras y le entregan el parametro que necesitan */}
              <Button
                variant="danger"
                onClick={() => filtrarFiguras('marvel')}
                style={{
                  /* la forma de url llama a la imagen que importamos arriba */
                  backgroundImage: `url(${MarvelLogo})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  color: 'transparent',
                }}
              >
                Marvel
              </Button>
              <Button
                variant="dark"
                className='p-1'
                onClick={() => filtrarFiguras('star wars')}
                style={{
                  backgroundImage: `url(${StarWarsLogo})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  color: 'transparent',
                }}
              >
                Star Wars
              </Button>
              <Button variant="outline-secondary" onClick={reiniciarFiltro}>
                Todas las figuras
              </Button>
            </ButtonGroup>
          </Col>
          <Col xs={12} md={6} className='mt-2'>

            {/* input para filtrar las figuras por nombre, dentro de la selección con los botones */}

            <DropdownButton
              id="dropdown-ordenar"
              title="Ordenar"
              variant="secondary"
              className="me-2"
            >
              <Dropdown.Item onClick={() => ordenarFiguras('asc')}>
                Precio ascendente
              </Dropdown.Item>
              <Dropdown.Item onClick={() => ordenarFiguras('desc')}>
                Precio descendente
              </Dropdown.Item>
            </DropdownButton>
            <InputGroup>
              <InputGroup.Text>Buscar</InputGroup.Text>
              <FormControl
                placeholder="Nombre de figura"
                onChange={actualizarBusqueda}
                value={busqueda}
              />
            </InputGroup>
          </Col>

        </Row>
        <Row xs="1" md="2" lg="3" xl="3" style={{ marginTop: '1em' }}>
          {figurasAMostrar.map((data) => {
            return <CardFigura key={data.id} figura={data} />;
          })}
        </Row>
      </Container>
    </Container>
  );
};

export default Galeria;

