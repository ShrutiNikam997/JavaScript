

//Object creation

let Student ={
    name : "Shruti",
    age :21,
    marks : 85
};

console.log(Student.name);
console.log(Student.age);

Student.marks = 90;
console.log(Student.marks);

Student.Grade = 'A';
console.log(Student);

delete Student.age;
console.log(Student);

if("marks" in Student)
{
    console.log("Marks exist in student");
}









