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

//Template literals
let hello = "hello";
let world = "world";
let epicPhrase = hello + " "+ world;
console.log(epicPhrase);

let epicPhrase2 = `${hello} ${world}`; //esta la podemos usar con template literals en ecmascript 6
console.log(epicPhrase2);
