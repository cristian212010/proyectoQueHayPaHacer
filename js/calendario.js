const mesesDelAnio = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

let datoActual= new Date();
let diaActual=datoActual.getDate();
let numeroMes = datoActual.getMonth();
let annioActual= datoActual.getFullYear();


let datos=document.querySelector('#datos')
let mes=document.querySelector('#mes')
let annio=document.querySelector('#año')


let anteriosMes=document.querySelector('#anterior')
let siguienteMes=document.querySelector('#siguiente')

mes.textContent=mesesDelAnio[numeroMes]
annio.textContent=annioActual.toString()


anteriosMes.addEventListener("click",mesAnterior)
siguienteMes.addEventListener("click",mesSiguiente)

document.addEventListener('DOMContentLoaded',()=>{
    mostarEvento1()
    mostarEvento2()
    mostarEvento3()
    mostarEvento4()
    mostarEvento5()
    mostarEvento6()
})

escribirMes(numeroMes)

function escribirMes(mes){

    for(let i = inicioDia(); i>0;i--){
        datos.innerHTML += ` <div class="dias diasAnteriores datos">
            ${totalDias(numeroMes-1)-(i-1)}
        </div>`;
    }

    for(let i=1; i<=totalDias(mes); i++){
        if(i===diaActual) {
            datos.innerHTML += ` <div class="dias hoy datos">${i}</div>`;
        }else{
            datos.innerHTML += ` <div class="dias datos " id="id${i}">${i}</div>`;
        }
    }

}



function totalDias(mes){
    if(mes===-1) mes=11

    if(mes==0 || mes==2 || mes==4 || mes==6 ||mes==7 ||mes==9 ||mes==11) {
        return 31
    }
    else if(mes==3 ||mes==5 || mes==8 || mes==10){
        return 30
    }
    else{
        return esBiciesto()? 28:28
    }
}

function esBiciesto(){
    return ((annioActual % 100 !==0) && (annioActual % 4 === 0) || (annioActual % 400 === 0));
}

function inicioDia(){
    let inicio = new Date(annioActual, numeroMes, 1);
    return ((inicio.getDay()-1) === -1) ? 6 : inicio.getDay()-1;
}

function mesAnterior(){
    if (numeroMes!==0){
        numeroMes--
    }
    else{
        numeroMes=11
        annioActual--
    }
    nuevaFecha()
}

function mesSiguiente(){
    if (numeroMes!==11){
        numeroMes++
    }
    else{
        numeroMes=0
        annioActual++
    }
    nuevaFecha()

}

function nuevaFecha(){
    datoActual.setFullYear(annioActual,numeroMes,diaActual)
    mes.textContent=mesesDelAnio[numeroMes]
    annio.textContent=annioActual.toString()
    datos.textContent=""
    escribirMes(numeroMes)
}


//Eventos Dias
function mostarEvento1(){
    const dia=document.querySelector('#id6')
    dia.addEventListener("click",llamarEvento1)
}

function llamarEvento1(){

        const contenedorCard=document.querySelector('.una')
        const card=document.createElement('p')

        card.innerHTML=`
        <div class="card" >
        <img class="card-img-top" src="img/eventoEstarCuerpoMujer.jpg">
        <div class="card-body">
          <h2 class="card-title"style="font-weight:bold;" >Estar en Cuerpo de Mujer</h2>
          <p class="card-text">Centro cultural de Bucaramanga, Bucaramanga</p>
        </div>
        <ul class="list-group list-group-flush fondo">
          <li class="list-group-item">Sevicio : 23 Marzo</li>
          <li class="list-group-item">0:00 m</li>
          <li class="list-group-item">"familia", "amigos", "solo"</li>
          <div class="card-body">
          <a href="#" class="card-link">Mas informacion</a>
        `
        contenedorCard.appendChild(card)
    

    }
    

function mostarEvento2(){
    const dia=document.querySelector('#id28')
    dia.addEventListener("click",llamarEvento2)
}

