const carros = [
  {nome:'Toyota corola', ano: 2016},
  {nome:'Honda civic type r', ano: 2022},
  {nome:'Chevrolet celta', ano: 2006}
];

const carrosPos2010 = carros.filter(carro => carro.ano > 2010);

console.log(carrosPos2010);
