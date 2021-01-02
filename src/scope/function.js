const fruits = () => {
    var fruit = 'apple';
    console.log(fruit);
};

fruits();
console.log(fruit); // -- NOT DEFINED

const anotherFunction = () => {
    var x = 1;
    var x = 2;
    let y = 1;
    console.log(x);
    console.log(y);
}

anotherFunction();

