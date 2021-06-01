const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];



// exercicio 1 - map
function formatedBookNames() {
return books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`)
};

console.log(formatedBookNames());

// exercicio 2
  function nameAndAge() {
    return books.map((book) => ({author:book.author.name, age: book.releaseYear - book.author.birthYear}))
    .sort((a,b) =>
    (a.age - b.age));
  }
  
  console.log(nameAndAge());

// exercicio 3 - filter
function fantasyOrScienceFiction() {
    return books.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica')
  }
  
  console.log(fantasyOrScienceFiction());

// exercicio 4
function oldBooks() {
    const currentYear = new Date().getFullYear();
    return books.filter((books) => ((currentYear - books.releaseYear) > 60))
    .sort((age1, age2) => age1.releaseYear - age2.releaseYear);
  }

  console.log(oldBooks());

  // exercicio 5
  function fantasyOrScienceFictionAuthors() {
   return books.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica')
    .map((book) => book.author.name)
    .sort();
  }

  console.log(fantasyOrScienceFictionAuthors());

// exercicio 6
function oldBooks2() {
    const date = new Date().getFullYear();
    return books
      .filter((book) => ((date - book.releaseYear) > 60))
      .map((book) => book.name);
  }

  console.log(oldBooks2());

// exercicio 7
function authorWith3DotsOnName() {
    return books
    .find((book) => book.author.name.split(' ').filter((word) => word.endsWith('.')).length === 3).name;
  }

  console.log(authorWith3DotsOnName());

const expectedResult = [
    'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
    'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
    'Fundação - Ficção Científica - Isaac Asimov',
    'Duna - Ficção Científica - Frank Herbert',
    'A Coisa - Terror - Stephen King',
    'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
  ];

  const expectedResult2 = [
    {
      age: 31,
      author: 'Isaac Asimov',
    },
    {
      age: 38,
      author: 'H. P. Lovecraft',
    },
    {
      age: 39,
      author: 'Stephen King',
    },
    {
      age: 43,
      author: 'George R. R. Martin',
    },
    {
      age: 45,
      author: 'Frank Herbert',
    },
    {
      age: 62,
      author: 'J. R. R. Tolkien',
    },
  ];

const expectedResult3 = [
    {
       id: 1,
       name: 'As Crônicas de Gelo e Fogo',
       genre: 'Fantasia',
       author: {
         name: 'George R. R. Martin',
         birthYear: 1948,
       },
       releaseYear: 1991,
     },
     {
       id: 2,
       name: 'O Senhor dos Anéis',
       genre: 'Fantasia',
       author: {
         name: 'J. R. R. Tolkien',
         birthYear: 1892,
       },
       releaseYear: 1954,
     },
     {
       id: 3,
       name: 'Fundação',
       genre: 'Ficção Científica',
       author: {
         name: 'Isaac Asimov',
         birthYear: 1920,
       },
       releaseYear: 1951,
     },
     {
       id: 4,
       name: 'Duna',
       genre: 'Ficção Científica',
       author: {
         name: 'Frank Herbert',
         birthYear: 1920,
       },
       releaseYear: 1965,
     },
   ];

   const expectedResult4 = [
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: { name: 'H. P. Lovecraft', birthYear: 1890 },
      releaseYear: 1928,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: { name: 'Isaac Asimov', birthYear: 1920 },
      releaseYear: 1951,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
      releaseYear: 1954,
    },
  ];

  const expectedResult5 = [
    'Frank Herbert',
    'George R. R. Martin',
    'Isaac Asimov',
    'J. R. R. Tolkien',
  ];

  const expectedResult6 = [
    'O Senhor dos Anéis',
    'Fundação',
    'O Chamado de Cthulhu',
  ];

  const expectedResult7 = 'O Senhor dos Anéis';

  assert.deepStrictEqual(formatedBookNames(), expectedResult);

assert.deepStrictEqual(nameAndAge(), expectedResult2);

assert.deepStrictEqual(fantasyOrScienceFiction(), expectedResult3);

assert.deepStrictEqual(oldBooks(), expectedResult4);

assert.deepStrictEqual(fantasyOrScienceFictionAuthors(), expectedResult5);

assert.deepStrictEqual(oldBooks2(), expectedResult6);

assert.deepStrictEqual(authorWith3DotsOnName(), expectedResult7);
