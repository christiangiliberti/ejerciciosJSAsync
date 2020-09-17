
const obtenerPersonaFake = require("./library");

// Usar la funcion obtenerPersonaFake() la cual devuelve la promesa de traer el objeto persona extraido
obtenerPersonaFake().then(person => {
    person.results.forEach(i => {
        console.log("Nombre: " + i.name.first + " " + i.name.last);
        console.log("Genero: " + i.gender);
        console.log("Pais: " + i.location.country);
        console.log("Estado: " + i.location.state); 
        console.log("Calle: " + i.location.street.name);
        console.log("Numero: " + i.location.street.number);
        console.log("Codigo postal: " + i.location.postcode);
        console.log("Email: " + i.email);
        console.log("Usuario: " + i.login.username);
        console.log("Password: " + i.login.password);
    })
});
