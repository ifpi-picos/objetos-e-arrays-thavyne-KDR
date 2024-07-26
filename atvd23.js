const Prompt = require('prompt-sync')
const prompt = Prompt()

function imprimirPrimeiroNome() {
  let nomeCompleto = prompt("insira seu nome completo:");
  let indiceEspaço = nomeCompleto.indexOf(' ');
  let primeiroNome = nomeCompleto.substring(0, indiceEspaço);
    console.log(primeiroNome);
};

imprimirPrimeiroNome();