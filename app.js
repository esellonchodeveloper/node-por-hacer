const argv = require('./config/yargs').argv;
const colors = require('colors');
const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        console.log('-- Crear Por Hacer --');
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        console.log('-- Mostrar todas las tareas Por Hacer --');
        let listar = porHacer.getListado();
        for (const tarea of listar) {
            console.log('===== POR HACER ====='.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('====================='.green);
        }
        break;
    case 'actualizar':
        console.log('-- Actualizar una tarea Por Hacer --');
        let actualizado = porHacer.actualizarDB(argv.descripcion, argv.completado);
        console.log('¿Actualizado? ', actualizado);
        break;

    case 'borrar':
        console.log('-- Borrar una tarea Por Hacer --');
        let borrado = porHacer.borrarDB(argv.descripcion);
        console.log('¿Borrado? ', borrado);
        break;
    default:
        console.log('El comando ingresado no es reconocido');
}