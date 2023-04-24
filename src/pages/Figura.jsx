import React, { useContext, useState } from 'react'
import { Button, Container } from 'react-bootstrap'

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
        
            const login = document.getElementById('registroFigura');
        
            login.innerText = 'Registrando...';
            login.disabled = true;

            //un segundo de espera
            setTimeout(() =>
            {
                const figura =
                {
                    id: datosFiguras[0][datosFiguras[0].length - 1].id,
                    nombre: nombre,
                    linea: lineaFigura,
                    estado: "Nuevo, con caja",
                    cantidad: parseInt(cantidad),
                    precio: parseInt(precio),
                    imagen: imagen,
                }

                datosFiguras[0].push(figura);

                //funcion para navegar al catalogo
                navigate('/galeria');
            }, 1000);
        }
        else
        {
          alert('Todos los campos son obligatorios');
        }
    }

    return (
        <Container className='pageFigura bg-dark bg-opacity-50 w-25 p-5'>
            <h2>Agrega un producto</h2>
            <form>

                <label className='mt-3'>Nombre del producto</label><br />
                <input type="text" id="nombreRegistro" onChange={(e) => setNombre(e.target.value)} autoComplete="off" /><br />

                <label className='mt-3'>Precio del producto</label><br />
                <input type="number" id="precioRegistro" onChange={(e) => setPrecio(e.target.value)} autoComplete="off" /><br />

                <label className='mt-3'>¿Cuantos productos son?</label><br />
                <input type="number" id="cantidadRegistro" onChange={(e) => setCantidad(e.target.value)} autoComplete="off" /><br />

                <label className='mt-3'>URL de la imagen</label><br />
                <input type="text" id="imagenRegistro" onChange={(e) => setImagen(e.target.value)} autoComplete="off" /><br />

                <label className='m-3'>Elige la linea de tu producto</label><br />
                <input type="checkbox" id="lineaUnoRegistro" value="Star Wars: The Black Series" onChange={(e) => setLineaFigura(e.target.value)} /> Star Wars: The Black Series<br />
                <input className='mb-4' type="checkbox" id="lineaDosRegistro" value="Marvel Legends" onChange={(e) => setLineaFigura(e.target.value)} /> Marvel Legends<br />

                <Button type="button" variant="primary" id="registroFigura" onClick={() => registrarFigura()}>Registrar</Button>
            </form>
        </Container>
    )
}

export default Figura;
