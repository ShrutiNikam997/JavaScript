/*
Select only active users
 From them, select users with age ≥ 18
 Extract only their names
 Count how many such users exist
 */
let users = [
  { name: "Amit", age: 22, isActive: true },
  { name: "Neha", age: 19, isActive: false },
  { name: "Rahul", age: 25, isActive: true },
  { name: "Sneha", age: 17, isActive: true },
  { name: "Vikram", age: 30, isActive: false }
];

let Logics = users
.filter( user => user.isActive === true)
.filter(user => user.age >= 18)
.map(user => user.name)

console.log(Logics);
console.log("Count :"+Logics.length);


    


