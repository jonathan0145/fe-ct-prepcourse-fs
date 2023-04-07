//* bracket notation
// var atuendos = {
//     manos: ['Guantes','Anillos'],
//     pies: ['Zapatos', 'Soquetes']
// };

// atuendos['piernas'] = ['Bermudas','Pantalones'];

// console.log(atuendos, "\n", atuendos.piernas, "\n", atuendos.piernas[0], "\n",atuendos.piernas[1]);
// console.log( "\n", "\n", "\n", "\n");

var comidas = {};
var diferenciaDeNotaciones = function (propUno, propDos){
    comidas.propUno = ['Frutas', 'Vegetales'];
    comidas['propDos'] = ['Hamburguesa','Papas Fritas'];
    comidas[propUno] = ['Hamburguesa','Papas Fritas'];
    comidas[propDos] = ['Hamburguesa','Papas Fritas'];
};

diferenciaDeNotaciones('saludable', 'noSaludable');
console.log(comidas);