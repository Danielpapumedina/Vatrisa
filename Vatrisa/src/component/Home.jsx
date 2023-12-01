import React from 'react'

const Home = () => { 
  return (
    <>
    
  <div className='main-container'>

        <div class='containeri'>
          <div class='containertext'>
        <div class='intro'>Desde 1989: <p>Impulsando la calidad </p></div>
      </div></div>
    
    <div class="container">
      <br/>
      <div id="theCarousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#theCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#theCarousel" data-slide-to="1"></li>
          <li data-target="#theCarousel" data-slide-to="2"></li>
          <li data-target="#theCarousel" data-slide-to="3"></li>
          <li data-target="#theCarousel" data-slide-to="4"></li>
          <li data-target="#theCarousel" data-slide-to="5"></li>
          <li data-target="#theCarousel" data-slide-to="6"></li>
          
        </ol>
      
    
        <div class="carousel-inner" role="listbox">
          <div class="item active">
            <img src="tra.png" alt="Ilustracion"/ > 
            <div class="carousel-caption d-none d-md-block">
        <h3>Distribucion</h3>
        <p>Salsa picante</p>
      </div>
          </div>
        
          <div class="item">
            <img src="Bod.jpg" alt="fotografia" width="600" height="424"/> 
            <div class="carousel-caption d-none d-md-block">
        <h3> Almacen</h3>
        <p>Salsa picante</p>
      </div>
          </div>
    
        <div class="item">
            <img src="Almancen8.jpg" alt="pintura" width="600" height="424"/>
            <div class="carousel-caption d-none d-md-block">
        <h3>Almacen</h3>
        <p>Salsa soya</p>
      </div>
          </div>
          <div class="item">
            <img src="Almancen1.jpg" alt="diseno" width="600" height="424"/> 
            <div class="carousel-caption d-none d-md-block">
        <h3>Monte Alto</h3>
        <p>Carbon</p>
      </div>
          </div>
          <div class="item">
            <img src="trai.jpg" alt="diseno" width="600" height="424"/> 
            <div class="carousel-caption d-none d-md-block">
        <h3>Equipo</h3>
        <p>Palomita</p>
      </div>
          </div>
          <div class="item">
            <img src="Bodega.jpg" alt="diseno" width="600" height="424"/> 
            <div class="carousel-caption d-none d-md-block">
        <h3>Almacen</h3>
        <p>Salsa</p>
      </div>
          </div>
          <div class="item">
            <img src="Bodega 3.jpg" alt="diseno" width="600" height="424"/> 
            <div class="carousel-caption d-none d-md-block">
        <h3>Costa Brava</h3>
        <p>Salsa</p>
      </div>
          </div>
    
    
        <a class="left carousel-control" href="#theCarousel" role="button" data-slide="prev">
          <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
          <span class="sr-only">anterior</span>
        </a>
        <a class="right carousel-control" href="#theCarousel" role="button" data-slide="next">
          <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          <span class="sr-only">siguiente</span>
        </a>
      </div>
    </div>
    </div>
    <hr />
  
    <div class='slider-container'>
      
      <div class='Esloganimg'> <div class='textobajoimg'>
      <p>Cubrimos toda la zona metropolitana de Guadalajara y ofrecemos el servicio de Promotoria para dar a conocer tu producto con nuestro cliente</p>
      </div>
      </div>
  
            <section class="slider"> 
          <img src='tamazula1.jpg' alt=''/>
          <img src='salsa.jpg' alt=''/>
          <img src='LOGO SHOYUN.jpg' alt=''/>
          <img src='veloz.png' alt=''/>
          <img src='CostaBrava.jpg' alt=''/>
          <img src='carbon.jpg' alt=''/>
        </section>
      </div>
      
      
  </div>
    

<div class='footer'>
<footer>
  <p>Vatrisa Impulsora Comercial Guadalajara, Jalisco, México</p>
<p>Atención a clientes (33) 38 12 42 47 y 38 11 82 42.</p>
  <p><a href="zap791@amerike.edu.mx">zap791@amerike.edu.mx</a></p>
</footer>
</div>
</>
)
}



export default Home