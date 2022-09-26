// 1. VARIABLES-------------------------------------------------------------------------


// console.log("Hola Mundo");
// alert("JavaScript funcionando correctamente")


//  127.... dice
// Javascript funcionando correctamente

let variableSinValor = null
console.log(variableSinValor);

let booleano1 = true
let booleano2 = false

const PI = 3.14
console.log(PI);

const TAU = 2*PI
console.log(TAU);

const miNombre = "Sergio"
console.log(miNombre);

const miNumeroFav = 4
console.log(miNumeroFav);

const numeroFlow = 2000
console.log(numeroFlow)

const booleanofalse = false

console.log(miNombre.length);

console.log(typeof miNumeroFav);

console.log("Mi nombre es "+miNombre+" y mi numero fav es "+miNumeroFav);

console.log("Mi profe me obliga a decir que seré un crack en JavaScript :')".toUpperCase());

var crack =  "Hola soy un crack"
console.log(crack.substring(0,5))

const miNumeroFavString = miNumeroFav.toString();
console.log(typeof miNumeroFavString);

const PIentero = 3.141592
let tal = `${(PIentero.toFixed(4))}`;
console.log("El numero simplificado es " + tal);

console.log("La variable PI hasta los 2 primeros decimales es " + PI.toFixed(2));


// 2. ARRAYS-------------------------------------------------------------------------

const arrayVacio = null;
console.log(arrayVacio);

const arrayNumeros = [0,1,2,3,4,5,6,7,8,9];
const arrayNumeros2 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
const arrayNumerosPares = [0,2,4,6,8,10,12,14];
const arrayNumerosNeg = [0,-1,-2,-3,-4,-5,-6,-7,-8,-9];
const holaMundo = ["Hola", "Mundo"];
const loGuardoTodo = ["hola","qué",23,42.33,"tal"];
const arrayDeArrays = [[756,"nombre"],[225,"apellido"],[298,"direccion"]];

console.log("En la variable loGuardoTodo hay " + loGuardoTodo.length + " valores");

loGuardoTodo[5] = "YavaEscrí";
console.log(loGuardoTodo[5]);

console.log(loGuardoTodo[1]);

loGuardoTodo[6] = "Euralio";
console.log(loGuardoTodo[6]);
console.log("En la variable loGuardoTodo ahora hay " + loGuardoTodo.length + " valores");






// 3. OBJETOS -------------------------------------------------------------------------

const Coche = {
    marca : ["BMW","Opel","Cupra","Mercedes"],
    modelo : ["Suv","Berlina","Cabrio","4x4","Descapotable","Monovolumen"],
    matrícula : ["Axx","Bxx","Cxx","Dxx","Exx","Fxx","Gxx","Hxx","Jxx","Kxx","Lxx"],
};

console.log (Coche.marca[1]);

const Casa = {
    codPostal : "46019",
    calle : "c/Colón",
    portal: "1",
    puerta: "4",
};
console.log(Casa.calle);

const FullStackDeveloper = {
    lenguajes : ["Javascript","PHP","Java","Python","Html"],
    proyectos : ["Google","Ferreteria Antonio","Media Markt","Calzados Merce"],
};
console.log(FullStackDeveloper.proyectos[2]);

const Perro = {
    nombre : ["Chloe","Solton","Luna","Teddy","Terry","Tapón"],
    raza : ["pura","cruce","desconocida"],
    color : ["blanco","negro","marrón","gris"],
    edad : ["0 a 2 años","3 a 6 años","7 a 12 años","13 a 18 años","19 o más"],  
};
console.log(Perro.nombre[1]);

const Noticia = {
    titular : ["clickbait","no clickbait"],
    cuerpo : ["0 - 500 palabras","501 - 2000 palabras","> 2000 palabras"],
};
console.log(Noticia.titular[0]);


const Persona = {
    nombre : ["Chloe"],
    apellidos : ["cano"],
    edad : ["25 años"],  
};
console.log(Persona.nombre[1]);

console.log(FullStackDeveloper.lenguajes[0]);

const Portatil = {
    marca : ["lenovo","legion","asus"],
};
console.log(Portatil.marca[1]);


const Concierto = {
    grupos : ["Malatesta","C.Tangana","Hoke"],
};
console.log(Concierto.grupos[0]);

const Led = {
    colores : ["rojo","verde","azul"],
};

const arrayRGB = [Led.colores[0],Led.colores[1],Led.colores[2]];
console.log("RGB significa " + arrayRGB[0] + " "+ arrayRGB[1] +" "+ arrayRGB[2]);


const O_Error = {
    código : ["0001x","404 Not Found"],
};
console.log(O_Error.código[1]);


const Grupo = {
    integrantes : ["Mick Jagger","Keith Richards", "Ron Steward"],
};
const integrantes = Grupo.integrantes;
console.log(integrantes[1]);


const Impresora = {
    tinta : ["rojo","verde","azul"],
};
const nivelesTinta = Impresora.tinta;
console.log("En nivelesTinta tengo "+ nivelesTinta);


const Movil = {
    especificaciones : ["Octa-Core","Quad-Core","Duo-Core"],
};
const especificaciones = Movil.especificaciones;
console.log("En Especificaciones tengo "+especificaciones);

console.log("Cambio la marca " + Portatil.marca[2])
Portatil.marca[2] ="MSI";
console.log( "por la marca " +Portatil.marca[2]);

Concierto.grupos.push("Guns'N'Roses");
console.log(Concierto.grupos);

Concierto.Fecha="14/05/2023";
console.log(Concierto.Fecha);
Concierto.Fecha=new Date();
console.log(Concierto.Fecha);


console.log(Grupo.integrantes);
Grupo.integrantes.pop();
console.log(Grupo.integrantes.length);
console.log(Grupo.integrantes);

