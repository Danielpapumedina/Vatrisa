import React from 'react'

const Home = () => { 
  return <>

    <div class='containeri'>
      <div class='intro'>Vatrisa: <p>Dedicados al servicio de logistica, Distribucion, Impulso comercial, Venta y Cobranza de diversos productos</p></div>
    </div>
    
    <div class="container">
    <br/>
    <div id="theCarousel" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#theCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#theCarousel" data-slide-to="1"></li>
        <li data-target="#theCarousel" data-slide-to="2"></li>
        <li data-target="#theCarousel" data-slide-to="3"></li>
        
      </ol>
  
      <div class="carousel-inner" role="listbox">
        <div class="item active">
          <img id='i1' src="salsa.jpg" alt="Ilustracion"/ > 
           <div class="carousel-caption d-none d-md-block">
      <h3>Valentina</h3>
      <p>Salsa picante</p>
    </div>
        </div>
       
        <div class="item">
          <img src="Tam.png" alt="fotografia" width="600" height="424"/> 
           <div class="carousel-caption d-none d-md-block">
      <h3> Salsa Tamazula</h3>
      <p>Salsa picante</p>
    </div>
        </div>
  
       <div class="item">
          <img src="shoyun.jpg" alt="pintura" width="600" height="424"/>
           <div class="carousel-caption d-none d-md-block">
      <h3>Shoyun</h3>
      <p>Salsa soya</p>
    </div>
        </div>
         <div class="item">
          <img src="carbon.jpg" alt="diseno" width="600" height="424"/> 
           <div class="carousel-caption d-none d-md-block">
      <h3>Monte Alto</h3>
      <p>Carbon</p>
    </div>
        </div>
        <div class="item">
          <img src="Veloz.png" alt="diseno" width="600" height="424"/> 
           <div class="carousel-caption d-none d-md-block">
      <h3>Movie</h3>
      <p>Palomita</p>
    </div>
        </div>
        <div class="item">
          <img src="Costa.jpg" alt="diseno" width="600" height="424"/> 
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

<div class='footer'>
<footer>
  <p>VATRISA IMPULSORA COMERCIAL.</p>
  <p><a href="zap791@amerike.edu.mx">zap791@amerike.edu.mx</a></p>
</footer>
</div>

  </>
  
  
}



export default Home