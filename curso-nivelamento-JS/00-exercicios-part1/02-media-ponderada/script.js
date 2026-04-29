const num1 = Number(prompt("Digite a nota 1:")) * 2;
const num2 = Number(prompt("Digite a nota 2:")) * 3;
const num3 = Number(prompt("Digite a nota 3:")) * 5;

const peso = (num1 + num2 + num3) / 10;
alert("A média ponderada é: " + peso.toFixed(1));
