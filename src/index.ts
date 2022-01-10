// Basic tyoes
let i: number = 5
let username: string = "Maas Mirzaa"
let isPrimary: boolean = true

let x: any = "Mirzaa" // Setting variable with an "any" type which can be assigned any type of value (not recommended)
x = true

let age: number
age = 30

let ids: number[] = [1, 2, 3, 4, 5] // Defining an array of the type "number"
let arr: any[] = [1, 'Name', true] // Any type array

// Tuple
let user: [number, string, boolean] = [1, 'mirzaa', true]

// Tuple Array
let employee: [number, string][]
employee = [
  [1, 'Maas'],
  [2, 'Mirzaa'],
  [3, 'David']
]

// Unions
let pId: string | number // Can be assiged values of type "string" and "number"
pId = 'mm1'
pId = 11

// eNums
let Direction1 = {
  Up : 1,
  Down : 2,
  Left : 3,
  Right : 4
}

console.log(Direction1.Left)

let Direction2 = {
  Up : 'Up',
  Down : 'Down',
  Left : 'Left',
  Right : 'Right'
}

console.log(Direction2.Left)

// Objects
type PersonTypes = { // Types can be used with Unions but Interfaces cannot
  id: number,
  name: string
}

const person1: PersonTypes = {
  id: 1,
  name: 'Maas Mirzaa'
}

// Type Assertion
let cid: any = 1
let customerId = <number>cid // Explicitly changing the type of the "any" type to "number"
// let customerId = cid as number 

customerId = 1 // a string will give an error

// Functions
function addNum(x: number, y: number):number { // Define types for the param values as well as the return value (outside of the precenteses)
  return x + y
}

// Void type (Function which does not have a return value)
function log(message: string | number): void {
  console.log(message)
}

// Interfaces
interface PersonInterface {
  readonly id: number // readonly value tyoe
  name: string
  age?: number // Not required
}

const person2: PersonInterface = {
  id: 1,
  name: 'Maas Mirzaa'
}

// Interfaces with Functions
interface MathFunc {
  (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const subt: MathFunc = (x: number, y: number): number => x - y

// Classes
interface StudentInterface {
  id: number
  name: string
  register(): string // Define method and type will be the return value's type
}

class Student implements StudentInterface { // Use 'implements' to assign types to the class
  id: number
  name: string

  constructor(id: number, name: string) {
    this.id = id
    this.name = name
  }

  // Method inside a class
  register () {
    return `${this.name} is now registered`
  }
}

const student1 = new Student(1, 'Mike')
const student2 = new Student(2, 'Tyson')

console.log(student1, student2)

// Subclass (Class extending another class) 
class Employee extends Student { // Class using Student class details
  postion: string

  constructor(id: number, name: string, position: string) {
    super(id, name) 
    // Dont need to assign again but need to use 'super' function to pass other values
    this.postion = position
  }
}

const emp1 = new Employee(1, 'Maas', 'Developer')
console.log(emp1)
console.log(emp1.register())


// Generics
function getArray<T>(items: T[]): T[] { 
  // Generic function, using <T>, we can define the types for each requirement
  return new Array().concat(items)
}

// Using the same function, but define the types when using it
let numArray = getArray<number>([1, 2, 3, 4, 5]) 
let strArray = getArray<string>(['brad', 'mike', 'maas'])

numArray.push(1) // Success
// strArray.push(1) // Fails because 1 is not a string
