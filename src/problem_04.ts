/**
 * Create a TypeScript class called Person that has private properties name and age, and a public method getDetails that returns a string with the person's name and age. Use parameter properties to define and initialize the properties in the constructor.

Create a TypeScript class called Student that extends the Person class and has an additional private property grade. Define a public method getGrade that returns the student's grade. Use the super keyword to call the constructor of the Person class and initialize the name and age properties.
 */
// class Person{
//     private name:string;
//     private age:number;
//     constructor(name:string,age:number){
//         this.name=name;
//         this.age=age;
//     }
//     public getDetails():string{
//         return `${this.name} is ${this.age} years old`;
//     }
// }

// class Student extends Person{
    
//     constructor(name:string,age:number,private grade:number)
//     {
//         super(name,age);
//     }
//     getGrade():string{
//         return `his mark is:${this.grade}`;
//     }
// }

// const person = new Person("abul",18);
// console.log(person.getDetails());

// const student = new Student("kashem",19,60);
// console.log(student.getDetails());
// console.log(student.getGrade());