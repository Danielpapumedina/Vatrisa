import { useState } from "react"
import { Link } from "react-router-dom"

const Nap = () => {

    const [count, setCount] = useState(0)

    return (
      <>
      

      <div className="mi-navbar"> 
      

        <Link to= {"/Home"} >Vatrisa</Link> 

        <div className="linksflex">
            <Link to= {"/Home"} >Home</Link>        
            <Link to= {"/Nosotros"} >Nosotros</Link>
            <Link to= {"/Servicios"} >Servicios</Link>
            <Link to= {"/Productos"} >Productos</Link>
            <Link to= {"/Contactos"} >Contactos</Link>
        </div>

      </div>

      </>
    )
}


  
export default Nap



