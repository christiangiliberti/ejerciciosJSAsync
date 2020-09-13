
const obtenerPokemon = require("./library");

// Usar la funcion obtenerChiste(nombrePokemon) la cual recibe como string un nombre de pokemon y devuelve la promesa de traer el objeto pokemon extraido
obtenerPokemon("raticate").then(datosPokemon => {
    console.log("Nombre: " + datosPokemon.forms[0].name);
    console.log("Habilidades: ");
    datosPokemon.abilities.forEach(ability => console.log(ability.ability.name));
});