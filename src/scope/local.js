const helloWorld = () => {
    const hello = 'Hello World';
    console.log(hello);
}

helloWorld();
console.log(hello);


var scope = 'Soy global';
const functionScope = () => {
    var scope = 'Soy solo una variable global';
    const func = () => {
        return scope
    }
    console.log(func());
};

functionScope();    // -- RETORNA SOY SOLO UNA VARIABLE GLOBAL
// -- Ámbito léxico, Esto indica que al usar una variable local asi tenga el mismo nombre que la variable global no la re-escribe
console.log(scope); // -- RETORNA 'SOY GLOBAL'