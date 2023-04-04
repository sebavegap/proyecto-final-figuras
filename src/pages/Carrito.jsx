import React, { useContext } from 'react'
import { Button } from 'react-bootstrap';
import MyContext from '../Context';

const Carrito = () => {

  const { datosFiguras } = useContext(MyContext)

  return (
    <div className='container p-5'>

      <div className='bg-light w-75 m-autu p-5'>
        <h4>Carro: </h4>


        {
          datosFiguras.map((figura, i) => {
            return (<div key={i} className="d-flex py-2">

              <div className="d-flex w-50 justify-content-start align-items-center">
                <img src={figura.imagen} width="100" alt="juguete" />
                <h6 className="mb-0 text-capitalize p-2">""</h6>
              </div>

              <div className="d-flex w-50 justify-content-end align-items-center">
                <h6 className="mb-0 p-2 text-success w-50">
                  $
                </h6>
                <div className='justify-content-end'>
                  <Button variant='danger' onClick="">-</Button>
                  <strong className='px-1'>  </strong>
                  <Button variant='primary' onClick="">+</Button>
                </div>
              </div>
            </div>
            );
          })
        }
      </div>
    </div>
  )
}

export default Carrito