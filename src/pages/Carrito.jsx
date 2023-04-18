import React, { useContext } from 'react'
import { Button } from 'react-bootstrap';
import MyContext from '../Context';
import { calculaTotal } from '../utils/utils';

const Carrito = () => {

  const { carrito, setCarrito, total, setTotal } = useContext(MyContext);

  //Disminuir cantidad
  const disminuirCantidad = (id) => {
    const idx = carrito.findIndex((f) => f.id === id);

    if (idx >= 0) {
      //Si llega a 0 no sigue disminuyendo
      if (carrito[idx].cantidad > 0) {
        carrito[idx].cantidad -= 1;
        //si llega a 0 se elimina
        if (carrito[idx].cantidad === 0) {
          carrito.splice(idx, 1);
        }
        setCarrito([...carrito]);
      }
    }
    setTotal(calculaTotal(carrito));
  }

  //Aumentar cantidad
  const aumentarCantidad = (id) => {
    const idx = carrito.findIndex((f) => f.id === id);

    if (idx >= 0) {
      carrito[idx].cantidad += 1;
      setCarrito([...carrito]);
    }
    setTotal(calculaTotal(carrito));

  }

  return (

    <div className='carroPage p-5'>
      <div className='backCarro bg-light w-75 m-autu p-5'>
        <h3>Tu carro :</h3>



        <div className='d-flex justify-content-between py-2'>

          <div className='d-flex w-50 justify-content-between align-items-center'>
            <h6 className='mb-0 text-capitalize p-2'>Producto</h6>
          </div>

          <div className='d-flex w-50 justify-content-end align-items-center'>
            <h6 className='mb-0 p-2 text-success w-50'>Subtotal</h6>
            <strong className='w-50 text-center'>Cantidad</strong>
          </div>


        </div>


        {
          carrito.map((figura, i) => {
            return (<div key={i} className="d-flex justify-content-between py-2">

              <div className="d-flex w-50 justify-content-start align-items-center">
                <img src={figura.image} width="100" alt="pruductoimg" />
                <h6 className="mb-0 text-capitalize p-2">{figura.name}</h6>
              </div>

              <div className="d-flex w-50 justify-content-end align-items-center">
                <h6 className="mb-0 p-2 text-success w-50">
                  $ {(figura.price * figura.cantidad)}
                </h6>
                <div className='w-50 text-center'>
                  <Button variant='danger' style={{padding:"0 10px 0 10px"}} onClick={() => disminuirCantidad(figura.id)}>-</Button>
                  <strong className='px-1'> {figura.cantidad} </strong>
                  <Button variant='success' style={{padding:"0 10px 0 10px"}} onClick={() => aumentarCantidad(figura.id)}>+</Button>
                </div>
              </div>
            </div>
            );
          })
        }
        <p className='totalPizzas'>Total: $<strong>{total}</strong></p>
        <Button className='d-flex flex-column' variant='success'>ir a Pagar</Button>
      </div>
    </div>
  )
}

export default Carrito