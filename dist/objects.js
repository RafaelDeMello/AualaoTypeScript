const user = {
    firstName: "jane",
    age: 20,
    email: "jane@gmail.com",
    password: "12345",
    order: [{ productID: "1", price: 200 }],
    register() {
        return "retorna string";
    }
};
const printLog = (message) => { };
printLog(user.password);
const author = {
    age: 2,
    books: ["1"],
    email: "author@gmail.com",
    firstName: "Author",
    order: [],
    register() {
        return "Author registered";
    }
};
const emailUser = {
    email: "felipe@gmail.com",
    firstName: "Felipe",
};
const newAuthor = {
    firstName: "Felipe",
    email: "authorFelipe@gmail.com",
    books: [],
};
const grade = 1;
export {};
//# sourceMappingURL=objects.js.map