
//Problem 1 — get square and cube of elements in array
// map()
let nums=[1,2,3,4,5];
console.log(nums);

let squared = nums.map(function(n){
    return n*n;
});

console.log(squared);

let cube = nums.map(function(n){
    return n*n*n;
});

console.log(cube);

//Problem 2 — Get even numbers
//filter()

let even = nums.filter(function(n){
    if(n % 2 == 0)
    {
        return n;
    }
});
console.log(even);


//Problem 3 — Sum of all numbers
//reduce()

let sum = nums.reduce(function(total, n){

return total+n;
    

}, 0 );
console.log(sum);












