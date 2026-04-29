
// Como pegar um elemento por ID

const elem = document.getElementById("dados");
console.log(elem);

// Como pegar o conteudo dentro de um elemento HTML

const conteudo = elem.innerHTML;
console.log(conteudo);

// Como recortar um string em base um separador

const result = conteudo.split("\n");
console.log(result);

const nome = "Maria Silva Costa";
const result1 = nome.split(" ");
console.log(result1);

// Como converter um array de Strings em um array de Numeros

const str = "4.5";
console.log(str);
const n  = Number(str);
console.log(n);

const numeros = result.map(x => Number(x));
console.log(numeros);

// Como mostrar um numero com arredondamento
console.log(numeros[0].toFixed(2));

const x = 3.456;
console.log(Number(x.toFixed(2)));
