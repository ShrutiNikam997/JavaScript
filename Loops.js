//print nuumbers from 1 to 10
let i = 1;
for( i = 1; i<=10; i++)
{
    console.log(i);
}

//print even numbers from 1 to 20
let a = 1;
for(i = 1; i<=20; i++)
{
    if(i%2 == 0)
    {
        console.log(i);
    }
}

//sum of numbers from 1 to 5
let numbers = [1,2,3,4,5];
let b  = 0;
let sum = 0;
for(b = 0 ; b<numbers.length; b++)
{
    sum = sum+numbers[b];
}
console.log(sum);