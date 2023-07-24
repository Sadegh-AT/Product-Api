class Person {
  constructor(name, family, age) {
    this.name = name;
    this.family = family;
    this.age = age;
  }

  printInfo() {
    console.log(`Name: ${this.name}, Family: ${this.family}, Age: ${this.age}`);
  }
}
class User extends Person {
  constructor(name, family, age, isActive, role) {
    super(name, family, age);
    this.isActive = isActive;
    this.role = role;
  }

  printInfo() {
    console.log(
      `Name: ${this.name}, Family: ${this.family}, Age: ${this.age}, IsActive: ${this.isActive}, Role: ${this.role}`
    );
  }
}

const person1 = new Person("Sadegh", "Ghasemi", 18);

person1.printInfo();

const user = new User("Ahmad", "Alizade", 18, true, "Admin");
user.printInfo();
