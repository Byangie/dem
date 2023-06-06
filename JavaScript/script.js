//Variables
var miVariable = "miTexto"
var miEntero = 10
var miReal = 10.5

miVariable ="Esto cambio de valor "
//Sirve para imprimir mensajes en la consola
console.log(miVariable)
console.log(miEntero)
console.log(miReal)

// / $
// var primerNombre = "Angelica"
// var segundoNombre = "María"
// para concatenar 
//var nombreCompleto = primerNombre +  " " + segundoNombre
//alert(nombreCompleto)

//funciones

function combinarNombres (primerNombre, segundoNombre){
    return primerNombre  + " " + segundoNombre;
}

//Ejecuta función
var ValorDeLaFuncion = combinarNombres ("Cristian", "Eduardo")
console.log(ValorDeLaFuncion)
ValorDeLaFuncion = combinarNombres ("Ariatna", "Odeth")
console.log(ValorDeLaFuncion)

var suma = 10 + 5;
console.log("Valor de la suma", suma)
var restas = 10 - 5;
var multiplicacion = 10 * 5;
var divisiones = 10/5;
var potencias = Math.pow (10,2)
console.log(restas, multiplicacion, divisiones, potencias )

function sumarDosNumeros(numero1, numero2){
    return numero1 + numero2;
}
function restarNumeros(numero1, numero2){
    return numero1 - numero2;
}

function EsMayorDeEdad (edad){
    var esMayor = false
    if ( edad>= 18){
        esMayor = true
}
else {
    esMayor = false
}
return esMayor;
}

var esMayor = EsMayorDeEdad(18);
console.log(esMayor)
esMayor = EsMayorDeEdad(17);
console.log(esMayor)
//0907-23-14922
function estudiaIngenieria(carnet){
    var resultado = false
    if (carnet.indexOf("0907") > -1 ){
    resultado = true 
}

else {
    resultado = false
}
 return resultado
}

var pruebaIngeniero = estudiaIngenieria("0907-23-3799");
console.log("Prueba con 0907-23-3799", pruebaIngeniero)
pruebaIngeniero = estudiaIngenieria("0981-23-20333")
console.log("Prueba con 0981-23-20333", pruebaIngeniero)

function EsMayorDeEdadYTieneOjosVerdes(edad, ColorDeOjos){
    var resultado = false
    if (edad > 18 && ColorDeOjos == "Verdes"){
        resultado = true
    
    }
    else{
        resultado = false
    }
    return resultado;
}
var pruebaEsMayorYOjos = EsMayorDeEdadYTieneOjosVerdes(19,"Azules")
console.log("Prueba de azules y 19", pruebaEsMayorYOjos)
pruebaEsMayorYOjos = EsMayorDeEdadYTieneOjosVerdes (17, "Verdes")
console.log("Prueba de verdes y 17", pruebaEsMayorYOjos)
pruebaEsMayorYOjos = EsMayorDeEdadYTieneOjosVerdes (18, "Verdes")
console.log("Prueba de verdes y 18", pruebaEsMayorYOjos)