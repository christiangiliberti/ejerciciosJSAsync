
const obtenerPersonaFake = require("./library");

// Codigo funcion callback
function callback(Persona) {
    Persona.results.forEach(person => {

        console.log("Nombre: " + person.name.first + " " + person.name.last);
        console.log("Genero: " + person.gender);
        console.log("Pais: " + person.location.country);
        console.log("Estado: " + person.location.state ); 
        console.log("Calle: " + person.location.street.name);
        console.log("Numero: " + person.location.street.number);
        console.log("Codigo postal: " + person.location.postcode);
        console.log("Email: " + person.email);
        console.log("Usuario: " + person.login.username);
        console.log("Password: " + person.login.password);
    })
}

// Fin codigo

// Usar la funcion obtenerPersonaFake(funcionCallback) en donde funcionCallback es una función que recibe el objeto persona extraido
obtenerPersonaFake(callback);