function llamarEvento2(){

        const contenedorCard=document.querySelector('.una')
        const card=document.createElement('p')

        card.innerHTML=`
        <div class="card" >
        <img class="card-img-top" src="img/eventoDuoBajoPiano.jpg">
        <div class="card-body">
          <h2 class="card-title"style="font-weight:bold;" >evento Duo Bajo Piano</h2>
          <p class="card-text">Cl. 9 #27 Auditorio Luis.A Calvo, Bucaramanga</p>
        </div>
        <ul class="list-group list-group-flush fondo">
          <li class="list-group-item">Sevicio :29 Marzo</li>
          <li class="list-group-item">0:00 m</li>
          <li class="list-group-item">"familia", "amigos", "solo"</li>
          <div class="card-body">
          <a href="#" class="card-link">Mas informacion</a>
        `
        contenedorCard.appendChild(card)
    

}

function mostarEvento3(){
    const dia=document.querySelector('#id24')
    dia.addEventListener("click",llamarEvento3)
}

function llamarEvento3(){

    const contenedorCard=document.querySelector('.una')
    const card=document.createElement('p')

    card.innerHTML=`
    <div class="card" >
    <img class="card-img-top" src="img/eventoRutaErmitaño.jpg">
    <div class="card-body">
      <h2 class="card-title"style="font-weight:bold;" >La ruta del Ermitaño</h2>
      <p class="card-text">Parque San Pio, Floridablanca</p>
    </div>
    <ul class="list-group list-group-flush fondo">
      <li class="list-group-item">Sevicio : 16 Abril</li>
      <li class="list-group-item">4:00 am</li>
      <li class="list-group-item">"familia", "amigos", "solo"</li>
      <div class="card-body">
      <a href="#" class="card-link">Mas informacion</a>
    `
    contenedorCard.appendChild(card)

}


function mostarEvento4(){
    const dia=document.querySelector('#id12')
    dia.addEventListener("click",llamarEvento4)
}

function llamarEvento4(){

    const contenedorCard=document.querySelector('.una')
    const card=document.createElement('p')

    card.innerHTML=`
    <div class="card" >
    <img class="card-img-top" src="img/eventoExpoStudy&Travel.jpg">
    <div class="card-body">
      <h2 class="card-title"style="font-weight:bold;" >Expo Study & Travel</h2>
      <p class="card-text">Cl. 47 #n 28-83 Sotomayor, Bucaramanga</p>
    </div>
    <ul class="list-group list-group-flush fondo">
      <li class="list-group-item">Sevicio : 23 Marzo</li>
      <li class="list-group-item">2:00 p.m - 7:00 p.m</li>
      <li class="list-group-item">"familia", "amigos", "solo"</li>
      <div class="card-body">
      <a href="#" class="card-link">Mas informacion</a>
    `
    contenedorCard.appendChild(card)

}

function mostarEvento5(){
    const dia=document.querySelector('#id20')
    dia.addEventListener("click",llamarEvento5)
}

function llamarEvento5(){

    const contenedorCard=document.querySelector('.una')
    const card=document.createElement('p')

    card.innerHTML=`
    <div class="card" >
    <img class="card-img-top" src="img/eventoTourAurora.jpg">
    <div class="card-body">
      <h2 class="card-title"style="font-weight:bold;" >Tour Aurora - Oh La´Ville</h2>
      <p class="card-text">Cra. 35 #48-56 Cabecera del Llano, Floridablanca</p>
    </div>
    <ul class="list-group list-group-flush fondo">
      <li class="list-group-item">Sevicio : 20 Mayo</li>
      <li class="list-group-item">5:30 p.m</li>
      <li class="list-group-item">"familia", "amigos", "solo"</li>
      <div class="card-body">
      <a href="#" class="card-link">Mas informacion</a>
    `
    
    contenedorCard.appendChild(card)

}

function mostarEvento6(){
    const dia=document.querySelector('#id15')
    dia.addEventListener("click",llamarEvento6)
}

function llamarEvento6(){

    const contenedorCard=document.querySelector('.una')
    const card=document.createElement('p')

    card.innerHTML=`
    <div class="card" >
    <img class="card-img-top" src="img/eventoManchasMariposa.jpg">
    <div class="card-body">
      <h2 class="card-title"style="font-weight:bold;" >Evento Manchas Mariposa</h2>
      <p class="card-text">Centro cultural de Bucaramanga, Bucaramanga</p>
    </div>
    <ul class="list-group list-group-flush fondo">
      <li class="list-group-item">Sevicio : 2 Abril</li>
      <li class="list-group-item">0:00 m</li>
      <li class="list-group-item">"familia", "amigos", "solo"</li>
      <div class="card-body">
      <a href="#" class="card-link">Mas informacion</a>
    `
    contenedorCard.appendChild(card)

}
//