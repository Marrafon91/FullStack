const str = "   Maria Silva   ";
const resultado = str.trim();
console.log(`${resultado}`)

console.log(`toLowerCase: ${str.toLowerCase()}`)
console.log(`toUpperCase: ${str.toUpperCase()}`)
console.log(`toUpperCase: ${str.charAt(3)}`)
console.log(`toUpperCase: ${str.replace("i", "$")}`)
console.log(`toUpperCase: ${str.replaceAll("i", "$")}`)
console.log(`toUpperCase: ${str.length}`)
console.log(`toUpperCase: ${str.indexOf("i")}`)
console.log(`toUpperCase: ${str.lastIndexOf("i")}`)
console.log(`toUpperCase: ${str.substring(3, 8)}`)

const data = "29/04/2026";

const mes = Number(data.substring(3, 5));
console.log(mes);

const valor = 200.99;
console.log(valor)

const novoValor = valor.toString().replace(".", ",");
console.log(novoValor)

console.log(`trim: ${str.trim()}`)