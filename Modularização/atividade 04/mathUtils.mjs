export function soma(a, b) {
  return a + b;
}

export function subtracao(a, b) {
  return a - b;
}

export function multiplicacao(a, b) {
  return a * b;
}

export function divisao(a, b) {
  if (b === 0) {
      throw new Error('Divisão por zero não permitida');
  }
  return a / b;
}

export function exponenciacao(base, expoente) {
  return Math.pow(base, expoente);
}
