const Prompt = require('prompt-sync')
const prompt = Prompt()

function imprimirPrimeiroUltimoNome() {

  let nomeCompleto = prompt("insira seu nome completo:");
  
  let partesDoNome = nomeCompleto.split(' ');

  let primeiroNome = partesDoNome[0];
  let ultimoNome = partesDoNome[partesDoNome.length - 1];

  console.log("Primeiro nome: " + primeiroNome);
  console.log("Último nome: " + ultimoNome);
}

imprimirPrimeiroUltimoNome();
