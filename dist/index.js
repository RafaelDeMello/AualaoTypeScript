// Tipos Básicos
let age = 5;
const firstName = "João";
const isValid = true;
let idk = "qualquer coisa";
const ids = [1, 2, 3];
const names = ["João", "Maria", "José"];
const booleans = [true, false, true];
// Tuplas
const person = [1, "João", true];
// Lista de Tuplas
const people = [
    [1, "João", true],
    [2, "Maria", false],
    [3, "José", true],
];
// Intersections
const productId = "123";
// Enun
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
})(Direction || (Direction = {}));
const direction = Direction.Up;
// Type Assertions
const productName = "Boné";
//let itemId: productName as string;
let itemId = productName;
console.log(direction);
export {};
//# sourceMappingURL=index.js.map