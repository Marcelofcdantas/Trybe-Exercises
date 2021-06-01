let data = [81, 8, 19, 16, 20, 30, 47 , 52];

console.log(data.reduce((x,y) => x * y));

let datas = ['a' , 'b', 'r', 'i', 'c', 'o'];

console.log(datas.reduce((x,y) => x.concat(y)));
console.log(datas.reduceRight((x,y) => x + y));

let result = data.reduce((x,y) => { 
    return (y > 18) ? (x + y): x;
     }, 0
);

console.log(result);