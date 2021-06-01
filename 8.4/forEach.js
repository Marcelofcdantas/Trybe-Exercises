let data = [0,1,2,3,4,5]; 
sum = 0;
data.forEach(value => { 
    if (value % 2 === 1) {
        sum += value;
};});
console.log(sum);