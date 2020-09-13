
const obtenerPokemon = require("./library");

// Codigo funcion callback

function callback(datosPokemon) {
    console.log("Nombre: " + datosPokemon.forms[0].name);

    console.log("Habilidades: ");
    
    datosPokemon.abilities.forEach
    (ability => console.log(ability.ability.name));
}


// Fin codigo

// Usar la funcion obtenerPokemon(pokemon,funcionCallback) en donde:
// - nombrePokemon es un string con el nombre del pokemon
// - funcionCallback es una función que recibe el objeto con los datos del pokemon extraido

obtenerPokemon("raticate", callback);
