const dados = document.getElementById("dados").innerHTML;

const resultado = Number(dados);

for (let i = 1;i <= 10; i++) {
    const tabuada = i * resultado;
    console.log(`${resultado} X ${i} = ${tabuada}`);
}