//1. Declarar constantes//
const edadMins=document.querySelector('#edadMin')
const edadMaxs=document.querySelector('#edadMax')
const lugares=document.querySelector('#lugar')
const tipoEntretenimientos=document.querySelector('#tipoEntretenimiento')
const ciudades=document.querySelector('#ciudad')
const contenedores=document.querySelector('#tarjetas')

//2.Insertar edades en los input//
    for(let i=1; i<91;i++){
        const option=document.createElement('option')
        option.value=i
        option.textContent=i
        edadMaxs.appendChild(option)
    }

    for(let i=1; i<91;i++){
        const option=document.createElement('option')
        option.value=i
        option.textContent=i
        edadMins.appendChild(option)
    }
//3.Condicion DOM//
    document.addEventListener('DOMContentLoaded',()=>{
        showDataBase(dataBase)
        selectData()
        eliminarUno()
    })
//4. Funcion inyectar datos html//

function showDataBase(dataBase){
    eliminar()
    dataBase.forEach((data)=>{
        const dataHtml=document.createElement('p')
        dataHtml.classList="target"
        const {imagen,nombre,ciudad,direccion,tipoEntretenimiento,fecha,horario,id}=data
        dataHtml.innerHTML=`
        <div class="card" >
        <img class="card-img-top" src="img/${imagen}">
        <div class="card-body">
          <h2 class="card-title"style="font-weight:bold;" >${nombre}</h2>
          <p class="card-text">${direccion}, ${ciudad}</p>
        </div>
        <ul class="list-group list-group-flush fondoUl">
          <li class="list-group-item">Sevicio : ${fecha}</li>
          <li class="list-group-item">${horario}</li>
          <li class="list-group-item">${tipoEntretenimiento}</li>
          <div class="card-body">
          <a href="#" class="card-link">Mas informacion</a>
          <button class="btn btn-success btn-lg boton" imagen="${imagen}" nombre="${nombre}" ciudad="${ciudad}" direccion="${direccion}" horario="${horario}" id=${id}>Añadir Favoritos</button>
        
        
        `
        contenedores.appendChild(dataHtml)
    })

}




//5 parametros para la busqueda//
const parametros={
    ciudad : "",
    tipoEntretenimiento : "",
    edadMin : "",
    edadMax : "",
    tipo:"",
}


//7. Event listenet//
ciudades.addEventListener("input",e=>{
    parametros.ciudad=e.target.value;
    filtrarDataBase();
    console.log(parametros);

})
tipoEntretenimientos.addEventListener("input",e=>{
    parametros.tipoEntretenimiento=e.target.value;
    filtrarDataBase();

    console.log(parametros);
})
edadMins.addEventListener("input",e=>{
    parametros.edadMin= parseInt( e.target.value);
    filtrarDataBase();

    console.log(parametros);
})
edadMaxs.addEventListener("input",e=>{
    parametros.edadMax= parseInt(e.target.value);
    filtrarDataBase();

    console.log(parametros);
})
lugares.addEventListener("input",e=>{
    parametros.tipo= (e.target.value);
    filtrarDataBase();

    console.log(parametros);
})


    //8. Llamado funcion de alto nivel (filter)//

//Parque//

function filtrarDataBase(){
    const resultado = dataBase
    .filter(filtrarCiudad)
    .filter(filtrarEdad)
    .filter(filtrarEdadMax)
    .filter(filtrarLugar)
    .filter(filtrarTipoEntretenimiento) 
 

    showDataBase(resultado);
    console.log(resultado);
}

    //8.2 //


    //Parque//
function filtrarCiudad(data){
    if(parametros.ciudad){
        return data.ciudad === parametros.ciudad;
    }
    return data;
}

function filtrarEdad(data){
    if(parametros.edadMin){
        return data.edadMin<=parametros.edadMin
    }
    return data;
}
function filtrarEdadMax(data){
    if(parametros.edadMax){
        return data.edadMax>=parametros.edadMax
    }
    return data;
}

function filtrarLugar(data){
    if(parametros.tipo){
        return data.tipo===parametros.tipo
    }
    return data;
}

function filtrarTipoEntretenimiento(data){
    if(parametros.tipoEntretenimiento){
        if(data.tipoEntretenimiento.includes(parametros.tipoEntretenimiento)){
            return data;

        }
        else{
            return data.tipoEntretenimiento==parametros.tipoEntretenimiento
        }
    }
    return data;
}



//Eliminar//

function eliminar(){
    let m=document.querySelectorAll('p')
    for (let i=0; i<m.length;i++){
        m[i].remove()
    }
} 


//Modal//

function selectData(){
    const boton=document.querySelector('.tarjetas')
    boton.addEventListener("click",mostrarSelect)
}

const arrayData=[]


function mostrarSelect(e){
    const imagen=e.target.getAttribute('imagen')
    const nombre=e.target.getAttribute('nombre')
    const horario=e.target.getAttribute('horario')
    const direccion=e.target.getAttribute('direccion')
    const ciudad=e.target.getAttribute('ciudad')
    arrayData.push({imagen,nombre,horario,direccion,ciudad})
    const modal=document.querySelector('.tbody')
    const td=document.createElement('tr')
    const id=e.target.getAttribute('id')
    td.id=`id${id}`


    if(horario===null){

    }
    else{
     arrayData.forEach((element)=>{
         td.innerHTML=`
        <td>
            <img src="img/${element.imagen}"" width="300px">
        </td>
    
        <td>
            <p>${element.nombre}</p>
        </td>
    
        <td>
            <p>${element.direccion} ${element.ciudad}</p>
        </td>
        
        <td>
            <p>${element.horario}</p>
        </td>
        <td>
            <button id="id${id}"class="btn btn-danger">X</button>
        </td>
    
        
        `
        modal.appendChild(td)
     

     })
     console.log(arrayData);

    }
}
const eliminarAll=document.querySelector('.borrarTodo')
eliminarAll.addEventListener("click",borrar)

function borrar(){
    let i = document.querySelectorAll('td');
    for (let n = 0 ; n < i.length ; n++){
        i[n].remove();
    }
}   

function eliminarUno(){
    const eliminar=document.querySelector(".tbody")
    eliminar.addEventListener("click",vaciar)

function vaciar(e){
    const borrar=e.target.getAttribute("id")
    const data=document.querySelector(`#${borrar}`)
    data.remove()
}
    
}



