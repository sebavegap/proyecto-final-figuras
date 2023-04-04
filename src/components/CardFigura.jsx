import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { Col, Card, ListGroup, Alert, Button } from 'react-bootstrap';

import Context from '../Context';

const CardFigura = ({ figura }) =>
{
    const navigate = useNavigate();

    const { agregarFigura } = useContext(Context);

    const verDetalle = () =>
    {
        navigate(`/galeria/detalle/${figura.id}`);
    }

    return (
        <Col>
            <Card style={{ marginBlock: '2em' }}>
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
                    <img src={figura.imagen} style={{ maxWidth: '10em' }}></img>
                </Card.Header>
                <Card.Body style={{ minHeight: '6em' }}>
                    <Card.Title>{figura.nombre}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Linea: {figura.linea}</Card.Subtitle>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Estado: {figura.estado}</ListGroup.Item>
                    <ListGroup.Item>Cantidad: {figura.cantidad}</ListGroup.Item>
                    <ListGroup.Item>
                        <Alert key="primary" variant="primary" style={{ fontWeight: 700 }}>
                            Precio: ${figura.precio}
                        </Alert>
                    </ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Button variant="primary" onClick={() => verDetalle()} style={{ marginRight: '1em' }}>Ver Más</Button>
                    <Button variant="success" onClick={() => agregarFigura(figura)} style={{ marginRight: '1em' }}>Agregar</Button>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default CardFigura;
