/*
function saludar(nombre){
    console.log('¡Hola,' + nombre + '!');
    console.log(`¡Hola ${nombre}!`);
    return;
}

function numerodoble(numero){
    let numeronuevo = numero*2;
    console.log(numeronuevo);
    return numeronuevo;
}

function promedio(n1, n2, n3){
    let prom = (n1 + n2 + n3)/3;
    console.log(prom);
    return prom;
}

//Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.

function IndiceMasaC(peso, estatura){
    let IMC = peso / estatura;
    console.log(IMC);
    return IMC;
}

//IndiceMasaC(60, 1.8);

//Crea una función que calcule el valor del factorial de un número pasado como parámetro.
function factorial(num){
    parseInt(num);
    let fact=1;
    for (let i=1; i <= num; i ++){
        fact = fact*i;
    }
    return fact;
}

//console.log(factorial(8));
//Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.

function tablaMultiplicar(numero){
    for (let i=1; i<=10; i++){
        console.log(i*numero);
    }
    return;
}
tablaMultiplicar(8);

*/
/*
let listagenerica = [];
let lenguagesProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Pyton'];

console.log(lenguagesProgramacion);

lenguagesProgramacion.push('Java');
lenguagesProgramacion.push('Ruby');
lenguagesProgramacion.push('GoLang');

console.log(lenguagesProgramacion);


function ordenInverso(list){
    for (let i=list.length-1; i>=0;i-=1){
        console.log(list[i]);

    }
    return;
}
ordenInverso(lenguagesProgramacion);
*/
let listaNumeros = [10,25,13,48,35,69]; 

function promedio(numeros){
    let prom = 0;
    for (let i=0; i < numeros.length; i++){
        prom += numeros[i];
        console.log(prom);
    }
    console.log(numeros.length);
    prom = prom/parseInt(numeros.length);
    return prom;
}

function MayorMenor(numeros){
    let espacio = 0;
    for (let i=0; i<numeros.length; i ++){
        for (let j=i+1; j<numeros.length; j++){
            if (numeros[i] > numeros [j]){
                espacio = numeros[j];
                numeros[j] = numeros [i];
                numeros [i] = espacio;
            }
        }
    }
    return (`El nùmero mas grande es: ${numeros[numeros.length-1]} y el mas pequeño es: ${numeros[0]}`);
}   

function PosicionenLista(elemento){
    return listaNumeros.indexOf(elemento);
}

console.log(PosicionenLista(100));