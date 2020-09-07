let opt = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

let argv = require('yargs')
    .command('listar', 'imprime en consola la tabla de multiplicar', { opt })
    .command('Crear', 'Crea en consola la tabla de multiplicar', { opt })
    .help()
    .argv;


module.exports = {
    argv
}