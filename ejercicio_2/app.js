
const obtenerChiste = require("./library");

// Usar la funcion obtenerChiste() la cual devuelve la promesa de traer el objeto chiste extraido
obtenerChiste().then(obj=>console.log(obj[0].setup));
obtenerChiste().then(obj=>console.log(obj[0].punchline));