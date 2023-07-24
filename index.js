class User {
  #name;
  constructor(name) {
    this.#name = name;
  }

  get Name() {
    return this.#name;
  }
  set Name(name) {
    if (!name) {
      console.log("Error");
    } else {
      this.#name = name;
    }
  }
}

const user1 = new User("Sadegh");

console.log(user1.getName);
