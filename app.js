// const { argv } = require('process');
// const { demandOption, option } = require('yargs');
const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();

// console.log(process.argv);
// console.log(argv);
// console.log('base: yargs', argv.base);
// console.log(process.argv);

// const [,, argv3 = 'base=5'] = process.argv;
// const [, base = 5] = argv3.split('=');
// const base = 6;

crearArchivo(argv.base, argv.lista, argv.hasta)
    .then(nombreArchivo => console.log(nombreArchivo, 'Creado'))
    .catch(err => console.log(err));

