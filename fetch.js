// // 1. JSON 
// const student = {
//     name: 'mehedi',
//     age: 25,
//     subject: ['accounting', 'management', 'marketing']
// }

// const studentJSON = JSON.stringify(student);

// const studentParse = JSON.parse(studentJSON)
// // console.log(student);
// // console.log(studentJSON);
// // console.log(studentParse);


// 2. fetch: 
// fetch('url')
// .then((res) => res.json())
// .then((data) => console.log(data))


// 3. keys , values 
// const keys = Object.keys(student);
// const values = Object.values(student);

// 4. for 
const numbers = [33, 53, 64, 34, 42, 41];
// numbers.forEach(num => console.log(num));
// numbers.map(num => num * 2); 


// 5. for of on array like object 
// 5.loop object on for in 


// add or remove form an array
const products = [
    {name: 'laptop', price: 3200, brand:'lenovo', color:'silver'},
    {name: 'phone', price: 13200, brand:'mi', color:'blue'},
    {name: 'watch', price: 2000, brand:'casio', color:'black'},
    {name: 'sunglass', price: 400, brand:'ray', color:'black'},
    {name: 'camera', price: 9000, brand:'canon', color:'gray'}
];
const newProduct = {name: 'watch', price: 19000, brand:'apple', color:'gray'};

// copy products array then add newProduct 
const newProducts = [...products, newProduct]


// console.log(newProducts)


// 6. create a new array 
// remove item 
const remaining = products.filter(p => p.name !== 'phone')

console.log(remaining)