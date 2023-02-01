
window.addEventListener('load', () => {
    /* Busco los botones y el display */
    const buttons = document.getElementsByClassName('button'); /* no usar querySelector porque devuelve un NodeList en vez de un HTML Collection */

    const display = document.querySelector('.display'); 

    /* Convierto la HTMLCollection a Array para poder iterar */
    const buttonsArray = Array.from(buttons);
    
    /* evento de click a cada boton */
    buttonsArray.forEach( (button) => {

        button.addEventListener('click', () => {
            /* Llamo a una funcion cada vez que ocurra un click */
            calculadora(button, display);
        });

    });
});

function calculadora(button, display) {
    /* funcion que decide que hacer */
    switch (button.innerHTML) {
        case 'C':
            borrarTodo(display);
            break;

        case '=':
            calcular(display);
            break;

        case '&larr;':
            borrar(display);
            break;
    
        default:
            actualizar(display, button);
            break;
    }

}

function calcular(display) {
    debugger
    display.innerHTML = eval(display.innerHTML);
}

function actualizar(display, button) {
    
    if(display.innerHTML == 0){
        display.innerHTML = '';
    }

    display.innerHTML += button.innerHTML;
}

function borrarTodo(display) {
    if(display.innerHTML != 0) {
        display.innerHTML = 0;
    };
}

function borrar(display) {
    if(display.innerHTML != 0) {
        display.innerHTML = 0;
    };
}