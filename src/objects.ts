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
    register(): string;
};

const user: User = {
    firstName: "jane",
    age: 20,
    email: "jane@gmail.com",
    password: "12345",
    order: [{ productID: "1", price: 200 }],
    register() {
        return "retorna string";
    }
}

  const printLog = (message: string)  =>  {}

  printLog(user.password!)

// Unions

type Author = {
    books: string[];
}

const author: Author & User = {
    age: 2,
    books: ["1"],
    email: "author@gmail.com",
    firstName: "Author",
    order: [],
    register() {
        return "Author registered";
    }
};

// Interfaces

interface UserInterface {
    firstName: string;
    email?: string;
}

const emailUser: UserInterface = {
    email: "felipe@gmail.com",
    firstName: "Felipe",
};

interface AuthorInterface{
    books: string[];
}

const newAuthor: UserInterface & AuthorInterface = {
    firstName: "Felipe",
    email: "authorFelipe@gmail.com",
    books: [],
};

type Grade = number | string;
const grade: Grade = 1;
