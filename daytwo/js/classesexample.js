/**
 * In JS classes are templates for JS objects
 * keyword class is used to create a class
 * Always add a method named constructor()
 */

/**
 * Below created a class named Person with two initial properties "name" and age
 * A JS class is not an object
 * It is a template for JS objects
 */
class Person{
    /**
     * Its a special method
     * It has to have the exact name "constructor"
     * It is executed automatically when a new object is created
     * It is used to initialize object properties
     * 
     */
    constructor(name,age){
        this.name= name;
        this.age= age;
    }
}

//Using a class or create an object of class Person

const person1 = new Person("Raj",23);//person1 is an object
const person2 = new Person("Simran",22);//person2 is an object

class Employee{
    //If we don't define a constructor method, JS will add an empty constructor method
    year=2000;
    age(){
        const date = new Date();
        return date.getFullYear()-this.year;
    }   
}

const emp1 = new Employee();
console.log(emp1.age());

class EmployeeAnother{
    constructor(name,year){
        this.name=name;
        this.year=year;
    }

    //class methods
    age(){
        const date = new Date();
        return date.getFullYear()-this.year;
    } 

    //class methods
    dob(d,m){
        return d+"/"+m+"/"+this.year;
    }
}

const empAnother1 = new EmployeeAnother("Raj",2001);
console.log(empAnother1.age());
console.log(empAnother1.dob(15,10));

