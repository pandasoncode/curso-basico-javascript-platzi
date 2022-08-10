var nombre = "Fernando"
function imprimerNombre()
{
    // PUEDO IMPRIMER EL NOMBRE PORQUE ES GLOBAL
    console.log(nombre);

    // ESTA VARIABLE ES LOCAL
    // NO SE PUEDE ACCEDER A ELLA
    // DESDE FUERA DEL METODO
    var apellidos = "Carrillo Lopez"
}

function imprimerNombreCompleto()
{
    // DA ERROR PORQUE APELLIDO NO ESRA DEFINIDO
    console.log(nombre + apellido);
}