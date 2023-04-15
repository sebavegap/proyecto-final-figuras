import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

//import de lo necesario para usar el contexto
import { useContext } from 'react';
import Context from '../Context';

//import de cardFigura
import CardFigura from '../components/CardFigura';

const Favoritos = () => {
  //revisamos si estamos consumiendo el contexto
  const { datosFavoritos, datosFiguras } = useContext(Context);
  console.log(datosFavoritos);

  return (
    <Container style={{ marginBlock: '4em' }} className="text-white">
      <Row>
        <Col>
          <h1>Favoritos</h1>
        </Col>
      </Row>
      <Row xs="1" md="2" lg="3" xl="3">
        {datosFavoritos.map((favorito) => (
          <CardFigura key={favorito.id} figura={favorito} />
        ))}
      </Row>
    </Container>
  );
};

export default Favoritos;
