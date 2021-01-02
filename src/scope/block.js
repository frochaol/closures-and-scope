// -- let y const solo podrán ser asignados dentro del bloque como se muestra en el ejemplo anterior.
const fruits = () => {
    if (true) {
        var fruits1 = 'apple';
        const fruits2 = 'banana';
        let fruits3 = 'kiwi';
        console.log(fruits2);
        console.log(fruits3);
    }
    console.log(fruits1);
    
};
fruits();

// -- Ejemplo no reasigna variable x dentro de un bloque de código - Resultado 2 - 1
let x = 1;
{
    let x = 2;
    console.log(x);
}
console.log(x);
// -- Ejemplo reasigna variable global dentro del código - Resultado 2 - 2
var x = 1;
{
    var x = 2;
    console.log(x);
}
console.log(x);

// --
const anotherFunction = () => {
    for (var i = 0; i < 10; i++){
        setTimeout(() => {
            console.log(i);
        }, 1000);
    }
};

anotherFunction();