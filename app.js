let { tablas, listartablas } = require('./multiplicar/multiplicar');
let { argv } = require('./config/yargs')
let comando = argv._[0]
switch (comando) {
    case 'listar':
        listartablas(argv.base, argv.limite)
        break;
    case 'crear':
        tablas(argv.base, argv.limite)
            .then(archivo => {
                console.log(`El Archivo Creado : ${archivo}`);
            }).catch(err => {
                console.log(err);
            });
        break;
    default:
        break;
}