const result = document.getElementById("dados").innerHTML.split("\n").map(x => Number(x));

console.log(result);

let maior = result[0];

for (let i = 1; i < result.length; i++) {
    if(result[i] > maior) {
        maior = result[i];
    }
}
console.log(maior);





