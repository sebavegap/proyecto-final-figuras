//import de hooks
import { useState, useEffect } from 'react';

//import de bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//import de react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//import de pages
import Home from './pages/Home';
import Login from './pages/Login';
import Registro from './pages/Registro';
import Galeria from './pages/Galeria';
import Detalle from './pages/Detalle';

//import del contexto
import MyContext from './Context';

//import del inventario de figuras desde la carpeta public como pseudo API
import { inventario } from "./Inventario.js"

//estilos de bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


//proveemos el contexto con un estado donde guardaremos el inventario de figuras
const [datosFiguras, setDatosFiguras] = useState([inventario]);

const [carrito, setCarrito] = useState([]);
const [total, setTotal] = useState(0);

//con console log revisamos que tenemos los datos del array
console.log(datosFiguras);

const agregarFigura = (figura) =>
{
  const index = carrito.findIndex((data) => data.id == figura.id);

  if (index >= 0)
  {
    carrito[index].cantidad += 1;

    setCarrito([...carrito]);
  }
  else
  {
    const seleccionada =
    { 
      id: figura.id,
      name: figura.nombre,
      price: figura.precio,
      image: figura.imagen,
      cantidad: 1
    }

    setCarrito([...carrito, seleccionada]);
  }

  setTotal(total + figura.precio);
}

  return (
    <div className="App">

      <MyContext.Provider value={
        {
          datosFiguras,
          setDatosFiguras,
          carrito,
          setCarrito,
          total,
          setTotal,
          agregarFigura
        }}>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/galeria" element={<Galeria></Galeria>}></Route>
            <Route path="/galeria/detalle/:id" element={<Detalle></Detalle>}></Route>
            <Route path="*" element={<Home />} />
          </Routes>
        </BrowserRouter>

      </MyContext.Provider>

    </div>
  );
}

export default App;
