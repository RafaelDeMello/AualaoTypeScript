// Type
type Order = {
    productID: string;
    price: number;
}
type User = {
    firstName: string;
    age: number;
    email?: string;
    password?: string;
    order?: Order[];
};

const user: User = {
    firstName: "jane",
    age: 20,
    email: "jane@gmail.com",
    password: "12345",
    order: [{ productID: "1", price: 200 }]
}

  const printLog = (message: string)  =>  {}

  printLog(user.password!)

  