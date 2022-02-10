const argv = require('yargs')
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de multiplicar'
    })
    .option('l',{
        alias: 'lista',
        type: 'boolean',        
        default: false,
        describe: 'Es para mostrar el listado'
    })
    .option('h',{
        alias: 'hasta',
        type: 'number',        
        default: 10,
        describe: 'Es el limite de cuantos numeros va multiplicar la tabla'
    })
    .check((argv, options)=>{
        if( isNaN(argv.b)){
            throw 'La base tiene que ser un numero'
        }
        return true;
    })
    .argv;

module.exports = argv;