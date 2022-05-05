//Object Entries
const data = {
    frontend: "Mauricio",
    backend: "Alberto",
    design: "Kevin"
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

//Object Values

const data1 = {
    frontend: "Mauricio",
    backend: "Alberto",
    design: "Kevin"
}
const values = Object.values(data1);
console.log(values);
console.log(values.length);

//Padding
const string = hello;
console.log(string.padStart(7, "hI"));
console.log(padEnd(12, " ----"));
console.log("food".padEnd(12, "  ----"));

const obj ={
    frontend: "Mauricio",
    backend: "Alberto",
    design: "Kevin", //la coma para no cometer errores.
}

//ASYNC Y AWAIT
const helloWorld = () => {
    return new Promise((resolve, reject) => {
      (false)
        ? setTimeout(() => resolve('Hello World'), 3000)
        : reject(new Error('Test Error'))
    })
  };
  

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
};

helloAsync();

//MANEJO DE ERRORES

const anotherFunction = async () => {
    try {
      const hello = await helloWorld();
      console.log(hello);
    } catch (error) {
      console.log(error);
    }
  };