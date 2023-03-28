/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:

   const arrayOfArrays = [];
   for (const key in objeto) {

      arrayOfArrays.push([key, objeto[key]])
   }
   return arrayOfArrays;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   
   //! falta organizar las propiedades de manera alfabetica

   let objeto = {};
   
   let arreglo = string.split("").sort();

   arreglo = arreglo.join("");

   console.log(arreglo);

   for(let i = 0, cadena = arreglo.length; i<cadena; i++){


   
      objeto[arreglo.charAt(i)] = 0;

      for (let a = 0, existe = arreglo.length; a < existe; a++) {
         if(arreglo.charAt(i) === arreglo.charAt(a)){
            ++objeto[arreglo.charAt(i)];
         }
      }
   }

   return objeto;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   let mayusculas = "";
   let minuscula = "";

for (let i = 0, letra = string.length; i < letra; i++) {
   if (string.charAt(i).toUpperCase() == string.charAt(i)) {
      mayusculas += string.charAt(i);
   } else if (string.charAt(i).toLowerCase() == string.charAt(i)) {
      minuscula += string.charAt(i);
   } 

}

   return mayusculas + minuscula;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   let array = frase.split(" ");
   let newArray = [];
   let palabras_a_letra = [];
   let letra_a_palabras = [];
   let cadena = "";

   for (let i = 0, palabras = array.length; i < palabras; i++) {
      newArray.push(array[i], " ");
   }

   for (let i = 0; i < newArray.length; i++) {
      palabras_a_letra = Array.from(newArray[i]);
      letra_a_palabras.push (palabras_a_letra.reverse());
   }

   letra_a_palabras.pop();

   for (let i = 0; i < letra_a_palabras.length; i++) {
      cadena += letra_a_palabras[i].join("");
   }

   return cadena;
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   let convertirString  = "";
   convertirString += numero;

   let convertirArray = convertirString.split("");
   let alrevez = convertirArray.reverse();
   let arrayString = alrevez.join("");
   let numeros = parseInt(arrayString);

   if (numeros === numero) {
      return "Es capicua";
   } else if (numeros !== numero) {
      return "No es capicua";
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   let array = string.split("");
   let newArray = [];

   for(let i = 0, letra = array.length; i < letra; i++){
      newArray.push(array[i]);

      if (array[i] === 'a' || array[i] === 'b' || array[i] === 'c') {
         newArray.pop();
      }

   }

   return newArray.join("");
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   const newArray = [];
   const lengthA = [];
   

   for (let i = 0; i < arrayOfStrings.length; i++) {
      lengthA[i] = arrayOfStrings[i].length; 
   }

   for (let i = 0; i < arrayOfStrings.length; i++) {
      for (let a = 0; a < arrayOfStrings.length; a++) {
         if (i !== a  && lengthA[i] === lengthA[a]) {
            console.log(i, a);
            newArray.push(arrayOfStrings[i]);
         }
      }
      console.log(newArray);
   }

   // console.log(newArray);
   console.log(noRepit);
}

console.log( sortArray(['You', 'are', 'beautiful', 'looking', 'tre']));
console.log( sortArray(['pera', 'manzana', 'alcaucil', 'papa']));

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
