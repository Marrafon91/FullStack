import { sum, exp, round }  from './numbers.js'
import Product from './product.js';

console.log(sum(3, 4));
console.log(exp(3,4));
console.log(round(3.321331,2));

const p1 = new Product("Computador", 800.0, 10);
const p2 = new Product("Mouse", 50.0, 4);


console.log(p1);
console.log(p2);