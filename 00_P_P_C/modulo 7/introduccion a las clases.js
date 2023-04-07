// para crear una funcion clase se debe tener la primera letra de la funcion en mayuscula
//* clase funcion
// function Auto(puertas, color, marca, año, ruedas){
//     //*propiedades
//     this.puertas = puertas;
//     this.color = color;
//     this.marca = marca;
//     this.año = año;
//     this.ruedas = ruedas;

//     //*metodos
//     this.informacion = function(){
//         return "Este es un " + this.marca + " de color " + this.color;
//     }
// }

// //*inicializar clase auto
// var miPrimerAuto = new Auto(2, "Rojo", "Ferrari", 2018, 4);
// console.log(Auto);
// console.log(miPrimerAuto);
// console.log(miPrimerAuto.puertas, miPrimerAuto.color, miPrimerAuto.marca, miPrimerAuto.ruedas, miPrimerAuto.año);

// //*metodos
// console.log(miPrimerAuto.informacion());

//! Expression de clase
class Auto{
    constructor(puertas, color, marca, año, ruedas){
    this.puertas = puertas;
    this.color = color;
    this.marca = marca;
    this.año = año;
    this.ruedas = ruedas;
    }

    informacion = function(){
            return "Este es un " + this.marca + " de color " + this.color;
        }
}

var miSegundoAuto = new Auto(4, "blanco", "fiat", 2015, 4);
console.log(miSegundoAuto);
console.log(miSegundoAuto.puertas, miSegundoAuto.color, miSegundoAuto.marca, miSegundoAuto.ruedas, miSegundoAuto.año);
console.log(miSegundoAuto);