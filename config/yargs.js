const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Comando que permite crear un nuevo elemento Por Hacer'
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'Comando que permite actualizar un estado de un elemento Por Hacer'
}

const argv = require('yargs')
    .command('crear', '-- Crea un elemento por hacer --', { descripcion })
    .command('actualizar', '-- Actualiza el estado completado de una tarea --', { descripcion, completado })
    .command('borrar', '-- Elimina un elemento por hacer -- ', { descripcion })
    .help()
    .argv;

module.exports = {
    argv
}