/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';


/*boton cambio de fuente */

let originalFont = true;

function toggleFont() {
    const body = document.querySelector('body');
    console.log(body.style.fontFamily)
    if (originalFont) {
        body.style.fontFamily = "Inter";
    } else {
        body.style.fontFamily = "OpenDislexic, sans-serif";
    }
    originalFont = !originalFont;
}

function onIniciar() {
    console.log("Hola Mundo");

    // 1º es conseguir todas las pestañas aka los botones
    // 2º conseguir todos los bloques de texto
    const botonesTab = document.querySelectorAll(".botonesTab__pestana");
    const bloquesTexto = document.querySelectorAll(".contenedorTexto__bloque");


    // 3º Sería añadir un eventListener de click a todos los botones
    botonesTab.forEach( (boton, i) => {

        boton.addEventListener("click", () => {
          console.log("Click en boton " + i);

          // RECORRER TODOS LOS BOTONES Y QUITAR CLASE ACTIVO
          // Le quitamos la clase activo al resto de botones
          botonesTab.forEach( (botonFE, j) => {
            botonFE.classList.remove("activo")
            bloquesTexto[j].classList.remove("activo")
          })

          // Y le ponemos activo al boton AL QUE LE HEMOS HECHO CLICK
          boton.classList.add("activo");
          bloquesTexto[i].classList.add("activo")
        })
    })

}


window.onload = onIniciar();