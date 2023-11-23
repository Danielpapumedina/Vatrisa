import React from 'react'
import Nap from "./Nap"
import {Routes,Route} from 'react-router-dom'
import Nosotros from '../component/Nosotros'
import Home from '../component/Home'
import Servicios from '../component/Servicios'
import Productos from '../component/Productos'
import Contactos from '../component/Contactos'


const AppRouter = () => {
  return <>
    <Nap/>
    <Routes>
        <Route path="/*" element={<Home/>}/>
        <Route path="/Nosotros" element={<Nosotros/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Servicios" element={<Servicios/>}/>
        <Route path="/Productos" element={<Productos/>}/>
        <Route path="/Contactos" element={<Contactos/>}/>
    </Routes>

  </>
}

export default AppRouter