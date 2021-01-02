var hello = 'Hello';    // -- ASIGNADA DE FORMA GLOBAL
let world = 'Hello World';
const helloWorld = 'Hello World';

const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

anotherFunction();


// -- MALA PRÁCTICA
const helloWorld = () => {
    globalVar = 'Soy global';
}

helloWorld();
console.log(globalVar);

const anotherFunction = () => {
    var localVar = globalVar = 'Soy global';
}

anotherFunction();
console.log(globalVar);

