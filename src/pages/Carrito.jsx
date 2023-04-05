import React, { useContext } from 'react'
import { Button } from 'react-bootstrap';
import MyContext from '../Context';

const Carrito = () => {

  const { datosFiguras, total } = useContext(MyContext);

  return (
    <div className='container p-5'>

      <div className='backCarro w-75 m-autu p-5'>
        <h4>Carro: </h4>


        {
          datosFiguras.map((figura, i) => {
            return (<div key={i} className="d-flex py-2">

              <div className="d-flex w-50 justify-content-start align-items-center">
                <img src={figura.imagen} width="100" alt="juguete" />
                <h6 className="mb-0 text-capitalize p-2">{figura.nombre}</h6>
              </div>

              <div className="d-flex w-50 justify-content-end align-items-center">
                <h6 className="mb-0 p-2 text-success w-50">
                  $ {(figura.precio * figura.cantidad)}
                </h6>
                <div className='justify-content-end'>
                  
                  <strong className='px-1'> {figura.cantidad} </strong>
                  
                </div>
              </div>
            </div>
            );
          })
        }
        <p className='totalPizzas'>Total: ${total}</p>
        <Button className='d-flex flex-column' variant='success'>ir a Pagar</Button>
      </div>
    </div>
  )
}

export default Carrito