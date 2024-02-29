/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

+( function() {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
} )();


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