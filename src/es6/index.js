//VALORES PREDEFINIDOS EN LAS FUNCIONES

//Antes
function newFuntion(name, age, country){
   var name = name || "Mau";
   var age = age || 26 ;
   var country = country || "Mex";
   console.log(name, age, country);
}

//es6
function newFunction2(name="Mau", age=26, country ="Mex"){
    console.log(name, age, country)
};

newFunction2();
newFunction2("Kevin", 30, "Mex")

//CONCATENACIÓN

//antes
let hello = "hello";
let world = "world";
let epicPhrase = hello + " "+ world;
console.log(epicPhrase);

//template literals en ecmascript 6
let epicPhrase2 = `${hello} ${world}`;  
console.log(epicPhrase2);

//MULTILINEA

//antes
let lorem = "Quiero escribir una frase épica \n" 
+ "otra frase épica que necesitamos."

//es6
let lorem2 = `otra frase epica que necesitamos
ahora es otra frase épica.
`
console.log(lorem);
console.log(lorem2);

//DESESTRUCTURACIÓN DE ELEMENTOS

//Antes
let person = {
    "nombre": "Mauricio",
    "age": 26,
    "country": "MX"
}

console.log(person.nombre, person.age);

//es6
let {nombre, age,} = person;
console.log( nombre, age);

//UNIÓN DE ELEMENTOS

let team1 =["Mauricio", "Kevin", "Ricardo"];
let team2 =["Daniela", "Paola", "Yolanda"];

let education = ["David", ...team1, ...team2]; //es6

console.log(education);


//DIFERENCIA ENTRE VAR Y LET
{
    var globalVar = "Global Var";
}
{
    let globalLet = "Global Let";
    console.log(globalLet);
}

console.log(globalVar);

//CONSTANTE QUE NO CAMBIA
const a = "b";
a = "c";

