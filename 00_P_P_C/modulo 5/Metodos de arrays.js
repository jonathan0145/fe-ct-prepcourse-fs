// PUSH y UNSHIFT
// var colores = ['Amarillo', 'Azul'];
// colores.push('Rojo', "rosa");
// colores.unshift('Verde','gris');

// console.log(colores);

// POP y SHIFT
// colores.shift();
// colores.pop();

//*aumentar de 5 a 6 lo almacenado pero el nuevo valor estara despues del amarillo creado por jonathan rendon
// var newColores = [];
// for (let  i= 0; i < colores.length; i++) {
//     if(i<=2)newColores.push(colores[i]);
//     if(i===3)newColores.push("negro");
//     if(i>=3)newColores.push(colores[i]);
// }
// console.log(newColores);
// colores = newColores;
// console.log(colores);

//* INCLUDES
// var pintores = ['Picasso', 'Velázquez', 'Van Gogh', 'Dalí'];
// var existeDali = pintores.includes('Dalí'/*"jonathan"*/);
// console.log(existeDali);

//* EVERY
// var numeros = [7, 6, 8, 9, 43 ];
// const mayor5=( num ) => { num > 5 }
// var cumplenCondicion = numeros.every(mayor5);
// console.log(cumplenCondicion);

//* SPLIT
// var palabra = 'Henri';
// var palabraSeparada = palabra.split('');

// console.log(palabraSeparada);

//* JOIN
// var palabraArreglada = palabraSeparada.join('');
// console.log(palabraArreglada);

//* FOREACH
// var numeros = [ 1, 2, 3, 4, 6, 8, 9 ];
// numeros.forEach( (num) => { console.log(num+1) } );

//* MAP
var numeros = [ 1, 2, 3, 4 ];
var masUno = numeros.map( (num) => { return num + 1 } );

console.log(masUno);