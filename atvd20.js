const pessoas = [
  {nome: 'Messi', idade: 14 },
  {nome: 'Silas', idade: 6 },
  {nome: 'Alipio', idade: 7 },
  {nome: 'Paulo Ricardo', idade: 36 },
  {nome: 'Taynara', idade: 33 },
  {nome: 'Elenice', idade: 61 }
];

const pessoaMaior18 = pessoas.find((pessoa) => pessoa.idade > 18);

console.log(pessoaMaior18);