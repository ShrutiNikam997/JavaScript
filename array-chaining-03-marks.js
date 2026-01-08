let num = [100,72,53,84,55,66,71,98,90,70];

let Marks = num

.filter(function(n){
    
        return n >= 60;
    
})

.map(function(n){
    return n+5;
})

.reduce(function(sum, n){
    return sum+n;

},0);

console.log(Marks);