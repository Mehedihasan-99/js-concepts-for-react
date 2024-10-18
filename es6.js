const numbers = [2, 4, 7, 12, 16];

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

// bactick sign =  `` 



// 1. Template String
const about = `My Name is ${student.name} age of ${student.age} has number ${numbers[4]} subject is ${student.subject[0]} district is ${student.address.district}`


// 2. arrow function 

// single line function no need return 
// without peramiter
const getFiftyFive = () => 55;

// single petamiter 
const addSixtyFive = (num) => num + 65 ;
const isEven = (x) => x % 2 == 0;

// multiple peramiter 
const addNum1 =(a, b) => a + b;
const addNum2 =(a, b, c) => a + b + c;


// multi-line function with return call 
const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}


// 3. spread operator 

// array 
const newNumbers = [...numbers];
const currentNumbers = [...numbers, 55, 32];
numbers.push(65);

// object 
const student2 = {...student, class:8}