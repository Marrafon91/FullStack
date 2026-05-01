function dizerOla() {
    console.log("Ola amigos")
}

function dizerBomDia(nome) {
    console.log("Bom dia " + nome);
}

setTimeout(() => {
    dizerBomDia("Maria");
    setTimeout(() => {
        dizerBomDia("Ana");
        setTimeout(() => {
            dizerBomDia("Guilherme")
        },2000)
    },2000)
},2000)



console.log("A")
console.log("B")