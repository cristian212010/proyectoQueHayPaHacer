/* restaurantesDataBase y parquesDataBase 
imagen ,nombre ,ciudad ,tipoEntretenimiento ,edadMin ,edadMax, fecha ,horario  */


restaurantesDataBase.forEach((lugares) => {
    const opcion = document.createElement('option');
    opcion.value= lugares.nombre;
    opcion.textContent= lugares.nombre;
    document.querySelector('#nombre').appendChild(opcion)
});

for (let n = 0; n < 90; n++) {
    const option = document.createElement('option');
    option.textContent= n;
    option.value= n;
    document.querySelector('#edadMin').appendChild(option)
    
}
for (let n = 1; n < 91; n++) {
    const option = document.createElement('option');
    option.textContent= n;
    option.value= n;
    document.querySelector('#edadMax').appendChild(option)
}