function soma(a, b) {
  return a + b;
}

function subtracao(a, b) {
  return a - b;
}

function multiplicacao(a, b) {
  return a * b;
}

function divisao(a, b) {
  if (b === 0) {
      throw new Error('Divisão por zero não permitida');
  }
  return a / b;
}

function exponenciacao(base, expoente) {
  return Math.pow(base, expoente);
}

module.exports = {
  soma,
  subtracao,
  multiplicacao,
  divisao,
  exponenciacao
};
