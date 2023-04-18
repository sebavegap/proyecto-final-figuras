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
import Usuario from './pages/Usuario';
import Figura from './pages/Figura';

//import del contexto
import MyContext from './Context';

//import del inventario de figuras desde la carpeta public como pseudo API
import { inventario } from "./Inventario.js"

//estilos de bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Barra from './components/Barra';

function App() {

//validar la conexión del usuario
const [conectado, setConectado] = useState(false);
const [user, setUser] = useState({});

//array de usuarios registrados
const [usuarios, setUsuarios] = useState(
[
  {
    id: 1,
    usuario: "ADMIN",
    email: "admin@coleccionista.cl",
    password: "1234",
    admin: true
  },
  {
    id: 2,
    usuario: "USUARIO",
    email: "usuario@coleccionista.cl",
    password: "1234",
    admin: false
  }
]);

//proveemos el contexto con un estado donde guardaremos el inventario de figuras
const [datosFiguras, setDatosFiguras] = useState([inventario]);

const [carrito, setCarrito] = useState([]);
const [total, setTotal] = useState(0);
const [datosFavoritos, setDatosFavoritos] = useState([]);

//con console log revisamos que tenemos los datos del array
console.log(datosFiguras);

//función para agregar productos al carrito
const agregarFigura = (figura) =>
{
  const index = carrito.findIndex((data) => data.id === figura.id);

  //si ya existe el producto se suma una cantidad sino se agrega un producto nuevo
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

    //se actualiza el array del carrito
    setCarrito([...carrito, seleccionada]);
  }

  //se actualiza el precio total
  setTotal(total + figura.precio);

  //se disminuye la cantidad disponible de productos
  const id = datosFiguras[0].findIndex((data) => data.id === figura.id);

  datosFiguras[0][id].cantidad -= 1;
}

//función para agregar a favoritos
const agregarFavoritos = (figura) => {
  const index = datosFavoritos.findIndex((data) => data.id === figura.id);

  // Chequeo para saber si la figura ya está en favoritos
  if (index === -1) {
    // seteo de favoritos con el nuevo objeto
    setDatosFavoritos([...datosFavoritos, figura]);
  }

  console.log(datosFavoritos);
};




  return (
    <div className="App">

      <MyContext.Provider value={
        {
          conectado,
          setConectado,
          user,
          setUser,
          usuarios,
          setUsuarios,
          datosFiguras,
          setDatosFiguras,
          carrito,
          setCarrito,
          total,
          setTotal,
          agregarFigura,
          agregarFavoritos,
          datosFavoritos,
          setDatosFavoritos
        }}>

        <BrowserRouter>
        <Barra></Barra>
          <Routes>
            {!conectado &&
              <>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registro" element={<Registro />} />
              </>}
            {conectado && user.admin && <Route path="/figura" element={<Figura></Figura>}/>}
            {conectado &&
              <>
                <Route path="/" element={<Galeria></Galeria>} />
                <Route path="/galeria" element={<Galeria></Galeria>} />
                <Route path="/galeria/detalle/:id" element={<Detalle></Detalle>} />
                <Route path="/carrito" element={<Carrito></Carrito>} />
                <Route path="/favoritos" element={<Favoritos></Favoritos>} />
                <Route path="/usuario" element={<Usuario></Usuario>} />
              </>}
            {!conectado ? <Route path="*" element={<Home />} /> : <Route path="/galeria" element={<Galeria></Galeria>} />}
          </Routes>
        </BrowserRouter>

      </MyContext.Provider>

    </div>
  );
}

export default App;
