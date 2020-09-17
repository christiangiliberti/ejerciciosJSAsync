
const obtenerPokemon = require("./library");

// Usar la funcion obtenerChiste(nombrePokemon) la cual recibe como string un nombre de pokemon y devuelve la promesa de traer el objeto pokemon extraido
obtenerPokemon("raticate").then(dPokemon => {
    console.log("Nombre: " + dPokemon.forms[0].name);
    console.log("Habilidades: ");
    dPokemon.abilities.forEach(h => console.log(h.ability.name));
});