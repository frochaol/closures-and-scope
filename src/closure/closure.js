var saveCoins = 0;
const moneyBox = (coins) => {   
    saveCoins += coins;
    console.log(`MoneyBox: ${saveCoins}`);
};

moneyBox(5);
moneyBox(10);

// -- Estructura de closure

const moneyBox = () => {
    var saveCoins = 0;
    const countCoins = (coins) => {
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
};

let myMoneyBox = moneyBox();
myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(10);


