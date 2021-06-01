numeros = [1, 2, 5, 19, 7, 55, 11, 71, 18, 90]

const divisiveis6 = numero => numero % 2 === 0 && numero % 3 === 0;

let result = numeros.filter(divisiveis6);

console.log (result);

let soma = (somatorio, numbers) => somatorio + numbers;

let resultadoSoma = numeros.reduce(soma, 0);

const exponencial = (x) => {
    console.log(`${x}: ${x ** 2}`);
}

numeros.forEach(exponencial);

const divisiveis2 = num => console.log(num % 2 === 0);

numeros.find(divisiveis2);

const mult5 = mult => console.table(mult % 5 === 0);

console.log('----------------------------------------------------');

numeros.some(mult5);

console.log('----------------------------------------------------');

numeros.every(mult5);

console.log('----------------------------------------------------');

numeros.sort((a, b) => a - b);

console.log(numeros);