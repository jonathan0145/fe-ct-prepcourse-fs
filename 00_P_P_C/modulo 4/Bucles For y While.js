// var suma =0;
//* for
// for (let i = 0; i < 5; i++) {
//     suma = suma + i;
//     console.log('Variable de iteración: ', i);
//  }
//  console.log('Variable suma: ', suma);
 //*while
// while(suma < 3) {
//     suma = suma + 1;
//         console.log(suma);
// };

//*switch

// var key = 0;

// switch (key) {
//     case 1: console.log("el numero es " + 1);
//     break;

//     case 2: console.log("el numero es " + 2);
//     break;

//     case 3: console.log("el numero es " + 3);
//     break;

//     default: console.log(false);
//         break;
// }

//* si olvidamos un break
// var key = 4;

// switch (key) {
//     case 1: console.log("el numero es " + 1);
//     break;

//     case 2: console.log("el numero es " + 2);
//     break;

//     case 3: console.log("el numero es " + 3);
//     break;

//     case 4: console.log("el numero es " + 4);

//     case 5: console.log("el numero es " + 5);
//     break;

//     default: console.log(false);
//         break;
// }

//* default entre condiciones

// var foo = 5;
// switch (foo) {
//     case 2:
//       console.log(2);
//       break; // al encontrar este 'break' no se continuará con el siguiente 'default:'
//     default:
//       console.log('default')
//       // fall-through
//     case 1:
//       console.log('1');
//   }

//* multiples casos
// var Animal = 'Vaca';
// switch (Animal) {
//   case 'Vaca':
//   case 'Jirafa':
//   case 'Perro':
//   case 'Cerdo':
//     console.log('Este animal subirá al Arca de Noé.');
//     break;
//   case 'Dinosaurio':
//   default:
//     console.log('Este animal no lo hará.');
// }

//*Operaciones encadenadas con multiples casos
// var foo = 10;
// var output = 'Salida: ';
// switch (foo) {
//   case 10:
//     output += '¿Y ';
//   case 1:
//     output += 'Cuál ';
//     output += 'Es ';
//   case 2:
//     output += 'Tu ';
//   case 3:
//     output += 'Nombre';
//   case 4:
//     output += '?';
//     console.log(output);
//     break;
//   case 5:
//     output += '!';
//     console.log(output);
//     break;
//   default:
//     console.log('Por favor, selecciona un valor del 1 al 6.');
// }

//* do while
// var i = 10;
// do {
//     console.log(i);
//     i--;
// } while (i > 0);

//* continue
// i = 0;
// while (i < 5) {
//     if (i == 3)
//       continue;
//     console.log(i++);
// }

// for (let index = 0; index < 5; index++) {
//     if (index == 3)
//     continue;
//     console.log(index);
// }

//* break
var i = 0;
while (i<6) {
    if (i == 3) break;
    console.log(i++);
}