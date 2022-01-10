"use strict";
// Basic tyoes
let i = 5;
let username = "Maas Mirzaa";
let isPrimary = true;
let x = "Cassim"; // Setting variable with an "any" type which can be assigned any type of value (not recommended)
x = true;
let age;
age = 30;
let ids = [1, 2, 3, 4, 5]; // Defining an array of the type "number"
let arr = [1, 'Name', true]; // Any type array
// Tuple
let user = [1, 'mirzaa', true];
// Tuple Array
let employee;
employee = [
    [1, 'Maas'],
    [2, 'Mirzaa'],
    [3, 'Cassim']
];
// Unions
let pId; // Can be assiged values of type "string" and "number"
pId = 'maas';
pId = 11;
// eNums
let Direction1 = {
    Up: 1,
    Down: 2,
    Left: 3,
    Right: 4
};
console.log(Direction1.Left);
let Direction2 = {
    Up: 'Up',
    Down: 'Down',
    Left: 'Left',
    Right: 'Right'
};
console.log(Direction2.Left);
const person1 = {
    id: 1,
    name: 'Maas Mirzaa'
};
// Type Assertion
let cid = 1;
let customerId = cid; // Explicitly changing the type of the "any" type to "number"
// let customerId = cid as number 
customerId = 1; // a string will give an error
// Functions
function addNum(x, y) {
    return x + y;
}
// Void type (Function which does not have a return value)
function log(message) {
    console.log(message);
}
const person2 = {
    id: 1,
    name: 'Maas Mirzaa'
};
const add = (x, y) => x + y;
const subt = (x, y) => x - y;
class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    // Method inside a class
    register() {
        return `${this.name} is now registered`;
    }
}
const student1 = new Student(1, 'Mike');
const student2 = new Student(2, 'Tyson');
console.log(student1, student2);
// Subclass (Class extending another class) 
class Employee extends Student {
    constructor(id, name, position) {
        super(id, name);
        // Dont need to assign again but need to use 'super' function to pass other values
        this.postion = position;
    }
}
const emp1 = new Employee(1, 'Maas', 'Developer');
console.log(emp1);
console.log(emp1.register());
// Generics
function getArray(items) {
    // Generic function, using <T>, we can define the types for each requirement
    return new Array().concat(items);
}
// Using the same function, but define the types when using it
let numArray = getArray([1, 2, 3, 4, 5]);
let strArray = getArray(['brad', 'mike', 'maas']);
numArray.push(1); // Success
// strArray.push(1) // Fails because 1 is not a string
