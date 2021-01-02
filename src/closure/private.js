const person = () => {
    var saveName = 'Fernando';
    return {
        getName: () => {
            return saveName;
        },
        setName: (name) => {
            saveName = name;
        },
    };
};

newPerson = person();
console.log(newPerson.getName());
newPerson.setName('Ga');
console.log(newPerson.getName());
