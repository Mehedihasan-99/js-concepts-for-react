//1. How to declare a variable using let and const
const fatherName = 'Kuddus';
let season = 'rainy';
season = 'winter';

// 2. conditions
// 6 basic conditions: >, <, ===, !==, <=, >=
// multiple conditions: &&, ||  
if(fatherName === 'kuddus' || season ==='rainy'){
    console.log('hi');
}
else if(fatherName === 'Kuddus'){
    console.log('hlw');
}
else{
    console.log('by');
}


// 3. array declare 
// index, length, push, pop 
const roll = [2, 4, 7, 12, 16];
roll[2] = 6;
roll.push = 19;
roll.pop


// 4. for loop
for(let i = 0; i < Number.length; i++){
    const number = roll[i];
    console.log(number);
}
// 5. function
function multiply(num1, num2){
    const result = num1 * num2
    return result ;
}

const result = multiply(12, 23);
console.log(result);

// 6. object 
// 3 ways access property by name 
const student = {
    name : "mehedi",
    age : 25,
    subject : [accounting, management, marketing ],
    address : {
        village: 'goshpara',
        post : 'sherpur',
        upozila : 'sherpur',
        district : 'bogura',
    }
}

// access property 
console.log(student.age);  //type --1
console.log(student['age']);  //type --2

const boyos = 'age';
console.log(student[boyos]);  //type --3