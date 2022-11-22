//Requerir los Modulos Nativos PACTH y FS
const path = require("path");
const fs = require("fs");

const rutaJSON = path.resolve("data/tareas.json"); //Declarar la ruta a la carpeta Data con el archivo .JSON
let lista = fs.readFileSync(rutaJSON, { encoding: "utf-8" })//Tomar el contenido del archivo.JSON
const objeto = JSON.parse(lista);//Conversion del String en un Objeto

//Estructura logica

if (process.argv[2] == "listar") {
    console.log("Listado de tareas\n------------------");
    objeto.forEach((value,index) => {
        console.log((index + 1) + ". " + value.titulo + " - " + value.estado);
    });
} else if (process.argv[2] == undefined) {
    console.log("Atención - Tienes que pasar una acción\nLas acciones disponibles son: listar");
    console.log("---------------------------------------")
} else if (process.argv[2].length > 0){
    console.log("------------------------------------")
    console.log("No entiendo qué quieres hacer\nLas acciones disponibles son: listar")
    console.log("------------------------------------")
}