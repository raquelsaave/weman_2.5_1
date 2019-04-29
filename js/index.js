//Esta variable guarda una referencia al control de resultado, se declara global para no tener que estar ejecutando 
//document.getElementById en cada ocasión que se necesite
let ctrlMostrado = document.getElementById('salida');
let ctrlNumero = document.getElementById('habitacion');
let ctrlNombre = document.getElementById('nombre');

function dibujaTarjetas(arreglo) {
	let imprime = "<table id='registro'><tr><th>Habitación</th><th>Huesped</th></tr>";
	//La siguiente estructura de for es casi ya un arcaísmo. Sin embargo, los clásicos nunca mueren.
	for (let i = 0; i < arreglo.length; i++) {
	   imprime += "<tr><td>" + arreglo[i].numHabitacion + "</td><td>" + arreglo[i].nombreHuesped + "</td></tr>";
	   }
	imprime += "</table>"
	ctrlMostrado.innerHTML = imprime;
}

// PSEUDOCODIGO PARA ENCONTRAR MAXIMO DE UN ARREGLO 
// Creamos una funcion para crear el maximo 
// A la funcion vamos a ingresar el arreglo y el final de el arreglo(para saber cuando terminar)
// en la funcion aplicamos un ciclo para que empieze por la primera posicion y termine el 
// la ultima posicion del arreglo y me la compare con la siguiente
// para saber si este valor es mayor o menor que el que sigue 
// si lo es, me cambia el maximo por el nuevo numero, si no regresa el mismo maximo que ya se tenia
function findMax(arreglo, end){
	var max=0;
 	for(var i = 0; i<=end; i++){
        if (parseInt(arreglo[i].numHabitacion) > parseInt(arreglo[max].numHabitacion)){
        	max=i;
        }
    }
  return max;
}
//PSEUDOCODIGO PARA ORDENAR DE MENOR A MAYOR
// La funcion va a obtener la posicion en el arreglo de nuestro maximo y lo va a mover de posicion hasta el final
// hasta que todo este arreglado
// Vamos a hacer un ciclo que vaya desde el final del arreglo hasta la posicion 2 del arreglo(cuando ya todo este ordenado) 
// En el ciclo buscamos la posicion del valor maximo en el arreglo
// La posicion que encontremos la guardamos en una variable

function ordenaPorHabitacion(arreglo) {
	var temp;
  for(var end = arreglo.length-1; end>=0;end--){
    maxpos=findMax(arreglo,end);
    //console.log(maxpos);
    temp=arreglo[maxpos];
    arreglo[maxpos]=arreglo[end];
    arreglo[end]=temp;
  }
//return arreglo;
  dibujaTarjetas(arreglo);
}

	//En esta función escribe la función que ordenará el arreglo por habitación
function findMaxNombre(arreglo, end){
  var max=0;
 	for(var i = 0; i<=end; i++){
    if (arreglo[i].nombreHuesped > arreglo[max].nombreHuesped){
      max=i;
      }
    }
  return max;
}

function ordenaPorHuesped(arreglo) {
	//Acá puedes hacer la otra que ordene por el nombre del huesped
  var temp;
  for(var end = arreglo.length-1; end>=0;end--){
    maxpos=findMaxNombre(arreglo,end);
    //console.log(maxpos);
    temp=arreglo[maxpos];
    arreglo[maxpos]=arreglo[end];
    arreglo[end]=temp;
  }
  //return arreglo;
  //ctrlNombre.innerHTML = arreglo;
  dibujaTarjetas(arreglo);
}

