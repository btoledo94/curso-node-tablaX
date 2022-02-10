const fs = require('fs');
const colors = require('colors');
// import * as fs from 'fs';

const crearArchivo = async(base = 5, listar = false, hasta = 10) =>{
    
    try {
        
        let salida = '';
        let consola = '';
        for(let i=1; i<=hasta; i++){
            salida  += `${base} x ${i} = ${base*i}\n`;
            consola += `${base} ${'x'.green} ${i} ${'='.yellow} ${base*i}\n`;
        }
        if(listar) {
            console.log('================'.red);
            console.log(colors.rainbow('Tabla de'), colors.blue(base));
            console.log('================'.red);
            console.log(consola)
        };

        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
        return `tabla-${base}.txt`;
    } catch (error) {
        throw error
    }
    

    // console.log(salida);

    
    // console.log(`tabla-${base}.txt Creado`);

    // fs.writeFile(`tabla-${base}.txt`,salida, (err) =>{
    //     if (err) throw err;

    //     console.log(`tabla-${base}.txt Creado`);
    // });
}

module.exports = {
    crearArchivo
}