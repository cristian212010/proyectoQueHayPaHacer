const showEvent = document.querySelector('#showEvent');

/* creacion de menu */
const menu = document.querySelector('header')
menu.innerHTML =`
<nav class="navbar" id="nav">
            <a class="" id="textlogo">
                <img id="" class="" width="70" height="70" src="img/logo.png">
                Que hay pa'cer
            </a>
            <ul class="nav nav-pills  justify-content-end">
                <li class="nav-item"><a class="nav-link" href="index.html">Inicio</a></li>
                <li class="nav-item"><a class="nav-link" href="Buscador.html">Buscar</a></li>
                <li class="nav-item"><a class="nav-link" href="calendario.html">Calendario</a></li>
                <li class="nav-item"><a class="nav-link" href="lugares.html">Lugares</a></li>
                <li class="nav-item"><a class="nav-link" href="nosotros.html">Acerca de nosotros</a></li>
                <li class="nav-item"><a class="nav-link" href="contacto.html">Contacto</a></li>
            </ul>
        </nav>
`

/* const footer=document.querySelector('footer')
footer.innerHTML=`

  <!-- Facebook -->
  <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
      ><i class="fab fa-facebook-f"></i>
    <img src="img/facebook.png" alt="">
  </a>

  <!-- Twitter -->
  <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
    <i class="fab fa-twitter"></i>
    <img src="img/twitter.png" alt="">
  </a>
  <!-- Google -->
  <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
    <i class="fab fa-google"></i>
    <img src="img/google-plus.png" alt="">
  </a>
  <!-- Instagram -->
  <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
    <i class="fab fa-instagram"></i>
    <img src="img/instagram.png" alt="">
  </a>
  <!-- Copyright -->
  <div class="text-center p-3" style="background-color: gray;">© 2020 Copyright:
    <a class="text-white" href="https://mdbootstrap.com/">QuehayPa'hacer.com</a>
  </div>
  <!-- Copyright -->
` */
let random;

function generateRandom(){
  const baseDatos = dataBase;
  random = Math.floor(Math.random() * baseDatos.length); 

  let cardContainer = document.querySelector('.eventoRandom');
    cardContainer.innerHTML = `
    <div class="card" >
      <img class="card-img-top" src="./img/${baseDatos[random].imagen}" alt="Card image cap">
      <div class="card-body">
        <h2 class="card-title"style="font-weight:bold;">${baseDatos[random].nombre}</h2>
        <p class="card-text">${baseDatos[random].direccion}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Servicio: ${baseDatos[random].fecha}</li>
        <li class="list-group-item">${baseDatos[random].horario}</li>
        <li class="list-group-item">${baseDatos[random].tipoEntretenimiento}</li>
        <div class="card-body">
        <a href="#" class="card-link">Mas informacion</a>
    `
}


const randomBtn = document.querySelector('#botonPrincipal');
randomBtn.addEventListener('click', generateRandom);



/* inicio de enventos */
document.addEventListener('DOMContentLoaded',()=>{
  filtrarDataBase()
  })
  
  /* fin de eventos */


/*       CARD 

 <div class="card" >
      <img class="card-img-top" src="img/imagenPrueba.jpeg" alt="Card image cap">
      <div class="card-body">
        <h2 class="card-title"style="font-weight:bold;"></h2>
        <p class="card-text">Cra. 33#45, Bucaramanga</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Sevicio : Todos los dias</li>
        <li class="list-group-item">Viernes,Domingo,Miercoles: 6:00 a.m - 8:00 p.m
          Lunes,Martes,Jueves: 6:00 a.m - 10:00 p.m</li>
        <li class="list-group-item">familia, pareja, amigos</li>
        <div class="card-body">
        <a href="#" class="card-link">Mas informacion</a> */
        