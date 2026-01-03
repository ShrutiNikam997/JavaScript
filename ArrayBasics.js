let array = [11,12,13,14,15,16,17,18,19,20];

//print all elements of array
console.log(array);

//Find Largest in array
let largest = array[0];
let i = 0;

for(i = 0; i<array.length; i++)
{
    if(array[i]>largest)
    {
        largest = array[i];
    }
}
console.log("largest element is:"+largest);



//count even in array
 let count = 0;
for(i = 0; i<array.length; i++)
{
   
    if(array[i] % 2 == 0)
    {
        count++;
    }
}
console.log("total even numbers are:"+count);