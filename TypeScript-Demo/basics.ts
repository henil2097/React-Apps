// Primitives: number, string, boolean
// More complex types: arrays, object,
// Function types, parameters

// Primitives

let age: number;
age = 12;

let userName: string;
userName = "Henil";

let isLearner: boolean;
isLearner = true;

// More complex types

// array
let hobbies: string[];
hobbies = ["Sports", "Cooking"];

// object
let person: {
  name: string;
  age: number;
};
person = {
  name: "Henil",
  age: 25,
};

// array of objects
let people: {
  name: string;
  age: number;
}[];

// Type inference

let course = "React - The Complete Guide"; // As course is initialized with a string value, typescript already assign type as strign to course
course = 1234; // Now assigning course to a number gives an error. This is called as type inference.

// Union type: Allowing multiple types to a same variable
let courseLearning: string | number = "React - The Complete Guide";
courseLearning = 1234; // Here it wont give an error from type inference because union type as number is also allowed

// Type Alias or user defined types. It is a feature provided by typescript.
// So, that redundant declaration of type structure is not needed.

type Address = {
  lineAddress: string;
  city: string;
  state: string;
  pincode: number;
};

// Now this Address type can be used anywhere where ever it is needed
let EmployeeAddresses: Address[];
EmployeeAddresses = [
  {
    lineAddress: "Line 1",
    city: "city 1",
    state: "state 1",
    pincode: 12345,
  },
  {
    lineAddress: "Line 2",
    city: "city 2",
    state: "state 2",
    pincode: 12345,
  },
];

// Functions & types
// We can set type to parameters in function as well.
// Type inference to a return type is done automatically by the usage of parameters usage and its types
// If we have to specify explicitly, We can provide to it after function braces
function add(a: number, b: number): number {
  return a + b;
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
