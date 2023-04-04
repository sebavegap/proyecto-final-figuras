import { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { Container } from 'react-bootstrap';
import { Row, Col, Card, Alert, Button } from 'react-bootstrap';

import Context from '../Context';

const Detalle = () =>
{
    const { id } = useParams();

    const { datosFiguras, agregarFigura } = useContext(Context);

    const figura = datosFiguras[0].filter((data) => data.id == id);

    const navigate = useNavigate();

    const volver = () =>
    {
        navigate('/galeria');
    }

    return (
        <Container style={{ marginBlock: '3em' }}>
            <Card>
                <Row>
                    <Col>
                        <Card.Header
                            style={
                            {
                                backgroundColor: '#FFFFFF',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                minHeight: '20em'
                            }}
                        >
                            <img src={figura[0].imagen} style={{ maxWidth: '10em' }}></img>
                        </Card.Header>
                    </Col>
                    <Col>
                        <Card.Body>
                            <Card.Title>{figura[0].nombre}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Linea: {figura[0].linea}</Card.Subtitle>
                            <hr style={{ marginBlock: '1em' }} />
                            <Card.Text>Estado: {figura[0].estado}</Card.Text>
                            <Card.Text>Cantidad: {figura[0].cantidad}</Card.Text>
                            <hr style={{ marginBlock: '1em' }} />
                            <Alert key="primary" variant="primary" style={{ fontWeight: 700 }}>
                                    Precio: ${figura[0].precio}
                            </Alert>
                            <hr style={{ marginBlock: '1em' }} />
                            <Button variant="primary" onClick={() => volver()} style={{ marginRight: '1em' }}>Volver</Button>
                            <Button variant="success" onClick={() => agregarFigura(figura[0])} style={{ marginRight: '1em' }}>Agregar</Button>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </Container>
    );
}

export default Detalle;
