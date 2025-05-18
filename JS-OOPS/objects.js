
//factory function
function identitymaker(name,age){
    const person={
   name:name,
   age:age,
   talk(){
   console.log(`hi i m ${name} and my age is ${age}`);
   },
};
   return person;
}
let p1=identitymaker("sunny",12);
let p2=identitymaker("happy",13);
let p3=identitymaker("riya",12);

console.log(p1.age);
p2.age;
p1.talk();
p3.talk();

// using "this " keyword
// constructors>> doesn't return anything
function Person(name,age){
 this.name =name;
 this.age=age;
console.log(this);//particular instance
}
Person.prototype.walk=function(){
  console.log(`hi i am ${this.name}`);
}
let P1= new Person("sunny",12);
let P2= new Person("ria",13);

// P2.walk();

//classes>>constructors+methods
class human{
    constructor (name,age){
    this.name =name;
    this.age=age;
}
    talk(){
    console.log(`hello my name is ${this.name}, and my age is ${this.age}`);
   }

}
let first= new human("sunny",12);
 let second= new human("ria",13);