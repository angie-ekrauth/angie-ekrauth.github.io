
let clicks = 0;
const links = document.querySelectorAll('a');
const textoBoton = document.getElementById('botonBio');
const numeroBoton = document.getElementById('botonNumCel');

/*función para contar la cantidad de veces que se tocó un link en la p.w. y muestra por consola*/
links.forEach(function(link) {
    link.addEventListener("click", function() {
        clicks++;
        console.log("Veces que se tocó un link: ", clicks);
    });
});

/*función para mostrar información al presionar el botón "¿quién soy?"*/
textoBoton.addEventListener("click", function(){
    textoBoton.innerHTML = "Bioingeniera en proceso, maker y autodidacta, con conocimientos en programación e impresión 3D.";
    console.log("Boton de bio presionado.");
} )

/*función para mostrar información al presionar el botón "Obtén mi número de celular presionand aquí"*/
numeroBoton.addEventListener("click", function(){
    numeroBoton.innerHTML = "+549 264596141";
    console.log("Boton de número de celular presionado.");
} )

/*función que muestra por consola si la página web se ha impreso o almacenado como archivo PDF*/
window.addEventListener("afterprint", (event) => {
    console.log("La página web ha sido impreso/guardado como PDF.");
});

  


