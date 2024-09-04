const math = require('mathjs');
const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function calculateLogarithm(number, base = 10) {
    return math.log(number, base);
}


rl.question('Digite um número para calcular o logaritmo: ', (inputNumber) => {
    const number = parseFloat(inputNumber);

    if (isNaN(number) || number <= 0) {
        console.log('Por favor, insira um número válido maior que 0.');
        rl.close();
        return;
    }

    rl.question('Digite a base do logaritmo (default é 10): ', (inputBase) => {
        const base = inputBase ? parseFloat(inputBase) : 10;

        if (isNaN(base) || base <= 0) {
            console.log('Base inválida. Usando base 10.');
        }

        try {
            const result = calculateLogarithm(number, base);
            console.log(`O logaritmo de ${number} na base ${base} é ${result}`);
        } catch (error) {
            console.error('Erro ao calcular o logaritmo:', error);
        }

        rl.close();
    });
});