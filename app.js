//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Juego del nùmero secreto';
let listaNumerosSorteados = [];
let numeroIntentos = 1;
let numeroMaximo = 10;
let numerosecreto = generarNumeroSecreto();



let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un nùmero del 1 al 10';

function intentodeUsuario(){
    alert('Click desde el boton');
    return;
}

function asignarTexto (elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function generarNumeroSecreto (){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    //console.log(listaNumerosSorteados);
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTexto('p','Ya se sortearon todos los nùmeros posibles');
    }else {
    if (listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
    }
}

function verificarIntento(){
    let numerousuario = parseInt(document.getElementById('valorUsuario').value);
    //console.log(numeroIntentos);
   
    if (numerousuario === numerosecreto){
        asignarTexto('p', `Acertaste el nùmero secreto en ${numeroIntentos} en ${(numeroIntentos == 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        limpiarCaja();
    } else {
        //usuario no acertò 

        if (numerousuario > numerosecreto){
            asignarTexto('p', 'El nùmero secreto es menor');
        }else{
            asignarTexto('p', 'El nùmero secreto es mayor');   
        }
        numeroIntentos ++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = ' ';
}

function condicionesIniciales(){
    asignarTexto('p', `Indica un nùmero del 1 al 1 ${numeroMaximo}`);
    asignarTexto('h1', 'Juego del nùmero secreto');
    numerosecreto = generarNumeroSecreto();
    numeroIntentos = 1;
    //document.getElementById('reiniciar').setAttribute(disabled);
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar numero aleatorio
    //Inicializar el numero de intentos
    condicionesIniciales();
    //deshabilitar el boton de juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}

condicionesIniciales();