//Requerir los Modulos Nativos PACTH y FS
const path = require("path");//Trabajo con rutas de archivos y directorios
const fs = require("fs"); //Lectura y Escritura de archivos y carpetas

const rutaJSON = path.resolve(__dirname,"data/tareas.json"); //Declarar la ruta a la carpeta Data con el archivo .JSON
let lista = fs.readFileSync(rutaJSON, { encoding: "utf-8" })//Tomar el contenido del archivo.JSON
const objeto = JSON.parse(lista);//Conversion del String en un Objeto


//Segunda Parte - Funciones

//Leer Json
function leerJson(ruta) {
    let lista = fs.readFileSync(rutaJSON, { encoding: "utf-8" });
    const objeto1 = JSON.parse(lista);
    return objeto1;
}

//Escribir Json
function escribirJson(array) {
    array = JSON.stringify(array);
    //let ruta = path.resolve(__dirname, "data/tareas.json");
    fs.writeFileSync(rutaJSON, array, undefined);
}

//Guardar tarea
function guardarTarea(string, arr) {
    let obj = { titulo: string, estado: "pendiente" };
    arr.push(obj);
    return arr;
}

//Estructura logica Primera y Segunda Parte

if (process.argv[2] === "listar") {
    console.log("Listado de tareas\n------------------");
    objeto.forEach((value, index) => {
        console.log((index + 1) + ". " + value.titulo + " - " + value.estado);
    });
} else if (process.argv[2] == undefined) {
    console.log("Atención - Tienes que pasar una acción\nLas acciones disponibles son: listar y crear");
    console.log("---------------------------------------");
} else if ((process.argv[2].length > 0) && (process.argv[2] !== "crear")) {
    console.log("------------------------------------");
    console.log("No entiendo qué quieres hacer\nLas acciones disponibles son: listar y crear");
    console.log("------------------------------------");
} else if ((process.argv[2] == "crear") && (process.argv[3])) {
    console.log("Nueva tarea creada\n------------------");
    let leo1 = leerJson("data/tareas.json");
    let leo2 = guardarTarea(process.argv[3], leo1);
    escribirJson(leo2);
    console.log(process.argv[3] + " " + "->" + " " + leo2[leo2.length - 1].estado);
} else if (process.argv[2] == "crear") {
    console.log("Error, no ingreso una nueva tarea");
}

