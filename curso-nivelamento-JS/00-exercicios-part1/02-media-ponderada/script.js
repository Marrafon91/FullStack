const num1 = Number(prompt("Digite a nota 1:")) * 2;
const num2 = Number(prompt("Digite a nota 2:")) * 3;
const num3 = Number(prompt("Digite a nota 3:")) * 5;

const peso = (num1 + num2 + num3) / 10;
alert("A média ponderada é: " + peso.toFixed(1));


//Solucao do professor
const dados = document.getElementById("dados").innerHTML.split('\n').map(x => Number(x));

const media = (dados[0] * 2 + dados[1] * 3 + dados[2] * 5) / 10;

console.log(media.toFixed(1));


