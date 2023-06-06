var miParrafo = document.getElementById("Parrafo")
miParrafo.innerText = "Esto lo cambie desde Javascript"
miParrafo.style.backgroundColor =  "blue"

//document.getElementById('miBoton').onclick = function(){
  //  var texto = document.getElementById('texto1').value
  //  alert("El texto escrito es " + texto)
//} 
document.getElementById('miBoton').onclick = function(){
   // var numero1 = document.getElementById('num1').value *1
   var numero1 = parseFloat (document.getElementById('num1').value);
   // var numero2 = document.getElementById('num2').value *1
   var numero2 = parseFloat(document.getElementById('num2').value);
    var suma = numero1 + numero2
    //alert("La suma es " + suma)
    document.getElementById('resultado').innerText = "La suma es" + " " + suma
}

document.getElementById('botonAgregar').onclick = function(){
   // alert("Click al boton agregar")
  document.getElementById('misInputs').innerHTML += "<label>Nuevo input</label><input type=\"text\" />"
}