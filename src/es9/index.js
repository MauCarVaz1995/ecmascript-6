//OPERADOR DE REPOSO
const obj = {
    name: 'Mauricio',
    age: 16,
    country: 'MX'
  };
  
  let { country, ...all } = obj;
  console.log(all);
  
  const obj = {
    name: 'Mauricio',
    age: 32
  }
  
  const obj1 = {
    ...obj,
    country: 'MX'
  }
  
  console.log(obj1);

  //PROMISE.FINALLY
  
  const helloWorld = () => {
    return new Promise((resolve, reject) => {
      (true)
        ? setTimeout(() => resolve('Hello World'), 3000)
        : reject(new Error('Test Error'))
    });
  };
  
  helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizo'))
  
  
    const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
    const match = regexData.exec('2022-05-05');
    const year = match[1]
    const month = match[2]
    const day = match[3]
  
    console.log(year, month, day);