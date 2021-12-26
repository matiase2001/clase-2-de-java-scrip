/*if(false){
    alert("el codigo se ejecuta")
    console.log("esta falso")
}

let horasExtras = true;
if(horasExtras){
    console.log("Este mes gano de mas ")
}

let unNumero = 5

// Con (unNumero == 5) comparamos si unNumero es igual a 5
if (unNumero == 5 ){
    console.log("vas a ver este mensaje");
}
// con (unNumero == 6) comparamos si unNUmero es igual a 6
if (unNumero == 6){
    console.log("no vas a ver este mensaje")
}


let unaLetra = "m"

// Con (unaLetra) comparamos si unaLetra es igual a "m"
if (unaLetra == "e" ){
    console.log("la Letra es m");
}

else{
    // La instruccion se interpreta cuando unaLetra no es "m"
    console.log("la letra NO es m")
}

let nombreUsuario = prompt("Ingresar nombre de usuario")
if (nombreUsuario == ""){
    alert("No ingresaste el nombre de usuario")
}
else{
    alert("Nombre de usuario ingresado " + nombreUsuario)
}

let precio = 100.5;
if (precio < 20){
    alert("El precio es menor que 20")
}
else if (precio < 50){
    alert("el precio es menor que 50")
}
else if (precio < 100){
    alert("El precio es menor que 100")
}
else {
    alert("El precio es mayor que 100")
}

// un semaforo

let luz =prompt("Que luz tiene el semaforo?") .toLocaleLowerCase()
console.log(luz)
if(luz == "verde"){
    console.log(" Podemos avanzar")
}
else if (luz == "amarilla"){
    console.log("Precaucion, esta por cambiar la luz")
}
else if (luz == "roja"){
    console.log ("No se puede avanzar")
}
else{
    console.log("el semaforo no anda")
}

let numero = Number(prompt("Ingrese un numero"))
if (numero%2 == 0){
    console.log("el numero es par")
}
else{
    console.log("el numero es impar")
}*/
/*
let num1 = Number(prompt("Ingrese el primer numero"))
let num2 = Number(prompt("ingrese el segundo numero"))
if (num1 > num2){

    alert("El numero " + num1 + " es mayor a " + num2)
}
else if (num2>num1){

    alert("El numero "+ num2 + " es mayor a " + num1)
}
else if (num1=num2){

    alert("Los dos numeros son iguales")
}
else{

    alert("Algunos de los datos ingresados es incorrecto")
}

let edad = Number(prompt("Ingrese su edad"))
if(edad <= 3){
    console.log("es un bebe")
}
else if (edad < 12 && edad >3){
    console.log("Es un niño")
}
else if (edad >12 && edad <= 18){
    console.log("Esta en la pubertad ")
}
else if (edad >= 19 && edad <=30){
    console.log ("Plena juventud")
}
else if (edad >= 31 && edad <=60){
    console.log ("Señor adulto")
}
else {
    console.log("a esa edad no se cuentan años")
}

let usuario = prompt("Ingrese usuario")
let contrasenia = prompt("Ingrese contraseña")
if (usuario != "" && contrasenia != ""){
    console.log(`${usuario}`)
}
else{
    console.log (" Ingrese usuario y contraseña")
}


//if anidado

let termica = prompt('hace calor o frio');
let grados;
if (termica == 'calor') {
    grados = Number(prompt('cuantos grados centigrados hace'));
    if (grados > 30) {
        console.log('hace calor');
    } else {
        console.log('esta pasable')
    }
} else if (termica == 'frio') {
    grados = Number(prompt('cuantos grados centigrados hace'));
    if (grados < 5 && grados > 0) {
        console.log('hace frio');
    } else {
        console.log('Esta invernal!')
    }
} else {
    console.log('Sos atermico!')
}*/

//Desafio
let numero = Number(prompt("Cuanto es 500 + 501"))
if (numero >= 1002){
    alert("Incorrecto la respuesta es 1001")
}
else if (numero <= 1000){
    alert("Incorrecto")
}
else if (numero == 1001){
    alert("CORRECTO")
}
else{
    alert("los datos ingresados son incorrectos")
}

//if anidado

let termica = prompt('hace calor o frio');
let grados;
if (termica == 'calor') {
    grados = Number(prompt('cuantos grados centigrados hace'));
    if (grados > 30) {
        console.log('hace calor');
    } else {
        console.log('esta pasable')
    }
} else if (termica == 'frio') {
    grados = Number(prompt('cuantos grados centigrados hace'));
    if (grados < 5 && grados > 0) {
        console.log('hace frio');
    } else {
        console.log('Esta invernal!')
    }
} else {
    console.log('Sos atermico!')
}

let eligueNumero = Number(prompt("Eligue un numero entre 10 a 50"));
if(eligueNumero > 10 && eligueNumero < 50){
    alert("Correcto has elegido el numero " + eligueNumero)
}
else{
    alert("los datos ingresados con incorrectos")
}
