// 1. Truthy value = 'mehedi', 25, true, {} , [] 
// 1.Falsy value= '', 0, false, null, undefined

// check truthy value 
let myVar = 5;
if(myVar){
    myVar = myVar * 2;
}
else{
    myVar = 0
}

// check falsy value 
let myMoney = 100;
if(!myMoney){
    myMoney = 0;
}
else{
    myMoney = myMoney;
}


// 2. Ternary operator
const money = 100; 
let food = money >= 100 ? 'beryani' : 'cha biscuit'
// console.log(food);

// 3. number to string conversion 
const num1 = 54;
// console.log(num1);
const numStr = num1 + '';
// console.log(numStr);

// 4. string to number conversion 
const input = '503';
console.log(input);
// const inputNumber = input - '';
// const inputNumber = + input;
const inputNumber = parseInt(input);

console.log(inputNumber)