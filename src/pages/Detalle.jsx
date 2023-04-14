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
            <Card border="dark" style={{ marginTop: '5em' }}>
                <Row>
                    <Col>
                        <Card.Header
                            style={
                            {
                                backgroundColor: '#FFFFFF',
                                borderBottom: 'none',
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
                        <Card.Body
                            style={
                            {
                                backgroundColor: '#F8F9FA',
                                minHeight: '6em'
                            }}>
                            <Card.Title>{figura[0].nombre}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">📂 Linea: <span style={{ fontWeight: 700 }}>{figura[0].linea}</span></Card.Subtitle>
                        </Card.Body>
                        <hr style={{ marginBlock: 0 }} />
                        <Card.Body style={{ padding: '0.5em 0' }}>
                            <ul style={{ marginBlock: '0.5em' }}>
                                <Card.Text style={{ fontWeight: 500, marginBlock: '0.5em' }}>✔️ Estado: <span className="text-success" style={{ fontWeight: 700 }}>{figura[0].estado.toUpperCase()}</span></Card.Text>
                                {figura[0].cantidad > 0 ?
                                    <Card.Text style={{ fontWeight: 500, marginBlock: '0.5em' }}>✔️ Disponibles: <span className="text-success" style={{ fontWeight: 700 }}>{figura[0].cantidad}</span></Card.Text>
                                : <Card.Text className='text-muted' style={{ fontWeight: 500, marginBlock: '0.5em' }}>❌ Disponibles: <span className="text-danger" style={{ fontWeight: 700 }}>{figura[0].cantidad}</span></Card.Text>}
                            </ul>
                            <Alert key="dark" variant="dark"
                                style={
                                {
                                    color: '#198754',
                                    backgroundColor: '#F8F9FA', 
                                    fontWeight: 700,
                                    margin: '1em'
                                }}
                            >
                                <p
                                    style={
                                    {
                                        fontSize: '1.5em',
                                        fontWeight: 400,
                                        display: 'flex',
                                        justifyContent: 'start',
                                        alignItems: 'center',
                                        margin: 0
                                    }}>🛈 <span style={{ fontSize: '0.75em', marginInline: '0.5em' }}>Información</span>
                                </p>
                                Precio: ${figura[0].precio}
                            </Alert>
                        </Card.Body>
                        <hr style={{ marginBlock: 0 }} />
                        <Card.Body style={{ backgroundColor: '#F8F9FA' }}>
                            <Button variant="primary" onClick={() => volver()} style={{ marginRight: '1em' }}>Volver</Button>
                            {figura[0].cantidad > 0 ?
                                <Button variant="success" onClick={() => agregarFigura(figura[0])} style={{ marginRight: '1em' }}>🛒 Agregar</Button>
                            : <Button variant="success" style={{ marginRight: '1em' }} disabled>No Disponible</Button>}
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </Container>
    );
}

export default Detalle;
