// 1. array of object 
const products = [
    {name: 'laptop', price: 3200, brand:'lenovo', color:'silver'},
    {name: 'phone', price: 13200, brand:'mi', color:'blue'},
    {name: 'watch', price: 2000, brand:'casio', color:'black'},
    {name: 'sunglass', price: 400, brand:'ray', color:'black'},
    {name: 'camera', price: 9000, brand:'canon', color:'gray'}
]

// 1.map 
// item niya array korte .map use kora hoy than return kore  map diya loop kora hoy

const brands = products.map(product => product.brand);
// console.log(brands);
const prices = products.map(product => product.price);
// console.log(prices);


// 2.forEach
// jodi return kora na lage tahole loop korte forEach use kora hoy 

// products.forEach(product => console.log(product));
// products.forEach(product => console.log(product.color));


// 3 .filter
// .filter array return kore 
const cheap = products.filter(product => product.price <= 5000);
// console.log(cheap)
const specificName = products.filter(product => product.name.includes("n"));
// console.log(specificName)


// 4. .find 
const special = products.find(product => product.name.includes("n"));
console.log(special)