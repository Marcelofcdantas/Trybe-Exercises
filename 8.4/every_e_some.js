let data = [81, 8, 19, 16, 20, 30, 47 , 52];

console.table(data.every(x => x > 6));
console.table(data.every(x => x < 6));
console.table(data.some(x => x > 6));
console.table(data.some(x => x < 6));