const convert = require('convert-units');

function convertDaysToMinutes(days) {
  const minutes = convert(days).from('d').to('min');
  console.log(`${days} dias equivalem a ${minutes} minutos.`);
}

function convertGigabytesToBytes(gigabytes) {
  const bytes = convert(gigabytes).from('GB').to('B');
  console.log(`${gigabytes} gigabytes equivalem a ${bytes} bytes.`);
}

const prompt = require('prompt-sync')();
const daysInput = parseFloat(prompt('Digite o número de dias para converter em minutos: '));
const gigabytesInput = parseFloat(prompt('Digite o número de gigabytes para converter em bytes: '));

if (!isNaN(daysInput) && daysInput > 0) {
  convertDaysToMinutes(daysInput);
} else {
  console.log('Por favor, insira um número válido de dias.');
}

if (!isNaN(gigabytesInput) && gigabytesInput > 0) {
  convertGigabytesToBytes(gigabytesInput);
} else {
  console.log('Por favor, insira um número válido de gigabytes.');
}
