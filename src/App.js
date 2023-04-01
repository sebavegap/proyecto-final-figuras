//import de hooks
import { useState, useEffect } from 'react';

//import de react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//import de pages
import Home from './pages/Home';
import Login from './pages/Login';
import Registro from './pages/Registro';

//import del contexto
import MyContext from './Context';

//import del inventario de figuras desde la carpeta public como pseudo API
import { inventario } from "./Inventario.js"



function App() {


//proveemos el contexto con un estado donde guardaremos el inventario de figuras
const [datosFiguras, setDatosFiguras] = useState([inventario]);
//con console log revisamos que tenemos los datos del array
console.log(datosFiguras);


  return (
    <div className="App">

      <MyContext.Provider value={{ datosFiguras, setDatosFiguras }}>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
          </Routes>
        </BrowserRouter>

      </MyContext.Provider>

    </div>
  );
}

export default App;
