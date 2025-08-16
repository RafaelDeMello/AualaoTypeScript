// Tipos Básicos
let age: number = 5;
const firstName: string = "João";
const isValid: boolean = true;
let idk: any = "qualquer coisa";

const ids: number[] = [1, 2, 3];
const names: string[] = ["João", "Maria", "José"];
const booleans: boolean[] = [true, false, true];

// Tuplas

const person: [number, string, boolean] = [1, "João", true];

// Lista de Tuplas

const people: [number, string, boolean][] = [
  [1, "João", true],
  [2, "Maria", false],
  [3, "José", true],
];

// Intersections

const productId: string | number = "123";

// Enun

enum Direction {
    Up = 1,
    Down= 2
}

const direction: Direction = Direction.Up;

// Type Assertions

const productName: any = "Boné";

//let itemId: productName as string;

let itemId = <string>productName;

console.log(direction);

