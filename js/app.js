//aca esta creando las variables que van a contener
var prev = document.getElementById('prev');//esta llamando una variable prev que es la parte de la imagenes
var next = document.getElementById('next');//
var thumbnail = document.getElementsByClassName("thumbnail");
var hero = document.getElementById('hero');//

var backgroundImg = new Array(//array:almacena el contenido dentro de una matriz
    "../img/bg1.png",
    "../img/bg2.png",
    "../img/bg3.png",
    "../img/bg4.png",
    "../img/bg5.png",
);

let i = 0;//aqui estoy indiacndo que el indice sea iagual a cero, o sea que comience en cero en adelante

next.onclick = function() {//aqui le estoy colocando la funcion next.onclick
    if (i < 4) {//si el indice es menor a 4 llama al hero (que contiene la imagen principal)
        
        hero.style.backgroundImage = 'url("' + backgroundImg[i + 1] + '")';//que la variable hero 
        //Técnica muy utilizada cuando queremos cargar una gran cantidad de imágenes dentro de una página.
        thumbnail[i + 1].classList.add("active");//el thumbnail es la clase de la imagen.. que la siguinete imagen es la que se activa
        thumbnail[i].classList.remove("active");//lo esta removiendo
        i++;//que el indice se vaya aumentando, que a lahora de que el indice se vaya aumentado a la dercha muestre lo que viene a la derecha.QUE SE vay autoimplementado todo a la derecha
    }
}
prev.onclick = function() {
    if (i > 0) {
        hero.style.backgroundImage = 'url("' + backgroundImg[i - 1] + '")';//
        thumbnail[i - 1].classList.add("active");
        thumbnail[i].classList.remove("active");
        i--;
    }
}