const Prompt = require('prompt-sync')
const prompt = Prompt()

let filmes = []

for (let i = 1; i <= 5; i++) {
  let filme = prompt(`Digite o nome do filme ${i}:`);
  filmes.push(filme);
}

console.log(filmes);