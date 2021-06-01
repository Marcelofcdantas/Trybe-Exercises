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

// questão 1 - FIND
function authorBornIn1947() {
  return books.find((book) => book.author.birthYear === 1947).author.name;
}

// console.log(authorBornIn1947());

// questão 2 - forEach
function smallerName() {
    let nameBook;
    books.forEach((book) => {
        if (!nameBook || book.name.length < nameBook.length){
        nameBook = book.name;
    }
});
    return nameBook;
}
  
  //console.log(smallerName());

  // questão 3 - find
function getNamedBook() {
  return books.find((book) => book.name.length === 26).name;
}

// console.log(getNamedBook());

// questão 4 - sort
function booksOrderedByReleaseYearDesc() {
  return books.sort((bookA, bookB) => bookB.releaseYear - bookA.releaseYear);
}
// console.log(booksOrderedByReleaseYearDesc());

// questão 5 - every
function everyoneWasBornOnSecXX() {
  return books.every((book) => book.birthYear > 1900 && book.birthYear <= 2000);
}
// console.log(everyoneWasBornOnSecXX());

// questão 6 - some
function someBookWasReleaseOnThe80s() {
  return books.some((book) => book.releaseYear >= 1980 && book.releaseYear < 1990);
}

console.log(someBookWasReleaseOnThe80s());

// questão 7 - 
function authorUnique() {
 return books.every((book) => 
   !books.some((bookSome) => (bookSome.author.birthYear === book.author.birthYear) && (bookSome.author.name !== book.author.name))
  );
}

console.log(authorUnique());

const expectedResult3 = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin',
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991,
};

const expectedResult4 = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: { name: 'George R. R. Martin', birthYear: 1948 },
    releaseYear: 1991,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: { name: 'Stephen King', birthYear: 1947 },
    releaseYear: 1986,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: { name: 'Frank Herbert', birthYear: 1920 },
    releaseYear: 1965,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928,
  },
];

const expectedResult5 = false;

const expectedResult6 = true;

const expectedResult7 = false;

assert.strictEqual(authorBornIn1947(), 'Stephen King');

assert.strictEqual(smallerName(), 'Duna');

assert.deepStrictEqual(getNamedBook(), expectedResult3);

assert.deepStrictEqual(booksOrderedByReleaseYearDesc(), expectedResult4);

assert.strictEqual(everyoneWasBornOnSecXX(), expectedResult5);

assert.strictEqual(someBookWasReleaseOnThe80s(), expectedResult6);

assert.strictEqual(authorUnique(), expectedResult7);
