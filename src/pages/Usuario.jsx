import { useState, useContext, useEffect } from 'react';

import { Container } from 'react-bootstrap';
import { Form, Row, Col, Button } from 'react-bootstrap';

//import de componentes para la navegación
import { useNavigate } from 'react-router-dom'

import MyContext from '../Context'

const Usuario = () =>
{
    const bool = true;

    //datos del usuario
    const [apodo, setApodo] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { user, setUser, usuarios, setUsuarios } = useContext(MyContext);

    //creamos la variable navigate para usar más adelante
    const navigate = useNavigate()

    const usuario = usuarios.find((usuario) => (usuario.id === user.id));

    //muestra los datos una única vez
    useEffect(() => 
    {
        document.getElementById('apodoUsuario').value = usuario.usuario;
        setApodo(usuario.usuario);

        document.getElementById('emailUsuario').value = usuario.email;
        setEmail(usuario.email);

        document.getElementById('passwordUsuario').value = usuario.password;
        setPassword(usuario.password);

        document.getElementById('permisoUsuario').value = usuario.admin ? 'Es administrador' : 'No es administrador';
    }, [bool])

    //función para actualizar al usuario
    const actualizarUsuario = () =>
    {
        if (apodo && email && password)
        {
            //manipulando el DOM
            document.getElementById('apodoUsuario').disabled = true;
            document.getElementById('emailUsuario').disabled = true;
            document.getElementById('passwordUsuario').disabled = true;

            const update = document.getElementById('actualizacionUsuario');
        
            update.innerText = 'Actualizando...';
            update.disabled = true;

            //un segundo de espera
            setTimeout(() =>
            {
                //datos del usuario
                setUser(
                {
                    id: usuario.id,
                    usuario: apodo.toUpperCase(),
                    email: email,
                    password: password,
                    admin: usuario.admin
                });

                //actualizar los datos del usuario
                const index = usuarios.findIndex((usuario) => usuario.id === user.id);

                usuarios[index].usuario = apodo.toUpperCase();
                usuarios[index].email = email;
                usuarios[index].password = password;

                setUsuarios([...usuarios]);

                //funcion para actualizar la página
                navigate('/usuario');

                //manipulando el DOM
                document.getElementById('apodoUsuario').disabled = false;
                document.getElementById('emailUsuario').disabled = false;
                document.getElementById('passwordUsuario').disabled = false;

                update.innerText = 'Actualizar';
                update.disabled = false;
            }, 1000);
        }
        else
        {
          alert('Todos los campos son obligatorios');
        }
    }

    //como curiosidad el estado de los datos del usuario activo recién se actualizan aquí y no dentro de la función
    //console.log(user)

    return (
        <div>
            <Container fluid className='d-flex align-items-center justify-content-center w-auto h-100 text-white' style={{ minHeight: '100vh' }}>
                <Container>
                    <Row className='py-5'>
                        <Col className='d-flex justify-content-center'>
                            <h1>Actualiza tus datos</h1>
                        </Col>
                    </Row>

                    <Form>
                        <Row>
                            <Col className='d-flex justify-content-center'>
                                <Form.Group className="mb-3">
                                    <Form.Label>Usuario</Form.Label>
                                    <Form.Control type="text" id="apodoUsuario" onChange={(e) => setApodo(e.target.value)} placeholder="Ingresa tu apodo" autoComplete="off" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='d-flex justify-content-center'>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" id="emailUsuario" onChange={(e) => setEmail(e.target.value)} placeholder="Ingresa tu email" autoComplete="off" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='d-flex justify-content-center'>
                                <Form.Group className="mb-3">
                                    <Form.Label>Contraseña</Form.Label>
                                    <Form.Control type="password" id="passwordUsuario" onChange={(e) => setPassword(e.target.value)} placeholder="********" autoComplete="off" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='d-flex justify-content-center'>
                                <Form.Group className="mb-3">
                                    <Form.Label>Permiso</Form.Label>
                                    <Form.Control type="text" id="permisoUsuario" disabled />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='d-flex justify-content-center'>
                                <Button type="button" variant="success" id="actualizacionUsuario" onClick={() => actualizarUsuario()}>
                                    Actualizar
                                </Button>
                            </Col>
                        </Row>
                    </Form>

                </Container>
            </Container>
        </div> 
    );
}

export default Usuario;
