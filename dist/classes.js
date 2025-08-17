class Person {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    sayMyName() {
        return this.name;
    }
}
//Mesma coisa que acima
class PersonRefact {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
}
class Employee extends Person {
    constructor(id, name, age) {
        super(id, name, age);
    }
    whoAmi() {
        return this.name;
    }
}
const felipe = new Person(1, "Felipe", 21);
export {};
//# sourceMappingURL=classes.js.map