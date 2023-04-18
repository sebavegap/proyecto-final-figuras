import React from 'react'
import { Button, Container } from 'react-bootstrap'

const Figura = () => {

    return (
        <Container className='pageFigura w-25 p-5'>
            <h2>Agrega un producto</h2>
            <form>

                <label className='mt-3' for="name">Nombre del producto</label><br />
                <input type="text" id="name" name="name" /><br />

                <label className='mt-3' for="price">Precio del producto</label><br />
                <input type="number" id="price" name="price" />

                <label className='mt-3' for="descript">Descripcion de tu producto</label><br />
                <textarea name="comentarios" rows="" cols="30"
                    id="comentarios"></textarea>
                <br></br>

                <label className='mt-3' for="image">Selecciona una imagen</label><br />
                <input className='m-2 pb-3' type="file" name="image" />




                <Button variant='primary'>Envia tu producto</Button>
            </form>
        </Container>
    )
}

export default Figura;
