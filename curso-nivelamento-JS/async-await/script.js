const cep = "01001000";

const fetchResult = fetch(`https://viacep.com.br/ws/${cep}/json/`);

async function cepResponse(url) {
    const response = await fetch(url);
    const jsonBody = await response.json();
    return jsonBody;
}

// console.log(cepResponse(`https://viacep.com.br/ws/${cep}/json/`)
// .then(response => {
//     console.log("RESPONSE ", response);
// }));

async function showCepData(cep) {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const json = await cepResponse(url);
    console.log("JSON SUCESS ", json);
}

showCepData(cep);
console.log("A");
console.log("B");