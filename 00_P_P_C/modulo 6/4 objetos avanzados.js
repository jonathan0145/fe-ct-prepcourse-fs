// console.log(Object());

// var libro = {
//     autor: 'Borges',
//     genero: 'Policial',
//     año: 1990
// }

// console.log(libro);

// var tienePropiedad = libro.hasOwnProperty('autor');
// console.log(tienePropiedad);

// var tieneTodasLasPropiedades = Object.keys(libro);
// console.log(tieneTodasLasPropiedades);

//* for-in-loop
// var mundo = {
//     continentes: 7, 
//     paises: 195,
//     oceanos: 5
// }

// for (var prop in mundo) {
//     console.log("Esta es la propiedad: " + prop);

//     console.log("Este es el valor: " + mundo[prop]);
// }

//*this
var mascota = {
    animal: 'Perro',
    raza: 'Ovejero Alemán',
    amistoso: true,
    dueño: 'María López',
    info: function(){
        console.log(this.raza);
        console.log('Mi perro es un ' + this.raza);
    },
};

mascota.info();
