import React, { useContext, useState } from 'react'
import { Form, Button, Alert, Container, Col, Row } from 'react-bootstrap'

//import de componentes para la navegación
import { useNavigate } from 'react-router-dom'

import Context from '../Context'

const Figura = () => {

    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');
    const [imagen, setImagen] = useState('');
    const [lineaFigura, setLineaFigura] = useState('');
    const [cantidad, setCantidad] = useState('');

    const { datosFiguras } = useContext(Context);

    //creamos la variable navigate para usar más adelante
    const navigate = useNavigate()

    const registrarFigura = () =>
    {
        if (nombre && precio && imagen && lineaFigura && cantidad)
        {
            //manipulando el DOM
            document.getElementById('nombreRegistro').disabled = true;
            document.getElementById('precioRegistro').disabled = true;
            document.getElementById('imagenRegistro').disabled = true;
            document.getElementById('lineaUnoRegistro').disabled = true;
            document.getElementById('lineaDosRegistro').disabled = true;
            document.getElementById('cantidadRegistro').disabled = true;
        
            const registro = document.getElementById('registroFigura');
        
            registro.innerText = 'Registrando...';
            registro.disabled = true;

            //un segundo de espera
            setTimeout(() =>
            {
                const figura =
                {
                    id: datosFiguras[0][datosFiguras[0].length - 1].id + 1,
                    nombre: nombre,
                    linea: lineaFigura,
                    estado: "Nuevo, con caja",
                    cantidad: cantidad,
                    precio: precio,
                    imagen: imagen,
                }

                datosFiguras[0].push(figura);

                //funcion para navegar al catalogo
                navigate('/figura');

                //manipulando el DOM
                document.getElementById('nombreRegistro').disabled = false;
                document.getElementById('precioRegistro').disabled = false;
                document.getElementById('imagenRegistro').disabled = false;
                document.getElementById('lineaUnoRegistro').disabled = false;
                document.getElementById('lineaUnoRegistro').checked = false;
                document.getElementById('lineaDosRegistro').disabled = false;
                document.getElementById('lineaDosRegistro').checked = false;
                document.getElementById('cantidadRegistro').disabled = false;

                registro.innerText = 'Registrar';
                registro.disabled = false;

                document.getElementById('componenteAlert').style.display = '';
                document.getElementById('parrafoAlert').innerText = `¡Figura ${nombre} registrada exitosamente!`;
            }, 1000);
        }
        else
        {
          alert('Todos los campos son obligatorios');
        }
    }

    return (
        <Container fluid className='d-flex align-items-center justify-content-center w-auto h-100 text-white' style={{ minHeight: '100vh' }}>
            <Container className="bg-dark bg-opacity-50 p-3 rounded">
                <Alert className="m-5 mb-0" id="componenteAlert" key="success" variant="success" style={{ marginBlock: '1em', paddingBlock: '1em', display: 'none' }}>
                    <p id="parrafoAlert" style={{ margin: 0 }}></p>
                </Alert>
                <Row className='p-5 pb-3'>
                    <Col className='d-flex justify-content-center'>
                        <h1>Agrega un producto</h1>
                    </Col>
                </Row>
                <Form>
                    <Row>
                        <Col className='d-flex justify-content-center'>
                            <Form.Group className="mb-3">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control type="text" id="nombreRegistro" onChange={(e) => setNombre(e.target.value)} placeholder="Ingresa el nombre" autoComplete="off" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='d-flex justify-content-center'>
                            <Form.Group className="mb-3">
                                <Form.Label>Precio</Form.Label>
                                <Form.Control type="number" id="precioRegistro" onChange={(e) => setPrecio(e.target.value)} placeholder="Ingresa el precio" autoComplete="off" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='d-flex justify-content-center'>
                            <Form.Group className="mb-3">
                                <Form.Label>Cantidad</Form.Label>
                                <Form.Control type="number" id="cantidadRegistro" onChange={(e) => setCantidad(e.target.value)} placeholder="Ingresa la cantidad" autoComplete="off" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='d-flex justify-content-center'>
                            <Form.Group className="mb-3">
                                <Form.Label>Imagen</Form.Label>
                                <Form.Control type="text" id="imagenRegistro" onChange={(e) => setImagen(e.target.value)} placeholder="URL de la imagen" autoComplete="off" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='d-flex justify-content-center'>
                            <Form.Group className="mb-3">
                                <input type="checkbox" id="lineaUnoRegistro" value="Star Wars: The Black Series" onChange={(e) => setLineaFigura(e.target.value)} /> Star Wars: The Black Series<br />
                                <input className='mb-4' type="checkbox" id="lineaDosRegistro" value="Marvel Legends" onChange={(e) => setLineaFigura(e.target.value)} /> Marvel Legends<br />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='d-flex justify-content-center'>
                            <Button type="button" variant="success" id="registroFigura" onClick={() => registrarFigura()}>Registrar</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </Container>
    )
}

export default Figura;
