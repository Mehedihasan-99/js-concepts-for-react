// array destructuring 
const numbers = [43, 44];

const student = {
    name : "mehedi",
    age : 25,
    subject : ['accounting', 'management', 'marketing' ],
    address : {
        village: 'goshpara',
        post : 'sherpur',
        upozila : 'sherpur',
        district : 'bogura',
    }
}





const c = numbers[0]
const d = numbers[1]
// console.log(c, d);
 const [g, h] = [43, 44];
 const [a, b] = numbers;
//  console.log(g, h);




 function addArray (k, l) {
    const result = [k, l];
    return result;
 }

 const [o, p] = addArray(44, 66);
//  console.log(o)




// object destructuring
const {name, age, address, subject} = student
const {district, upozila, post, village} = student.address;

const [x, , w] = student.subject;
// console.log(subject)