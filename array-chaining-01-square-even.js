
let num=[1,2,3,4,5,6,7,8,9,10];

let SumEven = num.reduce(function(sum , n){

    if(n % 2 == 0)
    {
        return sum + n;
    }
},0);
console.log(SumEven);











