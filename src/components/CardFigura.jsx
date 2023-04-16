import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { Col, Card, ListGroup, Alert, Button } from 'react-bootstrap';

import Context from '../Context';

const CardFigura = ({ figura }) =>
{
    const navigate = useNavigate();

    const { agregarFigura } = useContext(Context);
    const { agregarFavoritos, datosFavoritos, setDatosFavoritos } = useContext(Context);

    const verDetalle = () =>
    {
        navigate(`/galeria/detalle/${figura.id}`);
    }

   

    return (
        <Col>
            <Card border="dark" style={{ marginBlock: '2em' }}>
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
                <Card.Body
                    style={
                    {
                        backgroundColor: '#F8F9FA',
                        minHeight: '6em'
                    }}>
                    <Card.Title>{figura.nombre}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">📁 Linea: <span style={{ fontWeight: 700 }}>{figura.linea}</span></Card.Subtitle>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ul style={{ marginBlock: '0.5em' }}>
                        <Card.Text style={{ fontWeight: 500, marginBlock: '0.5em' }}>✔️ Estado: <span className="text-success" style={{ fontWeight: 700 }}>{figura.estado.toUpperCase()}</span></Card.Text>
                        {figura.cantidad > 0 ?
                            <Card.Text style={{ fontWeight: 500, marginBlock: '0.5em' }}>✔️ Disponibles: <span className="text-success" style={{ fontWeight: 700 }}>{figura.cantidad}</span></Card.Text>
                        : <Card.Text className='text-muted' style={{ fontWeight: 500, marginBlock: '0.5em' }}>❌ Disponibles: <span className="text-danger" style={{ fontWeight: 700 }}>{figura.cantidad}</span></Card.Text>}
                    </ul>
                    <ListGroup.Item>
                        <Alert key="dark" variant="dark"
                            style={
                            {
                                color: '#198754',
                                backgroundColor: '#F8F9FA', 
                                fontWeight: 700,
                                margin: 0
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
                            Precio: {
                                //figura.precio con estilo de moneda chilena
                                new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(figura.precio)
                            }
                        </Alert>
                    </ListGroup.Item>
                </ListGroup>
                <Card.Body style={{ backgroundColor: '#F8F9FA' }} 
                /* alineamiento space-between de los botones */
                className="d-flex justify-content-between">
                    <Button variant="primary" onClick={() => verDetalle()} >🔍 Ver Más</Button>
                    {figura.cantidad > 0 ?
                        <Button variant="success" onClick={() => agregarFigura(figura)} >🛒 Agregar</Button>
                    : <Button variant="success"  disabled>No Disponible</Button>}
                  {/* Botón para agregar a favoritos */}
{
    datosFavoritos.some((fav) => fav.id === figura.id)
        ? <Button variant='danger' onClick={() => setDatosFavoritos(datosFavoritos.filter((fav) => fav.id !== figura.id))}>💔 Quitar favorito</Button>
        : <Button variant='danger' onClick={() => agregarFavoritos(figura)}>❤️ Añadir favorito</Button>
}

                </Card.Body>
            </Card>
        </Col>
    );
}

export default CardFigura;
