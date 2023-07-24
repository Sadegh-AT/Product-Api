class User {
  #name;
  constructor(name) {
    this.#setName(name);
  }

  #setName(name) {
    this.#name = name;
  }
  getName() {
    return this.#name;
  }
  static printInfo() {
    console.log(this.name);
  }
}

const user1 = new User("Sadegh");

User.printInfo();
console.log(user1.getName());
