import { useState } from "react"
import { Link } from "react-router-dom"

const Nap = () => {

    const [count, setCount] = useState(0)

    return (
      <>
      <div className="navbar"> 
      
       <div id="sec-1">
            <a><Link to= {"/Home"} >Home</Link></a>
           
       </div>
  
        <div className="sec-2">
            <a><Link to= {"/Nosotros"} >Nosotros</Link></a>
        </div>

            <div className="sec-3">
            <a><Link to= {"/Servicios"} >Servicios</Link></a>
        </div>

            <div className="sec-4">
            <a><Link to= {"/Productos"} >Productos</Link></a>
            </div>

            <div className="sec-5">
            <a><Link to= {"/Contactos"} >Contactos</Link></a>
            </div>

      </div>

      </>
    )
}


  
export default Nap



