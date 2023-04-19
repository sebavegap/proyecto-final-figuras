import React, { useContext, useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import Context from '../Context'

const Figura = () => {

    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');
    const [imagen, setImagen] = useState('');
    const [lineaFigura, setLineaFigura] = useState('');
    const [cantidad, setCantidad] = useState('');


    const { datosFiguras } = useContext(Context);

    const registrarFigura = () => {

        

            const figura = {

                id: datosFiguras[0][datosFiguras[0].length - 1].id,
                nombre: nombre,
                linea: lineaFigura,
                estado: "Nuevo, con caja",
                cantidad: cantidad,
                precio: precio,
                imagen: imagen,

            }

            datosFiguras[0].push(figura);

       

    }


    return (
        <Container className='pageFigura bg-dark bg-opacity-50 w-25 p-5'>
            <h2>Agrega un producto</h2>
            <form>

                <label className='mt-3' for="name">Nombre del producto</label><br />
                <input type="text" id="name" onChange={(e) => setNombre(e.target.value)} autoComplete="off" /><br />

                <label className='mt-3' for="price">Precio del producto</label><br />
                <input type="number" id="price" onChange={(e) => setPrecio(e.target.value)} autoComplete="off" /><br />

                <label className='mt-3' for="price">¿Cuantos productos son?</label><br />
                <input type="number" id="cant" onChange={(e) => setCantidad(e.target.value)} autoComplete="off" /><br />

                <label className='mt-3' for="image">URL de la imagen</label><br />
                <input type="text" id="url" onChange={(e) => setImagen(e.target.value)} autoComplete="off" /><br />

                <label className='m-3' for="descript">Elige la linea de tu producto</label><br />
                <input type="checkbox" id="cbox1" value="Star Wars: The Black Series" onChange={(e) => setLineaFigura(e.target.value)} /> Star Wars: The Black Series<br />
                <input className='mb-4' type="checkbox" id="cbox2" value="Marvel Legends" onChange={(e) => setLineaFigura(e.target.value)} /> Marvel Legends<br />

                <Button variant='primary' onClick={() => registrarFigura()}>Envia tu producto</Button>
            </form>
        </Container>
    )
}

export default Figura;
