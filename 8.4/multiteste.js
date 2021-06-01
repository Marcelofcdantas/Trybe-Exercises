data = {
    pessoa: [
{
id: 0123,
name: 'john',
idade: 40,
sexo: 'Masculino',
tecnologias:[{frontend: 'CSS',
backend: 'JS',
devOps: 'AWS',
ML: 'TensorFlow'}]
},
{
id: 03,
name: 'jose',
sexo: 'Masculino',
idade: 20,
tecnologias:[{frontend: 'HTML',
backend: 'Pyhton',
devOps: 'Docker',
ML: 'scikitLearn'}]
},
{
id: 14,
name: 'michael',
sexo: 'Masculino',
idade: 25,
tecnologias:[{frontend: 'Javascript',
backend: 'PHP',
devOps: 'Azure',
ML: 'MathPlotLib'}]
},
]
};

const {pessoa} = data.pessoa;

// const {id, name, sexo, idade, tecnologias} = pessoa;

// const {frontend, backend, devOps, ML} = tecnologias;

const idades = ((age) => (age > 30) ? pessoa[name]: `é menor`);

console.log(idades(20));

const names = ((nome) => pessoa.find(nome));

console.log(names('michael'));