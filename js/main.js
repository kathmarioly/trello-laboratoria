var container = document.getElementById("boxdos");
var textArea = document.createElement("textarea");
textArea.setAttribute("placeholder" , "Agrega texto aquí");
textArea.classList.add("text");
container.appendChild(textArea);
//el valor de mi textArea
function agregar(){
	textArea.value;

var text = textArea.value;
var contienelista = document.getElementById("box");
var listado = document.createElement("p");
var lista = document.createTextNode(text);
listado.appendChild(lista);
contienelista.appendChild(listado);
}

var arreglo = [];



