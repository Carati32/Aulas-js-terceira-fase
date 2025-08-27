const soma = require('./utils/soma');
const sub = require('./utils/subtracao');
const mult = require('./utils/multiplicacao');
console.log("Olá, mundo do Node!");

const chalk = require('chalk');
console.log(chalk.green('Servidor iniciado com sucesso!'));

console.log("Resultado da soma:", soma(5, 7));

// const a = Number(process.argv[2]);
// const b = Number(process.argv[3]);
const a = 10;
const b = 4;

console.log("Soma:", soma(a, b));
console.log("Subtração:", sub(a, b));
console.log("Multiplicação:", mult(a, b));
