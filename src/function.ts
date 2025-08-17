// Function
interface MathFunc {
  (x: number, y: number): number;
}
const sun: MathFunc = (x: number, y: number): number => {
  return x + y;
}

const value = sun(1, 2);

const log = (message: string): void => {
    console.log(message);
};