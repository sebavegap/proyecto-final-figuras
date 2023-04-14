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
import Carrito from './pages/Carrito'
import Favoritos from './pages/Favoritos';

//import del contexto
import MyContext from './Context';

//import del inventario de figuras desde la carpeta public como pseudo API
import { inventario } from "./Inventario.js"

//estilos de bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Barra from './components/Barra';

function App() {


//proveemos el contexto con un estado donde guardaremos el inventario de figuras
const [datosFiguras, setDatosFiguras] = useState([inventario]);

const [carrito, setCarrito] = useState([]);
const [total, setTotal] = useState(0);
const [favoritos, setFavoritos] = useState([]);

//con console log revisamos que tenemos los datos del array
console.log(datosFiguras);

const agregarFigura = (figura) =>
{
  const index = carrito.findIndex((data) => data.id === figura.id);

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

  const id = datosFiguras[0].findIndex((data) => data.id === figura.id);

  datosFiguras[0][id].cantidad -= 1;
}

//función para agregar a favoritos
const agregarFavorito = (figura) =>
{
  const index = favoritos.findIndex((data) => data.id === figura.id);

  if (index >= 0)
  {
    favoritos[index].cantidad += 1;

    setFavoritos([...favoritos]);

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

    setFavoritos([...favoritos, seleccionada]);
  }

 
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
          agregarFigura,
          agregarFavorito,
          favoritos,
          setFavoritos
        }}>

        <BrowserRouter>
        <Barra></Barra>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/galeria" element={<Galeria></Galeria>}></Route>
            <Route path="/galeria/detalle/:id" element={<Detalle></Detalle>}></Route>
            <Route path="/carrito" element={<Carrito></Carrito>}></Route>
            <Route path="/favoritos" element={<Favoritos></Favoritos>}></Route>
            <Route path="*" element={<Home />} />
          </Routes>
        </BrowserRouter>

      </MyContext.Provider>

    </div>
  );
}

export default App;
