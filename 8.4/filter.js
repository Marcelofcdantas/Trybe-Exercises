let data = [81, 8, 19, 16, 20, 30, 47 , 52];
let result = data.filter( x => x > 21 && x < 56);
console.table(result);

let test = data.filter(() => true);
let test2 = data.filter(() => false);
console.table(test);
console.table(test2);
