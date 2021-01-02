const anotherFunction = () => {
    for (var i = 0; i < 10; i++){
        setTimeout(() => {
            console.log(i);
        }, 1000);
    }
};

anotherFunction();

// -- CLOSURES MANEJO VALORES PRIVADOS O ASIGNACIÓN DE MÉTODOS
const anotherFunction = () => {
    for (let i = 0; i < 10; i++){
        setTimeout(() => {
            console.log(i);
        }, 1000);
    }
};

anotherFunction();
