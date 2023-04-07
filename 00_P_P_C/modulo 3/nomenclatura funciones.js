//! existen tre clases de nomenclaturas para las funciones
//*camelCase
//Este modo de nombrar implica la unión de dos o más palabras sin espacios entre ellas, pero diferenciadas por una letra mayúscula inicial a partir de la segunda palabra, por ejemplo: holaMundo / funcionEdadAños.
function miNombre(a="jonathan ", b="ivan ", c="rendon ", d="bermeo "){
    return a + b + c + d;
}

console.log(miNombre());
console.log(miNombre("cinthia ", "dayana ", "rendon ", "bermeo "));

//*pascalCase
//Es similar a camelCase pero la primera letra de la frase también se inicia con mayúscula, al igual que cada palabra. Se mantiene la práctica de no tener espacios entre palabras y cada palabra siempre empieza con su primera letra mayúscula. Por ejemplo: HolaMundo / FuncionEdadAños

function MisDosNombres(a,b){
    return a + b;
}
console.log(MisDosNombres("jonathan ", "ivan"));

//*snake_case
//La nomenclatura snake_case está definida de esta forma porque siempre la usamos sobre el piso. Las letras siempre serán minúsculas y las palabras estarán separadas por un guion bajo de esta forma: hola_mundo / funcion_edad_años

function mis_dos_apellidos(a,b){
    a = "rendon ", b = "bermeo";
    return a+b;
}

console.log(mis_dos_apellidos());